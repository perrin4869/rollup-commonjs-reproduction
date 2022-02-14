import { DataMapper } from "@aws/dynamodb-data-mapper";
import { DynamoDB } from "aws-sdk";

export const getClient = () => new DynamoDB();

export const getDataMapper = (client: DynamoDB = getClient()) => new DataMapper({ client });

export { DynamoDB, DataMapper };
