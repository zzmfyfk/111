let img_frammento_1;
let img_frammento_2;
let img_frammento_3;
let img_frammento_4;
let img_frammento_5;
let img_frammento_6;
let img_frammento_7;


function preload_frammenti(s) {
    // Load delle immagini del funghetto
    img_frammento_1   = PP.assets.image.load(s, "assets/images/frammento_1.png");
    img_frammento_2   = PP.assets.image.load(s, "assets/images/frammento_2.png");
    img_frammento_3   = PP.assets.image.load(s, "assets/images/frammento_3.png");
    img_frammento_4   = PP.assets.image.load(s, "assets/images/frammento_4.png");
    img_frammento_5   = PP.assets.image.load(s, "assets/images/frammento_5.png");
    img_frammento_6   = PP.assets.image.load(s, "assets/images/frammento_6.png");
    img_frammento_7  = PP.assets.image.load(s, "assets/images/frammento_7.png");
}

function collision_giada(s, player, frammento) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score+10);
}

function create_frammenti(s, player) {

    img_suggerimenti=PP.assets.image.load(s,"assets/images/tasto_A.png");


        let frammento_1 = PP.assets.image.add(s, img_frammento_1, 3402,1233, 0, 0);
        PP.physics.add(s, frammento_1, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle(frammento_1, 69, 57, 55, 14);
        PP.physics.add_overlap_f(s, player, frammento_1, collision_giada);
    
        let frammento_2 = PP.assets.image.add(s, img_frammento_2, 5391, 1089, 0, 0);
        PP.physics.add(s, frammento_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_2, collision_giada);

        let frammento_3 = PP.assets.image.add(s, img_frammento_1, 5382, 345, 0, 0);
        PP.physics.add(s, frammento_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_3, collision_giada);
    
        let frammento_4 = PP.assets.image.add(s, img_frammento_4,6546, 1221, 0, 0);
        PP.physics.add(s, frammento_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_4, collision_giada);

        let frammento_5 = PP.assets.image.add(s, img_frammento_5, 8121, 330, 0, 0);
        PP.physics.add(s, frammento_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_5, collision_giada);

        let frammento_6 = PP.assets.image.add(s, img_frammento_6,7977, 873, 0, 0);
        PP.physics.add(s, frammento_6, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_6, collision_giada);
    
        let frammento_7 = PP.assets.image.add(s, img_frammento_7, 8397, 1149, 0, 0);
        PP.physics.add(s, frammento_7, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_7, collision_giada);




    }
    function overlap_frammenti(s, player, cassaoverlap) {
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
    
    function overlap_casse(s, player, cassaoverlap) {
        player.is_near_cassa = true;
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            enable_interaction_cassa = false;
            // Ascolta l'evento di completamento dell'animazione
            cassa.ph_obj.on('animationcomplete', () => {
                PP.assets.destroy(frammento);
                PP.assets.destroy(cassaoverlap);
            }, this);   
        }
    }


function collision_frammenti(s, player, frammento) {
    // In caso di collisione procedo come segue:

    // 1) distruggo giada
    PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score + 1);

    if (giada.isLastframmento) {
        // Imposta la variabile per indicare che l'ultima Giada è stata raccolta
        lastGiadaCollected = true;
        // Potresti voler aggiungere qui ulteriori azioni o transizioni
        checkGiadasAndTransition(s);
    }

    console.log(frammentoIcons[prev_score].ph_obj);

    updateframmentoIcons(prev_score + 1);
}

function update_frammenti(s) {
    // Nothing to do...
}