const jsonServer = require("json-server");
const tv4 = require("tv4");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const createAppointmentSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",

  type: "object",
  properties: {
    name: {
      type: "string",
    },
    dateStart: {
      type: "string",
    },
    dateEnd: {
      type: "string",
    },
    description: {
      type: "string",
    },
    location: {
      type: "string",
    },
  },
  required: ["name", "dateStart"],
};

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.path === "/appointments" && req.method === "POST") {
    if (!tv4.validate(req.body, createAppointmentSchema)) {
      console.log("received invalid body");
      res.sendStatus(400);
      return;
    }
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("Backend started on http://localhost:3000");
});
