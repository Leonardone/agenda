angular.module('app').service('AgendaSrv', function(){

    
    var appuntamenti=[{
        id:1,
        titolo: 'appuntamento con angular',
        data: new Date(),
        descrizione:'Non mi presenterò',
        luogo:'Piazza Gubassi',
        priorita:'media',
        image:'https://dailybestecn.nohup.it/wp-content/uploads/2016/03/qXvUbj6.gif'
    },{
        id:2,
        titolo: 'appuntamento con Eddie',
        data: new Date(),
        descrizione:'Fuscaldone',
        luogo:'Gubassi str',
        priorita:'alta',
        image:'https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif'


    },{
        id:3,
       titolo: 'appuntamento da Ubaldo',
        data: new Date(),
        descrizione:'baldo',
        luogo:'via Baldo degli ubaldi',
        priorita:'bassa',
        image:'http://vignette1.wikia.nocookie.net/simpsons/images/b/bb/Best-simpsons-gifs-homers-brain.gif/revision/latest?cb=20130920112513' 
    },{
        id:4,
         titolo: 'appuntamunto da Edo',
        data: new Date(),
        descrizione:'pussavia',
        luogo:'via da qui',
        priorita:'bassa',
        image:'https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif'
    },{
        id:5,
        titolo: 'appuntamunto con Nietzche',
        data: new Date(),
        descrizione:'Suicidio',
        luogo:'via del super TU, snc',
        priorita:'alta',
        image:'http://31.media.tumblr.com/265f4f5895f24c795fed2b8efd033a20/tumblr_n2tlg0mrMK1su6ajeo1_500.gif' 
    }];
    var getAppuntamenti=function(){
        return appuntamenti;
    }
    var deleteAppuntamenti= function(index){
         appuntamenti.splice(index, 1);
    }
    var getAppuntamento= function(id){
        return appuntamenti.find(function(el){
            return el.id==id;
        })
    }

    var updateAppuntamento= function(app){
        var updateoggetto=angular.copy(app);
        var indice= appuntamenti.findIndex(function(el){
            return el.id==app.id
        })
        appuntamenti.splice(indice, 1, updateoggetto);
    }

    var saveAppuntamento=function(app){
        var nuovoappuntamento=angular.copy(app);
        var arrayId=[];
        for(a of appuntamenti)
            arrayId.push(a.id);
        // appuntamenti.forEach(function(el){
        //     arrayId.push(el.id);
        // });
        var id = Math.max(...arrayId);
        nuovoappuntamento.id=id+1;
        appuntamenti.push(nuovoappuntamento);
    }

    return{
        getAppuntamenti:getAppuntamenti,
        deleteAppuntamenti:deleteAppuntamenti,
        getAppuntamento:getAppuntamento,
        updateAppuntamento: updateAppuntamento,
        saveAppuntamento:saveAppuntamento
    }
})