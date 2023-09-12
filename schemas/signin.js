import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().email().min(8).max(35).messages({
        'string.min': 'mail must have at least 8 characters please!',
        'string.email': 'mail must be a valid email address!',
        'string.max': 'mail must be less than 36 characters please! ',
        'any.required': 'mail is required', //para cuando no se envia el dato 
        'string.empty': 'mail is required' // para cuando se envia VACIO
    }),

    password:joi.string().required().min(4).max(20).messages({
        'string.min': 'password must have at least 8 characters please!',
        'string.max': 'password must be less than 21 characters please! ',
        'any.required': 'password is required', //para cuando no se envia el dato 
        'string.empty': 'password is required' // para cuando se envia VACIO
    })
})


export default signinSchema