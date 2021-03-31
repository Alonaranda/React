const { response } = require('express');
const Evento = require('../models/Evento');


const getEventos =  async (req, res = response) => {
    //console.log(req.body);

    const eventos = await Evento.find().populate('user', 'name');
    
    res.json({
        ok: true,
        eventos
    });
}



const crearEvento = async (req, res = response) => {
    //console.log(req.body);
    const evento = new Evento(req.body);
    //console.log(evento);

    try {
        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Algo anda mal...'
        });
    }
}



const actualizarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;
    //console.log(req.body);

    try {

        const evento = await Evento.findById(eventoId);
        console.log(evento);
        if(!eventoId){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe, no es un id valido'
            });
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tienes permiso de actualizar el evento'
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid,
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true});
        res.json({
            ok: true,
            evento: eventoActualizado
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Algo anda mal en la actualizacion ...'
        });
    }
}



const eliminarEvento = async (req, res = response) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);
        if(!eventoId){
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe, no es un id valido'
            });
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tienes permiso de actualizar el evento'
            });
        }

        await Evento.findByIdAndDelete(eventoId);
        res.json({
            ok: true,
            msg: "Borrado"
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Algo anda mal en el borrado...'
        });
    }

}




module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}