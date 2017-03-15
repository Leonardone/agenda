angular.module('app').service('AgendaSrv', function(){

    
    var appuntamenti=[{
        titolo: 'appuntamento con angular',
        data: new Date(),
        descrizione:'Non mi presenterò',
        luogo:'Piazza Gubassi',
        priorita:'#ffa500'
    }];

    var getAppuntamenti=function(){
        return appuntamenti;
    }


    return{
        getAppuntamenti:getAppuntamenti
    }
})