//Pagina dedicata ai personaggi e ai dialoghi che avvengono tra player-personaggi
let mercante;
let domande;
let scelta;
let player;

function preload_personaggi(s) {

}


function create_personaggi(s, player) {

    mercante = PP.shapes.rectangle_add(s, 1000, 900, 50, 100, "0x000000", 0);
    PP.physics.add(s, mercante, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, mercante, overlap_mercante);
    function overlap_mercante(s, player, scala_1) {
        player.is_on_mercante = true;
    }
    
    //creo il box domande che indica che il personaggio vuole parlare e gli tolgo subito la visibilità, per poi gestirla successivamente in update
    domande = PP.shapes.rectangle_add(s, 1000, 800, 50, 50, "0x000000", 1);
    domande.visibility.alpha = 0;
    dialogo_1 = PP.shapes.rectangle_add(s, 1000, 1100, 400, 50, "0xFFFFFF", 1); //appare primo rettangolo di diALOGO
    dialogo_1.visibility.alpha=0;
    dialogo_2 = PP.shapes.rectangle_add(s, 1000, 1100, 400, 50, "0x000000", 1);
    dialogo_2.visibility.alpha=0;


}

let dialog_state = 0;
let enable_A = true;

function update_personaggi(s, player) {
    // In caso di collisione procedo come segue:
    if (player.is_on_mercante == true) {
        //compare box con ... o ? che fa capire che il personaggio potrebbe parlare
        if( dialog_state == 0 ) { //indiga che il dialogo non è ancora iniziato - il player deve ancora premere A per farlo iniziare
            domande.visibility.alpha =1;
        
        }

        if (PP.interactive.kb.is_key_up(s, PP.key_codes.A)) {
            enable_A = true;
        }

        if(enable_A) {
            //se il giocatore preme A inizia il dialogo
            if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && dialog_state == 0) {
                console.log("player is talking");
                console.log("state:", dialog_state);

                domande.visibility.alpha = 0; //annullo la visibilità del primo box domande, per poi aggiungere il rettangolo del dialogo
                dialogo_1.visibility.alpha=1;
                dialog_state = 1;
                player_speed =0 ;
                jump_init_speed = 0;
                enable_A = false;        
            }

            else if (dialog_state == 1 && PP.interactive.kb.is_key_down(s, PP.key_codes.A)) { //appare secondo rettangolo di dialogo
                console.log("second if");
                console.log("state:", dialog_state);

                dialogo_2.visibility.alpha=1;
                dialog_state = 2;
                player_speed =0 ; //blocco il giocatore
                jump_init_speed = 0;
                enable_A = false;        
            }
        
            else if (dialog_state == 2 && PP.interactive.kb.is_key_down(s, PP.key_codes.A)) { //
                
                console.log("fine dialogo");
                console.log("state:", dialog_state)

                dialogo_2.visibility.alpha=0;
                dialogo_1.visibility.alpha=0;
                
                dialog_state = 0;
                player.is_on_mercante = false;
                player_speed =250 ; //faccio ripartire il mercante
                jump_init_speed = 200;
                enable_A = false;        
            }

        }
    }

    else if (player.is_on_mercante == false) {
        //compare box con ... o ? che fa capire che il personaggio potrebbe parlare
        //indiga che il dialogo non è ancora iniziato - il player deve ancora premere A per farlo iniziare
            domande.visibility.alpha =0;
        }

        if (player.is_on_mercante = false) { //per far scomparire il box domande quando il giocatore non è più sul mercante
            //compare box con ... o ? che fa capire che il personaggio potrebbe parlare
            if( dialog_state == 0 ) { //indiga che il dialogo non è ancora iniziato - il player deve ancora premere A per farlo iniziare
                domande.visibility.alpha =0;
                
            }
        }

       
}