define('FilmsModel',
    ['jquery', 'Config'],
    function ( $, config ) {
        return {
            list: [],
            getAll: function(callback){
                var that = this;
                $.ajax(config.getFilmsAllUrl(),{
                    dataType: 'json',
                    success: function(data){
                        try{
                            var i;
                            for(i in data.Films) {
                                that.list.push({
                                    id: i,
                                    serverId: +data.Films[i].id,
                                    name: data.Films[i].name,
                                    rating: data.Films[i].rating,
                                    year: data.Films[i].year
                                });
                            }
                        }
                        catch(e){
                            callback.error(e);
                        }
                        callback.success(that.list);
                    },
                    error: function(e){
                        callback.error(e)
                    }
                });
            },
            getItem: function(id, callback){
                var that = this;

                //cache
                if(that.list[id].extended) {
                    callback.success(that.list[id]);
                    return;
                }

                $.ajax(config.getFilmsItemUrl(that.list[id].serverId),{
                    dataType: 'json',
                    success: function(data){
                        try{
                            that.list[id].extended = {
                                imgUrl: data.imgUrl,
                                content: data.content
                            };
                        }
                        catch(e){
                            callback.error(e);
                        }
                        callback.success(that.list[id]);
                    },
                    error: function(e){
                        callback.error(e)
                    }
                });
            }
        };
    }
);