interface ResponseProps {
  status: number;
  message: string
}

export function createResponse({status, message}:ResponseProps) {
  const response = {
    status,
    message
  }

  return response
}