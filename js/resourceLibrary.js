/* The Resources Library contains an ordered list of chapters.
 */

var resourceLibrary = {
	tourDuration: 1000, // Length of documentary, in seconds.
	scenes: [
		// Example Scene:
		//     {coords: [r, theta], pieces: [ ... ]},
		{coords: [1200,0], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [-250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [1200,60], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/scene1/boybending.png', coords: [  -800,   0,  500], dimentions: [425, 823]},
			{type: 'image', source: 'images/scene1/drummer.png', coords: [  -200,   0,  -200], dimentions: [392, 800]},
			{type: 'image', source: 'images/scene1/puppeteers.png', coords: [  200,   0,  10], dimentions: [545, 834]}
		]},
		{coords: [1200,120], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/scene2/arch.png', coords: [  -300,   0, -300]},
			{type: 'image', source: 'images/scene2/tents.png', coords: [  150,   -10,  -100]},
			{type: 'image', source: 'images/scene2/buildings.png', coords: [  0,   200, 1], dimentions: [1024, 170]},

		]},
		{coords: [1200,180], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [1200,240], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [1200,300], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/scene4/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/scene4-00.png', coords: [  100,   -20,   -700], dimentions: [312, 355]},
			{type: 'image', source: 'images/scene4/scene4-08.png', coords: [  -200,   0,   100], dimentions: [708, 1024]},
		]},
	]
}