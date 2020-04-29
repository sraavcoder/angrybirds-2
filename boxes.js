class Box{
    constructor(x, y, width, height) {
        var options = {
           'restitution':0.8,
            'friction':0.9,
          
       }
        this.body = Bodies.rectangle(x, y, width, height,options);
    
        this.width = width;
        this.height = height;
        this.image = loadImage("wood1.png")
        World.add(world, this.body);
        
        
      }
      display(){
       
        if(this.body.speed < 5){
           var pos =this.body.position;
        var angle = this.body.angle;
        
        fill(random(60,170));
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
         }
         else{
          this.body.position.x = 10000;
         }
      }
}