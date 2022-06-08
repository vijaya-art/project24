class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball

	 var options={density:12,friction:0.9,restitution:0.8}
		this.x=x;
		this.y=y;
		this.width=width
        this.height=height
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;	
            var angle=this.body.angle
			push()
			translate(rubberpos.x, rubberpos.y);
            rotate (angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height)
			pop()
	}

}