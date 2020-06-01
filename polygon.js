class Polygon {
    constructor(x, y) {
      var options = {
          isStatic:true,
         // restitution:1,
          //friction:0.1,
         // density:1
      }
      this.body = Bodies.rectangle(x, y, 100,100, options);
      this.width=100;
      this.height=100;
      this.image=loadImage("poly.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
//fill("blue");
     imageMode(CENTER);
      image(this.image,0, 0, this.width,this.height);
      pop();
    }
  }
  