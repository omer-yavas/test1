import AWS from "aws-sdk";
const spacesEndpoint = new AWS.Endpoint("https://fra1.digitaloceanspaces.com");

AWS.config.update({
  accessKeyId: "DO00YTBKYMTEQEKB4A2T",
  secretAccessKey: "hcakz/xgXA6iwTqJwDPf2ORdG4lWAyFilkFRCyIWggY",
  endpoint: spacesEndpoint,
});

const s3 = new AWS.S3();

export default s3;
