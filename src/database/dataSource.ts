import path from "path";
import { DataSource } from "typeorm";
import { devEnvironment, readEnv } from "../config/readEnv.config";
import { SupportedDatabaseTypes } from "../utils/enums";

const DB_HOST = readEnv("DB_HOST");
const DB_PORT = readEnv("DB_PORT");
const DB_USERNAME = readEnv("DB_USERNAME");
const DB_PASSWORD = readEnv("DB_PASSWORD");
const DB_DATABASE = readEnv("DB_DATABASE");
const DB_DATABASE_TYPE = readEnv("DB_DATABASE_TYPE");

export const AppDataSource = new DataSource({
  type: DB_DATABASE_TYPE as SupportedDatabaseTypes,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../entity/*.{js,ts}")],
  migrations: [path.join(__dirname, "../migration/*.{js,ts}")],
  subscribers: [],
  ssl: devEnvironment()
    ? undefined
    : {
        rejectUnauthorized: false,
      },
});
