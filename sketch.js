var sun, mercury, venus,earth, mars, jupiter,explosion;
var sunImage,mercuryImage,venusImage,earthImage, marsImage,jupiterImage,explosionImage;

function setup(){
    createCanvas(800,600);
    sun = createSprite(400,300,75,75);
    sunImage = loadImage("sun.png");

    sun.addImage("sun",sunImage);
    sun.scale = 0.01;
    
    sun.setCollider("circle",0,0,150);

    mercury = createSprite(500,200,75,75);
    mercuryImage = loadImage("mercury.png");
    
    mercury.addImage("mercury",mercuryImage);
    mercury.scale = 0.1;

    mercury.setCollider("circle",0,0,200);

    venus = createSprite(550,375,75,75);
    venusImage = loadImage("venus.png");

    venus.addImage("venus",venusImage);
    venus.scale = 0.1;
    
    venus.setCollider("circle",0,0,200);

    earth = createSprite(200,300,75,75);
    earthImage = loadImage("earth.png");

    earth.addImage("earth",earthImage);
    earth.scale = 0.1;

    earth.setCollider("circle",0,0,200);

    mars = createSprite(150,120,75,75);
    marsImage = loadImage("mars.png");

    mars.addImage("mars",marsImage);
    mars.scale = 0.1;

    mars.setCollider("circle",0,0,200);

    jupiter = createSprite(700,50,75,75);
    jupiterImage = loadImage("jupiter.png");

    jupiter.addImage("jupiter",jupiterImage);
    jupiter.scale = 0.1;

    
    jupiter.setCollider("circle",0,0,200);

    explosion =  createSprite(400,300,75,75);
    explosionImage = loadImage("explosion.png");

    explosion.addImage("explosion",explosionImage);
    explosion.scale = 1.5;
    explosion.visible = false;
}

function draw(){
    background(0);
    
    console.log(frameCount);


    if(frameCount%1 === 0) {
        sun.scale = sun.scale + 0.01;
    } 

    if(sun.collide(mercury)){
        mercury.destroy();
    }

    if(sun.collide(venus)){
        venus.destroy();
    }

    if(sun.collide(mars)){
        mars.destroy();
    }

    if(sun.collide(earth)){
        earth.destroy();
    }

    if(sun.collide(jupiter)){
        jupiter.destroy();
        sun.destroy();
        explosion.visible = true;
    }

    drawSprites();
}