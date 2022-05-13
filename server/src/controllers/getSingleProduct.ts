import Database from '../db/config'
import { createResponse } from "../helpers/createResponse"

export async function getSingleProduct(id:number,ownerID:number) {
  try {
    const db = await Database
    const products = await db.all(`SELECT * FROM products WHERE ID=${id}`)
   
    return createResponse(200,products)
  } catch(err:any) {
    return false
  }
}

