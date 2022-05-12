import express from 'express'
import { createProduct } from '../controllers/createProduct'
import { isLogged } from '../middleware/isLogged'

export const routes = express.Router()

routes.use('/api/product',isLogged)

routes.post('/api/product/create', async (req,res) => {
  try {
    const { ID, storename } = res.locals.userData
    const { name, value, qtd, categ, image } = req.body
    
    const response = await createProduct({
      ownerID: Number(ID),
      storename,
      name,
      value: Number(value),
      qtd:Number(qtd),
      categ,
      image
    })
    if(response) {
      res.status(response.status).json(response)
    } else throw new Error()
  } catch(err:any) {
    res.status(400).json({
      status: 400,
      message: 'Não foi possivel criar o produto'
    })
  }
})

routes.get('/api/product', (req,res) => {
  // const {search, limit, page} = req.query
  const { id } = res.locals.userData

  

  res.status(200).send('usuario infos')
})

routes.delete('/api/product/delete', (req,res) => {
  const { id } = req.body
 
  res.status(200).send('usuario infos')
})

routes.put('/api/product/update', (req,res) => {
  const { nome, value, qtd, categ, image } = req.body
 
  res.status(200).send('usuario infos')
})

routes.post('/api/product/categ/create', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})

routes.get('/api/product/categ',(req,res) => {
  const { categ } = req.body
 
  res.status(200).send('lista de categoria')
})

routes.delete('/api/product/categ/delete', (req,res) => {
  const { categ } = req.body
 
  res.status(200).send('usuario infos')
})