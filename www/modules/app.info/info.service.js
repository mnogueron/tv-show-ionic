(function (module) {
  'use strict';

  var URL = 'https://api.themoviedb.org/3/tv/'
  //var URL = 'http://series-ortiz.rhcloud.com/series/';

  function InfoService($http) {
    var service = this;

    service.getInfo = function (id) {
      return $http.jsonp(URL+id, {params:{api_key: '1629d91a3480db1cee05fdb399614468', language: 'fr', callback: 'JSON_CALLBACK'}}).then(function (response) {
        var data = response.data;
        if(data.backdrop_path == null){
          data.backdrop_path = "";
        }
        else{
          data.backdrop_path = '<div class="item item-image" style="height: auto">'
                +'<img src="http://image.tmdb.org/t/p/w500'+data.backdrop_path+'?api_key=1629d91a3480db1cee05fdb399614468"/>'
                +'</div>';
        }

        for(var iter=0; iter<data.seasons.length; iter++){
          if(data.seasons[iter].poster_path == null){
            data.seasons[iter].poster_path = "IMDb-icon.png";
          }
          else{
            data.seasons[iter].poster_path = "http://image.tmdb.org/t/p/w500"+data.seasons[iter].poster_path+"?api_key=1629d91a3480db1cee05fdb399614468";
          }
        }
        return data;
      });
    };
  }

  module.service('infoService', [
    '$http',
    InfoService
  ]);

}(angular.module('app.info')));