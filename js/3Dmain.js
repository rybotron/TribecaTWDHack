var camera, scene, renderer;

var WIDTH = $(window).width(),
    HEIGHT = $(window).height();

var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = .25,
	FAR = 100000;

var controls;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	camera.position.set( 0, 0, 200 );

	controls = new THREE.OrbitControls( camera );

	controls.staticMoving = false;
	controls.dynamicDampingFactor = 0.3;

	controls.keys = [ 65, 83, 68 ];

	scene = new THREE.Scene();

	var element = document.createElement( 'div' );
	element.style.width = '100px';
	element.style.height = '100px';
	element.style.background = new THREE.Color( 0x000000 ).getStyle();

	var object = new THREE.CSS3DObject( element );
	object.position.x = 0;
	object.position.y = 0;
	object.position.z = 0;
	// object.scale.x = Math.random() + 0.5;
	// object.scale.y = Math.random() + 0.5;
	scene.add( object );

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

	requestAnimationFrame( animate );

	controls.update();
	render();

}

function render() {

	renderer.render( scene, camera );

}