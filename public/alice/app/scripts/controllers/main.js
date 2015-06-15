'use strict';

/**
 * @ngdoc function
 * @name aliceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aliceApp
 */
angular.module('aliceApp')
  .controller('MainCtrl', function ($scope) {
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });
