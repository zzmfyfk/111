let img_giada_1;
let img_giada_2;
let img_giada_3;
let img_giada_4;
let img_giada_5;
let img_giada_6;
let img_giada_7;
let img_giada_8;

let giadaluce_1;
let sprite_giada;

let img_giada_gray;
let img_giada_green;
let giadaIcons = [];



function preload_giada(s) {
    // Load delle immagini della giada
    img_giada_1   = PP.assets.image.load(s, "assets/images/giada_1.png");
    img_giada_2   = PP.assets.image.load(s, "assets/images/giada_2.png");
    img_giada_3   = PP.assets.image.load(s, "assets/images/giada_3.png");
    img_giada_4   = PP.assets.image.load(s, "assets/images/giada_4.png");
    img_giada_5   = PP.assets.image.load(s, "assets/images/giada_5.png");
    img_giada_6   = PP.assets.image.load(s, "assets/images/giada_6.png");
    img_giada_7   = PP.assets.image.load(s, "assets/images/giada_7.png");
    img_giada_8   = PP.assets.image.load(s, "assets/images/giada_8.png");

    img_giada_gray = PP.assets.image.load(s, "assets/images/giada0.png");
    img_giada_green = PP.assets.image.load(s, "assets/images/giada1.png");

    sprite_giada = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_giada.png", 99, 99);
   // sprite_giada_1 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_giada.png", 99, 99);
}

function collision_giada(s, player, giada) {
    // In caso di collisione procedo come segue:

    // 1) distruggo giada
    PP.assets.destroy(giada);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score + 1);

    if (giada.isLastGiada) {
        // Imposta la variabile per indicare che l'ultima Giada è stata raccolta
        lastGiadaCollected = true;
        // Potresti voler aggiungere qui ulteriori azioni o transizioni
        checkGiadasAndTransition(s);
    }

    console.log(giadaIcons[prev_score].ph_obj);

    updateGiadaIcons(prev_score + 1);
}

function updateGiadaIcons(score) {
    for (let i = 0; i < score; i++) {
        // 将对应的灰色图标设为不可见，并将绿色图标设为可见
        giadaIcons[i].gray.ph_obj.setVisible(false);
        giadaIcons[i].green.ph_obj.setVisible(true);
    }
}


function create_giada(s, player) {

        // creo la giada, la aggiungo alla fisica e imposto la funzione
        // di collisione
        let giada_1 = PP.assets.image.add(s, img_giada_1, 1053, 228, 0, 0);
        PP.physics.add(s, giada_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_1, collision_giada);
    
        let giada_2 = PP.assets.image.add(s, img_giada_2, 1179, 900, 0, 0);
        PP.physics.add(s, giada_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_2, collision_giada);

        let giada_3 = PP.assets.image.add(s, img_giada_3,1850, 1100, 0, 0);
        PP.physics.add(s, giada_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_3, collision_giada);

        let giada_4 = PP.assets.image.add(s, img_giada_4, 1000, 900, 0, 0);
        PP.physics.add(s, giada_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_4, collision_giada);
    
        let giada_5 = PP.assets.image.add(s, img_giada_5, 900, 900, 0, 0);
        PP.physics.add(s, giada_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_5, collision_giada);

        let giada_6 = PP.assets.image.add(s, img_giada_6, 1100, 900, 0, 0);
        PP.physics.add(s, giada_6, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_6, collision_giada);

        let giada_7 = PP.assets.image.add(s, img_giada_7, 9500, 780, 0, 0);
        PP.physics.add(s, giada_7, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_7, collision_giada);


    // Imposta giada_8 come l'ultima Giada
        giada_7.isLastGiada = true;
        
        //giada luminosa cassa
        giada_cassa = PP.assets.sprite.add(s,sprite_giada, 2300, 1150, 0.5, 1);
        PP.physics.add(s, giada_cassa, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle(giada_cassa, 21, 27, 39, 36); //rettangolo di collisione della cassa
        
        PP.physics.add_overlap_f(s, player, giada_cassa, collision_giada);
    
        PP.assets.sprite.animation_add(giada_cassa, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play(giada_cassa, "light");

       //giada luminosa vaso
        giada_vaso = PP.assets.sprite.add(s,sprite_giada,  1161, 963, 0.5, 1);
        PP.physics.add(s, giada_vaso, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle(giada_vaso, 21, 27, 39, 36); //rettangolo di collisione della cassa
        
        PP.physics.add_overlap_f(s, player, giada_vaso, collision_giada);
    
        PP.assets.sprite.animation_add(giada_vaso, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play(giada_vaso, "light");

    for (let i = 0; i < 8; i++) {
        // 灰色图标
        let grayIcon = PP.assets.image.add(s, img_giada_gray, 10 + i * 30, 10, 0, 0);
        grayIcon.tile_geometry.scroll_factor_x = 0;
        grayIcon.tile_geometry.scroll_factor_y = 0;

        // 绿色图标
        let greenIcon = PP.assets.image.add(s, img_giada_green, 10 + i * 30, 10, 0, 0);
        greenIcon.tile_geometry.scroll_factor_x = 0;
        greenIcon.tile_geometry.scroll_factor_y = 0;
        greenIcon.ph_obj.setVisible(false); // 初始时不可见

        // 将图标保存到数组中
        giadaIcons.push({ gray: grayIcon, green: greenIcon });
    }
    }


        


function update_giada(s) {
    // Nothing to do...
}

function collectGiada(player, giada) {
    let currentCount = PP.gameState.get_variable("giadaCount") || 0;
    console.log("Giade raccolte prima dell'aggiornamento: " + currentCount);
    PP.gameState.set_variable("giadaCount", currentCount + 1);

    if (giada.isLastGiada) {
        lastGiadaCollected = true;
        checkGiadasAndTransition(scene);  // Passa la scena attuale come parametro
    }
}

function checkGiadasAndTransition(s) {
    // Ottieni lo score attuale
    let score = PP.gameState.get_variable("score");

    // Controlla il punteggio per decidere la transizione
    if (score >= 1 && score <= 4) {
        // Se lo score è tra 10 e 40 (cioè tra 1 e 4 giade raccolte)
        window.location.href = 'index2.html';  // Versione livello 2 con farfalla
    } else if (score >= 5 && score <= 8) {
        // Se lo score è tra 50 e 80 (cioè tra 5 e 8 giade raccolte)
        window.location.href = 'index2.html';  // Versione livello 2 con Liang
    } else {
        // Se il numero di giade (basato sullo score) non rientra in nessun range previsto
        console.log("Score inaspettato: " + score);
    }
}
