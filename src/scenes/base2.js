let img_background;
let img_player;
let img_background_2_2;
let img_background_1_2;

let ts_background_2_2;
let ts_background_1_2;
let pavimentazione_e_ponte_2;
let mercante;



let player;
let floor;
let floor_1;
let floor_2;
let floor_3;
let txt_score;
let img_pavimentazione_e_ponte_2;

function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
   // img_background = PP.assets.image.load(s, "assets/images/background.png");
   img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 99, 150);
   

    
    img_background_1_2 = PP.assets.image.load(s, "assets/images/parallax/background_1_2.png");
    img_background_2_2  = PP.assets.image.load(s, "assets/images/parallax/background_2_2.png");

    img_pavimentazione_e_ponte_2  = PP.assets.image.load(s, "assets/images/parallax/pavimentazione_e_ponte_2.png");
  
    preload_player(s);


    preload_barca(s);
    preload_frammenti(s);

  

  

}

function collider_test(s,a,b) {
    console.log("Player colliding with the box!");
}

function collision_floor(s,player,floor) {
    player.is_on_platform = true;

   //PROVA PER FAR PASSARE DA SOTTO I PAVIMENTI
    if (player.geometry_x< floor_1.geometry_x) {

        player.is_on_platform =false
    }
}

function create(s) {
    console.log("Executing create() - SCENE");

  

    ts_background_1_2 = PP.assets.tilesprite.add(s, img_background_1_2, 0, 0, 9000, 1590, 0, 0);
    ts_background_2_2 = PP.assets.tilesprite.add(s, img_background_2_2, 0,0, 9000, 1590, 0, 0);

    pavimentazione_e_ponte_2 = PP.assets.image.add(s, img_pavimentazione_e_ponte_2, 0, 0, 0, 0);
   

    // Disabilitiamo il tilesprite scroll factor per tutti i background (lo gestiremo manualmente)

    ts_background_2_2.tile_geometry.scroll_factor_x = 0;
    ts_background_1_2.tile_geometry.scroll_factor_x = 0;
    //ts_pavimentazione_e_ponte_2.tile_geometry.scroll_factor_x = 0;

    player = PP.assets.sprite.add(s, img_player, 1500, 1395, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    //creo un livello specifico per il player, e setto z-index1, così che rimanga in primo piano rispetto agli altri personaggi
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 1);
    
    //creo un altro livello per ciò che deve stare in primo piano rispetto al player
    let layer_1 = PP.layers.create(s);
    PP.layers.add_to_layer(layer_1, pavimentazione_e_ponte_2);
    PP.layers.set_z_index(layer_1, 2);



    


    // Creiamo un pavimento "trasparente"

    floor = PP.shapes.rectangle_add(s, 1219.5, 1392.5, 1209, 1, "0x000000", 0); // prima piattaforma
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 1840.5, 1401.5, 33, 1, "0x000000", 0); // prima piattaformina
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor = PP.shapes.rectangle_add(s, 1872.5, 1413.5, 33, 1, "0x000000", 0); // seconda piattaformina
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    floor_1 = PP.shapes.rectangle_add(s,6688.5, 1383.5, 7677, 1, "0x008000", 0); // da rocce in poi
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor_1, PP.physics.type.STATIC); 
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor_1, collision_floor);

    


    configure_player_animations(s, player); // Impostazione animazioni giocatore

            // Creazione funghetti

    create_platform(s, player);
    
   // create_personaggi (s,player);

    //overlap_frammento1(s, player, frammento_1);

    create_frammenti (s, player);

    collision_frammenti (s, player, frammento_1);
    //mercante overlap   
    


    


    // Creo una variabile per lo "score" della scena
    PP.gameState.set_variable("score", 0);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "Score: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    // Impostiamo il testo in alto a sx in modo che non si muova
    // con la camera (essendo HUD deve rimanere fisso)
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    // Impostiamo la camera che segua il giocatore
    PP.camera.start_follow(s, player, 0, 220);

    // Esempi di cambio del collision rectangle
    //PP.physics.set_collision_rectangle(player, 100, 160, 85, 10);
    //PP.physics.set_collision_circle(player, 80, 50, 10);


    

}



function update(s) {
    // Azioni che vengono eseguite a ogni frame del gioco

    manage_player_update(s, player);    // Posizione del giocatore e animazioni
    update_frammento1 (s, player);
   // update_frammenti(s);                // Azioni funghetti

   // manage_player_weapon(s, player);    // Gestione armi
    //manage_player_weapon(s, player);    // Gestione armi

 
    

    // Aggiorno il punteggio visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));


    ts_background_2_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_1_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi


}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);