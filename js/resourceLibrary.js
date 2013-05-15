/* The Resources Library contains an ordered list of chapters.
 */
var resourceLibrary = {
	mainVideo: {
		sourceMp4: 'a uri',
		sourceWebm: 'a uri',
		sourceOgv: 'a url'
	},
	scenes: [
		// Example Scene:
		//     {coords: [r, theta], pieces: [ ... ]},
		{coords: [1000,0], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0,  100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0, -300]}
		]},
		{coords: [1000,60], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0,  100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0, -300]}
		]},
		{coords: [1000,120], pieces: [
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
		]},
		{coords: [1000,180], pieces: [
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
		]},
		{coords: [1000,240], pieces: [
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
		]},
		{coords: [1000,300], pieces: [
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0,  300]},
		]}
	]
}