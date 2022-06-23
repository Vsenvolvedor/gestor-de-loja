import React from 'react'
import styled from 'styled-components'
import { PRODUCT_DATA } from '../../api/store'
import ProtectedRoute from '../../Helpers/ProtectedRoute'
import { getToken } from '../../Helpers/getToken'
import Loading from '../../Helpers/Loading'
import useFetch from '../../Hooks/useFetch'
import { UserContext } from '../../UserContext'
import { animeLeft, ManagerMenu } from '../Styles/ManagerStyle'
import SideMenu from './SideMenu'
import StoreProductItem from './StoreProductItem'
import StoreProductsHeader from './StoreProductsHeader'
import StoreProductsModal from './StoreProductsModal'

const MainContent = styled.main`
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards;
`

const StoreProducts = () => {
  const {data, loading,request}:any = useFetch()
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
    await request(url, options)
    
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  if(userContext?.loading || loading) return <Loading />
  if(userContext?.error) return <ProtectedRoute />
  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <MainContent>
        <StoreProductsHeader search={getProducts} />
        <ul>
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
        </ul>
      </MainContent>
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