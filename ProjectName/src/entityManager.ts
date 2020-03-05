import "reflect-metadata";
import { createConnection, getManager } from "typeorm";
import { User } from "./entity/User";

createConnection()
  .then(async connection => {
    const entityManager = getManager(); // you can also get it via getConnection().manager
    const user = await entityManager.findOne(User, 2);
    user.name = "manager";
    await entityManager.save(user);
    await connection.close();
  })
  .catch(error => console.log(error));
