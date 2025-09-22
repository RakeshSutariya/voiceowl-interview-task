
import { messageString, responseHandler, statusCode } from "../utils";
import { Request, Response, NextFunction } from "express";

export const ValidationMiddleware = (schema: any) => (req:Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const { error, value } = schema.validate(body);
    if (!error) {
      req.body = value;
      next();
    } else {
      responseHandler(res, statusCode._BAD_REQUEST, error?.message.replace(/\\|"/g, "") || messageString.server._VALIDATION_ERROR, {});
    }
  } catch (err: any) {
    responseHandler(res, statusCode._BAD_REQUEST, err.message, err);
  }
};