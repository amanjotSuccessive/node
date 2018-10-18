class Rectangle{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;  
    }

    get area(){ //
        return this.calcArea();
    }
    calcArea(){
        return this.height+this.width;
    }
}

const square = new Rectangle(20,20);
console.log(square.area); 

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;  
    }
}

const p1 = new Point(7,2);
const p2 = new Point(3,8);

console.log(Point.distance(p1,p2));

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + 'makes a noise.');
    }
}

class Dog extends Animal{
    constructor(name){
        this.name = name;
    }
       speak(){
        console.log(' from parent speak()' +super.speak());
        console.log(this.name + 'barks.')
    }
}

class Puppy extends Dog{


    speak(){
        console.log(' from parent speak()' +super.speak());
        console.log(this.name + 'barks.')
    }
}

let puppy = new Puppy("Rex_puppy");
puppy.speak();
//Dog has Constructor









