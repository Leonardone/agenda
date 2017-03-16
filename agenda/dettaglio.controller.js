angular.module('app').controller('DettaglioCtrl', function($scope, AgendaSrv, $stateParams, $timeout, $state){

    $scope.loading=true;
    // $scope.appuntamento= appuntamento;
    $timeout(function(){
        $scope.appuntamento=AgendaSrv.getAppuntamento($stateParams.id);
        $scope.loading= false;
    }, 1000);
   

   $scope.modifica=function(){
       AgendaSrv.updateAppuntamento($scope.appuntamento);
       $state.go('/');

   }

   $scope.back=function(){
    $state.go('/');
   }
})