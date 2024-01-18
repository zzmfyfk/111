let tavola_3;
let freccia_precedente;
let freccia_successivo;

function preload(s) {
    tavola_3 = PP.assets.image.load(s, "assets/images/tavola3.png");

}

function create(s) {


    PP.assets.tilesprite.add(s, tavola_3, 0, 0, 0, 0, 0, 0);

    //CREO TASTO PER PASSARE A TAVOLA SUCCESIVA

    freccia_successivo = PP.shapes.text_styled_add(s,
        200, 50,
        "⭢",
        30,
        "Pixelify Sans",
        "normal",
        "0x000000",
        null,
        0.2,
        0.2);


    PP.interactive.mouse.add(freccia_successivo, "pointerdown", down_freccia_successivo);
    PP.interactive.mouse.add(freccia_successivo, "pointerover", over_freccia_successivo);
    PP.interactive.mouse.add(freccia_successivo, "pointerout", out_freccia_successivo);

    //CREO TASTO PER PASSARE A TAVOLA PRECEDENTE

    freccia_precedente = PP.shapes.text_styled_add(s,
        50, 50,
        "⭠",
        30,
        "Pixelify Sans",
        "normal",
        "0x000000",
        null,
        0.2,
        0.2);


    PP.interactive.mouse.add(freccia_precedente, "pointerdown", down_freccia_precedente);
    PP.interactive.mouse.add(freccia_precedente, "pointerover", over_freccia_precedente);
    PP.interactive.mouse.add(freccia_precedente, "pointerout", out_freccia_precedente);




}

function down_freccia_successivo(s) {
    PP.scenes.start("base");
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
    PP.scenes.start("tavola2");
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
        PP.scenes.start("base");


    } if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        PP.scenes.start("base");

    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.scenes.start("tavola2");

    }




}

function destroy(s) {

}

PP.scenes.add("tavola3", preload, create, update, destroy);