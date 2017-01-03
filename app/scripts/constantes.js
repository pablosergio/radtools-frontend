/**
 * Created by Sergio on 20/9/2015.
 */
angular.module('radtools.constantes', [ ])
  .constant('api', {
    auth: 'http://localhost:8081/api/login',
    departamentos: 'http://localhost:3003/api/departamentos',
    deudaexpensa: 'http://localhost:3003/api/deuda',
    pagoexpensa: 'http://localhost:3003/api/pagoexpensa',
    listas: 'http://localhost:3003/api/listas',
    egresos: 'http://localhost:3003/api/egresos',
  });
