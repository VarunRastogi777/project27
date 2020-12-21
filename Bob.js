class Bob{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            gravity:1
        }
    this.body=Bodies.circle(x,y,diameter,options)
    this.diameter=diameter
    World.add(world,this.body)
    }
    display(){
        push()
        ellipseMode(RADIUS)
        fill(rgb(255, 0, 255))
        ellipse(this.body.position.x,this.body.position.y,this.diameter);
        pop()
    } 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:100,y:100})
	}
}