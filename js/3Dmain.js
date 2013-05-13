var WIDTH = $(window).width(),
    HEIGHT = $(window).height();

var VIEW_ANGLE = 45,
	ASPECT = WIDTH / HEIGHT,
	NEAR = .25,
	FAR = 100000;

var stats, 
	scene,
	camera,
	renderer,
	controls,
	tween;

var dae,
	rover;

var target,
	targetSize = 5;

var roverLoader = new THREE.ColladaLoader();
var terrainLoader = new THREE.ColladaLoader();

var armStowed = true,
	mastStowed = true;

var touchdownSensitivity = .75;

var time = 0;
var toRadians = Math.PI/180;

var clock = new THREE.Clock();
var delta = clock.getDelta();

/********************************
	PAGE LOADING
********************************/

function setLoadMessage( msg ){
	$( '#loadtext' ).html(msg + "...");
}

$(document).ready( function() {

	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	// $( '#loadtext' ).show();
	// setLoadMessage("Loading Curiosity");

	// roverLoader.options.convertUpAxis = true;
	// roverLoader.load( './models/rover.dae', function ( collada ) {

	// 	rover_dae = collada.scene;
	// 	rover_dae.scale.set( 1, 1, 1 );
	// 	// rover_dae.traverse( function ( child ) {
	// 	//     child.castShadow = true;
	// 	//     child.receiveShadow = true;
	// 	// } );

	// 	rover_dae.updateMatrix();

	// 	terrainLoader.options.convertUpAxis = true;
	// 	terrainLoader.load( './models/terrain.dae', function ( collada ) {
			
	// 		terrain = collada.scene;
	// 		terrain.scale.set( 1, 1, 1 );
	// 		postColladaLoaded();

		} );

	} );

	var postColladaLoaded = function () {
	        init();
	        animate();
			$("#loadtext").hide();
    };
});

function init() {

	/********************************
		CREATE SCENE
	********************************/

	$container = $("#container");

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x6B7DA0, 0, 300 );

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	camera.position.set( 0, 1, -7 );

	var ambientLight = new THREE.AmbientLight();
	ambientLight.color.setRGB( .15, .15, .15 );
	scene.add(ambientLight);

	// var pointLight = new THREE.PointLight(0xFFFFFF, 1.3);
	// pointLight.position.set( 0, 100, 0 );
	// scene.add(pointLight);

	var directionalLight = new THREE.DirectionalLight( 0x6B7DA0, 1 );
	directionalLight.position.set( -175, 20, 0 );
	directionalLight.castShadow = true;
	scene.add( directionalLight );

	// light = new THREE.SpotLight( 0xFFFFFF, 1, 500 );
	// light.position.set( 1, 10, 0 );
	// light.castShadow = true;
	// light.shadowDarkness = 0.5;
	// scene.add( light );


	/********************************
		RENDERER
	********************************/


	setupScene();
	renderer = Detector.webgl? new THREE.WebGLRenderer( { antialias: true } ): new THREE.CanvasRenderer();
	renderer.setSize( WIDTH, HEIGHT );
	// renderer.setClearColor( scene.fog.color, 1 );

	$container.append( renderer.domElement );
	renderer.autoClear = false;

	controls = new THREE.OrbitControls( camera, $container[0] );
	controls.addEventListener( 'change', render );
	controls.maxPolarAngle = Math.PI / 2 + ( 3 * toRadians ); 
	controls.minDistance = 2.5;
	controls.maxDistance = 25;


	/********************************
		STATS
	********************************/

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	$container.append( stats.domElement );

	/********************************
		EVENTS
	********************************/

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	window.addEventListener( 'resize', onWindowResize, false );

}

function setupScene(){

	var camTarget = new THREE.Mesh( new THREE.PlaneGeometry( 0, 0 ), new THREE.MeshBasicMaterial() );
	camTarget.position.set( 0, 2, 0 );
	camTarget.add( camera );

	rover = new Rover( rover_dae );
	rover.mesh.add( camTarget );
	rover.mesh.position.set( 0, 0, -20 );

	scene.add( rover.mesh );

	controlsRover = {

		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false

	};

	var targetMaterial = new THREE.MeshBasicMaterial( { 
		map: THREE.ImageUtils.loadTexture( './images/target1.png' ), 
		overdraw: true,
		transparent: true
	});

	target = new THREE.Mesh( new THREE.PlaneGeometry(targetSize, targetSize), targetMaterial );
	target.rotation.x = -90 * toRadians;
	target.position.set( 0, .01, 20 ); 
	scene.add( target );

	// var grid = CreateGrid( 0, .5, 50 );
	// scene.add( grid );

	scene.add( terrain );
	buildGUI();

	rover.arm.rotation.y = -90 * toRadians;
	rover.arm.shoulder.rotation.x = -10 * toRadians;
	rover.arm.elbow.rotation.x = -75 * toRadians;

	rover.mast.rotation.z = -85 * toRadians;
	rover.mast.head.rotation.y = -55 * toRadians;

}

