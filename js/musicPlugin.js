var audioController = {
	elements: [],
	intervals: [
		{start: 43, end: 55},
		{start: 56, end: 108},
		{start: 109, end: 144},
		{start: 145, end: 160},
	],
	currentIndex: undefined,
	setup: function (){
		this.elements[0] = document.getElementById('audio1');
		this.elements[1] = document.getElementById('audio2');
		this.elements[2] = document.getElementById('audio3');
		this.elements[3] = document.getElementById('audio4');
		this.elements[0].volume = 0.15;
		this.elements[1].volume = 0.15;
		this.elements[2].volume = 0.15;
		this.elements[3].volume = 0.15;
	},
	time: function (timeStamp){
		var oldElement;
		var currentElement;
		if(this.currentIndex !== undefined){
			var currentInterval = this.intervals[this.currentIndex];
			if(currentInterval.start < timeStamp && currentInterval.end > timeStamp){
				currentElement = this.elements[this.currentIndex];
			} else{
				oldElement = this.elements[this.currentIndex];
			}
		}
		if(!currentElement){
			for(var intervalIndex = 0; intervalIndex < this.intervals.length; intervalIndex++){
				var indexedInterval = this.intervals[intervalIndex];
				if(indexedInterval.start < timeStamp && indexedInterval.end > timeStamp){
					currentElement = this.elements[intervalIndex];
					this.currentIndex = intervalIndex;
					break;
				}
			}
		}
		if(currentElement){
			currentElement.play()
		} else{
			this.currentIndex = undefined;
		}
		if(oldElement){
			oldElement.pause()
		}
	},
	pause: function (){
		if(this.currentIndex !== undefined){
			var currentElement = this.elements[this.currentIndex];
			currentElement.pause();
		}
	}
}

/*var audioController = {
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
		this.crossFade.audioElement = document.getElementById('audio2');
		this.mainAudio.audioElement.volume = 0.15;
		this.crossFade.audioElement.volume = 0.15;
	},
	playAudio: function (sources){
		var mpeg;
		var ogg;
		if(sources){
			mpeg = sources.mpeg;
			ogg = sources.ogg;
		} else{
			this.mainAudio.audioElement.pause();
			//this.mainAudio.audioElement.currentTime = 0;
			this.crossFade.audioElement.pause();
			//this.crossFade.audioElement.currentTime = 0;
		}
		if(mpeg == this.mainAudio.mpeg && ogg == this.mainAudio.ogg){
			return;
		}
		this.crossFade.oggElement = document.createElement('source')
		this.crossFade.oggElement.setAttribute('type', 'audio/ogg');
		this.crossFade.oggElement.setAttribute('src', ogg)
		this.crossFade.mpegElement = document.createElement('source')
		this.crossFade.mpegElement.setAttribute('type', 'audio/ogg');
		this.crossFade.mpegElement.setAttribute('src', ogg)
		this.crossFade.audioElement.innerHTML = '';
		this.crossFade.audioElement.appendChild(this.crossFade.oggElement);
		this.crossFade.audioElement.appendChild(this.crossFade.mpegElement);
		this.crossFade.audioElement.play();
		var oldMain = this.mainAudio;
		this.mainAudio = this.crossFade;
		this.crossFade = oldMain;
		//this.crossFade.audioElement.pause();
		
	}
}
var error_object_is_not_a_function = function (Popcorn) {
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
				}
			},
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
}
error_object_is_not_a_function(Popcorn);*/
