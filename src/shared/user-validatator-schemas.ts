import Joi from "joi";

const nick = Joi.string()
  .regex(/^[A-Za-z\s]+$/)
  .min(3);
const password = Joi.string().min(6);

const loginUserSchema = Joi.object({
  nick: nick.required(),
  password: password.required(),
});

const createUserSchema = loginUserSchema.keys({
  adminPassword: Joi.string().required(),
});

const updateUserSchema = Joi.object({ nick, password });

export { createUserSchema, updateUserSchema, loginUserSchema };
