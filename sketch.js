var surface1,surface2,surface3,surface4;
var box;
var Background;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(810,400);
  Background=createSprite(200,200,2000,400);
  surface1=createSprite(100,370,95,15);
  surface2=createSprite(300,370,95,15);
  surface3=createSprite(500,370,95,15);
  surface4=createSprite(700,370,95,15);
  box=createSprite(390,200,25,25);

  surface1.shapeColor="red";
  surface2.shapeColor="blue";
  surface3.shapeColor="green";
  surface4.shapeColor="magenta";
  box.shapeColor="white";
  Background.shapeColor="black";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
