const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://adam-user:R9a24GGhUniIJc7t@cluster0-xpdco.mongodb.net/test?retryWrites=true&w=majority')
    .then(result => {
      console.log('Connected');
      callback(result);
    })
    .catch(err => { console.log(err) });
};

module.exports = mongoConnect;
