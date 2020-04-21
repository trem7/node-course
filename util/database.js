const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://adam-user:R9a24GGhUniIJc7t@cluster0-xpdco.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
      console.log('Connected');
      _db = client.db();
      callback();
    })
    .catch(err => { 
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
