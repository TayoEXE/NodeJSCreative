var app = window.angular.module('app', [])

app.factory('nameFetcher', nameFetcher)
app.controller('mainCtrl', mainCtrl)

function nameFetcher($http) {

  var API_ROOT = 'name'
  return {
    get: function() {
      console.log("Entered nameFetcher");
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data
        })
    }
  }

};

function mainCtrl($scope, nameFetcher, $http) {
  $scope.names = [];
  
  nameFetcher.get()
      .then(function(data) {
        $scope.names = data;
      });

  $scope.getName = function() {
    console.log("Entered getName");
    nameFetcher.get()
      .then(function(data) {
        $scope.names = data;
      });
  }

};
