import Database from '../db/config'

export async function checkItemExists(item:string,table:string,col:string) {
  let exist = false
  const db = await Database
  await db.each(`SELECT ${col} FROM ${table}`,[],(err:string, row:object) =>{
    const dbUsername = Object.values(row)[0]
    if(item === dbUsername) {
      exist = true
    } 
  })
  return exist
  
}