const Tarea = require('../models/tarea');

exports.crearTarea = async (req, res) => {
    try {
        let tarea;
        
        // Crear nueva tarea
        tarea = new Tarea(req.body);
        await tarea.save();
        res.send(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json({ tareas }); 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarTarea = async (req, res) => {
    try {
        const { nombre, detalle, fecha_ini, fecha_fin } = req.body;
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({ msg: 'No existe la tarea' });
        }

        tarea.nombre = nombre;
        tarea.detalle = detalle;
        tarea.fecha_ini = fecha_ini;
        tarea.fecha_fin = fecha_fin;

        tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, tarea, { new: true });
        res.json({ tarea });


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({ msg: 'No existe la tarea' });
        }

        res.json({ tarea });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTarea = async (req, res) => {
    try {
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({ msg: 'No existe la tarea' });
        }

        await Tarea.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'Tarea eliminada' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}