from io import StringIO
import json, pprint
import boto3
from boto3.dynamodb.conditions import Attr
import os

USER_TABLE_NAME=os.environ.get('API_EDUCON_USERPROFILETABLE_NAME')

database = boto3.resource('dynamodb')
t = database.Table(USER_TABLE_NAME)

def handler(event, context):
  print('received event:')
  print(event)
  print('UserProfile table created: '+ str(t.creation_date_time))
  
  global output
  output=None
  try:
    print('DATA RECEIVED: ' + str(event['body']))

    output = json.loads(str(event['body']))
    pprint.pprint(output)
    
  except Exception as e:
    print(e)

  try:
    
    lookupkey=str(output['userID'])
    print("Arg: " + lookupkey)
    response = t.scan(FilterExpression=Attr('user_name').eq(lookupkey))
    #response = t.scan(TableName = USER_TABLE_NAME)
    data = response['Items']

    pprint.pprint(data)

    rupdate = t.update_item(
      Key={
        'id' : data[0]['id'],
      },
      UpdateExpression="set top_score=:t, last_class=:l",
      ExpressionAttributeValues={
        ':t' : output['attempts'],
        ':l' : output['QuizID']
      },
      ReturnValues="UPDATED_NEW"
    )
    #print(rupdate)
  except Exception as e:
    print('DB Error: ' + str(e))
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(str('Received Quiz results for UID: '+str(output)))
  }