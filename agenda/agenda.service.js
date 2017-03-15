angular.module('app').service('AgendaSrv', function(){

    
    var appuntamenti=[{
        titolo: 'appuntamento con angular',
        data: new Date(),
        descrizione:'Non mi presenterò',
        luogo:'Piazza Gubassi',
        priorita:'#ffa500',
        image:'https://dailybestecn.nohup.it/wp-content/uploads/2016/03/qXvUbj6.gif'
    },{
        titolo: 'appuntamento con Eddie',
        data: new Date(),
        descrizione:'Fuscaldone',
        luogo:'Gubassi str',
        priorita:'#ff0000',
        image:'https://media.giphy.com/media/4pMX5rJ4PYAEM/giphy.gif'


    },{
       titolo: 'appuntamento da Ubaldo',
        data: new Date(),
        descrizione:'baldo',
        luogo:'via Baldo degli ubaldi',
        priorita:'#00ff00',
        image:'http://vignette1.wikia.nocookie.net/simpsons/images/b/bb/Best-simpsons-gifs-homers-brain.gif/revision/latest?cb=20130920112513' 
    },{
         titolo: 'appuntamunto da Edo',
        data: new Date(),
        descrizione:'pussavia',
        luogo:'via da qui',
        priorita:'#00ff00',
        image:'https://media.giphy.com/media/fDO2Nk0ImzvvW/giphy.gif'
    },{
        titolo: 'appuntamunto con Nietzche',
        data: new Date(),
        descrizione:'Suicidio',
        luogo:'via del super TU, snc',
        priorita:'#ff0000',
        image:'http://31.media.tumblr.com/265f4f5895f24c795fed2b8efd033a20/tumblr_n2tlg0mrMK1su6ajeo1_500.gif' 
    }];
    var getAppuntamenti=function(){
        return appuntamenti;
    }
    var deleteAppuntamenti= function(index){
         appuntamenti.splice(index, 1);
    }
    var getAppuntamento= function(titolo){
        return appuntamenti.find(function(el){
            return el.titolo==titolo;
        })
    }

    return{
        getAppuntamenti:getAppuntamenti,
        deleteAppuntamenti:deleteAppuntamenti,
        getAppuntamento:getAppuntamento
    }
})