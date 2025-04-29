import "reflect-metadata";
import { readEnv } from "./config/readEnv.config";
import app from "./app";
import setupServer from "./setup/setupServer";
import { tryInitializeDatabase } from "./setup/setupServiceInitializers";

const APP_HOST = readEnv("APP_HOST");
const APP_PORT = readEnv("APP_PORT");

setupServer(app, APP_HOST, APP_PORT, tryInitializeDatabase);
