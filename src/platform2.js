let platformacqua_1;
let platformacqua_2;
let platformacqua_3;
let scale;
let acqua;
let platform_sopra_ponte_1;
let platform_sopra_ponte_2;
let platform_sopra_ponte_3;
let platform_sopra_ponte_4;

let tetto_1_dx;
let tetto_2_sx;
let tetto_1_sx;
let tetto_2_dx;

function preload_platform(s) {
    
}



function create_platform(s, player) {

    platformacqua_1 =  PP.shapes.rectangle_add(s, 2063.5, 1428, 141, 6, "0x000000", 0); // prima ninfea
    PP.physics.add(s, platformacqua_1, PP.physics.type.STATIC); 
   // PP.physics.add_collider(s, player, platformacqua_1);
    //collisione per far saltare
   PP.physics.add_collider_f(s, player, platformacqua_1, collision_platform);
    //PP.physics.set_bounce_y(  player, 1);

    platformacqua_2 =  PP.shapes.rectangle_add(s, 2341.5, 1428, 141, 6, "0x000000", 0); // seconda ninfea
    PP.physics.add(s, platformacqua_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platformacqua_2, collision_platform);
    
    

    platformacqua_3 =  PP.shapes.rectangle_add(s, 2614.5, 1428, 141, 6, "0x000000", 0); // terza ninfea
    PP.physics.add(s, platformacqua_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platformacqua_3, collision_platform);

    tetto_1_sx = PP.shapes.rectangle_add(s, 7485, 945, 165, 1, "0x008000",0); //ed piano 1 sx
    PP.physics.add(s, tetto_1_sx, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_1_sx, collision_platform);

    tetto_1_dx = PP.shapes.rectangle_add(s,7983, 945, 670, 1, "0x008000",0); //ed piano 1 dx
    PP.physics.add(s, tetto_1_dx, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_1_dx, collision_platform);

    tetto_2_sx = PP.shapes.rectangle_add(s,7864, 510, 921, 1, "0x008000",0); //ed piano 2
    PP.physics.add(s, tetto_2_sx, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2_sx, collision_platform);

    tetto_2_sx = PP.shapes.rectangle_add(s,7864, 79, 921, 1, "0x008000",0); //ed piano 2
    PP.physics.add(s, tetto_2_sx, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, tetto_2_sx,collision_platform);
    

    
    platform_sopra_ponte_1=  PP.shapes.rectangle_add(s, 5793, 582.5, 258, 1, "0x000000", 0); // terza ninfea
    PP.physics.add(s, platform_sopra_ponte_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_sopra_ponte_1, collision_platform);

    platform_sopra_ponte_2=  PP.shapes.rectangle_add(s, 4983, 582.5, 258, 1, "0x000000", 0); // terza ninfea
    PP.physics.add(s, platform_sopra_ponte_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_sopra_ponte_2, collision_platform);

    platform_sopra_ponte_3=  PP.shapes.rectangle_add(s, 4801.5, 582.5, 258, 1, "0x000000", 0); // terza ninfea
    PP.physics.add(s, platform_sopra_ponte_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_sopra_ponte_3, collision_platform);

    platform_sopra_ponte_4=  PP.shapes.rectangle_add(s, 5974.5, 663.5, 165, 1, "0x000000", 0); // terza ninfea
    PP.physics.add(s, platform_sopra_ponte_4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_sopra_ponte_4, collision_platform);
    
    //collisione per far saltare
   
   
   
function collision_platform(s,player, platform) {
        player.is_on_platform = true;
    }
   
 
    
    
    //gradini scale del ponte
    scale =  PP.shapes.rectangle_add(s, 4563, 1368, 114, 30, "0x000000", 0); // primo scalino salendo a sx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 4675.5, 1335, 111, 36, "0x000000", 0); // secondo scalino salendo a sx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 4786.5, 1299, 111, 36, "0x000000", 0); // terzo scalino salendo a sx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 4897.5, 1263, 111, 36, "0x000000", 0); // quarto scalino salendo a sx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 5389.5, 1227, 873, 36, "0x000000", 0); // scalino lungo al centro
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 5881.5, 1263, 111, 36, "0x000000", 0); // primo scalino scendendo a dx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 5992.5, 1299, 111, 36, "0x000000", 0); // secondo scalino scendendo a dx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 6103.5, 1335, 111, 36, "0x000000", 0); // terzo scalino scendendo a dx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);
    scale =  PP.shapes.rectangle_add(s, 6216, 1368, 114, 30, "0x000000", 0); // quarto scalino scendendo a dx
    PP.physics.add(s, scale, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, scale, collision_platform);

    acqua = PP.shapes.rectangle_add(s,1000, 1570, 20000, 0, "0x008000", 0);
    PP.physics.add(s, acqua, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, acqua, collision_punti_mortali);
}



    

function collision_punti_mortali(s,player,fondo) {
    console.log("collisione mortale")
    //qui è da inserire un animazione o qualcosa che fa capire che sei "morta" !!
    
    //ora riporto il giocatore al punto iniziale
    player.geometry.x=1450;
    player.geometry.y= 1380;
}



function update_platform(s) {
   
}