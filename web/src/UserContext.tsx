import React from "react";
import { USER_DATA } from "./api/user";
import { getToken } from "./Helpers/getToken";

type UserContextType = {
  isLogged: boolean;
  loading: boolean;
  userData: object | null;
  error: string | null;
  logoutUser: () => void;
}

export const UserContext = React.createContext<UserContextType | null>(null)

export const UserProvider = ({children}:any) => {
  const [userData, setUserData] = React.useState(null)
  const [isLogged, setIsLogged] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function refresh() {
      try {
        setLoading(true)
        setError(null)
        const token = getToken()
        if(!token){throw new Error('Não está logado')}
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
      error,
      logoutUser
    }}>
      {children}
    </UserContext.Provider>
  )
}