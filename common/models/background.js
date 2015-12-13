module.exports = function(Background) {

  Background.random = function(type, cb) {
    var query = "SELECT url FROM background WHERE type = '" + type + "' ORDER BY RANDOM() LIMIT 1";
    Background.dataSource.connector.query(query, function(err, rows) {
      cb(null, rows[0]);
    });
  };

  var randomOptions = {
    accepts: {
      arg: 'type',
      type: 'string'
    },
    returns: {
      type: 'object',
      root: true
    }
  };

  Background.remoteMethod('random', randomOptions);
};
