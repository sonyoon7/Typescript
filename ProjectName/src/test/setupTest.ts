import * as TypeORM from "typeorm";
import logger from "../../logConfig";
let db: TypeORM.Connection;

beforeAll(async () => {
  try {
    db = await TypeORM.createConnection();
    logger.logger.info("server start");
  } catch (e) {
    console.log(e);
  }
});

afterAll(async () => {
  try {
    await db.close();
  } catch (e) {
    console.log(e);
  }
});