function buildGUI(){

	var camTweens = { 
		one: new CAMTWEEN( { x:5, y:5, z:5 }, { x:0, y:0, z:0 }, 1 ),
		two: new CAMTWEEN( { x:0, y:4, z:-10 }, { x:0, y:0, z:0 }, 1 ),
		three: new CAMTWEEN( { x:-.36, y:2.1, z:.65 }, { x:0, y:0, z:10 }, 1 ),
		four: new CAMTWEEN( { x:-5, y:3, z:-2 }, { x:0, y:0, z:0 }, 1 )
	};

	var gui = new dat.GUI();

	// gui.add( rover.dt.L.steering[0].rotation, 'y', ( -45 * toRadians ), 0 )
	// 	.name('Front Steering')
	// 	.onChange( function(){
	// 		rover.dt.L.steering[1].rotation.y = -rover.dt.L.steering[0].rotation.y;
	// 		rover.dt.R.steering[0].rotation.y = -rover.dt.L.steering[0].rotation.y;
	// 		rover.dt.R.steering[1].rotation.y = -rover.dt.R.steering[0].rotation.y
	// });

	var armFolder = gui.addFolder( 'Arm Controls' );
	armFolder.open();

	armFolder.add( rover.arm.rotation, 'y', ( -90 * toRadians ), 0 )
		.name('Arm');
	armFolder.add( rover.arm.shoulder.rotation, 'x', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Arm.Shoulder');
	armFolder.add( rover.arm.elbow.rotation, 'x', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Arm.Elbow');
	armFolder.add( rover.arm.wrist.rotation, 'x', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Arm.Wrist');
	armFolder.add( rover.arm.hand.rotation, 'y', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Arm.Hand');

	var mastFolder = gui.addFolder( 'Mast Controls' );
	mastFolder.open();

	mastFolder.add( rover.mast.rotation, 'z', ( -90 * toRadians ), 0 )
		.name('Mast');
	mastFolder.add( rover.mast.neck.rotation, 'y', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Mast.Neck');
	mastFolder.add( rover.mast.head.rotation, 'x', ( -90 * toRadians ), ( 90 * toRadians ) )
		.name('Mast.Head');

	var camFolder = gui.addFolder( 'Camera Positions' );
	camFolder.open();
	camFolder.add( camTweens.one, 'tween' ).name( 'Camera One' );
	camFolder.add( camTweens.two, 'tween' ).name( 'Camera Two' );
	camFolder.add( camTweens.three, 'tween' ).name( 'Camera Three' );
	camFolder.add( camTweens.four, 'tween' ).name( 'Camera Four' );

	gui.close();
}

function stowArm( stowTime ){
	if (stowTime === undefined) stowTime = 1500;
	if( armStowed ){
		Tweener(rover.arm.rotation, {x:0, y: 0, z:0}, stowTime);
		Tweener(rover.arm.elbow.rotation, {x:0, y:0, z:0}, stowTime);
		Tweener(rover.arm.shoulder.rotation, {x:0, y:0, z:0}, stowTime);
		armStowed = false;
	}else{
		Tweener(rover.arm.rotation, {x:0, y:-90 * toRadians, z:0}, stowTime);
		Tweener(rover.arm.elbow.rotation, {x:-75 * toRadians, y:0, z:0}, stowTime);
		Tweener(rover.arm.shoulder.rotation, {x:-10 * toRadians, y:0, z:0}, stowTime);
		armStowed = true;
	}
}

function stowMast( stowTime ){
	if (stowTime === undefined) stowTime = 1500;
	if( mastStowed ){
		Tweener(rover.mast.rotation, {x:0, y:33 * toRadians, z:0}, stowTime);
		Tweener(rover.mast.head.rotation, {x:0, y:0, z:0}, stowTime);
		mastStowed = false;
	}else{
		Tweener(rover.mast.rotation, {x:0, y:33 * toRadians, z:-85 * toRadians}, stowTime);
		Tweener(rover.mast.head.rotation, {x:0, y:-55 * toRadians, z:0}, stowTime);
		mastStowed = true;
	}
}

function touchdown(){
	var roverPosFromMatrix = new THREE.Vector3();
	roverPosFromMatrix.getPositionFromMatrix( rover.mesh.matrixWorld );

	var marsPos = rover.mesh.position;
	var targetPos = target.position;

	if( marsPos.distanceTo( targetPos ) <= targetSize * touchdownSensitivity ){
		return true;
	}else return false;
}

function onKeyDown ( event ) {

	switch( event.keyCode ) {

		case 38: /*up*/ controlsRover.moveForward = true; break;
		case 40: /*up*/ controlsRover.moveBackward = true; break;
		case 37: /*left*/ controlsRover.moveLeft = true; break;
		case 39: /*right*/ controlsRover.moveRight = true; break;
	}
};

function onKeyUp ( event ) {

	switch( event.keyCode ) {
		case 38: /*up*/ controlsRover.moveForward = false; break;
		case 40: /*up*/ controlsRover.moveBackward = false; break;
		case 37: /*left*/ controlsRover.moveLeft = false; break;
		case 39: /*right*/ controlsRover.moveRight = false; break;
	}
};

function onWindowResize() {

	windowHalfX = $(window).width() / 2;
	windowHalfY = $(window).height() / 2;

	camera.aspect = $(window).width() / $(window).height();
	camera.updateProjectionMatrix();

	renderer.setSize( $(window).width(), $(window).height() );

}

function animate() {

	requestAnimationFrame( animate );

    camera.updateProjectionMatrix();

	controls.update();
	stats.update();
	TWEEN.update();

	rover.updateCarModel( clock, controlsRover );

	time += .01;
	render();

}

function render() {

	renderer.clear();
	renderer.render( scene, camera );

}