class Appointment {
  /**
   *
   * @param {string} name title/name of appointment
   * @param {Date} dateStart start of appointment
   * @param {Date} dateEnd end of appointment
   * @param {string} description
   * @param {string} location
   * @param {string} id
   */
  constructor(name, dateStart, dateEnd, description, location, id) {
    this.name = name;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.description = description;
    this.location = location;
    this.id = id;
  }
}

/****************/

const express = require("express");
const app = express();
const port = 3000;
const appointments = [
  new Appointment(
    "Zahnarzt",
    new Date(),
    new Date(),
    "Halt n Zahnarzttermin",
    "Eckertsberger-Str. 99",
    "0"
  ),
];

app.get("/", (req, res) => {
  res.json(appointments);
});

app.get("/:id", (req, res) => {
  const requestedObject = appointments.find((e) => e.id === req.params.id);
  if (requestedObject) {
    res.json(requestedObject);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
