'use strict';

require('angular-ui-router');
require('angular-animate');
require('angular-resource');
require('angular-sanitize');
require('angular-bootstrap');
require('angular-gravatar');
require('angular-loading-bar');
require('angular-smart-table');
require('angular-ui-select');
require('angular-money-directive');
require('angucomplete');
require('angular-cookies');

var angular = require('angular');

var app = angular.module('broker', [
  "ui.router",
  "ngResource",
  "angular-loading-bar",
  "smart-table",
  'ngAnimate',
  "ui.gravatar",
  "angucomplete",
  "ui.bootstrap",
  "ui.select",
  "fiestah.money",
  "ngCookies",
  require('./alerts').name,
  require('./common').name,
  require('./staff').name,
  require('./base').name,
  require('./admin').name,
  require('./authentication').name,
  require('./cart').name,
  require('./projects').name,
  require('./products').name,
  require('./clouds').name,
  require('./services').name,
  require('./marketplace').name,
  require('./applications').name,
  require('./orders').name,
  require('./directives').name,
  require('./dashboard').name
])
  .run(require('./init'));
