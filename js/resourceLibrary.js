var hexSize = 2500;
var resourceLibrary = {
	tourDuration: 155, // Length of documentary, in seconds.
	scenes: [
		{coords: [hexSize,0], duration: 40, time: 2, title: 'Introduction', pieces: [
            {type: 'video', source: {mp4: 'video/intro.mp4'}, coords: [ 0,  -50,  100 ], dimentions: [960, 540]},
		]},
		{coords: [hexSize,60], duration: 10, time: 43, year: '1950', title: 'Tent Camp', audio: {ogg: 'audio/music1.ogg', mpeg: 'audio/music1.mp3'}, pieces: [
			{type: 'date', text: ['1950'], coords: [  -1000, -350, -25]},
			{type: 'text', text: ['India\'s magicians, acrobats, and puppeteers leave the rural villages for New Delhi.', 
			'They set up a tent camp called \"The Kathputli Colony.\"'], coords: [  -200,   300, -200]},
			{type: 'image', source: 'images/scene1/compressed/puppeteers.png', coords: [  450,   0,  -700], dimentions: [545, 837]},
			{type: 'image', source: 'images/scene1/compressed/tents4.png', coords: [  0,  -100,  50], dimentions: [2000, 548]},
			{type: 'image', source: 'images/scene1/compressed/tents3.png', coords: [  650,   -100,  750], dimentions: [1974, 512]},
			{type: 'image', source: 'images/scene1/compressed/tents2.png', coords: [  450,   -75,  1000], dimentions: [1974, 758]},
		]},
		{coords: [hexSize,120], duration: 50, time: 56, year: '1964', title: 'Artists\' Village', audio: {ogg: 'audio/music2.ogg', mpeg: 'audio/music2.mp3'}, pieces: [
			{type: 'date', text: ['1964'], coords: [  -900, -350, -20]},
			{type: 'text', text: ['They petition the government to turn the Kathputli Colony into an artists\' village.',
			'They call their dream village Anangdram: \"The Joy Village.\"'], coords: [  -100,   300, -200]},
			{type: 'image', source: 'images/scene2/compressed/buildings.png', coords: [  -100,  -325,  -260], dimentions: [800*1.35, 89*1.35]},
			{type: 'image', source: 'images/scene1/compressed/drummer.png', coords: [  -1200,   0,  300], dimentions: [392*.9, 800*.9]},
			{type: 'image', source: 'images/scene2/compressed/arch.png', coords: [  650,   0,  -400], dimentions: [400*1.5, 520*1.5]},
			{type: 'image', source: 'images/scene2/compressed/tents.png', coords: [  -950,   -50,  800], dimentions: [775*1.25, 474*1.25]},
			{type: 'video', source: {mp4: 'video/bbc.mp4'}, coords: [ -50,  -100,  200 ], dimentions: [960*1.25, 540*1.25]}
		]},
		{coords: [hexSize,180], duration: 15, time: 109, year: '2011', title: 'Slum', audio: {ogg: 'audio/music3.ogg', mpeg: 'audio/music3.mp3'}, pieces: [
			{type: 'date', text: ['2011'], coords: [  -1000, -350, -20]},
			{type: 'text', text: ['The government never gave the artists the rights to the land.',
			'It has become a slum.'], coords: [  400,   0, -200]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum01.png', coords: [  0,   0,  10], dimentions: [1000*2, 512*2]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum02.png', coords: [  0,   0,  1000], dimentions: [1000*2.25, 512*2.25]},
			{type: 'image', source: 'images/compressed/TWD_plxD-slum03.png', coords: [  0,   0,  2000], dimentions: [1000*3, 512*3]}
		]},
		{coords: [hexSize,240], duration: 15, time: 127, year: '2011', title: 'Slum', audio: {ogg: 'audio/music3.ogg', mpeg: 'audio/music3.mp3'}, pieces: [
			// {type: 'date', text: ['1950'], coords: [  -1000, -350, -20]},
			{type: 'image', source: 'images/scene3/compressed/puran.png', coords: [  -700,   -50,  -300], dimentions: [1222, 1189]},
			{type: 'image', source: 'images/scene3/compressed/headstandboy.png', coords: [  -400,   -300,  500], dimentions: [1000*1.5, 667*1.5]},
			{type: 'image', source: 'images/scene3/compressed/wallstairs.png', coords: [  600,   -290,  -300], dimentions: [1000, 601]},
			{type: 'image', source: 'images/scene3/compressed/turbanman.png', coords: [  300,   -120,  -500], dimentions: [595, 920]},
			{type: 'video', source: {mp4: 'video/firebreather.mp4'}, coords: [ -300,  200,  -100 ], dimentions: [960*1.125, 540*1.125]}
		]},
		{coords: [hexSize,300], duration: 10, time: 145, year: '2014', title: 'Skyscraper', audio: {ogg: 'audio/music4.ogg', mpeg: 'audio/music4.mp3'}, pieces: [
			{type: 'date', text: ['2014'], coords: [  -1000, -350, -20]},
			{type: 'text', text: ['The government announces the artists\' land has been sold to a real-estate developer.',
			'They plan to build New Delhi\'s first skyscraper on the Kathputli land.'], coords: [  -500,   0,  -200]},
			{type: 'text', text: ['2,800 artist families will move into transit camps.'], coords: [  600,   200,  -200]},
			{type: 'image', source: 'images/scene4/compressed/cityscape-collage-small.png', coords: [  -100,   -300,   -1000], dimentions: [1000, 119]},
			{type: 'image', source: 'images/scene4/compressed/scene4-00.png', coords: [  50,   -100,   -1200], dimentions: [312, 355]},
			{type: 'image', source: 'images/scene4/compressed/scene4-08.png', coords: [  -500,   0,   100], dimentions: [708, 1024]},
			{type: 'image', source: 'images/scene3/compressed/transithousing.png', coords: [  1000,   -100,  800], dimentions: [2000, 520]},
		]},
	]
}