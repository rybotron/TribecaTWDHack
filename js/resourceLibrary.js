/* The Resources Library contains an ordered list of chapters.
 */
var hexSize = 2500;
var resourceLibrary = {
	tourDuration: 155, // Length of documentary, in seconds.
	scenes: [
		// Example Scene:
		//     {coords: [r, theta], pieces: [ ... ]},
		{coords: [hexSize,0], duration: 40, time: 0, year: '19NN', title: 'Introduction', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
            {type: 'video', source: {mp4: 'video/intro.mp4'}, coords: [ 0,  0,  100 ], dimentions: [960, 540]}
		]},
		{coords: [hexSize,60], duration: 10, time: 43, year: '1950', title: 'Tent Camp', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['1950'], coords: [  -1000, -350, -20]},
			{type: 'text', text: ['India\'s magicians, acrobats, and puppeteers leave the rural villages for New Delhi.', 
			'They set up a tent camp called \"The Kathputli Colony.\"'], coords: [  500,   0, -200]},
			{type: 'image', source: 'images/scene1/compressed/tents4.png', coords: [  0,  -100,  10], dimentions: [2000, 548]},
			{type: 'image', source: 'images/scene1/compressed/tents3.png', coords: [  650,   -100,  750], dimentions: [1974, 512]},
			{type: 'image', source: 'images/scene1/compressed/tents2.png', coords: [  450,   -75,  1000], dimentions: [1974, 758]},
		]},
		{coords: [hexSize,120], duration: 50, time: 56, year: '1964', title: 'Artists Village', pieces: [
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['1964'], coords: [  -500, -250, -10]},
			{type: 'text', text: ['They petition the government to turn the Kathputli Colony into an artists village.',
			'The call their dream village, Anangdram: \"The Joy Village.\"'], coords: [  0,   0, -200]},
			{type: 'image', source: 'images/scene2/compressed/buildings.png', coords: [  -165,   -325, 1], dimentions: [800*1.35, 89*1.35]},
			{type: 'image', source: 'images/scene1/compressed/drummer.png', coords: [  -575,   0,  400], dimentions: [392*.9, 800*.9]},
			{type: 'image', source: 'images/scene2/compressed/arch.png', coords: [  500,   -50, 400], dimentions: [400*1.5, 520*1.5]},
			{type: 'image', source: 'images/scene2/compressed/tents.png', coords: [  1200,   -300,  1000]},
			{type: 'video', source: {mp4: 'video/bbc.mp4'}, coords: [ -200,  -200,  500 ], dimentions: [960, 540]}
		]},
		{coords: [hexSize,180], duration: 15, time: 109, year: '2011', title: 'Slum', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['2011'], coords: [  -500, -250, -10]},
			{type: 'text', text: ['The government never gave the artists the rights to the land.',
			'It has become a slum.'], coords: [  0,   0, -200]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum01.png', coords: [  0,   0, -300]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum02.png', coords: [  0,   0, -100]},
			{type: 'video', source: {mp4: 'video/Puran Interview ArtistBeg3.mp4'}, coords: [250,  50,  100]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum03.png', coords: [  0,   0,  300]}
		]},
		{coords: [hexSize,240], duration: 15, time: 127, year: '2011', title: 'Slum', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['1950'], coords: [  -1000, -350, -20]},
			{type: 'image', source: 'images/scene3/compressed/puran.png', coords: [  0,   0, -300]}, dimentions: [1222, 1189]},
			{type: 'image', source: 'images/scene3/compressed/headstandboy.png', coords: [  0,   0, -100]}, dimentions: [1000, 667]},
			{type: 'image', source: 'images/scene3/compressed/wallcart.png', coords: [  0,   0, -100]}, dimentions: [800, 413]},
			{type: 'image', source: 'images/scene3/compressed/wallstairs.png', coords: [  0,   0, -100]}, dimentions: [1000, 601]},
			{type: 'image', source: 'images/scene3/compressed/transithousing.png', coords: [  0,   0, -100]}, dimentions: [2000, 520]},
			{type: 'image', source: 'images/scene3/compressed/turbanman.png', coords: [  0,   0,  300]}, dimentions: [595, 920]},
			{type: 'video', source: {mp4: 'video/firebreather.mp4'}, coords: [ -200,  -200,  500 ], dimentions: [960, 540]}
		]},
		{coords: [hexSize,300], duration: 10, time: 145, year: '2014', title: 'Skyscraper', pieces: [
			// Example set piece:
			//     {type: 'image or video', source: 'a uri, or {webm: 'a uri', etc}', coords: [x, y, z], dimentions: [width, height]}
			{type: 'date', text: ['2014'], coords: [  -500, -250, -10]},
			{type: 'text', text: ['The government announces the artists\' land has been sold to a real-estate developer.',
			'They plan to build New Delhi\'s first skyscraper on the Kathputli land.',
			'2,800 artist families will move into transit camps.'], coords: [  0,   0, -200]},
			{type: 'image', source: 'images/scene4/compressed/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/compressed/cityscape-collage-small.png', coords: [  0,   -10,   -650], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/compressed/scene4-00.png', coords: [  100,   -20,   -700], dimentions: [312, 355]},
			{type: 'image', source: 'images/scene4/compressed/scene4-08.png', coords: [  -200,   0,   100], dimentions: [708, 1024]},
		]},
	]
}