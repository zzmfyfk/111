

let giadaluce_1;
let sprite_giada;

let img_giada_gray;
let img_giada_green;
let giadaIcons = [];



function preload_giada(s) {
    // Load delle immagini della giada
 
    img_giada_gray = PP.assets.image.load(s, "assets/images/giada0.png");
    img_giada_green = PP.assets.image.load(s, "assets/images/giada1.png");

    sprite_giada = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_giada.png", 99, 99);
  
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
       
    
  


    // Imposta giada_8 come l'ultima Giada
       
        
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
        PP.physics.set_collision_rectangle(giada_vaso, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player, giada_vaso, collision_giada);
        PP.assets.sprite.animation_add(giada_vaso, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play(giada_vaso, "light");

        giada_tetto1 = PP.assets.sprite.add(s,sprite_giada,  1053, 228, 0.5, 1);
        PP.physics.add(s,  giada_tetto1, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_tetto1, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_tetto1, collision_giada);
        PP.assets.sprite.animation_add( giada_tetto1, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_tetto1, "light");

        giada_ponte = PP.assets.sprite.add(s,sprite_giada,  2817, 516, 0.5, 1);
        PP.physics.add(s,  giada_ponte, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_ponte, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_ponte, collision_giada);
        PP.assets.sprite.animation_add( giada_ponte, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_ponte, "light");

        giada_lanterna = PP.assets.sprite.add(s,sprite_giada,  5586,700, 0.5, 1);
        PP.physics.add(s,  giada_lanterna, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_lanterna, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_lanterna, collision_giada);
        PP.assets.sprite.animation_add( giada_lanterna, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_lanterna, "light");

        giada_su = PP.assets.sprite.add(s,sprite_giada,  6219, 18, 0.5, 1);
        PP.physics.add(s,  giada_su, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_su, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_su, collision_giada);
        PP.assets.sprite.animation_add( giada_su, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_su, "light");

        giada_giu = PP.assets.sprite.add(s,sprite_giada, 6396, 390, 0.5, 1);
        PP.physics.add(s,  giada_giu, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_giu, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_giu, collision_giada);
        PP.assets.sprite.animation_add( giada_giu, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_giu, "light");
       
        giada_piattaforma = PP.assets.sprite.add(s,sprite_giada,9624, 750, 0.5, 1);
        PP.physics.add(s,  giada_piattaforma, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle( giada_piattaforma, 21, 27, 39, 36); 
        PP.physics.add_overlap_f(s, player,  giada_piattaforma, collision_giada);
        PP.assets.sprite.animation_add( giada_piattaforma, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play( giada_piattaforma, "light");

        giada_piattaforma.isLastGiada = true;

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
        window.location.href = 'index3.html';  // Versione livello 2 con Liang
    } else {
        // Se il numero di giade (basato sullo score) non rientra in nessun range previsto
        console.log("Score inaspettato: " + score);
    }
}
