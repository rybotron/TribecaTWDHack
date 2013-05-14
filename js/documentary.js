var documentary = {
	setup: function (domConfig, library){
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
				var indexedPiece = sceneJson.piece[pieceIndex];
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