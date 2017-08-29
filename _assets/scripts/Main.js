
var Main = {
	init: function () {
		var $html = $('html');
		if (Config.isIE9) {$html.addClass('ie9');}
		if (Config.isIE10) {$html.addClass('ie10');}
		if (Config.isIE11) {$html.addClass('ie11');}
		if (Config.isAndroid) {$html.addClass('android');}
		if (Config.isIOS) {$html.addClass('ios');}

		$.event.trigger('Main:initialized');

		VideoController();

	}
};

$(function() {
	Main.init();
});
