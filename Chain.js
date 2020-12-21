class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            gravity:0.7
        }
        
        this.chain=Constraint.create(options)
        World.add(world,this.chain)

        this.offsetX=offsetX
        this.offsetY=offsetY
        
    }
    display(){
        stroke("black")
        strokeWeight(2)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x+this.offsetX,this.chain.bodyB.position.y+this.offsetY)
    }
}