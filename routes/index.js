import express from 'express'; 
import userRouter from './users.js'
//EL enrutador principal va a llamar a todos los recursos y los va a enrutar


let router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

//Obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users',userRouter)

export default router






//router.use acepta como mínimo dos parámetros para poder enrutar correctamente
//1- la palabra con la que se va a enrutar
//2- el enrutador que tengo que conectar 