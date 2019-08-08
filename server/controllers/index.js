var models = require('../models');
var mysql = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res, next) {

      models.messages.get((err, result) => {
        if (err) {
          throw err;
        }
        res.end('done');
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, (err, result) => {
        if (err) {
          throw err;
        }
        res.end('done');
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req, (err, result) => {
        if (err) {
          throw err;
        }
        res.end('done');
      });
    }
  }
};

