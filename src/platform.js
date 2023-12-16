
let tetto_1;
let tetto_2;
let tetto_3;
let tetto_4;
let tetto_5;
let tetto_6;
let tetto_7;
let tetto_8;
let tetto_9;
let tetto_10;
let scale;



function preload_platform(s) {
    
}



function create_platform(s, player) {

    tetto_1 =  PP.shapes.rectangle_add(s, 0, 530, 790, 0, "0x000000", 0);
    PP.physics.add(s, tetto_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_1, collision_platform);

    tetto_2 =  PP.shapes.rectangle_add(s, 530, 620, 70, 0, "0x000000", 0);
    PP.physics.add(s, tetto_2, PP.physics.type.STATIC); 
    PP.physics.add_overlap_f(s, player, tetto_2, overlap_tetto);

    tetto_2_partesinistra =  PP.shapes.rectangle_add(s, 440, 620, 50, 0, "0x000000", 0);
    PP.physics.add(s, tetto_2_partesinistra, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2_partesinistra, collision_platform);

    tetto_3 =  PP.shapes.rectangle_add(s, 0, 300, 700, 0, "0x000000", 0);
    PP.physics.add(s, tetto_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_3, collision_platform);

    tetto_4 =  PP.shapes.rectangle_add(s, 2300, 600, 700, 0, "0x000000", 0);
    PP.physics.add(s, tetto_4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_4, collision_platform);

    tetto_5 =  PP.shapes.rectangle_add(s, 2960, 560, 130, 0, "0x000000", 0);
    PP.physics.add(s, tetto_5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_5, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 3300, 500, 450, 0, "0x000000", 0);
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 3640, 560, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 4400,  430, 650, 0, "0x000000", 0);
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 4400,  230, 650, 0, "0x000000", 0);
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);
   
    tetto_8 =  PP.shapes.rectangle_add(s, 4000,  490, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_8, collision_platform);
    
    tetto_9 =  PP.shapes.rectangle_add(s, 4800,  490, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_9, collision_platform);
 
    tetto_10 =  PP.shapes.rectangle_add(s, 5700,  500, 600, 0, "0x000000", 0);
    PP.physics.add(s, tetto_10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_10, collision_platform);

    //da fare e capire: provare a sistemare in modo che si possa attraversare la piattaforma dal basso ma poi collidere al momento dell'atterraggio dall'alto
    albero_1 =  PP.shapes.rectangle_add(s, 750, 500, 200, 0, "0x000000", 0);
    PP.physics.add(s, albero_1, PP.physics.type.STATIC); 
   if(player.geometry.y > albero_1.geometry.y) {
    console.log("xx")
    //   PP.physics.add_collider_f(s, player, albero_1, collision_platform);
   }
   // else if(PP.physics.get_velocity_y(player) > 0) {
   //     next_anim = "jump_down";
   // }
   // PP.physics.add_collider_f(s, player, albero_1, collision_platform);

    albero_2 =  PP.shapes.rectangle_add(s, 620, 350, 200, 0, "0x000000", 0);
    PP.physics.add(s, albero_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, albero_2, collision_platform);

    floor_basso =  PP.shapes.rectangle_add(s, 1100, 1150, 1200, 0, "0x000000", 0);
    PP.physics.add(s, floor_basso, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_basso, collision_platform);


    function collision_platform(s,player,tetto) {
        player.is_on_platform = true;
    }

    function overlap_tetto(s,player,tetto) {
        player.is_on_platform = true;
    }

    //gradini delle scale del ponte
    scale =  PP.shapes.rectangle_add(s, 2257, 875, 800, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1845, 886, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1820, 897, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale,collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1795, 908, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale,collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1770, 919, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1745, 930, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale,collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1720, 941, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 1695, 952, 25, 11, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale,collision_platform);

    }




function update_platform(s) {
   
}