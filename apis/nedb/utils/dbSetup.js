//const Datastore = require('nedb');
import Datastore from 'nedb';


//Creating local db
const db = new Datastore({filename: "./store.db", autoload: true});


//module.exports = database;

export default db;