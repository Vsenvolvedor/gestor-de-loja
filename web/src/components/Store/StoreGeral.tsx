import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../../Helpers/Loading'
import { UserContext } from '../../UserContext'
import SideMenu from './SideMenu'

const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`

const StoreGeral = () => {
  const userContext = React.useContext(UserContext)
  
  if(userContext?.loading) return <Loading />
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