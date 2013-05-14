/* The Resources Library contains an ordered list of chapters.
 */
var resourceLibrary = {
	mainVideo: {
		sourceMp4: 'a uri',
		sourceWebm: 'a uri',
		sourceOgv: 'a url'
	},
	chapters: [
		// Example Chapter
		{title: 'Example Chapter 1', timeBegin: '0:00', timeEnd: '1:00',
			intro: {
				clip: 'a uri',
				poster: 'a uri',
				tagLine: 'In a world where both of our cars are totally underwater'
			},
			resources: [
				// Example Contents
				{uri: 'a uri', coords: [0,2,6], dimentions: [10, 50]},
				{},
			]
		},
		{
			// Example Chapter 2
		},
		{
			// Example Chapter 3
		},
		{
			// Example Chapter 4
		}
	]
}