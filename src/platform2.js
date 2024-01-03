let platformacqua_1;
let platformacqua_2;
let platformacqua_3;
let scale;

function preload_platform(s) {
    
}



function create_platform(s, player) {

    platformacqua_1 =  PP.shapes.rectangle_add(s, 600, 1365, 120,60, "0x000000", 0);
    PP.physics.add(s, platformacqua_1, PP.physics.type.STATIC); 
   // PP.physics.add_collider(s, player, platformacqua_1);
    //collisione per far saltare
   PP.physics.add_collider_f(s, player, platformacqua_1, collision_platform);
    

    platformacqua_2 =  PP.shapes.rectangle_add(s, 900, 1365, 120,60, "0x000000", 0);
    PP.physics.add(s, platformacqua_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platformacqua_2, collision_platform);
    

    platformacqua_3 =  PP.shapes.rectangle_add(s, 1200, 1365, 120,60, "0x000000", 0);
    PP.physics.add(s, platformacqua_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platformacqua_3, collision_platform);
    

    
    
    
    //collisione per far saltare
   
   
   
function collision_platform(s,player, platform) {
        player.is_on_platform = true;
    }
   
 
    
    
    //gradini che salgono delle scale del ponte
    scale =  PP.shapes.rectangle_add(s, 3376, 1138, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3351, 1152, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3326, 1166, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3301, 1180, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3276, 1194, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3251, 1208, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3226, 1222, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3201, 1236, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3176, 1250, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3151, 1264, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3126, 1278, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3101, 1292, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3076, 1306, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3051, 1320, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3026, 1334, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3001, 1348, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2976, 1362, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2951, 1376, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);

        //gradini che salgono delle scale del ponte

        scale =  PP.shapes.rectangle_add(s, 3376, 1138, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3351, 1152, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3326, 1166, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3301, 1180, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3276, 1194, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3251, 1208, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3226, 1222, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3201, 1236, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3176, 1250, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3151, 1264, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3126, 1278, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3101, 1292, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3076, 1306, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3051, 1320, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3026, 1334, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 3001, 1348, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2976, 1362, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 2951, 1376, 25, 14, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);

    }




function update_platform(s) {
   
}