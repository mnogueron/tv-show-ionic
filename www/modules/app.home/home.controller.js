(function (module) {
  'use strict';

  function HomeController($scope, seriesService) {
    $scope.series = [];
    $scope.search = {string : ''};

    var controller = this;
    controller.getSeries = function(){
      seriesService.getSeries($scope.search.string).then(function (series) {
        $scope.series = series;
      });
    }

  }

  module.controller('homeController', [
    '$scope',
    'seriesService',
    HomeController
  ]);

}(angular.module('app.home')));