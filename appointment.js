let incrementedId = 1;

module.exports = class Appointment {
  /**
   *
   * @param {string} name title/name of appointment
   * @param {Date} dateStart start of appointment
   * @param {Date} dateEnd end of appointment
   * @param {string} description
   * @param {string} location
   */
  constructor(name, dateStart, dateEnd, description, location) {
    if (!name) {
      throw new Error("name must not be undefined");
    }
    if (!dateStart) {
      throw new Error("dateStart must not be undefined");
    }

    this.name = name;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.description = description;
    this.location = location;
    this.id = incrementedId++;
  }
};
