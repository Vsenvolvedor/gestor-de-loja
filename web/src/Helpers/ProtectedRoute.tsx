import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlertError = () => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/')
  }, [])

  return null
}

export default AlertError