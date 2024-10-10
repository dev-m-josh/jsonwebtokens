
const jwt = require('jsonwebtoken');
const joi = require('joi');
const { validateLogin } = require('../validator');

//token get
function getToken(req, res){
let user = req.body;
if (user.user_name === undefined) {
    res.json({
        success: false,
        message: "No details passed!"
    });
    return;
};

//validate
const {error, value} = validateLogin(user);
if (error) {
    console.log(error);
    res.send(error.details);
    return;
};

    jwt.sign({user}, 'secretkey', (err, token)=>{
        if (err) {
            res.json({
                message: "Error occured!"
            });
        } else {
            res.json({
                user,
                token
             });
        };
    });
};      


//verify token
function verifyToken(req, res, next) {
    try {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if header is undefined
    if (bearerHeader) {
        //split and get the token only
        let bearerToken = bearerHeader.split(' ')[1];
        let veriToken = jwt.verify(bearerToken, 'secretkey');
        req.token = veriToken;
        next()
    } else {
        next({
            success: false,
            status: 401,
            message: "Error occured!"
        });
    };
    } catch (error) {
        res.sendStatus(401);
    };
};

//error handling
function errorHandler (err, req, res, next) {
    res.sendStatus(err.status);
  };

module.exports = { getToken, verifyToken, errorHandler };