(function (module) {
  'use strict';

  function SeasonController($scope, season) {
    $scope.season = season;
  }

  module.controller('seasonController', [
    '$scope',
    'season',
    SeasonController
  ]);

}(angular.module('app.info.season')));