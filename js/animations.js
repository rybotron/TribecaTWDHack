var animations = {
    horsie: function() {
        var horse = [
            {
                url: 'images/phantom/puppet_00000_00000.png'
            },
            {
                url: 'images/phantom/puppet_00000_00001.png'
            },
            {
                url: 'images/phantom/puppet_00000_00002.png'
            },
            {
                url: 'images/phantom/puppet_00000_00003.png'
            },
            {
                url: 'images/phantom/puppet_00000_00004.png'
            }
        ];

        var horseImg = 0;

        var horseElement = document.createElement( 'img' );
        horseElement.width = 1026; // 2 pixels extra to close the gap.
        horseElement.src = horse[horseImg].url;

        var horseObject = new THREE.CSS3DObject( horseElement );
        horseObject.position.set(900,0,-2000);
        horseObject.rotation.y = -10 * Math.PI/180;
        horseObject.scale.set(.5,.5,.5);
        var delayInSeconds = 4;

        var num = 0;
        var len = horse.length-1;
        var dir = 'up';

        threeD.scene.add( horseObject );

        setInterval( function()
        {

            horseElement.src = horse[num].url;
            if (num===len){
                dir = 'down'
            }
            if(dir=='down')
            {
                if(num==0)
                {
                    dir='up';
                    ++num;
                }
                --num;
            }
            else
            {
                ++num;
            }
        }, delayInSeconds * 50)
    },
    firebreather: function() {
        var horse = [
            {
                url: 'images/phantom/fire_00000.png'
            },
            {
                url: 'images/phantom/fire_00001.png'
            },
            {
                url: 'images/phantom/fire_00002.png'
            },
            {
                url: 'images/phantom/fire_00003.png'
            },
            {
                url: 'images/phantom/fire_00004.png'
            }
        ];

        var horseImg = 0;

        var horseElement = document.createElement( 'img' );
        horseElement.width = 1026; // 2 pixels extra to close the gap.
        horseElement.src = horse[horseImg].url;

        var horseObject = new THREE.CSS3DObject( horseElement );
        horseObject.position.set(-800,0,-2000);
        horseObject.rotation.y = .5;
        horseObject.scale.set(.5,.5,.5);
        var delayInSeconds = 4;

        var num = 0;
        var len = horse.length-2;
        var dir = 'up';

        threeD.scene.add( horseObject );

        setInterval( function()
        {

            horseElement.src = horse[num].url;
            if (num===len){
                dir = 'down'
            }
            if(dir=='down')
            {
                if(num==0)
                {
                    dir='up';
                    ++num;
                }
                --num;
            }
            else
            {
                ++num;
            }
        }, delayInSeconds * 50)
    }
};