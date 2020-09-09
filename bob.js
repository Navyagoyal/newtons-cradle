var paperSprite;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
papersprite=createSprite(10,height-50,10,20);
Matter.Bodies.circle(paper.x,paper.y,70);
bobObject1=createSprite(300,600,50,50);
bobObject2=createSprite(350,600,50,50);
bobObject3=createSprite(400,600,50,50);
bobObject4=createSprite(450,600,50,50);
bobObject5=createSprite(500,600,50,50);
