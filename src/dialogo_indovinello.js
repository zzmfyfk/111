let img_mercante_indovinello;
let img_casella_indovinello_mercante;
let img_casella_indovinello_Zhu;

let img_suggerimento_A_indovinello;
let img_testo_indovinello_apertura1;
let img_testo_indovinello_apertura2;
let img_testo_indovinello_apertura3;
let img_testo_indovinello1;
let img_testo_indovinello2;
let img_testo_indovinello3;
let img_testo_indovinello4;
let img_testo_indovinello5;
let img_testo_indovinello_risposte1;
let img_testo_indovinello_risposte2;
let img_testo_indovinello_risposte3;
let img_testo_indovinello_risposte4;
let img_testo_indovinello_risposte5;
let img_testo_indovinello_sbagliato;
let img_testo_indovinello_corretto;
let img_testo_indovinello_finito;
let img_testo_risposte1_S;
let img_testo_risposte1_D;
let img_testo_risposte1_F;
let img_testo_risposte2_S;
let img_testo_risposte2_D;
let img_testo_risposte2_F;
let img_testo_risposte3_S;
let img_testo_risposte3_D;
let img_testo_risposte3_F;
let img_testo_risposte4_S;
let img_testo_risposte4_D;
let img_testo_risposte4_F;
let img_testo_risposte5_S;
let img_testo_risposte5_D;
let img_testo_risposte5_F;

let sprite_mercanteindovinello;
let mercante_indovinello;
let casella_indovinello_mercante;
let casella_indovinello_Zhu;

let suggerimento_A_indovinello;
let testo_indovinello_apertura1;
let testo_indovinello_apertura2;
let testo_indovinello_apertura3;
let testo_indovinello1;
let testo_indovinello2;
let testo_indovinello3;
let testo_indovinello4;
let testo_indovinello5;
let testo_indovinello_risposte1;
let testo_indovinello_risposte2;
let testo_indovinello_risposte3;
let testo_indovinello_risposte4;
let testo_indovinello_risposte5;
let testo_indovinello_sbagliato;
let testo_indovinello_corretto;
let testo_indovinello_finito;
let testo_risposte1_S;
let testo_risposte1_D;
let testo_risposte1_F;
let testo_risposte2_S;
let testo_risposte2_D;
let testo_risposte2_F;
let testo_risposte3_S;
let testo_risposte3_D;
let testo_risposte3_F;
let testo_risposte4_S;
let testo_risposte4_D;
let testo_risposte4_F;
let testo_risposte5_S;
let testo_risposte5_D;
let testo_risposte5_F;


