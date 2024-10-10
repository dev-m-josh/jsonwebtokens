
const joi = require('joi')

const validator = (schema) => (payload) => schema.validate(payload, {abortEarly: false});
    
const loginSchema = joi.object({
    user_name: joi.string().required(),
    user_email: joi.string().email().required(),
    user_password: joi.string().min(8).max(16).required()
});

let validateLogin = validator(loginSchema);
module.exports = {validateLogin};