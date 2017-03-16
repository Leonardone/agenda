angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('', '/');



    $stateProvider
    .state('/',{
        url:'/',
        controller: 'AgendaCtrl',
        templateUrl:'agenda/agenda.template.html',
        resolve:{
            appuntamenti:function(AgendaSrv){
                return AgendaSrv.getAppuntamenti() 
                 //lo stesso appuntamenti che troviamo sul service//
            }
        }
    
    })
    .state('dettaglio',{
       url:'/dettaglio/:id', //si può scrivere anche tra le graffe senza i 2 punti
       templateUrl:'agenda/dettaglio.template.html',
       controller:'DettaglioCtrl',
       resolve:{
           appuntamento: function(AgendaSrv, $stateParams){
               return AgendaSrv.getAppuntamento($stateParams.id);
                //lo stesso appuntamento che troviamo nel service//
           }
       },
           onEnter:function(){
            console.log('sono entrato');
        },
        onExit:function(){
            console.log('sono uscito');
        }
       
    });

});