let nuvola;
let nuvola_1;

function preload_nuvola(s) {
    // Load dell'immagine della piattaforma
    img_nuvola = PP.assets.image.load(s, "assets/images/nuvola.png");
}

function collision_platform(s,player, platform) {
    player.is_on_platform = true;
}

function create_nuvola(s, player) {
    // Piattaforma mobile
    nuvola = PP.assets.image.add(s, img_nuvola, 6900, 825, 0, 0);
    PP.physics.add(s, nuvola, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(nuvola, true);
    PP.physics.set_allow_gravity(nuvola, false);    
    PP.physics.add_collider_f(s, player, nuvola, collision_platform);
    PP.physics.set_velocity_x(nuvola, 50);
    PP.physics.set_collision_rectangle(nuvola, 267, 1, 25, 1);
    

    nuvola_1 = PP.assets.image.add(s, img_nuvola, 8490, 654, 0, 0);
    PP.physics.add(s, nuvola_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(nuvola_1, true);
    PP.physics.set_allow_gravity(nuvola_1, false);    
    PP.physics.add_collider_f(s, player, nuvola_1, collision_platform);
    PP.physics.set_velocity_x(nuvola_1, 50);
    PP.physics.set_collision_rectangle(nuvola_1, 267, 1, 25, 1);
}

function update_nuvola(s) {
    // Assicurati che nuvola sia definita
    if (nuvola && nuvola.geometry) {
        if (nuvola.geometry.x >= 7092) {
            PP.physics.set_velocity_x(nuvola, -100);
        } else if (nuvola.geometry.x <= 6900) {
            PP.physics.set_velocity_x(nuvola, 100);
        }
    }

    // Aggiorna la posizione della seconda nuvola
    if (nuvola_1 && nuvola_1.geometry) {
        if (nuvola_1.geometry.x >= 9000) {
            PP.physics.set_velocity_x(nuvola_1, -100); // Modifica da nuvola a nuvola_1
        } else if (nuvola_1.geometry.x <= 8490) {
            PP.physics.set_velocity_x(nuvola_1, 100); // Modifica da nuvola a nuvola_1
        }
    }
   
   
   
}