class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	 var options={density:30,friction:3,restitution:0.3}
		this.x=x;
		this.y=y;
	
		this.body=Bodies.rect(this.x, this.y, 50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			rect(0,0,50,50)
			pop()
	}

}