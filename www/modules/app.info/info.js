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
    $stateProvider.state('info', {
      url: '/info/{showID}',
      views: {
        '': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'infoController as controller'
        }
      },
      resolve: {
        info: ['$stateParams', 'infoService', function($stateParams, infoService){
            return infoService.getInfo($stateParams.showID);
        }]
      }
    });
  }

  module.config(['$stateProvider', 'templateUtilsProvider', config]);

}(angular.module('app.info', ['app.home','fp.utils'])));
