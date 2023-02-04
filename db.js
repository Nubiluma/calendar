const Appointment = require("./appointment");

const appointments = [
  new Appointment(
    "Zahnarzt",
    new Date(),
    new Date(),
    "Halt n Zahnarzttermin",
    "Entenhausen"
  ),
];

function add(appointment) {
  appointments.push(appointment);
}

function getAll() {
  return [...appointments];
}

function get(id) {
  return appointments.find((e) => e.id === id);
}

module.exports = {
  add,
  getAll,
  get,
};
