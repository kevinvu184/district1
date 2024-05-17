import { update } from './update';

it('return an undefined update command input', () => {
  const received = update();
  const expected = { Key: undefined, TableName: undefined };
  expect(received).toStrictEqual(expected);
});

it('return a minimal update command input', () => {
  const received = update();
  const expected = {
    Key: {
      Artist: {
        S: 'Acme Band',
      },
      SongTitle: {
        S: 'Happy Day',
      },
    },
    TableName: 'Music',
  };
  expect(received).toStrictEqual(expected);
});

it('return a simple update command input', () => {
  const received = update();
  const expected = {
    ExpressionAttributeNames: {
      '#AT': 'AlbumTitle',
      '#Y': 'Year',
    },
    ExpressionAttributeValues: {
      ':t': {
        S: 'Louder Than Ever',
      },
      ':y': {
        N: '2015',
      },
    },
    Key: {
      Artist: {
        S: 'Acme Band',
      },
      SongTitle: {
        S: 'Happy Day',
      },
    },
    ReturnValues: 'ALL_NEW',
    TableName: 'Music',
    UpdateExpression: 'SET #Y = :y, #AT = :t',
  };
  expect(received).toStrictEqual(expected);
});
