const baseURL = 'http://localhost:5555/api/product';

type UrlTypes = {
  search:string
  page:string
  limit:string
}

export function PRODUCT_DATA(url:UrlTypes,token:string) {
  const {search,page,limit} = url
  return {
    url: `${baseURL}?search=${search ? search : ''}&page=${page ? page : 0}&limit=${limit ? limit : 0}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }
}

export function PRODUCT_SINGLE_DATA(id:string,token:string) {
  return {
    url: `${baseURL}/${id}`,
    options: {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }
}

export function PRODUCT_CREATE(body:object,token:string) {
  return {
    url: baseURL,
    options: {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PRODUCT_UPDATE(body:object,token:string) {
  return {
    url: baseURL,
    options: {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PRODUCT_DELETE(id:string,token:string) {
  return {
    url: `${baseURL}/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }
}
