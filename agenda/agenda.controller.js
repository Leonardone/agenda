angular.module('app').controller('AgendaCtrl', function($scope, appuntamenti, AgendaSrv){

    $scope.appuntamenti= appuntamenti;

    $scope.elimina = function(index){
        AgendaSrv.deleteAppuntamenti(index);
    }

 


});