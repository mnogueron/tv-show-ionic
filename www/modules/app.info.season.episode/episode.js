/**
 * @module app.home
 * @memberOf app
 */

(function (module) {
  'use strict';

  /**
   * Define the module's configuration.
   * @private
   * @function config
   * @param {Object} $stateProvider - UI Router $stateProvider service.
   * @param {Object} templateUtils - Some template utilities.
   */
  function config($stateProvider, templateUtils) {
    $stateProvider.state('info.season.episode', {
      url: '/episode/{episode}',
      views: {
        '@': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'episodeController as controller'
        }
      },
      resolve: {
        episode: ['$stateParams', 'episodeService', function($stateParams, episodeService){
            return episodeService.getEpisode($stateParams.season, $stateParams.showID, $stateParams.episode);
        }]
      }
    });
  }

  module.config(['$stateProvider', 'templateUtilsProvider', config]);

}(angular.module('app.info.season.episode', ['app.info.season', 'app.info','fp.utils'])));
