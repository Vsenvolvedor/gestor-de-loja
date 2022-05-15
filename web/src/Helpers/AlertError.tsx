import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlertError = ({error}:{error:string}) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    alert(error)
    navigate('/')
  }, [])

  return null
}

export default AlertError