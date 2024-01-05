let player_speed = 250;
let jump_init_speed = 200;
let floor_height = 964;

let curr_anim = "stop"; 

function preload_player(s) {
}

function configure_player_animations(s, player) {
  
    PP.assets.sprite.animation_add_list(player, "run", [0, 1, 2, 3, 4, 5, 6], 10, -1);    // Lista di frame, a 10 fps, inifito
    PP.assets.sprite.animation_add(player, "jump_up", 21, 24, 8, 0); //✅
    PP.assets.sprite.animation_add(player, "jump_down", 26, 27, 5, 0); //✅

    PP.assets.sprite.animation_add(player, "go_down", 7, 10, 5, -1);
    PP.assets.sprite.animation_add(player, "go_up", 11, 14, 5, -1);
   
    PP.assets.sprite.animation_add(player, "climb", 17, 20, 4, -1);
    PP.assets.sprite.animation_add(player, "climbstop", 17, 17, 1, 0);

    PP.assets.sprite.animation_add(player, "stop", 2, 2, 2, -1);
    PP.assets.sprite.animation_play(player, "stop");

    PP.physics.set_collision_rectangle(player, 40, 147, 28, 0); 
}

function manage_player_update(s, player) {
    let next_anim = curr_anim;

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "run";
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "run";
    } else {
        PP.physics.set_velocity_x(player, 0);
        next_anim = "stop";
    }

    if (player.is_on_platform && PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        PP.physics.set_velocity_y(player, -jump_init_speed);
        if (PP.physics.get_velocity_y(player) < 0) {
            next_anim = "jump_up";
        } else if (PP.physics.get_velocity_y(player) > 0) {
            next_anim = "jump_down";
        }
    }

    player.is_on_platform = false;

    if (player.is_on_scala) {
        PP.physics.set_velocity_y(player, 0);
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
            PP.physics.set_velocity_y(player, -70);
            next_anim = "climb";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
            PP.physics.set_velocity_y(player, 70);
            next_anim = "climb";
        }
    } else if (PP.physics.get_velocity_y(player) < 0) {
        next_anim = "jump_up";
    } else if (PP.physics.get_velocity_y(player) > 0) {
        next_anim = "jump_down";
    }

    player.is_on_scala = false;

    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    } else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }
}