var sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, sq10, sq11, sq12, sq13, sq14,
  sq15, sq16, sq17, sq18, sq19, sq20, sq21, sq22, sq23, sq24, sq25, sq26, sq27, sq28, sq29, sq30, sq31, sq32, sq33, sq34, sq35, sq36, sq37, sq38, sq39, sq40, sq41, sq42, sq43, sq45, sq46, sq47,
  sq48, sq49, sq50, sq51, sq52, sq53, sq54, sq55, sq56, sq57, sq58, sq59, sq60, sq61, sq62, sq63, sq64, sq65, pawn1, pawn1image, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8, elephant1, elephantimage, elephant2, horse1, horseimage, horse2, camel1, camelimage, camel2, king, kingimage, queen, queenimage, pawn10, pawnimage, pawn12, pawn13, pawn14, pawn15, pawn16, pawn17, pawn18, elephant10, elephantimage1, elephant12, horse10, horseimage1, horse12, camel10, camelimage1, camel12, king1, kingimage1, queen1, queenimage1, pressed, redsq, redsq1, round, turn, redsq2,redsq3,redsq4,redsq5,redsq6,redsq7,redsq8,redsq9,redsq10, redsq11, redsq12,redsq13,redsq14,redsq15,redsq16,redsq17,redsq18,redsq19,redsq20, redsq21, redsq22,redsq23,redsq24,redsq25,redsq26,redsq27,redsq28,redsq29,redsq30, redsq31, redsq32,redsq33,redsq34,redsq35,redsq36,redsq37;
