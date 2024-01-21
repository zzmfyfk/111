//creazione delle scale ascendenti e disendenti a vista frontale
//nel player si gestisce il modo in cui il player può muoversi sulle scale

function create_scala_pioli(s, player){
    let scala_1 = PP.shapes.rectangle_add(s, 1398, 790, 10 , 345,"0x000000", 0); //scala 1 tetto
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_1, overlap_scala_1);

    let end_scale=PP.shapes.rectangle_add(s, 1398, 484, 40 , 10,"0x000000", 0);
    PP.physics.add(s, end_scale, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, end_scale, overlap_fine_scala);      //fine scala superiore

   
    let scala_3 = PP.shapes.rectangle_add(s, 3760, 720, 10, 358,"0x000000", 0);//scala 2 tetto 
    PP.physics.add(s, scala_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_3, overlap_scala_1);

    let end_scale_3=PP.shapes.rectangle_add(s, 3760, 410, 40 , 10,"0x000000", 0);
    PP.physics.add(s, end_scale_3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, end_scale_3, overlap_fine_scala);      //fine scala superiore


    
  
 
    let scala_6 = PP.shapes.rectangle_add(s, 5370, 300, 12, 300,"0x000000", 0); //scala 3 ed 4
    PP.physics.add(s, scala_6, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_6, overlap_scala_1);

    let end_scale_6=PP.shapes.rectangle_add(s, 5370, 10, 40 , 40,"0x000000", 0);
    PP.physics.add(s, end_scale_6, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, end_scale_6, overlap_fine_scala);      //fine scala superiore
    

    function overlap_scala_1(s, player, scala_1) {
        player.is_on_scala_pioli = true;
    }

    function overlap_fine_scala(s, player, scala_1) {
        player.is_on_fine_scala = true;
    }

}

