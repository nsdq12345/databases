var models = require('../models');
var mysql = require('../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((err, result) => {
        if (err) {
          throw err;
        }
        console.log("RESULTS:", result);

        var newArray = [];
        for (var i = 0; i < result.length; i++) {

          var newObj = {username: result[i].userName, text: result[i].messages, roomname: result[i].roomName};
          newArray.push(newObj);

        }


        res.writeHead(200);
        res.end(JSON.stringify(newArray));
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

