let img_liang;
let img_casella_zhu_dialogo_liang;
let img_testo_dialogofinale_positivo1;
let img_testo_dialogofinale_positivo2;


let liang;
let casella_zhu_dialogo_liang;
let testo_dialogofinale_positivo1;
let testo_dialogofinale_positivo2;
let dialogoLiangStarted = false;


function preload_dialogo_liang(s) {
    let currentScore = PP.gameState.get_variable("score");


    // 检查得分是否达到或超过70
    if (currentScore >= 70) {

        sprite_liang = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_Liang.png",54, 156); //preload spritesheet liang
        //img_liang = PP.assets.image.load(s, "assets/images/Liang_complete.png");
        img_casella_zhu_dialogo_liang = PP.assets.image.load(s, "assets/images/casella_zhu.png");
        img_testo_dialogofinale_positivo1 = PP.assets.image.load(s, "assets/images/testo_dialogofinale_positivo1.png");
        img_testo_dialogofinale_positivo2 = PP.assets.image.load(s, "assets/images/testo_dialogofinale_positivo2.png");
        console.log("Dialogo Liang assets preloaded.");
    }
}



function create_dialogo_liang(s, player) {
    let currentScore = PP.gameState.get_variable("score");


    // 检查得分是否达到或超过70
    if (currentScore >= 70) {


        liang = PP.assets.sprite.add(s, sprite_liang, 9400, 1255, 0, 0); //crea la sprite
        PP.physics.add(s, liang, PP.physics.type.STATIC);
        //s.physics.add.collider(player.ph_obj, liang.ph_obj, () => collision_liang(s, player, liang));
        PP.assets.sprite.animation_add(liang, "moving", 0, 1, 1, -1); //carico l'animazione
        PP.assets.sprite.animation_play(liang, "moving");//dovrebbe far partire l'animazione 

        casella_zhu_dialogo_liang = PP.assets.image.add(s, img_casella_zhu_dialogo_liang, 8462, 1380, 0, 0);
        casella_zhu_dialogo_liang.visibility.alpha = 0;
        testo_dialogofinale_positivo1 = PP.assets.image.add(s, img_testo_dialogofinale_positivo1, 9320, 1329, 0, 0);
        testo_dialogofinale_positivo1.visibility.alpha = 0;
        testo_dialogofinale_positivo2 = PP.assets.image.add(s, img_testo_dialogofinale_positivo2, 9320, 1329, 0, 0);
        testo_dialogofinale_positivo2.visibility.alpha = 0;
        console.log("Dialogo Liang elements created.");
        s.physics.add.collider(player.ph_obj, liang.ph_obj, () => collision_liang(s, player, liang));


        let layer_dialogo_liang = PP.layers.create(s);
              PP.layers.add_to_layer(layer_dialogo_liang,  casella_zhu_dialogo_liang);
             
              PP.layers.set_z_index(layer_dialogo_liang, 3);




              let layer_dialogo_liang_testo = PP.layers.create(s);
             
              PP.layers.add_to_layer(layer_dialogo_liang_testo , testo_dialogofinale_positivo1);
              PP.layers.add_to_layer(layer_dialogo_liang_testo , testo_dialogofinale_positivo2);
              PP.layers.set_z_index(layer_dialogo_liang, 4);


    }
}


let dialog_state_liang = 0;
let keyA_pressed = false; // Flag to track if 'A' key was pressed


function collision_liang(s, player, liang) {


        // Show dialogue box and text when player collides with Liang
        casella_zhu_dialogo_liang.visibility.alpha = 1;
        testo_dialogofinale_positivo1.visibility.alpha = 1;
        dialog_state_liang = 1;
        player_speed=0;
        console.log("Dialogo Liang tocca.");
   
}
function update_dialogo_liang(s, player) {






    // Check if 'A' key is down and wasn't pressed before
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && !keyA_pressed) {
       
        keyA_pressed = true; // Set flag to true as key is pressed


        switch (dialog_state_liang) {
            case 1:
                // Transition from the first to the second part of the dialogue
                testo_dialogofinale_positivo1.visibility.alpha = 0; // Hide first text
                testo_dialogofinale_positivo2.visibility.alpha = 1; // Show second text
                dialog_state_liang = 2; // Update state
                break;


            case 2:
                // Close the dialogue
                casella_zhu_dialogo_liang.visibility.alpha = 0;
                testo_dialogofinale_positivo2.visibility.alpha = 0;
                dialog_state_liang = 3; // Update state to indicate dialogue is closed


                PP.scenes.start("finale_positivo");
                break;
        }
    } else if (!PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        keyA_pressed = false; // Reset flag when key is released
    }
}





