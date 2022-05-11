export function createResponse(status:number, message:string) {
  const response = {
    status,
    message
  }

  return response
}