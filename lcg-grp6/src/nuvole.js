let nuvola;
let nuvola_1;
let nuvola_2;

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

    // Piattaforma fissa
   // let barca = PP.assets.image.add(s, img_barca, 400, 450, 0, 0);
   // PP.physics.add(s,barca, PP.physics.type.STATIC); 
   // PP.physics.add_collider_f(s, player, barca, collision_barca);
   let nuvola_1 = PP.assets.image.add(s, img_nuvola, 1600, 500, 0, 0);
   PP.physics.add(s, nuvola_1, PP.physics.type.STATIC); 
   PP.physics.add_collider_f(s, player, nuvola_1, collision_platform);

    // Piattaforma mobile
  //  nuvola = PP.assets.image.add(s, img_nuvola, 1500, 400, 0, 0);
   // PP.physics.add(s, nuvola, PP.physics.type.DYNAMIC); 
    //PP.physics.set_immovable(nuvola, true);
   // PP.physics.set_allow_gravity(nuvola, false);    
   // PP.physics.add_collider_f(s, player, nuvola, collision_barca);
   // PP.physics.set_velocity_y(nuvola, 100);


    // Riduco i collision boundaries in modo che
    // l'erba non causi un "innalzamento" del giocatore
    //PP.physics.set_collision_rectangle(nuvola, 267, 78, 25, 1);
    PP.physics.set_collision_rectangle(nuvola_1, 267, 1, 25, 1);


    let nuvola_2 = PP.assets.image.add(s, img_nuvola, 1300, 350, 0, 0);
   PP.physics.add(s, nuvola_2, PP.physics.type.STATIC); 
   PP.physics.add_collider_f(s, player, nuvola_2, collision_platform);
   PP.physics.set_collision_rectangle(nuvola_2, 267, 1, 25, 1);
}

//function update_nuvola(s) {

    // Aggiorno la velocita' della piattaforma mobile nels
    // caso in cui si trovi al limite destro o il limite sinistro
    // scelto (800 - 1200)

   // if(nuvola.geometry.y >= 600) {
       // PP.physics.set_velocity_y(nuvola, -50);
       // nuvola.geometry.flip_x = false; //flippa la nuvola
      //  }
    //else if(nuvola.geometry.y <= 300) {
     //   PP.physics.set_velocity_y(nuvola, 50);
        //nuvola.geometry.flip_x = true;
   // }

//}
