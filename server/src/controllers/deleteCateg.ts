import Database from '../db/config';
import { createResponse } from '../helpers/createResponse';
import { checkItemExists } from '../validation/checkItemExists';

export async function deleteCateg(id:number, categName:string) {
  try {
    const exist = await checkItemExists(categName, 'categories', 'name')
    if(!exist) throw new Error('Produto não encontrado');
    const db = await Database;
    db.run(`DELETE FROM categories WHERE ownerID=${id} AND name="${categName}"`);

    return createResponse(200,'Produto deletado');
  } catch (err:any) {
    return createResponse(404,err.message);
  }
};