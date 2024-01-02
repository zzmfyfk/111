let img_mercante;
let img_casella_mercante;
let img_casella_Zhu;

let img_domande_mercante;
let img_testo1_mercante;
let img_testo2_mercante;
let img_testo3_mercante;
let img_tasto_A;
let img_opzione_original_Zhu;
let img_opzione_si_Zhu;
let img_opzione_no_Zhu;



let tasto_A;
let casella_mercante;
let casella_Zhu;

let testo1_mercante;
let testo2_mercante;
let testo3_mercante;
let opzione_original_Zhu;
let opzione_si_Zhu;
let opzione_no_Zhu;


let domande_mercante;
let mercante;

function preload_dialogo2(s){
    
    img_mercante = PP.assets.image.load(s,"assets/images/mercante.png");
    img_casella_mercante = PP.assets.image.load(s,"assets/images/casella_mercante.png");
    img_casella_Zhu = PP.assets.image.load(s,"assets/images/casella_zhu.png");

    img_domande_mercante = PP.assets.image.load(s,"assets/images/domande_mercante.png");
    img_tasto_A = PP.assets.image.load(s,"assets/images/tasto_A.png");

    img_testo1_mercante = PP.assets.image.load(s,"assets/images/testo1_mercante.png");
    img_testo2_mercante = PP.assets.image.load(s,"assets/images/testo2_mercante.png");
    img_testo3_mercante = PP.assets.image.load(s,"assets/images/testo3_mercante.png");

    img_opzione_original_Zhu = PP.assets.image.load(s,"assets/images/opzione_original_Zhu.png");
    img_opzione_si_Zhu = PP.assets.image.load(s,"assets/images/opzione_si_Zhu.png");
    img_opzione_no_Zhu = PP.assets.image.load(s,"assets/images/opzione_no_Zhu.png");

}

function create_dialogo2(s,player){

    mercante=PP.assets.image.add(s,img_mercante,1000,810,0,0);
    PP.physics.add(s,mercante,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,mercante,overlap_mercante);

    function overlap_mercante(s,player_mercante,mercante){
        player.is_on_mercante=true;
    }

    domande_mercante = PP.assets.image.add(s,img_domande,1030,790,0,0);
    domande_mercante.visibility.alpha = 0;

    casella_mercante=PP.assets.image.add(s,img_casella_mercante,8,960,0,0);
    casella_mercante.visibility.alpha=0;

    casella_Zhu=PP.assets.image.add(s,img_casella_Zhu,8,960,0,0);
    casella_Zhu.visibility.alpha=0;

    tasto_A=PP.assets.image.add(s,img_tasto_A,1480,1100,0,0);
    tasto_A.visibility.alpha=0;

    testo1_mercante=PP.assets.image.add(s,img_testo1_mercante,790,988,0,0);
    testo1_mercante.visibility.alpha=0;
    testo2_mercante=PP.assets.image.add(s,img_testo2_mercante,790,988,0,0);
    testo2_mercante.visibility.alpha=0;
    testo3_mercante=PP.assets.image.add(s,img_testo3_mercante,790,988,0,0);
    testo3_mercante.visibility.alpha=0;


    opzione_original_Zhu=PP.assets.image.add(s,img_opzione_original_Zhu,790,988,0,0);
    opzione_original_Zhu.visibility.alpha=0;
    opzione_si_Zhu=PP.assets.image.add(s,img_opzione_si_Zhu,790,988,0,0);
    opzione_si_Zhu.visibility.alpha=0;
    opzione_no_Zhu=PP.assets.image.add(s,img_opzione_no_Zhu,790,988,0,0);
    opzione_no_Zhu.visibility.alpha=0;

}

let dialog_state1 = 0;
let already_buy=false;
let enable_mercante_A = true;

let enable_Zhu_S=true;



function update_dialogo2(s, player){

    if(player.is_on_mercante==true){

        if(dialog_state1==0){

            domande_mercante.visibility.alpha=1;
        }
        
        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_mercante_A=true;
        }

        if(enable_mercante_A){
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state1 == 0 && already_buy){
                //hai gia comprato stupid.
                console.log("player is talking");
                console.log("state:",dialog_state1);

                domande_mercante.visibility.alpha=0;

                casella_mercante.visibility.alpha=1;

                tasto_A.visibility.alpha=1;
                testo3_mercante.visibility.alpha=1;

                dialog_state1=5;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
                return;
            }
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state1==0){

                console.log("player is talking");
                console.log("state:",dialog_state1);

                domande_mercante.visibility.alpha=0;

                casella_mercante.visibility.alpha=1;
                tasto_A.visibility.alpha=1;
                testo1_mercante.visibility.alpha=1;

                dialog_state1=1;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
            }
            else if(dialog_state1==1&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                console.log("primo dialogo");
                console.log("state:",dialog_state1);

                casella_mercante.visibility.alpha=0;
                testo1_mercante.visibility.alpha=0;
                tasto_A.visibility.alpha=0;

                casella_Zhu.visibility.alpha=1;
                opzione_original_Zhu.visibility.alpha=1;
            
                dialog_state1=2;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
            }
            /*else if(dialog_state1==2&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                console.log("fine dialogo")
                console.log("state:",dialog_state1);

                casella_zhu.visibility.alpha=0;
                opzione_original_Zhu.visibility.alpha=0;

                dialog_state1=0;
                player_speed=250;
                jump_init_speed=200;
                player.is_on_mercante=false;
                enable_mercante_A=false;
            }*/

            if(PP.interactive.kb.is_key_up(s,PP.key_codes.S)){
                enable_Zhu_S=true;
            }
            

            if(enable_Zhu_S && dialog_state1 == 2){
                if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){

                    opzione_original_Zhu.visibility.alpha=0;
                    opzione_si_Zhu.visibility.alpha=1;

                    dialog_state1=3;
                    player_speed=0;
                    jump_init_speed=0;
                    enable_mercante_A=false;
                    enable_Zhu_S=false;
                }
                else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){

                    opzione_original_Zhu.visibility.alpha=0;
                    opzione_no_Zhu.visibility.alpha=1;

                    dialog_state1=5;
                    player_speed=0;
                    jump_init_speed=0;
                    enable_mercante_A=false;
                    enable_Zhu_S=false;
                }
            }

            if(dialog_state1==3 && !already_buy){

                opzione_si_Zhu.visibility.alpha=0;
                casella_Zhu.visibility.alpha=0;
                casella_mercante.visibility.alpha=1;
                testo2_mercante.visibility.alpha=1;
                
                dialog_state1=5;
                player_speed=0;
                jump_init_speed=0;
                already_buy=true;
                player.is_on_mercante=false;
                enable_mercante_A=false;
            }
            else if(dialog_state1 == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                testo2_mercante.visibility.alpha=0;
                casella_mercante.visibility.alpha=0;
                casella_Zhu.visibility.alpha=0;

                tasto_A.visibility.alpha=0;
                testo3_mercante.visibility.alpha=0;
                opzione_si_Zhu.visibility.alpha=0;
                opzione_no_Zhu.visibility.alpha=0;

                dialog_state1=0;
                player_speed=250;
                jump_init_speed=200;
                player.is_on_mercante=false;
                enable_mercante_A=false;
            }
        }
    }

    else if(player.is_on_mercante==false){

        domande_mercante.visibility.alpha=0;
    }
    
    if(player.is_on_mercante=false){

        if(dialog_state1==0){
            domande_mercante.visibility.alpha=0;
        }
    }
}