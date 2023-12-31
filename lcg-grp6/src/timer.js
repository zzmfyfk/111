//Provo a fare il timer 
function create_timer(s, player) {

    PP.timers.add_timer(s, 120000, time_over, false)

    // setto variabile globale time a 60000
    PP.gameState.set_variable("Time", 120000);
    // aggiunto testo timer 
    txt_time = PP.shapes.text_styled_add(s, 1100, 10, "Time: 120", 30, "Helvetica", "normal", "0x000000", null, 0, 0);

    //fisso la scritta in alto in modo che rimanga ferma
    txt_time.tile_geometry.scroll_factor_x = 0;
    txt_time.tile_geometry.scroll_factor_y = 0;

    //una volta scaduto il tempo, esce la schermata di game over (successivamente andrà sostituita con la schermata della tavola di finale negativo)
    function time_over(s) {
        if (PP.timers.getTime(s) > 120000) {
            console.log("tempo scaduto")
            PP.scenes.start("game_over");
        }
    }

    //creo un nuovo timer attivo ogni secondo per fare il count down

    PP.timers.add_timer(s, 1000, function_to_call_2, true) //metto valore boleano true perchè deve ripetersi continuamente
    function function_to_call_2(s) {
        //prendo tempo attuale
        let prev_time = PP.gameState.get_variable("Time");

        // setto la variabile time a prev_time - 1000
        PP.gameState.set_variable("Time", prev_time-1000);

        //console.log(PP.gameState.get_Variable("Time"))

        // aggiorno la scritta
        PP.shapes.text_change(txt_time, "Time: " + (PP.gameState.get_variable("Time")/1000));

    }

}



