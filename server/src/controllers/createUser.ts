import Database from '../db/config'
import { checkUsername } from '../validation/checkUsername';
import createId from '../helpers/createId';
import { createResponse } from '../helpers/createResponse';

interface createUserProps {
  storename: string;
  username: string;
  password: string
}

export async function createUser({storename, username, password}:createUserProps) {
  try {
    const db = await Database
    const id = await createId('users')
    const userExist:boolean = await checkUsername(username)
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
    console.log(err)
    return createResponse(409, 'Usuario já existe.')
  } 
}