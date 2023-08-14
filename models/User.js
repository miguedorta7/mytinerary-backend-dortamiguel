import {model,Schema} from "mongoose";

//Lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos, es decir LA COLECCIÓN (conjunto de documentos/modelos de datos).
let collection = 'users'

//Lo siguiente es definir el Squema de datos del modelo, es decir EL MOLDE/LA FORMA que tiene que tener mi modelo de datos.
let schema = new Schema({
    name: {type:String, required:true},//por default todos los datos son opcionales (required: false)
    lastName:{type:String},      //Si es opcional NO NECESITO agregar el required.
    mail:{type:String, required: true, unique:true}, //esta propiedad "unique" no me permite registrar 2 veces el mismo email.
    photo:{type:String, default: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},  //default vuelve al parametro OPCIONAL, en caso que el cliente mande la foto, la usa, sino usa la foto default (DARTH VADER)
    password:{type:String,required:true},
    country:{type:String,required:true}
})

//Para crear un modelo de datos utilizo el método model pasando como parametros DONDE tengo que crear los documentos y con que FORMA.
let User = model(collection,schema)
export default User


