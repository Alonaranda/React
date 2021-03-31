/*
    Rutas de Usuarios || Auth
    host + /api/auth + ...
 */
//Status --> https://www.restapitutorial.com/httpstatuscodes.html

const { Router } = require('express');
const { check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();



//Ruta de registro - POST
router.post(
    '/new', 
    [// Middlewares
        check('name', 'Nombre es obligatorio').not().isEmpty(),
        check('email', 'Correo es obligatorio').isEmail(),
        check('password', 'Password es obligatorio, mayor a 6 char').isLength({min: 6}),
        validarCampos
    ], 
    crearUsuario
);

//Ruta de login - POST
router.post(
    '/', 
    [
        check('email', 'Correo es obligatorio').isEmail(),
        check('password', 'Password es obligatorio, mayor a 6 char').isLength({min: 6}),
        validarCampos
    ], 
    loginUsuario
);

//Ruta de validacion de token - GET
router.get('/renew', validarJWT , revalidarToken);


//Exportaciones
module.exports = router;