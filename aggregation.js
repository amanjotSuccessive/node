var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  simplePipeline(db, function() {
    db.close();
  });
});

var simplePipeline = function(db, callback) {
  var collection = db.collection( 'restaurants' );
  collection.aggregate( 
      [ { '$match': { "borough": "Bronx" } },
        { '$unwind': '$categories'},
        { '$group': { '_id': "$categories", 'Bronx restaurants': { '$sum': 1 } } }		
      ],	  
	  function(err, results) {
        assert.equal(err, null);

        console.log(results)
        callback(results);
      }
  );
}