function preload_dialogo_indovinello(s){

    sprite_mercanteindovinello = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_mercanteindovinello.png", 81, 153);


  //  img_mercante_indovinello = PP.assets.image.load(s,"assets/images/mercante.png");
    img_casella_indovinello_mercante = PP.assets.image.load(s,"assets/images/casella_indovinello_mercante.png");
    img_casella_indovinello_Zhu = PP.assets.image.load(s,"assets/images/casella_zhu.png");
    img_suggerimento_A_indovinello = PP.assets.image.load(s,"assets/images/tasto_A.png");
    img_testo_indovinello_apertura1 = PP.assets.image.load(s,"assets/images/testo_indovinello_apertura1.png");
    img_testo_indovinello_apertura2 = PP.assets.image.load(s,"assets/images/testo_indovinello_apertura2.png");
    img_testo_indovinello_apertura3 = PP.assets.image.load(s,"assets/images/testo_indovinello_apertura3.png");
    img_testo_indovinello1 = PP.assets.image.load(s,"assets/images/testo_indovinello1.png");
    img_testo_indovinello2 = PP.assets.image.load(s,"assets/images/testo_indovinello2.png");
    img_testo_indovinello3 = PP.assets.image.load(s,"assets/images/testo_indovinello3.png");
    img_testo_indovinello4 = PP.assets.image.load(s,"assets/images/testo_indovinello4.png");
    img_testo_indovinello5 = PP.assets.image.load(s,"assets/images/testo_indovinello5.png");
    img_testo_indovinello_risposte1 = PP.assets.image.load(s,"assets/images/testo_indovinello_risposta1.png");
    img_testo_indovinello_risposte2 = PP.assets.image.load(s,"assets/images/testo_indovinello_risposta2.png");
    img_testo_indovinello_risposte3 = PP.assets.image.load(s,"assets/images/testo_indovinello_risposta3.png");
    img_testo_indovinello_risposte4 = PP.assets.image.load(s,"assets/images/testo_indovinello_risposta4.png");
    img_testo_indovinello_risposte5 = PP.assets.image.load(s,"assets/images/testo_indovinello_risposta5.png");
    img_testo_indovinello_sbagliato = PP.assets.image.load(s,"assets/images/testo_indovinello_sbagliato.png");
    img_testo_indovinello_corretto = PP.assets.image.load(s,"assets/images/testo_indovinello_corretto.png");
    img_testo_indovinello_finito = PP.assets.image.load(s,"assets/images/testo_indovinello_finito.png");

    img_testo_risposte1_S = PP.assets.image.load(s,"assets/images/testo_risposte1_S.png");
    img_testo_risposte1_D = PP.assets.image.load(s,"assets/images/testo_risposte1_D.png");
    img_testo_risposte1_F = PP.assets.image.load(s,"assets/images/testo_risposte1_F.png");
   
    img_testo_risposte2_S = PP.assets.image.load(s,"assets/images/testo_risposte2_S.png");
    img_testo_risposte2_D = PP.assets.image.load(s,"assets/images/testo_risposte2_D.png");
    img_testo_risposte2_F = PP.assets.image.load(s,"assets/images/testo_risposte2_F.png");
   
    img_testo_risposte3_S = PP.assets.image.load(s,"assets/images/testo_risposte3_S.png");
    img_testo_risposte3_D = PP.assets.image.load(s,"assets/images/testo_risposte3_D.png");
    img_testo_risposte3_F = PP.assets.image.load(s,"assets/images/testo_risposte3_F.png");
    
    img_testo_risposte4_S = PP.assets.image.load(s,"assets/images/testo_risposte4_S.png")
    img_testo_risposte4_D = PP.assets.image.load(s,"assets/images/testo_risposte4_D.png");
    img_testo_risposte4_F = PP.assets.image.load(s,"assets/images/testo_risposte4_F.png");
    
    img_testo_risposte5_S = PP.assets.image.load(s,"assets/images/testo_risposte5_S.png");
    img_testo_risposte5_D = PP.assets.image.load(s,"assets/images/testo_risposte5_D.png");
    img_testo_risposte5_F = PP.assets.image.load(s,"assets/images/testo_risposte5_F.png");

}

