/*global define */
define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone) {
	'use strict';

	var MyModel = Backbone.Model.extend({
		defaults: {
		},

		initialize: function () {
			console.log('MyModel');
		}
	});

	return MyModel;
});
