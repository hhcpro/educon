import json
import boto3

client = boto3.client('dynamodb')

def handler(event, context):
  print('received event from my new function:')
  print(event)
  
  data = client.get_item(
      TableName = 'API_EDUCON_VIDEOSTABLE_NAME',
      Key={
          'id':{
              'S': 'opa'

          }
      }
  )

  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
      },
      'body': json.dumps(data)
  }