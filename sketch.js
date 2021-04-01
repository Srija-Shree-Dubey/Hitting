const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var sun;
var b1,b2;
var rubber1,rubber2,rubber3,rubber4,rubber5;
var stone;
var iron;
var Cc1a,Cc1b,Cc1c,Cc1d,Cc1e,Cc1f,Cc1g;
var Cc2a,Cc2b,Cc2c,Cc2d,Cc2e,Cc2f,Cc2g;
var Cc3a,Cc3b,Cc3c,Cc3d,Cc3e,Cc3f,Cc3g;
var la1,la2,la3,la4,la5,la6,la7,la8,la9,la10;
var da1,da2,da3,da4,da5,da6,da7,da8,da9,da10;
var lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8,lb9,lb10;
var db1,db2,db3,db4,db5,db6,db7,db8,db9,db10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

    plane = new Plane(600,height,1200,20);
    


    Cc1a = new CloudsC(200,200,20);
    Cc1b = new CloudsC(240,200,20);
    Cc1c = new CloudsC(280,200,20);
    Cc1d = new CloudsC(305,200,20);
    Cc1e = new CloudsC(220,180,20);
    Cc1f = new CloudsC(273,180,20);
    Cc1g = new CloudsC(250,160,20);

    Cc2a = new CloudsC(1000,200,20);
    Cc2b = new CloudsC(1040,200,20);
    Cc2c = new CloudsC(1080,200,20);
    Cc2d = new CloudsC(1105,200,20);
    Cc2e = new CloudsC(1020,180,20);
    Cc2f = new CloudsC(1073,180,20);
    Cc2g = new CloudsC(1050,160,20);

    Cc3a = new CloudsC(600,150,20);
    Cc3b = new CloudsC(640,150,20);
    Cc3c = new CloudsC(680,150,20);
    Cc3d = new CloudsC(705,150,20);
    Cc3e = new CloudsC(620,130,20);
    Cc3f = new CloudsC(673,130,20);
    Cc3g = new CloudsC(650,110,20);   

    hammer = new Hammer(10,100);

    la1 = new TreeLL(1000,450,15);
    la2 = new TreeLL(990,475,15);
    la3 = new TreeLL(1010,475,15);
    la4 = new TreeLL(980,490,15);
    la5 = new TreeLL(1000,490,15);
    la6 = new TreeLL(1020,490,15);
    la7 = new TreeLL(990,515,15);
    la8 = new TreeLL(1010,515,15);
    la9 = new TreeLL(1030,515,15);
    la10 = new TreeLL(1000,515,15);

    da1 = new TreeLD(975,500,15);
    da2 = new TreeLD(960,540,15);
    da3 = new TreeLD(980,540,15);
    da4 = new TreeLD(1000,540,15);
    da5 = new TreeLD(1020,540,15);
    da6 = new TreeLD(1040,540,15);
    da7 = new TreeLD(970,520,15);
    da8 = new TreeLD(990,520,15);
    da9 = new TreeLD(1010,520,15);
    da10 = new TreeLD(1030,520,15);

    lb1 = new TreeLL(100,450,15);
    lb2 = new TreeLL(90,475,15);
    lb3 = new TreeLL(110,475,15);
    lb4 = new TreeLL(80,490,15);
    lb5 = new TreeLL(100,490,15);
    lb6 = new TreeLL(120,490,15);
    lb7 = new TreeLL(90,515,15);
    lb8 = new TreeLL(110,515,15);
    lb9 = new TreeLL(130,515,15);
    lb10 = new TreeLL(100,515,15);

    db1 = new TreeLD(75,500,15);
    db2 = new TreeLD(60,540,15);
    db3 = new TreeLD(80,540,15);
    db4 = new TreeLD(100,540,15);
    db5 = new TreeLD(120,540,15);
    db6 = new TreeLD(140,540,15);
    db7 = new TreeLD(70,520,15);
    db8 = new TreeLD(90,520,15);
    db9 = new TreeLD(110,520,15);
    db10 = new TreeLD(130,520,15);   

    
    rubber1 = new Rubber(600,500,10);
    rubber2 = new Rubber(620,500,10);
    rubber3 = new Rubber(640,500,10);
    rubber4 = new Rubber(660,500,10);
    rubber5 = new Rubber(680,500,10);

    stone = new Stone(750,500,50,50);

    b1 = new TreeB(1000,525,25,100);
    b2 = new TreeB(100,525,25,100);

    iron = new Iron(480,500,100,50);

    sun = new Sun(290,170,30);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

     
    b1.display();
    b2.display();
    sun.display();

    Cc1a.display();
    Cc1b.display();
    Cc1c.display();
    Cc1d.display();
    Cc1e.display();
    Cc1f.display();
    Cc1g.display();

    Cc2a.display();
    Cc2b.display();
    Cc2c.display();
    Cc2d.display();
    Cc2e.display();
    Cc2f.display();
    Cc2g.display();

    Cc3a.display();
    Cc3b.display();
    Cc3c.display();
    Cc3d.display();
    Cc3e.display();
    Cc3f.display();
    Cc3g.display();

    la1.display();
    la2.display();
    la3.display();
    la4.display();
    la5.display();
    la6.display();
    la7.display();
    la8.display();
    la9.display();
    la10.display();

    da1.display();
    da2.display();
    da3.display();
    da4.display();
    da5.display();
    da6.display();
    da7.display();
    da8.display();
    da9.display();
    da10.display();

    lb1.display();
    lb2.display();
    lb3.display();
    lb4.display();
    lb5.display();
    lb6.display();
    lb7.display();
    lb8.display();
    lb9.display();
    lb10.display();

    db1.display();
    db2.display();
    db3.display();
    db4.display();
    db5.display();
    db6.display();
    db7.display();
    db8.display();
    db9.display();
    db10.display();

    plane.display();
    

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();

    stone.display();
    iron.display();



    hammer.display();
}