/**
 * Created by Sergio on 21/9/2015.
 */
angular.module('radtools.sharedService',[
])
  .service('updateTable', function($rootScope) {
    return {
      newRecord: function(record) {
        $rootScope.$broadcast('changeTable', {
          record: record
        });
      },
      editRecord: function(record) {
        $rootScope.$broadcast('changeTable', {
          record: record
        });
      },
      deleteRecord: function(record) {
        $rootScope.$broadcast('changeTable', {
          record: record
        });
      },
      cancelar: function() {
        $rootScope.$broadcast('changeTable', {
        });
      }
    };
  })
