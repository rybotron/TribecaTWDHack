/* The Resources Library contains an ordered list of chapters.
 */
var hexSize = 2000;
var resourceLibrary = {
	tourDuration: 1000, // Length of documentary, in seconds.
	scenes: [
		// Example Scene:
		//     {coords: [r, theta], pieces: [ ... ]},
		{coords: [hexSize,0], time: 30, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [-250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]},
            {type: 'date', text: ['1958'], coords: [  -400, -250, -600]},
            // {type: 'text', text: ['Enter Tent Camp'], coords: [  0, -150, -600]},
            {type: 'text', text: ['Proin ut risus massa, convallis pretium diam.', ' Sed et vehicula mauris. In auctor libero hendrerit dolor', ' rutrum vel feugiat nunc vehicula. In hac habitasse platea\n', ' dictumst. Aliquam bibendum laoreet dapibus. Nam lacinia ultrices\n', ' adipiscing. Duis fermentum sollicitudin dolor eu cursus. Donec'], coords: [  0,   0, -200]},
			// {type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			// {type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [ 0,  0,  100 ], dimentions: [1280, 720]}
			// {type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [hexSize,60], time: 90, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}

			{type: 'date', text: ['1958'], coords: [  -500, -250, -600]},
			{type: 'image', source: 'images/scene1/compressed/tents4.png', coords: [  0,  -100,  10], dimentions: [2000, 548]},
			{type: 'image', source: 'images/scene1/compressed/tents3.png', coords: [  650,   -100,  750], dimentions: [1974, 512]},
			{type: 'image', source: 'images/scene1/compressed/tents2.png', coords: [  450,   -75,  1000], dimentions: [1974, 758]},
			// {type: 'image', source: 'images/scene1/boybending.png', coords: [  -800,   0,  500], dimentions: [425, 823]},
			
			// {type: 'image', source: 'images/scene1/puppeteers.png', coords: [  200,   0,  300], dimentions: [545, 834]},
			// {type: 'image', source: 'images/scene1/tents5.png', coords: [  0,   -10,  850], dimentions: [2000, 540]}
		]},
		{coords: [hexSize,120], time: 120, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['1958'], coords: [  -500, -250, -600]},
			{type: 'image', source: 'images/scene2/buildings.png', coords: [  -165,   -325, 1], dimentions: [800*1.35, 89*1.35]},
			{type: 'image', source: 'images/scene1/drummer.png', coords: [  -575,   0,  50], dimentions: [392*.9, 800*.9]},
			{type: 'image', source: 'images/scene2/arch.png', coords: [  500,   -50, 400], dimentions: [400*1.5, 520*1.5]},
			{type: 'image', source: 'images/scene2/tents.png', coords: [  1200,   -300,  1000]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [ -200,  -200,  500 ], dimentions: [960, 540]}


		]},
		{coords: [hexSize,180], time: 120, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [hexSize,240], time: 270, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [hexSize,300], time: 340, year: '19NN', title: 'Snails Invade Miami', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'image', source: 'images/scene4/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/scene4-00.png', coords: [  100,   -20,   -700], dimentions: [312, 355]},
			{type: 'image', source: 'images/scene4/scene4-08.png', coords: [  -200,   0,   100], dimentions: [708, 1024]},
		]},
	]
}