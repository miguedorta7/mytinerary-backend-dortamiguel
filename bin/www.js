//IMPORTS
import app from '../app.js';                   //Configuración del servidor
import debug from 'debug';                  //Modulo de debugeo (cada vez q ocurre un error te avisa en que linea tenes el error)
import http from 'http';                    //Modulo para crear servidores HTTP (protocolo de transferencia de hipertexto)
import {connect} from 'mongoose';           //Método para conectarme a la base de datos.

//PORT
//process.env guarda las configuraciones de las variables de entorno
//(varibles muy delicadas que son necesarias proteger se configuran con un modulo que se llama DOTENV)
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
//START SERVING
let server = http.createServer(app);            //Creo un servidor normalizado con http
let ready = ()=> {
  console.log("Server ready on port " + port)
  connect(process.env.LINK_DB)                        //El método connecte devuelve una promesa: trabajar con then-catch o async-await
      .then(()=> console.log("Database connected"))     
      .catch(error=>console.log(error))
}
server.listen(port,ready);                //con el método listen ESCUCHO el puerto para empiece a funcionar(a levantarse)

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
