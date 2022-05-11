import Database from '../../db/config'

export async function checkId(id:number) {
  const db = await Database
  await db.each('SELECT id FROM users',[],(err:string, row:object) =>{
    const dbId = Object.values(row)[0]
    if(dbId === id) {
      id = 0
    }
  })
  return id 
}