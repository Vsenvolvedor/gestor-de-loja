import { checkUsername } from "../validation/checkUsername"
import { checkPassword } from "../validation/checkPassword"
import { checkLoginUsers } from "../validation/checkLoginUsers"
import { createResponse } from "../helpers/createResponse"
import { JsonToken } from "../helpers/jsonToken"

export async function loginUser(usernameParams:string,passwordParams:string) {
  try {
    const usernameExist= await checkUsername(usernameParams)
    const passwordExist = await checkPassword(passwordParams)

    if(!usernameExist) throw new Error("Usuario não encontrado")
    if(!passwordExist) throw new Error("Senha incorreta")
    const user = await checkLoginUsers(usernameParams,passwordParams)
    if(!user) throw new Error('Senha ou usuario incorretos')
    const {ID, username, storename} = user
    const token = JsonToken.createToken({ID,username,storename})
    return {
      status:200,
      token
    }
  } catch(err:any){
    return createResponse(401, err.message)
  }
}