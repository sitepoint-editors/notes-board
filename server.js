'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Path = require('path');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Models = require('./lib/models/');

const server = new Hapi.Server();

server.connection({ port: Settings.port });

server.register([
  require('vision'),
  require('inert')
], (err) => {
  Hoek.assert(!err, err);

  server.views({
    engines: { pug: require('pug') },
    path: Path.join(__dirname, 'lib/views'),
    compileOptions: {
      pretty: false
    },
    isCached: Settings.env === 'production'
  });

  // Add routes
  server.route(Routes);
});

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});
