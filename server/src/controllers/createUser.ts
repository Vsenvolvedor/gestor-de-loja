import Database from '../db/config'

interface createUserProps {
  storeName: string;
  username: string;
  password: string
}

export async function createUser({storeName, username, password}:createUserProps) {
  const db = await Database
  await db.run(`INSERT INTO users (
    id,
    name,
    storeName,
    password
  )
  VALUES (
    1233,
    "${username}",
    "${storeName}",
    "${password}"
  )
  `)

  await db.close()
}