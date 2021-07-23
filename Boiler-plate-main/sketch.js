function preload(){
   playeranimation = loadAnimation("1.png","2.png","3.png","4.png","5.png");
}

function setup() {
    createCanvas(800, 800);
    player = createSprite(50,650,20,20)
   player.addAnimation("playerAnimation",playeranimation)
   
}
  function draw() {
    background(50,50,50);
     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown(UP_ARROW)){
        player.y = player.y+5
    }

  
    
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x 

    drawSprites();
}