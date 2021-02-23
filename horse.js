function horse(){
    if (mousePressedOver(horse1) && round === 0 && turn % 2 === 0) {
        pressed = 11
        round = 11
      }
      if (pressed === 11) {
        redsq = createSprite(horse1.x+100, horse1.y - 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(horse1.x+200, horse1.y - 100, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(horse1.x-100, horse1.y - 200, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(horse1.x-200, horse1.y - 100, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(horse1.x-200, horse1.y + 100, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(horse1.x-100, horse1.y + 200, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(horse1.x+200, horse1.y + 100, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(horse1.x+100, horse1.y +200, 100, 100)
        redsq7.shapeColor = "red";
        pressed = 11.5
      }
      if (mousePressedOver(redsq) && round === 11) {
        horse1.y = redsq.y
        horse1.x = redsq.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq1) && round === 11) {
        horse1.y = redsq1.y
        horse1.x = redsq1.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq2) && round === 11) {
        horse1.y = redsq2.y
        horse1.x = redsq2.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq3) && round === 11) {
        horse1.y = redsq3.y
        horse1.x = redsq3.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq4) && round === 11) {
        horse1.y = redsq4.y
        horse1.x = redsq4.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq5) && round === 11) {
        horse1.y = redsq5.y
        horse1.x = redsq5.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq6) && round === 11) {
        horse1.y = redsq6.y
        horse1.x = redsq6.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq7) && round === 11) {
        horse1.y = redsq7.y
        horse1.x = redsq7.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(horse2) && round === 0 && turn % 2 === 0) {
        pressed = 12
        round = 12
      }
      if (pressed === 12) {
        redsq = createSprite(horse2.x+100, horse2.y - 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(horse2.x+200, horse2.y - 100, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(horse2.x-100, horse2.y - 200, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(horse2.x-200, horse2.y - 100, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(horse2.x-200, horse2.y + 100, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(horse2.x-100, horse2.y + 200, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(horse2.x+200, horse2.y + 100, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(horse2.x+100, horse2.y +200, 100, 100)
        redsq7.shapeColor = "red";
        pressed = 11.5
      }
      if (mousePressedOver(redsq) && round === 12) {
        horse2.y = redsq.y
        horse2.x = redsq.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq1) && round === 12) {
        horse2.y = redsq1.y
        horse2.x = redsq1.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq2) && round === 12) {
        horse2.y = redsq2.y
        horse2.x = redsq2.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq3) && round === 12) {
        horse2.y = redsq3.y
        horse2.x = redsq3.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq4) && round === 12) {
        horse2.y = redsq4.y
        horse2.x = redsq4.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq5) && round === 12) {
        horse2.y = redsq5.y
        horse2.x = redsq5.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq6) && round === 12) {
        horse2.y = redsq6.y
        horse2.x = redsq6.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq7) && round === 12) {
        horse2.y = redsq7.y
        horse2.x = redsq7.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(horse10) && round === 0 && turn % 2 != 0) {
        pressed = 115
        round = 115
      }
      if (pressed === 115) {
        redsq = createSprite(horse10.x+100, horse10.y - 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(horse10.x+200, horse10.y - 100, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(horse10.x-100, horse10.y - 200, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(horse10.x-200, horse10.y - 100, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(horse10.x-200, horse10.y + 100, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(horse10.x-100, horse10.y + 200, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(horse10.x+200, horse10.y + 100, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(horse10.x+100, horse10.y +200, 100, 100)
        redsq7.shapeColor = "red";
        pressed = 11.5
      }
      if (mousePressedOver(redsq) && round === 115) {
        horse10.y = redsq.y
        horse10.x = redsq.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq1) && round === 115) {
        horse10.y = redsq1.y
        horse10.x = redsq1.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq2) && round === 115) {
        horse10.y = redsq2.y
        horse10.x = redsq2.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq3) && round === 115) {
        horse10.y = redsq3.y
        horse10.x = redsq3.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq4) && round === 115) {
        horse10.y = redsq4.y
        horse10.x = redsq4.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq5) && round === 115) {
        horse10.y = redsq5.y
        horse10.x = redsq5.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq6) && round === 115) {
        horse10.y = redsq6.y
        horse10.x = redsq6.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq7) && round === 115) {
        horse10.y = redsq7.y
        horse10.x = redsq7.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(horse12) && round === 0 && turn % 2 != 0) {
        pressed = 116
        round = 116
      }
      if (pressed === 116) {
        redsq = createSprite(horse12.x+100, horse12.y - 200, 100, 100)
        redsq.shapeColor = "red";
        redsq1 = createSprite(horse12.x+200, horse12.y - 100, 100, 100)
        redsq1.shapeColor = "red";
        redsq2 = createSprite(horse12.x-100, horse12.y - 200, 100, 100)
        redsq2.shapeColor = "red";
        redsq3 = createSprite(horse12.x-200, horse12.y - 100, 100, 100)
        redsq3.shapeColor = "red";
        redsq4 = createSprite(horse12.x-200, horse12.y + 100, 100, 100)
        redsq4.shapeColor = "red";
        redsq5 = createSprite(horse12.x-100, horse12.y + 200, 100, 100)
        redsq5.shapeColor = "red";
        redsq6 = createSprite(horse12.x+200, horse12.y + 100, 100, 100)
        redsq6.shapeColor = "red";
        redsq7 = createSprite(horse12.x+100, horse12.y +200, 100, 100)
        redsq7.shapeColor = "red";
        pressed = 11.5
      }
      if (mousePressedOver(redsq) && round === 116) {
        horse12.y = redsq.y
        horse12.x = redsq.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq1) && round === 116) {
        horse12.y = redsq1.y
        horse12.x = redsq1.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq2) && round === 116) {
        horse12.y = redsq2.y
        horse12.x = redsq2.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq3) && round === 116) {
        horse12.y = redsq3.y
        horse12.x = redsq3.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq4) && round === 116) {
        horse12.y = redsq4.y
        horse12.x = redsq4.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    
    if (mousePressedOver(redsq5) && round === 116) {
        horse12.y = redsq5.y
        horse12.x = redsq5.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq6) && round === 116) {
        horse12.y = redsq6.y
        horse12.x = redsq6.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
    if (mousePressedOver(redsq7) && round === 116) {
        horse12.y = redsq7.y
        horse12.x = redsq7.x
        redsq.visible = false;
        redsq1.visible = false;
        redsq2.visible = false;
        redsq3.visible = false;
        redsq4.visible = false;
        redsq5.visible = false;
        redsq6.visible = false;
        redsq7.visible = false;
        round = 0
        turn = turn + 1
      }
}