var models = require('../models');
var mysql = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {
      // if (res)
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POSTING1');

      var userName = req.body.username;
      var message = req.body.message;
      var roomName = req.body.roomname;
      console.log(message);
      mysql.query(`INSERT INTO messages (userName, messages, roomName) VALUES('${userName}', '${message}', '${roomName}');`);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      var userName = req.body.username;
      console.log(req.body);
      console.log(userName);
      var query = `INSERT INTO users (userName) VALUES('${userName}');`;
      console.log("Q:", query);
      console.log('M:',mysql);
      console.log(mysql.state);
      mysql.query(query);
    }
  }
};

