import json
import boto3
from boto3.dynamodb.conditions import Attr
import os

TABLE_NAME=os.environ.get('API_EDUCON_VIDEOSTABLE_NAME')

videosDb = boto3.resource('dynamodb')
table = videosDb.Table(TABLE_NAME)

def handler(event, context):
  print('received event from my new function:')
  print(table.creation_date_time)
  print(event)
  
  #data = client.scan(TableName = TABLE_NAME)
  response = table.scan(FilterExpression=Attr('category').eq('math1'))
      
  data = response['Items']

  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
      },
      'body': json.dumps(str(data))
  }