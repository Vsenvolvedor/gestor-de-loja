import React from 'react'
import styled from 'styled-components'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const StoreGeral = () => {
  const userContext = React.useContext(UserContext)
  
  console.log(userContext)
  return (
    <ManagerMenu>
      <SideMenu />
      <div>
        adsadas
      </div>
    </ManagerMenu>
  )
}

export default StoreGeral