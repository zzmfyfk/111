let img_giada_1;
let img_giada_2;
let img_giada_3;
let img_cassa_1;

function preload_giada(s) {
    // Load delle immagini della giada
    img_giada_1   = PP.assets.image.load(s, "assets/images/giada_1.png");
    img_giada_2   = PP.assets.image.load(s, "assets/images/giada_2.png");
    img_giada_3   = PP.assets.image.load(s, "assets/images/giada_3.png");
    img_cassa_1= PP.assets.image.load(s, "assets/images/cassa.png");
}

function collision_giada(s, player, giada) {
    // In caso di collisione procedo come segue:

    // 1) distruggo giada
    PP.assets.destroy(giada);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score+10);
}


function create_giada(s, player) {

        // creo la giada, la aggiungo alla fisica e imposto la funzione
        // di collisione
        let giada_1 = PP.assets.image.add(s, img_giada_1, 450, 550, 0, 0);
        PP.physics.add(s, giada_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_1, collision_giada);
    
        let giada_2 = PP.assets.image.add(s, img_giada_2, 245, 900, 0, 0);
        PP.physics.add(s, giada_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_2, collision_giada);

        let giada_3 = PP.assets.image.add(s, img_giada_3, 1850, 1100, 0, 0);
        PP.physics.add(s, giada_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_3, collision_giada);

        //crea cassa: è da correggere questa dinamica
        let cassa_1 = PP.assets.image.add(s, img_cassa_1, 1800, 1100, 0, 0);
        PP.physics.add(s, cassa_1, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, cassa_1, collision_cassa);

        
        
        
        
    }

function collision_cassa(s, player,cassa){
            player.is_on_cassa = true;
           console.log(player.is_on_cassa);
           if(PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            console.log("hi");
                PP.assets.destroy(cassa);   
               } 
            
        }

        


function update_giada(s) {
    // Nothing to do...
}