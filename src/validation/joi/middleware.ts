import { Request, Response, NextFunction } from "express";
import StatusCodes from "http-status-codes";
const { BAD_REQUEST } = StatusCodes;

export const validateQuery = (schema: Record<string, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.query;
    const { error } = schema.validate(data);
    if (error) {
      return res.status(BAD_REQUEST);
    } else {
      return next();
    }
  };
};
