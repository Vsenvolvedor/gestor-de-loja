import Database from '../db/config'
import { createResponse } from "../helpers/createResponse";

export async function createCateg(id:number,storename:string, name:string) {
  try {
    const db = await Database
    let isNameExist = false
    await db.each(`SELECT * FROM categories WHERE ownerID = ${id}`,[],(err:string, row:object) =>{
      const dbUsername = Object.values(row)[2]
      if(name === dbUsername) {
        isNameExist = true
      } 
    })
    if(!isNameExist) {
      await db.run(`INSERT INTO categories (
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