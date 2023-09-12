export  default (req,res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'user logged in',
            response:{
             token: req.token, //TOKEN + DATOS DEL USUARIO
             user: req.user //TOKEN + DATOS DEL USUARIO
        }
        })
    } catch (error) {
        next(error)
    }
}