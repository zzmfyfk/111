let img_giada_1;
let img_giada_2;
let img_giada_3;
let img_giada_4;
let img_giada_5;
let img_giada_6;
let img_giada_7;
let img_giada_8;

let giadaluce_1;
let sprite_giada;


function preload_giada(s) {
    // Load delle immagini della giada
    img_giada_1   = PP.assets.image.load(s, "assets/images/giada_1.png");
    img_giada_2   = PP.assets.image.load(s, "assets/images/giada_2.png");
    img_giada_3   = PP.assets.image.load(s, "assets/images/giada_3.png");
    img_giada_4   = PP.assets.image.load(s, "assets/images/giada_4.png");
    img_giada_5   = PP.assets.image.load(s, "assets/images/giada_5.png");
    img_giada_6   = PP.assets.image.load(s, "assets/images/giada_6.png");
    img_giada_7   = PP.assets.image.load(s, "assets/images/giada_7.png");
    img_giada_8   = PP.assets.image.load(s, "assets/images/giada_8.png");

    sprite_giada = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_giada.png", 99, 99);

}

function collision_giada(s, player, giada) {
    // In caso di collisione procedo come segue:

    // 1) distruggo giada
    PP.assets.destroy(giada);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score+1);
}


function create_giada(s, player) {

        // creo la giada, la aggiungo alla fisica e imposto la funzione
        // di collisione
        let giada_1 = PP.assets.image.add(s, img_giada_1, 1053, 228, 0, 0);
        PP.physics.add(s, giada_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_1, collision_giada);
    
        let giada_2 = PP.assets.image.add(s, img_giada_2, 1179, 900, 0, 0);
        PP.physics.add(s, giada_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_2, collision_giada);

        let giada_3 = PP.assets.image.add(s, img_giada_3,1850, 1100, 0, 0);
        PP.physics.add(s, giada_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_3, collision_giada);

        let giada_4 = PP.assets.image.add(s, img_giada_4, 1000, 900, 0, 0);
        PP.physics.add(s, giada_4, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_4, collision_giada);
    
        let giada_5 = PP.assets.image.add(s, img_giada_5, 900, 900, 0, 0);
        PP.physics.add(s, giada_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_5, collision_giada);

        let giada_6 = PP.assets.image.add(s, img_giada_6, 1100, 900, 0, 0);
        PP.physics.add(s, giada_6, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_6, collision_giada);

        let giada_7 = PP.assets.image.add(s, img_giada_7, 1200, 900, 0, 0);
        PP.physics.add(s, giada_7, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_7, collision_giada);

      
        //giada luminosa 
        giada = PP.assets.sprite.add(s,sprite_giada, 800, 964, 0.5, 1);
        PP.physics.add(s, giada, PP.physics.type.STATIC);
        PP.physics.set_collision_rectangle(giada, 30, 30, 30, 14); //rettangolo di collisione della cassa
        
        PP.physics.add_overlap_f(s, player, giada, collision_giada);
    
        PP.assets.sprite.animation_add(giada, "light", 0,3,4,-1);
        PP.assets.sprite.animation_play(giada, "light");
          
        
        
        
    }


        


function update_giada(s) {
    // Nothing to do...
}