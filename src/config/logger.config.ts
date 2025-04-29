import path from "path";
import { type TransformableInfo } from "logform";
import winston, { type Logger } from "winston";
import { readEnv } from "./readEnv.config";

const logPath = readEnv("LOG_PATH", "./logs") as string;

const logger: Logger = winston.createLogger({
  level: readEnv("LOG_LEVEL", "info") as string,
  format: winston.format.combine(winston.format.splat(), winston.format.timestamp(), winston.format.json()),
  defaultMeta: { service: "test-order-app" },
  transports: [
    new winston.transports.File({
      filename: path.join(logPath, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: path.join(logPath, "info.log"),
      level: "info",
    }),
    new winston.transports.File({
      filename: path.join(logPath, "debug.log"),
      level: "debug",
    }),
    new winston.transports.File({
      filename: path.join(logPath, "all_combined.log"),
    }),
  ],
});

if (process.env.NODE_ENV !== "test") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf((info: TransformableInfo) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
    })
  );
}

logger.silent = readEnv("LOG_SILENT") === "true";
if (logger.silent) {
  console.log("Logger is disabled");
}

export default logger;
