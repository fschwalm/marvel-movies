(function() {
  'use strict';

  angular
    .module('components.movie')
    .service('MovieService', Service);

  Service.$inject = ['$http'];

  function Service($http) {
    var vm = this;
    var _publicKey;
    var _baseUrl;

    // Public Interface
    vm.getComics = getComics;
    vm.getFakeList = getFakeList;

    _init();

    function _init() {
      _publicKey = "2c03c6a7795a22ae889c87130d6b9e2f";
      _baseUrl = "http://gateway.marvel.com/v1/public/comics";

    }

    function getComics() {
      return $http.get(_baseUrl, {
        params: {
          limit: 15,
          ts: Date.now(),
          apikey: _publicKey
        }
      });
    }

    function getFakeList() {
      return $http.get('mock-movies.json');
    }
  }

}());
