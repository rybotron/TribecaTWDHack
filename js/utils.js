function vec3Mid( vec1, vec2 ){
	var vec = new THREE.Vector3();
	vec.x = (vec1.x + vec2.x) / 2;
	vec.y = (vec1.y + vec2.y) / 2;
	vec.z = (vec1.z + vec2.z) / 2;
	return vec;
}

function lineMid( line ){
	var vec = new THREE.Vector3();
	var vec1 = line.geometry.vertices[0].clone();
	var vec2 = line.geometry.vertices[ line.geometry.vertices.length - 1 ].clone();
	vec = vec3Mid( vec1, vec2 );
	return vec;
}

function Tweener( obj, target, time ){
	var scaler = new TWEEN.Tween( obj )
		.to( target, time )
		.easing( TWEEN.Easing.Sinusoidal.InOut )
        .onComplete(function(){threeD.camMotion=true;})
        .onStart(function(){threeD.camMotion=false;})
		.start();
    return scaler;
}

var camPosition = function( position, target, time ){
	this.pos = position;
	this.tar = target;
	this.t = time;
	this.tween = function(){
		TWEEN.removeAll();
		camTweener( this.pos, this.tar, this.t );
	};
	return this;
}

function camTweener( newCamPosition, newTarget, time ) {

	var tweenPosition = new TWEEN.Tween( camera.position )
		.to( newCamPosition , time )
		.easing(TWEEN.Easing.Sinusoidal.InOut)
		.onStart( function(){ 
			controls.enabled = false; 
			controls.update();
		} )
		.onUpdate( function(){} )
		.onComplete( function(){ 
			controls.enabled = true; 
			controls.update();

		} );

	tweenPosition.start();
	Tweener( camTarget, newTarget, time );	
}
function getCamAngle( a1, a2 ) {
    var angle;

    var ta1 = a1-a2;
    var ta2 = a2-a1;

    if( Math.abs(ta1) > Math.abs(ta2) ) {
        return ta2;
    }
    else {
        return ta1;
    }
}
function moveToScene( scene, time ) {

    threeD.ZOOM = 0;
    Tweener( threeD.camera.position, {z:0}, (time/2)-1 );
    var zoomAmount = -500;
    var curDeg = threeD.camCTRL.rotation.y;
    var deg = 0;

    switch(scene) {
        case 1:
            deg = 360;
            threeD.currentScene = 1;
            zoomAmount = -1500;
            break;
        case 2:
            deg = 300;
            break;
        case 3:
            deg = 240;
            break;
        case 4:
            deg = 180;
            break;
        case 5:
            deg = 120;
            break;
        case 6:
            deg = 60;
            break;
    }
    Tweener( threeD.camCTRL.rotation, {y:getCamAngle( deg, curDeg ) * (Math.PI / 180)}, time );

    setTimeout( function(){Tweener( threeD.camera.position, {z:zoomAmount}, (time/2) );}, (time/2) );
    threeD.ZOOM = 1;
}

