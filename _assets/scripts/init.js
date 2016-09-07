
CNJS.main = {
	init: function () {
		var self = this;
		// console.log('CNJS.main.init');

		$.event.trigger('CNJS:main:initialized');

		VideoController();

	}
};

$(function() {
	CNJS.main.init();
});
