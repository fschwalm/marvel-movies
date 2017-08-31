(function() {
  'use strict';

  angular
    .module('components.movie')
    .component('movie', {
      templateUrl: 'src/app/components/movie/movie/movie.html',
      controller: Controller,
      bindings: {
        movie: '<'
      }
    });

  function Controller() {
    var vm = this;
    // Life cycle hooks
    vm.$onInit = onInit;

    function onInit() {
      vm.imgUrl = vm.movie.thumbnail.path + '.' + vm.movie.thumbnail.extension;
    }
  }

}());
