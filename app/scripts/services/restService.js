/**
 * Created by Sergio on 20/9/2015.
 */
'use strict';

angular.module('radtools.restService',[
])
  .factory('backendResource', ['$resource', 'api', function($resource, api){
    var service = {
      departamentos: $resource(api.departamentos, null, {
        query: { method: 'GET', isArray: false}
      }),
      deudaexpensadepartamento: $resource(api.deudaexpensa + '/departamento/:id', { id: '@departamentoId'},{
        query: { method: 'GET', isArray: true}
      }),
      deudaexpensames: $resource(api.deudaexpensa + '/mes/:mes', { mes: '@mes'},{
        query: { method: 'GET', isArray: true}
      }),
      pagoexpensa: $resource(api.pagoexpensa, null, {
        query: { method: 'GET', isArray: false}
      }),
      pagoexpensaid: $resource(api.pagoexpensa + '/:pagoId', {pagoId: '@pagoId'}, {
        query: { method: 'GET', isArray: false},
        'update': { method: 'PUT', isArray: false }
      }),
      tipolista: $resource(api.listas + '/:tipo', {tipo: '@tipo'}, {
        query: { method: 'GET', isArray: true},
      }),

      egreso: $resource(api.egresos, null, {
        query: { method: 'GET', isArray: false }
      }),

      tipoegreso: $resource(api.egresos + '/tipo/:tipo', { tipo: '@tipo' },{
        query: { method: 'GET', isArray: false }
      }),

      egresoid: $resource(api.egresos + '/:egresoId', { egresoId: '@egresoId' },{
        query: { method: 'GET', isArray: false },
        'update': { method: 'PUT', isArray: false }
      })

      /*listas: $resource(api.apiListas, {condicion: '@valor'} , {
        query: { method: 'GET', isArray: false}
      }),*/
    };
    return service;
  }]);
