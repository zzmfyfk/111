let img_genitori;
let img_casella_genitori;
let img_domande;
let img_testo_genitori;

let domande;
let casella_genitori;
let testo_genitori;
let genitori;

function preload_dialogo1(s){
    
    img_genitori=PP.assets.image.load(s,"assets/images/genitori.png");
    img_casella_genitori=PP.assets.image.load(s,"assets/images/casella_genitori.png");
    img_domande=PP.assets.image.load(s,"assets/images/domande.png");
    img_testo_genitori=PP.assets.image.load(s,"assets/images/testo_genitori.png");

}

function create_dialogo1(s,player){

    genitori=PP.assets.image.add(s,img_genitori,1200,809,0,0);
    PP.physics.add(s,genitori,PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s,player,genitori,overlap_genitori);

    function overlap_genitori(s,player,genitori){
        player.is_on_genitori=true;
    }

    domande = PP.assets.image.add(s,img_domande,1233,790,0,0);
    domande.visibility.alpha = 0;

    casella_genitori=PP.assets.image.add(s,img_casella_genitori,200,980,0,0);
    casella_genitori.visibility.alpha=0;
    testo_genitori=PP.assets.image.add(s,img_testo_genitori,1000,1010,0,0);
    testo_genitori.visibility.alpha=0;

}

let dialog_state = 0;
let enable_A = true;

function update_dialogo1(s, player){

    if(player.is_on_genitori==true){

        if(dialog_state==0){

            domande.visibility.alpha=1;
        }

        if(PP.interactive.kb.is_key_up(s,PP.key_codes.A)){

            enable_A=true;
        }

        if(enable_A){

            if(PP.interactive.kb.is_key_down(s,PP.key_codes.A) && dialog_state==0){

                console.log("player is talking");
                console.log("state:",dialog_state);

                domande.visibility.alpha=0;
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

        domande.visibility.alpha=0;
    }
    
    if(player.is_on_genitori=false){

        if(dialog_state==0){
            domande.visibility.alpha=0;
        }
    }
}
//有个bug，就是如果我按了一次a然后离开之后不用靠近还可以按a进行对话