function create_dialogo_indovinello(s,player){

    mercante_indovinello = PP.assets.sprite.add(s,sprite_mercanteindovinello,5500, 1055, 0, 0);
    PP.physics.add(s,mercante_indovinello,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,mercante_indovinello,overlap_mercante_indovinello);
    PP.assets.sprite.animation_add(mercante_indovinello, "moving", 0, 1, 1, -1);
    PP.assets.sprite.animation_play(mercante_indovinello, "moving");

    function overlap_mercante_indovinello(s,player,mercante_indovinello){
        player.is_on_mercante_indovinello=true;
    }

    suggerimento_A_indovinello = PP.assets.image.add(s,img_suggerimento_A_indovinello,5530,1020,0,0);
    suggerimento_A_indovinello.visibility.alpha = 0;

    casella_indovinello_mercante = PP.assets.image.add(s,img_casella_indovinello_mercante,4600,1195,0,0); //prova 4610
    casella_indovinello_mercante.visibility.alpha = 0

    casella_indovinello_Zhu = PP.assets.image.add(s,img_casella_indovinello_Zhu,4610,1195,0,0);
    casella_indovinello_Zhu.visibility.alpha = 0;

    testo_indovinello_apertura1 = PP.assets.image.add(s,img_testo_indovinello_apertura1,5340,1245,0,0);
    testo_indovinello_apertura1.visibility.alpha = 0;
    testo_indovinello_apertura2 = PP.assets.image.add(s,img_testo_indovinello_apertura2,5340,1245,0,0);
    testo_indovinello_apertura2.visibility.alpha = 0;
    testo_indovinello_apertura3 = PP.assets.image.add(s,img_testo_indovinello_apertura3,5340,1245,0,0);
    testo_indovinello_apertura3.visibility.alpha = 0;

    testo_indovinello1 = PP.assets.image.add(s,img_testo_indovinello1,5340,1245,0,0);
    testo_indovinello1.visibility.alpha = 0;
    testo_indovinello_risposte1 = PP.assets.image.add(s,img_testo_indovinello_risposte1,5340,1245,0,0);
    testo_indovinello_risposte1.visibility.alpha = 0;
    testo_risposte1_S = PP.assets.image.add(s,img_testo_risposte1_S,5340,1245,0,0);
    testo_risposte1_S.visibility.alpha = 0;
    testo_risposte1_D = PP.assets.image.add(s,img_testo_risposte1_D,5340,1245,0,0);
    testo_risposte1_D.visibility.alpha = 0;
    testo_risposte1_F = PP.assets.image.add(s,img_testo_risposte1_F,5340,1245,0,0);
    testo_risposte1_F.visibility.alpha = 0;
   
    testo_indovinello2 = PP.assets.image.add(s,img_testo_indovinello2,5340,1245,0,0);
    testo_indovinello2.visibility.alpha = 0;
    testo_indovinello_risposte2 = PP.assets.image.add(s,img_testo_indovinello_risposte2,5340,1245,0,0);
    testo_indovinello_risposte2.visibility.alpha = 0;
    testo_risposte2_S = PP.assets.image.add(s,img_testo_risposte2_S,5340,1245,0,0);
    testo_risposte2_S.visibility.alpha = 0;
    testo_risposte2_D = PP.assets.image.add(s,img_testo_risposte2_D,5340,1245,0,0);
    testo_risposte2_D.visibility.alpha = 0;
    testo_risposte2_F = PP.assets.image.add(s,img_testo_risposte2_F,5340,1245,0,0);
    testo_risposte2_F.visibility.alpha = 0;

    testo_indovinello3 = PP.assets.image.add(s,img_testo_indovinello3,5340,1245,0,0);
    testo_indovinello3.visibility.alpha = 0;
    testo_indovinello_risposte3 = PP.assets.image.add(s,img_testo_indovinello_risposte3,5340,1245,0,0);
    testo_indovinello_risposte3.visibility.alpha = 0;
    testo_risposte3_S = PP.assets.image.add(s,img_testo_risposte3_S,5340,1245,0,0);
    testo_risposte3_S.visibility.alpha = 0;
    testo_risposte3_D = PP.assets.image.add(s,img_testo_risposte3_D,5340,1245,0,0);
    testo_risposte3_D.visibility.alpha = 0;
    testo_risposte3_F = PP.assets.image.add(s,img_testo_risposte3_F,5340,1245,0,0);
    testo_risposte3_F.visibility.alpha = 0;

    testo_indovinello4 = PP.assets.image.add(s,img_testo_indovinello4,5340,1245,0,0);
    testo_indovinello4.visibility.alpha = 0;
    testo_indovinello_risposte4 = PP.assets.image.add(s,img_testo_indovinello_risposte4,5340,1245,0,0);
    testo_indovinello_risposte4.visibility.alpha = 0;
    testo_risposte4_S = PP.assets.image.add(s,img_testo_risposte4_S,5340,1245,0,0);
    testo_risposte4_S.visibility.alpha = 0;
    testo_risposte4_D = PP.assets.image.add(s,img_testo_risposte4_D,5340,1245,0,0);
    testo_risposte4_D.visibility.alpha = 0;
    testo_risposte4_F = PP.assets.image.add(s,img_testo_risposte4_F,5340,1245,0,0);
    testo_risposte4_F.visibility.alpha = 0;

    testo_indovinello5 = PP.assets.image.add(s,img_testo_indovinello5,5340,1245,0,0);
    testo_indovinello5.visibility.alpha = 0;
    testo_indovinello_risposte5 = PP.assets.image.add(s,img_testo_indovinello_risposte5,5340,1245,0,0);
    testo_indovinello_risposte5.visibility.alpha = 0;
    testo_risposte5_S = PP.assets.image.add(s,img_testo_risposte5_S,5340,1245,0,0);
    testo_risposte5_S.visibility.alpha = 0;
    testo_risposte5_D = PP.assets.image.add(s,img_testo_risposte5_D,5340,1245,0,0);
    testo_risposte5_D.visibility.alpha = 0;
    testo_risposte5_F = PP.assets.image.add(s,img_testo_risposte5_F,5340,1245,0,0);
    testo_risposte5_F.visibility.alpha = 0;

    testo_indovinello_sbagliato = PP.assets.image.add(s,img_testo_indovinello_sbagliato,5340,1245,0,0);
    testo_indovinello_sbagliato.visibility.alpha = 0;
    testo_indovinello_corretto = PP.assets.image.add(s,img_testo_indovinello_corretto,5340,1245,0,0);
    testo_indovinello_corretto.visibility.alpha = 0;

    testo_indovinello_finito = PP.assets.image.add(s,img_testo_indovinello_finito,5340,1245,0,0);
    testo_indovinello_finito.visibility.alpha = 0;

    let layer_dialogo_base = PP.layers.create(s);
             
    PP.layers.add_to_layer(layer_dialogo_base , suggerimento_A_indovinello );
    PP.layers.add_to_layer(layer_dialogo_base ,casella_indovinello_mercante );
    PP.layers.add_to_layer(layer_dialogo_base ,casella_indovinello_Zhu );
    
    PP.layers.set_z_index(layer_dialogo_base, 3);

    let layer_dialogo = PP.layers.create(s);
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello_apertura1 );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello_apertura2 );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello_apertura3 );

    PP.layers.add_to_layer(layer_dialogo , testo_indovinello1 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte1 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte1_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte1_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte1_F );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello2 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte2 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_F );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello2 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte2 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte2_F );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello3 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte3 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte3_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte3_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte3_F );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello4 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte4 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte4_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte4_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte4_F );
    PP.layers.add_to_layer(layer_dialogo , testo_indovinello5 );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_risposte5 );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte5_S );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte5_D );
    PP.layers.add_to_layer(layer_dialogo ,testo_risposte5_F );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_corretto );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_sbagliato );
    PP.layers.add_to_layer(layer_dialogo ,testo_indovinello_finito );

    PP.layers.set_z_index(layer_dialogo, 4);


}

