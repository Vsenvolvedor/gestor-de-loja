import React from "react"

const useFetch = () => {
  const [data, setData] = React.useState<null | object>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)

  const request = React.useCallback(async (url:string, options:object) => {
    let response = null
    let json = null
    try {
      setLoading(true)
      setError(null)
      response = await fetch(url,options)
      json = await response.json()
      if(!response.ok) throw json
      return {
        response,
        json
      }
    } catch(err:any) {
      json = null

      setError(err)
      setTimeout(() => {
        setError(null)
      }, 1500)
    }
    finally {
      setData(json)
      setLoading(false)
    }
  }, [])

  return {
    data,
    loading,
    error,
    setError,
    request
  }
}

export default useFetch