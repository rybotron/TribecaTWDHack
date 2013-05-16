(function (Popcorn) {
	//"use strict";
	//?
	Popcorn.basePlugin('scene', function (options, base) {
		// Scene start time is documentary.sceneTransitionTime after options.start
		var sceneStart = options.start + documentary.sceneTransitionTime; // Full seconds
		var sceneNumber = options.sceneNumber; // Cannonical, starts at 1, ends at 6.
		var sceneJson = options.scene;
		/*
		We don't even need to specify start/frame/end/_teardown methods here,
		since base.animate takes care of all that for us.
		*/
		return {
			start: function (event){
				var timeStamp = documentary.popcorn.currentTime();
				var transitionTime = (sceneStart - timeStamp) * 1000 // Milliseconds
				transitionTime = Math.max(100, transitionTime);
				moveToScene(sceneNumber, transitionTime)
				if(sceneJson.video){
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
}(Popcorn));
