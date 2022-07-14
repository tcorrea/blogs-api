const Joi = require('joi');

const userSchema = {
  store: (body) => {
    const schema = Joi.object({
      displayName: Joi.string().min(8).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      image: Joi.string(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error(error.message);
      e.name = 'BadRequest';
      throw e;
    }
  },
};

module.exports = userSchema;
