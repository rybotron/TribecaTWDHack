var camera, scene, renderer;

var WIDTH = $(window).width(),
    HEIGHT = $(window).height();

var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = .25,
	FAR = 100000;

var controls,
	object,
	chapter1,
	chapter2,
	chapter3,
	chapter4;

var threeDHandler = {
	handle: function (htmlElement, sceneJson, pieceJson){
		if(pieceJson.dimentions){
			var pieceWidth = pieceJson.dimentions[0];
			var pieceHeight = pieceJson.dimentions[1];
			if(pieceWidth !== undefined){
				htmlElement.style.width = ''+pieceWidth+'px';
			}
			if(pieceHeight !== undefined){
				htmlElement.style.height = ''+pieceHeight+'px';
			}
		}
		var threeDObject = new THREE.CSS3DObject( htmlElement );
		var mag = sceneJson.coords[0];
		var dir = sceneJson.coords[1]*(Math.PI/180);
		var coords = [0,0,0]; //[x,y,z]
		coords[0] = Math.sin(dir)*mag + pieceJson.coords[0];
		coords[1] = 0                 + pieceJson.coords[1];
		coords[2] = Math.cos(dir)*mag + pieceJson.coords[2];
		/*  X             
		 *  |      Mag    
		 *  |     /       
		 *  |    /        
		 *  |   /         
		 *  |  /          
		 *  | /           
		 *  |/Dir         
		 * ------------- Z
		 */
		threeDObject.position.x = coords[0];
		threeDObject.position.y = coords[1];
		threeDObject.position.z = coords[2];
		// threeDObject.scale.x = Math.random() + 0.5;
		// threeDObject.scale.y = Math.random() + 0.5;
		scene.add( threeDObject );
	}
};

$(document).ready(function(){

	init();
	animate();
	
})


function init() {

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	camera.position.set( 0, 0, 800 );

	controls = new THREE.OrbitControls( camera, document.getElementById('container') );
	scene = new THREE.Scene();
/*
	var element = document.createElement( 'div' );
	element.style.width = '100px';
	element.style.height = '100px';
	element.style.background = new THREE.Color( 0x000000 ).getStyle();

	object = new THREE.CSS3DObject( element );
	object.position.x = 0;
	object.position.y = 0;
	object.position.z = 0;
	// object.scale.x = Math.random() + 0.5;
	// object.scale.y = Math.random() + 0.5;
	scene.add( object );*/


	// var template = document.getElementById('label_template');
	// distance = template.cloneNode(true);
	// distance.nameLayer = distance.children[0];
	// $contenttarget.append( distance );



	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = 0;
	document.getElementById( 'container' ).appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	//////// ROTATE ON Y
	/*var vector = new THREE.Vector3();
	vector.getPositionFromMatrix( object.matrixWorld );
	vector.sub( camera.position );
	object.rotation.y = Math.atan2( vector.x, vector.z);*/

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();
	render();

}

function render() {

	renderer.render( scene, camera );

}