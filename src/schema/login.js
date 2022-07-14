const Joi = require('joi');

const loginSchema = {
  login: (body) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error('Some required fields are missing');
      e.name = 'BadRequest';
      throw e;
    }
  },
};

module.exports = loginSchema;
