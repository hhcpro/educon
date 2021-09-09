import json
import boto3
import os

client = boto3.client('dynamodb')

TABLE_NAME=os.environ.get('API_EDUCON_VIDEOSTABLE_NAME')

def handler(event, context):
  print('received event from my new function:')
  print(event)
  
  data = client.scan(TableName = TABLE_NAME)

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