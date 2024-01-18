let img_frammento_1;
let img_frammento_2;
let img_frammento_3;
let img_frammento_4;
let img_frammento_5;
let img_frammento_6;
let img_frammento_7;
let fraicon_1;
let fraicon_2;
let fraicon_3;
let fraicon_4;
let fraicon_5;
let fraicon_6;
let fraicon_7;
let fraicons;


function preload_frammenti(s) {
    // Load delle immagini del funghetto
    img_frammento_1   = PP.assets.image.load(s, "assets/images/frammento_1.png");
    img_frammento_2   = PP.assets.image.load(s, "assets/images/frammento_2.png");
    img_frammento_3   = PP.assets.image.load(s, "assets/images/frammento_3.png");
    img_frammento_4   = PP.assets.image.load(s, "assets/images/frammento_4.png");
    img_frammento_5   = PP.assets.image.load(s, "assets/images/frammento_5.png");
    img_frammento_6   = PP.assets.image.load(s, "assets/images/frammento_6.png");
    img_frammento_7 = PP.assets.image.load(s, "assets/images/frammento_7.png");
    img_frammento_01 = PP.assets.image.load(s, "assets/images/frammento_01.png");
}

function collision_giada(s, player, frammento) {


    // ... 其他代码 ...


    if (!frammento || !frammento.id) {
        console.error("Frammento or its id is undefined", frammento);
        return;
    }

    let frammentoId = frammento.id; // 假设 frammento 对象有一个 id 属性
    updateFraiconAlpha(frammentoId);
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score + 10);

    redirectToLiangIfScoreIsHighEnough(prev_score + 10);
}






function updateFraIcons(score) {
    for (let i = 0; i < score; i++) {
        // 将对应的灰色图标设为不可见，并将绿色图标设为可见
        giadaIcons[i].gray.ph_obj.setVisible(false);
        giadaIcons[i].green.ph_obj.setVisible(true);
    }
}

function create_frammenti(s, player) {



    img_suggerimenti=PP.assets.image.load(s,"assets/images/tasto_A.png");


        let frammento_1 = PP.assets.image.add(s, img_frammento_1, 3402,1233, 0, 0);
        PP.physics.add(s, frammento_1, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle(frammento_1, 69, 57, 55, 14);
        PP.physics.add_overlap_f(s, player, frammento_1, collision_giada);
    frammento_1.id = "frammento_1";
        let frammento_2 = PP.assets.image.add(s, img_frammento_2, 5391, 1089, 0, 0);
        PP.physics.add(s, frammento_2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, frammento_2, collision_giada);
    frammento_2.id = "frammento_2";

        let frammento_3 = PP.assets.image.add(s, img_frammento_1, 5382, 345, 0, 0);
        PP.physics.add(s, frammento_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_3, collision_giada);
    frammento_3.id = "frammento_3";
        let frammento_4 = PP.assets.image.add(s, img_frammento_4,6546, 1221, 0, 0);
        PP.physics.add(s, frammento_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_4, collision_giada);
    frammento_4.id = "frammento_4";
        let frammento_5 = PP.assets.image.add(s, img_frammento_5, 8121, 330, 0, 0);
        PP.physics.add(s, frammento_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_5, collision_giada);
    frammento_5.id = "frammento_5";
        let frammento_6 = PP.assets.image.add(s, img_frammento_6,7977, 873, 0, 0);
        PP.physics.add(s, frammento_6, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_6, collision_giada);
    frammento_6.id = "frammento_6";
        let frammento_7 = PP.assets.image.add(s, img_frammento_7, 8397, 1149, 0, 0);
        PP.physics.add(s, frammento_7, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_7, collision_giada);
    frammento_7.id = "frammento_7";
    let fraicon_1 = PP.assets.image.add(s, img_frammento_1, 10, 10, 0, 0);
    fraicon_1.tile_geometry.scroll_factor_x = 0;
    fraicon_1.tile_geometry.scroll_factor_y = 0;
    fraicon_1.id = "frammento_1"; // 设置标识符
    fraicon_1.ph_obj.setAlpha(0.5);

    let fraicon_2 = PP.assets.image.add(s, img_frammento_2, 60, 10, 0, 0);
    fraicon_2.tile_geometry.scroll_factor_x = 0;
    fraicon_2.tile_geometry.scroll_factor_y = 0;
    fraicon_2.id = "frammento_2"; // 设置标识符
    fraicon_2.ph_obj.setAlpha(0.5);

    let fraicon_3 = PP.assets.image.add(s, img_frammento_3, 110, 10, 0, 0);
    fraicon_3.tile_geometry.scroll_factor_x = 0;
    fraicon_3.tile_geometry.scroll_factor_y = 0;
    fraicon_3.id = "frammento_3"; // 设置标识符
    fraicon_3.ph_obj.setAlpha(0.5);

    let fraicon_4 = PP.assets.image.add(s, img_frammento_4, 160, 10, 0, 0);
    fraicon_4.tile_geometry.scroll_factor_x = 0;
    fraicon_4.tile_geometry.scroll_factor_y = 0;
    fraicon_4.id = "frammento_4"; // 设置标识符
    fraicon_4.ph_obj.setAlpha(0.5);

    let fraicon_5 = PP.assets.image.add(s, img_frammento_5, 210, 10, 0, 0);
    fraicon_5.tile_geometry.scroll_factor_x = 0;
    fraicon_5.tile_geometry.scroll_factor_y = 0;
    fraicon_5.id = "frammento_5"; // 设置标识符
    fraicon_5.ph_obj.setAlpha(0.5);

    let fraicon_6 = PP.assets.image.add(s, img_frammento_6, 260, 10, 0, 0);
    fraicon_6.tile_geometry.scroll_factor_x = 0;
    fraicon_6.tile_geometry.scroll_factor_y = 0;
    fraicon_6.id = "frammento_6"; // 设置标识符
    fraicon_6.ph_obj.setAlpha(0.5);

    let fraicon_7 = PP.assets.image.add(s, img_frammento_7, 310, 10, 0, 0);
    fraicon_7.tile_geometry.scroll_factor_x = 0;
    fraicon_7.tile_geometry.scroll_factor_y = 0;

    fraicon_7.id = "frammento_7"; // 设置标识符
    fraicon_7.ph_obj.setAlpha(0.5);

    fraicons = [fraicon_1, fraicon_2, fraicon_3, fraicon_4, fraicon_5, fraicon_6, fraicon_7];
    fraicon_1.id = "frammento_1"; // 设置标识符






}
function updateFraiconAlpha(frammentoId) {
    console.log("fraicons array:", fraicons);

    let fraiconToUpdate = fraicons.find(fraicon => fraicon && fraicon.id === frammentoId);
    if (fraiconToUpdate) {
        fraiconToUpdate.ph_obj.setAlpha(1);
    } else {
        console.error("No matching fraicon found for id:", frammentoId);
    }
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

    let frammentoId = frammento.id;
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

function redirectToLiangIfScoreIsHighEnough(score) {
    if (score >= 70) {
        // 执行跳转到 'liang.html'
        window.location.href = 'liang.html';
    }
}
