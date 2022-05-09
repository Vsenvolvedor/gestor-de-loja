import Database from './config'

const initDb = {
  async init() {
    const db = await Database
    await db.exec(`
      CREATE TABLE users(
        id INT NOT NULL PRIMARY KEY,
        username TEXT,
        storeName TEXT,
        password TEXT
      )
    `)
  //   await db.exec(`
  //   CREATE TABLE products(
  //     id INT,
  //     owner TEXT,
  //     store TEXT,
  //     image TEXT,
  //     name TEXT,
  //     value INT,
  //     categ TEXT,
  //     quantity INT
  //   )
  // `)
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