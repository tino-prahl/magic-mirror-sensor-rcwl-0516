import * as fs from 'fs';

interface ISensorConfig {
  gpio: number;
  debounceTimeout: number;
  throttle?: number;
}

interface IConfig {
  display: {
    powerTimeout: number;
  };
  sensors: {
    left: ISensorConfig;
    right: ISensorConfig;
    down: ISensorConfig;
    up: ISensorConfig;
  };
}

const config: IConfig = JSON.parse(
  fs.readFileSync('./config/config.json', 'utf8'),
);

export default config;
