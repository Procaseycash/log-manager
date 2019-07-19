import * as custom from 'custom-env';
custom.env((process.env.NODE_ENV || 'development').trim()); // load environment variables.
