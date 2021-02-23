function Queen1(){
        if (turn % 2 != 0) {
          if (mousePressedOver(queen1) && round === 0) {
            pressed = 50
            round = 50
          }
         
          if (pressed === 50) {
          redsq = createSprite(queen1.x, queen1.y - 100, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(queen1.x, queen1.y -200, 100, 100)
          redsq1.shapeColor = "red";
          redsq2 = createSprite(queen1.x, queen1.y - 300, 100, 100)
          redsq2.shapeColor = "red";
          redsq3 = createSprite(queen1.x, queen1.y  - 400, 100, 100)
          redsq3.shapeColor = "red";
          redsq4 = createSprite(queen1.x, queen1.y - 500, 100, 100)
          redsq4.shapeColor = "red";
          redsq5 = createSprite(queen1.x, queen1.y - 600, 100, 100)
          redsq5.shapeColor = "red";
          redsq6 = createSprite(queen1.x, queen1.y - 700, 100, 100)
          redsq6.shapeColor = "red";
          redsq7 = createSprite(queen1.x, queen1.y - 800, 100, 100)
          redsq7.shapeColor = "red";
          redsq10 = createSprite(queen1.x+100, queen1.y, 100, 100)
          redsq10.shapeColor = "red";
          redsq11 = createSprite(queen1.x+200, queen1.y, 100, 100)
          redsq11.shapeColor = "red";
          redsq12 = createSprite(queen1.x+300, queen1.y, 100, 100)
          redsq12.shapeColor = "red";
          redsq13 = createSprite(queen1.x+400, queen1.y , 100, 100)
          redsq13.shapeColor = "red";
          redsq14 = createSprite(queen1.x+500, queen1.y, 100, 100)
          redsq14.shapeColor = "red";
          redsq15 = createSprite(queen1.x+600, queen1.y, 100, 100)
          redsq15.shapeColor = "red";
          redsq16 = createSprite(queen1.x+700, queen1.y, 100, 100)
          redsq16.shapeColor = "red";
          redsq17 = createSprite(queen1.x+800, queen1.y, 100, 100)
          redsq17.shapeColor = "red";
          redsq20 = createSprite(queen1.x-100, queen1.y, 100, 100)
          redsq20.shapeColor = "red";
          redsq21 = createSprite(queen1.x-200, queen1.y, 100, 100)
          redsq21.shapeColor = "red";
          redsq22 = createSprite(queen1.x-300, queen1.y, 100, 100)
          redsq22.shapeColor = "red";
          redsq23 = createSprite(queen1.x-400, queen1.y , 100, 100)
          redsq23.shapeColor = "red";
          redsq24 = createSprite(queen1.x-500, queen1.y, 100, 100)
          redsq24.shapeColor = "red";
          redsq25 = createSprite(queen1.x-600, queen1.y, 100, 100)
          redsq25.shapeColor = "red";
          redsq26 = createSprite(queen1.x-700, queen1.y, 100, 100)
          redsq26.shapeColor = "red";
          redsq27 = createSprite(queen1.x-800, queen1.y, 100, 100)
          redsq27.shapeColor = "red";
          redsq30 = createSprite(queen1.x, queen1.y+100, 100, 100)
          redsq30.shapeColor = "red";
          redsq31 = createSprite(queen1.x, queen1.y+200, 100, 100)
          redsq31.shapeColor = "red";
          redsq32 = createSprite(queen1.x, queen1.y+300,100, 100)
          redsq32.shapeColor = "red";
          redsq33 = createSprite(queen1.x, queen1.y+400 , 100, 100)
          redsq33.shapeColor = "red";
          redsq34 = createSprite(queen1.x, queen1.y+500, 100, 100)
          redsq34.shapeColor = "red";
          redsq35 = createSprite(queen1.x, queen1.y+600, 100, 100)
          redsq35.shapeColor = "red";
          redsq36 = createSprite(queen1.x, queen1.y+700, 100, 100)
          redsq36.shapeColor = "red";
          redsq37 = createSprite(queen1.x, queen1.y+800,100, 100)
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
  
          if(checker.isTouching(pawn10)||checker.isTouching(pawn12)||checker.isTouching(pawn13)||checker.isTouching(pawn14)||checker.isTouching(pawn15)||checker.isTouching(pawn16)||checker.isTouching(pawn17)||checker.isTouching(pawn18)||checker.isTouching(king1)||checker.isTouching(camel12)||checker.isTouching(horse12)||checker.isTouching(elephant12)||checker.isTouching(camel10)||checker.isTouching(horse10)||checker.isTouching(elephant10)){
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
  
          if(checker2.isTouching(pawn10)||checker2.isTouching(pawn12)||checker2.isTouching(pawn13)||checker2.isTouching(pawn14)||checker2.isTouching(pawn15)||checker2.isTouching(pawn16)||checker2.isTouching(pawn17)||checker2.isTouching(pawn18)||checker2.isTouching(king1)||checker2.isTouching(camel12)||checker2.isTouching(horse12)||checker2.isTouching(elephant12)||checker2.isTouching(camel10)||checker2.isTouching(horse10)||checker2.isTouching(elephant10)){
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
  
          if(checker1.isTouching(pawn10)||checker1.isTouching(pawn12)||checker1.isTouching(pawn13)||checker1.isTouching(pawn14)||checker1.isTouching(pawn15)||checker1.isTouching(pawn16)||checker1.isTouching(pawn17)||checker1.isTouching(pawn18)||checker1.isTouching(king1)||checker1.isTouching(camel12)||checker1.isTouching(horse12)||checker1.isTouching(elephant12)||checker1.isTouching(camel10)||checker1.isTouching(horse10)||checker1.isTouching(elephant10)){
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
  
  
          if(checker3.isTouching(pawn10)||checker3.isTouching(pawn12)||checker3.isTouching(pawn13)||checker3.isTouching(pawn14)||checker3.isTouching(pawn15)||checker3.isTouching(pawn16)||checker3.isTouching(pawn17)||checker3.isTouching(pawn18)||checker3.isTouching(king1)||checker3.isTouching(camel12)||checker3.isTouching(horse12)||checker3.isTouching(elephant12)||checker3.isTouching(camel10)||checker3.isTouching(horse10)||checker3.isTouching(elephant10)){
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
          if(checker4.isTouching(pawn10)||checker4.isTouching(pawn12)||checker4.isTouching(pawn13)||checker4.isTouching(pawn14)||checker4.isTouching(pawn15)||checker4.isTouching(pawn16)||checker4.isTouching(pawn17)||checker4.isTouching(pawn18)||checker4.isTouching(king1)||checker4.isTouching(camel12)||checker4.isTouching(horse12)||checker4.isTouching(elephant12)||checker4.isTouching(camel10)||checker4.isTouching(horse10)||checker4.isTouching(elephant10)){
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
  
          if(checker5.isTouching(pawn10)||checker5.isTouching(pawn12)||checker5.isTouching(pawn13)||checker5.isTouching(pawn14)||checker5.isTouching(pawn15)||checker5.isTouching(pawn16)||checker5.isTouching(pawn17)||checker5.isTouching(pawn18)||checker5.isTouching(king1)||checker5.isTouching(camel12)||checker5.isTouching(horse12)||checker5.isTouching(elephant12)||checker5.isTouching(camel10)||checker5.isTouching(horse10)||checker5.isTouching(elephant10)){
            checker5.visible = false;
            redsq.visible = true;
          redsq3.visible = false;
          redsq4.visible = false;
          redsq5.visible = false;
          redsq6.visible = false;
          redsq7.visible = false;
          
            touching5 = 1
          }
          if(checker6.isTouching(pawn10)||checker6.isTouching(pawn12)||checker6.isTouching(pawn13)||checker6.isTouching(pawn14)||checker6.isTouching(pawn15)||checker6.isTouching(pawn16)||checker6.isTouching(pawn17)||checker6.isTouching(pawn18)||checker6.isTouching(king1)||checker6.isTouching(camel12)||checker6.isTouching(horse12)||checker6.isTouching(elephant12)||checker6.isTouching(camel10)||checker6.isTouching(horse10)||checker6.isTouching(elephant10)){
            checker6.visible = false;
            redsq.visible = true;
          redsq4.visible = false;
          redsq5.visible = false;
          redsq6.visible = false;
          redsq7.visible = false;
          
            touching6 = 1
          }
          if(checker7.isTouching(pawn10)||checker7.isTouching(pawn12)||checker7.isTouching(pawn13)||checker7.isTouching(pawn14)||checker7.isTouching(pawn15)||checker7.isTouching(pawn16)||checker7.isTouching(pawn17)||checker7.isTouching(pawn18)||checker7.isTouching(king1)||checker7.isTouching(camel12)||checker7.isTouching(horse12)||checker7.isTouching(elephant12)||checker7.isTouching(camel10)||checker7.isTouching(horse10)||checker7.isTouching(elephant10)){
            checker7.visible = false;
            redsq.visible = true;
          redsq5.visible = false;
          redsq6.visible = false;
          redsq7.visible = false;
          
            touching7 = 1
          }
  
  
          if(checker8.isTouching(pawn10)||checker8.isTouching(pawn12)||checker8.isTouching(pawn13)||checker8.isTouching(pawn14)||checker8.isTouching(pawn15)||checker8.isTouching(pawn16)||checker8.isTouching(pawn17)||checker8.isTouching(pawn18)||checker8.isTouching(king1)||checker8.isTouching(camel12)||checker8.isTouching(horse12)||checker8.isTouching(elephant12)||checker8.isTouching(camel10)||checker8.isTouching(horse10)||checker8.isTouching(elephant10)){
            checker8.visible = false;
            redsq.visible = true;
          redsq6.visible = false;
          redsq7.visible = false;
          touching8 =1
  }
  
  if(checker10.isTouching(pawn10)||checker10.isTouching(pawn12)||checker10.isTouching(pawn13)||checker10.isTouching(pawn14)||checker10.isTouching(pawn15)||checker10.isTouching(pawn16)||checker10.isTouching(pawn17)||checker10.isTouching(pawn18)||checker10.isTouching(king1)||checker10.isTouching(camel12)||checker10.isTouching(horse12)||checker10.isTouching(elephant12)||checker10.isTouching(camel10)||checker10.isTouching(horse10)||checker10.isTouching(elephant10)){
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
  
  if(checker11.isTouching(pawn10)||checker11.isTouching(pawn12)||checker11.isTouching(pawn13)||checker11.isTouching(pawn14)||checker11.isTouching(pawn15)||checker11.isTouching(pawn16)||checker11.isTouching(pawn17)||checker11.isTouching(pawn18)||checker11.isTouching(king1)||checker11.isTouching(camel12)||checker11.isTouching(horse12)||checker11.isTouching(elephant12)||checker11.isTouching(camel10)||checker11.isTouching(horse10)||checker11.isTouching(elephant10)){
    checker11.visible = false;
  redsq12.visible = false;
  redsq13.visible = false;
  redsq14.visible = false;
  redsq15.visible = false;
  redsq16.visible = false;
  redsq17.visible = false;
  touching11 = 1
  }
  
  
  if(checker12.isTouching(pawn10)||checker12.isTouching(pawn12)||checker12.isTouching(pawn13)||checker12.isTouching(pawn14)||checker12.isTouching(pawn15)||checker12.isTouching(pawn16)||checker12.isTouching(pawn17)||checker12.isTouching(pawn18)||checker12.isTouching(king1)||checker12.isTouching(camel12)||checker12.isTouching(horse12)||checker12.isTouching(elephant12)||checker12.isTouching(camel10)||checker12.isTouching(horse10)||checker12.isTouching(elephant10)){
    checker12.visible = false;
  redsq13.visible = false;
  redsq14.visible = false;
  redsq15.visible = false;
  redsq16.visible = false;
  redsq17.visible = false;
  touching12 = 1
  }
  
  if(checker13.isTouching(pawn10)||checker13.isTouching(pawn12)||checker13.isTouching(pawn13)||checker13.isTouching(pawn14)||checker13.isTouching(pawn15)||checker13.isTouching(pawn16)||checker13.isTouching(pawn17)||checker13.isTouching(pawn18)||checker13.isTouching(king1)||checker13.isTouching(camel12)||checker13.isTouching(horse12)||checker13.isTouching(elephant12)||checker13.isTouching(camel10)||checker13.isTouching(horse10)||checker13.isTouching(elephant10)){
    checker13.visible = false;
  redsq14.visible = false;
  redsq15.visible = false;
  redsq16.visible = false;
  redsq17.visible = false;
  touching13 = 1
  }
  
  
  if(checker14.isTouching(pawn10)||checker14.isTouching(pawn12)||checker14.isTouching(pawn13)||checker14.isTouching(pawn14)||checker14.isTouching(pawn15)||checker14.isTouching(pawn16)||checker14.isTouching(pawn17)||checker14.isTouching(pawn18)||checker14.isTouching(king1)||checker14.isTouching(camel12)||checker14.isTouching(horse12)||checker14.isTouching(elephant12)||checker14.isTouching(camel10)||checker14.isTouching(horse10)||checker14.isTouching(elephant10)){
    checker14.visible = false;
  redsq15.visible = false;
  redsq16.visible = false;
  redsq17.visible = false;
  touching14 = 1
  }
  
  if(checker15.isTouching(pawn10)||checker15.isTouching(pawn12)||checker15.isTouching(pawn13)||checker15.isTouching(pawn14)||checker15.isTouching(pawn15)||checker15.isTouching(pawn16)||checker15.isTouching(pawn17)||checker15.isTouching(pawn18)||checker15.isTouching(king1)||checker15.isTouching(camel12)||checker15.isTouching(horse12)||checker15.isTouching(elephant12)||checker15.isTouching(camel10)||checker15.isTouching(horse10)||checker15.isTouching(elephant10)){
  checker15.visible = false;
  redsq16.visible = false;
  redsq17.visible = false;
  touching15 = 1
  }
  
  if(checker16.isTouching(pawn10)||checker16.isTouching(pawn12)||checker16.isTouching(pawn13)||checker16.isTouching(pawn14)||checker16.isTouching(pawn15)||checker16.isTouching(pawn16)||checker16.isTouching(pawn17)||checker16.isTouching(pawn18)||checker16.isTouching(king1)||checker16.isTouching(camel12)||checker16.isTouching(horse12)||checker16.isTouching(elephant12)||checker16.isTouching(camel10)||checker16.isTouching(horse10)||checker16.isTouching(elephant10)){
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
  
  if(checker17.isTouching(pawn10)||checker17.isTouching(pawn12)||checker17.isTouching(pawn13)||checker17.isTouching(pawn14)||checker17.isTouching(pawn15)||checker17.isTouching(pawn16)||checker17.isTouching(pawn17)||checker17.isTouching(pawn18)||checker17.isTouching(king1)||checker17.isTouching(camel12)||checker17.isTouching(horse12)||checker17.isTouching(elephant12)||checker17.isTouching(camel10)||checker17.isTouching(horse10)||checker17.isTouching(elephant10)){
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
  
  if(checker18.isTouching(pawn10)||checker18.isTouching(pawn12)||checker18.isTouching(pawn13)||checker18.isTouching(pawn14)||checker18.isTouching(pawn15)||checker18.isTouching(pawn16)||checker18.isTouching(pawn17)||checker18.isTouching(pawn18)||checker18.isTouching(king1)||checker18.isTouching(camel12)||checker18.isTouching(horse12)||checker18.isTouching(elephant12)||checker18.isTouching(camel10)||checker18.isTouching(horse10)||checker18.isTouching(elephant10)){
    checker18.visible = false;
    redsq22.visible = false;
    redsq23.visible = false;
    redsq24.visible = false;
  redsq25.visible = false;
  redsq26.visible = false;
  redsq27.visible = false;
  touching18 = 1
  }
  
  
  
  if(checker19.isTouching(pawn10)||checker19.isTouching(pawn12)||checker19.isTouching(pawn13)||checker19.isTouching(pawn14)||checker19.isTouching(pawn15)||checker19.isTouching(pawn16)||checker19.isTouching(pawn17)||checker19.isTouching(pawn18)||checker19.isTouching(king1)||checker19.isTouching(camel12)||checker19.isTouching(horse12)||checker19.isTouching(elephant12)||checker19.isTouching(camel10)||checker19.isTouching(horse10)||checker19.isTouching(elephant10)){
    checker19.visible = false;
    redsq23.visible = false;
    redsq24.visible = false;
  redsq25.visible = false;
  redsq26.visible = false;
  redsq27.visible = false;
  touching19 = 1
  }
  
  
  if(checker20.isTouching(pawn10)||checker20.isTouching(pawn12)||checker20.isTouching(pawn13)||checker20.isTouching(pawn14)||checker20.isTouching(pawn15)||checker20.isTouching(pawn16)||checker20.isTouching(pawn17)||checker20.isTouching(pawn18)||checker20.isTouching(king1)||checker20.isTouching(camel12)||checker20.isTouching(horse12)||checker20.isTouching(elephant12)||checker20.isTouching(camel10)||checker20.isTouching(horse10)||checker20.isTouching(elephant10)){
    checker20.visible = false;
    redsq24.visible = false;
  redsq25.visible = false;
  redsq26.visible = false;
  redsq27.visible = false;
  touching20 = 1
  }
  
  if(checker21.isTouching(pawn10)||checker21.isTouching(pawn12)||checker21.isTouching(pawn13)||checker21.isTouching(pawn14)||checker21.isTouching(pawn15)||checker21.isTouching(pawn16)||checker21.isTouching(pawn17)||checker21.isTouching(pawn18)||checker21.isTouching(king1)||checker21.isTouching(camel12)||checker21.isTouching(horse12)||checker21.isTouching(elephant12)||checker21.isTouching(camel10)||checker21.isTouching(horse10)||checker21.isTouching(elephant10)){
    checker21.visible = false;
  redsq25.visible = false;
  redsq26.visible = false;
  redsq27.visible = false;
  touching21 = 1
  }
  
  if(checker22.isTouching(pawn10)||checker22.isTouching(pawn12)||checker22.isTouching(pawn13)||checker22.isTouching(pawn14)||checker22.isTouching(pawn15)||checker22.isTouching(pawn16)||checker22.isTouching(pawn17)||checker22.isTouching(pawn18)||checker22.isTouching(king1)||checker22.isTouching(camel12)||checker22.isTouching(horse12)||checker22.isTouching(elephant12)||checker22.isTouching(camel10)||checker22.isTouching(horse10)||checker22.isTouching(elephant10)){
    checker22.visible = false;
  redsq26.visible = false;
  redsq27.visible = false;
  touching22 = 1
  }
  
  if(checker23.isTouching(pawn10)||checker23.isTouching(pawn12)||checker23.isTouching(pawn13)||checker23.isTouching(pawn14)||checker23.isTouching(pawn15)||checker23.isTouching(pawn16)||checker23.isTouching(pawn17)||checker23.isTouching(pawn18)||checker23.isTouching(king1)||checker23.isTouching(camel12)||checker23.isTouching(horse12)||checker23.isTouching(elephant12)||checker23.isTouching(camel10)||checker23.isTouching(horse10)||checker23.isTouching(elephant10)){
    checker23.visible = false;
  redsq27.visible = false;
  touching23 = 1
  }
  if(checker24.isTouching(pawn10)||checker24.isTouching(pawn12)||checker24.isTouching(pawn13)||checker24.isTouching(pawn14)||checker24.isTouching(pawn15)||checker24.isTouching(pawn16)||checker24.isTouching(pawn17)||checker24.isTouching(pawn18)||checker24.isTouching(king1)||checker24.isTouching(camel12)||checker24.isTouching(horse12)||checker24.isTouching(elephant12)||checker24.isTouching(camel10)||checker24.isTouching(horse10)||checker24.isTouching(elephant10)){
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
  if(checker25.isTouching(pawn10)||checker25.isTouching(pawn12)||checker25.isTouching(pawn13)||checker25.isTouching(pawn14)||checker25.isTouching(pawn15)||checker25.isTouching(pawn16)||checker25.isTouching(pawn17)||checker25.isTouching(pawn18)||checker25.isTouching(king1)||checker25.isTouching(camel12)||checker25.isTouching(horse12)||checker25.isTouching(elephant12)||checker25.isTouching(camel10)||checker25.isTouching(horse10)||checker25.isTouching(elephant10)){
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
  
  
  
  if(checker26.isTouching(pawn10)||checker26.isTouching(pawn12)||checker26.isTouching(pawn13)||checker26.isTouching(pawn14)||checker26.isTouching(pawn15)||checker26.isTouching(pawn16)||checker26.isTouching(pawn17)||checker26.isTouching(pawn18)||checker26.isTouching(king1)||checker26.isTouching(camel12)||checker26.isTouching(horse12)||checker26.isTouching(elephant12)||checker26.isTouching(camel10)||checker26.isTouching(horse10)||checker26.isTouching(elephant10)){
    checker26.visible = false;
    redsq32.visible = false;
    redsq33.visible = false;
    redsq34.visible = false;
  redsq35.visible = false;
  redsq36.visible = false;
  redsq37.visible = false;
  touching26 = 1
  }
  
  
  
  
  if(checker27.isTouching(pawn10)||checker27.isTouching(pawn12)||checker27.isTouching(pawn13)||checker27.isTouching(pawn14)||checker27.isTouching(pawn15)||checker27.isTouching(pawn16)||checker27.isTouching(pawn17)||checker27.isTouching(pawn18)||checker27.isTouching(king1)||checker27.isTouching(camel12)||checker27.isTouching(horse12)||checker27.isTouching(elephant12)||checker27.isTouching(camel10)||checker27.isTouching(horse10)||checker27.isTouching(elephant10)){
    checker27.visible = false;
    redsq33.visible = false;
    redsq34.visible = false;
  redsq35.visible = false;
  redsq36.visible = false;
  redsq37.visible = false;
  touching27 = 1
  }
  
  if(checker28.isTouching(pawn10)||checker28.isTouching(pawn12)||checker28.isTouching(pawn13)||checker28.isTouching(pawn14)||checker28.isTouching(pawn15)||checker28.isTouching(pawn16)||checker28.isTouching(pawn17)||checker28.isTouching(pawn18)||checker28.isTouching(king1)||checker28.isTouching(camel12)||checker28.isTouching(horse12)||checker28.isTouching(elephant12)||checker28.isTouching(camel10)||checker28.isTouching(horse10)||checker28.isTouching(elephant10)){
    checker28.visible = false;
    redsq34.visible = false;
    redsq35.visible = false;
  redsq36.visible = false;
  redsq37.visible = false;
  touching28 = 1
  }
  
  if(checker29.isTouching(pawn10)||checker29.isTouching(pawn12)||checker29.isTouching(pawn13)||checker29.isTouching(pawn14)||checker29.isTouching(pawn15)||checker29.isTouching(pawn16)||checker29.isTouching(pawn17)||checker29.isTouching(pawn18)||checker29.isTouching(king1)||checker29.isTouching(camel12)||checker29.isTouching(horse12)||checker29.isTouching(elephant12)||checker29.isTouching(camel10)||checker29.isTouching(horse10)||checker29.isTouching(elephant10)){
    checker29.visible = false;
    redsq35.visible = false;
    redsq36.visible = false;
  redsq37.visible = false;
  touching29 = 1
  }
  
  if(checker30.isTouching(pawn10)||checker30.isTouching(pawn12)||checker30.isTouching(pawn13)||checker30.isTouching(pawn14)||checker30.isTouching(pawn15)||checker30.isTouching(pawn16)||checker30.isTouching(pawn17)||checker30.isTouching(pawn18)||checker30.isTouching(king1)||checker30.isTouching(camel12)||checker30.isTouching(horse12)||checker30.isTouching(elephant12)||checker30.isTouching(camel10)||checker30.isTouching(horse10)||checker30.isTouching(elephant10)){
    checker30.visible = false;
  redsq36.visible = false;
  redsq37.visible = false;
  touching30 = 1
  }
  
  if(checker31.isTouching(pawn10)||checker31.isTouching(pawn12)||checker31.isTouching(pawn13)||checker31.isTouching(pawn14)||checker31.isTouching(pawn15)||checker31.isTouching(pawn16)||checker31.isTouching(pawn17)||checker31.isTouching(pawn18)||checker31.isTouching(king1)||checker31.isTouching(camel12)||checker31.isTouching(horse12)||checker31.isTouching(elephant12)||checker31.isTouching(camel10)||checker31.isTouching(horse10)||checker31.isTouching(elephant10)){
    checker31.visible = false;
  redsq37.visible = false;
  touching31 = 1
  }
  
  
  
  
  
  
  
  
  
  
  pressed = 9.5
          
        }
        
        if (mousePressedOver(redsq) && round === 50 && touching1 === 0  ) {
          queen1.y = redsq.y
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
  
        if (mousePressedOver(redsq1) && round === 50 && touching1 === 0&& touching3 === 0) {
          queen1.y = redsq1.y
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
       if (mousePressedOver(redsq2) && round === 50 && touching1 === 0&& touching3 === 0&& touching4 ===0 ) {
        queen1.y = redsq2.y
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
        if (mousePressedOver(redsq3) && round === 50 && touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0) {
          queen1.y = redsq3.y
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
       if (mousePressedOver(redsq4) && round === 50&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0 && touching6 ===0) {
          queen1.y = redsq4.y
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
        if (mousePressedOver(redsq5) && round === 50&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0) {
          queen1.y = redsq5.y
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
       if (mousePressedOver(redsq6) && round === 50&& touching1 ===0&& touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0&& touching8 === 0) {
          queen1.y = redsq6.y
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
        if (mousePressedOver(redsq7) && round === 50&& touching1 ===0 && touching3 === 0&& touching4 ===0 && touching5 ===0&& touching6 ===0&& touching7 === 0&& touching8 === 0) {
          queen1.y = redsq7.y
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
      if (mousePressedOver(redsq10) && round === 50&& touching ===0) {
          queen1.x = redsq10.x
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
      if (mousePressedOver(redsq11) && round === 50&& touching ===0&& touching10 ===0) {
          queen1.x = redsq11.x
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
      if (mousePressedOver(redsq12) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0) {
          queen1.x = redsq12.x
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
      if (mousePressedOver(redsq13) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0) {
          queen1.x = redsq13.x
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
      if (mousePressedOver(redsq14) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0) {
          queen1.x = redsq14.x
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
      if (mousePressedOver(redsq15) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0 && touching14 === 0) {
          queen1.x = redsq15.x
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
      if (mousePressedOver(redsq16) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0&& touching14 === 0 && touching15 === 0) {
          queen1.x = redsq16.x
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
      if (mousePressedOver(redsq17) && round === 50&& touching ===0&& touching10 ===0 && touching11 ===0&& touching12 ===0&& touching13 ===0&& touching14 === 0&& touching15 === 0) {
          queen1.y = redsq17.x
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
         if (mousePressedOver(redsq20) && round === 50 && touching2 ===0 && touching16 ===0) {
          queen1.x = redsq20.x
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
         if (mousePressedOver(redsq21) && round === 50&& touching2 ===0&& touching16 ===0 && touching17 ===0) {
          queen1.x = redsq21.x
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
         if (mousePressedOver(redsq22) && round === 50&& touching2 ===0&& touching16 ===0 && touching17 ===0 && touching18 ===0) {
          queen1.x = redsq22.x
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
         if (mousePressedOver(redsq23) && round === 50&& touching2 ===0&& touching16 ===0 && touching17 ===0 && touching18 ===0 && touching19 ===0) {
          queen1.x = redsq23.x
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
         if (mousePressedOver(redsq24) && round === 50&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0) {
          queen1.x = redsq24.x
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
         if (mousePressedOver(redsq25) && round === 50&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0) {
          queen1.x = redsq25.x
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
         if (mousePressedOver(redsq26) && round === 50&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0 && touching22 ===0) {
          queen1.x = redsq26.x
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
         if (mousePressedOver(redsq27) && round === 50&& touching2 ===0&& touching16 ===0&& touching17 ===0 && touching18 ===0 && touching19 ===0 && touching20 ===0 && touching21 ===0 && touching22 ===0 && touching23 ===0) {
          queen1.x = redsq27.x
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
         if (mousePressedOver(redsq30) && round === 50 && touching24 === 0 ) {
          queen1.y = redsq30.y
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
      
         if (mousePressedOver(redsq31) && round === 50 && touching24 === 0 && touching25 === 0) {
          queen1.y = redsq31.y
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
      
         if (mousePressedOver(redsq32) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0) {
          queen1.y = redsq32.y
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
      
         if (mousePressedOver(redsq33) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0) {
          queen1.y = redsq33.y
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
      
         if (mousePressedOver(redsq34) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0) {
          queen1.y = redsq34.y
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
      
         if (mousePressedOver(redsq35) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0) {
          queen1.y = redsq35.y
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
      
         if (mousePressedOver(redsq36) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0 && touching30 === 0) {
          queen1.y = redsq36.y
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
      
         if (mousePressedOver(redsq37) && round === 50 && touching24 === 0 && touching25 === 0 && touching26 === 0 && touching27 === 0 && touching28 === 0 && touching29 === 0 && touching30 === 0 && touching31 === 0) {
          queen1.y = redsq37.y
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
        
        
        
        if(turn %2 === 2){
  touching = 0
  
        }
        
        
        }
  }
  }