class CloudsC {
	constructor(x,y,r)
	{
	
	var options = 
	{
	 isStatic : true
	}

		this.x = x;
		this.y = y;
		this.r = r;
		this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos = this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS);
            stroke("#FFFFFF");
            strokeWeight(3);
			fill("#FFFFFF");
            ellipse(0,0, this.r, this.r);
			pop()
	}

}