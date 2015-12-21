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
    $stateProvider.state('info.season', {
      url: '/season/{season}',
      views: {
        '@': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'seasonController as controller'
        }
      },
      resolve: {
        season: ['$stateParams', 'seasonService', function($stateParams, seasonService){
            return seasonService.getSeason($stateParams.season, $stateParams.showID);
        }]
      }
    });
  }

  module.config(['$stateProvider', 'templateUtilsProvider', config]);

}(angular.module('app.info.season', ['app.info','fp.utils'])));
