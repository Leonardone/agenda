angular.module('app').controller('NuovaCtrl', function($scope, AgendaSrv, $state){
    $scope.crea=function(){
    console.log($scope.appuntamento);
    AgendaSrv.saveAppuntamento($scope.appuntamento);
     $state.go('/');
}

$scope.back=function(){
   $state.go('/')
}

   $scope.appuntamento={}
   $scope.appuntamento.priorita='bassa';
   $scope.appuntamento.data= new Date();
});