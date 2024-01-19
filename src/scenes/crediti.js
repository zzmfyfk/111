let tavola_crediti
let img_home;
//let tasto_rigioca;
let tasto_home;
//let img_rigioca;



function preload(s) {
    tavola_crediti = PP.assets.image.load(s, "assets/images/pagina_crediti.png");
    img_home = PP.assets.image.load(s, "assets/images/tasto_home.png");
   // img_rigioca = PP.assets.image.load(s, "assets/images/tasto_rigioca.png");
}

function create(s) {

    // una volta scaduto il tempo, esce la tavola
    //per ora è solo uno schizzo
    PP.assets.tilesprite.add(s, tavola_crediti, 0, 0, 0, 0, 0, 0);
    

        tasto_home= PP.assets.image.add(s, img_home,20, 20, 0, 0);
        

        
        PP.interactive.mouse.add(tasto_home, "pointerdown", home);
        PP.interactive.mouse.add(tasto_home, "pointerover", over_home);
        PP.interactive.mouse.add(tasto_home, "pointerout", out_home);

        

}


function home(s) {
    PP.scenes.start("copertina");
}
function over_home(s) {
    
    tasto_home.geometry.scale_x=1.3;
    tasto_home.geometry.scale_y=1.3;   
    }
    
 function out_home(s) {
    
        tasto_home.geometry.scale_x=1;
        tasto_home.geometry.scale_y=1;   
        }

function update(s) {
    //premendo space, si torna alla copertina
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        //PP.scenes.start("copertina");
        window.location.href = 'index.html';
          // Versione livello 2 con Liang
        
    }
    

}

function destroy(s) {

}

PP.scenes.add("crediti", preload, create, update, destroy);