const jwt = require('jsonwebtoken');
const config = require('config');

async function authentication(req,res,next){
//Get the token from headers
const token = req.header('x-auth-token');

//check if not token
if(!token) return res.status(401).json({msg: 'No token , Unauthorization denied'})

try{
    let decode = jwt.verify(token,config.get('jwt_secret'))
    //decode have the payload 
    req.user = decode.user;
    next();
}
catch(err){
    return res.status(404).json({msg: 'Unauthorized Access'})
}
}

module.exports = authentication;