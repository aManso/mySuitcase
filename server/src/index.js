const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Settings
// es como crear una variable, y ahora puedo acceder a la variable port desde cualquier parte de la app
app.set('port', process.env.port || 3000);

// Middleware
// morgan is a lib that help us by printing info about the navigation
app.use(morgan('dev'));
// allow client to send data in JSON format
app.use(express.json());
// to enable cors
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));

// Connecting
app.listen(app.get('port'), () => {
    console.log('listening on port ...' + app.get('port'))
});