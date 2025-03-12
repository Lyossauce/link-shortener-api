# link-shortener-api

## Stack
- AWS Lambda (serverless framework)
- Jest
- redis

## requirements
- Node 20
- Docker

## Getting started
```bash
npm i
```

```bash
docker-compose up 
```

```bash
npm run start
```

## Endpoints
POST http://localhost:3000/local/links 
GET  http://localhost:3000/local/*  

## Things to do
- Fix the vulnerabilities in the serverless-offline plugin
- Do the unit test coverages
- Add environments variables
- Add validators
- Add typescript models
- Add error handling
- Add handlers to extract useful data from http request
- Add Http Responses templates

## Limitations:
- We can store any string, we do not verify that the string stored is a url
- We could optimize redis requests especially to avoid having several key with the same value
- lambda cold-start