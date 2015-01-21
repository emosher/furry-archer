'use strict';

/**
 * @ngdoc function
 * @name largeDataTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the largeDataTestApp
 */
angular.module('largeDataTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
