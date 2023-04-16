const express=require("express");
const {Obtenerusuarios,addusuarios,updateusuarios,deleteusuarios}= require("../controller/usuariosControlador")

const ruta=express.Router();


ruta.get("/", Obtenerusuarios);
ruta.post("/", addusuarios);
ruta.put("/:id", updateusuarios);
ruta.delete("/:id",deleteusuarios);


module.exports=ruta;
