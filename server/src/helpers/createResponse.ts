export function createResponse(status:number, message:string | Array<object>) {
  const response = {
    status,
    message
  }

  return response
}