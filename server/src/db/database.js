const mongoose = require('mongoose');
const uri = "mongodb+srv://amanso:1234@cluster0-k8dok.mongodb.net/suitcasedb?retryWrites=true&w=majority";

const db = mongoose.connect(uri)
    .then(db => console.debug('connected to ' + db))
    .catch(err => console.log('there was an error'));

console.log(mongoose.connections.length);

// Si quisieramos establecer mas conexiones a mongoose para otras bases de datos usamos createConnection
// mongoose.createConnection('mongodb+srv://amanso:1234@cluster0-k8dok.mongodb.net/suitcase_recomendations?retryWrites=true&w=majority');
// console.log(mongoose.connections.length);
// console.log(mongoose.connections);

module.exports = mongoose;
