'use strict';

/**
 * @ngdoc function
 * @name largeDataTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the largeDataTestApp
 */
angular.module('largeDataTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
