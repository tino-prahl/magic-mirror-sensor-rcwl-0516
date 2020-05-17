import { turnDisplayOn } from './display';
import { sensorDown, sensorLeft, sensorRight, sensorUp } from './sensors';

export default (io) => {
  sensorLeft.watch((err, value) => {
    io.emit('sensor-left-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorRight.watch((err, value) => {
    io.emit('sensor-right-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorDown.watch((err, value) => {
    io.emit('sensor-down-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });

  sensorUp.watch((err, value) => {
    io.emit('sensor-up-changed', value);
    if (value) {
      turnDisplayOn();
    }
  });
};
