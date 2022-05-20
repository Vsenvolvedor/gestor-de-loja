import Database from '../db/config'
import createId from '../helpers/createId';
import { createResponse } from '../helpers/createResponse';

interface createProductProps {
  ownerID: number
  storename: string
  name: string
  value:number
  qtd: number
  categ?: Array<string>
  image?: string
}

export async function createProduct({
  ownerID,
  storename,
  name,
  value,
  qtd,
  categ,
  image,
}:createProductProps) {
  try {
    const db = await Database
    const id = await createId('products')
    if(!id) return false
    
    if(ownerID && storename && name && value && qtd && categ) {
      await db.run(`INSERT INTO products (
        ID,
        ownerID,
        storename,
        name,
        value,
        categ,
        quantity,
        image
      )
      VALUES (
        ${id},
        ${ownerID},
        "${storename}",
        "${name}",
        ${value},
        "${categ ? categ : 'Sem categorias'}",
        ${qtd},
        "${image ? image : 'false'}"
      )
      `)
  
      return createResponse(201,'Produto criado')
    } else throw new Error('Passe todas as informações')
   
  } catch(err:any) {
    return createResponse(400, err.message)
  } 
}