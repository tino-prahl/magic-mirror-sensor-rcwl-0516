import { Gpio } from 'onoff';
import config from './config';

const { left, up, right, down } = config.sensors;

export const sensorLeft = new Gpio(left.gpio, 'in', 'both', { ...left });
export const sensorRight = new Gpio(right.gpio, 'in', 'both', { ...right });
export const sensorDown = new Gpio(down.gpio, 'in', 'both', { ...down });
export const sensorUp = new Gpio(up.gpio, 'in', 'both', { ...up });
