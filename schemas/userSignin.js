import Joi from "joi"

const schema = Joi.object({
    mail: Joi
        .string()
        .required()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages(
            {
                'string.empty': 'The mail cannot be empty',
                'any.required': 'A mail is required',
                'string.email': 'A valid mail is necessary'
            }
        ),
    password: Joi
        .string()
        .required()
        .messages(
            {
                'string.empty': 'The password cannot be empty',
                'any.required': 'A password is required',
            }
        )
    
})

export default schema