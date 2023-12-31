let img_giada_1;
let img_giada_2;
let img_giada_3;
let img_cassa;


function preload_giada(s) {
    // Load delle immagini del funghetto
    img_giada_1   = PP.assets.image.load(s, "assets/images/giada_1.png");
    img_giada_2   = PP.assets.image.load(s, "assets/images/giada_2.png");
    img_giada_3   = PP.assets.image.load(s, "assets/images/giada_3.png");
  //  img_cassa_1= PP.assets.image.load(s, "assets/images/cassa.png");
    
  
}

function collision_giada(s, player, giada) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
    PP.assets.destroy(giada);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score+1);
}

function create_giada(s, player) {

    // Creazione di 10 funghetti
   // for (let i=0; i<10; i++) {

     //   let mush_img;
        // Scelgo casualmnte (con una probabilita' del 50%)
        // quale immagine del funghetto utilizzare
    //    if(Math.random() < 0.5) {
    //        mush_img = img_mushroom_1;
    //   } else {
    //        mush_img = img_mushroom_2;

    
        
        // Ora creo il singolo funghetto, lo aggiungo alla fisica e imposto la funzione
        // di collisione
        let giada_1 = PP.assets.image.add(s, img_giada_1, 1053, 228, 0, 0);
        PP.physics.add(s, giada_1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_1, collision_giada);
    
        let giada_2 = PP.assets.image.add(s, img_giada_2, 1179, 900, 0, 0);
        PP.physics.add(s, giada_2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_2, collision_giada);
      
        let giada_3 = PP.assets.image.add(s, img_giada_3, 1850, 1100, 0, 0);
        PP.physics.add(s, giada_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, giada_3, collision_giada);

      
    }  
     


function update_giada(s) {
    // Nothing to do...
}