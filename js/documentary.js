var documentary = {
	popcorn: undefined,
	setup: function (domConfig, library){
		// Cannot Change!
		var fakeVideo = Popcorn.HTMLNullVideoElement('#'+domConfig.containerId, {frameAnimation:true});
		fakeVideo.src = '#t=,'+library.tourDuration;
		this.popcorn = Popcorn(fakeVideo);
		// Cannot Change!
		
		//var slider = document.getElementById('controller');
		/*slider.addEventListener('input', function (event){
			documentary.popcorn.currentTime(this.value);
		});*/
		this.popcorn.on('timeupdate', function (event){
			controlBar.updateTime(this.currentTime());
		});
		this.popcorn.scene({start: 50, end: 950});
		var container = document.getElementById(domConfig.containerId);
		// Iterate through the scenes and populate the 3D world with set pieces.
		this.resourceHandler = domConfig.resourceHandler;
		for(var sceneIndex = 0; sceneIndex < library.scenes.length; sceneIndex++){
			var indexedScene = library.scenes[sceneIndex];
			this.createScene(indexedScene);
		}
	},
	createScene: function (sceneJson){
		if(sceneJson.pieces){
			// Iterate through the set pieces and hand them to the resource handler.
			for(var pieceIndex = 0; pieceIndex < sceneJson.pieces.length; pieceIndex++){
				var indexedPiece = sceneJson.pieces[pieceIndex];
				var pieceElement = this.createPiece(indexedPiece);
				this.resourceHandler.handle(pieceElement, sceneJson, indexedPiece);
			}
		}
	},
	createPiece: function (pieceJson){
		var pieceContainer = document.createElement('div');
		pieceContainer.setAttribute('class', 'resource');
		var pieceElement;
		switch(pieceJson.type){
			case 'image':{
				pieceElement = document.createElement('img');
				pieceElement.setAttribute('src', pieceJson.source);
				break;
			}
			case 'video':{
				pieceContainer.style.background = 'blue'
				pieceElement = document.createElement('video');
				pieceElement.setAttribute('controls', 'controls')
				for(var key in pieceJson.source){
					var sourceElement = document.createElement('source');
					sourceElement.setAttribute('src', pieceJson[key]);
					pieceElement.appendChild(sourceElement);
				}
				break;
			}
		}
		if(pieceElement){
			pieceContainer.appendChild(pieceElement);
		}
		return pieceContainer;
	}
}
document.addEventListener("DOMContentLoaded", function (){
	documentary.setup(htmlConfiguration, resourceLibrary);
})