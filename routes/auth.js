import { Router } from "express";
import passport from "../middlewares/passport.js";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import notExistUser from "../middlewares/notExistUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";

import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import signinSchema from "../schemas/signin.js";
import token from "../controllers/auth/token.js";
import singout from "../controllers/auth/singout.js";


let authRouter = Router();
//Register requiere de Middelwares para VALIDAR/VERIFICAR/AUTENTICAR/AUTORIZAR/ETC
//Validar datos con joi
//Validar que la cuenta NO existe para que no haya RE-REGISTRO
//hashear la contraseña

authRouter.post(
  "/register",
  validator(registerSchema),
  existsUser,
  isValidPass,
  register
);
authRouter.post(
  "/signin",
  validator(signinSchema),
  notExistUser,
  isPassOk,
  isValidToken,
  signin
);
authRouter.post(
  "/token",
  //middelware para destokenizar el token (debe recibir un token y convertirlo en datos del usuario)
  passport.authenticate("jwt", { session: false }),
  //middelware para generar un nuevo token (se puede usar el mismo que para login)
  isValidToken,
  token
);

authRouter.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  singout
);

export default authRouter;

