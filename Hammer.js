class Hammer{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.2,
            'density': 2
        }
        this.body=Bodies.rectangle(x,y,50,50,option);
        this.image = loadImage("hammer.png");

        World.add(world,this.body);
        
        
    }

    display()
    {
        var pos=this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();     
    }


}