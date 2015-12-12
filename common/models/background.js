module.exports = function(Background) {

  Background.random = function(cb) {
    var query = 'SELECT url FROM background ORDER BY RANDOM() LIMIT 1';
    Background.dataSource.connector.query(query, function(err, rows) {
      cb(null, rows[0].url);
    });
  };

  var randomOptions = {
    returns: {
      type: 'string',
      root: true
    }
  };

  Background.remoteMethod('random', randomOptions);
};
