import { update } from './update';

it('return an update command input with key and table name', () => {
  const received = update();
  const expected = {
    Key: { PK: { S: '123' } },
    TableName: 'table-1',
  };
  expect(received).toStrictEqual(expected);
});
