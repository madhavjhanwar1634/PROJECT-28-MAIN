class mango{
    constructor(x,y,r){
 var option={
isStatic:true,
density:1.2,
friction:0.5 
} 
this.body=Bodies.circle(x,y,r,option)
this.r=r
this.image=loadImage("Plucking mangoes/mango.png")
World.add(world,this.body) 
}
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
        
    }
}