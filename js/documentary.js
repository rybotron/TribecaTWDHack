var documentary = {
	setup: function (domConfig, library){
		var container = document.getElementById(domConfig.containerId)
		container.style.background = 'red'
		container.style.position = 'absolute'
		container.style.left = '10%'
		container.style.top = '10%'
		container.style.width = '80%'
		container.style.height = '80%'
	}
}
document.addEventListener("DOMContentLoaded", function (){
	documentary.setup(htmlConfiguration, resourceLibrary)
})