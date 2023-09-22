const studentModel = require('../models/student');
//se trae la const studentModel para que encuentre la estructura de datos que necesita

//se definen los metodos que vamos a usar en nuestro aplicativo

//listar todos los estudiantes
exports.getAllStudents = async () => {
    //find() retorna todos los documentos
    const students = await studentModel.find();
    return students;
};

//listar por id de estudiante
exports.getAllStudentById = async (id) => {
    const students = await studentModel.find(id);
    return students;
};

//crea un estudiante
exports.createStudent = async (student) => {
    const newStudent = new studentModel(student);
    await newStudent.save();
    return newStudent;
};

//actualizar datos a un estudiante
exports.updateStudent = async (id,student) => {
    const updateStudent = await studentModel.findByIdAndUpdate(id, student);
    return updateStudent
};

//eliminar un estudiante por id
exports.deleteStudents = async (id) => {
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    return deleteStudent;
};