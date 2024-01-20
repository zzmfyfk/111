let img_genitori;
let img_casella_genitori;
let img_suggerimento_A_dialogo1;
let img_testo_genitori;

let suggerimento_A_dialogo1;
let casella_genitori;
let testo_genitori;
let genitori;

function preload_dialogo1(s){
    
    img_genitori=PP.assets.image.load(s,"assets/images/genitori.png");
    img_casella_genitori=PP.assets.image.load(s,"assets/images/casella_genitori.png");
    img_suggerimento_A_dialogo1=PP.assets.image.load(s,"assets/images/tasto_A.png");
    img_testo_genitori=PP.assets.image.load(s,"assets/images/testo_genitori.png");

}

function create_dialogo1(s,player){

    genitori=PP.assets.image.add(s,img_genitori,790,809,0,0);
    PP.physics.add(s,genitori,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,genitori,overlap_genitori);

    function overlap_genitori(s,player,genitori){
        player.is_on_genitori=true;
    }

    suggerimento_A_dialogo1 = PP.assets.image.add(s,img_suggerimento_A_dialogo1,828,785,0,0);
    suggerimento_A_dialogo1.visibility.alpha = 0;

    casella_genitori=PP.assets.image.add(s,img_casella_genitori,-100,939,0,0);
    casella_genitori.visibility.alpha=0;
    testo_genitori=PP.assets.image.add(s,img_testo_genitori,690,985,0,0);
    testo_genitori.visibility.alpha=0;

}

let dialog_state = 0;
let enable_A = true;

function update_dialogo1(s, player){

    if(player.is_on_genitori==true){

        if(dialog_state==0){

            suggerimento_A_dialogo1.visibility.alpha=1;
        }

        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_A=true;
        }

        if(enable_A){

            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state==0){

                console.log("player is talking");
                console.log("state:",dialog_state);

                suggerimento_A_dialogo1.visibility.alpha=0;
                casella_genitori.visibility.alpha=1;
                testo_genitori.visibility.alpha=1;

                dialog_state=1;
                player_speed=0;
                jump_init_speed=0;
                enable_A=false;
            }
            else if(dialog_state==1&&PP.interactive.kb.is_key_down(s,PP.key_codes.A)){

                console.log("fine dialogo");
                console.log("state:",dialog_state);

                casella_genitori.visibility.alpha=0;
                testo_genitori.visibility.alpha=0;

                dialog_state=0;
                player.is_on_genitori=false;
                player_speed=250;
                jump_init_speed=200;
                enable_A=false;
            }
        }
    }

    else if(player.is_on_genitori==false){

        suggerimento_A_dialogo1.visibility.alpha=0;
    }
    
    if(player.is_on_genitori=false){

        if(dialog_state==0){
            suggerimento_A_dialogo1.visibility.alpha=0;
        }
    }
}
//有个bug，就是如果我按了一次a然后离开之后不用靠近还可以按a进行对话
