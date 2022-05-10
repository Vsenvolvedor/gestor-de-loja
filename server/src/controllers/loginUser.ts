import { checkUsername } from "./checkUsername"
import { checkPassword } from "./checkPassword"
import { loginCheckUsers } from "./loginCheckUsers"
import { createResponse } from "./createResponse"
import { JsonToken } from "../jsonToken"

export async function loginUser(usernameParams:string,passwordParams:string) {
  try {
    const usernameExist= await checkUsername(usernameParams)
    const passwordExist = await checkPassword(passwordParams)

    if(!usernameExist) throw new Error("Usuario não encontrado")
    if(!passwordExist) throw new Error("Senha incorreta")
    const user = await loginCheckUsers(usernameParams,passwordParams)
    if(!user) throw new Error('Senha ou usuario incorretos')
    const {id, username, storename} = user
    const token = JsonToken.createToken({id,username,storename})
    return {
      status:200,
      token
    }
  } catch(err:any){
    return createResponse({status:401, message: err.message})
  }
}