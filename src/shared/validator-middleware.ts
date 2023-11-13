import express from "express";
import Joi from "joi";
import { isMongoId } from "class-validator";
import config from "../config";

type property = "params" | "body";

export function validatorHandler(schema: Joi.Schema, property: property) {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }
    next();
  };
}

export function isMongoIdValidatorHandler(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { id } = req.params;
  if (!id || !isMongoId(id)) {
    throw new Error("Id must be a valid MongoId");
  }

  next();
}

export function adminPasswordHandler(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { adminPassword } = req.body;
  if (adminPassword !== config.adminPassword) {
    throw new Error("Error on register AP");
  }

  next();
}
