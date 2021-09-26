import json, pprint
import boto3
from boto3.dynamodb.conditions import Attr
import os

VIDEOS_TABLE_NAME=os.environ.get('API_EDUCON_VIDEOSTABLE_NAME')
USER_TABLE_NAME=os.environ.get('API_EDUCON_USERPROFILETABLE_NAME')
QUIZ_TABLE_NAME=os.environ.get('API_EDUCON_QUIZESTABLE_NAME')


DB = boto3.resource('dynamodb')
user_table = DB.Table(USER_TABLE_NAME)
quiz_table = DB.Table(QUIZ_TABLE_NAME)

def handler(event, context):
  print('received event:')
  print(event)
  print('UserProfile table created: '+ str(user_table.creation_date_time))
  print('Quiz table created: ' + str(quiz_table.creation_date_time))
  global output
  output=None
  try:
    print(event['body'])

    output = json.loads(event['body'])
    pprint.pprint(output)
    
  except Exception as e:
    print(e)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(str('Received Quiz results for UID: '+str(output)))
  }