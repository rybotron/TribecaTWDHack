
var threeD = {
	camera: undefined,
	scene: undefined,
	renderer: undefined,

	WIDTH: $(window).width(),
    HEIGHT: $(window).height(),

	VIEW_ANGLE: 45,
	ASPECT: this.WIDTH / this.HEIGHT,
	NEAR: .25,
	FAR: 100000,

	controls: undefined,
	object: undefined,

	arctan: function (x,y){
		if(y>=0){
			return  Math.acos(x/Math.sqrt(x*x+y*y))
		} else{
			return -Math.acos(x/Math.sqrt(x*x+y*y))
		}
	},


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
		var a = this.arctan(-pieceJson.coords[0], pieceJson.coords[2]);
		var b = a - (Math.PI/2 - dir);
		var m = Math.sqrt(pieceJson.coords[0]*pieceJson.coords[0] + pieceJson.coords[2]*pieceJson.coords[2]);
		var vOB = [sceneCoordsCartesian[0], sceneCoordsCartesian[2]];
		var vBQ = [Math.cos(b)*m, Math.sin(b)*m];
		var vOQ = [vOB[0]+vBQ[0], vOB[1]+vBQ[1]];
		/*  X  Mag
		 *  | /   
		 *  |/Dir 
		 * ------- Z
		 */
		threeDObject.position.x = vOQ[0];
		threeDObject.position.y = pieceJson.coords[1];
		threeDObject.position.z = vOQ[1];
		// threeDObject.scale.x = Math.random() + 0.5;
		// threeDObject.scale.y = Math.random() + 0.5;
		//////// ROTATE ON Y
		var vector = new THREE.Vector3();
		vector.getPositionFromMatrix( this.object.matrixWorld );
		vector.sub( threeDObject.position );
		threeDObject.rotation.y = Math.atan2( vector.x, vector.z);
		//threeDObject.rotation.y = dir;
		this.scene.add( threeDObject );
	},
	init: function () {
		this.camera = new THREE.PerspectiveCamera( this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR );
		this.camera.position.set( 0, 0, -1 );
	
		this.controls = new THREE.OrbitControls( this.camera, document.getElementById('container') );
		this.scene = new THREE.Scene();
	
		var element = document.createElement( 'div' );
		element.style.width = '1px';
		element.style.height = '1px';
		element.style.background = 'rgba(255,0,0,0.0)'//new THREE.Color( 0x000000 ).getStyle();
	
		this.object = new THREE.CSS3DObject( element );
		this.object.position.x = 0;
		this.object.position.y = 0;
		this.object.position.z = 0;
		// this.object.scale.x = Math.random() + 0.5;
		// this.object.scale.y = Math.random() + 0.5;
		this.scene.add( this.object );
		
		// var template = document.getElementById('label_template');
		// distance = template.cloneNode(true);
		// distance.nameLayer = distance.children[0];
		// $contenttarget.append( distance );
	
		this.renderer = new THREE.CSS3DRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.domElement.style.position = 'absolute';
		this.renderer.domElement.style.top = 0;
		document.getElementById( 'container' ).appendChild( this.renderer.domElement );
	
		window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
	},
	onWindowResize: function () {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( window.innerWidth, window.innerHeight );
	},
	animate: function () {
		//////// ROTATE ON Y
		/*var vector = new THREE.Vector3();
		vector.getPositionFromMatrix( object.matrixWorld );
		vector.sub( camera.position );
		object.rotation.y = Math.atan2( vector.x, vector.z);*/
		
		requestAnimationFrame( this.animate.bind(this) );
	
		TWEEN.update();
	
		this.controls.update();
		this.render();
	
	},
	render: function () {
	
		this.renderer.render( this.scene, this.camera );
	
	}
};
$(document).ready(function(){
	threeD.init();
	threeD.animate();
})

