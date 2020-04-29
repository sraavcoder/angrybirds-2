class Hero{
    constructor(x, y, width, height) {
        var options = {
           //'restitution':0.8,
            'friction':0.9
          
       }
        this.body = Bodies.rectangle(x, y,120,120,options);
    
        this.width = 70;
        this.height = 70;
        this.image = loadImage("hero.png")
        this.smokeImage = loadImage("smoke.png");
        this.trajectory =[];
        World.add(world, this.body);
        
        
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y +30);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }
       
    
        for(var i=0; i<this.trajectory.length; i++){
          image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
        }
      }
}