const User = require('../lib/model/user_model');

const createUser = async(req, res) => {
    await User.create({
        email: "rajesh@gmail.com",
        password: "password123",
    });
    res.send({message: 'User Created', user: null});
};

module.exports = { createUser };