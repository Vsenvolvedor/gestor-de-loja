export function getToken() {
  const token = window.localStorage.getItem('token')
  if(token) {
    return token
  } else return false
}