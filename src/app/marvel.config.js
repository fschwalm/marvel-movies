(function() {
  'use strict';

  angular
    .module('marvel')
    .config(Config);

  Config.$inject = ['$urlRouterProvider', '$stateProvider'];

  function Config($urlRouterProvider, $stateProvider) {
    var rootState = {
      name: 'root',
      url: '/movies',
      component: 'movies',
      resolve: {
        movies: _getMovies
      }
    }

    _getMovies.$inject = ['MovieService'];

    function _getMovies(MovieService) {
      return MovieService.getComics().then(function(response) {
          return response.data.data.results;
        },
        function(error) {
          MovieService.getFakeList().then(function(response) {
            return response.data;
          });
        });
    }

    $stateProvider.state(rootState);
    $urlRouterProvider.otherwise('/movies');
  }

}());
