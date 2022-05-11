import { generateID } from './generateID'
import { checkId } from '../validation/checkId'

export default async function createId() {
  let id = generateID()

  id = await checkId(id)
  if(id !== 0) {
    return id
  } else {
    createId()
  }
}

