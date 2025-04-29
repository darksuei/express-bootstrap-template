import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import logger from "./logger.config";
import yaml from "yamljs";
import path from "path";

function swaggerDocs(app: Application, baseUrl: string) {
  // Swagger page
  app.use(
    "/docs",
    // @ts-ignore
    swaggerUi.serve,
    swaggerUi.setup(yaml.load(path.join(process.cwd(), "docs", "swagger.yaml")))
  );

  logger.info(`Documentation available at ${baseUrl}/docs`);
}

export default swaggerDocs;
