var documentary = {
	popcorn: undefined,
	sceneTransitionTime: 2, // Full seconds
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
		var container = document.getElementById(domConfig.containerId);
		controlBar.setup();
		audioController.setup();
		// Iterate through the scenes and populate the 3D world with set pieces.
		this.resourceHandler = domConfig.resourceHandler;
		for(var sceneIndex = 0; sceneIndex < library.scenes.length; sceneIndex++){
			var indexedScene = library.scenes[sceneIndex];
			this.createScene(indexedScene);
			this.popcorn.scene({
				sceneNumber: sceneIndex+1,
				start: indexedScene.time,
				end: indexedScene.time+indexedScene.duration,
				scene: indexedScene
			});
			this.popcorn.audio({
				sceneNumber: sceneIndex+1,
				start: indexedScene.time,
				end: indexedScene.time+indexedScene.duration,
				scene: indexedScene
			});
		}
	},
	createScene: function (sceneJson){
		controlBar.registerScene(sceneJson);
		if(sceneJson.pieces){
			// Iterate through the set pieces and hand them to the resource handler.
			for(var pieceIndex = 0; pieceIndex < sceneJson.pieces.length; pieceIndex++){
				var indexedPiece = sceneJson.pieces[pieceIndex];
				var pieceElement = this.createPiece(indexedPiece, sceneJson);
				this.resourceHandler.handle(pieceElement, sceneJson, indexedPiece);
			}
		}
	},
	createPiece: function (pieceJson, sceneJson){
		switch(pieceJson.type){
            case 'image':{
                var pieceContainer = document.createElement('div');
                pieceContainer.setAttribute('class', 'resource');
                var pieceElement;

				pieceElement = document.createElement('img');
				pieceElement.setAttribute('src', pieceJson.source);
				break;
			}
			case 'video':{
                var pieceContainer = document.createElement('div');
                pieceContainer.setAttribute('class', 'resource');
                var pieceElement;

                pieceContainer.style.background = 'blue'
				pieceElement = document.createElement('video');
				sceneJson.video = pieceElement;
				for(var key in pieceJson.source){
					var sourceElement = document.createElement('source');
					sourceElement.setAttribute('src', pieceJson.source[key]);
					pieceElement.appendChild(sourceElement);
				}
				break;
			}
            case 'text':{

                var textContent = pieceJson.text;
                var y = 0;

                var html = '';
                var pieceContainer = document.createElement('div');

                for ( var i = 0; i < textContent.length; i ++ ) {

                    var item = textContent[ i ];

                    html += '<div class = "text">'+item+'</div>';

                }
                pieceContainer.innerHTML = html;
                break;
            }
            case 'date':{

                var textContent = pieceJson.text;
                var y = 0;

                var html = '';
                var pieceContainer = document.createElement('div');
                var pieceElement;

                pieceContainer.setAttribute('class', 'date')
                pieceElement = document.createElement('div');
                //pieceElement.innerText = item;

                for ( var i = 0; i < textContent.length; i ++ ) {

                    var item = textContent[ i ];

                    html += '<div>'+item+'</div>';

                }
                pieceElement.innerHTML = html;
                break;
            }
		}
		if(pieceElement){
			pieceContainer.appendChild(pieceElement);
		}
		return pieceContainer;
	},
	currentScene: function (){
		var timeStamp = documentary.popcorn.currentTime();
		var currentScene;
		for(var sceneIndex = 0; sceneIndex < resourceLibrary.scenes.length; sceneIndex++){
			var indexedScene = resourceLibrary.scenes[sceneIndex];
			if(indexedScene.duration && indexedScene.time < timeStamp && timeStamp < indexedScene.time+indexedScene.duration){
				currentScene = indexedScene;
				break;
			}
		}
		return currentScene;
	}
}
document.addEventListener("DOMContentLoaded", function (){
	documentary.setup(htmlConfiguration, resourceLibrary);
})