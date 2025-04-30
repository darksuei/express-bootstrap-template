import express from "express";
import cors from "cors";
import compression from "compression";
import setupRoutes from "./setup/setupRoutes";
import setupBeforeMiddlewares from "./setup/setupBeforeMiddlewares";
import setupAfterMiddlewares from "./setup/setupAfterMiddlewares";

const app = express();

app.use(cors());
app.use(express.json());

app.use(compression());
app.use(express.static("public"));

setupBeforeMiddlewares(app);
setupRoutes(app);
setupAfterMiddlewares(app);

export default app;
