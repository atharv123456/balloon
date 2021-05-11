var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,position;
var bg;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
  var pos=database.ref('balloon/height');
  pos.on("value",readposition,showerror)
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
   
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    writePosition(-1,0);
    balloon.scale=balloon.scale-0.1;
    
    
  }
  else if(keyDown(RIGHT_ARROW)){
    
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    writePosition(1,0);
    balloon.scale=balloon.scale-0.1;
 
   
  }
  else if(keyDown(UP_ARROW)){
   
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    writePosition(0,-1);
    balloon.scale=balloon.scale-0.1;
    
  }
  else if(keyDown(DOWN_ARROW)){

    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    writePosition(0,+1);
    balloon.scale=balloon.scale-0.1;
    
    
  }

  drawSprites();
  fill("black");
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function writePosition(x,y){
  database.ref('balloon/height').set({
  'x' :height.x+x,
   'y':height.y+y
  })
  balloon.x = balloon.x + x;
  balloon.y = balloon.y + y;
}

function readposition(data){
height=data.val();
balloon.x=height.x;
balloon.y=height.y;
}

function showerror(){
console.log("error");
}

