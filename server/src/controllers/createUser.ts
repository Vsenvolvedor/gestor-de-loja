import Database from '../db/config'
import createId from '../helpers/createId';
import { createResponse } from '../helpers/createResponse';
import { checkItemExists } from '../validation/checkItemExists';

interface createUserProps {
  storename: string;
  username: string;
  password: string
}

export async function createUser({storename, username, password}:createUserProps) {
  try {
    const db = await Database
    const id = await createId('users')
    const userExist:boolean = await checkItemExists(username,'users','username')
    if(!id) return false
    if(userExist) {
     throw new Error()
    }
    
    await db.run(`INSERT INTO users (
      ID,
      username,
      storeName,
      password
    )
    VALUES (
      ${id},
      "${username}",
      "${storename}",
      "${password}"
    )
    `)

    return createResponse(200,'Usuario criado')

  } catch(err) {
    return createResponse(409, 'Usuario já existe.')
  } 
}