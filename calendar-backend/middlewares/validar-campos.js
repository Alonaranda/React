//Es una funcion 
const { response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = (req, res = response, next) => {

    //Ya existen valiaciones en express --> Express validator
    const errores = validationResult(req);
    console.log(errores);
    if(!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();
}


module.exports = {
    validarCampos
}


