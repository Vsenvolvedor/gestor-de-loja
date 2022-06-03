import React from "react";
import { USER_DATA } from "./api/user";

type userData = {
  ID: number
	username: string
	storename: string
}

type UserContextType = {
  isLogged: boolean;
  loading: boolean;
  userData: userData | null;
  token: string | null;
  error: string | null;
  logoutUser: () => void;
}

export const UserContext = React.createContext<UserContextType | null>(null)

export const UserProvider = ({children}:any) => {
  const [userData, setUserData] = React.useState<userData | null>(null)
  const [token, setToken] = React.useState<string | null>(null)
  const [isLogged, setIsLogged] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function refresh() {
      try {
        setLoading(true)
        setError(null)
        const token =  window.localStorage.getItem('token')
        if(!token){throw new Error('Não está logado')}
        setToken(token)
        const {url, options} = USER_DATA(token)
        const response = await fetch(url,options)
        const json = await response.json()
       
        if(response.ok) {
          setIsLogged(true)
          setUserData(json)
        } else throw new Error('Token invalido')
      } catch(err:any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
   
    }

    refresh()
  }, [])
 
  function logoutUser() {
    setUserData(null)
    setIsLogged(false)
    window.localStorage.token = ''
  }

  return(
    <UserContext.Provider value={{
      isLogged,
      loading,
      userData,
      token,
      error,
      logoutUser
    }}>
      {children}
    </UserContext.Provider>
  )
}