const baseURL = 'http://localhost:5555/api/categ';

export function CATEG_DATA(token:string) {
  const options = {
    url: baseURL,
    options: {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  return options
}

type Categ = {
  name:string
}

export function CATEG_CREATE(token:string, body:Categ) {
  const options = {
    url: baseURL,
    options: {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    }
  }

  return options
}

export function CATEG_DELETE(token:string, name:string) {
  const options = {
    url: `${baseURL}/${name}`,
    options: {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

  return options
}