var WhiteGroup, BlackGroup,redsq100, touching,touching1,touching2,touching3,touching4,touching5,checker1,checker2,checker3,checker4,checker5,checker6,touching6,checker7,touching7,checker8,touching8;
var undo = 0
function setup() {
  createCanvas(800, 800);
  sq1 = createSprite(50, 50, 100, 100)
  sq1.shapeColor = "white"
  sq2 = createSprite(150, 50, 100, 100)
  sq2.shapeColor = "black"
  sq3 = createSprite(250, 50, 100, 100)
  sq3.shapeColor = "white"
  sq4 = createSprite(350, 50, 100, 100)
  sq4.shapeColor = "black"
  sq5 = createSprite(450, 50, 100, 100)
  sq5.shapeColor = "white"
  sq6 = createSprite(550, 50, 100, 100)
  sq6.shapeColor = "black"
  sq7 = createSprite(650, 50, 100, 100)
  sq7.shapeColor = "white"
  sq8 = createSprite(750, 50, 100, 100)
  sq8.shapeColor = "black"
  sq9 = createSprite(50, 150, 100, 100)
  sq9.shapeColor = "black"
  sq10 = createSprite(150, 150, 100, 100)
  sq10.shapeColor = "white"
  sq11 = createSprite(250, 150, 100, 100)
  sq11.shapeColor = "black"
  sq12 = createSprite(350, 150, 100, 100)
  sq12.shapeColor = "white"
  sq13 = createSprite(450, 150, 100, 100)
  sq13.shapeColor = "black"
  sq14 = createSprite(550, 150, 100, 100)
  sq14.shapeColor = "white"
  sq15 = createSprite(650, 150, 100, 100)
  sq15.shapeColor = "black"
  sq16 = createSprite(750, 150, 100, 100)
  sq16.shapeColor = "white"
  sq17 = createSprite(50, 250, 100, 100)
  sq17.shapeColor = "white"
  sq18 = createSprite(150, 250, 100, 100)
  sq18.shapeColor = "black"
  sq19 = createSprite(250, 250, 100, 100)
  sq19.shapeColor = "white"
  sq20 = createSprite(350, 250, 100, 100)
  sq20.shapeColor = "black"
  sq21 = createSprite(450, 250, 100, 100)
  sq21.shapeColor = "white"
  sq22 = createSprite(550, 250, 100, 100)
  sq22.shapeColor = "black"
  sq23 = createSprite(650, 250, 100, 100)
  sq23.shapeColor = "white"
  sq24 = createSprite(750, 250, 100, 100)
  sq24.shapeColor = "black"
  sq25 = createSprite(50, 350, 100, 100)
  sq25.shapeColor = "black"
  sq26 = createSprite(150, 350, 100, 100)
  sq26.shapeColor = "white"
  sq27 = createSprite(250, 350, 100, 100)
  sq27.shapeColor = "black"
  sq28 = createSprite(350, 350, 100, 100)
  sq28.shapeColor = "white"
  sq29 = createSprite(450, 350, 100, 100)
  sq29.shapeColor = "black"
  sq30 = createSprite(550, 350, 100, 100)
  sq30.shapeColor = "white"
  sq31 = createSprite(650, 350, 100, 100)
  sq31.shapeColor = "black"
  sq32 = createSprite(750, 350, 100, 100)
  sq32.shapeColor = "white"
  sq33 = createSprite(50, 450, 100, 100)
  sq33.shapeColor = "white"
  sq34 = createSprite(150, 450, 100, 100)
  sq34.shapeColor = "black"
  sq35 = createSprite(250, 450, 100, 100)
  sq35.shapeColor = "white"
  sq36 = createSprite(350, 450, 100, 100)
  sq36.shapeColor = "black"
  sq37 = createSprite(450, 450, 100, 100)
  sq37.shapeColor = "white"
  sq38 = createSprite(550, 450, 100, 100)
  sq38.shapeColor = "black"
  sq39 = createSprite(650, 450, 100, 100)
  sq39.shapeColor = "white"
  sq40 = createSprite(750, 450, 100, 100)
  sq40.shapeColor = "black"
  sq41 = createSprite(50, 550, 100, 100)
  sq41.shapeColor = "black"
  sq42 = createSprite(150, 550, 100, 100)
  sq42.shapeColor = "white"
  sq43 = createSprite(250, 550, 100, 100)
  sq43.shapeColor = "black"
  sq44 = createSprite(350, 550, 100, 100)
  sq44.shapeColor = "white"
  sq45 = createSprite(450, 550, 100, 100)
  sq45.shapeColor = "black"
  sq46 = createSprite(550, 550, 100, 100)
  sq46.shapeColor = "white"
  sq47 = createSprite(650, 550, 100, 100)
  sq47.shapeColor = "black"
  sq48 = createSprite(750, 550, 100, 100)
  sq48.shapeColor = "white"
  sq49 = createSprite(50, 650, 100, 100)
  sq49.shapeColor = "white"
  sq50 = createSprite(150, 650, 100, 100)
  sq50.shapeColor = "black"
  sq51 = createSprite(250, 650, 100, 100)
  sq51.shapeColor = "white"
  sq52 = createSprite(350, 650, 100, 100)
  sq52.shapeColor = "black"
  sq53 = createSprite(450, 650, 100, 100)
  sq53.shapeColor = "white"
  sq54 = createSprite(550, 650, 100, 100)
  sq54.shapeColor = "black"
  sq55 = createSprite(650, 650, 100, 100)
  sq55.shapeColor = "white"
  sq56 = createSprite(750, 650, 100, 100)
  sq56.shapeColor = "black"
  sq57 = createSprite(50, 750, 100, 100)
  sq57.shapeColor = "black"
  sq58 = createSprite(150, 750, 100, 100)
  sq58.shapeColor = "white"
  sq59 = createSprite(250, 750, 100, 100)
  sq59.shapeColor = "black"
  sq60 = createSprite(350, 750, 100, 100)
  sq60.shapeColor = "white"
  sq61 = createSprite(450, 750, 100, 100)
  sq61.shapeColor = "black"
  sq62 = createSprite(550, 750, 100, 100)
  sq62.shapeColor = "white"
  sq63 = createSprite(650, 750, 100, 100)
  sq63.shapeColor = "black"
  sq64 = createSprite(750, 750, 100, 100)
  sq64.shapeColor = "white"


  pawn1 = createSprite(50, 650, 10, 10);
  pawn2 = createSprite(150, 650, 10, 10)
  pawn3 = createSprite(250, 650, 10, 10)
  pawn4 = createSprite(350, 650, 10, 10)
  pawn5 = createSprite(450, 650, 10, 10)
  pawn6 = createSprite(550, 650, 10, 10)
  pawn7 = createSprite(650, 650, 10, 10)
  pawn8 = createSprite(750, 650, 10, 10)
  elephant1 = createSprite(50, 750, 10, 10)
  elephant2 = createSprite(750, 750, 10, 10)
  horse1 = createSprite(150, 750, 10, 10)
  horse2 = createSprite(650, 750, 10, 10)
  camel1 = createSprite(250, 750, 10, 10)
  camel2 = createSprite(550, 750, 10, 10)
  king = createSprite(350, 750, 10, 10)
  queen = createSprite(450, 750, 10, 10)

  pawn10 = createSprite(50, 150, 10, 10);
  pawn12 = createSprite(150, 150, 10, 10)
  pawn13 = createSprite(250, 150, 10, 10)
  pawn14 = createSprite(350, 150, 10, 10)
  pawn15 = createSprite(450, 150, 10, 10)
  pawn16 = createSprite(550, 150, 10, 10)
  pawn17 = createSprite(650, 150, 10, 10)
  pawn18 = createSprite(750, 150, 10, 10)
  elephant10 = createSprite(50, 50, 10, 10)
  elephant12 = createSprite(750, 50, 10, 10)
  horse10 = createSprite(150, 50, 10, 10)
  horse12 = createSprite(650, 50, 10, 10)
  camel10 = createSprite(250, 50, 10, 10)
  camel12 = createSprite(550, 50, 10, 10)
  king1 = createSprite(350, 50, 10, 10)
  queen1 = createSprite(450, 50, 10, 10)
  pressed = 0
  round = 0
  turn = 0
  WhiteGroup = createGroup();
  redGroup = createGroup();
  touching = 0
  touching1 = 0
touching2 = 0  

}

