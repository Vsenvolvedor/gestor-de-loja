import Database from './config'

const initDb = {
  async init() {
    const db = await Database
    await db.exec(`
      CREATE TABLE users(
        ID INT NOT NULL PRIMARY KEY,
        username TEXT,
        storename TEXT,
        password TEXT
      );
      CREATE TABLE products(
        ID INT NOT NULL PRIMARY KEY,
        ownerID INT,
        storename TEXT,
        name TEXT,
        value REAL,
        categ TEXT,
        quantity INT,
        image TEXT
      )
    `)
  //   await db.exec(`
  //   CREATE TABLE categories(
  //     id INT,
  //     owner TEXT,
  //     store TEXT,
  //     type TEXT,
  //   )
  //   `)
  }
}

initDb.init()