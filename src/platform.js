let tetto_1;
let tetto_2;
let tetto_3;
let tetto_4;
let tetto_5;
let tetto_6;
let tetto_7;
let tetto_8;
let tetto_9;

let rami_1;



let scale;

function preload_platform(s) {
    
}



function create_platform(s, player) {


    tetto_1 =  PP.shapes.rectangle_add(s, 1333, 621, 51, 1, "0x000000", 0);
    PP.physics.add(s, tetto_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_1, collision_platform);

    tetto_2 =  PP.shapes.rectangle_add(s, 1490, 621, 102, 1, "0x000000", 0);
    PP.physics.add(s, tetto_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2, collision_platform);

    tetto_2_partesinistra =  PP.shapes.rectangle_add(s, 945, 534, 690, 1, "0x000000", 0);
    PP.physics.add(s, tetto_2_partesinistra, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2_partesinistra, collision_platform);

    tetto_3 =  PP.shapes.rectangle_add(s, 936, 267, 700, 0, "0x000000", 0); //tetto in alto edificio 1
    PP.physics.add(s, tetto_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_3, collision_platform);

    tetto_4 =  PP.shapes.rectangle_add(s, 3236, 600, 700, 0, "0x000000", 0);
    PP.physics.add(s, tetto_4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_4, collision_platform);

    tetto_5 =  PP.shapes.rectangle_add(s, 3899, 560, 130, 0, "0x000000", 0);
    PP.physics.add(s, tetto_5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_5, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 4239, 500, 450, 0, "0x000000", 0);
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 4579, 560, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);

    tetto_6 =  PP.shapes.rectangle_add(s, 5336,  430, 650, 0, "0x000000", 0);
    PP.physics.add(s, tetto_6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_6, collision_platform);

    tetto_7 =  PP.shapes.rectangle_add(s, 5336,  230, 650, 0, "0x000000", 0);
    PP.physics.add(s, tetto_7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_7, collision_platform);
   
    tetto_8 =  PP.shapes.rectangle_add(s, 5872,  490, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_8, collision_platform);
    
    tetto_9 =  PP.shapes.rectangle_add(s, 5736,  490, 150, 0, "0x000000", 0);
    PP.physics.add(s, tetto_9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_9, collision_platform);
 
    tetto_10 =  PP.shapes.rectangle_add(s, 6636,  500, 600, 0, "0x000000", 0);
    PP.physics.add(s, tetto_10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_10, collision_platform);

    rami_1 = PP.shapes.rectangle_add(s, 950, 900, 100, 0, "0x000000", 0);
    PP.physics.add(s, tetto_10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_10, collision_platform);







    //gradini delle scale del ponte
    scale =  PP.shapes.rectangle_add(s, 2753, 878, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2728, 890, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2703, 902, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2678, 914, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2653, 926, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2628, 938, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2603, 950, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2578, 962, 26, 12, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    }

    function collision_platform(s,player, platform) {
        player.is_on_platform = true;
    }


function update_platform(s) {
   
}