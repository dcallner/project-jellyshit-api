'use strict';

/**@ngInject*/
var AlertsTable = function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/common/problem-alerts.html',
    transclude: true,
    scope: {
      alerts: "="
    }
  };
};

module.exports = AlertsTable;
