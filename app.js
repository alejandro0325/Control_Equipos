//console.log("Bienvenidosss!!");
const express=require("express");
const mongo=require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();



var corsOptions = {
    origin: "http://localhost:3002/"
  };
  
  app.use(cors());
  //app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Bienvenidos a la Aplicacion de Control de Equipos." });
  });
  
  // set port, listen for requests
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}.`);
  });





const ruta = require("./routes/tipoEquipoRuta");
const ruta2 = require("./routes/estadoEquipoRuta");
const ruta3 = require("./routes/usuarioRuta");
const ruta4 = require("./routes/marcaRuta");
const ruta5 = require("./routes/inventarioRuta");




app.use(express.json());
app.use("/tipos", ruta);
app.use("/estados", ruta2);
app.use("/usuarios", ruta3);
app.use("/marcas", ruta4);
app.use("/inventario", ruta5);




