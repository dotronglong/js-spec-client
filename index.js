'use strict';

const { Spec, Endpoint, Method } = require('./dist/spec');
const Request = require('./dist/request').default;
const Transporter = require('./dist/transporter').default;

module.exports = {
  Spec,
  Endpoint,
  Method,
  Request,
  Transporter,
};

module.exports.default = Spec;