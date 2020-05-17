import * as shell from 'shelljs';
import config from './config';

if (!shell.which('vcgencmd')) {
  shell.echo('please ensure vcgencmd is installed');
  shell.exit(1);
}

const turnOff = () => shell.exec('vcgencmd display_power 0');
const turnOn = () => shell.exec('vcgencmd display_power 1');

let turnOffTimeout: NodeJS.Timeout;

export function turnDisplayOn() {
  turnOn();
  turnOffTimeout && clearTimeout(turnOffTimeout);
  turnOffTimeout = setTimeout(turnOff, config.display.powerTimeout);
}

turnDisplayOn();
