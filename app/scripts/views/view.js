/*global define */
define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone) {
	'use strict';

	var MyView = Backbone.View.extend({
		el: $('#view'),

		initialize: function () {
			console.log('MyView');
		}
	});

	return MyView;
});
