const express=require("express");
const {ObtenerMarcas,addMarcas,updateMarcas,deleteDatosTipo}= require("../controller/marcasControlador")

const ruta=express.Router();


ruta.get("/", ObtenerMarcas);
ruta.post("/", addMarcas);
ruta.put("/:id", updateMarcas);
ruta.delete("/:id",deleteDatosTipo);


module.exports=ruta;