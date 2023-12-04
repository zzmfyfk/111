let img_background;
let img_player;

let player;
let floor;
let txt_score;

function preload(s) {
    console.log("Executing preload() - SCENE");

    // Carichiamo gli asset grafici
    img_background = PP.assets.image.load(s, "assets/images/background.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 96, 147);

  
    preload_player(s);

}

function collider_test(s,a,b) {
    console.log("Player colliding with the box!");
}

function create(s) {
    console.log("Executing create() - SCENE");

    // Inseriamo background e giocatore
    PP.assets.tilesprite.add(s, img_background, 0, 0, 8760, 1296, 0, 0);

    player = PP.assets.sprite.add(s, img_player, 650, 900, 0.5, 1);
    // Aggiungiamo il giocatore alla fisica come entità dinamica
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 


    // Creiamo un pavimento "trasparente"
    floor = PP.shapes.rectangle_add(s, 650, 900, 10000, 1, "0x000000", 0);
    // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add(s, floor, PP.physics.type.STATIC); 

    // Creiamo un collider tra pavimento e giocatore
    PP.physics.add_collider(s, player, floor);

    configure_player_animations(s, player); // Impostazione animazioni giocatore




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


    manage_player_weapon(s, player);    // Gestione armi


    // Aggiorno il punteggio visualizzato:
    PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));

}

function destroy(s) {
    console.log("Executing destroy() - SCENE");

}

PP.scenes.add("base", preload, create, update, destroy);