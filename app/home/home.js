/**
 * Created by Sergio on 20/9/2015.
 */
/**
 * Created by palvarado on 22/06/2015.
 */
angular.module('radtools.home',[

])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider
      .state('main.home',{
        url: '/home',
        templateUrl:'home/home.html',
        controller: 'HomeCtrl',
        data: {
          requiresLogin: true
        }
      })
  }])
  .controller('HomeCtrl', ['$scope', function($scope){
    $scope.intervalo = 3000;
    var galeria = ['edificios_modernos.jpg', 'servicio-limpieza.jpg', 'conserjeria.jpg'];
    var slides = $scope.slides = [];
    $scope.addSlide = function(file) {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'images/' + file,
        text: ['Edificio','Servicio','Conserjeria'][slides.length % 3] + ' ' +
        ['Los Molles', 'de Limpieza', 'y Seguridad'][slides.length % 3],
        resumen: ['Condominio familiar','Es servicio consiste en mantener limpio las areas comunes','brindando vigilancia las 24 horas.'][slides.length % 3] + ' ' +
        ['39 viviendas familiares y 3 locales comerciales', 'pasillos, area lavanderia, salon de eventos...', 'Horario: Lunes a Viernes'][slides.length % 3]
      });
    };
    for (var i=0; i<3; i++) {
      $scope.addSlide(galeria[i]);
    }
  }])
