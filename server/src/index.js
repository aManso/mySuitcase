const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

require('./db/database');

// Settings
// es como crear una variable, y ahora puedo acceder a la variable port desde cualquier parte de la app
app.set('port', process.env.port || 3000);

// Middleware
// morgan is a lib that help us by printing info about the navigation
app.use(morgan('dev'));
// allow client to send data in JSON format
app.use(express.json());
// to enable cors
const allowedOrigins = ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:8080', 'http://localhost:8080', 'http://mysuitcase.com'];

app.use(cors(allowedOrigins));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));
app.use('/api/suitcase', require('./routes/suitcase'));

// Connecting
app.listen(app.get('port'), () => {
    console.log('listening on port ...' + app.get('port'))
});