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
	handle: function (htmlElement, resourceJson){
		htmlElement.style.width = ''+resourceJson.dimentions[0]+'px';
		htmlElement.style.height = ''+resourceJson.dimentions[1]+'px';
		var threeDObject = new THREE.CSS3DObject( htmlElement );
		threeDObject.position.x = resourceJson.coords[0];
		threeDObject.position.y = resourceJson.coords[1];
		threeDObject.position.z = resourceJson.coords[2];
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

	controls = new THREE.OrbitControls( camera );
	scene = new THREE.Scene();

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
	scene.add( object );


	// var template = document.getElementById('label_template');
	// distance = template.cloneNode(true);
	// distance.nameLayer = distance.children[0];
	// $contenttarget.append( distance );

	var video1 = document.createElement( 'div' );
	video1.style.width = '1280px';
	video1.style.height = '720px';
	video1.style.background = new THREE.Color( 0x000fff ).getStyle();

	chapter1 = new THREE.CSS3DObject( video1 );
	chapter1.position.x = 640;
	chapter1.position.y = 360;
	chapter1.position.z = -1000;

	scene.add(chapter1);


	var video2 = document.createElement( 'div' );
	video2.style.width = '1280px';
	video2.style.height = '720px';
	video2.style.background = new THREE.Color( 0xfff000 ).getStyle();

	chapter2 = new THREE.CSS3DObject( video2 );
	chapter2.position.x = 640;
	chapter2.position.y = -360;
	chapter2.position.z = -1000;

	scene.add(chapter2);



	var video3 = document.createElement( 'div' );
	video3.style.width = '1280px';
	video3.style.height = '720px';
	video3.style.background = new THREE.Color( 0x000fff ).getStyle();

	chapter3 = new THREE.CSS3DObject( video3 );
	chapter3.position.x = -640;
	chapter3.position.y = -360;
	chapter3.position.z = -1000;

	scene.add(chapter3);


	var video4 = document.createElement( 'div' );
	video4.style.width = '1280px';
	video4.style.height = '720px';
	video4.style.background = new THREE.Color( 0xfff000 ).getStyle();

	chapter4 = new THREE.CSS3DObject( video4 );
	chapter4.position.x = -640;
	chapter4.position.y = 360;
	chapter4.position.z = -1000;

	scene.add(chapter4);


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
	var vector = new THREE.Vector3();
	vector.getPositionFromMatrix( object.matrixWorld );
	vector.sub( camera.position );
	object.rotation.y = Math.atan2( vector.x, vector.z);

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();
	render();

}

function render() {

	renderer.render( scene, camera );

}