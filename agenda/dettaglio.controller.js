angular.module('app').controller('DettaglioCtrl', function($scope, AgendaSrv, $stateParams, $timeout){

    $scope.loading=true;
    // $scope.appuntamento= appuntamento;
    $timeout(function(){
        $scope.appuntamento=AgendaSrv.getAppuntamento($stateParams.id);
        $scope.loading= false;
    }, 1000);
   

   $scope.modifica=function(){
       console.log($scope.appuntamento);
   }
})