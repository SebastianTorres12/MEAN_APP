const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    detalle:{
        type: String,
        required: true,
    },
    fecha_ini:{
        type: Date,
        required: true,
    },
    fecha_fin:{
        type: Date,
        required: true,
    },
    fecha_creacion:{
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Tarea', TareaSchema);
