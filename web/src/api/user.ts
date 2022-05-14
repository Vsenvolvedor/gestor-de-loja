const baseURL = 'http://localhost:5555/api/user'

export function USER_DATA() {
  const options = {
    url: `${baseURL}/data`,
    options: {
      method:'GET'
    }
  }
  return options
}

export function USER_CREATE(body:object) {
  const options = {
    url: `${baseURL}/create`,
    options: {
      method:'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(body)
    }
  }
  return options
}

export function USER_LOGIN(body:object) {
  const options = {
    url: `${baseURL}/login`,
    options: {
      method:'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(body)
    }
  }
  return options
}