function King(){
    if (turn % 2 != 0) {
        if (mousePressedOver(king1) && round === 0) {
          pressed = 20
          round = 20
        }
        if (pressed === 20) {
          redsq = createSprite(king1.x+100, king1.y, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(king1.x, king1.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          redsq2 = createSprite(king1.x-100, king1.y, 100, 100)
          redsq2.shapeColor = "red";
          redsq3 = createSprite(king1.x, king1.y+100, 100, 100)
          redsq3.shapeColor = "red";
          redsq4 = createSprite(king1.x+100, king1.y-100, 100, 100)
          redsq4.shapeColor = "red";
          redsq5 = createSprite(king1.x+100, king1.y+100, 100, 100)
          redsq5.shapeColor = "red";
          redsq6 = createSprite(king1.x-100, king1.y+100, 100, 100)
          redsq6.shapeColor = "red";
          redsq7 = createSprite(king1.x-100, king1.y-100, 100, 100)
          redsq7.shapeColor = "red";
          pressed = 19.5
        }
        if (mousePressedOver(redsq) && round === 20) {
          king1.y = redsq.y
          king1.x = redsq.x
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
        if (mousePressedOver(redsq1) && round === 20) {
          king1.y = redsq1.y
          king1.x = redsq1.x
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
      
        if (mousePressedOver(redsq2) && round === 20) {
          king1.y = redsq2.y
          king1.x = redsq2.x
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
        if (mousePressedOver(redsq3) && round === 20) {
          king1.y = redsq3.y
          king1.x = redsq3.x
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
        if (mousePressedOver(redsq4) && round === 20) {
          king1.y = redsq4.y
          king1.x = redsq4.x
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
        if (mousePressedOver(redsq5) && round === 20) {
          king1.y = redsq5.y
          king1.x = redsq5.x
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
        if (mousePressedOver(redsq6) && round === 20) {
          king1.y = redsq6.y
          king1.x = redsq6.x
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
        if (mousePressedOver(redsq7) && round === 20) {
          king1.y = redsq7.y
          king1.x = redsq7.x
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

      if (turn % 2 === 0) {
        if (mousePressedOver(king) && round === 0) {
          pressed = 19
          round = 19
        }
        if (pressed === 19) {
          redsq = createSprite(king.x+100, king.y, 100, 100)
          redsq.shapeColor = "red";
          redsq1 = createSprite(king.x, king.y - 100, 100, 100)
          redsq1.shapeColor = "red";
          redsq2 = createSprite(king.x-100, king.y, 100, 100)
          redsq2.shapeColor = "red";
          redsq3 = createSprite(king.x, king.y+100, 100, 100)
          redsq3.shapeColor = "red";
          redsq4 = createSprite(king.x+100, king.y-100, 100, 100)
          redsq4.shapeColor = "red";
          redsq5 = createSprite(king.x+100, king.y+100, 100, 100)
          redsq5.shapeColor = "red";
          redsq6 = createSprite(king.x-100, king.y+100, 100, 100)
          redsq6.shapeColor = "red";
          redsq7 = createSprite(king.x-100, king.y-100, 100, 100)
          redsq7.shapeColor = "red";
          pressed = 19.5
        }
        if (mousePressedOver(redsq) && round === 19) {
          king.y = redsq.y
          king.x = redsq.x
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
        if (mousePressedOver(redsq1) && round === 19) {
          king.y = redsq1.y
          king.x = redsq1.x
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
      
        if (mousePressedOver(redsq2) && round === 19) {
          king.y = redsq2.y
          king.x = redsq2.x
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
        if (mousePressedOver(redsq3) && round === 19) {
          king.y = redsq3.y
          king.x = redsq3.x
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
        if (mousePressedOver(redsq4) && round === 19) {
          king.y = redsq4.y
          king.x = redsq4.x
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
        if (mousePressedOver(redsq5) && round === 19) {
          king.y = redsq5.y
          king.x = redsq5.x
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
        if (mousePressedOver(redsq6) && round === 19) {
          king.y = redsq6.y
          king.x = redsq6.x
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
        if (mousePressedOver(redsq7) && round === 19) {
          king.y = redsq7.y
          king.x = redsq7.x
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
      
}