let tavola_1;
let home;
let freccia;

function preload(s) {
    tavola_1 = PP.assets.image.load(s, "assets/images/1mod(1).png");

}

function create(s) {


    PP.assets.tilesprite.add(s, tavola_1, 0, 0, 0, 0, 0, 0);

    //CREO TASTO PER TORNARE ALLA COPERTINA

    home = PP.shapes.text_styled_add(s,
        50, 50,
        "Home",
        30,
        "Pixelify Sans",
        "normal",
        "0x000000",
        null,
        0.2,
        0.2);

    PP.interactive.mouse.add(home, "pointerdown", down_home);
    PP.interactive.mouse.add(home, "pointerover", over_home);
    PP.interactive.mouse.add(home, "pointerout", out_home);

    //CREO TASTO PER PASSARE A TAVOLA SUCCESIVA

    freccia = PP.shapes.text_styled_add(s,
        200, 50,
        "⭢",
        30,
        "Pixelify Sans",
        "normal",
        "0x000000",
        null,
        0.2,
        0.2);

    PP.interactive.mouse.add(home, "pointerdown", down_home);
    PP.interactive.mouse.add(home, "pointerover", over_home);
    PP.interactive.mouse.add(home, "pointerout", out_home);


    PP.interactive.mouse.add(freccia, "pointerdown", down_freccia);
    PP.interactive.mouse.add(freccia, "pointerover", over_freccia);
    PP.interactive.mouse.add(freccia, "pointerout", out_freccia);

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

    freccia.geometry.scale_x = 1.3;
    freccia.geometry.scale_y = 1.3;
}

function out_freccia(s) {

    freccia.geometry.scale_x = 1;
    freccia.geometry.scale_y = 1;
}



function update(s) {
    //premendo le freccie opure space si va avanti
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {

        PP.scenes.start("tavola2");

    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {

        PP.scenes.start("tavola2");

    }


}

function destroy(s) {

}

PP.scenes.add("tavola1", preload, create, update, destroy);