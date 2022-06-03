const baseURL = 'http://localhost:5555/api/user'

export function USER_DATA(token:string) {
  const options = {
    url: `${baseURL}/data`,
    options: {
      method:'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }
  }
  return options
}

type User = {
  storename: string;
  username: string;
  password: string;
}

export function USER_CREATE(body:User) {
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

type UserLogin = {
  username: string;
  password: string;
}

export function USER_LOGIN(body:UserLogin) {
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