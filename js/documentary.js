var documentary = {
	setup: function (domConfig, library){
		var container = document.getElementById(domConfig.containerId)
		console.log(domConfig.containerId)
		// Iterate through the chapters and populate the 3D world with resources.
		var resourceHandler = domConfig.resourceHandler;
		for(var chapterIndex = 0; chapterIndex < library.chapters.length; chapterIndex++){
			var indexedChapter = library.chapters[chapterIndex];
			if(indexChapter.resources){
				// Iterate through the resources and hand them to the resource handler.
				for(var rscIndex = 0; rscIndex < indexedChapter.resources.length; rscIndex++){
					var indexedRsc = indexedChapter.resources[rscIndex];
					var rscElement = this.createResouce(indexedRsc);
					resourceHandler.handle(rscElement, indexedRsc)
				}
			}
		}
	},
	createResouce: function (rscJson){
		var rscContainer = document.createElement('div');
		var rscElement;
		switch(rscJson.elementType){
			case 'image':{
				rscElement = document.createElement('img');
				rscElement.setAttribute('src', rscJson.source);
				break;
			}
			case 'video':{
				rscElement = document.createElement('video');
				rscElement.setAttribute('controls', 'controls')
				for(var key in rscJson.source){
					var sourceElement = document.createElement('source');
					sourceElement.setAttribute('src', rscJson[key]);
					rscElement.appendChild(sourceElement);
				}
				break;
			}
		}
		rscContainer.appendChild(rscElement);
		return rscContainer;
	}
}
document.addEventListener("DOMContentLoaded", function (){
	documentary.setup(htmlConfiguration, resourceLibrary);
})