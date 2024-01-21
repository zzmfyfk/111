
let sprite_lanterna;
let lanterna;
let lanternaoverlap;

function preload_lanterna(s) {
    sprite_lanterna = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_lanterna.png", 66, 48);
}

function create_lanterna(s, player) {
   
    lanternaoverlap = PP.shapes.rectangle_add(s, 5550, 650, 100, 100, "0x000000", 0);
    PP.physics.add(s, lanternaoverlap, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, lanternaoverlap, overlap_lanterna);
   // PP.physics.add_collider_f(s, player, lanternaoverlap, collision_lanterna);
    PP.physics.set_collision_rectangle(lanternaoverlap, 20, 20, 50, 50);


    lanterna = PP.assets.sprite.add(s, sprite_lanterna, 5540, 645, 0, 0);
    PP.physics.add(s, lanterna, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(lanterna, 66, 48, 0, 0);
    PP.physics.add_overlap_f(s, player, lanterna, overlap_lanterna);
    PP.physics.add_collider_f(s, player, lanterna, collision_platform);

   // PP.physics.add_collider_f(s, player, lanterna, collision_platform);

    PP.assets.sprite.animation_add(lanterna, "static", 0, 0, 1, 0);
    PP.assets.sprite.animation_add(lanterna, "destroylanterna", 0, 5, 6, 0);
    PP.assets.sprite.animation_play(lanterna, "static");
    //PP.assets.sprite.animation_add(lanterna, "open", 5,5, 1, 0);
}

//function collision_lanterna(s, player, lanternaoverlap) {
    // Funzione di collisione con le piattaforme.
    // Qui devo verificare che il giocatore si trovi sopra
    // la piattaforma e in quel caso aggiorno la variabile che
    // abilita il salto (v. player.js)
    //if( player.geometry.x >= barca.geometry.x &&
     //   player.geometry.x <= barca.geometry.x + barca.geometry.display_width) {
   //         player.is_on_lanternaoverlap = true;
   // }

function overlap_lanterna(s, player, lanternaoverlap) {
    player.is_on_lanternaoverlap = true;
    console.log("player.is_on_lanterna overlap");
    }
    
function update_lanterna (s, player){
   
    if (player.is_on_lanternaoverlap) {
   
    // Avvia l'animazione destroylanterna
    PP.assets.sprite.animation_play(lanterna, "destroylanterna");

    // Listener per il completamento dell'animazione
    lanterna.ph_obj.on('animationcomplete', () => {
        // Qui puoi gestire cosa accade dopo il completamento dell'animazione
        // Ad esempio, disabil itare il corpo fisico della lanterna per rimuovere collisioni
        lanterna.ph_obj.body.enable = false;
        PP.assets.destroy(lanternaoverlap);

    }, this);
    player.is_on_lanternaoverlap = false;
}
}