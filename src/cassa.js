
let sprite_cassa;
let cassa;
let cassaoverlap;

let suggerimenti;
let img_suggerimenti;


function preload_cassa(s) {
    sprite_cassa = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_cassa.png", 168, 75);
    img_suggerimenti=PP.assets.image.load(s,"assets/images/domande.png");
}

function create_cassa(s, player) {
    cassaoverlap = PP.shapes.rectangle_add(s, 2300, 1150, 180, 75, "0x000000", 0);
    PP.physics.add(s, cassaoverlap, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, cassaoverlap, overlap_casse);

    cassa = PP.assets.sprite.add(s, sprite_cassa, 2300, 1150, 0.5, 1);
    PP.physics.add(s, cassa, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(cassa, 69, 57, 55, 14);
    PP.physics.add_overlap_f(s, player, cassa, overlap_casse);

    PP.physics.add_collider_f(s, player, cassa, collision_platform);

    PP.assets.sprite.animation_add(cassa, "static", 0, 0, 1, 0);
    PP.assets.sprite.animation_add(cassa, "destroycassa", 0, 11, 6, 0);
    PP.assets.sprite.animation_play(cassa, "static");

    suggerimenti = PP.assets.image.add(s,img_suggerimenti,2280,1050,0,0);
    suggerimenti.visibility.alpha = 0;
}

let enable_interaction_cassa = true;

function overlap_casse(s, player, cassaoverlap) {
    player.is_near_cassa = true;
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        PP.assets.sprite.animation_play(cassa, "destroycassa");
        PP.assets.sprite.animation_play(cassa, "destroycassa");
        enable_interaction_cassa = false;
        // Ascolta l'evento di completamento dell'animazione
        cassa.ph_obj.on('animationcomplete', () => {
            PP.assets.destroy(cassa);
            PP.assets.destroy(cassaoverlap);
        }, this);   
    }
}

function collision_cassa(s, player, cassa) {
    player.is_near_cassa = true;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        PP.assets.sprite.animation_play(cassa, "destroycassa");
        PP.assets.destroy(cassa);
        PP.physics.remove_collider_f(s, player, cassa, collision_platform);
    } else {
        PP.assets.sprite.animation_play(cassa, "static");
    }
}

function update_cassa(s, player){
    if(player.is_near_cassa){
        console.log("visible dom")
        suggerimenti.visibility.alpha=1;
    }else{
        console.log("invisible dom")
        suggerimenti.visibility.alpha=0;
    }

    player.is_near_cassa = false;
}