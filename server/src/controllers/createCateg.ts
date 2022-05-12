import Database from '../db/config'
import { createResponse } from "../helpers/createResponse";
import { checkItemExists } from '../validation/checkItemExists';

export async function createCateg(id:number,storename:string, name:string) {
  try {
    const db = await Database
    const isNameExist = await checkItemExists(name,'categories','name')
    if(!isNameExist) {
      const a = await db.run(`INSERT INTO categories (
        ownerID,
        store,
        name
      )
      VALUES (
        ${id},
        "${storename}",
        "${name}"
      )
      `)
      return createResponse(201, 'Categoria criada')
    } else throw new Error('Categoria já cadastrada')
  } catch(err:any) {
    return createResponse(409,err.message)
  }
}