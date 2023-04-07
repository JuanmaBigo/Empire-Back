import Joi from "joi"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages({
            'string.min':'The name must be at least 3 characters long',
            'string.empty':'The name field cannot be empty',
            'any.required': 'A name is required'
        }),
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages({
            'string.empty':'The email cannot be empty',
            'any.required': 'An email is required',
            'string.email' : 'A valid email is necessary'
        }),
    password: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'The password must be at least 8 characters long',
                'string.max': 'The password cannot exceed 50 characters',
                'string.empty': 'The password field cannot be empty',
                'any.required': 'A password is required',
            }
        ),
})

export default schema