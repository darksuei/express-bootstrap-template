import dotenv from "dotenv";
import path from "path";

export function configureEnvironment(): void {
  if (process.env.NODE_ENV === "production") {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.production"),
      override: true,
    });
  } else if (process.env.NODE_ENV === "test") {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env.test"),
      override: true,
    });
  } else {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env"),
      override: true,
    });
  }
}
configureEnvironment();

export function readEnv(
  key: string,
  defaultValue?: string | number,
  isNumeric = false
): string | number | undefined {
  const value = process.env[key];
  if (value) {
    return isNumeric ? parseInt(value) : value;
  }
  return defaultValue;
}

export function stagingEnvironment() {
  return process.env.NODE_ENV === "staging" || process.env.ENVIRONMENT === "staging";
}

export function prodEnvironment() {
  return process.env.NODE_ENV === "production" || process.env.ENVIRONMENT === "production";
}

export function devEnvironment() {
  return process.env.NODE_ENV === "development" || process.env.ENVIRONMENT === "development";
}

export function testEnvironment() {
  return process.env.NODE_ENV === "test" || process.env.ENVIRONMENT === "test";
}

export function localEnvironment() {
  return process.env.NODE_ENV === "development";
}
