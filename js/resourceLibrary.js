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
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [160,  50,  100], dimentions: [1000, 563]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [1200,120], pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
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
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
	]
}