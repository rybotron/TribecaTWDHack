var threeD = {

	nav: true,
    camMotion: true,
	camera: undefined,
	scene: undefined,
	renderer: undefined,
    camCTRL: undefined,

	WIDTH: $(window).width(),
    HEIGHT: $(window).height(),

	VIEW_ANGLE: 45,
	ASPECT: this.WIDTH / this.HEIGHT,
	NEAR: .25,
	FAR: 500000,

    MOUSEX: 0,
    MOUSEY: 0,
    ZOOM: 0,

    windowHalfX: window.innerWidth / 2,
    windowHalfY: window.innerHeight / 2,

	controls: undefined,
	object: undefined,




	arctan: function (x,y){
		if(y>=0){
			return  Math.acos(x/Math.sqrt(x*x+y*y))
		} else{
			return -Math.acos(x/Math.sqrt(x*x+y*y))
		}
	},

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

		if(pieceJson.opacity){
			var pieceOpacity = pieceJson.opacity;
			if(pieceOpacity !== undefined){
				htmlElement.style.opacity = ''+pieceOpacity;
			}
		}

		var threeDObject = new THREE.CSS3DObject( htmlElement );
		var mag = sceneJson.coords[0];
		var dir = (sceneJson.coords[1]-90)*(Math.PI/180);
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
		var sceneVector = new THREE.Vector3(sceneCoordsCartesian[0], sceneCoordsCartesian[1], sceneCoordsCartesian[2]);
		//var vector = new THREE.Vector3();
		//vector.getPositionFromMatrix( this.object.matrixWorld );
		//sceneVector.sub( threeDObject.position );
		//console.log(threeDObject.position)
		threeDObject.rotation.y = Math.PI + Math.atan2( sceneVector.x, sceneVector.z);
		//threeDObject.rotation.y = dir;
		this.scene.add( threeDObject );
	},
	init: function () {
        this.scene = new THREE.Scene();
        this.camCTRL = new THREE.Object3D;

        this.camCTRL.position.set(0,-100,0);

		this.camera = new THREE.PerspectiveCamera( this.VIEW_ANGLE, this.ASPECT, this.NEAR, this.FAR );
		this.camera.position.set( 0, 0, -1 );

        this.camCTRL.add(this.camera);
        this.scene.add(this.camCTRL);
	
		//this.controls = new THREE.OrbitControls( this.camera, document.getElementById('container') );

	
		var element = document.createElement( 'div' );
		element.style.width = '1px';
		element.style.height = '1px';
		element.style.background = 'rgba(255,0,0,0.0)'//new THREE.Color( 0x000000 ).getStyle();

		element.setAttribute('class', 'threeDimages');
	
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


		var sideScale = 7;
		var sideSize = 512;

		var sides = [
			{
				url: 'textures/skybox/skybox_06.png',
				position: new THREE.Vector3( -sideSize, 0, 0 ),
				rotation: new THREE.Vector3( 0, Math.PI / 2, 0 ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			},
			{
				url: 'textures/skybox/skybox_04.png',
				position: new THREE.Vector3( sideSize, 0, 0 ),
				rotation: new THREE.Vector3( 0, -Math.PI / 2, 0 ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			},
			{
				url: 'textures/skybox/skybox_02.png',
				position: new THREE.Vector3( 0,  sideSize, 0 ),
				rotation: new THREE.Vector3( Math.PI / 2, 0, Math.PI ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			},
			{
				url: 'textures/skybox/skybox_09.png',
				position: new THREE.Vector3( 0, -sideSize, 0 ),
				rotation: new THREE.Vector3( - Math.PI / 2, 0, Math.PI ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			},
			{
				url: 'textures/skybox/skybox_05.png',
				position: new THREE.Vector3( 0, 0,  sideSize ),
				rotation: new THREE.Vector3( 0, Math.PI, 0 ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			},
			{
				url: 'textures/skybox/skybox_07.png',
				position: new THREE.Vector3( 0, 0, -sideSize ),
				rotation: new THREE.Vector3( 0, 0, 0 ),
				scale: new THREE.Vector3( sideScale, sideScale, sideScale )
			}
		];


		var skybox = new THREE.Object3D();

		for ( var i = 0; i < sides.length; i ++ ) {

			var side = sides[ i ];

			var element = document.createElement( 'img' );
			element.width = 1024; // 2 pixels extra to close the gap.
			element.src = side.url;
			element.setAttribute('class', 'threeDimages');

			var object = new THREE.CSS3DObject( element );
			object.frustumCulled = false;

			var vec = new THREE.Vector3();
			vec.multiplyVectors( side.position, side.scale );

			object.position = vec;
			object.rotation = side.rotation;
			object.scale.x = side.scale.x;
			object.scale.y = side.scale.y * .75;
			object.scale.z = side.scale.z;

			skybox.rotation.y = 0;
			skybox.add( object );

			

		}

		skybox.rotation.y = 90 * Math.PI/180;
		this.scene.add(skybox);

        animations.horsie();
        animations.firebreather();

	
		this.renderer = new THREE.CSS3DRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.renderer.domElement.style.position = 'absolute';
		this.renderer.domElement.style.top = 0;
		document.getElementById( 'container' ).appendChild( this.renderer.domElement );
	
		window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
        window.addEventListener( 'mousemove', this.onMouseMove.bind(this), false);
        document.getElementById( 'container' ).addEventListener( 'mousedown', this.onMouseDown.bind(this), false);
	},
	onWindowResize: function () {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize( window.innerWidth, window.innerHeight );
	},
    onMouseMove: function ( e ) {
        this.MOUSEX = ( e.clientX - (this.windowHalfX))*.75;
        this.MOUSEY = ( e.clientY - this.windowHalfY );
    },
    onMouseDown: function ( e ) {

        if (this.ZOOM == 0 )
        {
            this.ZOOM = 1;

            Tweener( this.camera.position, {z:-500}, 500);
        }
        else
        {
            this.ZOOM = 0;
            Tweener( this.camera.position, {z:0}, 500);
        }
    },
    cameraMotion: function () {
        if (this.ZOOM == 0)
        {
            if (this.MOUSEX < -200)
            {
                this.camCTRL.rotation.y -= ( ((Math.PI / 180) * (this.MOUSEX+200) ) - this.camCTRL.position.x ) *.001;
            }
            if (this.MOUSEX > 200)
            {
                this.camCTRL.rotation.y -= ( ((Math.PI / 180) * (this.MOUSEX-200) ) - this.camCTRL.position.x ) *.001;
            }

        }

        if (this.camMotion == true)
        {
            var randY = Math.floor(Math.random() * 100) - 25;
            var randX = Math.floor(Math.random() * 100) - 25;
            var timeVal = Math.floor(Math.random() * 1500) + 5000;

            Tweener( this.camera.position, {y:randY, x:randX}, timeVal);

            this.camMotion=false;
        }

        // Mouse Driven
        //this.camera.position.y = THREE.Math.clamp( this.camera.position.y + ( - this.MOUSEY - this.camera.position.y ) * .05, -25, 25 );
        //this.camera.position.x = THREE.Math.clamp( this.camera.position.x + ( - this.MOUSEX - this.camera.position.x ) * .05, -20, 20 );

    },
	animate: function () {
		//////// ROTATE ON Y
		/*var vector = new THREE.Vector3();
		vector.getPositionFromMatrix( object.matrixWorld );
		vector.sub( camera.position );
		object.rotation.y = Math.atan2( vector.x, vector.z);*/

		
		requestAnimationFrame( this.animate.bind(this) );

	
		TWEEN.update();
	
		//this.controls.update();
		this.render();

		if(this.nav){
            this.cameraMotion();
	    }
	
	},
	render: function () {
	
		this.renderer.render( this.scene, this.camera );
	
	}
};
$(document).ready(function(){
	threeD.init();
	threeD.animate();
})