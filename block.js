class Block {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: false          
      }
      this.Visibilty = 255;      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;

      World.add(world, this.body);
    }
    display() {
      fill(this.color);
      var pos =this.body.position;
      if (this.body.speed < 12) {      
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world,this.body)
        push();
        this.Visibilty = this.Visibilty - 5;
        pop();
      }
    }
  };
    
