var pageNavigation = {
	display: true,
	setup: function (){
		var self = this;
		var header = document.getElementById('header');
		var content = document.getElementById('content');
		var footer = document.getElementById('footer');
		var toggleTab = document.getElementById('toggle-tab');
		toggleTab.addEventListener('click', function (){
			if(self.display){
				self.hide();
			} else{
				self.show();
			}
		});
	},
	show: function (){
		header.className = '';
		footer.className = '';
		this.display = true;
	},
	hide: function (){
		header.className = 'hidden';
		footer.className = 'hidden';
		this.display = false;
	}
};
document.addEventListener("DOMContentLoaded", function (){
	pageNavigation.setup();
});