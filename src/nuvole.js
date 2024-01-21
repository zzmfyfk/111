let nuvola_2;
let nuvola_1;


function preload_nuvola(s) {
    // Load dell'immagine della piattaforma
    img_nuvola   = PP.assets.image.load(s, "assets/images/nuvola.png");
}

function collision_nuvola(s, player, nuvola) {
    // Funzione di collisione con le piattaforme.
    // Qui devo verificare che il giocatore si trovi sopra
    // la piattaforma e in quel caso aggiorno la variabile che
    // abilita il salto (v. player.js)
    //if( player.geometry.x >= barca.geometry.x &&
     //   player.geometry.x <= barca.geometry.x + barca.geometry.display_width) {
            player.is_on_nuvola = true;
    }


function create_nuvola(s, player) {

   //let nuvola_1 = PP.assets.image.add(s, img_nuvola, 1600, 550, 0, 0);
   //PP.physics.add(s, nuvola_1, PP.physics.type.STATIC); 
   //PP.physics.add_collider_f(s, player, nuvola_1, collision_platform);
   //PP.physics.set_collision_rectangle(nuvola_1, 200, 1, 25, 1);

   nuvola_1 = PP.assets.image.add(s, img_nuvola,  1600, 300, 0, 0);
   PP.physics.add(s, nuvola_1, PP.physics.type.DYNAMIC); 
   PP.physics.set_immovable(nuvola_1, true);
   PP.physics.set_allow_gravity(nuvola_1, false);    
   PP.physics.add_collider_f(s, player, nuvola_1, collision_nuvola);
   PP.physics.set_velocity_y(nuvola_1, 50);
   PP.physics.set_collision_rectangle(nuvola_1, 180, 1, 25, 1);
      
   
   let nuvola_2 = PP.assets.image.add(s, img_nuvola, 1320, 300, 0, 0);
    PP.physics.add(s, nuvola_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, nuvola_2, collision_platform);
    PP.physics.set_collision_rectangle(nuvola_2, 180, 1, 25, 1);

  // let nuvola_3 = PP.assets.image.add(s, img_nuvola, 1900, 450, 0, 0);
  // PP.physics.add(s, nuvola_3, PP.physics.type.STATIC); 
  // PP.physics.add_collider_f(s, player, nuvola_3, collision_nuvola);
   //PP.physics.set_collision_rectangle(nuvola_3, 180, 1, 25, 1);

   //nuvola_2 = PP.assets.image.add(s, img_nuvola,  1350, 350, 0, 0);
   //PP.physics.add(s, nuvola_2, PP.physics.type.DYNAMIC); 
   //PP.physics.set_immovable(nuvola_2, true);
   //PP.physics.set_allow_gravity(nuvola_2, false);    
  // PP.physics.add_collider_f(s, player, nuvola_2, collision_platform);
//   PP.physics.set_collision_rectangle(nuvola_2, 200, 1, 25, 1);
}

function update_nuvola(s) {
    // Assicurati che nuvola sia definita
   // if (nuvola_2 && nuvola_2.geometry) {
   //     if (nuvola_2.geometry.x >= 1600) {
    //        PP.physics.set_velocity_x(nuvola_2, -50);
    //    } else if (nuvola_2.geometry.x <=  1350) {
     //       PP.physics.set_velocity_x(nuvola_2, 50);
      //  }
   // }

    if (nuvola_1 && nuvola_1.geometry) {
        if (nuvola_1.geometry.y >= 600) {
            PP.physics.set_velocity_y(nuvola_1, -60);
        } else if (nuvola_1.geometry.y <=  300) {
            PP.physics.set_velocity_y(nuvola_1, 60);
        }
    }
}

