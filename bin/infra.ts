#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { UiStack } from "./cdk/ui-stack";

// To ensure that it is targetting the correct account and region
const region = process.env.AWS_REGION;
const account = process.env.AWS_ACCOUNT_ID;

const app = new cdk.App();

if (process.env.AWS_PROFILE) console.log(`AWS_PROFILE: ${process.env.AWS_PROFILE}`);
console.log(`CDK deployment account: ${account}`);
console.log(`CDK deployment region : ${region}`);

new UiStack(app, "Ui");
cdk.Tags.of(app).add("project", "ui");
