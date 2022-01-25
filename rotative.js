class Rotative {

    constructor(x,y,w,h){
        var cOptions = {
            isStatic: true
        }
        this.w = w;
        this.h = h;

        this.standard = Bodies.rectangle(x,y,w,h,cOptions);
        World.add(world,this.standard);
    }

    display() {
        var pos = this.standard.position;

        Matter.Body.rotate(this.standard,angle);

        push();

        rectMode(CENTER);
        stroke("white");
        fill("cyan");

        translate(pos.x,pos.y);
        rotate(-angle);
        rect(0,0,this.w,this.h);

        pop();

        angle += 0.001;

    }

}