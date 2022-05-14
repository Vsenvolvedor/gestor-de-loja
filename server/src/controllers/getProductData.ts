import { createResponse } from "../helpers/createResponse"
import { checkProducts } from "../validation/checkProducts";

interface getProductDataProps {
  id: number;
  search?: string;
  limit?: number;
  page?: number;
}

export async function getProductData({
  id,
  search,
  limit,
  page
}:getProductDataProps) {
  try {
    let products = await checkProducts(id)
    
    if(!products) {throw new Error()}

    if(search) {
      products = products.filter((product) => {
        return product?.name.startsWith(search)
      })
    }
    if(limit) {
      const position = page ? page - 1 : 0
      const limitItems = position ? limit + position : limit
      products = products.slice(position,limitItems)
    }
   
    return createResponse(200,products)
  } catch(err:any) {
    return false
  }
}