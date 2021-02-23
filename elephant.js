function elephant(){
    if (mousePressedOver(elephant1) && round === 0 && turn % 2 === 0) {
        pressed = 9
        round = 9
      }
      if (pressed === 9) {
        redsq = createSprite(elephant1.x, elephant1.y - 100, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(elephant1.x, elephant1.y -200, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(elephant1.x, elephant1.y - 300, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(elephant1.x, elephant1.y  - 400, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(elephant1.x, elephant1.y - 500, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(elephant1.x, elephant1.y - 600, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(elephant1.x, elephant1.y - 700, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(elephant1.x, elephant1.y - 800, 100, 100)
        redsq7.shapeColor = "red";
        redsq10 = createSprite(elephant1.x+100, elephant1.y, 100, 100)
        redsq10.shapeColor = "red";
        redsq11 = createSprite(elephant1.x+200, elephant1.y, 100, 100)
        redsq11.shapeColor = "red";
        redsq12 = createSprite(elephant1.x+300, elephant1.y, 100, 100)
        redsq12.shapeColor = "red";
        redsq13 = createSprite(elephant1.x+400, elephant1.y , 100, 100)
        redsq13.shapeColor = "red";
        redsq14 = createSprite(elephant1.x+500, elephant1.y, 100, 100)
        redsq14.shapeColor = "red";
        redsq15 = createSprite(elephant1.x+600, elephant1.y, 100, 100)
        redsq15.shapeColor = "red";
        redsq16 = createSprite(elephant1.x+700, elephant1.y, 100, 100)
        redsq16.shapeColor = "red";
        redsq17 = createSprite(elephant1.x+800, elephant1.y, 100, 100)
        redsq17.shapeColor = "red";
        redsq20 = createSprite(elephant1.x-100, elephant1.y, 100, 100)
        redsq20.shapeColor = "red";
        redsq21 = createSprite(elephant1.x-200, elephant1.y, 100, 100)
        redsq21.shapeColor = "red";
        redsq22 = createSprite(elephant1.x-300, elephant1.y, 100, 100)
        redsq22.shapeColor = "red";
        redsq23 = createSprite(elephant1.x-400, elephant1.y , 100, 100)
        redsq23.shapeColor = "red";
        redsq24 = createSprite(elephant1.x-500, elephant1.y, 100, 100)
        redsq24.shapeColor = "red";
        redsq25 = createSprite(elephant1.x-600, elephant1.y, 100, 100)
        redsq25.shapeColor = "red";
        redsq26 = createSprite(elephant1.x-700, elephant1.y, 100, 100)
        redsq26.shapeColor = "red";
        redsq27 = createSprite(elephant1.x-800, elephant1.y, 100, 100)
        redsq27.shapeColor = "red";
        redsq30 = createSprite(elephant1.x, elephant1.y+100, 100, 100)
        redsq30.shapeColor = "red";
        redsq31 = createSprite(elephant1.x, elephant1.y+200, 100, 100)
        redsq31.shapeColor = "red";
        redsq32 = createSprite(elephant1.x, elephant1.y+300, 100, 100)
        redsq32.shapeColor = "red";
        redsq33 = createSprite(elephant1.x, elephant1.y+400 , 100, 100)
        redsq33.shapeColor = "red";
        redsq34 = createSprite(elephant1.x, elephant1.y+500, 100, 100)
        redsq34.shapeColor = "red";
        redsq35 = createSprite(elephant1.x, elephant1.y+600, 100, 100)
        redsq35.shapeColor = "red";
        redsq36 = createSprite(elephant1.x, elephant1.y+700, 100, 100)
        redsq36.shapeColor = "red";
        redsq37 = createSprite(elephant1.x, elephant1.y+800, 100, 100)
        redsq37.shapeColor = "red";
    
    
        pressed = 9.5
      }
      if (mousePressedOver(redsq) && round === 9) {
        elephant1.y = redsq.y
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
      if (mousePressedOver(redsq1) && round === 9) {
        elephant1.y = redsq1.y
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
     if (mousePressedOver(redsq2) && round === 9) {
        elephant1.y = redsq2.y
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
      if (mousePressedOver(redsq3) && round === 9) {
        elephant1.y = redsq3.y
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
     if (mousePressedOver(redsq4) && round === 9) {
        elephant1.y = redsq4.y
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
      if (mousePressedOver(redsq5) && round === 9) {
        elephant1.y = redsq5.y
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
     if (mousePressedOver(redsq6) && round === 9) {
        elephant1.y = redsq6.y
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
      if (mousePressedOver(redsq7) && round === 9) {
        elephant1.y = redsq7.y
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
    if (mousePressedOver(redsq10) && round === 9) {
        elephant1.x = redsq10.x
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
    if (mousePressedOver(redsq11) && round === 9) {
        elephant1.x = redsq11.x
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
    if (mousePressedOver(redsq12) && round === 9) {
        elephant1.x = redsq12.x
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
    if (mousePressedOver(redsq13) && round === 9) {
        elephant1.x = redsq13.x
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
    if (mousePressedOver(redsq14) && round === 9) {
        elephant1.x = redsq14.x
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
    if (mousePressedOver(redsq15) && round === 9) {
        elephant1.x = redsq15.x
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
    if (mousePressedOver(redsq16) && round === 9) {
        elephant1.x = redsq16.x
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
    if (mousePressedOver(redsq17) && round === 9) {
        elephant1.y = redsq17.x
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
       if (mousePressedOver(redsq20) && round === 9) {
        elephant1.x = redsq20.x
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
       if (mousePressedOver(redsq21) && round === 9) {
        elephant1.x = redsq21.x
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
       if (mousePressedOver(redsq22) && round === 9) {
        elephant1.x = redsq22.x
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
       if (mousePressedOver(redsq23) && round === 9) {
        elephant1.x = redsq23.x
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
       if (mousePressedOver(redsq24) && round === 9) {
        elephant1.x = redsq24.x
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
       if (mousePressedOver(redsq25) && round === 9) {
        elephant1.x = redsq25.x
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
       if (mousePressedOver(redsq26) && round === 9) {
        elephant1.x = redsq26.x
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
       if (mousePressedOver(redsq27) && round === 9) {
        elephant1.x = redsq27.x
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
       if (mousePressedOver(redsq30) && round === 9) {
        elephant1.y = redsq30.y
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
    
       if (mousePressedOver(redsq31) && round === 9) {
        elephant1.y = redsq31.y
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
    
       if (mousePressedOver(redsq32) && round === 9) {
        elephant1.y = redsq32.y
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
    
       if (mousePressedOver(redsq33) && round === 9) {
        elephant1.y = redsq33.y
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
    
       if (mousePressedOver(redsq34) && round === 9) {
        elephant1.y = redsq34.y
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
    
       if (mousePressedOver(redsq35) && round === 9) {
        elephant1.y = redsq35.y
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
    
       if (mousePressedOver(redsq36) && round === 9) {
        elephant1.y = redsq36.y
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
    
       if (mousePressedOver(redsq37) && round === 9) {
        elephant1.y = redsq37.y
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
    if (mousePressedOver(elephant2) && round === 0 && turn % 2 === 0) {
        pressed = 10
        round = 10
      }
      if (pressed === 10) {
        redsq = createSprite(elephant2.x, elephant2.y - 100, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(elephant2.x, elephant2.y -200, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(elephant2.x, elephant2.y - 300, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(elephant2.x, elephant2.y  - 400, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(elephant2.x, elephant2.y - 500, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(elephant2.x, elephant2.y - 600, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(elephant2.x, elephant2.y - 700, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(elephant2.x, elephant2.y - 800, 100, 100)
        redsq7.shapeColor = "red";
        redsq10 = createSprite(elephant2.x+100, elephant2.y, 100, 100)
        redsq10.shapeColor = "red";
        redsq11 = createSprite(elephant2.x+200, elephant2.y, 100, 100)
        redsq11.shapeColor = "red";
        redsq12 = createSprite(elephant2.x+300, elephant2.y, 100, 100)
        redsq12.shapeColor = "red";
        redsq13 = createSprite(elephant2.x+400, elephant2.y , 100, 100)
        redsq13.shapeColor = "red";
        redsq14 = createSprite(elephant2.x+500, elephant2.y, 100, 100)
        redsq14.shapeColor = "red";
        redsq15 = createSprite(elephant2.x+600, elephant2.y, 100, 100)
        redsq15.shapeColor = "red";
        redsq16 = createSprite(elephant2.x+700, elephant2.y, 100, 100)
        redsq16.shapeColor = "red";
        redsq17 = createSprite(elephant2.x+800, elephant2.y, 100, 100)
        redsq17.shapeColor = "red";
        redsq20 = createSprite(elephant2.x-100, elephant2.y, 100, 100)
        redsq20.shapeColor = "red";
        redsq21 = createSprite(elephant2.x-200, elephant2.y, 100, 100)
        redsq21.shapeColor = "red";
        redsq22 = createSprite(elephant2.x-300, elephant2.y, 100, 100)
        redsq22.shapeColor = "red";
        redsq23 = createSprite(elephant2.x-400, elephant2.y , 100, 100)
        redsq23.shapeColor = "red";
        redsq24 = createSprite(elephant2.x-500, elephant2.y, 100, 100)
        redsq24.shapeColor = "red";
        redsq25 = createSprite(elephant2.x-600, elephant2.y, 100, 100)
        redsq25.shapeColor = "red";
        redsq26 = createSprite(elephant2.x-700, elephant2.y, 100, 100)
        redsq26.shapeColor = "red";
        redsq27 = createSprite(elephant2.x-800, elephant2.y, 100, 100)
        redsq27.shapeColor = "red";
        redsq30 = createSprite(elephant2.x, elephant2.y+100, 100, 100)
        redsq30.shapeColor = "red";
        redsq31 = createSprite(elephant2.x, elephant2.y+200, 100, 100)
        redsq31.shapeColor = "red";
        redsq32 = createSprite(elephant2.x, elephant2.y+300, 100, 100)
        redsq32.shapeColor = "red";
        redsq33 = createSprite(elephant2.x, elephant2.y+400 , 100, 100)
        redsq33.shapeColor = "red";
        redsq34 = createSprite(elephant2.x, elephant2.y+500, 100, 100)
        redsq34.shapeColor = "red";
        redsq35 = createSprite(elephant2.x, elephant2.y+600, 100, 100)
        redsq35.shapeColor = "red";
        redsq36 = createSprite(elephant2.x, elephant2.y+700, 100, 100)
        redsq36.shapeColor = "red";
        redsq37 = createSprite(elephant2.x, elephant2.y+800, 100, 100)
        redsq37.shapeColor = "red";
    
    
        pressed = 9.5
      }
      if (mousePressedOver(redsq) && round ===10) {
        elephant2.y = redsq.y
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
      if (mousePressedOver(redsq1) && round ===10) {
        elephant2.y = redsq1.y
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
     if (mousePressedOver(redsq2) && round ===10) {
        elephant2.y = redsq2.y
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
      if (mousePressedOver(redsq3) && round ===10) {
        elephant2.y = redsq3.y
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
     if (mousePressedOver(redsq4) && round ===10) {
        elephant2.y = redsq4.y
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
      if (mousePressedOver(redsq5) && round ===10) {
        elephant2.y = redsq5.y
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
     if (mousePressedOver(redsq6) && round ===10) {
        elephant2.y = redsq6.y
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
      if (mousePressedOver(redsq7) && round ===10) {
        elephant2.y = redsq7.y
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
    if (mousePressedOver(redsq10) && round ===10) {
        elephant2.x = redsq10.x
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
    if (mousePressedOver(redsq11) && round ===10) {
        elephant2.x = redsq11.x
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
    if (mousePressedOver(redsq12) && round ===10) {
        elephant2.x = redsq12.x
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
    if (mousePressedOver(redsq13) && round ===10) {
        elephant2.x = redsq13.x
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
    if (mousePressedOver(redsq14) && round ===10) {
        elephant2.x = redsq14.x
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
    if (mousePressedOver(redsq15) && round ===10) {
        elephant2.x = redsq15.x
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
    if (mousePressedOver(redsq16) && round ===10) {
        elephant2.x = redsq16.x
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
    if (mousePressedOver(redsq17) && round ===10) {
        elephant2.y = redsq17.x
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
       if (mousePressedOver(redsq20) && round ===10) {
        elephant2.x = redsq20.x
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
       if (mousePressedOver(redsq21) && round ===10) {
        elephant2.x = redsq21.x
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
       if (mousePressedOver(redsq22) && round ===10) {
        elephant2.x = redsq22.x
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
       if (mousePressedOver(redsq23) && round ===10) {
        elephant2.x = redsq23.x
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
       if (mousePressedOver(redsq24) && round ===10) {
        elephant2.x = redsq24.x
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
       if (mousePressedOver(redsq25) && round ===10) {
        elephant2.x = redsq25.x
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
       if (mousePressedOver(redsq26) && round ===10) {
        elephant2.x = redsq26.x
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
       if (mousePressedOver(redsq27) && round ===10) {
        elephant2.x = redsq27.x
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
       if (mousePressedOver(redsq30) && round ===10) {
        elephant2.y = redsq30.y
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
    
       if (mousePressedOver(redsq31) && round ===10) {
        elephant2.y = redsq31.y
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
    
       if (mousePressedOver(redsq32) && round ===10) {
        elephant2.y = redsq32.y
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
    
       if (mousePressedOver(redsq33) && round ===10) {
        elephant2.y = redsq33.y
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
    
       if (mousePressedOver(redsq34) && round ===10) {
        elephant2.y = redsq34.y
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
    
       if (mousePressedOver(redsq35) && round ===10) {
        elephant2.y = redsq35.y
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
    
       if (mousePressedOver(redsq36) && round ===10) {
        elephant2.y = redsq36.y
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
    
       if (mousePressedOver(redsq37) && round ===10) {
        elephant2.y = redsq37.y
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
    if (mousePressedOver(elephant10) && round === 0 && turn % 2 != 0) {
        pressed = 110
        round = 110
      }
      if (pressed === 110) {
        redsq = createSprite(elephant10.x, elephant10.y - 100, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(elephant10.x, elephant10.y -200, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(elephant10.x, elephant10.y - 300, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(elephant10.x, elephant10.y  - 400, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(elephant10.x, elephant10.y - 500, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(elephant10.x, elephant10.y - 600, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(elephant10.x, elephant10.y - 700, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(elephant10.x, elephant10.y - 800, 100, 100)
        redsq7.shapeColor = "red";
        redsq10 = createSprite(elephant10.x+100, elephant10.y, 100, 100)
        redsq10.shapeColor = "red";
        redsq11 = createSprite(elephant10.x+200, elephant10.y, 100, 100)
        redsq11.shapeColor = "red";
        redsq12 = createSprite(elephant10.x+300, elephant10.y, 100, 100)
        redsq12.shapeColor = "red";
        redsq13 = createSprite(elephant10.x+400, elephant10.y , 100, 100)
        redsq13.shapeColor = "red";
        redsq14 = createSprite(elephant10.x+500, elephant10.y, 100, 100)
        redsq14.shapeColor = "red";
        redsq15 = createSprite(elephant10.x+600, elephant10.y, 100, 100)
        redsq15.shapeColor = "red";
        redsq16 = createSprite(elephant10.x+700, elephant10.y, 100, 100)
        redsq16.shapeColor = "red";
        redsq17 = createSprite(elephant10.x+800, elephant10.y, 100, 100)
        redsq17.shapeColor = "red";
        redsq20 = createSprite(elephant10.x-100, elephant10.y, 100, 100)
        redsq20.shapeColor = "red";
        redsq21 = createSprite(elephant10.x-200, elephant10.y, 100, 100)
        redsq21.shapeColor = "red";
        redsq22 = createSprite(elephant10.x-300, elephant10.y, 100, 100)
        redsq22.shapeColor = "red";
        redsq23 = createSprite(elephant10.x-400, elephant10.y , 100, 100)
        redsq23.shapeColor = "red";
        redsq24 = createSprite(elephant10.x-500, elephant10.y, 100, 100)
        redsq24.shapeColor = "red";
        redsq25 = createSprite(elephant10.x-600, elephant10.y, 100, 100)
        redsq25.shapeColor = "red";
        redsq26 = createSprite(elephant10.x-700, elephant10.y, 100, 100)
        redsq26.shapeColor = "red";
        redsq27 = createSprite(elephant10.x-800, elephant10.y, 100, 100)
        redsq27.shapeColor = "red";
        redsq30 = createSprite(elephant10.x, elephant10.y+100, 100, 100)
        redsq30.shapeColor = "red";
        redsq31 = createSprite(elephant10.x, elephant10.y+200, 100, 100)
        redsq31.shapeColor = "red";
        redsq32 = createSprite(elephant10.x, elephant10.y+300, 100, 100)
        redsq32.shapeColor = "red";
        redsq33 = createSprite(elephant10.x, elephant10.y+400 , 100, 100)
        redsq33.shapeColor = "red";
        redsq34 = createSprite(elephant10.x, elephant10.y+500, 100, 100)
        redsq34.shapeColor = "red";
        redsq35 = createSprite(elephant10.x, elephant10.y+600, 100, 100)
        redsq35.shapeColor = "red";
        redsq36 = createSprite(elephant10.x, elephant10.y+700, 100, 100)
        redsq36.shapeColor = "red";
        redsq37 = createSprite(elephant10.x, elephant10.y+800, 100, 100)
        redsq37.shapeColor = "red";
    
        pressed = 9.5
      }
      if (mousePressedOver(redsq) && round ===110) {
        elephant10.y = redsq.y
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
      if (mousePressedOver(redsq1) && round ===110) {
        elephant10.y = redsq1.y
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
     if (mousePressedOver(redsq2) && round ===110) {
        elephant10.y = redsq2.y
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
      if (mousePressedOver(redsq3) && round ===110) {
        elephant10.y = redsq3.y
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
     if (mousePressedOver(redsq4) && round ===110) {
        elephant10.y = redsq4.y
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
      if (mousePressedOver(redsq5) && round ===110) {
        elephant10.y = redsq5.y
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
     if (mousePressedOver(redsq6) && round ===110) {
        elephant10.y = redsq6.y
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
      if (mousePressedOver(redsq7) && round ===110) {
        elephant10.y = redsq7.y
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
    if (mousePressedOver(redsq10) && round ===110) {
        elephant10.x = redsq10.x
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
    if (mousePressedOver(redsq11) && round ===110) {
        elephant10.x = redsq11.x
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
    if (mousePressedOver(redsq12) && round ===110) {
        elephant10.x = redsq12.x
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
    if (mousePressedOver(redsq13) && round ===110) {
        elephant10.x = redsq13.x
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
    if (mousePressedOver(redsq14) && round ===110) {
        elephant10.x = redsq14.x
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
    if (mousePressedOver(redsq15) && round ===110) {
        elephant10.x = redsq15.x
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
    if (mousePressedOver(redsq16) && round ===110) {
        elephant10.x = redsq16.x
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
    if (mousePressedOver(redsq17) && round ===110) {
        elephant10.y = redsq17.x
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
       if (mousePressedOver(redsq20) && round ===110) {
        elephant10.x = redsq20.x
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
       if (mousePressedOver(redsq21) && round ===110) {
        elephant10.x = redsq21.x
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
       if (mousePressedOver(redsq22) && round ===110) {
        elephant10.x = redsq22.x
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
       if (mousePressedOver(redsq23) && round ===110) {
        elephant10.x = redsq23.x
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
       if (mousePressedOver(redsq24) && round ===110) {
        elephant10.x = redsq24.x
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
       if (mousePressedOver(redsq25) && round ===110) {
        elephant10.x = redsq25.x
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
       if (mousePressedOver(redsq26) && round ===110) {
        elephant10.x = redsq26.x
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
       if (mousePressedOver(redsq27) && round ===110) {
        elephant10.x = redsq27.x
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
       if (mousePressedOver(redsq30) && round ===110) {
        elephant10.y = redsq30.y
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
    
       if (mousePressedOver(redsq31) && round ===110) {
        elephant10.y = redsq31.y
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
    
       if (mousePressedOver(redsq32) && round ===110) {
        elephant10.y = redsq32.y
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
    
       if (mousePressedOver(redsq33) && round ===110) {
        elephant10.y = redsq33.y
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
    
       if (mousePressedOver(redsq34) && round ===110) {
        elephant10.y = redsq34.y
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
    
       if (mousePressedOver(redsq35) && round ===110) {
        elephant10.y = redsq35.y
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
    
       if (mousePressedOver(redsq36) && round ===110) {
        elephant10.y = redsq36.y
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
    
       if (mousePressedOver(redsq37) && round ===110) {
        elephant10.y = redsq37.y
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
    if (mousePressedOver(elephant12) && round === 0 && turn % 2 != 0) {
        pressed = 111
        round = 111
      }
      if (pressed === 111) {
        redsq = createSprite(elephant12.x, elephant12.y - 100, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(elephant12.x, elephant12.y -200, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(elephant12.x, elephant12.y - 300, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(elephant12.x, elephant12.y  - 400, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(elephant12.x, elephant12.y - 500, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(elephant12.x, elephant12.y - 600, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(elephant12.x, elephant12.y - 700, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(elephant12.x, elephant12.y - 800, 100, 100)
        redsq7.shapeColor = "red";
        redsq10 = createSprite(elephant12.x+100, elephant12.y, 100, 100)
        redsq10.shapeColor = "red";
        redsq11 = createSprite(elephant12.x+200, elephant12.y, 100, 100)
        redsq11.shapeColor = "red";
        redsq12 = createSprite(elephant12.x+300, elephant12.y, 100, 100)
        redsq12.shapeColor = "red";
        redsq13 = createSprite(elephant12.x+400, elephant12.y , 100, 100)
        redsq13.shapeColor = "red";
        redsq14 = createSprite(elephant12.x+500, elephant12.y, 100, 100)
        redsq14.shapeColor = "red";
        redsq15 = createSprite(elephant12.x+600, elephant12.y, 100, 100)
        redsq15.shapeColor = "red";
        redsq16 = createSprite(elephant12.x+700, elephant12.y, 100, 100)
        redsq16.shapeColor = "red";
        redsq17 = createSprite(elephant12.x+800, elephant12.y, 100, 100)
        redsq17.shapeColor = "red";
        redsq20 = createSprite(elephant12.x-100, elephant12.y, 100, 100)
        redsq20.shapeColor = "red";
        redsq21 = createSprite(elephant12.x-200, elephant12.y, 100, 100)
        redsq21.shapeColor = "red";
        redsq22 = createSprite(elephant12.x-300, elephant12.y, 100, 100)
        redsq22.shapeColor = "red";
        redsq23 = createSprite(elephant12.x-400, elephant12.y , 100, 100)
        redsq23.shapeColor = "red";
        redsq24 = createSprite(elephant12.x-500, elephant12.y, 100, 100)
        redsq24.shapeColor = "red";
        redsq25 = createSprite(elephant12.x-600, elephant12.y, 100, 100)
        redsq25.shapeColor = "red";
        redsq26 = createSprite(elephant12.x-700, elephant12.y, 100, 100)
        redsq26.shapeColor = "red";
        redsq27 = createSprite(elephant12.x-800, elephant12.y, 100, 100)
        redsq27.shapeColor = "red";
        redsq30 = createSprite(elephant12.x, elephant12.y+100, 100, 100)
        redsq30.shapeColor = "red";
        redsq31 = createSprite(elephant12.x, elephant12.y+200, 100, 100)
        redsq31.shapeColor = "red";
        redsq32 = createSprite(elephant12.x, elephant12.y+300, 100, 100)
        redsq32.shapeColor = "red";
        redsq33 = createSprite(elephant12.x, elephant12.y+400 , 100, 100)
        redsq33.shapeColor = "red";
        redsq34 = createSprite(elephant12.x, elephant12.y+500, 100, 100)
        redsq34.shapeColor = "red";
        redsq35 = createSprite(elephant12.x, elephant12.y+600, 100, 100)
        redsq35.shapeColor = "red";
        redsq36 = createSprite(elephant12.x, elephant12.y+700, 100, 100)
        redsq36.shapeColor = "red";
        redsq37 = createSprite(elephant12.x, elephant12.y+800, 100, 100)
        redsq37.shapeColor = "red";
    
    
        pressed = 9.5
      }
      if (mousePressedOver(redsq) && round ===111) {
        elephant12.y = redsq.y
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
      if (mousePressedOver(redsq1) && round ===111) {
        elephant12.y = redsq1.y
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
     if (mousePressedOver(redsq2) && round ===111) {
        elephant12.y = redsq2.y
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
      if (mousePressedOver(redsq3) && round ===111) {
        elephant12.y = redsq3.y
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
     if (mousePressedOver(redsq4) && round ===111) {
        elephant12.y = redsq4.y
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
      if (mousePressedOver(redsq5) && round ===111) {
        elephant12.y = redsq5.y
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
     if (mousePressedOver(redsq6) && round ===111) {
        elephant12.y = redsq6.y
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
      if (mousePressedOver(redsq7) && round ===111) {
        elephant12.y = redsq7.y
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
    if (mousePressedOver(redsq10) && round ===111) {
        elephant12.x = redsq10.x
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
    if (mousePressedOver(redsq11) && round ===111) {
        elephant12.x = redsq11.x
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
    if (mousePressedOver(redsq12) && round ===111) {
        elephant12.x = redsq12.x
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
    if (mousePressedOver(redsq13) && round ===111) {
        elephant12.x = redsq13.x
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
    if (mousePressedOver(redsq14) && round ===111) {
        elephant12.x = redsq14.x
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
    if (mousePressedOver(redsq15) && round ===111) {
        elephant12.x = redsq15.x
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
    if (mousePressedOver(redsq16) && round ===111) {
        elephant12.x = redsq16.x
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
    if (mousePressedOver(redsq17) && round ===111) {
        elephant12.y = redsq17.x
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
       if (mousePressedOver(redsq20) && round ===111) {
        elephant12.x = redsq20.x
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
       if (mousePressedOver(redsq21) && round ===111) {
        elephant12.x = redsq21.x
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
       if (mousePressedOver(redsq22) && round ===111) {
        elephant12.x = redsq22.x
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
       if (mousePressedOver(redsq23) && round ===111) {
        elephant12.x = redsq23.x
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
       if (mousePressedOver(redsq24) && round ===111) {
        elephant12.x = redsq24.x
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
       if (mousePressedOver(redsq25) && round ===111) {
        elephant12.x = redsq25.x
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
       if (mousePressedOver(redsq26) && round ===111) {
        elephant12.x = redsq26.x
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
       if (mousePressedOver(redsq27) && round ===111) {
        elephant12.x = redsq27.x
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
       if (mousePressedOver(redsq30) && round ===111) {
        elephant12.y = redsq30.y
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
    
       if (mousePressedOver(redsq31) && round ===111) {
        elephant12.y = redsq31.y
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
    
       if (mousePressedOver(redsq32) && round ===111) {
        elephant12.y = redsq32.y
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
    
       if (mousePressedOver(redsq33) && round ===111) {
        elephant12.y = redsq33.y
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
    
       if (mousePressedOver(redsq34) && round ===111) {
        elephant12.y = redsq34.y
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
    
       if (mousePressedOver(redsq35) && round ===111) {
        elephant12.y = redsq35.y
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
    
       if (mousePressedOver(redsq36) && round ===111) {
        elephant12.y = redsq36.y
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
    
       if (mousePressedOver(redsq37) && round ===111) {
        elephant12.y = redsq37.y
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
}