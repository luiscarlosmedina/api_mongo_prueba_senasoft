const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
definimos el esquema de los estudiantes
teniendo en cuenta que el id se genera automaticamente en mongoDB
y los campos obligatorios son el email, el nombre y el apellido
los demas son opcionales
*/

const studentSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    firtsName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birtDate: {
        type: Date,
        require: false
    },
    phone: {
        type: String,
        require: false
    },
    address: {
        type: String,
        require: false
    }
});

module.exports = mongoose.model("Student", studentSchema);