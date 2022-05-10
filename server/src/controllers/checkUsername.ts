import Database from '../db/config'

export async function checkUsername(username:string) {
  let exist = false
  const db = await Database
  await db.each('SELECT username FROM users',[],(err:string, row:object) =>{
    const dbUsername = Object.values(row)[0]
    if(username === dbUsername) {
      exist = true
    } 
  })
  return exist
  
}