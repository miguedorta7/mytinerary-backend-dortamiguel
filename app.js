//IMPORTS
import 'dotenv/config.js'                       //Importo UNICAMENTE la configuración de las variables de entorno
import __dirname from './utils.js';             //Importo la configuración de la ubicación del servidor (antes, con commons.js venia pre-configurada)

//var createError = require('http-errors');
import createError from 'http-errors';          //Crear errores
//var express = require('express');
import express from 'express';                  //Provee metodos y propiedades para levantar servidores
//var path = require('path');
import path from 'path';                        //Para conocer la ubicación de nuestro servidor

//var cookieParser = require('cookie-parser');  //Modulo que se usa para manejo de cookies.(no lo utilizaremos!)

//var logger = require('morgan');
import logger from 'morgan'                     //Se utiliza para registrar cada una de las peticiones.      
//var indexRouter = require('./routes/index');  //Solo vamos a configurar las rutas del enrutador de back principal
import indexRouter from './routes/index.js'     //este enrutador va a llamar a TODOS los otros recursos (cities, itineraries,users)
import cors from 'cors'



let app = express();                            //Ejecutando el modulo express: CREO UNA APP DE BACKEND (SERVIDOR)

// VIEW ENGINE SETUP
//SET es el método necesario para Setear (configurar) algo (motor de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWEARES (funciones)
// USE es el método necesario para obligar a mi aplicación a que use la función CADA VEZ que se realiza una SOLICITUD (petición)
app.use(logger('dev'));                                    //Obligo al servidor a registrar una petición con el modulo de logger 
app.use(express.json());                                   //Obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));          //Obligo al servidor a leer params/queries
//app.use(cookieParser());                                    
app.use(express.static(path.join(__dirname, 'public')));   //Obligo al servidor a usar los archivos estáticos de la carpeta public  
app.use(cors())


//ROUTER
app.use('/api', indexRouter);                                 //Obligo al servidor a que use las rutas del enrutador principal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
