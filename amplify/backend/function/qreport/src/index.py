import json, pprint

def handler(event, context):
  print('received event:')
  print(event)

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
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }