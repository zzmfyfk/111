let img_zia_zhou;
let img_casella_zia_zhou_1;
let img_casella_Zhu_dialogo_zia1;

let img_suggerimento_A_dialogo_zia1;
let img_testo1_mercante;
let img_testo2_mercante;
let img_testo3_mercante;
let img_continua_A_dialogo2;
let img_opzione_original_Zhu;
let img_opzione_si_Zhu;
let img_opzione_no_Zhu;



let continua_A_dialogo2;
let casella_mercante;
let casella_Zhu;

let testo1_mercante;
let testo2_mercante;
let testo3_mercante;
let opzione_original_Zhu;
let opzione_si_Zhu;
let opzione_no_Zhu;


let suggerimento_A_dialogo2;
let mercante;
let ponte_ricostruito;
let piattaforma_ponte;

function preload_dialogo2(s){
    
    img_mercante = PP.assets.image.load(s,"assets/images/mercante.png");
    img_casella_mercante = PP.assets.image.load(s,"assets/images/casella_mercante.png");
    img_casella_Zhu = PP.assets.image.load(s,"assets/images/casella_zhu.png");

    img_suggerimento_A_dialogo2 = PP.assets.image.load(s,"assets/images/tasto_A.png");
    img_continua_A_dialogo2 = PP.assets.image.load(s,"assets/images/continua_A.png");

    img_testo1_mercante = PP.assets.image.load(s,"assets/images/testo1_mercante.png");
    img_testo2_mercante = PP.assets.image.load(s,"assets/images/testo2_mercante.png");
    img_testo3_mercante = PP.assets.image.load(s,"assets/images/testo3_mercante.png");

    img_opzione_original_Zhu = PP.assets.image.load(s,"assets/images/opzione_original_Zhu.png");
    img_opzione_si_Zhu = PP.assets.image.load(s,"assets/images/opzione_si_Zhu.png");
    img_opzione_no_Zhu = PP.assets.image.load(s,"assets/images/opzione_no_Zhu.png");
    img_ponte_ricostruito=PP.assets.image.load(s,"assets/images/ponte_ricostruito.png");
}

function create_dialogo2(s,player){

    mercante=PP.assets.image.add(s,img_mercante,6200,970,0,0);
    PP.physics.add(s,mercante,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,mercante,overlap_mercante);

    function overlap_mercante(s,player_mercante,mercante){
        player.is_on_mercante=true;
    }

    suggerimento_A_dialogo2 = PP.assets.image.add(s,img_suggerimento_A_dialogo2,6230,950,0,0);
    suggerimento_A_dialogo2.visibility.alpha = 0;

    casella_mercante=PP.assets.image.add(s,img_casella_mercante,5208,1100,0,0);
    casella_mercante.visibility.alpha=0;

    casella_Zhu=PP.assets.image.add(s,img_casella_Zhu,5208,1100,0,0);
    casella_Zhu.visibility.alpha=0;

    continua_A_dialogo2=PP.assets.image.add(s,img_continua_A_dialogo2,6600,1200,0,0);
    continua_A_dialogo2.visibility.alpha=0;

    testo1_mercante=PP.assets.image.add(s,img_testo1_mercante,5990,1148,0,0);
    testo1_mercante.visibility.alpha=0;
    testo2_mercante=PP.assets.image.add(s,img_testo2_mercante,5990,1148,0,0);
    testo2_mercante.visibility.alpha=0;
    testo3_mercante=PP.assets.image.add(s,img_testo3_mercante,5990,1148,0,0);
    testo3_mercante.visibility.alpha=0;


    opzione_original_Zhu=PP.assets.image.add(s,img_opzione_original_Zhu,5990,1148,0,0);
    opzione_original_Zhu.visibility.alpha=0;
    opzione_si_Zhu=PP.assets.image.add(s,img_opzione_si_Zhu,5990,1148,0,0);
    opzione_si_Zhu.visibility.alpha=0;
    opzione_no_Zhu=PP.assets.image.add(s,img_opzione_no_Zhu,5990,1148,0,0);
    opzione_no_Zhu.visibility.alpha=0;

    ponte_ricostruito=PP.assets.image.add(s,img_ponte_ricostruito,0,0,0,0);
    ponte_ricostruito.visibility.alpha=0;
    let layer_ponte_ricostruito = PP.layers.create(s);
            PP.layers.add_to_layer(layer_ponte_ricostruito, ponte_ricostruito);
            PP.layers.set_z_index(layer_ponte_ricostruito, 2);

}

