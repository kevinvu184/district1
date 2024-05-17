import { Command } from '@commander-js/extra-typings';

export const buildCommand = ({
  command,
  description,
}: {
  command: string;
  description: string;
}) => new Command().command(command).description(description);
