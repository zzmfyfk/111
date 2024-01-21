//let img_tomba;
let img_tombarotta;
let tombarotta;


let img_tomba;
let tomba;

let img_casella_zhu_dialogo_farfalla;
let img_testo_dialogofinale_farfalla1;
let img_testo_dialogofinale_farfalla2;

let farfalla;
let img_farfalla;
let casella_zhu_dialogo_farfalla;
let testo_dialogofinale_farfalla1;
let testo_dialogofinale_farfalla2;

let dialogoFarfallaStarted = false;
let currentScore;

function preload_dialogo_farfalla(s){
    /*sprite_liang = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_Liang.png",54, 156); //preload spritesheet liang
        //img_liang = PP.assets.image.load(s, "assets/images/Liang_complete.png");
        img_casella_zhu_dialogo_liang = PP.assets.image.load(s, "assets/images/casella_zhu.png");
        img_testo_dialogofinale_positivo1 = PP.assets.image.load(s, "assets/images/testo_dialogofinale_positivo1.png");
        img_testo_dialogofinale_positivo2 = PP.assets.image.load(s, "assets/images/testo_dialogofinale_positivo2.png");
        console.log("Dialogo Liang assets preloaded.");
        //*/
    img_tomba=PP.assets.image.load(s,"assets/images/tomba.png");
    sprite_farfalla =PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_farfalla.png",87, 66);
    
    img_farfalla=PP.assets.image.load(s,"assets/images/spritesheet farfalla.png");
     img_tombarotta = PP.assets.image.load(s,"assets/images/tombarotta.png")
    
         
       
    img_casella_zhu_dialogo_farfalla = PP.assets.image.load(s,"assets/images/casella_zhu.png");
    img_testo_dialogofinale_farfalla1=PP.assets.image.load(s,"assets/images/testo_dialogofinale_farfalla1.png");
    img_testo_dialogofinale_farfalla2=PP.assets.image.load(s,"assets/images/testo_dialogofinale_farfalla2.png");
    

}



function create_dialogo_farfalla(s,player){ //
    tomba =  PP.assets.image.add(s,img_tomba,9400, 1235,0,0);
    tomba.visibility.alpha = 1; 
    tombarotta=PP.assets.image.add(s,img_tombarotta,9400, 1235,0,0);
    tombarotta.visibility.alpha = 0;
    
    
    PP.physics.add(s,tomba,PP.physics.type.STATIC);
    currentScore = PP.gameState.get_variable("score");
    /*farfalla = PP.assets.image.add(s,img_farfalla,9400, 1255,0,0);
    PP.physics.add(s,farfalla,PP.physics.type.STATIC);
    s.physics.add.collider(player.ph_obj, farfalla.ph_obj, () => collision_farfalla(s, player, farfalla));

    casella_zhu_dialogo_farfalla = PP.assets.image.add(s,img_casella_zhu_dialogo_farfalla,8462, 1380,0,0);
    casella_zhu_dialogo_farfalla.visibility.alpha=0;
    testo_dialogofinale_farfalla1 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla1, 9320, 1329,0,0);
    testo_dialogofinale_farfalla1.visibility.alpha = 0;
    testo_dialogofinale_farfalla2 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla2,9320, 1329,0,0);
    testo_dialogofinale_farfalla2.visibility.alpha = 0;
    let currentScore = PP.gameState.get_variable("score");*/

    // 检查得分是否达到或超过70
    if (currentScore >= 70) {
        
        //PP.assets.destroy(farfalla);
      //tombarotta=PP.assets.image.add(s,img_tombarotta,9400, 1235,0,0);
      //tombarotta.visibility.alpha = 1;
      //tomba.visibility.alpha = 0;
        farfalla = PP.assets.sprite.add(s, sprite_farfalla, 9400, 1255, 0, 0);   
        PP.physics.add(s,tombarotta,PP.physics.type.STATIC);
        PP.assets.sprite.animation_add(farfalla, "moving", 0, 7, 4, -1); //carico l'animazione
        PP.assets.sprite.animation_play(farfalla, "moving");
       
        s.physics.add.collider(player.ph_obj, tombarotta.ph_obj, () => collision_farfalla(s, player, tombarotta));
       

        casella_zhu_dialogo_farfalla = PP.assets.image.add(s,img_casella_zhu_dialogo_farfalla, 8562, 1380, 0, 0);
    casella_zhu_dialogo_farfalla.visibility.alpha=0;
    testo_dialogofinale_farfalla1 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla1, 9300, 1425, 0, 0);
    testo_dialogofinale_farfalla1.visibility.alpha = 0;
    testo_dialogofinale_farfalla2 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla2,9300, 1425, 0, 0);
    testo_dialogofinale_farfalla2.visibility.alpha = 0;

        console.log("Dialogo farfalla elements created.");
        //s.physics.add.collider(player.ph_obj, farfalla.ph_obj, () => collision_farfalla(s, player, farfalla));

        let layer_dialogo_farfalla = PP.layers.create(s);
              PP.layers.add_to_layer(layer_dialogo_farfalla,  casella_zhu_dialogo_farfalla);
              //PP.layers.add_to_layer(layer_dialogo_farfalla,  tombarotta);
             PP.layers.add_to_layer(layer_dialogo_farfalla , testo_dialogofinale_farfalla1);
              PP.layers.add_to_layer(layer_dialogo_farfalla , testo_dialogofinale_farfalla2);
              PP.layers.set_z_index(layer_dialogo_farfalla, 3);


              

    }
}


let dialog_state_farfalla = 0;
let keyA_pressed = false; // Flag to track if 'A' key was pressed

function collision_farfalla(s, player, tombarotta) {

        // Show dialogue box and text when player collides with Liang
        casella_zhu_dialogo_farfalla.visibility.alpha = 1;
        testo_dialogofinale_farfalla1.visibility.alpha = 1;

        dialog_state_farfalla = 1;
        player_speed=0;
        jump_init_speed=0;
        console.log("Dialogo farfalla tocca.");
   
}




/*function collision_farfalla(s, player, farfalla) {
    // Show dialogue box and text when player collides with farfalla
    casella_zhu_dialogo_farfalla.visibility.alpha = 1;
    testo_dialogofinale_farfalla1.visibility.alpha = 1;
    dialog_state_farfalla = 1;
}*/

function update_dialogo_farfalla(s, player) {
    // Check if 'A' key is down and wasn't pressed before
    if(currentScore >= 70){
        tombarotta.visibility.alpha = 1;
        tomba.visibility.alpha = 0;
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && !keyA_pressed_farfalla) {
        
        keyA_pressed_farfalla = true; // Set flag to true as key is pressed

        switch (dialog_state_farfalla) {
            case 1:
                // Transition from the first to the second part of the dialogue
                testo_dialogofinale_farfalla1.visibility.alpha = 0; // Hide first text
                testo_dialogofinale_farfalla2.visibility.alpha = 1; // Show second text

                //BUG NON CARICA I TESTI
                player_speed=0;
                jump_init_speed=0;
                dialog_state_farfalla = 2; // Update state
                break;

            case 2:
                // Close the dialogue
                casella_zhu_dialogo_farfalla.visibility.alpha = 0;
                testo_dialogofinale_farfalla2.visibility.alpha = 0;
                dialog_state_farfalla = 3; // Update state to indicate dialogue is closed
                PP.scenes.start("finale_normale");
                break;
        }
    } else if (!PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        keyA_pressed_farfalla = false; // Reset flag when key is released
    }
}

