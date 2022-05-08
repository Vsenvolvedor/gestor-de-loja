import express from 'express'

export const routes = express.Router()

routes.post('/token/validate', (req,res) => {
  const { username, password } = req.body
 
  res.status(200).send('usuario logado')
})
