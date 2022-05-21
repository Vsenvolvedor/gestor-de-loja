import React from 'react'
import styled from 'styled-components'
import { PRODUCT_DATA } from '../../api/store'
import AlertError from '../../Helpers/AlertError'
import { getToken } from '../../Helpers/getToken'
import Loading from '../../Helpers/Loading'
import useFetch from '../../Hooks/useFetch'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'
import StoreProductItem from './StoreProductItem'
import StoreProductsHeader from './StoreProductsHeader'
import StoreProductsModal from './StoreProductsModal'

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const ScrollUl = styled.ul`
`

const StoreProducts = () => {
  const {data, loading,request} = useFetch()
  const userContext = React.useContext(UserContext)
  const [modal, setModal] = React.useState(false)
  const [editProduct, setEditProduct] = React.useState('')

  async function getProducts(searchData?:string) {
    const token = getToken()
    if(!token) return false
    const query = {
      search: searchData ? searchData : '',
      page: '0',
      limit:'0'
    }
    const {url, options} = PRODUCT_DATA(query,token)
    const {json}:any = await request(url, options)
    console.log(json)
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  if(userContext?.loading || loading) return <Loading />
  if(userContext?.error) return <AlertError error={userContext?.error} />
  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <main>
        <StoreProductsHeader search={getProducts} />
        <ScrollUl>
          {data && data.message.map((item:any) => {
            return (
              <StoreProductItem 
                key={item.ID}
                data={item} 
                refresh={getProducts}
                setModal={setModal}
                setEditProduct={setEditProduct}
              />
            )
          })}
        </ScrollUl>
      </main>
      <StoreProductsModal 
        active={modal}
        refresh={getProducts}
        setModal={setModal}
        id={editProduct}
      />
    </ManagerMenu>
  )
}

export default StoreProducts