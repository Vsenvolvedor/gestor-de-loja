import Database from '../db/config'

function generateID(){
  let id = null
  id = Number(Math.random())
  id = id * 100000000
  id = Math.floor(id)
  return id
}

async function checkId(id:number) {
  const db = await Database
  await db.each('SELECT id FROM users',[],(err:string, row:object) =>{
    const dbId = Object.values(row)[0]
    if(dbId === id) {
      id = 0
    }
  })
  return id 
}

export default async function createId() {
  let id = generateID()

  id = await checkId(id)
  if(id !== 0) {
    return id
  } else {
    createId()
  }
}

