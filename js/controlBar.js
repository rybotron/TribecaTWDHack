var controlBar = {
	muted: false,
	setup: function (){
		var self = this;
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		this.footer = document.getElementById('footer');
		this.playHead = document.getElementById('play-head');
		var timeline = document.getElementById('timeline');
		this.timeline = timeline;
		timeline.style.width = '' + (timeline.offsetParent.offsetWidth - timeline.offsetLeft - 20) + 'px';
		window.addEventListener('resize', function (){
			self.reposition();
		})
		this.play = document.getElementById('play');
		this.play.addEventListener('click', function (){
			self.togglePlay();
		});
		documentary.popcorn.on('play', function (event){
			controlBar.play.src = 'images/layout/pause.png';
			var currentScene = documentary.currentScene()
			if(currentScene && currentScene.video){
				currentScene.video.play();
			}
		})
		documentary.popcorn.on('pause', function (event){
			controlBar.play.src = 'images/layout/play.png';
			for(var sceneIndex = 0; sceneIndex < resourceLibrary.scenes.length; sceneIndex++){
				var indexedScene = resourceLibrary.scenes[sceneIndex];
				if(indexedScene.video){
					indexedScene.video.pause();
				}
			}
		});
		timeline.addEventListener('mouseup', function (event){
			var totalOffset = timeline.offsetLeft;
			var offsetParent = timeline.offsetParent;
			while(offsetParent){
				totalOffset += offsetParent.offsetLeft;
				offsetParent = offsetParent.offsetParent;
			}
			var relativeX = event.pageX - totalOffset;
			var clickPercent = relativeX / timeline.offsetWidth;
			var timeStamp = documentary.popcorn.duration() * clickPercent;22
			documentary.popcorn.currentTime(timeStamp);
			// find scene
			var currentScene = documentary.currentScene();
			if(currentScene && currentScene.video){
				var offsetTime = timeStamp - currentScene.time;
				currentScene.video.currentTime = offsetTime;
			}
		});
		this.mute = document.getElementById('mute');
		this.mute.addEventListener('click', function (){
			self.toggleMute();
		});
	},
	reposition: function (){
		this.timeline.style.width = '' + (this.timeline.offsetParent.offsetWidth - this.timeline.offsetLeft - 20) + 'px';
	},
	toggleMute: function (state){
		if(!state){
			state = this.muted? false : true;
		}
		var videoList = document.body.getElementsByTagName('video');
		var audioList = document.body.getElementsByTagName('audio');
		switch(state){
			case true:{
				this.muted = state;
				this.mute.src = 'images/layout/speakerMuted.png';
				break;
			}
			case false:{
				this.muted = state;
				this.mute.src = 'images/layout/speaker.png';
				break;
			}
		}
		for(var vidIndex = 0; vidIndex < videoList.length; vidIndex++){
			var indexedVid = videoList[vidIndex];
			indexedVid.muted = state;
		}
		for(var audIndex = 0; audIndex < audioList.length; audIndex++){
			var indexedAud = audioList[audIndex];
			if(state){
				indexedAud.pause();
			} else{
				indexedAud.play();
			}
		}
	},
	togglePlay: function (state){
		if(!state){
			state = documentary.popcorn.paused()? true : false
		}
		switch(state){
			case true:{
				documentary.popcorn.play()
				break;
			}
			case false:{
				documentary.popcorn.pause()
				break;
			}
		}
	},
	updateTime: function (timeCode){
		var timePercent = timeCode / documentary.popcorn.duration();
		var totalWidth = this.timeline.offsetWidth;
		var graphicWidth = this.playHead.offsetWidth;
		var offsetX = Math.floor((totalWidth*timePercent)-(graphicWidth/2));
		this.playHead.style.left = ''+offsetX+'px';
	},
	registerScene: function (sceneJson){
		var timeCode = sceneJson.time;
		var timePercent = timeCode / documentary.popcorn.duration();
		var totalWidth = this.timeline.offsetWidth;
		var offsetWidth = totalWidth*timePercent;
		
		var totalOffset = this.timeline.offsetLeft;
		var offsetParent = this.timeline.offsetParent;
		while(offsetParent){
			totalOffset += offsetParent.offsetLeft;
			offsetParent = offsetParent.offsetParent;
		}
		var relativeWidth = offsetWidth + totalOffset;
		var sceneElement = document.createElement('div');
		sceneElement.setAttribute('class', 'line-scene');
		sceneElement.style.left = ''+relativeWidth+'px';
		var titleSpan = document.createElement('span');
		titleSpan.innerHTML = (sceneJson.year? (sceneJson.year + ':<br>'): '') + sceneJson.title;
		sceneElement.appendChild(titleSpan);
		var nodeImg = document.createElement('img');
		nodeImg.src = 'images/layout/sceneNode.png';
		nodeImg.setAttribute('class', 'line-scene');
		nodeImg.style.left = ''+Math.floor(relativeWidth-17)+'px';
		nodeImg.addEventListener('mouseover', function (){
			sceneElement.style.display = 'block';
		});
		nodeImg.addEventListener('mouseout', function (){
			sceneElement.style.display = 'none';
		});
		this.footer.appendChild(nodeImg);
		this.footer.appendChild(sceneElement);
		nodeImg.addEventListener('mouseup', function (event){
			documentary.popcorn.currentTime(timeCode);
		});
	}
};