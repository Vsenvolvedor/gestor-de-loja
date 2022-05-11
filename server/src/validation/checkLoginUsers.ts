import Database from '../../db/config'

export async function checkLoginUsers(username:string,password:string) {
  try {
    const db = await Database 
    const result = await db.get(`SELECT * FROM users WHERE username = "${username}" AND password = "${password}"`)
    if(!result) throw new Error()
    return result
  } catch(err) {
    return false
  }
 
}