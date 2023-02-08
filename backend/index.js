const express = require("express");
const cors = require("cors");
const appointmentController = require("./controller/appointment.controller");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ extended: true, limit: "1mb" }));

/**
 * Appointments
 */
app.get("/", appointmentController.getAllAppointments());
app.get("/:id", appointmentController.getAppointment());
app.post("/", appointmentController.createAppointment());


/**
 * Starting point of the application.
 */
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
