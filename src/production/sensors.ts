import { Gpio, ValueCallback } from 'onoff';
import config from './config';
import * as _ from 'lodash';

const { left, up, right, down } = config.sensors;

const sensorLeft = new Gpio(left.gpio, 'in', 'both', { ...left });
const sensorRight = new Gpio(right.gpio, 'in', 'both', { ...right });
const sensorDown = new Gpio(down.gpio, 'in', 'both', { ...down });
const sensorUp = new Gpio(up.gpio, 'in', 'both', { ...up });

export const sensorWatchLeft = (callback: ValueCallback) =>
  sensorLeft.watch(_.throttle(callback, left.throttle));

export const sensorWatchRight = (callback: ValueCallback) =>
  sensorRight.watch(_.throttle(callback, right.throttle));

export const sensorWatchDown = (callback: ValueCallback) =>
  sensorDown.watch(_.throttle(callback, down.throttle));

export const sensorWatchUp = (callback: ValueCallback) =>
  sensorUp.watch(_.throttle(callback, up.throttle));
