var controlBar = {
	setup: function (){
		var self = this;
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		var footer = document.getElementById('footer');
		var timeline = document.getElementById('timeline');
		this.timeline = timeline;
		timeline.style.width = '' + (timeline.offsetParent.offsetWidth - timeline.offsetLeft - 20) + 'px';
		window.addEventListener('resize', function (){
			self.reposition();
		})
		this.play = document.getElementById('play');
		this.play.addEventListener('click', function (){
			console.log('asdf')
			self.togglePlay();
		})
		
	},
	reposition: function (){
		this.timeline.style.width = '' + (this.timeline.offsetParent.offsetWidth - this.timeline.offsetLeft - 20) + 'px';
	},
	togglePlay: function (state){
		if(!state){
			state = this.popcorn.paused()? true : false
		}
		switch(state){
			case true:{
				this.popcorn.play()
				break;
			}
			case false:{
				this.popcorn.pause()
				break;
			}
		}
	}
};
document.addEventListener("DOMContentLoaded", function (){
	controlBar.setup();
});