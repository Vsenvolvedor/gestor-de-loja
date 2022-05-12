import express from 'express'
import { createCateg } from '../controllers/createCateg'
import { createProduct } from '../controllers/createProduct'
import { deleteProduct } from '../controllers/deleteProduct'
import { getProductData } from '../controllers/getProductData'
import { createResponse } from '../helpers/createResponse'
import { isLogged } from '../middleware/isLogged'

export const routes = express.Router()

routes.use('/api/product', isLogged)

routes.get('/api/product', async (req,res) => {
  try {
    const {search, limit, page} = req.query
    const { ID } = res.locals.userData
  
    const response = await getProductData({
      id: Number(ID),
      search: search?.toString(),
      limit: Number(limit),
      page: Number(page)
    })

    if(response) {
      res.status(response.status).json(response)
    } else throw new Error('Nenhum produto foi encontrado.')
  } catch(err:any) {
    const response = createResponse(404, err.message)
    res.status(response.status).json(response)
  }
  
})

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
    const response = createResponse(400, 'Não foi possivel criar o produto.')
    res.status(response.status).json(response)
  }
})

routes.delete('/api/product/delete/:productId', async (req,res) => {
  const { ID } = res.locals.userData
  const { productId } = req.params

  const response = await deleteProduct(Number(ID), Number(productId))

  res.status(response.status).json(response)
})

// routes.put('/api/product/update', (req,res) => {
//   const { nome, value, qtd, categ, image } = req.body
 
//   res.status(200).send('usuario infos')
// })

routes.get('/api/product/categ',(req,res) => {
  const { ID } = res.locals.userData

  res.status(200).send('lista de categoria')
})

routes.post('/api/product/categ/create', async (req,res) => {
  try {
    const { ID, storename } = res.locals.userData
    const { name } = req.body
  
    const response = await createCateg()

    if(response) {
      res.status(response.status).json(response)
    } else throw new Error()
  } catch(err) {
    return createResponse(400, 'Não foi possivel criar a categoria')
  }
  
})

routes.delete('/api/product/categ/delete', (req,res) => {
  const { ID } = res.locals.userData
  const { name } = req.body

  res.status(200).send('usuario infos')
})