function pawn(){

    if (turn % 2 === 0) {
        if (mousePressedOver(pawn1) && round === 0) {
          pressed = 1
          round = 1
        }
        if (pressed === 1) {
          redsq = createSprite(pawn1.x, pawn1.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn1.x, pawn1.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          checker = createSprite(redsq.x,redsq.y,100,100)
          checker1 = createSprite(redsq1.x,redsq1.y,100,100)
          checker.visible = false;
          checker1.visible = false;
          touching = 0
          touching1 = 0

          if(checker.isTouching(pawn1)||checker.isTouching(pawn2)||checker.isTouching(pawn3)||checker.isTouching(pawn4)||checker.isTouching(pawn5)||checker.isTouching(pawn6)||checker.isTouching(pawn7)||checker.isTouching(pawn8)||checker.isTouching(king)||checker.isTouching(camel2)||checker.isTouching(horse2)||checker.isTouching(elephant2)||checker.isTouching(camel1)||checker.isTouching(horse1)||checker.isTouching(elephant1)){
            redsq.visible = false;
            checker.visible = false;
            checker1.visible = false;
          redsq.visible = false;
          redsq1.visible = true;
          
            touching1 = 5
          }
  
          if(checker1.isTouching(pawn1)||checker1.isTouching(pawn2)||checker1.isTouching(pawn3)||checker1.isTouching(pawn4)||checker1.isTouching(pawn5)||checker1.isTouching(pawn6)||checker1.isTouching(pawn7)||checker1.isTouching(pawn8)||checker1.isTouching(king)||checker1.isTouching(camel2)||checker1.isTouching(horse2)||checker1.isTouching(elephant2)||checker1.isTouching(camel1)||checker1.isTouching(horse1)||checker1.isTouching(elephant1)){
            redsq.visible = false;
            checker1.visible = false;
            checker.visible = false;
            redsq1.visible = false;
          redsq.visible = false;
          
            touching1 = 5
          }



          pressed = 1.5
        }
        if (mousePressedOver(redsq) && round === 1) {
          pawn1.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 1) {
          pawn1.y = redsq1.y
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
    
        if (mousePressedOver(pawn2) && round === 0) {
          pressed = 2
          round = 2
        }
        if (pressed === 2) {
          redsq = createSprite(pawn2.x, pawn2.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn2.x, pawn2.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 2.5
        }
        if (mousePressedOver(redsq) && round === 2) {
          pawn2.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 2) {
          pawn2.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
    
        if (mousePressedOver(pawn3) && round === 0) {
          pressed = 3
          round = 3
        }
        if (pressed === 3) {
          redsq = createSprite(pawn3.x, pawn3.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn3.x, pawn3.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 3.5
        }
        if (mousePressedOver(redsq) && round === 3) {
          pawn3.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 3) {
          pawn3.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(pawn4) && round === 0) {
          pressed = 4
          round = 4
        }
        if (pressed === 4) {
          redsq = createSprite(pawn4.x, pawn4.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn4.x, pawn4.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 4.5
        }
        if (mousePressedOver(redsq) && round === 4) {
          pawn4.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 4) {
          pawn4.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
    
        if (mousePressedOver(pawn5) && round === 0) {
          pressed = 5
          round = 5
        }
        if (pressed === 5) {
          redsq = createSprite(pawn5.x, pawn5.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn5.x, pawn5.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 5.5
        }
        if (mousePressedOver(redsq) && round === 5) {
          pawn5.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 5) {
          pawn5.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
    
        if (mousePressedOver(pawn6) && round === 0) {
          pressed = 6
          round = 6
        }
        if (pressed === 6) {
          redsq = createSprite(pawn6.x, pawn6.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn6.x, pawn6.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 6.5
        }
        if (mousePressedOver(redsq) && round === 6) {
          pawn6.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 6) {
          pawn6.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(pawn7) && round === 0) {
          pressed = 7
          round = 7
        }
        if (pressed === 7) {
          redsq = createSprite(pawn7.x, pawn7.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn7.x, pawn7.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 7.5
        }
        if (mousePressedOver(redsq) && round === 7) {
          pawn7.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 7) {
          pawn7.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
    
        if (mousePressedOver(pawn8) && round === 0) {
          pressed = 8
          round = 8
        }
        if (pressed === 8) {
          redsq = createSprite(pawn8.x, pawn8.y - 200, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(pawn8.x, pawn8.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          pressed = 8.5
        }
        if (mousePressedOver(redsq) && round === 8) {
          pawn8.y = redsq.y
          redsq.visible = false;
          redsq1.visible = false;
          round = 0
          turn = turn + 1
        }
        if (mousePressedOver(redsq1) && round === 8) {
          pawn8.y = redsq1.y
          pressed = 0
          redsq1.visible = false;
          redsq.visible = false;
          round = 0
          turn = turn + 1
        }
      } else if (mousePressedOver(pawn10) && round === 0) {
        pressed = 30
        round = 30
      }
      if (pressed === 30) {
        redsq = createSprite(pawn10.x, pawn10.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn10.x, pawn10.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 30.5
      }
      if (mousePressedOver(redsq) && round === 30) {
        pawn10.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 30) {
        pawn10.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(pawn12) && round === 0 && turn % 2 != 0) {
        pressed = 31
        round = 31
      }
      if (pressed === 31) {
        redsq = createSprite(pawn12.x, pawn12.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn12.x, pawn12.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 31.5
      }
      if (mousePressedOver(redsq) && round === 31) {
        pawn12.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 31) {
        pawn12.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(pawn13) && round === 0 && turn % 2 != 0) {
        pressed = 32
        round = 32
      }
      if (pressed === 32) {
        redsq = createSprite(pawn13.x, pawn13.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn13.x, pawn13.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 32.5
      }
      if (mousePressedOver(redsq) && round === 32) {
        pawn13.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 32) {
        pawn13.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(pawn14) && round === 0 && turn % 2 != 0) {
        pressed = 33
        round = 33
      }
      if (pressed === 33) {
        redsq = createSprite(pawn14.x, pawn14.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn14.x, pawn14.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 33.5
      }
      if (mousePressedOver(redsq) && round === 33) {
        pawn14.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 33) {
        pawn14.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(pawn15) && round === 0 && turn % 2 != 0) {
        pressed = 34
        round = 34
      }
      if (pressed === 34) {
        redsq = createSprite(pawn15.x, pawn15.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn15.x, pawn15.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 34.5
      }
      if (mousePressedOver(redsq) && round === 34) {
        pawn15.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 34) {
        pawn15.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
    
      if (mousePressedOver(pawn16) && round === 0 && turn % 2 != 0) {
        pressed = 35
        round = 35
      }
      if (pressed === 35) {
        redsq = createSprite(pawn16.x, pawn16.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn16.x, pawn16.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 35.5
      }
      if (mousePressedOver(redsq) && round === 35) {
        pawn16.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 35) {
        pawn16.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
    
      if (mousePressedOver(pawn17) && round === 0 && turn % 2 != 0) {
        pressed = 36
        round = 36
      }
      if (pressed === 36) {
        redsq = createSprite(pawn17.x, pawn17.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn17.x, pawn17.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 36.5
      }
      if (mousePressedOver(redsq) && round === 36) {
        pawn17.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 36) {
        pawn17.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(pawn18) && round === 0 && turn % 2 != 0) {
        pressed = 37
        round = 37
      }
      if (pressed === 37) {
        redsq = createSprite(pawn18.x, pawn18.y + 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(pawn18.x, pawn18.y + 100, 100, 100)
        redsq1.shapeColor = "red";
        pressed = 37.5
      }
      if (mousePressedOver(redsq) && round === 37) {
        pawn18.y = redsq.y
        redsq.visible = false;
        redsq1.visible = false;
        round = 0
        turn = turn + 1
      }
      if (mousePressedOver(redsq1) && round === 37) {
        pawn18.y = redsq1.y
        pressed = 0
        redsq1.visible = false;
        redsq.visible = false;
        round = 0
        turn = turn + 1
      }
}