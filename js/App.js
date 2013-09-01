define('App',['Films'], function(Films) {
    return {
        start: function(){
            this.registerEvents();
            Films.showList();
        },
        registerEvents: function(){
            $('#filmsListWrap').click(function(e){
                var element = $(e.target);
                if(!element.hasClass('filmsItem')) {
                    element = element.parents('.filmsItem');
                }
                var id = element.attr('data-id');
                $('.active').removeClass('active');
                element.addClass('active');
                Films.showItem(id);
            });
        }
    };
});

