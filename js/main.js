require.config({
    paths: {
        jquery: '../libs/jquery-1.10.2.min',
        Mustage: '../libs/mustache'
    }
});
require(['App'], function(app){
    app.start();
});