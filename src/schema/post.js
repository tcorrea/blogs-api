const Joi = require('joi');

// TODO: refatorar codigo repetido
const postSchema = {
  store: (body) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      categoryIds: Joi.required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error('Some required fields are missing');
      e.name = 'BadRequest';
      throw e;
    }
  },
  update: (body) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error('Some required fields are missing');
      e.name = 'BadRequest';
      throw e;
    }
  },
};

module.exports = postSchema;
