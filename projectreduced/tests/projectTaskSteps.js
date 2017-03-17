var _ = require('lodash-compat');

module.exports = function () {

	// Load standard world object to be 'this' in steps.
	this.World = require('../../../support/world.js').World;

	// Add common steps to this suite, using this suite as the scope.
	_.bind(require('../../../support/steps.js'), this)();

	this.Before(function (scenario, callback) {

		// Semantic selectors for inspecting the widget.
		this.widget = { container: '.projectTaskWidget' };
		this.widget.title = this.widget.container + ' h2';

		callback();

	});

};
