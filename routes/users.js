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


















//router.metodo('/',funcion)
//método http que: para crear un POST, para actualizar es PUT/PATCH y para eliminar es DELETE.
//funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame al endpoint de manera que
//cada que realizo una petición POST, se creara un recurso
//cada que realizo una petición GET, se leeran recursos
//cada que realizo una petición PUT/PATCH se actualizaran recursos
//cada que realizo una petición DELETE   se eliminara un recurso

//req: es el objeto donde el cliente me manda MUCHOS DATOS importantes acerca de la petición.
//las propiedades de req MAS IMPORTANTES SON:
//BODY: objeto que generalmente se envia a travez de formularios
//PARAMS (paramétros): suelen ser estaticos como el id de una ciudad a buscar por ejemplo.
//QUERIES (consultas): son opcionales y nos indican algunas consultas/filtros/modos de ver la info/ de la pagina.etc
