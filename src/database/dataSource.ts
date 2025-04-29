import path from "path";
import { DataSource } from "typeorm";
import { devEnvironment, readEnv } from "../config/readEnv.config";
import { SupportedDatabaseTypes } from "../utils/enums";

const DB_HOST = readEnv("DB_HOST") as string;
const DB_PORT = readEnv("DB_PORT", 5432, true) as number;
const DB_USERNAME = readEnv("DB_USERNAME") as string;
const DB_PASSWORD = readEnv("DB_PASSWORD") as string;
const DB_DATABASE = readEnv("DB_DATABASE") as string;
const DB_DATABASE_TYPE = readEnv("DB_DATABASE_TYPE") as string;

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
