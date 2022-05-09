import express from 'express'
import { createUser } from '../controllers/createUser'
import { getUserData } from '../controllers/getUserData'

export const routes = express.Router()

routes.post('/user/create', async (req,res) => {
  try {
    const { storename, username, password } = req.body
    if(!storename || !username || !password) throw new Error()
    const response = await createUser({storename,username,password})
    
    if(response) {
      res.status(response.status).send(response)
    } else {
      console.log('aaa')
      throw new Error()
    }
  } catch(err) {
    res.status(500).send({
      status: 500,
      message: 'Não foi possivel criar sua conta'
    })
  }
})

routes.post('/user/login', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario logado')
})


routes.get('/user/data', async (req,res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if(!token || token.startsWith('Bearer')) throw new Error()
   
    const response = await getUserData(token)

    if(response) {
      res.header('Content-Type', 'application/json')
      res.status(200).send(response)
    } else throw new Error()

  } catch(err) {
    res.status(500).send({
      status: 500,
      message: 'Não foi possivel resgatar os dados'
    })
  }
  
})