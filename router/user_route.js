const express = require('express');
const router = express.Router(); 

const { createUser } = require('../controller/user_controller');

router.get('/create', createUser); 

module.exports = router;