let tavola_1;
let home;
let img_tasto_home;
let img_freccia_destra;
let freccia_destra;
let base_testo_1;
let img_base_testo1;
let testo_tav1;
let img_testo_tav1;

function preload(s) {
    tavola_1 = PP.assets.image.load(s, "assets/images/1mod(1).png");
    img_freccia_destra = PP.assets.image.load(s, "assets/images/freccia_destra.png");
    img_tasto_home = PP.assets.image.load(s, "assets/images/tasto_home.png");
    img_testo_tav1=PP.assets.image.load(s, "assets/images/testo_tav_1.png");
    img_base_testo1=PP.assets.image.load(s, "assets/images/base_testo.png");

}

function create(s) {


    PP.assets.tilesprite.add(s, tavola_1, 0, 0, 0, 0, 0, 0);
    base_testo_1=PP.assets.image.add(s, img_base_testo1, 0,0, 0, 0);
    testo_tav1=PP.assets.image.add(s, img_testo_tav1, 50,130, 0, 0);
   // testo_tav1.geometry.scale_x=1.2;
    //testo_tav1.geometry.scale_y=1.2

    

    //CREO TASTO PER TORNARE ALLA COPERTINA

    home = PP.assets.image.add(s, img_tasto_home, 20, 20, 0, 0);

    PP.interactive.mouse.add(home, "pointerdown", down_home);
    PP.interactive.mouse.add(home, "pointerover", over_home);
    PP.interactive.mouse.add(home, "pointerout", out_home);

    //CREO TASTO PER PASSARE A TAVOLA SUCCESIVA

    freccia_destra = PP.assets.image.add(s, img_freccia_destra, 80, 20, 0, 0);

    PP.interactive.mouse.add(home, "pointerdown", down_home);
    PP.interactive.mouse.add(home, "pointerover", over_home);
    PP.interactive.mouse.add(home, "pointerout", out_home);


    PP.interactive.mouse.add(freccia_destra, "pointerdown", down_freccia);
    PP.interactive.mouse.add(freccia_destra, "pointerover", over_freccia);
    PP.interactive.mouse.add(freccia_destra, "pointerout", out_freccia);

}
//creo le funzioni che si attivano con i tasti
function down_home(s) {
    PP.scenes.start("copertina");
}

function over_home(s) {

    home.geometry.scale_x = 1.3;
    home.geometry.scale_y = 1.3;
}

function out_home(s) {

    home.geometry.scale_x = 1;
    home.geometry.scale_y = 1;
}


function down_freccia(s) {
    PP.scenes.start("tavola2");
}

function over_freccia(s) {

    freccia_destra.geometry.scale_x = 1.3;
    freccia_destra.geometry.scale_y = 1.3;
}

function out_freccia(s) {

    freccia_destra.geometry.scale_x = 1;
    freccia_destra.geometry.scale_y = 1;
}



function update(s) {
    //premendo le freccie opure space si va avanti
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {

        PP.scenes.start("tavola2");

    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {

        PP.scenes.start("tavola2");

    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {

        PP.scenes.start("copertina");

    }


}

function destroy(s) {

}

PP.scenes.add("tavola1", preload, create, update, destroy);