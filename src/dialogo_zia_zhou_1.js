let img_zia1;
let img_casella_zia_zhou_1;
let img_casella_Zhu_dialogo_zia1;

let img_suggerimento_A_dialogo_zia1;
let img_continua_A_dialogo_zia1;
let img_testo_dialogo1_zia_zhou_apertura;
let img_testo_opzione_dialogo_zia1;
let img_testo_opzione_si_dialogo_zia1;
let img_testo_opzione_no_dialogo_zia1;
let img_testo_risposta_si_dialogo_zia1;
let img_testo_risposta_no_dialogo_zia1;
let img_testo_risposta_finale_dialogo_zia1;

let zia1;
let casella_zia_zhou_1;
let casella_Zhu_dialogo_zia1;

let suggerimento_A_dialogo_zia1;
let testo_dialogo1_zia_zhou_apertura;
let testo_opzione_dialogo_zia1;
let testo_opzione_si_dialogo_zia1;
let testo_opzione_no_dialogo_zia1;
let testo_risposta_no_dialogo_zia1;
let testo_risposta_finale_dialogo_zia1;


function preload_dialogo_zia1(s){
    
    img_zia1 = PP.assets.image.load(s,"assets/images/zia_Zhou.png");
    img_casella_zia_zhou_1 = PP.assets.image.load(s,"assets/images/casella_zia_zhou.png");
    img_casella_Zhu_dialogo_zia1 = PP.assets.image.load(s,"assets/images/casella_zhu.png");

    img_suggerimento_A_dialogo_zia1 = PP.assets.image.load(s,"assets/images/tasto_A.png");

    img_testo_dialogo1_zia_zhou_apertura = PP.assets.image.load(s,"assets/images/testo_dialogo1_zia_zhou_apertura.png");
    img_testo_opzione_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_opzione_dialogo_zia1.png");
    img_testo_opzione_si_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_opzione_si_dialogo_zia1.png");
    img_testo_opzione_no_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_opzione_no_dialogo_zia1.png");
    img_testo_risposta_si_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_risposta_si_dialogo_zia1.png");
    img_testo_risposta_no_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_risposta_no_dialogo_zia1.png");
    img_testo_risposta_finale_dialogo_zia1 = PP.assets.image.load(s,"assets/images/testo_risposta_finale_dialogo_zia1.png");

}

function create_dialogo_zia1(s,player){

    zia1=PP.assets.image.add(s,img_zia1,7900,712,0,0);
    PP.physics.add(s,zia1,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,zia1,overlap_zia1);

    function overlap_zia1(s,player,zia1){
        player.is_on_zia1=true;
    }

    suggerimento_A_dialogo_zia1 = PP.assets.image.add(s,img_suggerimento_A_dialogo_zia1,7900,683,0,0);
    suggerimento_A_dialogo_zia1.visibility.alpha = 0;

    casella_zia_zhou_1 = PP.assets.image.add(s,img_casella_zia_zhou_1,6800,842,0,0);
    casella_zia_zhou_1.visibility.alpha=0;

    casella_Zhu_dialogo_zia1=PP.assets.image.add(s,img_casella_Zhu,6800,842,0,0);
    casella_Zhu_dialogo_zia1.visibility.alpha=0;

    testo_dialogo1_zia_zhou_apertura = PP.assets.image.add(s,img_testo_dialogo1_zia_zhou_apertura,7500,893,0,0);
    testo_dialogo1_zia_zhou_apertura.visibility.alpha = 0;
    testo_opzione_dialogo_zia1 = PP.assets.image.add(s,img_testo_opzione_dialogo_zia1,7500,893,0,0);
    testo_opzione_dialogo_zia1.visibility.alpha = 0;
    testo_opzione_si_dialogo_zia1 = PP.assets.image.add(s,img_testo_opzione_si_dialogo_zia1,7500,893,0,0);
    testo_opzione_si_dialogo_zia1.visibility.alpha = 0;
    testo_opzione_no_dialogo_zia1 = PP.assets.image.add(s,img_testo_opzione_no_dialogo_zia1,7500,893,0,0);
    testo_opzione_no_dialogo_zia1.visibility.alpha = 0;
    testo_risposta_si_dialogo_zia1 = PP.assets.image.add(s,img_testo_risposta_si_dialogo_zia1,7500,893,0,0);
    testo_risposta_si_dialogo_zia1.visibility.alpha = 0;
    testo_risposta_no_dialogo_zia1 = PP.assets.image.add(s,img_testo_risposta_no_dialogo_zia1,7500,893,0,0);
    testo_risposta_no_dialogo_zia1.visibility.alpha = 0;
    testo_risposta_finale_dialogo_zia1 = PP.assets.image.add(s,img_testo_risposta_finale_dialogo_zia1,7500,893,0,0);
    testo_risposta_finale_dialogo_zia1.visibility.alpha = 0;

}

let dialog_state_zia1 = 0;
let already_pass = false;
let enable_dialogo_zia1_A = true;

let enable_Zhu_dialogo_zia1_S=true;

