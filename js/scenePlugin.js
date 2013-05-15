// PLUGIN: style

(function (Popcorn) {
	//"use strict";
	//?
	Popcorn.basePlugin('scene', function (options, base) {
		/*
		We don't even need to specify start/frame/end/_teardown methods here,
		since base.animate takes care of all that for us.
		*/
		return {
			start: function (event){
				console.log('started')
			},
			end: function (event){
				console.log('ended');
			},
			frame: function (event){
				console.log('frame')
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
