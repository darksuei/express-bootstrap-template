import logger from "../config/logger.config";
import { initializeDatabase } from "../database/initDatabase";

export async function tryInitializeDatabase(): Promise<void> {
  try {
    await initializeDatabase();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    logger.error("Database Initialization error: " + error.message);
    logger.info("Retrying in 3 seconds...");

    // Retry after 3 seconds
    setTimeout(tryInitializeDatabase, 3000);
  }
}
