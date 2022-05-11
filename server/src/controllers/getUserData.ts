import { JsonToken } from "../helpers/jsonToken"

export async function getUserData(token:string) {
  const data = JsonToken.decodeToken(token)
  return data
}