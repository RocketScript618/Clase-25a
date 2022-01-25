class Ground {

    constructor(x,y,w,h){
        var cOptions = {
            isStatic: true
        }
        this.w = w;
        this.h = h;

        this.border = Bodies.rectangle(x,y,w,h,cOptions);
        World.add(world,this.border);
    }

    display(){
        var pos = this.border.position;

        push();

        rectMode(CENTER);
        stroke("white");
        fill("cyan");
        translate(pos.x,pos.y);
        rect(0,0,this.w,this.h);

        pop();

    }
}