(function (module) {
  'use strict';

  //var URL = 'http://series-ortiz.rhcloud.com/series?s=thetvdb&callback=JSON_CALLBACK&name=';
  var URL = 'https://api.themoviedb.org/3/search/tv?query='

  function SeriesService($http) {
    var service = this;

    service.getSeries = function (name) {
      return $http.jsonp(URL+name, {params:{api_key: '1629d91a3480db1cee05fdb399614468', language: 'fr', callback: 'JSON_CALLBACK'}}).then(function (response) {
        var data = response.data.results;
        for(var iter=0; iter<data.length; iter++){
          if(data[iter].poster_path == null){
            data[iter].poster_path = "IMDb-icon.png";
          }
          else{
            data[iter].poster_path = "http://image.tmdb.org/t/p/w500"+data[iter].poster_path+"?api_key=1629d91a3480db1cee05fdb399614468";
          }
        }
        return {content: data, message: ((data.length == 0)?"Aucun résultat":"")};
      });
    };
  }

  module.service('seriesService', [
    '$http',
    SeriesService
  ]);

}(angular.module('app.home')));