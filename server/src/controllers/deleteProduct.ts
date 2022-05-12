import Database from '../db/config'
import { createResponse } from '../helpers/createResponse'

export async function deleteProduct(id:number, productId:number) {
  const db = await Database
  db.run(`DELETE FROM products WHERE ownerID=${id} AND ID=${productId}`)
  return createResponse(200,'Produto deletado')
}