const{Engine,World,Bodies,Constraint,MouseConstraint,Mouse} = Matter;

var engine, world;

var score = 0;

var victory,back;


function preload(){
   back = loadImage('back.png');
   victory = loadImage('victory.png');
}

function setup() {
  
createCanvas(1200,600);

engine = Engine.create();
world = engine.world 


base = new Ground(600,590,10000,10);
base2 = new Ground(150,460,350,250);
base3 = new Ground(600,800,10000,10);

box1 = new Box(590,545,70,70);
box2 = new Box(780,545,70,70);
box3 = new Box(960,545,70,70);
box4 = new Box(1130,545,70,70);
box5 = new Box(680,465,70,70);
box6 = new Box(860,465,70,70);
box7 = new Box(1050,465,70,70);
box8 = new Box(780,385,70,70);
box9 = new Box(960,385,70,70);

log1 = new Log(675,500,180,20);
log2 = new Log(865,500,180,20);
log3 = new Log(1055,500,180,20);
log4 = new Log(770,410,180,20);
log5 = new Log(950,410,180,20);
log6 = new Log(870,340,280,20);

enemy1 = new Enemy(675,545);
enemy2 = new Enemy(865,545);
enemy3 = new Enemy(1055,545);
enemy4 = new Enemy(770,465);
enemy5 = new Enemy(950,465);
enemy6 = new Enemy(870,385);
enemy7 = new Enemy(870,305);

hero = new Hero(250,100);

var mouse = Mouse.create(canvas.elt);
var options =  {
  mouse:mouse,
  element:canvas.elt
}

mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint)

slingshot = new Spring(hero.body,{x:266,y:170}) 
}

function draw() {
  background(back);  

  
Engine.update(engine);

base.display();
base2.display();
base3.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

log1.display();
log2.display();
log3.display();
log4.display();
log5.display();
log6.display();

enemy1.display();
enemy2.display();
enemy3.display();
enemy4.display();
enemy5.display();
enemy6.display();
enemy7.display(); 





hero.display();

slingshot.display();



if(score >1100){
  image(victory,600,100,200,200);
  fill('red');
  textSize(45);
  text('VICTORY!!',620,350);
  gameState = 1;
}

noStroke();
textSize(35)
fill("white")
text("Score : " + score, width-300, 50);
//fill();
textSize(15)
text('drag the angry bird and release it with mouse to kill the evil piggies',50,30)
text('to reshoot your bird again press space bar and before pressing spacebar make sure that the speed of angrybird is low',50,60)
text('try to make your score above 1100 by hitting the pigs hardly',50,90)

}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32 && hero.body.speed <3){
    slingshot.attach(hero.body);
    hero.trajectory = [];
    Matter.Body.setPosition(hero.body, {x: 250 , y: 100});
  }

}