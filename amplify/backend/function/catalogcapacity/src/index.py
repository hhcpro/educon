import awsgi
import boto3
from flask_cors import CORS
from flask import Flask, jsonify, request

BASE_ROUTE="/clist"

client = boto3.client()
app=Flask(__name__)
CORS(app)


@app.route(BASE_ROUTE, methods=['GET'])
def list_catalog():
    boto3.client.get_item
    return jsonify(message="hello from educon")

def handler(event, context):
  return awsgi.response(app, event, context)