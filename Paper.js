class Ball {
    constructor(x, y, r)  {
        var options = {
            isStatic: false,
            'friction': 2.5,
            'density': 1.2
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
    
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}