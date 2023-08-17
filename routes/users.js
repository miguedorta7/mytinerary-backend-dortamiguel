import express from "express";
import create from "../controllers/users/create.js";
import read from "../controllers/users/read.js";
import readOne from "../controllers/users/readOne.js";
import update from "../controllers/users/update.js";
import destroy from "../controllers/users/destroy.js";

//El enrutador principal va a llamar a todos los recursos y los va
let router = express.Router();

//Create

router.post('/',create);

router.get('/', read)

router.get('/:user_id', readOne) //Nombre del parametro puede ser cualquiera, pero aca en el enrutador como en el controlador, los debo llamar de la misma forma, aca y en controller.
//EJEMPLO: aca y en controller id
//EJEMPLO: aca y en controller user_id

router.put('/:u_id', update)

router.delete('/:id',destroy)

export default router;



