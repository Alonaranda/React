/*
    Rutas de Eventos || Events
    host + /api/events + ...
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const router = Router();

//Middleware para todas las routers de aqui hacia abajo
router.use(validarJWT);

//Obtener Evento
router.get('/', getEventos );

//Obtener Evento
router.post(
    '/', 
    [
        check('title', 'Titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom(isDate),
        check('end', 'Fecha fin es obligatorio').custom(isDate),
        validarCampos
    ], 
    crearEvento 
);

//Obtener Evento
router.put(
    '/:id',
    [
        check('title', 'Titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom(isDate),
        check('end', 'Fecha fin es obligatorio').custom(isDate),
        validarCampos
    ],
     actualizarEvento 
);

//Obtener Evento
router.delete('/:id', eliminarEvento );

module.exports = router;