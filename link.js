class Link{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:20
        
        }
        this.pointB=pointB;
        this.link =Constraint.create(option) 
        World.add(world, this.link);
        
    }
    fly(){
        this.link.bodyA = null;
    }

    
        
           
    
    display(){
        if(this.link.bodyA){
        var posA =this.link.bodyA.position
        var posB =this.pointB;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}