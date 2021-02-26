const AWS = require('aws-sdk');

const main = async () => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: "algolift-lihuhu",
    Prefix: "machingtriple/iap/daily_output/user_forecast_output"
  };
  const objects = await s3.listObjectsV2(params).promise();
  console.log('objects', objects);
};

exports.main = main;