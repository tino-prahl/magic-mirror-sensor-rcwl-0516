import { turnDisplayOn } from './display';
import {
  sensorWatchDown,
  sensorWatchLeft,
  sensorWatchRight,
  sensorWatchUp,
} from './sensors';

export default (io) => {
  sensorWatchLeft((err, value) => {
    io.emit('sensor-left-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorWatchRight((err, value) => {
    io.emit('sensor-right-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorWatchDown((err, value) => {
    io.emit('sensor-down-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorWatchUp((err, value) => {
    io.emit('sensor-up-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });
};
