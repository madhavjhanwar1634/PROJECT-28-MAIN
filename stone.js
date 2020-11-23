class Stone{
constructor(x,y,r){
var option={
isStatic:false,
density:1.2,
friction:1
}

this.body=Bodies.circle(x,y,r,option)
this.r=r
World.add(world,this.body)
this.image=loadImage("Plucking mangoes/stone.png")
}
display(){
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)


}
}