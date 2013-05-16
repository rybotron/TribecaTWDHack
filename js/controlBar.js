var controlBar = {
	setup: function (){
		var self = this;
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		var footer = document.getElementById('footer');
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
		})
		documentary.popcorn.on('pause', function (event){
			controlBar.play.src = 'images/layout/play.png';
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
			var timeStamp = documentary.popcorn.duration() * clickPercent;
			documentary.popcorn.currentTime(timeStamp);
		});
		
	},
	reposition: function (){
		this.timeline.style.width = '' + (this.timeline.offsetParent.offsetWidth - this.timeline.offsetLeft - 20) + 'px';
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
	updateTime: function(timeCode){
		var timePercent = timeCode / documentary.popcorn.duration();
		var totalWidth = this.timeline.offsetWidth;
		this.playHead.style.left = (totalWidth*timePercent)+'px';
	}
};
document.addEventListener("DOMContentLoaded", function (){
	controlBar.setup();
});