const db = require("../db");
const Appointment = require("../appointment");

/**
 * Get every appointment from the database.
 */
function getAllAppointments() {
  return (_, res) => {
    res.json(db.getAll());
  }
}

/**
 * Get appointment from the database.
 */
function getAppointment() {
  return (req, res) => {
    const requestedObject = db.get(req.params.id);
    if (requestedObject) {
      res.json(requestedObject);
    } else {
      res.sendStatus(404);
    }
  }
}

/**
 * Create a new appointment.
 */
function createAppointment() {
  return (req, res) => {
    try {
      const appointment = new Appointment(
        req.body.name,
        req.body.dateStart,
        req.body.dateEnd,
        req.body.description,
        req.body.location
      );
      db.add(appointment);
      res.setHeader("Location", `/${appointment.id}`).sendStatus(201);
    } catch (error) {
      res.sendStatus(400);
      console.error(error);
    }
  }
}



module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment
}