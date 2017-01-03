/**
 * Created by Sergio on 20/9/2015.
 */
angular.module('radtools.login',[
  'angular-storage'
])
  .factory('AuthService', ['$http', '__env', function ($http, __env) {
    var authService = {};
    authService.login = function (credentials) {
      return $http
        .post(__env.auth, credentials)
        .then(function (res) {
          return res;
      });
    };

    return authService;
  }])
  .controller('LoginCtrl', ['$scope', '$http', '$mdDialog', 'AuthService', 'store', 'jwtHelper', function($scope, $http, $mdDialog, AuthService, store, jwtHelper){
    $scope.credentials = {
      username: '',
      password: ''
    }

    $scope.login = function(credentials){
      AuthService.login(credentials).then(function(response){
        if(response.data.success){
          store.set('jwt', response.data.token);
          $mdDialog.hide(response);
        }else{
          $scope.error = response.data.msg;
        }
      }, function(error){
        $scope.error = error.data;
      })
    }
  }])
