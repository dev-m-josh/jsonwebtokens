
const jwt = require('jsonwebtoken');

const user = {
    id: 1,
    userName: "jonny",
    email: "jonny2@gmail.com"
}

//token get
function getToken(req, res){

    jwt.sign({user}, 'secretkey', (err, token)=>{
        res.json({
           token
        });
    });
};

//verify token
function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //check if header is undefined
    if (bearerHeader) {
        //split and get the token only
        let bearerToken = bearerHeader.split(' ')[1];
        //set token
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403)
    };
};



module.exports = { getToken, verifyToken }