import Joi from "joi";

const name = Joi.string()
  // .regex(/^[A-Za-z\s]+$/)
  .min(3);

const tone = Joi.string();
const youtubeUrl = Joi.string();
const style = Joi.string().valid("jubilo", "reflexion");
const observations = Joi.string();

const createSongSchema = Joi.object({
  name: name.required(),
  tone: tone.required(),
  youtubeUrl: youtubeUrl.required(),
  style: style.required(),
  observations: observations.required(),
});

const updateSongSchema = Joi.object({ name, tone, youtubeUrl, style, observations });

export { createSongSchema, updateSongSchema };
