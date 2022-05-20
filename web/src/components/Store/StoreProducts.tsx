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

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const ScrollUl = styled.ul`
`

const StoreProducts = () => {
  const {data, loading, error, request} = useFetch()
  const userContext = React.useContext(UserContext)

  async function getProducts() {
    const token = getToken()
    if(!token) return false
    const query = {
      search: '',
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
  if(userContext?.error) return <AlertError error={userContext?.error} />
  return (
    <ManagerMenu>
      <div>
        <SideMenu />
      </div>
      <main>
        <StoreProductsHeader />
        <ScrollUl>
          {data && data.message.map((item) => {
            return (
              <StoreProductItem 
                key={item.ID}
                data={item} 
                refresh={getProducts}
              />
            )
          })}
        </ScrollUl>
      </main>
    </ManagerMenu>
  )
}

export default StoreProducts