import json
import boto3
from boto3.dynamodb.conditions import Attr
import os

TABLE_NAME=os.environ.get('API_EDUCON_VIDEOSTABLE_NAME')

videosDb = boto3.resource('dynamodb')
table = videosDb.Table(TABLE_NAME)
global count
count = int(0)

def handler(event, context):
  print('received event from my new function')
  print(table.creation_date_time)
  try:
    queryKey = event['queryParamaters']
  except KeyError:
    queryKey = 'math1'
  
  #data = client.scan(TableName = TABLE_NAME)
  try:
    response = table.scan(FilterExpression=Attr('category').eq(queryKey))
  except Exception as e:
      print('Got Error: %s' % e)

  data = response['Items']
  try:
      for item in data:
        global count
        count = count +1
        print ('Item(%s): %s' % (str(count),str(item)))
          
  except Exception as e:
      print('Got item error: ' + e)
      pass


  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
      },
      'body': json.dumps(str('{"Count":"%s"}' % count))
  }