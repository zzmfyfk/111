let img_zia2;
let img_casella_zia2;
let img_suggerimento_A_dialogo_zia2;
let img_testo_apertura1_finale_liang;
let img_testo_apertura2_finale_liang;

let suggerimento_A_dialogo_zia2;
let casella_zia2;
let zia2;
let testo_apertura1_finale_liang;
let testo_apertura2_finale_liang;

function preload_dialogo_zia_zhou_2(s){
    
    sprite_ziazhou =PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_ziaZhou.png", 51, 147);

    //img_zia2=PP.assets.image.load(s,"assets/images/zia_Zhou.png");
    img_casella_zia2=PP.assets.image.load(s,"assets/images/casella_zia_zhou.png");
    img_suggerimento_A_dialogo_zia2=PP.assets.image.load(s,"assets/images/tasto_A.png");
    img_testo_apertura1_finale_liang = PP.assets.image.load(s,"assets/images/testo_apertura1_finale_liang.png");
    img_testo_apertura2_finale_liang = PP.assets.image.load(s,"assets/images/testo_apertura2_finale_liang.png");

}

function create__dialogo_zia_zhou_2(s,player){

    zia2=PP.assets.sprite.add(s,sprite_ziazhou,1170,1245,0,0);
    zia2.geometry.flip_x = true;
    PP.physics.add(s,zia2,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,zia2,overlap_zia2);
    PP.assets.sprite.animation_add(zia2, "moving", 0, 1, 1, -1);
    PP.assets.sprite.animation_play(zia2, "moving");


    function overlap_zia2(s,player,zia2){
        player.is_on_zia2=true;
    }

    suggerimento_A_dialogo_zia2 = PP.assets.image.add(s,img_suggerimento_A_dialogo_zia2,1182,1200,0,0);
    suggerimento_A_dialogo_zia2.visibility.alpha = 0;

    casella_zia2=PP.assets.image.add(s,img_casella_zia2,312,1370,0,0);
    casella_zia2.visibility.alpha=0;
    testo_apertura1_finale_liang = PP.assets.image.add(s,img_testo_apertura1_finale_liang,1070,1415,0,0);
    testo_apertura1_finale_liang.visibility.alpha=0;
    testo_apertura2_finale_liang = PP.assets.image.add(s,img_testo_apertura2_finale_liang,1070,1415,0,0);
    testo_apertura2_finale_liang.visibility.alpha=0;

}

let dialog_state_zia2 = 0;
let enable_A_zia2= true;

function update_dialogo_zia_zhou_2(s, player){

    if(player.is_on_zia2==true){

        if(dialog_state_zia2==0){

            suggerimento_A_dialogo_zia2.visibility.alpha=1;
        }

        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_A_zia2=true;
        }

        if(enable_A_zia2){

            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state_zia2==0){

                console.log("player is talking");
                console.log("state:",dialog_state);

                suggerimento_A_dialogo_zia2.visibility.alpha=0;
                casella_zia2.visibility.alpha=1;
                testo_apertura1_finale_liang.visibility.alpha=1;

                dialog_state_zia2=1;
                player_speed=0;
                jump_init_speed=0;
                enable_A_zia2=false;
            }
            else if(dialog_state_zia2==1&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                console.log("fine dialogo");
                console.log("state:",dialog_state);

                testo_apertura1_finale_liang.visibility.alpha=0;
                testo_apertura2_finale_liang.visibility.alpha=1;

                dialog_state_zia2=2;
                player_speed=0;
                jump_init_speed=0;
                enable_A_zia2=false;
            }
            else if(dialog_state_zia2==2&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                casella_zia2.visibility.alpha=0;
                testo_apertura2_finale_liang.visibility.alpha=0;

                player.is_on_genitori=false;
                dialog_state_zia2=0;
                player_speed=250;
                jump_init_speed=200;
                enable_A_zia2=false;
            }
            
        }
    }

    else if(player.is_on_zia2==false){

        suggerimento_A_dialogo_zia2.visibility.alpha=0;
    }
    
    if(player.is_on_zia2=false){

        if(dialog_state_zia2==0){
            suggerimento_A_dialogo_zia2.visibility.alpha=0;
        }
    }
}
//有个bug，就是如果我按了一次a然后离开之后不用靠近还可以按a进行对话
