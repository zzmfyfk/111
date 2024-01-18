let tavola_2
let freccia_successivo;
let freccia_precedente;
let img_freccia_successivo;
let img_freccia_precedente;


function preload(s) {
    tavola_2 = PP.assets.image.load(s, "assets/images/tavola2.png");
    img_freccia_successivo= PP.assets.image.load(s, "assets/images/freccia_destra.png");
    img_freccia_precedente= PP.assets.image.load(s, "assets/images/freccia_sinistra.png");
   
}

function create(s) {

    
    PP.assets.tilesprite.add(s, tavola_2, 0, 0, 0, 0, 0, 0);

    //CREO TASTO PER PASSARE A TAVOLA SUCCESIVA

freccia_successivo = PP.assets.image.add(s, img_freccia_successivo, 80, 20, 0, 0);


PP.interactive.mouse.add(freccia_successivo, "pointerdown", down_freccia_successivo);
PP.interactive.mouse.add(freccia_successivo, "pointerover", over_freccia_successivo);
PP.interactive.mouse.add(freccia_successivo, "pointerout", out_freccia_successivo);

    //CREO TASTO PER PASSARE A TAVOLA PRECEDENTE

    freccia_precedente = PP.assets.image.add(s, img_freccia_precedente, 20, 20, 0, 0);
    
    
    PP.interactive.mouse.add(freccia_precedente, "pointerdown", down_freccia_precedente);
    PP.interactive.mouse.add(freccia_precedente, "pointerover", over_freccia_precedente);
    PP.interactive.mouse.add(freccia_precedente, "pointerout", out_freccia_precedente);
        

}
function down_freccia_successivo(s) {
    PP.scenes.start("tavola3");
}

function over_freccia_successivo(s) {

    freccia_successivo.geometry.scale_x = 1.3;
    freccia_successivo.geometry.scale_y = 1.3;
}

function out_freccia_successivo(s) {

    freccia_successivo.geometry.scale_x = 1;
    freccia_successivo.geometry.scale_y = 1;
}

function down_freccia_precedente(s) {
    PP.scenes.start("tavola1");
}

function over_freccia_precedente(s) {

    freccia_precedente.geometry.scale_x = 1.3;
    freccia_precedente.geometry.scale_y = 1.3;
}

function out_freccia_precedente(s) {

    freccia_precedente.geometry.scale_x = 1;
    freccia_precedente.geometry.scale_y = 1;
}



function update(s) {
   //premendo le freccie ci si può muovere di tavola in tavola
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.scenes.start("tavola3");
    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        
            PP.scenes.start("tavola3");
            
        }else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.scenes.start("tavola1");
        
    }
   
    
}

function destroy(s) {

}

PP.scenes.add("tavola2", preload, create, update, destroy);