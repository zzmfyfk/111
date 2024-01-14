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
    scale =  PP.shapes.rectangle_add(s, 4506, 1353, 114, 30, "0x000000", 0);
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
  
    

    }




function update_platform(s) {
   
}