export default (io) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');

  console.log('use arrow keys or wsad to emit sensor events');
  console.log('use ctrl+c or q to exit');
  stdin.on('data', function (buf) {
    const key = buf.toString();
    const hexKey = Buffer.from(key, 'utf-8').toString('hex');

    if (key === '\u0003' || key === 'q') {
      process.exit();
    }

    if (hexKey === '1b5b41' || key === 'w') {
      console.log('emitting up');
      io.emit('sensor-up-changed', 1);
      setTimeout(() => {
        io.emit('sensor-up-changed', 0);
      }, 50);
    }

    if (hexKey === '1b5b42' || key === 's') {
      console.log('emitting down');
      io.emit('sensor-down-changed', 1);
      setTimeout(() => {
        io.emit('sensor-down-changed', 0);
      }, 50);
    }

    if (hexKey === '1b5b43' || key === 'd') {
      console.log('emitting right');
      io.emit('sensor-right-changed', 1);
      setTimeout(() => {
        io.emit('sensor-right-changed', 0);
      }, 50);
    }

    if (hexKey === '1b5b44' || key === 'a') {
      console.log('emitting left');
      io.emit('sensor-left-changed', 1);
      setTimeout(() => {
        io.emit('sensor-left-changed', 0);
      }, 50);
    }
  });
};
