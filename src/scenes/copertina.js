let copertina;
let gioca;
let storia;
let crediti;
let testo_copertina;
let img_testo_copertina;


function preload(s) {
    copertina = PP.assets.image.load(s, "assets/images/copertina.png");
    img_testo_copertina= PP.assets.image.load(s, "assets/images/testo_copertina.png");
    // img_book_icon = PP.assets.image.load(s, "assets/images/menu_book_icon.png");

}

function create(s) {

    document.getElementById('loading-screen').style.display = 'none';
    PP.assets.tilesprite.add(s, copertina, 0, 0, 0, 0, 0, 0);
testo_copertina=PP.assets.image.add(s, img_testo_copertina, 60,600, 0, 0);
    //crezione dei testi "gioca" "storia" "crediti":
    gioca = PP.shapes.text_styled_add(s,
        60, 450,
        "Gioca",
        30,
        'Pixelify Sans',
        "normal",
        "0xFFFFFF",
        null,
        0,
        0);


    storia = PP.shapes.text_styled_add(s,
        60, 490,
        "Storia",
        30,
        'Pixelify Sans',
        "normal",
        "0xFFFFFF",
        null,
        0,
        0);


    crediti = PP.shapes.text_styled_add(s,
        60, 530,
        "Crediti",
        30,
        'Pixelify Sans',
        "normal",
        "0xFFFFFF",
        null,
        0,
        0);

    



    //crezione dei tasti interattivi "gioca" "storia" "crediti":

    PP.interactive.mouse.add(gioca, "pointerdown", down_gioca);
    PP.interactive.mouse.add(gioca, "pointerover", over_gioca);
    PP.interactive.mouse.add(gioca, "pointerout", out_gioca);

    PP.interactive.mouse.add(storia, "pointerdown", down_storia);
    PP.interactive.mouse.add(storia, "pointerover", over_storia);
    PP.interactive.mouse.add(storia, "pointerout", out_storia);

    PP.interactive.mouse.add(crediti, "pointerdown", down_crediti);
    PP.interactive.mouse.add(crediti, "pointerover", over_crediti);
    PP.interactive.mouse.add(crediti, "pointerout", out_crediti);



}

function down_gioca(s) {
    PP.scenes.start("base");
}
function over_gioca(s) {

    gioca.geometry.scale_x = 1.3;
    gioca.geometry.scale_y = 1.3;
}
function out_gioca(s) {
    gioca.geometry.scale_x = 1;
    gioca.geometry.scale_y = 1;
}


function down_storia(s) {
    PP.scenes.start("tavola1");
}
function over_storia(s) {
    storia.geometry.scale_x = 1.3;
    storia.geometry.scale_y = 1.3;
}
function out_storia(s) {
    storia.geometry.scale_x = 1;
    storia.geometry.scale_y = 1;
}


function down_crediti(s) {
    PP.scenes.start("crediti");
}
function over_crediti(s) {
    crediti.geometry.scale_x = 1.3;
    crediti.geometry.scale_y = 1.3;
}
function out_crediti(s) {
    crediti.geometry.scale_x = 1;
    crediti.geometry.scale_y = 1;
}








function update(s) {
   
}

function destroy(s) {

}

PP.scenes.add("copertina", preload, create, update, destroy);