function update_dialogo_zia1(s, player){

    if(player.is_on_zia1==true){

        if(dialog_state_zia1 == 0){

            suggerimento_A_dialogo_zia1.visibility.alpha=1;
        }
        
        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_dialogo_zia1_A=true;
        }

        if(enable_dialogo_zia1_A){
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_zia1 == 0 && already_pass){
                //hai gia comprato stupid.
                console.log("player is talking");
                console.log("state:",dialog_state1);

                suggerimento_A_dialogo_zia1.visibility.alpha=0;

                casella_zia_zhou_1.visibility.alpha=1;
                testo_risposta_finale_dialogo_zia1.visibility.alpha=1;

                dialog_state_zia1=6;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
                return;
            }
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_zia1 == 0){
                //zia zhou apertura
                console.log("player is talking");
                console.log("state:",dialog_state1);

                suggerimento_A_dialogo_zia1.visibility.alpha=0;

                casella_zia_zhou_1.visibility.alpha=1;
                testo_dialogo1_zia_zhou_apertura.visibility.alpha=1;

                dialog_state_zia1=1;
                player_speed=0;
                jump_init_speed=0;
                enable_dialogo_zia1_A=false;
            }
            else if(dialog_state_zia1==1 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //opzione si compro o no non compro
                console.log("primo dialogo");
                console.log("state:",dialog_state1);

                casella_zia_zhou_1.visibility.alpha=0;
                testo_dialogo1_zia_zhou_apertura.visibility.alpha=0;

                casella_Zhu_dialogo_zia1.visibility.alpha=1;
                testo_opzione_dialogo_zia1.visibility.alpha=1;
            
                dialog_state_zia1=2;
                player_speed=0;
                jump_init_speed=0;
                enable_dialogo_zia1_A=false;
            }

            if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){
                //attivo tasto S
                enable_Zhu_dialogo_zia1_S=true;
            }
            
            //entro if enable_Zhu_S se true e dialogo state==2
            if(enable_Zhu_dialogo_zia1_S && dialog_state_zia1 == 2){
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){
                    //schiaccio S, voglio passare al livello sucessivo

                    testo_opzione_dialogo_zia1.visibility.alpha=0;
                    testo_opzione_si_dialogo_zia1.visibility.alpha=1;
                    
                    dialog_state_zia1=3;
                    player_speed=0;
                    jump_init_speed=0;
                    enable_Zhu_dialogo_zia1_S=false;
                    enable_dialogo_zia1_A=false;

                }
                else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){
                    //Schiaccio D, no continuo a raccogliere
                    testo_opzione_dialogo_zia1.visibility.alpha=0;
                    testo_opzione_no_dialogo_zia1.visibility.alpha=1;

                    dialog_state_zia1=4;
                    player_speed=0;
                    jump_init_speed=0;
                    enable_Zhu_dialogo_zia1_S=false;
                    enable_dialogo_zia1_A=false;
                }
            }

           if(dialog_state_zia1==3 && !already_pass){
                //Compro, e non ho ancora comprato
                testo_opzione_si_dialogo_zia1.visibility.alpha=0;
                casella_Zhu_dialogo_zia1.visibility.alpha=0;

                casella_zia_zhou_1.visibility.alpha = 1;
                testo_risposta_si_dialogo_zia1.visibility.alpha = 1;
                
                //chiude comunque tutto
                dialog_state_zia1=5;
                player_speed=0;
                jump_init_speed=0;
                already_pass=true;
                player.is_on_zia1=false;
                enable_dialogo_zia1_A=false;
            }
            else if(dialog_state_zia1 == 4){

                testo_opzione_no_dialogo_zia1.visibility.alpha=0;
                casella_Zhu_dialogo_zia1.visibility.alpha=0;

                casella_zia_zhou_1.visibility.alpha=1;
                testo_risposta_no_dialogo_zia1.visibility.alpha = 1;

                dialog_state_zia1=5;
                player_speed=0;
                jump_init_speed=0;
                player.is_on_zia1=false;
                enable_dialogo_zia1_A=false;
            }
            else if(dialog_state_zia1 == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //non compro, e chiudo tutto, e si ricomincia quindi dialog state 0
                casella_zia_zhou_1.visibility.alpha = 0;
                testo_risposta_si_dialogo_zia1.visibility.alpha = 0;
                testo_risposta_no_dialogo_zia1.visibility.alpha = 0;

                dialog_state_zia1=0;
                player_speed=250;
                jump_init_speed=200;
                player.is_on_zia1=false;
                enable_dialogo_zia1_A=false;
            }
            else if(dialog_state_zia1 == 6 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                casella_zia_zhou_1.visibility.alpha=0;
                testo_risposta_finale_dialogo_zia1.visibility.alpha=0;

                dialog_state_zia1=0;
                player_speed=250;
                jump_init_speed=200;
                player.is_on_zia1=false;
                enable_dialogo_zia1_A=false;
            }
        }
    }

    else if(player.is_on_zia1 == false){

        suggerimento_A_dialogo_zia1.visibility.alpha=0;
    }
    
    if(player.is_on_zia1 = false){

        if(dialog_state_zia1==0){
            suggerimento_A_dialogo_zia1.visibility.alpha=0;
        }
    }
}
