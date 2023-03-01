# ds.innovation.ca.gov

Airtable endpoint for Design system partner signup form on the <a href="designsystem.webstandards.ca.gov">design system site</a> homepage

## Access tokens

This uses a personal access token defined as an environment variable.

## Local development

This AWS Lambda hosted Function As A Service was created using the open source, JS foundation backed <a href="https://arc.codes/docs/en/get-started/quickstart">architect</a> library.

### Environment variables

The personal access token was defined in all 3 possible environments: testing, staging, production using architect commands:

```
arc env -e testing --add AIRTABLE_API_KEY "keyValueGoesHere"
```

When doing local development if you run the following command:

```
arc env
```

It will ask if you want to write a local preferences.arc file. If you accept that prompt it will write a new preferences.arc file locally which contains all the previously set AWS env variables in all environments. This file is already in the gitignore list but writing these values into the repo's directory seems a bit dangerous. 

Running a local sandbox while the preferences.arc file sis present will allow those values to be available on process.env

## AWS infrastructure

The architect library lets you mimic AWS Lambda environments locally and quickly deploys a staging & production environment on AWS writing the SAM YAML files required for the associated infrastructure to access the Lambda over HTTP like the API Gateway.

The subdomain ds.innovation.ca.gov has been registered and pointed at AWS Route 53 so these endpoints can recieve a POST at https://ds.innovation.ca.gov/partner,

The staging deploy command:

```
npx arc deploy
```

Creates an AWS Lambda at https://8dyidbx2of.execute-api.us-west-1.amazonaws.com

The production deploy command:

```
npx arc deploy --production
```

Creates an AWS Lambda at 