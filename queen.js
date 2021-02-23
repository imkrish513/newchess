function Queen(){
  WhiteGroup.add(pawn1, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8, elephant1, elephant2, horse1, horse2, camel1, camel2, king, queen) 
  if (turn % 2 === 0) {
        if (mousePressedOver(queen) && round === 0) {
          pressed = 20
          round = 20
        }
       
        if (pressed === 20) {
        redsq = createSprite(queen.x, queen.y - 100, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(queen.x, queen.y -200, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(queen.x, queen.y - 300, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(queen.x, queen.y  - 400, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(queen.x, queen.y - 500, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(queen.x, queen.y - 600, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(queen.x, queen.y - 700, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(queen.x, queen.y - 800, 100, 100)
        redsq7.shapeColor = "red";
        redsq10 = createSprite(queen.x+100, queen.y, 100, 100)
        redsq10.shapeColor = "red";
        redsq11 = createSprite(queen.x+200, queen.y, 100, 100)
        redsq11.shapeColor = "red";
        redsq12 = createSprite(queen.x+300, queen.y, 100, 100)
        redsq12.shapeColor = "red";
        redsq13 = createSprite(queen.x+400, queen.y , 100, 100)
        redsq13.shapeColor = "red";
        redsq14 = createSprite(queen.x+500, queen.y, 100, 100)
        redsq14.shapeColor = "red";
        redsq15 = createSprite(queen.x+600, queen.y, 100, 100)
        redsq15.shapeColor = "red";
        redsq16 = createSprite(queen.x+700, queen.y, 100, 100)
        redsq16.shapeColor = "red";
        redsq17 = createSprite(queen.x+800, queen.y, 100, 100)
        redsq17.shapeColor = "red";
        redsq20 = createSprite(queen.x-100, queen.y, 100, 100)
        redsq20.shapeColor = "red";
        redsq21 = createSprite(queen.x-200, queen.y, 100, 100)
        redsq21.shapeColor = "red";
        redsq22 = createSprite(queen.x-300, queen.y, 100, 100)
        redsq22.shapeColor = "red";
        redsq23 = createSprite(queen.x-400, queen.y , 100, 100)
        redsq23.shapeColor = "red";
        redsq24 = createSprite(queen.x-500, queen.y, 100, 100)
        redsq24.shapeColor = "red";
        redsq25 = createSprite(queen.x-600, queen.y, 100, 100)
        redsq25.shapeColor = "red";
        redsq26 = createSprite(queen.x-700, queen.y, 100, 100)
        redsq26.shapeColor = "red";
        redsq27 = createSprite(queen.x-800, queen.y, 100, 100)
        redsq27.shapeColor = "red";
        redsq30 = createSprite(queen.x, queen.y+100, 100, 100)
        redsq30.shapeColor = "red";
        redsq31 = createSprite(queen.x, queen.y+200, 100, 100)
        redsq31.shapeColor = "red";
        redsq32 = createSprite(queen.x, queen.y+300,100, 100)
        redsq32.shapeColor = "red";
        redsq33 = createSprite(queen.x, queen.y+400 , 100, 100)
        redsq33.shapeColor = "red";
        redsq34 = createSprite(queen.x, queen.y+500, 100, 100)
        redsq34.shapeColor = "red";
        redsq35 = createSprite(queen.x, queen.y+600, 100, 100)
        redsq35.shapeColor = "red";
        redsq36 = createSprite(queen.x, queen.y+700, 100, 100)
        redsq36.shapeColor = "red";
        redsq37 = createSprite(queen.x, queen.y+800,100, 100)
        redsq37.shapeColor = "red";
        checker = createSprite(redsq.x,redsq.y,100,100)
        checker.visible = false;
        checker1 = createSprite(redsq10.x,redsq10.y,100,100)
        checker1.visible = false;
        checker2 = createSprite(redsq20.x,redsq20.y,100,100)
        checker2.visible = false;
        checker3 = createSprite(redsq1.x,redsq1.y,100,100)
        checker3.visible = false;
        checker4 = createSprite(redsq2.x,redsq2.y,100,100)
        checker4.visible = false;
        checker5 = createSprite(redsq3.x,redsq3.y,100,100)
        checker5.visible = false;
        checker6 = createSprite(redsq4.x,redsq4.y,100,100)
        checker6.visible = false;
        checker7 = createSprite(redsq5.x,redsq5.y,100,100)
        checker7.visible = false;
        checker8 = createSprite(redsq6.x,redsq6.y,100,100)
        checker8.visible = false;
        checker10 = createSprite(redsq11.x,redsq11.y,100,100)
        checker10.visible = false;
        checker11 = createSprite(redsq12.x,redsq12.y,100,100)
        checker11.visible = false;
        checker12 = createSprite(redsq13.x,redsq13.y,100,100)
        checker12.visible = false;
        checker13 = createSprite(redsq14.x,redsq14.y,100,100)
        checker13.visible = false;
        checker14 = createSprite(redsq15.x,redsq15.y,100,100)
        checker14.visible = false;
        checker15 = createSprite(redsq16.x,redsq16.y,100,100)
        checker15.visible = false;
        checker16 = createSprite(redsq20.x,redsq20.y,100,100)
        checker16.visible = false;
        checker17 = createSprite(redsq21.x,redsq21.y,100,100)
        checker17.visible = false;
        checker18 = createSprite(redsq22.x,redsq22.y,100,100)
        checker18.visible = false;
        checker19 = createSprite(redsq23.x,redsq23.y,100,100)
        checker19.visible = false;
        checker20 = createSprite(redsq24.x,redsq24.y,100,100)
        checker20.visible = false;
        checker21 = createSprite(redsq25.x,redsq25.y,100,100)
        checker21.visible = false;
        checker22 = createSprite(redsq26.x,redsq26.y,100,100)
        checker22.visible = false;
        checker23 = createSprite(redsq27.x,redsq27.y,100,100)
        checker23.visible = false;
        checker24 = createSprite(redsq30.x,redsq30.y,100,100)
        checker24.visible = false;
        checker25 = createSprite(redsq31.x,redsq31.y,100,100)
        checker25.visible = false;
        checker26 = createSprite(redsq32.x,redsq32.y,100,100)
        checker26.visible = false;
        checker27 = createSprite(redsq33.x,redsq33.y,100,100)
        checker27.visible = false;
        checker28 = createSprite(redsq34.x,redsq34.y,100,100)
        checker28.visible = false;
        checker29 = createSprite(redsq35.x,redsq35.y,100,100)
        checker29.visible = false;
        checker30 = createSprite(redsq36.x,redsq36.y,100,100)
        checker30.visible = false;
        checker31 = createSprite(redsq37.x,redsq37.y,100,100)
        checker31.visible = false;

        touching = 0
        touching1 = 0
        touching2 = 0
        touching3 = 0
        touching4 = 0
        touching5 = 0
        touching6 = 0
        touching7 = 0
        touching8 = 0
        touching10 = 0
        touching11 = 0
        touching12 = 0
        touching13 = 0
        touching14 = 0
        touching15 = 0
        touching16 = 0
        touching17 = 0
        touching18 = 0
        touching19 = 0
        touching20 = 0
        touching21 = 0
        touching22 = 0
        touching23 = 0
        touching24 = 0
        touching25 = 0
        touching26 = 0
        touching27 = 0
        touching28 = 0
        touching29 = 0
        touching30 = 0
        touching31 = 0

        if(checker.isTouching(pawn1)||checker.isTouching(pawn2)||checker.isTouching(pawn3)||checker.isTouching(pawn4)||checker.isTouching(pawn5)||checker.isTouching(pawn6)||checker.isTouching(pawn7)||checker.isTouching(pawn8)||checker.isTouching(king)||checker.isTouching(camel2)||checker.isTouching(horse2)||checker.isTouching(elephant2)||checker.isTouching(camel1)||checker.isTouching(horse1)||checker.isTouching(elephant1)){
          redsq.visible = false;
          checker.visible = false;
          redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching1 = 5
        }

        if(checker2.isTouching(pawn1)||checker2.isTouching(pawn2)||checker2.isTouching(pawn3)||checker2.isTouching(pawn4)||checker2.isTouching(pawn5)||checker2.isTouching(pawn6)||checker2.isTouching(pawn7)||checker2.isTouching(pawn8)||checker2.isTouching(king)||checker2.isTouching(camel2)||checker2.isTouching(horse2)||checker2.isTouching(elephant2)||checker2.isTouching(camel1)||checker2.isTouching(horse1)||checker2.isTouching(elephant1)){
          redsq20.visible = false;
          checker2.visible = false;
          redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        
          touching2 = 12
        }

        if(checker1.isTouching(pawn1)||checker1.isTouching(pawn2)||checker1.isTouching(pawn3)||checker1.isTouching(pawn4)||checker1.isTouching(pawn5)||checker1.isTouching(pawn6)||checker1.isTouching(pawn7)||checker1.isTouching(pawn8)||checker1.isTouching(king)||checker1.isTouching(camel2)||checker1.isTouching(horse2)||checker1.isTouching(elephant2)||checker1.isTouching(camel1)||checker1.isTouching(horse1)||checker1.isTouching(elephant1)){
          redsq.visible = false;
          checker.visible = false;
          redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        
          touching = 14
        }


        if(checker3.isTouching(pawn1)||checker3.isTouching(pawn2)||checker3.isTouching(pawn3)||checker3.isTouching(pawn4)||checker3.isTouching(pawn5)||checker3.isTouching(pawn6)||checker3.isTouching(pawn7)||checker3.isTouching(pawn8)||checker3.isTouching(king)||checker3.isTouching(camel2)||checker3.isTouching(horse2)||checker3.isTouching(elephant2)||checker3.isTouching(camel1)||checker3.isTouching(horse1)||checker3.isTouching(elephant1)){
          redsq.visible = true;
          checker3.visible = false;
          redsq2.visible = false;
          redsq1.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching3 = 1
        }
        if(checker4.isTouching(pawn1)||checker4.isTouching(pawn2)||checker4.isTouching(pawn3)||checker4.isTouching(pawn4)||checker4.isTouching(pawn5)||checker4.isTouching(pawn6)||checker4.isTouching(pawn7)||checker4.isTouching(pawn8)||checker4.isTouching(king)||checker4.isTouching(camel2)||checker4.isTouching(horse2)||checker4.isTouching(elephant2)||checker4.isTouching(camel1)||checker4.isTouching(horse1)||checker4.isTouching(elephant1)){
          checker4.visible = false;
          redsq.visible = true;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching4 = 1
        }

        if(checker5.isTouching(pawn1)||checker5.isTouching(pawn2)||checker5.isTouching(pawn3)||checker5.isTouching(pawn4)||checker5.isTouching(pawn5)||checker5.isTouching(pawn6)||checker5.isTouching(pawn7)||checker5.isTouching(pawn8)||checker5.isTouching(king)||checker5.isTouching(camel2)||checker5.isTouching(horse2)||checker5.isTouching(elephant2)||checker5.isTouching(camel1)||checker5.isTouching(horse1)||checker5.isTouching(elephant1)){
          checker5.visible = false;
          redsq.visible = true;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching5 = 1
        }
        if(checker6.isTouching(pawn1)||checker6.isTouching(pawn2)||checker6.isTouching(pawn3)||checker6.isTouching(pawn4)||checker6.isTouching(pawn5)||checker6.isTouching(pawn6)||checker6.isTouching(pawn7)||checker6.isTouching(pawn8)||checker6.isTouching(king)||checker6.isTouching(camel2)||checker6.isTouching(horse2)||checker6.isTouching(elephant2)||checker6.isTouching(camel1)||checker6.isTouching(horse1)||checker6.isTouching(elephant1)){
          checker6.visible = false;
          redsq.visible = true;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching6 = 1
        }
        if(checker7.isTouching(pawn1)||checker7.isTouching(pawn2)||checker7.isTouching(pawn3)||checker7.isTouching(pawn4)||checker7.isTouching(pawn5)||checker7.isTouching(pawn6)||checker7.isTouching(pawn7)||checker7.isTouching(pawn8)||checker7.isTouching(king)||checker7.isTouching(camel2)||checker7.isTouching(horse2)||checker7.isTouching(elephant2)||checker7.isTouching(camel1)||checker7.isTouching(horse1)||checker7.isTouching(elephant1)){
          checker7.visible = false;
          redsq.visible = true;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        
          touching7 = 1
        }


        if(checker8.isTouching(pawn1)||checker8.isTouching(pawn2)||checker8.isTouching(pawn3)||checker8.isTouching(pawn4)||checker8.isTouching(pawn5)||checker8.isTouching(pawn6)||checker8.isTouching(pawn7)||checker8.isTouching(pawn8)||checker8.isTouching(king)||checker8.isTouching(camel2)||checker8.isTouching(horse2)||checker8.isTouching(elephant2)||checker8.isTouching(camel1)||checker8.isTouching(horse1)||checker8.isTouching(elephant1)){
          checker8.visible = false;
          redsq.visible = true;
        redsq6.visible = false;
        redsq7.visible = false;
        touching8 =1
}

if(checker10.isTouching(pawn1)||checker10.isTouching(pawn2)||checker10.isTouching(pawn3)||checker10.isTouching(pawn4)||checker10.isTouching(pawn5)||checker10.isTouching(pawn6)||checker10.isTouching(pawn7)||checker10.isTouching(pawn8)||checker10.isTouching(king)||checker10.isTouching(camel2)||checker10.isTouching(horse2)||checker10.isTouching(elephant2)||checker10.isTouching(camel1)||checker10.isTouching(horse1)||checker10.isTouching(elephant1)){
  checker10.visible = false;
redsq.visible = true;
  redsq11.visible = false;
redsq12.visible = false;
redsq13.visible = false;
redsq14.visible = false;
redsq15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching10 = 1
}

if(checker11.isTouching(pawn1)||checker11.isTouching(pawn2)||checker11.isTouching(pawn3)||checker11.isTouching(pawn4)||checker11.isTouching(pawn5)||checker11.isTouching(pawn6)||checker11.isTouching(pawn7)||checker11.isTouching(pawn8)||checker11.isTouching(king)||checker11.isTouching(camel2)||checker11.isTouching(horse2)||checker11.isTouching(elephant2)||checker11.isTouching(camel1)||checker11.isTouching(horse1)||checker11.isTouching(elephant1)){
  checker11.visible = false;
redsq12.visible = false;
redsq13.visible = false;
redsq14.visible = false;
redsq15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching11 = 1
}


if(checker12.isTouching(pawn1)||checker12.isTouching(pawn2)||checker12.isTouching(pawn3)||checker12.isTouching(pawn4)||checker12.isTouching(pawn5)||checker12.isTouching(pawn6)||checker12.isTouching(pawn7)||checker12.isTouching(pawn8)||checker12.isTouching(king)||checker12.isTouching(camel2)||checker12.isTouching(horse2)||checker12.isTouching(elephant2)||checker12.isTouching(camel1)||checker12.isTouching(horse1)||checker12.isTouching(elephant1)){
  checker12.visible = false;
redsq13.visible = false;
redsq14.visible = false;
redsq15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching12 = 1
}

if(checker13.isTouching(pawn1)||checker13.isTouching(pawn2)||checker13.isTouching(pawn3)||checker13.isTouching(pawn4)||checker13.isTouching(pawn5)||checker13.isTouching(pawn6)||checker13.isTouching(pawn7)||checker13.isTouching(pawn8)||checker13.isTouching(king)||checker13.isTouching(camel2)||checker13.isTouching(horse2)||checker13.isTouching(elephant2)||checker13.isTouching(camel1)||checker13.isTouching(horse1)||checker13.isTouching(elephant1)){
  checker13.visible = false;
redsq14.visible = false;
redsq15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching13 = 1
}


if(checker14.isTouching(pawn1)||checker14.isTouching(pawn2)||checker14.isTouching(pawn3)||checker14.isTouching(pawn4)||checker14.isTouching(pawn5)||checker14.isTouching(pawn6)||checker14.isTouching(pawn7)||checker14.isTouching(pawn8)||checker14.isTouching(king)||checker14.isTouching(camel2)||checker14.isTouching(horse2)||checker14.isTouching(elephant2)||checker14.isTouching(camel1)||checker14.isTouching(horse1)||checker14.isTouching(elephant1)){
  checker14.visible = false;
redsq15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching14 = 1
}

if(checker15.isTouching(pawn1)||checker15.isTouching(pawn2)||checker15.isTouching(pawn3)||checker15.isTouching(pawn4)||checker15.isTouching(pawn5)||checker15.isTouching(pawn6)||checker15.isTouching(pawn7)||checker15.isTouching(pawn8)||checker15.isTouching(king)||checker15.isTouching(camel2)||checker15.isTouching(horse2)||checker15.isTouching(elephant2)||checker15.isTouching(camel1)||checker15.isTouching(horse1)||checker15.isTouching(elephant1)){
checker15.visible = false;
redsq16.visible = false;
redsq17.visible = false;
touching15 = 1
}

if(checker16.isTouching(pawn1)||checker16.isTouching(pawn2)||checker16.isTouching(pawn3)||checker16.isTouching(pawn4)||checker16.isTouching(pawn5)||checker16.isTouching(pawn6)||checker16.isTouching(pawn7)||checker16.isTouching(pawn8)||checker16.isTouching(king)||checker16.isTouching(camel2)||checker16.isTouching(horse2)||checker16.isTouching(elephant2)||checker16.isTouching(camel1)||checker16.isTouching(horse1)||checker16.isTouching(elephant1)){
  checker16.visible = false;
  redsq20.visible = false;
  redsq21.visible = false;
  redsq22.visible = false;
  redsq23.visible = false;
  redsq24.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching16 = 1
}

if(checker17.isTouching(pawn1)||checker17.isTouching(pawn2)||checker17.isTouching(pawn3)||checker17.isTouching(pawn4)||checker17.isTouching(pawn5)||checker17.isTouching(pawn6)||checker17.isTouching(pawn7)||checker17.isTouching(pawn8)||checker17.isTouching(king)||checker17.isTouching(camel2)||checker17.isTouching(horse2)||checker17.isTouching(elephant2)||checker17.isTouching(camel1)||checker17.isTouching(horse1)||checker17.isTouching(elephant1)){
  checker17.visible = false;
  redsq21.visible = false;
  redsq22.visible = false;
  redsq23.visible = false;
  redsq24.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching17 = 1
}

if(checker18.isTouching(pawn1)||checker18.isTouching(pawn2)||checker18.isTouching(pawn3)||checker18.isTouching(pawn4)||checker18.isTouching(pawn5)||checker18.isTouching(pawn6)||checker18.isTouching(pawn7)||checker18.isTouching(pawn8)||checker18.isTouching(king)||checker18.isTouching(camel2)||checker18.isTouching(horse2)||checker18.isTouching(elephant2)||checker18.isTouching(camel1)||checker18.isTouching(horse1)||checker18.isTouching(elephant1)){
  checker18.visible = false;
  redsq22.visible = false;
  redsq23.visible = false;
  redsq24.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching18 = 1
}



if(checker19.isTouching(pawn1)||checker19.isTouching(pawn2)||checker19.isTouching(pawn3)||checker19.isTouching(pawn4)||checker19.isTouching(pawn5)||checker19.isTouching(pawn6)||checker19.isTouching(pawn7)||checker19.isTouching(pawn8)||checker19.isTouching(king)||checker19.isTouching(camel2)||checker19.isTouching(horse2)||checker19.isTouching(elephant2)||checker19.isTouching(camel1)||checker19.isTouching(horse1)||checker19.isTouching(elephant1)){
  checker19.visible = false;
  redsq23.visible = false;
  redsq24.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching19 = 1
}


if(checker20.isTouching(pawn1)||checker20.isTouching(pawn2)||checker20.isTouching(pawn3)||checker20.isTouching(pawn4)||checker20.isTouching(pawn5)||checker20.isTouching(pawn6)||checker20.isTouching(pawn7)||checker20.isTouching(pawn8)||checker20.isTouching(king)||checker20.isTouching(camel2)||checker20.isTouching(horse2)||checker20.isTouching(elephant2)||checker20.isTouching(camel1)||checker20.isTouching(horse1)||checker20.isTouching(elephant1)){
  checker20.visible = false;
  redsq24.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching20 = 1
}

if(checker21.isTouching(pawn1)||checker21.isTouching(pawn2)||checker21.isTouching(pawn3)||checker21.isTouching(pawn4)||checker21.isTouching(pawn5)||checker21.isTouching(pawn6)||checker21.isTouching(pawn7)||checker21.isTouching(pawn8)||checker21.isTouching(king)||checker21.isTouching(camel2)||checker21.isTouching(horse2)||checker21.isTouching(elephant2)||checker21.isTouching(camel1)||checker21.isTouching(horse1)||checker21.isTouching(elephant1)){
  checker21.visible = false;
redsq25.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching21 = 1
}

if(checker22.isTouching(pawn1)||checker22.isTouching(pawn2)||checker22.isTouching(pawn3)||checker22.isTouching(pawn4)||checker22.isTouching(pawn5)||checker22.isTouching(pawn6)||checker22.isTouching(pawn7)||checker22.isTouching(pawn8)||checker22.isTouching(king)||checker22.isTouching(camel2)||checker22.isTouching(horse2)||checker22.isTouching(elephant2)||checker22.isTouching(camel1)||checker22.isTouching(horse1)||checker22.isTouching(elephant1)){
  checker22.visible = false;
redsq26.visible = false;
redsq27.visible = false;
touching22 = 1
}

if(checker23.isTouching(pawn1)||checker23.isTouching(pawn2)||checker23.isTouching(pawn3)||checker23.isTouching(pawn4)||checker23.isTouching(pawn5)||checker23.isTouching(pawn6)||checker23.isTouching(pawn7)||checker23.isTouching(pawn8)||checker23.isTouching(king)||checker23.isTouching(camel2)||checker23.isTouching(horse2)||checker23.isTouching(elephant2)||checker23.isTouching(camel1)||checker23.isTouching(horse1)||checker23.isTouching(elephant1)){
  checker23.visible = false;
redsq27.visible = false;
touching23 = 1
}
if(checker24.isTouching(pawn1)||checker24.isTouching(pawn2)||checker24.isTouching(pawn3)||checker24.isTouching(pawn4)||checker24.isTouching(pawn5)||checker24.isTouching(pawn6)||checker24.isTouching(pawn7)||checker24.isTouching(pawn8)||checker24.isTouching(king)||checker24.isTouching(camel2)||checker24.isTouching(horse2)||checker24.isTouching(elephant2)||checker24.isTouching(camel1)||checker24.isTouching(horse1)||checker24.isTouching(elephant1)){
  checker24.visible = false;
  redsq30.visible = false;
  redsq31.visible = false;
  redsq32.visible = false;
  redsq33.visible = false;
  redsq34.visible = false;
redsq35.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching24 = 1
}
if(checker25.isTouching(pawn1)||checker25.isTouching(pawn2)||checker25.isTouching(pawn3)||checker25.isTouching(pawn4)||checker25.isTouching(pawn5)||checker25.isTouching(pawn6)||checker25.isTouching(pawn7)||checker25.isTouching(pawn8)||checker25.isTouching(king)||checker25.isTouching(camel2)||checker25.isTouching(horse2)||checker25.isTouching(elephant2)||checker25.isTouching(camel1)||checker25.isTouching(horse1)||checker25.isTouching(elephant1)){
  checker25.visible = false;
  redsq31.visible = false;
  redsq32.visible = false;
  redsq33.visible = false;
  redsq34.visible = false;
redsq35.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching25 = 1
}



if(checker26.isTouching(pawn1)||checker26.isTouching(pawn2)||checker26.isTouching(pawn3)||checker26.isTouching(pawn4)||checker26.isTouching(pawn5)||checker26.isTouching(pawn6)||checker26.isTouching(pawn7)||checker26.isTouching(pawn8)||checker26.isTouching(king)||checker26.isTouching(camel2)||checker26.isTouching(horse2)||checker26.isTouching(elephant2)||checker26.isTouching(camel1)||checker26.isTouching(horse1)||checker26.isTouching(elephant1)){
  checker26.visible = false;
  redsq32.visible = false;
  redsq33.visible = false;
  redsq34.visible = false;
redsq35.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching26 = 1
}




if(checker27.isTouching(pawn1)||checker27.isTouching(pawn2)||checker27.isTouching(pawn3)||checker27.isTouching(pawn4)||checker27.isTouching(pawn5)||checker27.isTouching(pawn6)||checker27.isTouching(pawn7)||checker27.isTouching(pawn8)||checker27.isTouching(king)||checker27.isTouching(camel2)||checker27.isTouching(horse2)||checker27.isTouching(elephant2)||checker27.isTouching(camel1)||checker27.isTouching(horse1)||checker27.isTouching(elephant1)){
  checker27.visible = false;
  redsq33.visible = false;
  redsq34.visible = false;
redsq35.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching27 = 1
}

if(checker28.isTouching(pawn1)||checker28.isTouching(pawn2)||checker28.isTouching(pawn3)||checker28.isTouching(pawn4)||checker28.isTouching(pawn5)||checker28.isTouching(pawn6)||checker28.isTouching(pawn7)||checker28.isTouching(pawn8)||checker28.isTouching(king)||checker28.isTouching(camel2)||checker28.isTouching(horse2)||checker28.isTouching(elephant2)||checker28.isTouching(camel1)||checker28.isTouching(horse1)||checker28.isTouching(elephant1)){
  checker28.visible = false;
  redsq34.visible = false;
  redsq35.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching28 = 1
}

if(checker29.isTouching(pawn1)||checker29.isTouching(pawn2)||checker29.isTouching(pawn3)||checker29.isTouching(pawn4)||checker29.isTouching(pawn5)||checker29.isTouching(pawn6)||checker29.isTouching(pawn7)||checker29.isTouching(pawn8)||checker29.isTouching(king)||checker29.isTouching(camel2)||checker29.isTouching(horse2)||checker29.isTouching(elephant2)||checker29.isTouching(camel1)||checker29.isTouching(horse1)||checker29.isTouching(elephant1)){
  checker29.visible = false;
  redsq35.visible = false;
  redsq36.visible = false;
redsq37.visible = false;
touching29 = 1
}

if(checker30.isTouching(pawn1)||checker30.isTouching(pawn2)||checker30.isTouching(pawn3)||checker30.isTouching(pawn4)||checker30.isTouching(pawn5)||checker30.isTouching(pawn6)||checker30.isTouching(pawn7)||checker30.isTouching(pawn8)||checker30.isTouching(king)||checker30.isTouching(camel2)||checker30.isTouching(horse2)||checker30.isTouching(elephant2)||checker30.isTouching(camel1)||checker30.isTouching(horse1)||checker30.isTouching(elephant1)){
  checker30.visible = false;
redsq36.visible = false;
redsq37.visible = false;
touching30 = 1
}

if(checker31.isTouching(pawn1)||checker31.isTouching(pawn2)||checker31.isTouching(pawn3)||checker31.isTouching(pawn4)||checker31.isTouching(pawn5)||checker31.isTouching(pawn6)||checker31.isTouching(pawn7)||checker31.isTouching(pawn8)||checker31.isTouching(king)||checker31.isTouching(camel2)||checker31.isTouching(horse2)||checker31.isTouching(elephant2)||checker31.isTouching(camel1)||checker31.isTouching(horse1)||checker31.isTouching(elephant1)){
  checker31.visible = false;
redsq37.visible = false;
touching31 = 1
}










pressed = 9.5
        
      }
      
      if (mousePressedOver(redsq) && round === 20 && touching1 === 0  ) {
        queen.y = redsq.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }

      if (mousePressedOver(redsq1) && round === 20 && touching1 === 0&& touching3 === 0) {
        queen.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
     if (mousePressedOver(redsq2) && round === 20 && touching1 === 0&& touching3 === 0&& touching4 ===0 ) {
      queen.y = redsq2.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
       redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
       redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
       redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq3) && round === 20 && touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0) {
        queen.y = redsq3.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
     if (mousePressedOver(redsq4) && round === 20&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0 && touching6 ===0) {
        queen.y = redsq4.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
       redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
       redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
       redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq5) && round === 20&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0) {
        queen.y = redsq5.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
     if (mousePressedOver(redsq6) && round === 20&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0&& touching8 === 0) {
        queen.y = redsq6.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
       redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
       redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
       redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq7) && round === 20&& touching1 ===0 && touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0&& touching8 === 0) {
        queen.y = redsq7.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq10) && round === 20&& touching ===0) {
        queen.x = redsq10.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq11) && round === 20&& touching ===0&& touching10 ===0) {
        queen.x = redsq11.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq12) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0) {
        queen.x = redsq12.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq13) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0) {
        queen.x = redsq13.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq14) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0) {
        queen.x = redsq14.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
      redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq15) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0 && touching14 === 0) {
        queen.x = redsq15.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
      redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq16) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0&& touching14 === 0 && touching15 === 0) {
        queen.x = redsq16.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
    redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq17) && round === 20&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0&& touching14 === 0&& touching15 === 0) {
        queen.y = redsq17.x
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;
      redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
      redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
    
        round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq20) && round === 20 && touching2 ===0 && touching16 ===0) {
        queen.x = redsq20.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq21) && round === 20&& touching2 ===0&& touching16 ===0 && touching17 ===0) {
        queen.x = redsq21.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq22) && round === 20&& touching2 ===0&& touching16 ===0 && touching17 ===0 && touching18 ===0) {
        queen.x = redsq22.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq23) && round === 20&& touching2 ===0&& touching16 ===0 && touching17 ===0 && touching18 ===0 && touching19 ===0) {
        queen.x = redsq23.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq24) && round === 20&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0) {
        queen.x = redsq24.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq25) && round === 20&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0) {
        queen.x = redsq25.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq26) && round === 20&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0 && touching22 ===0) {
        queen.x = redsq26.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq27) && round === 20&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0 && touching22 ===0 && touching23 ===0) {
        queen.x = redsq27.x
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
         redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
       round = 0
        turn = turn + 1
      }
       if (mousePressedOver(redsq30) && round === 20 && touching24 === 0 ) {
        queen.y = redsq30.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq31) && round === 20 && touching24 === 0 && touching25 === 0) {
        queen.y = redsq31.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq32) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0) {
        queen.y = redsq32.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq33) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0) {
        queen.y = redsq33.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq34) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0) {
        queen.y = redsq34.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq35) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0) {
        queen.y = redsq35.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq36) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0 && touching30 === 0) {
        queen.y = redsq36.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      }
    
       if (mousePressedOver(redsq37) && round === 20 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0 && touching30 === 0 && touching31 === 0) {
        queen.y = redsq37.y
        redsq1.visible = false;
        redsq.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
         redsq10.visible = false;
        redsq11.visible = false;
        redsq12.visible = false;
        redsq13.visible = false;
        redsq14.visible = false;
        redsq15.visible = false;
        redsq16.visible = false;
        redsq17.visible = false;   
        redsq20.visible = false;
        redsq20.visible = false;
        redsq21.visible = false;
        redsq22.visible = false;
        redsq23.visible = false;
        redsq24.visible = false;
        redsq25.visible = false;
        redsq26.visible = false;
        redsq27.visible = false;
        redsq30.visible = false;
        redsq31.visible = false;
        redsq32.visible = false;
        redsq33.visible = false;
        redsq34.visible = false;
        redsq35.visible = false;
        redsq36.visible = false;
        redsq37.visible = false;
    
    
       round = 0
        turn = turn + 1
      
      
      
      if(turn %2 != 2){
touching = 0

      }
      
      
      }
}
}