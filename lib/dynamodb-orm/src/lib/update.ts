type AttributeAction = 'ADD' | 'DELETE' | 'PUT';

type ReturnConsumedCapacity = 'INDEXES' | 'NONE' | 'TOTAL';

type ReturnItemCollectionMetrics = 'NONE' | 'SIZE';

type ReturnValue =
  | 'ALL_NEW'
  | 'ALL_OLD'
  | 'NONE'
  | 'UPDATED_NEW'
  | 'UPDATED_OLD';

type ReturnValuesOnConditionCheckFailure = 'ALL_OLD' | 'NONE';

type ConditionalOperator = 'AND' | 'OR';

type ComparisonOperator =
  | 'BEGINS_WITH'
  | 'BETWEEN'
  | 'CONTAINS'
  | 'EQ'
  | 'GE'
  | 'GT'
  | 'IN'
  | 'LE'
  | 'LT'
  | 'NE'
  | 'NOT_CONTAINS'
  | 'NOT_NULL'
  | 'NULL';

type AttributeValue =
  | { B: Uint8Array } // "B": "dGhpcyB0ZXh0IGlzIGJhc2U2NC1lbmNvZGVk"
  | { BOOL: boolean } // "BOOL": true
  | { BS: Uint8Array[] } //"BS": ["U3Vubnk=", "UmFpbnk=", "U25vd3k="]
  | { L: AttributeValue[] } // "L": [ \{"S": "Cookies"\} , \{"S": "Coffee"\}, \{"N": "3.14159"\}]
  | { M: Record<string, AttributeValue> } // "M": \{"Name": \{"S": "Joe"\}, "Age": \{"N": "35"\}\}
  | { N: string } // "N": "123.45"
  | { NS: string[] } // "NS": ["42.2", "-19", "7.5", "3.14"]
  | { NULL: boolean } // "NULL": true
  | { S: string } // "S": "Hello"
  | { SS: string[] }; // "SS": ["Giraffe", "Hippo" ,"Zebra"]

type AttributeValueUpdate = {
  Action?: AttributeAction;
  Value?: AttributeValue;
};

type ExpectedAttributeValue = {
  AttributeValueList?: AttributeValue[];
  ComparisonOperator?: ComparisonOperator;
  Exists?: boolean;
  Value?: AttributeValue;
};

type UpdateItemInput = {
  // Required
  Key: Record<string, AttributeValue> | undefined;
  TableName: string | undefined;

  // Optional
  AttributeUpdates?: Record<string, AttributeValueUpdate>;
  ConditionalOperator?: ConditionalOperator;
  ConditionExpression?: string;
  Expected?: Record<string, ExpectedAttributeValue>;
  ExpressionAttributeNames?: Record<string, string>;
  ExpressionAttributeValues?: Record<string, AttributeValue>;
  ReturnConsumedCapacity?: ReturnConsumedCapacity;
  ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
  ReturnValues?: ReturnValue;
  ReturnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailure;
  UpdateExpression?: string;
};

export const update = (): UpdateItemInput => {
  const empty = {
    Key: undefined,
    TableName: undefined,
  };
  return empty;
};
