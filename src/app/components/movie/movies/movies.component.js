(function() {
  'use strict';

  angular
    .module('components.movie')
    .component('movies', {
      templateUrl: 'src/app/components/movie/movies/movies.html',
      controller: Controller
    });

  Controller.$inject = ['MovieService'];

  function Controller(MovieService) {
    var vm = this;

    vm.$onInit = onInit;

    function onInit() {
      MovieService.getComics().then(function(response) {
        console.log(response.data.data.results);
        vm.movies = response.data.data.results;
      },
      function(error) {
        MovieService.getFakeList().then(function(response) {
          vm.movies = response.data;
        });
      });
    }
  }

}());
