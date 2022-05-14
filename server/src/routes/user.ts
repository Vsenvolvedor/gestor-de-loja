import express from 'express'
import { createResponse } from '../helpers/createResponse'
import { createUser } from '../controllers/createUser'
import { loginUser } from '../controllers/loginUser'
import { isLogged } from '../middleware/isLogged'
const error500Response = createResponse(500,'Não foi possivel criar sua conta')

const userData = async (req:any,res:any) => {
  try {
    const response = res.locals.userData
    if(response) {
      res.status(200).json(response)
    } else throw new Error()

  } catch(err:any) {
    res.status(403).json({
      status: 403,
      message: err.message || 'Não foi possivel resgatar os dados'
    })
  }
  
}

const userCreate = async (req:any,res:any) => {
  try {
    const { storename, username, password } = req.body
    if(!storename || !username || !password) throw new Error()
    const response = await createUser({storename,username,password})
    
    if(response) {
      res.status(response.status).json(response)
    } else {

      throw new Error()
    }
  } catch(err) {
    res.status(500).json(error500Response)
  }
}

const userLogin = async (req:any, res:any) => {
  try {
    const { username, password } = req.body
 
    const response = await loginUser(username,password)
  
    if(response) {  
      res.status(response.status).json(response)
    } else throw new Error()
  
  } catch(err) {
    res.status(500).json(error500Response)
  }
}

const routes = express.Router()

routes.use(isLogged).route('/').get(userData)

routes.route('/create').post(userCreate)
routes.route('/login').post(userLogin)

export default routes