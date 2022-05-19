import React from "react"

interface TypesProps{
  [type:string]: any
}

const types = {
    username: {
      test: (text:string) => {
        if(text.length <= 4) {
          return false
        } else {
          return true
        }
      }, 
      message: 'O usuario deve conter no minimo 4 letras.'
    },
    password: {
      test: (text:string) => {
        if(text.length <= 8) {
          return false
        } else {
          return true
        }
      }, 
      message: 'A senha deve conter no minimo 8 caracteres, numeros e letras maiusculas'
    }
} as TypesProps

export function useForm(type?:string) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function onBlur({target}:any) {
    validate(target.value)
  }

  function validate(text:string) {
    if(!text) {
      setError('Não deixe em branco.')
      return false
    } 
    else if(type && !types[type].test(text)) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }

  function onChange({target}:any) {
    if(error) {
      validate(target.value)
    }
    setValue(target.value)
  }

  return {
    value,
    validate,
    setValue,
    onChange,
    onBlur,
    error
  }
}