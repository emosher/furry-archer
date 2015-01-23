'use strict';

/**
 * @ngdoc function
 * @name largeDataTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the largeDataTestApp
 */
angular.module('largeDataTestApp')
  .controller('MainCtrl', function ($scope, $http) {

    // Time the HTTP request
    var httpEnd;
    var httpStart = new Date().getTime();
    $http.get('dummy-data.json').success(function(data, status, headers, config) {
      httpEnd = new Date().getTime();
      $scope.httpTime = httpEnd - httpStart;

      // Now that we have the data, kick off the parallel computation
      startParallel(data);
    });

    $scope.computeStart = 0, $scope.computeEnd = 0;

    // Starts our average age computation over 20,000 records
    function startParallel (data) {

      // For convenience
      var dataObj = { records: data, avgAge: 0 };

      // Time the parallel computation
      $scope.computeStart = new Date().getTime();
      var parallel = new Parallel(dataObj);

      // Farm out the average computation to a web worker
      parallel.spawn(function(d) {

        var total = 0;
        d.records.forEach(function(e) {
          total += e.age;
        });

        return (total / d.records.length);
      }).then(function(){
        $scope.computeEnd = new Date().getTime();

        $scope.computeTime = $scope.computeEnd - $scope.computeStart;

        $scope.avgAge = arguments[0];

        // We've changed things outside of Angular's control, must $apply
        $scope.$apply();
      });
    }

  });
