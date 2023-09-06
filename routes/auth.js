import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPass from "../middlewares/isValidPass.js";

let authRouter = Router() 
//Register requiere de Middelwares para VALIDAR/VERIFICAR/AUTENTICAR/AUTORIZAR/ETC
    //Validar datos con joi
    //Validar que la cuenta NO existe para que no haya RE-REGISTRO
    //hashear la contraseña

authRouter.post('/register',validator(registerSchema),existsUser,isValidPass,register,)

export default authRouter