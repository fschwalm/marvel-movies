(function() {
  'use strict';

  angular
    .module('components.movie')
    .component('movies', {
      templateUrl: 'src/app/components/movie/movies/movies.html',
      bindings: {
        movies: '<'
      }
    });

}());
