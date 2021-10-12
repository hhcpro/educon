from io import StringIO
import json, pprint
import boto3
from boto3.dynamodb.conditions import Attr
import os

USER_TABLE_NAME=os.environ.get('API_EDUCON_USERPROFILETABLE_NAME')
QUIZ_TABLE_NAME=os.environ.get('API_EDUCON_QUIZESTABLE_NAME')

database = boto3.resource('dynamodb')
user_table = database.Table(USER_TABLE_NAME)
quiz_table = database.Table(QUIZ_TABLE_NAME)

def handler(event, context):
  print('received event:')
  print(event)
  print('UserProfile table created: '+ str(user_table.creation_date_time))
  print('Quiz table created: ' + str(quiz_table.creation_date_time))
  
  global output
  output=None
  try:
    print('DATA RECEIVED: ' + str(event['body']))

    output = json.loads(str(event['body']))
    pprint.pprint(output)
    
  except Exception as e:
    print(e)

  try:
    
    #lookup for UserProfile
    lookupkey=str(output['userID'])
    print("Arg: " + lookupkey)
    response = user_table.scan(FilterExpression=Attr('user_name').eq(lookupkey))
    data = response['Items']
    pprint.pprint(data)
    try:
      last_score = float(data[0]['top_score'])
      print('Last Score: %s' % str(last_score))
    except Exception as e:
      print('Error: ' + str(e))
      print('Empty last score.. set to 0.0')
      last_score = float(0.0)
      pass

    #lookup quiz entry to check complexity
    qresp = quiz_table.scan(FilterExpression=Attr('id').eq(output['QuizID']))
    qdata = qresp['Items']
    pprint.pprint(qdata)

    print("Found quiz complexity: " + str(qdata[0]['complexity']))

    #calculate score
    # dump formula uses complexity of a quiz and # of attempts
    comp = float(qdata[0]['complexity'])
    natt = float(output['attempts'])
    score = (comp/natt) + last_score
    print("Calculated score %.2f=%.2f/%.2f and last_score was: %.2f" % (score, comp, natt, last_score))
    

    rupdate = user_table.update_item(
      Key={
        'id' : data[0]['id'],
      },
      UpdateExpression="set top_score=:t, last_class=:l",
      ExpressionAttributeValues={
        ':t' : str(score),
        ':l' : output['QuizID']
      },
      ReturnValues="UPDATED_NEW"
    )
    #print(rupdate)
  except Exception as e:
    print('DB Error: ' + str(e))

  out = {}
  out['score']=str(score)
  out['userID']=str(output['userID'])
  json_out = json.dumps(out)
  print('OUT-------')
  pprint.pprint(json_out)
  print('---------')
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(str(out))
  }