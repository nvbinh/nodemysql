'use strict';

/**
 * @ngdoc function
 * @name aliceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aliceApp
 */
angular.module('aliceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
