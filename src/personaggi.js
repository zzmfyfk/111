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
    dialogo_2 = PP.shapes.rectangle_add(s, 1000, 1100, 400, 50, "0x000000", 1);
    dialogo_2.visibility.alpha=0;


}




function update_personaggi(s, player) {
    // In caso di collisione procedo come segue:
    if (player.is_on_mercante == true) {
        //compare box con ... o ? che fa capire che il personaggio potrebbe parlare
        if(! player.dialogo_iniziato) { //indiga che il dialogo non è ancora iniziato - il player deve ancora premere A per farlo iniziare
            domande.visibility.alpha =1;
        }
    

        //se il giocatore preme A inizia il dialogo
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.A) && ! player.dialogo_iniziato) {
            player.dialogo_iniziato = true;
            
            console.log("player is talking");

            domande.visibility.alpha = 0; //annullo la visibilità del primo box domande, per poi aggiungere il rettangolo del dialogo
            
            dialogo = PP.shapes.rectangle_add(s, 1000, 1100, 400, 50, "0x000000", 0); //appare primo rettangolo di diALOGO
            //player.is_talking = true;
            PP.physics.add(s, dialogo, PP.physics.type.STATIC);


        }

        if (player.dialogo_iniziato== true && PP.interactive.kb.is_key_down(s, PP.key_codes.B)) { //appare secondo rettangolo di dialogo
            console.log
            dialogo_2.visibility.alpha=1;
            player.dialogo_finito = true;


        }
       
        if (player.dialogo_finito== true && PP.interactive.kb.is_key_down(s, PP.key_codes.C)) { //
            
            console.log("fine dialogo")
            dialogo_2.visibility.alpha=0;
            
            
            player.is_on_mercante = false;

        }
        if (player.is_on_mercante == false) {
            //compare box con ... o ? che fa capire che il personaggio potrebbe parlare
            //indiga che il dialogo non è ancora iniziato - il player deve ancora premere A per farlo iniziare
                domande.visibility.alpha =0;
            }
        

      
    }
}