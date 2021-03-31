//Generador de tokens
const jwt = require('jsonwebtoken');

//Como parametros lo que usara nuestro payload, uid, name,...
const generarJWT = (uid, name) => {

    return new Promise((resolve, reject) => {
        const payload = {uid, name};

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {expiresIn: '3hr'}, (err, token) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        });
    });
}


module.exports = {
    generarJWT
}