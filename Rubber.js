class Rubber{
    constructor(x,y,width,height){
        var options={
            restitution: 0.3,
            friction: 5,
            density: 1
        }

        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("rubber.png");
        World.add(world,this.body);

        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();     
    }
}