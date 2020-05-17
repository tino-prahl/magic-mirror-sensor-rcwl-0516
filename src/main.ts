import { program } from 'commander';
import * as socketio from 'socket.io';
import { Gpio } from 'onoff';

program
  .option('--virtual', 'use keyboard keys to emit events')
  .option('--port <type>', 'defines port', '4001');

program.parse(process.argv);

if (Gpio.accessible) {
  console.log('GPIO accessible');
} else {
  console.log('GPIO not accessible');
}

const io = socketio();
io.listen(program.port, {
  path: '/sensor',
});
console.log(`socket is listening on: ${program.port}/sensor`);

if (Gpio.accessible && !program.virtual) {
  console.log('running production mode');
  import('./production').then((runProduction) => runProduction.default(io));
} else {
  console.log('running virtual mode');
  import('./virtual').then((runVirtual) => runVirtual.default(io));
}
