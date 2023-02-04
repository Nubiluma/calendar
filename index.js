const express = require("express");
const Appointment = require("./appointment");
const app = express();
const port = 3000;
const appointments = [
  new Appointment(
    "Zahnarzt",
    new Date(),
    new Date(),
    "Halt n Zahnarzttermin",
    "Entenhausen"
  ),
];
app.use(express.json({ extended: true, limit: "1mb" }));

app.get("/", (_, res) => {
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

app.post("/", (req, res) => {
  try {
    const appointment = new Appointment(
      req.body.name,
      req.body.dateStart,
      req.body.dateEnd,
      req.body.description,
      req.body.location
    );
    appointments.push(appointment);
    res.sendStatus(201);
  } catch (error) {
    res.sendStatus(400);
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
