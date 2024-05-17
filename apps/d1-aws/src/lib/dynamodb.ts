import { buildCommand } from '../common';
import { update } from '@district1/dynamodb-orm';

const updateItem = buildCommand({
  command: 'update-item',
  description: 'UpdateItem',
}).action(async () => {
  console.log(JSON.stringify(update(), null, 2));
});

export const dynamodb = buildCommand({
  command: 'dynamodb',
  description: 'DynamoDB',
}).addCommand(updateItem);
