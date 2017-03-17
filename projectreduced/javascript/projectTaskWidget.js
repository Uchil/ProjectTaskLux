define([
	'lodash-compat',
	'BaseWidget',
	'jquery'
], function (_, BaseWidget, $) {

	var width = 0;
	var wid = 0;
	var width1 = 0;
	var wid1 = 0;
	var width2 = 0;
	var wid2 = 0;
	var width3 = 0;
	var wid3 = 0;
	var Widget = function (options) {
		this.ractive = new BaseWidget(options);
		this.ractive.on('doClick', this.handleClick.bind(this));
		this.ractive.on('ch', this.ch.bind(this));
		this.ractive.on('bar', this.bar.bind(this));
		this.ractive.on('bars', this.bars.bind(this));
		this.ractive.on('barss', this.barss.bind(this));
		this.ractive.on('barsss', this.barsss.bind(this));
		this.ractive.on('label', this.labelchange.bind(this));
	};
	Widget.prototype = {

		handleClick: function (event) {
			event.original.preventDefault();
			console.group('handleClick1');
			console.debug('event object:', event);
			console.debug('data', this.ractive.get());
			console.groupEnd();
		},
		bar: function (event,a) {
			console.debug('handleClick2');
			var hey = $('#selectBar').val();
			if (hey === 'bar1') {
				width = width1;
				wid = wid1;
				console.debug ('handleClick3');
				console.debug(name);
				this.ch('myBar1', a);
				width1 = width;
				wid1 = wid ;
				console.debug(width);
			} else if (hey === 'bar2') {
				width = width2;
				wid = wid2;
				console.debug('handleClick8');
				this.ch('myBar2', a);
				width2 = width;
				wid2 = wid;
			} else if (hey === 'bar3') {
				width = width3;
				wid = wid3;
				console.debug('handleClick13');
				this.ch('myBar3', a);
				width3 = width;
				wid3 = wid;
			}
		},
		ch: function (name,f) {
			width = wid;
			width = width + f;
			wid = width;
			console.debug(width);
			console.debug('handleClick');
			var elem = document.getElementById(name);
			elem.style.background = '#80ffff';
			elem.style.width = width + '%';
			console.debug(width);
			if (width >= 0) {
				if (width <= 100) {
					console.debug('handleClick2');
					var elem = document.getElementById(name);
					elem.style.background = '#7FFF00';
					elem.style.width = width + '%';
					this.labelchange(name);
					console.debug(width);
				} else if (width > 100) {
					console.debug('handleClick3');
					var elem = document.getElementById(name);
					elem.style.width = width + '%';
					elem.style.background = '#DC143C';
					this.labelchange(name);
					console.debug(width);
				}else {
					width = 0;
					wid = 0;
					var elem = document.getElementById(name);
					elem.style.width = width + '%';
					elem.style.background = '#DC143C';
					this.labelchange(name);
					console.debug(width);
				}
			}
		},
		labelchange: function (name) {
			if (name === 'myBar1') {
				document.getElementById('label1').innerHTML = width * 1  + '%';
			} else if (name === 'myBar2') {
				document.getElementById('label2').innerHTML = width * 1  + '%';
			} else {
				document.getElementById('label3').innerHTML = width * 1  + '%';
			}
		}
	};
	return {
		initRactiveWidget: function (options) {
			return new Widget(options);
		}
	};
});
