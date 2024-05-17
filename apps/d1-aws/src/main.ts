import { Command } from '@commander-js/extra-typings';
import { dynamodb } from './lib/dynamodb';

new Command('./d1-aws').addCommand(dynamodb).parseAsync();
