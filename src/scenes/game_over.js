let tavola_finale_negativo
function preload(s) {
    tavola_finale_negativo = PP.assets.image.load(s, "assets/images/tavola_finale_negativo.png");
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

}

function update(s) {
    //premendo space, si torna alla copertina
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        window.location.href = 'copertina.html'
    }

    //da inserire tasti che permettono di scegliere tra rigioca e torna alla copertina
}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);