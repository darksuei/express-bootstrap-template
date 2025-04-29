import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.config";

export const asyncHandler =
  <T>(fn: (req: Request, res: Response<T>, next: NextFunction) => Promise<Response<T> | undefined>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((err) => {
      logger.error(JSON.stringify(err));
      next(err);
    });
