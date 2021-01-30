class Roof
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var roofPos=this.body.position;		

			push()
			translate(roofPos.x, roofPos.y);
			rectMode(CENTER)
			
			fill(128,128,128)
			rect(2,2,200,20);
			pop()
			
	}

}


	
			
			

			
			
			
	

