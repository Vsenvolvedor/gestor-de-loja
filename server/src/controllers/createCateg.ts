import { createResponse } from "../helpers/createResponse";

export async function createCateg() {
  try {

    return createResponse(201, 'Categoria criada')
  } catch(err) {
    return false
  }
}