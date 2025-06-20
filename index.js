const express = require('express');
const morgan = require('morgan');
const { createUser } = require('./controller/user_controller');
require('dotenv').config();
require('./lib/dbConnect');

const app = express();

// Middleware
app.use(morgan('dev'));
app.get('/',(req, res)=> {
    res.send('hello.');
});
// Routes
app.get('/user', createUser); // Fixed route definition

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







 
  