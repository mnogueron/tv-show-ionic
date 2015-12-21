(function (module) {
  'use strict';

  function InfoController($scope, info) {
    $scope.info = info;
  }

  module.controller('infoController', [
    '$scope',
    'info',
    InfoController
  ]);

}(angular.module('app.info')));