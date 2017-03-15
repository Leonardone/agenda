angular.module('app').filter('filtroPriorita', function(){

    return function(appuntamenti, colore){
        if(colore=='tutte'){
            return appuntamenti;
        }
       return appuntamenti.filter(function(el){
         return  el.priorita==colore;
            
       });
    }


});
    