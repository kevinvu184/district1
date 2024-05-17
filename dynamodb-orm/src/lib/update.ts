import { UpdateItemCommandInput } from '@aws-sdk/client-dynamodb';

export const update = (): UpdateItemCommandInput => {
  return {
    Key: { PK: { S: '123' } },
    TableName: 'table-1',
  };
};
