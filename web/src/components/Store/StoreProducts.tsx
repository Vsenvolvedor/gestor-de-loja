import React from 'react'
import styled from 'styled-components'
import AlertError from '../../Helpers/AlertError'
import Loading from '../../Helpers/Loading'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'
import StoreProductsHeader from './StoreProductsHeader'

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const StoreProducts = () => {
  const userContext = React.useContext(UserContext)
  
  if(userContext?.loading) return <Loading />
  if(userContext?.error) return <AlertError error={userContext?.error} />
  return (
    <ManagerMenu>
      <SideMenu />
      <div>
        <StoreProductsHeader />
      </div>
    </ManagerMenu>
  )
}

export default StoreProducts