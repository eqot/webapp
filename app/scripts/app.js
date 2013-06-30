/*global define */
define(['views/view', 'models/model'], function (MyView, MyModel) {
    'use strict';

    var MyApp = function () {
        var model = new MyModel();
        new MyView({model: model});
    };

    return MyApp;

});
