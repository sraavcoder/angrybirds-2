class Enemy{
    constructor(x, y) {
        var options = {
           'restitution':0.8,
            'friction':0.3,
            
       }
        this.body = Bodies.rectangle(x, y, 50,50,options);
    
        this.width = 80;
        this.height = 60;
        this.image = loadImage("enemy.png")
        World.add(world, this.body);
        
        
      }
      display(){
        
        if(this.body.speed < 7){
            var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
           }
           else{
               
            push();
             this.Visiblity = this.Visiblity - 5;
            pop();
            this.body.position.y = 700;
             if(this.body.speed > 5){
              score = score+10;
            }
           }
      }
      
     
}