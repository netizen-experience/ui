#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import "dotenv/config";
import { UiStack } from "./cdk/ui-stack";
import { validateEnv } from "./env";

const env = validateEnv(process.env);

const profile = env.AWS_PROFILE;
const region = env.AWS_REGION;
const account = env.AWS_ACCOUNT_ID;

console.log(`AWS profile: ${profile}`);
console.log(`CDK deployment account: ${account}`);
console.log(`CDK deployment region : ${region}`);

const app = new cdk.App();

new UiStack(app, "ui");
if (env.PROJECT_TAG) cdk.Tags.of(app).add("project", env.PROJECT_TAG);
