let img_background;
let img_player;
let img_background_2;
let img_background_1;

let ts_background_2;
let ts_background_1;



let player;
let floor;
let floor_1;
let floor_2;
let floor_3;
let floor_4;
let floor_5;
let floor_basso_2;
let floor_basso_3;
let acqua;
let txt_score;
let txt_time;

function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
   // img_background = PP.assets.image.load(s, "assets/images/background.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 96, 147);
   

    
    img_background_1 = PP.assets.image.load(s, "assets/images/parallax/background_1.png");
    img_background_2  = PP.assets.image.load(s, "assets/images/parallax/background_2.png");
  
    preload_player(s);
    preload_giada(s);
  

}

function collider_test(s,a,b) {
    console.log("Player colliding with the box!");
}

function collision_floor(s,player,floor) {
    player.is_on_platform = true;
}

function collision_acqua(s,player,acqua) {
    console.log("acqua!")
}

function create(s) {
    console.log("Executing create() - SCENE");

    

    // Inseriamo background e giocatore
  
    ts_background_1 = PP.assets.tilesprite.add(s, img_background_1, 0, 0, 9009, 1296, 0, 0);
    ts_background_2 = PP.assets.tilesprite.add(s, img_background_2, 0, 0, 9009, 1296, 0, 0);
   
// Disabilitiamo il tilesprite scroll factor per tutti i background (lo gestiremo manualmente)
    
    ts_background_2.tile_geometry.scroll_factor_x = 0;
    ts_background_1.tile_geometry.scroll_factor_x = 0;



    player = PP.assets.sprite.add(s, img_player, 632, 964, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 


    // Creiamo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 402, 964, 804, 1, "0x000000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    //ripetiamo il procedimento per gli altri pezzi di pavimento
    floor_1 = PP.shapes.rectangle_add(s,1278, 964, 738, 1, "0x008000", 0);
    PP.physics.add(s, floor_1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_1, collision_floor);

    floor_2 = PP.shapes.rectangle_add(s,2830, 858, 1905, 1, "0x008000", 0);
    PP.physics.add(s, floor_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_2, collision_floor);

    floor_3 = PP.shapes.rectangle_add(s,8560, 828, 879, 1, "0x008000", 0);
    PP.physics.add(s, floor_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_3, collision_floor);
    
    floor_4 = PP.shapes.rectangle_add(s,5350, 855, 2750, 0, "0x008000", 0);
    PP.physics.add(s, floor_4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_4, collision_floor);

    floor_5 = PP.shapes.rectangle_add(s,7000, 855, 270, 0, "0x008000", 0);
    PP.physics.add(s, floor_5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_5, collision_floor);

    acqua = PP.shapes.rectangle_add(s,7800, 955, 4000, 0, "0x008000", 0);
    PP.physics.add(s, acqua, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, acqua, collision_acqua);
    
    floor_basso_2 = PP.shapes.rectangle_add(s,4000, 1010, 550, 0, "0x008000", 0);
    PP.physics.add(s, floor_basso_2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_basso_2, collision_floor);

    floor_basso_3 = PP.shapes.rectangle_add(s,5200, 1140, 1700, 0, "0x008000", 0);
    PP.physics.add(s, floor_basso_3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_basso_3, collision_floor);  

    configure_player_animations(s, player); // Impostazione animazioni giocatore

    create_giada(s, player);               // Creazione giada

    create_platform(s, player);

    create_personaggi(s, player);

    create_scala(s, player);

    //SCORE GIADE
    // Creo una variabile per lo "score" della scena
    PP.gameState.set_variable("score", 0);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "Score: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);

    // Impostiamo il testo in alto a sx in modo che non si muova
    // con la camera (essendo HUD deve rimanere fisso)
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    // Impostiamo la camera che segua il giocatore
    PP.camera.start_follow(s, player, 0, 220);

    
    //creo timer
    create_timer(s, player);
    

}

function update(s) {
    // Azioni che vengono eseguite a ogni frame del gioco

    manage_player_update(s, player);    // Posizione del giocatore e animazioni

    update_giada(s);                // Azioni funghetti

    manage_player_weapon(s, player);    // Gestione armi
    update_personaggi(s, player, mercante);

 //   update_timer(s, player)

    // Aggiorno il punteggio visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));


    ts_background_2.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi
    ts_background_1.tile_geometry.x = PP.camera.get_scroll_x(s) * 1; //imporstiamo  lo sfondo in foreground in modo che possa muoversi


}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);