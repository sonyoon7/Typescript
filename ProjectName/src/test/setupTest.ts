import * as TypeORM from 'typeorm';

let db:TypeORM.Connection;

beforeAll(async() => {
  try {
    db =  await TypeORM.createConnection();
  } catch(e){
    console.log(e);
  }
});

afterAll(async () => {
  try {
    await db.close();
  } catch(e) {
    console.log(e);
  }
})
