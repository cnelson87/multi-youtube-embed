
var VideoController = function() {

	var elVideoPlayers = document.getElementsByClassName('video-player');
	var ytVideoPlayers = {};
	var currentVideoPlayer = null;

	if (!elVideoPlayers.length) {return;}

	var onStateChange = function(state) {
		var id = state.target.a.id;
		if (state.data === 0) {
			// console.log('ended');
			currentVideoPlayer = null;
		}
		if (state.data === 1) {
			// console.log('playing');
			if (currentVideoPlayer && currentVideoPlayer.a.id !== id) {
				currentVideoPlayer.pauseVideo();
			}
			currentVideoPlayer = ytVideoPlayers[id];
		}
		// if (state.data === 2) {
		// 	console.log('paused');
		// }

	};

	window.onYouTubeIframeAPIReady = function() {
		var id = null;
		// console.log('onYouTubeIframeAPIReady');

		for (var i=0, len=elVideoPlayers.length; i<len; i++) {
			id = elVideoPlayers[i].id;
			ytVideoPlayers[id] = new YT.Player(id);
			ytVideoPlayers[id].addEventListener('onStateChange', function(state) {
				onStateChange(state);
			});
		}

	};

};
