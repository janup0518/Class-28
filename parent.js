class Parent {
    constructor(x,y,width,height,angle){
        var box_options = {
            restitution:0.8,
            friction: 2,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,box_options) 
        this.width = width
        this.height = height
        World.add(world,this.body)
        this.image=loadImage("sprites/base.png")
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height) 
        pop()
        
    }
}