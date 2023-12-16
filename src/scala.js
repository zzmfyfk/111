//creazione delle scale ascendenti e disendenti a vista frontale
//nel player si gestisce il modo in cui il player può muoversi sulle scale

function create_scala(s, player){
    let scala_1 = PP.shapes.rectangle_add(s, 510, 790, 2, 330,"0x000000", 0);
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_1, overlap_scala_1);

    let scala_2 = PP.shapes.rectangle_add(s, 850, 1060, 90, 200,"0x000000", 0);
    PP.physics.add(s, scala_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_2, overlap_scala_1);

    let scala_3 = PP.shapes.rectangle_add(s, 2875, 720, 40, 320,"0x000000", 0);
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_3, overlap_scala_1);

    let scala_4 = PP.shapes.rectangle_add(s, 3850, 930, 90, 140,"0x000000", 0);
    PP.physics.add(s, scala_4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_4, overlap_scala_1);
    
    let scala_5 = PP.shapes.rectangle_add(s, 4300, 1070, 90, 140,"0x000000", 0);
    PP.physics.add(s, scala_5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_5, overlap_scala_1);
 
   function overlap_scala_1(s, player, scala_1) {
   player.is_on_scala = true;
   }

}


