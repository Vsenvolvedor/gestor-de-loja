import Database from '../db/config'
import { createResponse } from '../helpers/createResponse'

export async function deleteCateg(id:number, categName:string) {
  const db = await Database
  db.run(`DELETE FROM categories WHERE ownerID=${id} AND name="${categName}"`)
  return createResponse(200,'Produto deletado')
}