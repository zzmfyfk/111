let img_farfalla;
let img_casella_zhu_dialogo_farfalla;
let img_testo_dialogofinale_farfalla1;
let img_testo_dialogofinale_farfalla2;

let farfalla;
let casella_zhu_dialogo_farfalla;
let testo_dialogofinale_farfalla1;
let testo_dialogofinale_farfalla2;

function preload_dialogo_farfalla(s){
    
    img_farfalla=PP.assets.image.load(s,"assets/images/tomba.png");
    img_casella_zhu_dialogo_farfalla = PP.assets.image.load(s,"assets/images/casella_zhu.png");
    img_testo_dialogofinale_farfalla1=PP.assets.image.load(s,"assets/images/testo_dialogofinale_farfalla1.png");
    img_testo_dialogofinale_farfalla2=PP.assets.image.load(s,"assets/images/testo_dialogofinale_farfalla2.png");

}

function create_dialogo_farfalla(s,player){

    farfalla = PP.assets.image.add(s,img_farfalla,1700,1238,0,0);
    PP.physics.add(s,farfalla,PP.physics.type.STATIC);
    s.physics.add.collider(player.ph_obj, farfalla.ph_obj, () => collision_farfalla(s, player, farfalla));

    casella_zhu_dialogo_farfalla = PP.assets.image.add(s,img_casella_zhu_dialogo_farfalla,650,1370,0,0);
    casella_zhu_dialogo_farfalla.visibility.alpha=0;
    testo_dialogofinale_farfalla1 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla1,1430,1420,0,0);
    testo_dialogofinale_farfalla1.visibility.alpha = 0;
    testo_dialogofinale_farfalla2 = PP.assets.image.add(s,img_testo_dialogofinale_farfalla2,1430,1420,0,0);
    testo_dialogofinale_farfalla2.visibility.alpha = 0;

}

let dialog_state_farfalla = 0;
let keyA_pressed_farfalla = false; // Flag to track if 'A' key was pressed

function collision_farfalla(s, player, farfalla) {
    // Show dialogue box and text when player collides with farfalla
    casella_zhu_dialogo_farfalla.visibility.alpha = 1;
    testo_dialogofinale_farfalla1.visibility.alpha = 1;
    dialog_state_farfalla = 1;
}

function update_dialogo_farfalla(s, player) {
    // Check if 'A' key is down and wasn't pressed before
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && !keyA_pressed_farfalla) {
        
        keyA_pressed_farfalla = true; // Set flag to true as key is pressed

        switch (dialog_state_farfalla) {
            case 1:
                // Transition from the first to the second part of the dialogue
                testo_dialogofinale_farfalla1.visibility.alpha = 0; // Hide first text
                testo_dialogofinale_farfalla2.visibility.alpha = 1; // Show second text
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