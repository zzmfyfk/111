let barca;


function preload_barca(s) {
    // Load dell'immagine della piattaforma
    img_barca   = PP.assets.image.load(s, "assets/images/barca.png");
}

function collision_barca(s, player, barca) {
    // Funzione di collisione con le piattaforme.
    // Qui devo verificare che il giocatore si trovi sopra
    // la piattaforma e in quel caso aggiorno la variabile che
    // abilita il salto (v. player.js)
    //if( player.geometry.x >= barca.geometry.x &&
     //   player.geometry.x <= barca.geometry.x + barca.geometry.display_width) {
            player.is_on_barca = true;
    }


function create_barca(s, player) {

    // Piattaforma fissa
   // let barca = PP.assets.image.add(s, img_barca, 400, 450, 0, 0);
   // PP.physics.add(s,barca, PP.physics.type.STATIC); 
   // PP.physics.add_collider_f(s, player, barca, collision_barca);

    // Piattaforma mobile
    barca = PP.assets.image.add(s, img_barca, 8043, 858, 0, 0);
    PP.physics.add(s, barca, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(barca, true);
    PP.physics.set_allow_gravity(barca, false);    
    PP.physics.add_collider_f(s, player, barca, collision_barca);
    PP.physics.set_velocity_x(barca, 100);


    // Riduco i collision boundaries in modo che
    // l'erba non causi un "innalzamento" del giocatore
    PP.physics.set_collision_rectangle(barca, 270, 54, 0, 20);

}

function update_barca(s) {

    // Aggiorno la velocita' della piattaforma mobile nel
    // caso in cui si trovi al limite destro o il limite sinistro
    // scelto (800 - 1200)

    if(barca.geometry.x >= 8700) {
        PP.physics.set_velocity_x(barca, -120);
        barca.geometry.flip_x = false; //flippa la barca
        }
    else if(barca.geometry.x <= 8043) {
        PP.physics.set_velocity_x(barca, 120);
        barca.geometry.flip_x = true;
    }

}
