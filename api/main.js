const { app } = require('./modules/app/app.module');
const UserRouter = require('./modules/router/user.router');
const AnimalRouter = require('./modules/router/animal.router');
const db= require('./modules/db');

async function main() {
  app.listen(process.env.PORT || 8081);
  UserRouter('/api/user', app);
  AnimalRouter('/api/animal', app);
}

module.exports = { app, main,  db };
