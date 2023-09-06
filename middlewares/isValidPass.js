import {hashSync} from 'bcrypt'

export default (req,res,next) => {
    try {
        let hashPassword = hashSync(req.body.Password,10)
        req.body.Password = hashPassword
        return next()
    } catch (error) {
        return next(error)
    }
}