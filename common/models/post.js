module.exports = function(Post) {

  Post.feed = function(skip, cb) {
    skip = skip || 0;

    var query = "SELECT url, type FROM post WHERE type = '" + type + "' ORDER BY RANDOM() LIMIT 10 OFFSET " + skip;
    Post.dataSource.connector.query(query, function(err, rows) {
      cb(null, rows);
    });
  };

  var feedOptions = {
    accepts: {
      arg: 'type',
      type: 'string'
    },
    http: {
        verb: 'get',
        source: 'query'
    },
    returns: {
      type: 'object',
      root: true
    }
  };

  Post.remoteMethod('feed', feedOptions);

};
