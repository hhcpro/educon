import json, pprint

def handler(event, context):
  print('received event:')
  print(event)
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