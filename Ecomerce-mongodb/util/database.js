const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

 let _db;

const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://cornelia247:DAS6ZdafNP5OZRKL@cluster0.jlem2.mongodb.net/shop?retryWrites=true&w=majority')
.then( client => {
    console.log('Succesfully Connnected to Mongodb Database!');
    _db = client.db();
    callback();
})
.catch( err => {
    console.log(err);
    throw err
});
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw 'No database Found!';

};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;