let dialog_state_indovinello = 0;
let randomNumber = 0;
let already_guessed = false;
let enable_indovinello_A = true;
let enable_indovinello_S = true;

function update_dialogo_indovinello(s,player){

    if(player.is_on_mercante_indovinello == true){

        if(dialog_state_indovinello == 0){

            suggerimento_A_indovinello.visibility.alpha=1;
        }

        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_indovinello_A = true;
        }

        if(enable_indovinello_A){

            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 0 && already_guessed){
                //hai gia comprato stupid.
                suggerimento_A_indovinello.visibility.alpha=0;
                casella_indovinello_mercante.visibility.alpha=1;

                testo_indovinello_finito.visibility.alpha=1;

                dialog_state_indovinello=9;
                player_speed=0;
                jump_init_speed=0;
                enable_indovinello_A=false;
                return;
            }

            //introduzione
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 0){
                //il tizio dice ciao cosa vuoi
                randomNumber = Math.floor(Math.random() * 5) + 1; 
                suggerimento_A_indovinello.visibility.alpha=0;

                casella_indovinello_mercante.visibility.alpha=1;
                testo_indovinello_apertura1.visibility.alpha=1;

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello = 1;
                enable_indovinello_A = false;

            }
           else if(dialog_state_indovinello == 1 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //Zhu risponde, voglio la tavoletta
                casella_indovinello_mercante.visibility.alpha=0;
                testo_indovinello_apertura1.visibility.alpha=0;

                casella_indovinello_Zhu.visibility.alpha=1;
                testo_indovinello_apertura2.visibility.alpha=1;
                console.log("state1",dialog_state_indovinello);

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello = 2;
                enable_indovinello_A = false;
            }
            else if(dialog_state_indovinello == 2 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //il tizio dice ok allora rispondi all'indovinello
                casella_indovinello_Zhu.visibility.alpha=0;
                testo_indovinello_apertura2.visibility.alpha=0;
                casella_indovinello_mercante.visibility.alpha=1;
                testo_indovinello_apertura3.visibility.alpha=1;
                console.log("state2",dialog_state_indovinello);

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello = 3;
                enable_indovinello_A = false;
            }
            else if(dialog_state_indovinello == 3 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //il tizio dice ok allora rispondi all'indovinello
                casella_indovinello_mercante.visibility.alpha=1;
                testo_indovinello_apertura3.visibility.alpha=1;
                console.log("state3",dialog_state_indovinello);

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello = 4;
                enable_indovinello_A = false;
                console.log("rand",randomNumber);

            }
            
            //primo indovinello
            if(randomNumber == 1){

                if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 4){

                    testo_indovinello_apertura3.visibility.alpha=0;

                    testo_indovinello1.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 5;
                    enable_indovinello_A = false;
                }
                else if(dialog_state_indovinello == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                    //Compaiono le risposte, con 3 opzioni S D F
                    casella_indovinello_mercante.visibility.alpha=0;
                    testo_indovinello1.visibility.alpha=0;

                    casella_indovinello_Zhu.visibility.alpha=1;
                    testo_indovinello_risposte1.visibility.alpha=1;
    
                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 6;
                    enable_indovinello_A = false;
                }

               if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){

                    enable_indovinello_S = true;
                }

                if(enable_indovinello_S && dialog_state_indovinello == 6){
                    
                    //D risposta corretta
                    if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){
                        //risposta sbagliata
                        testo_indovinello_risposte1.visibility.alpha=0;
                        testo_risposte1_S.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){
                        //D, risposta corretta
                        testo_indovinello_risposte1.visibility.alpha=0;
                        testo_risposte1_D.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=7;//risposta corretta
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if (PP.interactive.kb.is_key_down(s,PP.key_codes.F)){
                        //F risposta sbagliata
                        testo_indovinello_risposte1.visibility.alpha=0;
                        testo_risposte1_F.visibility.alpha=1;

                        dialog_state_indovinello=8;
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                }
            }

            
            //f
            //secondo indovinello
            if(randomNumber == 2 ){
                if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 4){

                    testo_indovinello_apertura3.visibility.alpha=0;

                    testo_indovinello2.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 5;
                    enable_indovinello_A = false;
                }
                else if(dialog_state_indovinello == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                    //Compaiono le risposte, con 3 opzioni S D F
                    casella_indovinello_mercante.visibility.alpha=0;
                    testo_indovinello2.visibility.alpha=0;

                    casella_indovinello_Zhu.visibility.alpha=1;
                    testo_indovinello_risposte2.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 6;
                    enable_indovinello_A = false;
                }

                if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){

                    enable_indovinello_S = true;
                }

                if(enable_indovinello_S && dialog_state_indovinello == 6){
                    
                    if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){

                        testo_indovinello_risposte2.visibility.alpha=0;
                        testo_risposte2_S.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){

                        testo_indovinello_risposte2.visibility.alpha=0;
                        testo_risposte2_D.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if (PP.interactive.kb.is_key_down(s,PP.key_codes.F)){
                        
                        testo_indovinello_risposte2.visibility.alpha=0;
                        testo_risposte2_F.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=7;//risposta
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                }
            }
            
            //s
            //terzo indovinello
            if(randomNumber == 3 ){

                if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 4){

                    testo_indovinello_apertura3.visibility.alpha=0;

                    testo_indovinello3.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 5;
                    enable_indovinello_A = false;
                }
                else if(dialog_state_indovinello == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                    //Compaiono le risposte, con 3 opzioni S D F
                    casella_indovinello_mercante.visibility.alpha=0;
                    testo_indovinello3.visibility.alpha=0;

                    casella_indovinello_Zhu.visibility.alpha=1;
                    testo_indovinello_risposte3.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 6;
                    enable_indovinello_A = false;
                }

                if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){

                    enable_indovinello_S = true;
                }

                if(enable_indovinello_S && dialog_state_indovinello == 6){
                    
                    //S risposta corretta
                    if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){

                        testo_indovinello_risposte3.visibility.alpha=0;
                        testo_risposte3_S.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=7;//state di opzione corretta
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){

                        testo_indovinello_risposte3.visibility.alpha=0;
                        testo_risposte3_D.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//risposta sbagliata
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if (PP.interactive.kb.is_key_down(s,PP.key_codes.F)){

                        testo_indovinello_risposte3.visibility.alpha=0;
                        testo_risposte3_F.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//risposta sbagliata
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                }
            }

            //quarto indovinello
            if(randomNumber == 4){

                if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 4){

                    testo_indovinello_apertura3.visibility.alpha=0;

                    testo_indovinello4.visibility.alpha=1;
                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 5;
                    enable_indovinello_A = false;
                }
                else if(dialog_state_indovinello == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                    //Compaiono le risposte, con 3 opzioni S D F
                    casella_indovinello_mercante.visibility.alpha=0;
                    testo_indovinello4.visibility.alpha=0;

                    casella_indovinello_Zhu.visibility.alpha=1;
                    testo_indovinello_risposte4.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 6;
                    enable_indovinello_A = false;
                }

                if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){

                    enable_indovinello_S = true;
                }

                if(enable_indovinello_S && dialog_state_indovinello == 6){
                    
                    //S risposta corretta
                    if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){

                        testo_indovinello_risposte4.visibility.alpha=0;
                        testo_risposte4_S.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//state di opzione corretta

                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){
                        
                        testo_indovinello_risposte4.visibility.alpha=0;
                        testo_risposte4_D.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//risposta sbagliata
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if (PP.interactive.kb.is_key_down(s,PP.key_codes.F)){
                        
                        testo_indovinello_risposte4.visibility.alpha=0;
                        testo_risposte4_F.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=7;//risposta
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                }
            }

            //quinto indovinello
            if(randomNumber == 5){

                if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_indovinello == 4){

                    testo_indovinello_apertura3.visibility.alpha=0;

                    testo_indovinello5.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;

                    dialog_state_indovinello = 5;
                    enable_indovinello_A = false;
                }
                else if(dialog_state_indovinello == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                    //Compaiono le risposte, con 3 opzioni S D F
                    console.log("entrato in 1 ",randomNumber);

                    casella_indovinello_mercante.visibility.alpha=0;
                    testo_indovinello5.visibility.alpha=0;

                    casella_indovinello_Zhu.visibility.alpha=1;
                    testo_indovinello_risposte5.visibility.alpha=1;

                    player_speed=0;
                    jump_init_speed=0;
                    dialog_state_indovinello = 6;
                    enable_indovinello_A = false;
                }

                if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){

                    enable_indovinello_S = true;
                }

                if(enable_indovinello_S && dialog_state_indovinello == 6){
                    
                    if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){

                        testo_indovinello_risposte5.visibility.alpha=0;
                        testo_risposte5_S.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//state di opzione corretta
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){

                        testo_indovinello_risposte5.visibility.alpha=0;
                        testo_risposte5_D.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=8;//risposta sbagliata
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                    else if (PP.interactive.kb.is_key_down(s,PP.key_codes.F)){
                        //F risposta sbagliata
                        testo_indovinello_risposte5.visibility.alpha=0;
                        testo_risposte5_F.visibility.alpha=1;

                        player_speed=0;
                        jump_init_speed=0;
                        dialog_state_indovinello=7;//risposta sbagliata
                        enable_indovinello_A=false;
                        enable_indovinello_S=false;
                    }
                }
            }

            if(dialog_state_indovinello == 7 && !already_guessed && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //se non hai già indovinato, e hai vinto
                //qui dirà hai vinto!
                //e si va a chiudere tutto
                //d,f,s,f,f
                casella_indovinello_Zhu.visibility.alpha=0;
                testo_risposte1_D.visibility.alpha=0;
                testo_risposte2_F.visibility.alpha=0;
                testo_risposte3_S.visibility.alpha=0;
                testo_risposte4_F.visibility.alpha=0;
                testo_risposte5_F.visibility.alpha=0;

                casella_indovinello_mercante.visibility.alpha=1;
                testo_indovinello_corretto.visibility.alpha=1;

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello=9;//state per chiudere tutto
                already_guessed=true;//deve dire true
                enable_indovinello_A=false;
            }
            else if(dialog_state_indovinello==8 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //mi dispiace hai sbagliato, riprova
                console.log("sbagliato");
                casella_indovinello_Zhu.visibility.alpha=0;
                testo_risposte1_S.visibility.alpha=0;
                testo_risposte1_F.visibility.alpha=0;

                testo_risposte2_S.visibility.alpha=0;
                testo_risposte2_D.visibility.alpha=0;

                testo_risposte3_D.visibility.alpha=0;
                testo_risposte3_F.visibility.alpha=0;

                testo_risposte4_S.visibility.alpha=0;
                testo_risposte4_D.visibility.alpha=0;

                testo_risposte5_S.visibility.alpha=0;
                testo_risposte5_D.visibility.alpha=0;

                casella_indovinello_mercante.visibility.alpha=1;
                testo_indovinello_sbagliato.visibility.alpha=1;

                player_speed=0;
                jump_init_speed=0;
                dialog_state_indovinello=9;//state per chiudere tutto
                enable_indovinello_A=false;
            }
            else if(dialog_state_indovinello == 9 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //chiudo tutto schiacciando A
                casella_indovinello_mercante.visibility.alpha=0;
                testo_indovinello_corretto.visibility.alpha=0;
                testo_indovinello_sbagliato.visibility.alpha=0;
                testo_indovinello_finito.visibility.alpha=0;

                player_speed=250;
                jump_init_speed=200;
                dialog_state_indovinello=0;
                player.is_on_mercante_indovinello=false;
                enable_indovinello_A=false;
            }
        }
    }
    
    else if(player.is_on_mercante_indovinello == false){

        suggerimento_A_indovinello.visibility.alpha=0;
    }
    
    if(player.is_on_mercante_indovinello = false){

        if(dialog_state_indovinello == 0){

            suggerimento_A_indovinello.visibility.alpha=0;
        }
    }

}
