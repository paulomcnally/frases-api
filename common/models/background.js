module.exports = function(Background) {

  Background.random = function(cb) {
    var query = 'SELECT url FROM background ORDER BY RANDOM() LIMIT 1';
    Background.dataSource.connector.query(query, function(err, rows) {
      cb(null, rows[0]);
    });
  };

  var randomOptions = {
    returns: {
      type: 'object',
      root: true
    }
  };

  Background.remoteMethod('random', randomOptions);
};
