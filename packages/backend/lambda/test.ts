import { HelloWorldEcho } from '@/backend/lambda/utils'

export async function handler(event: any) {
  const hello = HelloWorldEcho()
  console.log(hello)
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  }
}
