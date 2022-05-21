import express from 'express'
import { createProduct } from '../controllers/createProduct'
import { deleteProduct } from '../controllers/deleteProduct'
import { getProductData } from '../controllers/getProductData'
import { getSingleProduct } from '../controllers/getSingleProduct'
import { updateProduct } from '../controllers/updateProduct'
import { createResponse } from '../helpers/createResponse'
import { isLogged } from '../middleware/isLogged'

const productData = async (req:any,res:any) => {
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
  
}

const productSingleData = async (req:any,res:any) => {
  try {
    const {ID:ownerID} = res.locals.userData
    const { id } = req.params
    const response = await getSingleProduct(Number(id), Number(ownerID))

    if(response) {
      res.status(response.status).json(response)
    } else throw new Error('Nenhum produto foi encontrado.')
  } catch(err:any) {
    const response = createResponse(404, err.message)
    res.status(response.status).json(response)
  }
  
}

const productCreate = async (req:any,res:any) => {
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
}

const productUpdateData = async (req:any,res:any) => {
  try {
    const { ID:ownerID } = res.locals.userData
    const { ID , name, value, qtd, categ, image } = req.body
  
    const response = await updateProduct({
      ID,
      ownerID,
      name: name ? name : false,
      value: value ? value : false,
      quantity: qtd ? qtd : false,
      categ: categ ? categ : false,
      image: image ? image : false
    })
    if(response) {
      res.status(200).send('Dados atualizados')
    } else throw new Error()
  } catch(err) {
    res.status(404).send('Não foi possivel atualizar os dados')
  }
}

const productDelete = async (req:any,res:any) => {
  const { ID } = res.locals.userData
  const { id:productId } = req.params

  const response = await deleteProduct(Number(ID), Number(productId))

  res.status(response.status).json(response)
}


const routes = express.Router()

routes.use('/', isLogged)

routes.route('/')
.get(productData)
.post(productCreate)
.put(productUpdateData)

routes.route('/:id')
.get(productSingleData)
.delete(productDelete)

export default routes