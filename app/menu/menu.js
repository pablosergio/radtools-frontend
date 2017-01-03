/**
 * Created by Sergio on 20/9/2015.
 */
angular.module('radtools.menu',[

])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('main',{
        url: '/main',
        templateUrl:'menu/menu.html',
        controller: 'MenuCtrl',
        data: {
          requiresLogin: true
        },
        resolve: {
          main: function($ocLazyLoad){
            return $ocLazyLoad.load({
              name: 'main',
              files:[ 'menu/menu.css']
            })
          }

        }
      })

  }])
  .controller("MenuCtrl", ['$scope', '$state', '$window', 'store', 'jwtHelper', function($scope, $state, $window, store, jwtHelper){
    var token = store.get('jwt');
    var usuario = jwtHelper.decodeToken(token).username;
    var menu =  jwtHelper.decodeToken(token).menu;
    $scope.opciones = menu;
    $scope.usuario = usuario;

    $scope.logout = function(){
      store.remove('jwt');
      $window.location.reload();
    }
  }])
  .directive("menuOpciones", function () {
    return function (scope, element, attrs) {
      var data = scope[attrs["menuOpciones"]];
      var recursivo = function(data, elemento, level){
        angular.forEach(data, function(value, key){
          var tagLi = level == 1 || !value.submenu ? angular.element('<li>') : angular.element('<li class="dropdown-submenu">');
          var tagA = value.submenu ? angular.element('<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">').text(value.opcion) : angular.element('<a>').text(value.opcion);
          var tagSpan = angular.element('<span>');
          tagSpan.css('margin-left', '8px');
          level == 1 && value.submenu ? tagSpan.addClass('caret') : null;
          tagA.append(tagSpan);
          var link = value.href != null ? '#/' + (value.href).replace('.','/'): null;
          tagA.attr('href', link);
          var tagI = angular.element('<i>');
          tagI.addClass(value.icon);
          tagA.prepend(tagI);
          tagLi.append(tagA);
          elemento.append(tagLi);
          if(value.submenu){
            var tagUl = level == 1 ? angular.element('<ul class="dropdown-menu multi-level" >') : angular.element('<ul class="dropdown-menu">');
            tagLi.append(tagUl);
            recursivo(value.submenu, tagUl, 2);
          }
        });
      }

      var tagUl = angular.element('<ul class="nav navbar-nav">');
      element.append(tagUl);
      recursivo(data, tagUl, 1);
    }
  })
