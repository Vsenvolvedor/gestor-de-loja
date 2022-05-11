import Database from '../../db/config'

export async function checkPassword(password:string) {
  let exist = false
  const db = await Database
  await db.each('SELECT password FROM users',[],(err:string, row:object) =>{
    const dbPassword = Object.values(row)[0]
    if(password === dbPassword) {
      exist = true
    } 
  })
  return exist
}