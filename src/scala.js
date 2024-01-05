//creazione delle scale ascendenti e disendenti a vista frontale
//nel player si gestisce il modo in cui il player può muoversi sulle scale

function create_scala(s, player){
  

    let scala_2 = PP.shapes.rectangle_add(s, 1720, 1060, 90, 200,"0x000000", 0); //scala 1 che va sotto
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_2, overlap_scala_1);

  
    let scala_5 = PP.shapes.rectangle_add(s, 4704, 997, 132, 300,"0x000000", 0); // scala 2 che va sotto
    PP.physics.add(s, scala_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_5, overlap_scala_1);
 




   function overlap_scala_1(s, player, scala_1) {
   player.is_on_scala = true;
   }

}

