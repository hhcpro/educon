import json
import boto3
from boto3.dynamodb.conditions import Attr
import os

TABLE_NAME=os.environ.get('API_EDUCON_VIDEOSTABLE_NAME')

videosDb = boto3.resource('dynamodb')
table = videosDb.Table(TABLE_NAME)

def handler(event, context):
  print('received event from my new function')
  print(table.creation_date_time)
  queryKey = event['queryParamaters']
  if queryKey is None:
      queryKey = 'math1'
  
  #data = client.scan(TableName = TABLE_NAME)
  try:
    response = table.scan(FilterExpression=Attr('category').eq(queryKey))
  except Exception as e:
      print('Got Error: %s' % e)
      
  data = response['Items']
  print(type(data))

  rr = dict()

  try:
      for item in data:
          print ('Item: %s' % str(item))
          rr.update(item)
  except Exception as e:
      print('Got item error: ' + e)

  print('Dict:' + str(rr))
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
      },
      'body': json.dumps(str(rr))
  }