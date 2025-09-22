import { Response } from "express";

export const responseHandler = (
  res: Response,
  statusCode: number,
  message: string,
  data: Record<string, any> = {}
) => {
  const status = statusCode < 300;

  res.status(statusCode).json({
    status,
    message,
    data,
  });
};
