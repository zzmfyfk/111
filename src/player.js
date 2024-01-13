let player_speed = 250;
let jump_init_speed = 200;
let floor_height = 964;

let curr_anim = "stop"; 

function preload_player(s) {
}

function configure_player_animations(s, player) {
  
    PP.assets.sprite.animation_add_list(player, "run", [0, 1, 2, 3, 4, 5, 6], 10, -1);    // Lista di frame, a 10 fps, inifito
    PP.assets.sprite.animation_add(player, "jump_up", 22, 24, 10, 0); 
    PP.assets.sprite.animation_add(player, "jump_down", 25, 27, 3, 0); 

    PP.assets.sprite.animation_add(player, "go_down", 7, 10, 5, -1);
    PP.assets.sprite.animation_add(player, "go_up", 11, 14, 5, -1);
   
    PP.assets.sprite.animation_add(player, "climb", 17, 20, 4, -1);
    PP.assets.sprite.animation_add(player, "climbstop", 17, 17, 1, 0);

    PP.assets.sprite.animation_add(player, "stop", 2, 2, 2, -1);
    PP.assets.sprite.animation_add(player, "stoponscala",16, 16, 1, 0);
    PP.assets.sprite.animation_add(player, "stopupscala",14, 14, 1, 0);
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

    if (player.is_on_platform) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            console.log("Jumping!"); 
            PP.physics.set_velocity_y(player, -jump_init_speed);
            if (PP.physics.get_velocity_y(player) < 0) {
                next_anim = "jump_up";
            } else if (PP.physics.get_velocity_y(player) > 0) {
                next_anim = "jump_down";
            }
        }
    } else {
        next_anim = "stop";
    }

    
    PP.physics.set_allow_gravity(player, true);

    if (player.is_on_scala) {
        console.log("Player is on ladder");
        // 禁用重力，防止角色下落
        PP.physics.set_allow_gravity(player, false);

        if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
            // 上键被按下时
            PP.physics.set_velocity_y(player, -70);
            next_anim = "go_up";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
            // 下键被按下时
            PP.physics.set_velocity_y(player, 70);
            next_anim = "go_down";
        } else {
            // 没有按键时，角色保持当前状态
            PP.physics.set_velocity_x(player, 0);
            PP.physics.set_velocity_y(player, 0);
            next_anim = curr_anim; // 保持当前动画状态
        }
    } else {
        // 当不在梯子上时，启用重力
        PP.physics.set_allow_gravity(player, true);



    } if (player.is_on_scala_pioli) {
        PP.physics.set_allow_gravity(player, false);
    
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
            PP.physics.set_velocity_y(player, -70);
            player.is_climbing = true;
            next_anim = "climb";
        } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
            PP.physics.set_velocity_y(player, 70);
            player.is_climbing = true;    
            next_anim = "climb";
        } else if(player.is_climbing) {
            PP.physics.set_velocity_y(player, 0);
            next_anim = "climbstop";
        }
    } else if (PP.physics.get_velocity_y(player) < 0) {
        next_anim = "jump_up";
    } else if (PP.physics.get_velocity_y(player) > 0) {
        next_anim = "jump_down";
    }

    if (next_anim !== curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }
    console.log(player.is_on_scala_pioli, player.is_on_platform);

    player.is_on_scala = false;
    player.is_on_scala_pioli = false;
    player.is_on_platform = false;
    player.is_on_barca = false;
 
    if(player.is_on_barca) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

        // Non gestisco qui le animazioni del salto, ma piu' avanti
    }
    player.is_on_barca = false;

   
      

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
