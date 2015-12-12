module.exports = function(Background) {

  Background.random = function(cb) {
    var query = 'SELECT id FROM background ORDER BY RANDOM() LIMIT 1';
    Background.dataSource.connector.query(query, cb);
  };

  var randomOptions = {
    returns: {
      arg: 'greeting',
      type: 'string'
    }
  };

  Background.remoteMethod('random', randomOptions);
};
