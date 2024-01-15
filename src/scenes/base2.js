let img_background;
let img_player;
let img_background_2_2;
let img_background_1_2;

let ts_background_2_2;
let ts_background_1_2;
let mercante;



let player;
let floor;
let floor_1;
let floor_2;
let floor_3;
let txt_score;

function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
   // img_background = PP.assets.image.load(s, "assets/images/background.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 96, 147);
   

    
    img_background_1_2 = PP.assets.image.load(s, "assets/images/parallax/background_1_2.png");
    img_background_2_2  = PP.assets.image.load(s, "assets/images/parallax/background_2_2.png");
  
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
   

    // Disabilitiamo il tilesprite scroll factor per tutti i background (lo gestiremo manualmente)

    ts_background_2_2.tile_geometry.scroll_factor_x = 0;
    ts_background_1_2.tile_geometry.scroll_factor_x = 0;



    player = PP.assets.sprite.add(s, img_player, 2000, 1359, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    //creo un livello specifico per il player, e setto z-index1, così che rimanga in primo piano rispetto agli altri personaggi
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 1);


    // Creiamo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 300, 1359, 430, 1, "0x000000", 0); 
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 

    floor_1 = PP.shapes.rectangle_add(s,5196, 1383, 7608, 1, "0x008000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor_1, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    PP.physics.add_collider_f(s, player, floor_1, collision_floor);


    floor_2 = PP.shapes.rectangle_add(s,3885, 1131, 990, 1, "0x008000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor_2, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_3 = PP.shapes.rectangle_add(s,8560, 828, 879, 1, "0x008000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor_3, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor_3, collision_floor);

    


    configure_player_animations(s, player); // Impostazione animazioni giocatore

            // Creazione funghetti

    create_platform(s, player);
    
    create_personaggi (s,player);

    create_barca (s, player);

    create_frammenti (s, player);
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

    update_frammenti(s);                // Azioni funghetti

   // manage_player_weapon(s, player);    // Gestione armi
    //manage_player_weapon(s, player);    // Gestione armi

    update_barca(s);
    

    // Aggiorno il punteggio visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));


    ts_background_2_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_1_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi


}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);