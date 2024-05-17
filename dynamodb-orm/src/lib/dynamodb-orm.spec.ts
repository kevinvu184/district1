import { dynamodbOrm } from './dynamodb-orm';

describe('dynamodbOrm', () => {
  it('should work', () => {
    expect(dynamodbOrm()).toEqual('dynamodb-orm');
  });
});
