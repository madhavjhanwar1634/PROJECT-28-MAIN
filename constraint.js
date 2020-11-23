class CON{
    constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.02,
length:5
}
this.Cons=Constraint.create(options)
this.pointB=pointB
World.add(world,this.Cons)
    }
    attach(body){
        this.Cons.bodyA = body
    }
    fly(){
        this.Cons.bodyA=null
    }

    display(){
        fill("black")
        if(this.Cons.bodyA){
        line(this.Cons.bodyA.position.x,this.Cons.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
}