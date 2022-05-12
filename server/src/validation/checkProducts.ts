import Database from '../db/config'

export async function checkProducts(id:number) {
  try {
    const db = await Database
    const products = await db.all(`SELECT * FROM products WHERE ownerID=${id}`)

    return products
  } catch(err) {
    return false
  }
}