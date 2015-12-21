(function (module) {
  'use strict';

  var URL = 'https://api.themoviedb.org/3/tv/'
  //var URL = 'http://series-ortiz.rhcloud.com/series/';

  function SeasonService($http) {
    var service = this;

    service.getSeason = function (season, id) {
      return $http.jsonp(URL+id+'/season/'+season, {params:{api_key: '1629d91a3480db1cee05fdb399614468', language: 'fr', callback: 'JSON_CALLBACK'}}).then(function (response) {
        var data = response.data;
        for(var iter=0; iter<data.episodes.length; iter++){
          if(data.episodes[iter].still_path == null){
            data.episodes[iter].still_path = "IMDb-icon.png";
          }
          else{
            data.episodes[iter].still_path = "http://image.tmdb.org/t/p/w500" + data.episodes[iter].still_path + "?api_key=1629d91a3480db1cee05fdb399614468";
          }
        }
        return {number: season, data: data};
      });
    };
  }

  module.service('seasonService', [
    '$http',
    SeasonService
  ]);

}(angular.module('app.info.season')));