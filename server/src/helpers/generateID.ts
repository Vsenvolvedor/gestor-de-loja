export function generateID(){
  let id = null
  id = Number(Math.random())
  id = id * 100000000
  id = Math.floor(id)
  return id
}
