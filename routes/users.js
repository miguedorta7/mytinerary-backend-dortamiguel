import express from 'express';
 //El enrutador principal va a llamar a todos los recursos y los va
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with all user');
});

export default router
 