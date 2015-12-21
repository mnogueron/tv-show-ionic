(function (module) {
  'use strict';

  function EpisodeController($scope, episode) {
    $scope.episode = episode;
  }

  module.controller('episodeController', [
    '$scope',
    'episode',
    EpisodeController
  ]);

}(angular.module('app.info.season.episode')));