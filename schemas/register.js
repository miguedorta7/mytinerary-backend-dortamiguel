import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': 'name must have at least 3 characters please!',
        'string.max': 'name must be less than 21 characters please! ',
        'any.required': 'name is required', //para cuando no se envia el dato 
        'string.empty': 'name is required' // para cuando se envia VACIO
    }),
    mail: joi.string().required(),
    password:joi.string().required(),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).empty('').messages({
        'string.min': 'last Name must have at least 3 characters please!',
        'string.max': 'last Name must be less than 21 characters please! ',
    })
})


export default registerSchema