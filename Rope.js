class Rope{
    constructor(bodyA, pointB){
        var options = {
        bodyA : bodyA,
        pointB : pointB,
        length : 600,
        stiffness : 0.5
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        push();
        stroke("white")
        strokeWeight(5)
     line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.pointB.x, this.pointB.x)   
        pop();
    }
}