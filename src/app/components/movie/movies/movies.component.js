(function() {
  'use strict';

  angular
    .module('components.movie')
    .component('movies', {
      templateUrl: 'src/app/components/movie/movies/movies.html',
      controller: Controller,
      bindings: {
        movies: '<'
      }
    });

  Controller.$inject = ['MovieService'];


  function Controller(MovieService) {
    var vm = this;

    vm.$onInit = onInit;
    // TODO: Extrair para outro component e passar a função orderBy
    // através de bindings.
    vm.orderBy = orderBy;
    vm.order = 'none';
    vm.orderOptions = [
      {
        label: 'title',
        value: 'title'
      },
      {
        label: 'none',
        value: ''
      }
    ]

    function onInit() {
    }

    function orderBy() {
      MovieService.getComicsOrderBy(vm.order.value).then(function(response){
        vm.movies = response.data.data.results;
      })
    }
  }

}());
