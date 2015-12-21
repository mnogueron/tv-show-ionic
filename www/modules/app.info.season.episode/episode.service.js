(function (module) {
  'use strict';

  var URL = 'https://api.themoviedb.org/3/tv/'
  //var URL = 'http://series-ortiz.rhcloud.com/series/';

  function EpisodeService($http) {
    var service = this;

    service.getEpisode = function (season, id, episode) {
      return $http.jsonp(URL+id+'/season/'+season+'/episode/'+episode, {params:{api_key: '1629d91a3480db1cee05fdb399614468', language: 'fr', callback: 'JSON_CALLBACK'}}).then(function (response) {
        var data = response.data;
        if(data.still_path == null){
          data.still_path = "";
        }
        else{
          data.backdrop_path = '<div class="item item-image" style="height: auto">'
                +'<img src="http://image.tmdb.org/t/p/w500'+data.still_path+'?api_key=1629d91a3480db1cee05fdb399614468"/>'
                +'</div>';
        }

        for(var iter=0; iter<data.crew.length; iter++){
          if(data.crew[iter].profile_path == null){
            data.crew[iter].profile_path = "IMDb-icon.png";
          }
          else{
            data.crew[iter].profile_path = "http://image.tmdb.org/t/p/w500" + data.crew[iter].profile_path + "?api_key=1629d91a3480db1cee05fdb399614468";
          }
        }

        for(var iter=0; iter<data.guest_stars.length; iter++){
          if(data.guest_stars[iter].profile_path == null){
            data.guest_stars[iter].profile_path = "IMDb-icon.png";
          }
          else{
            data.guest_stars[iter].profile_path = "http://image.tmdb.org/t/p/w500" + data.guest_stars[iter].profile_path + "?api_key=1629d91a3480db1cee05fdb399614468";
          }
        }

        return {content: data, season: season, episode: episode};
      });
    };
  }

  module.service('episodeService', [
    '$http',
    EpisodeService
  ]);

}(angular.module('app.info.season.episode')));