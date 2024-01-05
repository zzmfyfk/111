

let rami_1;



let scale;

function preload_platform(s) {
    
}



function create_platform(s, player) {


    tetto_1 =  PP.shapes.rectangle_add(s, 1333, 621, 51, 1, "0x000000", 0); //da scale pt 1
    PP.physics.add(s, tetto_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_1, collision_platform);

    tetto_2 =  PP.shapes.rectangle_add(s, 1490, 621, 102, 1, "0x000000", 0); // da scale pt 2
    PP.physics.add(s, tetto_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2, collision_platform);

    tetto_2_partesinistra =  PP.shapes.rectangle_add(s, 940, 532, 690, 1, "0x000000", 0); // parte centrale tetto
    PP.physics.add(s, tetto_2_partesinistra, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2_partesinistra, collision_platform);

    tetto_3 =  PP.shapes.rectangle_add(s, 936, 267, 700, 0, "0x000000", 0); //tetto in alto edificio 1
    PP.physics.add(s, tetto_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_3, collision_platform);

    tetto_4 =  PP.shapes.rectangle_add(s, 1294, 564, 27, 1, "0x000000", 0); //minipezzo ed 1
    PP.physics.add(s, tetto_4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_4, collision_platform);

    tetto_ponte =  PP.shapes.rectangle_add(s, 3145, 559, 909, 1, "0x000000", 0); //tetto giu edificio  ponte
    PP.physics.add(s, tetto_ponte, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_ponte, collision_platform);

    tetto_5 =  PP.shapes.rectangle_add(s, 3690, 543, 54, 0, "0x000000", 0); //tetto sx edificio pt1
    PP.physics.add(s, tetto_5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_5, collision_platform);

    tetto_5 =  PP.shapes.rectangle_add(s, 3804, 543, 18, 0, "0x000000", 0); //tetto sx edificio pt2
    PP.physics.add(s, tetto_5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_5, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 4147, 474, 669, 0, "0x000000", 0); //tetto su edificio 3
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 4555, 543, 150, 0, "0x000000", 0); // parte dx ed 3
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 4804,  507, 147, 0, "0x000000", 0); // ed 4 piano 1 sx 
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 5638,  507, 147, 0, "0x000000", 0); //ed 4 piano 1 dx
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);
   
    tetto_8 =  PP.shapes.rectangle_add(s, 5221,  435, 687, 0, "0x000000", 0); // ed 4 piano 1 su
    PP.physics.add(s, tetto_8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_8, collision_platform);
    
    //ELIMINARE
  //  tetto_9 =  PP.shapes.rectangle_add(s, 5223,  154 , 510, 0, "0x000000", 0); //ed 4 piano 1 giu
   // PP.physics.add(s, tetto_9, PP.physics.type.STATIC); 
   // PP.physics.add_collider_f(s, player, tetto_9, collision_platform);
 
    tetto_10 =  PP.shapes.rectangle_add(s, 4900,  210, 135, 0, "0x000000", 0); //ed 4 piano 2 sx
    PP.physics.add(s, tetto_10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_10, collision_platform);

    tetto_11 =  PP.shapes.rectangle_add(s, 5545,  210, 135, 0, "0x000000", 0); //ed 4 piano 2 dx 
    PP.physics.add(s, tetto_11, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_11, collision_platform);

    tetto_12 =  PP.shapes.rectangle_add(s, 5149,  152, 363, 0, "0x000000", 0); //ed 4 piano 2 su sx
    PP.physics.add(s, tetto_12, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_12, collision_platform);

    tetto_13 =  PP.shapes.rectangle_add(s, 5443,  153, 72, 0, "0x000000", 0); //ed 4 piano 2 su dx
    PP.physics.add(s, tetto_13, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_13, collision_platform);

   // tetto_14 =  PP.shapes.rectangle_add(s, 5104,  246, 453, 0, "0x000000", 0); //ed 4 piano 2 giu sx
   // PP.physics.add(s, tetto_14, PP.physics.type.STATIC); 
   // PP.physics.add_collider_f(s, player, tetto_14, collision_platform);

   // tetto_15 =  PP.shapes.rectangle_add(s, 5479,  246, 147, 0, "0x000000", 0); //ed 4 piano 2 giu dx
   // PP.physics.add(s, tetto_15, PP.physics.type.STATIC); 
   // PP.physics.add_collider_f(s, player, tetto_15, collision_platform);

    //ELIMINARE
  //  tetto_16 =  PP.shapes.rectangle_add(s, 4192,  576, 789, 0, "0x000000", 0); //ed 3 giu ELIMINARE
  //  PP.physics.add(s, tetto_16, PP.physics.type.STATIC); 
  //  PP.physics.add_collider_f(s, player, tetto_16, collision_platform);


    tetto_17 =  PP.shapes.rectangle_add(s, 5881,  186, 141, 0, "0x000000", 0); //ed 5 sx su
    PP.physics.add(s, tetto_17, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_17, collision_platform);

    tetto_18 =  PP.shapes.rectangle_add(s, 6619,  186, 141, 0, "0x000000", 0); //ed 5 dx su
    PP.physics.add(s, tetto_18, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_18, collision_platform);

    tetto_19 =  PP.shapes.rectangle_add(s, 6249,  93, 552, 0, "0x000000", 0); //ed 5 base su
    PP.physics.add(s, tetto_19, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_19, collision_platform);

    tetto_20 =  PP.shapes.rectangle_add(s, 5881,  558, 141, 0, "0x000000", 0); //ed 5 sx giu
    PP.physics.add(s, tetto_20, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_20, collision_platform);


    tetto_21 =  PP.shapes.rectangle_add(s,  6619,  558, 141, 0, "0x000000", 0); //ed 5 dx giu
    PP.physics.add(s, tetto_21, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_21, collision_platform);

    tetto_22 =  PP.shapes.rectangle_add(s, 6249,  465, 552, 0, "0x000000", 0); //ed 5 base giu
    PP.physics.add(s, tetto_22, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_22, collision_platform);




    rami_1 = PP.shapes.rectangle_add(s, 950, 900, 100, 0, "0x000000", 0);
    PP.physics.add(s, tetto_10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_10, collision_platform);










    //gradini delle scale del ponte
    scale =  PP.shapes.rectangle_add(s, 2586, 946, 72, 24, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2659, 922, 72, 24, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2731, 898, 72, 24, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
}

    function collision_platform(s,player, platform) {
        player.is_on_platform = true;
    }


function update_platform(s) {
   
}