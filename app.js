//llamo los driver que necesito
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes =  require('./routes/studentRoutes');
const courseRoutes =  require('./routes/courseRoutes');

//defino la constante de iniciacion del server
const app = express();

//convierto a formato json
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

//conectar a mongo 
mongoose.connect("mongodb+srv://sena:udz2zZx2OLuogub5@clusterprueba.evjdkct.mongodb.net/Sena2023DB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("conectado a mongo"))
    .catch((err) => {
        console.log("error al conectarce a mongo"),
        console.log(err);
    });

//defino el puerto de escucha
app.listen(3001, () => {
    console.log("server started at port 3001");
});

module.exports = app;