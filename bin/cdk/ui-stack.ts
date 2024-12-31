import { CfnOutput, Stack } from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class UiStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Resources for hosting the Storybook static site
    const bucket = new s3.Bucket(this, "StorybookBucket");
    const distribution = new cloudfront.Distribution(this, "StorybookCdn", {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/index.html",
        },
      ],
    });

    new CfnOutput(this, "BucketName", { value: bucket.bucketName });
    new CfnOutput(this, "CdnDomainName", { value: distribution.distributionDomainName });
  }
}