function preload() {
  pawnimage = loadAnimation("luxury-chess-set-4.png")
  elephantimage = loadAnimation("elephant piece.png")
  horseimage = loadAnimation("horse piece.png")
  camelimage = loadAnimation("camel piece.png")
  kingimage = loadAnimation("king piece.png")
  queenimage = loadAnimation("queen piece.png")
  pawnimage1 = loadAnimation("pawn2 piece.png")
  elephantimage1 = loadAnimation("elephant2 piece.png")
  horseimage1 = loadAnimation("horse2 piece.png")
  camelimage1 = loadAnimation("camel2 piece.png")
  kingimage1 = loadAnimation("king2 piece.png")
  queenimage1 = loadAnimation("queen2 piece.png")
}

function draw() {
  background("green")
  drawSprites();
  reset()
  pieces()
  pawn()
elephant()
horse()
camel()
King()
Queen()
Queen1()

  //redsq = createSprite(queen.x, queen.y - 50, 50, 50)
  //redsq.shapeColor = "red";
  //redsq1 = createSprite(queen.x, queen.y -100, 50, 50)
  //redsq1.shapeColor = "red";
}

function pieces(){
  pawn1.addAnimation("pawn", pawnimage)
  pawn1.scale = 0.2
  pawn2.addAnimation("pawn", pawnimage)
  pawn2.scale = 0.2
  pawn3.addAnimation("pawn", pawnimage)
  pawn3.scale = 0.2
  pawn4.addAnimation("pawn", pawnimage)
  pawn4.scale = 0.2
  pawn5.addAnimation("pawn", pawnimage)
  pawn5.scale = 0.2
  pawn6.addAnimation("pawn", pawnimage)
  pawn6.scale = 0.2
  pawn7.addAnimation("pawn", pawnimage)
  pawn7.scale = 0.2
  pawn8.addAnimation("pawn", pawnimage)
  pawn8.scale = 0.2
  elephant1.addAnimation("elephant", elephantimage)
  elephant1.scale = 0.2
  elephant2.addAnimation("elephant", elephantimage)
  elephant2.scale = 0.2
  horse1.addAnimation("horse", horseimage);
  horse1.scale = 0.2
  horse2.addAnimation("horse", horseimage);
  horse2.scale = 0.2
  camel1.addAnimation("camel", camelimage);
  camel1.scale = 0.18;
  camel2.addAnimation("camel", camelimage);
  camel2.scale = 0.18;
  king.addAnimation("king", kingimage);
  king.scale = 0.15;
  queen.addAnimation("queen", queenimage);
  queen.scale = 0.18;

  pawn10.addAnimation("pawn", pawnimage1)
  pawn10.scale = 0.4
  pawn12.addAnimation("pawn", pawnimage1)
  pawn12.scale = 0.4
  pawn13.addAnimation("pawn", pawnimage1)
  pawn13.scale = 0.4
  pawn14.addAnimation("pawn", pawnimage1)
  pawn14.scale = 0.4
  pawn15.addAnimation("pawn", pawnimage1)
  pawn15.scale = 0.4
  pawn16.addAnimation("pawn", pawnimage1)
  pawn16.scale = 0.4
  pawn17.addAnimation("pawn", pawnimage1)
  pawn17.scale = 0.4
  pawn18.addAnimation("pawn", pawnimage1)
  pawn18.scale = 0.4
  elephant10.addAnimation("elephant", elephantimage1)
  elephant10.scale = 0.4
  elephant12.addAnimation("elephant", elephantimage1)
  elephant12.scale = 0.4
  horse10.addAnimation("horse", horseimage1);
  horse10.scale = 0.4
  horse12.addAnimation("horse", horseimage1);
  horse12.scale = 0.4
  camel10.addAnimation("camel", camelimage1);
  camel10.scale = 0.30;
  camel12.addAnimation("camel", camelimage1);
  camel12.scale = 0.30;
  king1.addAnimation("king", kingimage1);
  king1.scale = 0.28;
  queen1.addAnimation("queen", queenimage1);
  queen1.scale = 0.3;


}


function reset(){
  if(keyCode === 32){
  pressed = 0
  round = 0
  }
  }