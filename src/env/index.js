import * as stage from './stage';
import * as prod from './production';
import * as dev from './development';

const env = {
  stage,
  prod,
  dev,
};

export default env[process.env.REACT_APP_ENV];
