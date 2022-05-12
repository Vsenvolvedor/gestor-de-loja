import { generateID } from './generateID'
import { checkId } from '../validation/checkId'

export default async function createId(tableName:string) {
  let id = generateID()

  id = await checkId(id,tableName)
  if(id !== 0) {
    return id
  } else {
    createId(tableName)
  }
}

