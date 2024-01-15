let tavola_finale_negativo
let img_book_icon;
let tasto_rigioca;
let tasto_home;
function preload(s) {
    tavola_finale_negativo = PP.assets.image.load(s, "assets/images/tavola_finale_negativo.png");
    img_book_icon = PP.assets.image.load(s, "assets/images/menu_book_icon.png");
}

function create(s) {

    // una volta scaduto il tempo, esce la tavola
    //per ora è solo uno schizzo
    PP.assets.tilesprite.add(s, tavola_finale_negativo, 0, 0, 0, 0, 0, 0);
    PP.shapes.text_styled_add(s,
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Game Over",
        100,
        "Arial",
        "normal",
        "0x000000",
        null,
        0.5,
        0.5);
    PP.shapes.text_styled_add(s,
        PP.game.config.canvas_width / 9,
        PP.game.config.canvas_height / 5,
        "Schizzo tavola finale negativo",
        30,
        "Arial",
        "normal",
        "0x000000",
        null,
        0.2,
        0.2);

        //creazione di tasti "home" e "rigioca". DA SOSTITUIRE

        tasto_rigioca = PP.assets.image.add(s, img_book_icon,130, 1, 0, 0);
       tasto_home= PP.assets.image.add(s, img_book_icon,0, 0, 0, 0);
        
    
        PP.interactive.mouse.add(tasto_rigioca, "pointerdown", rigioca);
        PP.interactive.mouse.add(tasto_rigioca, "pointerover", over_rigioca);
        PP.interactive.mouse.add(tasto_rigioca, "pointerout", out_rigioca);
        
        PP.interactive.mouse.add(tasto_home, "pointerdown", home);
        PP.interactive.mouse.add(tasto_home, "pointerover", over_home);
        PP.interactive.mouse.add(tasto_home, "pointerout", out_home);

        

}

function rigioca(s) {
    PP.scenes.start("base");
}

function over_rigioca(s) {
    
    tasto_rigioca.geometry.scale_x=1.3;
    tasto_rigioca.geometry.scale_y=1.3;   
    }
    
 function out_rigioca(s) {
    
        tasto_rigioca.geometry.scale_x=1;
        tasto_rigioca.geometry.scale_y=1;   
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
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        PP.scenes.start("copertina");
        
    }
    

    //da inserire tasti che permettono di scegliere tra rigioca e torna alla copertina
}

function destroy(s) {

}

PP.scenes.add("finale_negativo", preload, create, update, destroy);