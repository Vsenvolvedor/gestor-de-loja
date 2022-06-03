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
      );
      CREATE TABLE categories(
        ownerID INT,
        store TEXT,
        name TEXT NOT NULL
      )
    `)
  }
}

initDb.init()