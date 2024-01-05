function create_timer(s, player) {
    PP.timers.add_timer(s, 120000, time_over, false);
    PP.gameState.set_variable("Time", 120000);

    let txt_time = PP.shapes.text_styled_add(s, 1100, 10, "Time: 120", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_time.tile_geometry.scroll_factor_x = 0;
    txt_time.tile_geometry.scroll_factor_y = 0;

    function time_over(s) {
        if (PP.timers.getTime(s) > 120000) {
            console.log("tempo scaduto");
            PP.scenes.start("game_over");
        }
    }

    let isZoomed = false;
    PP.timers.add_timer(s, 1000, function_to_call_2, true);

    function function_to_call_2(s) {
        let prev_time = PP.gameState.get_variable("Time");
        PP.gameState.set_variable("Time", prev_time - 1000);

        let remainingTime = PP.gameState.get_variable("Time") / 1000;

        if (remainingTime <= 15 && !isZoomed) {
            isZoomed = true;
            txt_time.ph_obj.setColor('#CC0000');

            s.tweens.add({
                targets: txt_time.ph_obj,
                scaleX: 2,
                scaleY: 2,
                x: s.cameras.main.centerX,
                y: s.cameras.main.centerY,
                ease: 'Power1',
                duration: 2000,
                onComplete: function() {
                    s.tweens.add({
                        targets: txt_time.ph_obj,
                        scaleX: 1,
                        scaleY: 1,
                        x: 1100,
                        y: 10,
                        ease: 'Power1',
                        duration: 1000
                    });
                }
            });
        }

        PP.shapes.text_change(txt_time, "Time: " + remainingTime);
    }
}
