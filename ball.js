class Ball{
    constructor(x, y, r) {
        var options={
            'restitution': 0.3,
            'density': 1.2,
            'friction':0.5,
            'isStatic': false
        }
        this.x = x;
        this.y = y;
        this.r = 70;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("paper.png");
	    World.add(world, this.body, this.image);
    }
    display(){
        var ballpos = this.body.position;
        push();
        translate(ballpos.x,ballpos.y);
        ellipseMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}