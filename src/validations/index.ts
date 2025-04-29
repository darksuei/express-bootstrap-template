import { ApiError } from "../middlewares/error";
import * as z from "zod";
import httpStatus from "http-status";
import logger from "../config/logger.config";

export function validateRequest<T>(schema: z.ZodType<T>, payload: object) {
  try {
    schema.parse(payload);
    return payload as z.infer<typeof schema>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    logger.error("Validation error: %o", e);
    throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, e.message ?? "Validation error");
  }
}
