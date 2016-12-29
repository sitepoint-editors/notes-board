'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.Note
    .findAll({
      order: [['date', 'DESC']]
    })
    .then((result) => {
      reply.view('home', {
        data: {
          notes: result
        },
        page: 'Home—Notes Board',
        description: 'Welcome to my Notes Board'
      });
    });
};
