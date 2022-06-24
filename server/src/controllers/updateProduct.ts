import Database from '../db/config'

interface updateProductProps {
  ID:number
  ownerID:number
  name?: string 
  value?: number
  quantity?: number
  categ?: string
  image?: string
}

export async function updateProduct(productNewValues:updateProductProps) {
  try {
    const db = await Database
    let isDbUpdated = false
    let values = Object.entries(productNewValues)
    values = values.filter((item) => {
      if(!item[1] || item[0] === 'ID' || item[0] === 'ownerID') return false
      return item
    })

    values.forEach(async (item) => {
      if(!item) return isDbUpdated = false
      isDbUpdated = true
      await db.run(`
      UPDATE products 
      SET ${item[0]} = "${item[1]}"
      WHERE ID=${productNewValues.ID} AND ownerID=${productNewValues.ownerID}
      `)
    })

    if(isDbUpdated) {
      return true
    } else throw new Error()
  } catch(err) {
    return false
  }
}