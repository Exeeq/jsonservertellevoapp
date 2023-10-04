const jsonserver = require("json-server"); //SE IMPORTA JSON SERVER
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults();
const port = process.env.port || 3001; //SE PUEDE USAR CUALQUIER PUERTO

server.use(middlewares);
server.use(router);
server.listen(port);