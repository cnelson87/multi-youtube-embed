
/**
*	reate, read, destroy cookies
**/

var Cookie = {

	checkSupport: function() {
		this.create('cookieSupportTest', 'test', 10000);
		if (this.read('cookieSupportTest')) {
			this.destroy('cookieSupportTest');
			return true;
		} else {
			return false;
		}
	},

	create: function(name, value, days) {
		var date;
		var expires;

		if (days) {
			date = new Date();
			//date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			date.setTime(date.getTime() + (days * 86400000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}

		document.cookie = name + "=" + value + expires + "; path=/";
	},

	read: function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		var i;
		var c;

		for (i = 0; i < ca.length; i++) {
			c = ca[i];

			while (c.charAt(0) == ' ') {
				c = c.substring(1, c.length);
			}

			if (c.indexOf(nameEQ) == 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}

		return null;
	},

	destroy: function(name) {
		this.create(name, "", -1);
	}

};
