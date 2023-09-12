import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': 'name must have at least 3 characters please!',
        'string.max': 'name must be less than 21 characters please! ',
        'any.required': 'name is required', //para cuando no se envia el dato 
        'string.empty': 'name is required' // para cuando se envia VACIO
    }),
   
    mail: joi.string().required().min(3).max(35).messages({
        'string.min': 'name must have at least 3 characters please!',
        'string.max': 'name must be less than 36 characters please! ',
        'any.required': 'name is required', //para cuando no se envia el dato 
        'string.empty': 'name is required' // para cuando se envia VACIO
    }),
    
    password:joi.string().required().min(4).max(20).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        'string.min': 'name must have at least 4 characters please!',
        'string.max': 'name must be less than 21 characters please! ',
        'string.alphanum' : 'Must have alphanumeric characters please',
        'string.required': 'Password is required',
        'string.empty': 'Password is required' // para cuando se envia VACIO
    }),
    
    country: joi.string().required().min(2).max(20).messages({
        'string.min': 'name must have at least 3 characters please!',
        'string.max': 'name must be less than 21 characters please! ',
        'string.required': 'Country is required'
    }),
    
    photo: joi.string().min(5).max(300).messages({
        'string.min': 'name must have at least 100 characters please!',
        'string.max': 'name must be less than 151 characters please! ',
 
    }),
    
    lastName: joi.string().min(3).max(20).empty('').messages({
        'string.min': 'last Name must have at least 3 characters please!',
        'string.max': 'last Name must be less than 21 characters please! ',
    })
})


export default registerSchema