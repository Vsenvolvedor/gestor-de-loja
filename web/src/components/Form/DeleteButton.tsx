import React from 'react'
import styled from 'styled-components'
import { PRODUCT_DELETE } from '../../api/store'
import { getToken } from '../../Helpers/getToken'
import useFetch from '../../Hooks/useFetch'
import { theme } from '../../theme/theme'
import XIcon from '../svgs/XIcon'

const DeleteBtn = styled.button`
  background-color: ${theme.colors.color04};
  padding: .5rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: .2s;
  &:hover {
    opacity: .8;
  }
`

interface DeleteButtonProps {
  id:string;
  refresh: () => void
}

const DeleteButton = ({id, refresh}:DeleteButtonProps) => {
  const {request} = useFetch()

  async function handleDelete() {
    if(window.confirm('Tem certeza que deseja excluir o produto ?')) {
      const token = getToken()
      if(!token) return false
      const {url, options} = PRODUCT_DELETE(id,token)
      const {response, json}:any = await request(url,options)
  
      refresh()
    } else return
  }

  return (
    <>
      <DeleteBtn onClick={handleDelete}>
        <XIcon />
      </DeleteBtn>
    </>
  )
}

export default DeleteButton