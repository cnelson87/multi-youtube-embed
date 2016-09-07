
/**
*	application constants
**/

if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

var Config = {
	siteUrl: window.location.origin,
	isIE9: navigator.userAgent.indexOf('MSIE 9') !== -1,
	isIE10: navigator.userAgent.indexOf('MSIE 10') !== -1,
	isIE11: navigator.userAgent.indexOf('MSIE 11') !== -1,
	isAndroid: /(android)/i.test(navigator.userAgent),
	isIOS: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false,
	hasFormValidation: typeof document.createElement('input').checkValidity === 'function',
	hasTouch: !!('ontouchstart' in window)
};
