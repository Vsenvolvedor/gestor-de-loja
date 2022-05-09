import Database from '../db/config'
import { checkUsername } from './checkUsername';
import createId from './createId';
import { createResponse } from './createResponse';

interface createUserProps {
  storename: string;
  username: string;
  password: string
}

export async function createUser({storename, username, password}:createUserProps) {
  try {
    const db = await Database
    const id = await createId()
    const userExist:boolean = await checkUsername(username)
    if(!id) return false
    if(userExist) {
     throw new Error()
    }
    
    await db.run(`INSERT INTO users (
      id,
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

    return createResponse({status:200, message:'Usuario criado'})

  } catch(err) {
    console.log(err)
    return createResponse({status:409, message:'Usuario já existe.'})
  } 
}