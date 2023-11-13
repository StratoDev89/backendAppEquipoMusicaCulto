import Joi from "joi";

const name = Joi.string();

const text = Joi.string();

const createVerseSchema = Joi.object({
  name: name.required(),
  text: text.required(),
});

const updateVerseSchema = Joi.object({ name, text });

export { createVerseSchema, updateVerseSchema };
