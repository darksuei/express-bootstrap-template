import dotenv from "dotenv";
import path from "path";
import { EnvSchema } from "../validations/schemas";
import * as z from "zod";

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

  // Parse environment variables..
  EnvSchema.parse(process.env);
}

export function readEnv<K extends keyof z.infer<typeof EnvSchema>>(
  key: K,
  default_value?: z.infer<typeof EnvSchema>[K]
): z.infer<typeof EnvSchema>[K] {
  return (process.env[key] || default_value) as z.infer<typeof EnvSchema>[K];
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

configureEnvironment();