let dialog_state1 = 0;
let already_buy=false;
let enable_mercante_A = true;

let enable_Zhu_S=true;



function update_dialogo2(s, player){

    if(player.is_on_mercante==true){

        if(dialog_state1==0){

            suggerimento_A_dialogo2.visibility.alpha=1;
        }
        
        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_mercante_A=true;
        }

        if(enable_mercante_A){
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state1 == 0 && already_buy){
                //hai gia comprato stupid.
                console.log("player is talking");
                console.log("state:",dialog_state1);

                suggerimento_A_dialogo2.visibility.alpha=0;

                casella_mercante.visibility.alpha=1;

                continua_A_dialogo2.visibility.alpha=1;
                testo3_mercante.visibility.alpha=1;

                dialog_state1=5;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
                return;
            }
            
            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state1==0){
                //benvenuta, sono il mercante locale
                console.log("player is talking");
                console.log("state:",dialog_state1);

                suggerimento_A_dialogo2.visibility.alpha=0;

                casella_mercante.visibility.alpha=1;
                continua_A_dialogo2.visibility.alpha=1;
                testo1_mercante.visibility.alpha=1;

                dialog_state1=1;
                player_speed=0;
                jump_init_speed=0;
                enable_mercante_A=false;
            }
            else if(dialog_state1==1&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //opzione si compro o no non compro
                console.log("primo dialogo");
                console.log("state:",dialog_state1);

                casella_mercante.visibility.alpha=0;
                testo1_mercante.visibility.alpha=0;
                continua_A_dialogo2.visibility.alpha=0;

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
                //attivo tasto S
                enable_Zhu_S=true;
            }
            
            //entro if enable_Zhu_S se true e dialogo state==2
            if(enable_Zhu_S && dialog_state1 == 2){
                if(PP.interactive.kb.is_key_down(s,PP.key_codes.S)){
                    //schiaccio S, si compro
                    opzione_original_Zhu.visibility.alpha=0;
                    opzione_si_Zhu.visibility.alpha=1;
                    
                    ponte_ricostruito.visibility.alpha=1;
                    piattaforma_ponte =  PP.shapes.rectangle_add(s, 7550,  861, 400, 0, "0x000000", 1);
                    PP.physics.add(s, piattaforma_ponte, PP.physics.type.STATIC); 
                    PP.physics.add_collider_f(s, player, piattaforma_ponte, collision_floor);
                    
                    dialog_state1=3;
                    player_speed=0;
                    jump_init_speed=0;
                    enable_mercante_A=false;
                    enable_Zhu_S=false;
                }
                else if(PP.interactive.kb.is_key_down(s,PP.key_codes.D)){
                    //Schiaccio D, No non compro
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
                //Compro, e non ho ancora comprato
                opzione_si_Zhu.visibility.alpha=0;
                casella_Zhu.visibility.alpha=0;
                casella_mercante.visibility.alpha=1;
                testo2_mercante.visibility.alpha=1;
                
                //chiude comunque tutto
                dialog_state1=5;
                player_speed=0;
                jump_init_speed=0;
                already_buy=true;
                player.is_on_mercante=false;
                enable_mercante_A=false;
            }
            else if(dialog_state1 == 5 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){
                //non compro, e chiudo tutto, e si ricomincia quindi dialog state 0
                testo2_mercante.visibility.alpha=0;
                casella_mercante.visibility.alpha=0;
                casella_Zhu.visibility.alpha=0;

                continua_A_dialogo2.visibility.alpha=0;
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

        suggerimento_A_dialogo2.visibility.alpha=0;
    }
    
    if(player.is_on_mercante=false){

        if(dialog_state1==0){
            suggerimento_A_dialogo2.visibility.alpha=0;
        }
    }

    function collision_floor(s,player,floor) {
        player.is_on_platform = true;
    }
}
