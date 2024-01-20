let img_zia3;
let img_casella_zia3;
let img_suggerimento_A_dialogo_zia3;
let img_testo_apertura1_finale_farfalla;
let img_testo_apertura2_finale_farfalla;

let suggerimento_A_dialogo_zia3;
let casella_zia3;
let zia3;
let testo_apertura1_finale_farfalla;
let testo_apertura2_finale_farfalla;

function preload_dialogo_zia_zhou_3(s){
    sprite_ziazhou =PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_ziaZhou.png", 51, 147);
   // img_zia3=PP.assets.image.load(s,"assets/images/zia_Zhou.png");
    img_casella_zia3=PP.assets.image.load(s,"assets/images/casella_zia_zhou.png");
    img_suggerimento_A_dialogo_zia3=PP.assets.image.load(s,"assets/images/tasto_A.png");
    img_testo_apertura1_finale_farfalla = PP.assets.image.load(s,"assets/images/testo_apertura1_finale_farfalla.png");
    img_testo_apertura2_finale_farfalla = PP.assets.image.load(s,"assets/images/testo_apertura2_finale_farfalla.png");

}

function create__dialogo_zia_zhou_3(s,player){

    zia3=PP.assets.sprite.add(s,sprite_ziazhou,1170,1245,0,0);
    zia3.geometry.flip_x = true;
    PP.physics.add(s,zia3,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,zia3,overlap_zia3);
    PP.assets.sprite.animation_add(zia3, "moving", 0, 1, 1, -1);
    PP.assets.sprite.animation_play(zia3, "moving");


    function overlap_zia3(s,player,zia3){
        player.is_on_zia3=true;
    }

    suggerimento_A_dialogo_zia3 = PP.assets.image.add(s,img_suggerimento_A_dialogo_zia3,1182,1200,0,0);
    suggerimento_A_dialogo_zia3.visibility.alpha = 0;

    casella_zia3=PP.assets.image.add(s,img_casella_zia3,312,1370,0,0);
    casella_zia3.visibility.alpha=0;
    testo_apertura1_finale_farfalla = PP.assets.image.add(s,img_testo_apertura1_finale_farfalla,1070,1415,0,0);
    testo_apertura1_finale_farfalla.visibility.alpha=0;
    testo_apertura2_finale_farfalla = PP.assets.image.add(s,img_testo_apertura2_finale_farfalla,1070,1415,0,0);
    testo_apertura2_finale_farfalla.visibility.alpha=0;

}

let dialog_state_zia3 = 0;
let enable_A_zia3= true;

function update_dialogo_zia_zhou_3(s, player){

    if(player.is_on_zia3==true){

        if(dialog_state_zia3==0){

            suggerimento_A_dialogo_zia3.visibility.alpha=1;
        }

        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_A_zia3=true;
        }

        if(enable_A_zia3){

            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_zia3==0){

                console.log("player is talking");
                console.log("state:",dialog_state);

                suggerimento_A_dialogo_zia3.visibility.alpha=0;
                casella_zia3.visibility.alpha=1;
                testo_apertura1_finale_farfalla.visibility.alpha=1;

                dialog_state_zia3=1;
                player_speed=0;
                jump_init_speed=0;
                enable_A_zia3=false;
            }
            else if(dialog_state_zia3==1&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                console.log("fine dialogo");
                console.log("state:",dialog_state);

                testo_apertura1_finale_farfalla.visibility.alpha=0;
                testo_apertura2_finale_farfalla.visibility.alpha=1;

                dialog_state_zia3=2;
                player_speed=0;
                jump_init_speed=0;
                enable_A_zia3=false;
            }
            else if(dialog_state_zia3==2 && PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                casella_zia3.visibility.alpha=0;
                testo_apertura2_finale_farfalla.visibility.alpha=0;

                player.is_on_genitori=false;
                dialog_state_zia3=0;
                player_speed=250;
                jump_init_speed=200;
                enable_A_zia3=false;
            }
            
        }
    }

    else if(player.is_on_zia3==false){

        suggerimento_A_dialogo_zia3.visibility.alpha=0;
    }
    
    if(player.is_on_zia3=false){

        if(dialog_state_zia3==0){
            suggerimento_A_dialogo_zia3.visibility.alpha=0;
        }
    }
}
//有个bug，就是如果我按了一次a然后离开之后不用靠近还可以按a进行对话
