define('Films',
    ['FilmsModel', 'Mustage'],
    function (Model, Mustage) {
        return {
            showList: function(){
                Model.getAll({
                    success: function(data){
                        $('#filmsListWrap').html(Mustage.render($('#filmsListTemplate').html(), {films: data}));
                    },
                    error: function(e){
                        console.log(e);
                    }
                });
            },
            showItem: function(id){
                Model.getItem(id, {
                    success: function(data){
                        $('#filmsItemWrap').html(Mustage.render($('#filmsItemTemplate').html(), {film: data}));
                    },
                    error: function(e){
                        console.log(e);
                    }
                });
            }
        };
    }
);