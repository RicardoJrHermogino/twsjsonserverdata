const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Add CORS middleware
server.use(cors());
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000; // Use environment variable PORT

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
