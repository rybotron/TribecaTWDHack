var documentary = {
	setup: function (domConfig, library){
		var container = document.getElementById(domConfig.containerId)
		console.log(domConfig.containerId)
	}
}
document.addEventListener("DOMContentLoaded", function (){
	documentary.setup(htmlConfiguration, resourceLibrary)
})