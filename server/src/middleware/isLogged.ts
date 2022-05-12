import { getUserData } from "../controllers/getUserData"

export async function isLogged(req:any, res:any,next: () => void){ 
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if(!token || token.startsWith('Bearer')) throw new Error()
    const data = await getUserData(token)
    if(data) {
      res.locals.userData = data
      next()
    } else throw new Error()
  } catch(err:any) {
    res.status(401).json({
      status: 401,
      message: err.message || 'Usuário não logado'
    })
  } 
}