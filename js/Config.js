define('Config',
    function () {
        return {
            serverUrl: 'js-test/',
            getFilmsAllUrl: function(){
                return this.serverUrl+'film1.json';
            },
            getFilmsItemUrl: function(id){
                return this.serverUrl+'film'+(1+id)+'.json';
            }
        };
    }
);