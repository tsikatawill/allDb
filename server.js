const jsonServer = require("json-server");
const server = jsonServer.create();
const reouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(PORT);
