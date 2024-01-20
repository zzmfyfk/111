function create_scala_pioli_2(s, player){
    let scala_1 = PP.shapes.rectangle_add(s, 7600, 1200, 10 , 345,"0x000000", 0); //scala 1 tetto
    PP.physics.add(s, scala_1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, scala_1, overlap_scala_1);

    let end_scale=PP.shapes.rectangle_add(s, 7600, 900, 40 , 40,"0x000000", 0);
    PP.physics.add(s, end_scale, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, end_scale, overlap_fine_scala);      //fine scala superiore
    

    function overlap_scala_1(s, player, scala_1) {
        player.is_on_scala_pioli = true;
    }

    function overlap_fine_scala(s, player, scala_1) {
        player.is_on_fine_scala = true;
    }

}