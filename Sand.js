class Sand{
    constructor(x,y,radius){
        var options={
            restitution: 1.3,
            friction: 5,
            density: 1
        }

        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);

        this.radius = radius;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("white")
        fill("brown")
        circle(0,0,this.radius);
        pop();     
    }
}