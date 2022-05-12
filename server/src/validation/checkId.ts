import Database from '../db/config'

export async function checkId(id:number,tableName:string) {
  const db = await Database
  await db.each(`SELECT ID FROM ${tableName}`,[],(err:string, row:object) =>{
    const dbId = Object.values(row)[0]
    if(dbId === id) {
      id = 0
    }
  })
  return id 
}