/*global define */
define([
	'jquery',
	'backbone',
    'templates/templates'
], function ($, Backbone, Templates) {
	'use strict';

	var MyView = Backbone.View.extend({
		el: $('#view'),

		initialize: function () {
			console.log('MyView');

            this.render();
		},

        render: function () {
            var template = Templates['app/scripts/templates/test.html']();
            this.$el.html(template);
        }
	});

	return MyView;
});
