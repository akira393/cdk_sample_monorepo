import { join } from 'path'

import { Stack, StackProps } from 'aws-cdk-lib'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import * as sqs from 'aws-cdk-lib/aws-sqs'
import { Construct } from 'constructs'

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
    const lambda = new NodejsFunction(this, 'lambda', {
      entry: join(__dirname, '../lambda/test.ts'),
      functionName: 'lambdatest',
    })
  }
}
