'use strict';

/**
 * @ngdoc overview
 * @name radtools
 * @description
 * # Sistema Rad Tools
 *
 * Main module of the application.
 */
var env = {};

// Import variables if present (from env.js)
if(window){
  Object.assign(env, window.__env);
}
angular
  .module('radtools', [
    'oc.lazyLoad',
    'ui.router',
    'ngResource',
    'angular-jwt',
    'ngMaterial',
    //'radtools.constantes',
    'radtools.restService',
    'radtools.sharedService',
    'radtools.login',
    'radtools.menu',
    'radtools.home',
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'jwtInterceptorProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, jwtInterceptorProvider, $httpProvider) {
    $urlRouterProvider.otherwise(function($injector, $location) {
      var $state = $injector.get('$state');
      $state.go('main.home');
    });

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    };

    $httpProvider.interceptors.push('jwtInterceptor');

    /* $httpProvider.interceptors.push(['$q', '$injector', 'store', function($q, $injector, store) {
     return {
     'responseError': function(response) {
     var $state = $injector.get('$state');
     if(response.status === 401 || response.status === 403) {
     loginModal().then(function(){
     return $state.go('main.home');
     })
     }
     return $q.reject(response);
     }
     };
     }]);*/

  }])
  // Register environment in AngularJS as constant
  .constant('__env', env)
  .run(['$rootScope', '$state', '$window', '$mdDialog', 'store', 'jwtHelper', function($rootScope, $state, $window, $mdDialog, store, jwtHelper){
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams){
      if(toState.data  && toState.data.requiresLogin){
        if(!store.get('jwt') || jwtHelper.isTokenExpired(store.get('jwt'))){
          e.preventDefault();
          $mdDialog.show({
            controller: 'LoginCtrl',
            templateUrl: 'login/login.html',
            parent: angular.element(document.body),
            targetEvent: e,
            clickOutsideToClose:false,
            onRemoving: function(){
              $mdDialog.cancel();
            }
          })
            .then(function(){
            if(toState.name === 'radtools'){
              return $state.go('main.home');
            }else{
              return $state.go(toState.name, toParams);
            }
          });
        }
      }
    });
    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
      if(to.name === 'main.manualusuario'){
        $state.go(from.name);
      }
    });
    /* Eliminar Token al cerrar la ventana del navegador */
    $rootScope.onExit = function() {
      //store.remove('jwt');
      //return ('Se eliminaran los datos de sesion'); /* Permite mostrar una ventana de dialogo pidiendo confirmacion de abandono de pagina */
    };
    $window.onbeforeunload =  $rootScope.onExit;
  }])
  .config(disableLogging);

  function disableLogging($logProvider, __env){
    $logProvider.debugEnabled(__env.enableDebug);
  }

  // Inject dependencies
  disableLogging.$inject = ['$logProvider', '__env'];

