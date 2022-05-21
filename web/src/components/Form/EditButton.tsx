import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'
import { theme } from '../../theme/theme'
import EditIcon from '../svgs/EditIcon'

const EditBtn = styled.button`
  background-color: ${theme.colors.color04};
  padding: .5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: .2s;
  &:hover {
    opacity: .8;
  }
`

interface EditButtonProps {
  id: string;
  activeModal: Dispatch<SetStateAction<boolean>>
  giveID: Dispatch<SetStateAction<string>>
}

const EditButton = ({id, activeModal,giveID}:EditButtonProps) => {
  function handleEdit() {
    activeModal(true)
    giveID(id)
  }

  return (
    <EditBtn onClick={handleEdit}>
      <EditIcon />
    </EditBtn>
  )
}

export default EditButton