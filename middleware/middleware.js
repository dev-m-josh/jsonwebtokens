
const jwt = require('jsonwebtoken');

// const user = {
//     id: 1,
//     userName: "jonny",
//     email: "jonny2@gmail.com"
// };

//token get
function getToken(req, res){
    let user = req.body;
    jwt.sign({user}, 'secretkey', (err, token)=>{
        if (err) {
            res.json({
                message: "Error occured!"
            })
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
        res.sendStatus(403)
    };
    } catch (error) {
        res.sendStatus(401)
    };
};

//error handling
function errorHandler (err, req, res, next) {
    res.sendStatus(500)
    res.render('error', { error: err })
  }

module.exports = { getToken, verifyToken, errorHandler }