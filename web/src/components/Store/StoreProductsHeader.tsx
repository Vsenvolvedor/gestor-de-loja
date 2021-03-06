import React from "react"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { UserContext } from "../../UserContext"
import StoreSearch from "./StoreSearch"

const HeaderStyle = styled.header`
  background-color: ${theme.colors.color01};
  padding: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`

const H1Style = styled.h1`
  font-size: 3.8rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-bottom: 3rem;
`

const StoreProductsHeader = ({search}:{search:() => void}) => {
  const { userData }:any = React.useContext(UserContext)
  
  return (
    <HeaderStyle>
      <H1Style>
        {userData && userData.storename}
      </H1Style>
      <StoreSearch 
        search={search}
      />
    </HeaderStyle>
  )
}

export default StoreProductsHeader