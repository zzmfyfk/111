let nuvola;
let nuvola_1;
let nuvola_2;
let nuvola_3;

function preload_nuvola(s) {
    // Load dell'immagine della piattaforma
    img_nuvola = PP.assets.image.load(s, "assets/images/nuvola.png");
}

function collision_nuvola(s,player, nuvola) {
    player.is_on_nuvola = true;
}

function create_nuvola(s, player) {
    // Piattaforma mobile
    nuvola = PP.assets.image.add(s, img_nuvola, 6830, 880, 0, 0); //nuvola 
    PP.physics.add(s, nuvola, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(nuvola, true);
    PP.physics.set_allow_gravity(nuvola, false);    
    PP.physics.add_collider_f(s, player, nuvola, collision_nuvola);
    PP.physics.set_velocity_x(nuvola, 100);
    PP.physics.set_collision_rectangle(nuvola, 180, 1, 25, 1);
    
    let nuvola_1 = PP.assets.image.add(s, img_nuvola, 6549, 798, 0, 0);
    PP.physics.add(s, nuvola_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, nuvola_1, collision_nuvola);
    PP.physics.set_collision_rectangle(nuvola_1, 180, 1, 25, 1);

    let nuvola_2 = PP.assets.image.add(s, img_nuvola,6279, 700, 0, 0);
    PP.physics.add(s, nuvola_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, nuvola_2, collision_nuvola);
    PP.physics.set_collision_rectangle(nuvola_2, 180, 1, 25, 1);


    nuvola_3 = PP.assets.image.add(s, img_nuvola, 6600, 573, 0, 0);
    PP.physics.add(s, nuvola_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(nuvola_3, true);
    PP.physics.set_allow_gravity(nuvola_3, false);    
    PP.physics.add_collider_f(s, player, nuvola_3, collision_nuvola);
    PP.physics.set_velocity_x(nuvola_3, 100);
    PP.physics.set_collision_rectangle(nuvola_3, 180, 1, 25, 1);
}

function update_nuvola(s) {
    // Assicurati che nuvola sia definita
   // if (nuvola && nuvola.geometry) {
    //    if (nuvola.geometry.y >= 873) {
    //        PP.physics.set_velocity_y(nuvola, -100);
     //   } else if (nuvola.geometry.y <= 519) {
     //       PP.physics.set_velocity_y(nuvola, 100);
       // }
   // }

    if (nuvola && nuvola.geometry) {
        if (nuvola.geometry.x >= 7164) {
            PP.physics.set_velocity_x(nuvola, -100);
        } else if (nuvola.geometry.x <= 6830) {
            PP.physics.set_velocity_x(nuvola, 100);
        }
    }
    // Aggiorna la posizione della seconda nuvola
    if (nuvola_3 && nuvola_3.geometry) {
        if (nuvola_3.geometry.x >= 7125) {
            PP.physics.set_velocity_x(nuvola_3, -100); // Modifica da nuvola a nuvola_1
        } else if (nuvola_3.geometry.x <= 6600) {
            PP.physics.set_velocity_x(nuvola_3, 100); // Modifica da nuvola a nuvola_1
        }
    }
   
   
   
}