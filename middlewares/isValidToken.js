import jwt from 'jsonwebtoken';

export default (req,res,next) => {
   try {
       //esta funcion depende de 3 parametros: 
    let token = jwt.sign(
        {mail:req.user.mail},    //1) objeto a convertir en token
        process.env.SECRET_KEY, //2)palabra que sirve de llave para tokenizar
        {expiresIn: 60*60*24*7}  //3)fecha de expiración en segundos
    )
        req.token = token
        //console.log(req.token)
        return next()
   } catch (error) {
      return next(error)
   } 
}