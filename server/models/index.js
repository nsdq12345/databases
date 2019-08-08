var db = require('../db');
var request = require('request');

module.exports = {
  messages: {
    get: function (callback) {

    }, // a function which produces all the messages
    post: function (req, callback) {
      var userName = req.body.username;
      var message = req.body.message;
      message = message.toString().replace("'", "\\'");
      var roomName = req.body.roomname;
      var query = `INSERT INTO messages (userName, messages, roomName) VALUES('${userName}', '${message}', '${roomName}');`;
      db.query(query, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, callback) {
      var userName = req.body.username;
      var query = `INSERT INTO users (userName) VALUES('${userName}');`;
      db.query(query, callback);
    }
  }
};

