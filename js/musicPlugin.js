var audioController = {
	mainAudio: {
		which: 1,
		ogg: undefined,
		mpeg: undefined,
		audioElement: undefined,
		oggElement: undefined,
		mpegElement: undefined
	},
	crossFade: {
		which: 2,
		ogg: undefined,
		mpeg: undefined,
		audioElement: undefined,
		oggElement: undefined,
		mpegElement: undefined
	},
	setup: function (){
		this.mainAudio.audioElement = document.getElementById('audio1');
		this.mainAudio.oggElement = document.getElementById('audio1Ogg');
		this.mainAudio.mpegElement = document.getElementById('audio1Mpeg');
		this.crossFade.audioElement = document.getElementById('audio2');
		this.crossFade.oggElement = document.getElementById('audio2Ogg');
		this.crossFade.mpegElement = document.getElementById('audio2Mpeg');
	},
	playAudio: function (sources){
		var mpeg;
		var ogg;
		if(sources){
			mpeg = sources.mpeg;
			ogg = sources.ogg;
		} else{
			this.mainAudio.audioElement.pause();
			this.mainAudio.audioElement.currentTime(0);
			this.crossFade.audioElement.pause();
			this.crossFade.audioElement.currentTime(0);
		}
		if(mpeg == mainAudio.mpeg && ogg == mainAudio.ogg){
			return;
		}
		this.crossFade.mpeg = mpeg;
		this.crossFade.ogg = ogg;
		this.crossFade.mpegElement.src = mpeg;
		this.crossFade.oggElement.src = ogg;
		this.crossFade.audioElement.play();
		var oldMain = this.mainAudio;
		this.mainAudio = this.crossFade;
		this.crossFade = oldMain;
		this.crossFade.pause();
	}
}/*
(function (Popcorn) {
	//"use strict";
	//?
	Popcorn.basePlugin('audio', function (options, base) {
		// Scene start time is documentary.sceneTransitionTime after options.start
		var sceneStart = options.start + documentary.sceneTransitionTime; // Full seconds
		var sceneNumber = options.sceneNumber; // Cannonical, starts at 1, ends at 6.
		var sceneJson = options.scene;
		/*
		We don't even need to specify start/frame/end/_teardown methods here,
		since base.animate takes care of all that for us.
		*/
		/*
		return {
			start: function (event){
				var timeStamp = documentary.popcorn.currentTime();
				var transitionTime = (sceneStart - timeStamp) * 1000 // Milliseconds
				transitionTime = Math.max(100, transitionTime);
				audioController.playAudio(sceneJson.audio);
				/*if(sceneJson.video){
					setTimeout(function (){
						sceneJson.video.play();
					}, transitionTime);
				}*/
/*			},
			end: function (event){
			},
			frame: function (event){
			}
		}
	}, {
		about: {
			name: 'Popcorn Camera Plugin',
			version: '0.1',
			author: 'JacobABrennan',
			website: 'http://github.com/jacobabrennan'
		}
	});
}(Popcorn));
*/