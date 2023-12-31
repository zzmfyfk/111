//creazione delle scale ascendenti e disendenti a vista frontale
//nel player si gestisce il modo in cui il player può muoversi sulle scale

function create_scala(s, player){
    let scala_1 = PP.shapes.rectangle_add(s, 1398, 790, 10 , 330,"0x000000", 0); //scala 1 tetto
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_1, overlap_scala_1);

    let scala_2 = PP.shapes.rectangle_add(s, 1716, 1060, 90, 200,"0x000000", 0); //scala 1 che va sotto
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_2, overlap_scala_1);

    let scala_3 = PP.shapes.rectangle_add(s, 3760, 720, 10, 340,"0x000000", 0);//scala 2 tetto 
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_3, overlap_scala_1);

    let scala_4 = PP.shapes.rectangle_add(s, 3760, 720, 10, 330,"0x000000", 0); //scala 2 tetto 
    PP.physics.add(s, scala_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_4, overlap_scala_1);
    
    let scala_5 = PP.shapes.rectangle_add(s, 5236, 1070, 90, 140,"0x000000", 0); // scala 2 che va sotto
    PP.physics.add(s, scala_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_5, overlap_scala_1);
 
    let scala_6 = PP.shapes.rectangle_add(s, 5370, 300, 10, 300,"0x000000", 0); //scala 3 ed 4
    PP.physics.add(s, scala_6, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_6, overlap_scala_1);
    


   function overlap_scala_1(s, player, scala_1) {
   player.is_on_scala = true;
   }

}


