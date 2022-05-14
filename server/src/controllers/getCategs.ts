import Database from '../db/config'
import { createResponse } from "../helpers/createResponse";

export async function getCategs(id:number) {
  try {
    const db = await Database
    const categs = await db.all(`SELECT name FROM categories WHERE ownerID=${id}`)
 
    if(categs) {
      return createResponse(200, categs)
    } else throw new Error()
  } catch(err) {
    return false
  }
}