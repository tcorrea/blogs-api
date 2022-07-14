const Joi = require('joi');

const categorySchema = {
  store: (body) => {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const { error } = schema.validate(body);
    if (error) {
      const e = new Error(error.message);
      e.name = 'BadRequest';
      throw e;
    }
  },
};

module.exports = categorySchema;
