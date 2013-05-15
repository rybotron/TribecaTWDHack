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

var arctan = function (x,y){
	if(y>=0){
		return  Math.acos(x/Math.sqrt(x*x+y*y))
	} else{
		return -Math.acos(x/Math.sqrt(x*x+y*y))
	}
};

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
		var dir = (sceneJson.coords[1]+90)*(Math.PI/180);
		var sceneCoordsCartesian = [
			Math.cos(dir)*mag,
			0                ,
			Math.sin(dir)*mag,
		];
		var a = arctan(pieceJson.coords[0], pieceJson.coords[2]);
		var b = a - (Math.PI/2 - dir);
		var m = Math.sqrt(pieceJson.coords[0]*pieceJson.coords[0] + pieceJson.coords[2]*pieceJson.coords[2]);
		var vOB = [sceneCoordsCartesian[0], sceneCoordsCartesian[2]];
		var vBQ = [Math.cos(b)*m, Math.sin(b)*m];
		var vOQ = [vOB[0]+vBQ[0], vOB[1]+vBQ[1]];
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
		threeDObject.position.x = vOQ[0];
		threeDObject.position.y = pieceJson.coords[1];
		threeDObject.position.z = vOQ[1];
		// threeDObject.scale.x = Math.random() + 0.5;
		// threeDObject.scale.y = Math.random() + 0.5;
		
			
		//////// ROTATE ON Y
		var vector = new THREE.Vector3();
		vector.getPositionFromMatrix( object.matrixWorld );
		vector.sub( threeDObject.position );
		threeDObject.rotation.y = Math.atan2( vector.x, vector.z);
		
		//threeDObject.rotation.y = dir;
		scene.add( threeDObject );
	}
};

$(document).ready(function(){

	init();
	animate();
	
})


function init() {

	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
	camera.position.set( 0, 0, -1 );

	controls = new THREE.OrbitControls( camera, document.getElementById('container') );
	scene = new THREE.Scene();

	var element = document.createElement( 'div' );
	element.style.width = '1px';
	element.style.height = '1px';
	element.style.background = 'rgba(255,0,0,0.1)'//new THREE.Color( 0x000000 ).getStyle();

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