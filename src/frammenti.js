//let img_frammento_1;
//let img_frammento_2;
//let img_frammento_3;
//let img_frammento_4;
//let img_frammento_5;
//let img_frammento_6;
//let img_frammento_7;

let frammento_1;
let frammento_1_overlap;
let sprite_frammento_1;
let sprite_frammento_2;
let sprite_frammento_3;
let sprite_frammento_4;
let sprite_frammento_5;
let sprite_frammento_6;
let sprite_frammento_7;

let luce_frammento1;
let luce_frammento2;
let luce_frammento3;
let luce_frammento4;
let luce_frammento5;
let luce_frammento6;
let luce_frammento7;

let luce1;


function preload_frammenti(s) {
    // Load delle immagini del funghetto

    sprite_frammento_1 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_1.png", 48, 48);
  
    img_luce1= PP.assets.image.load(s,"assets/images/luce_frammento1.png");
    img_luce2= PP.assets.image.load(s,"assets/images/luce_frammento2.png");
    img_luce3= PP.assets.image.load(s,"assets/images/luce_frammento3.png");
    img_luce4= PP.assets.image.load(s,"assets/images/luce_frammento4.png");
    img_luce5= PP.assets.image.load(s,"assets/images/luce_frammento5.png");
    img_luce6= PP.assets.image.load(s,"assets/images/luce_frammento6.png");
    img_luce7= PP.assets.image.load(s,"assets/images/luce_frammento7.png");
  
  
    // sprite_frammento_2 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_2.png", 45,57);
   // sprite_frammento_3 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_3.png", 48, 39);
  //  sprite_frammento_4 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_4.png", 45, 57);
   // sprite_frammento_5 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_5.png", 42, 45);
  //  sprite_frammento_6 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_6.png", 45, 48);
   // sprite_frammento_7 = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_frammento_7.png", 36, 54);

  //  img_frammento_1   = PP.assets.image.load(s, "assets/images/frammento_1.png");
   // img_frammento_2   = PP.assets.image.load(s, "assets/images/frammento_2.png");
   // img_frammento_3   = PP.assets.image.load(s, "assets/images/frammento_3.png");
   // img_frammento_4   = PP.assets.image.load(s, "assets/images/frammento_4.png");
   // img_frammento_5   = PP.assets.image.load(s, "assets/images/frammento_5.png");
   // img_frammento_6   = PP.assets.image.load(s, "assets/images/frammento_6.png");
   // img_frammento_7   = PP.assets.image.load(s, "assets/images/frammento_7.png");
}

//function collision_frammento(s, player, frammento) {
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
 //   PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
 //   let prev_score = PP.gameState.get_variable("score");
  //  PP.gameState.set_variable("score", prev_score+10);
//}

function create_frammenti(s, player) {
   
   // frammento_1_overlap = PP.shapes.rectangle_add(s, 3402,1233, 48, 48, "0x000000", 0);
   // PP.physics.add(s, frammento_1_overlap, PP.physics.type.STATIC);
   // PP.physics.add_overlap_f(s, player, frammento_1_overlap, overlap_frammenti);
   
   frammento_1 = PP.assets.sprite.add(s, sprite_frammento_1, 3402,1233, 0, 0);
   PP.physics.add(s, frammento_1, PP.physics.type.STATIC);
   //PP.physics.set_collision_rectangle(frammento_1, 21, 27, 39, 36); //rettangolo di collisione della cassa
   PP.physics.add_overlap_f(s, player, frammento_1, overlap_frammento1);
   //PP.assets.sprite.animation_add(frammento_1, "lightoff", 0,0,1,0);
   //PP.assets.sprite.animation_add(frammento_1, "lighton", 1,1,1,0);
   //PP.assets.sprite.animation_play(frammento_1, "lightoff");
        
   
         function overlap_frammento1(s,player,frammento_1){
             player.is_on_frammento1=true;
         }
  
  
   luce1 = PP.assets.image.add(s,img_luce1,3402,1233,0,0);
   luce1.visibility.alpha = 0;

  


       // let frammento_1 = PP.assets.image.add(s, img_frammento_1, 3402,1233, 0, 0);
       // PP.physics.add(s, frammento_1, PP.physics.type.STATIC);
       // PP.physics.set_collision_rectangle(frammento_1, 69, 57, 55, 14);
       // PP.physics.add_overlap_f(s, player, frammento_1, collision_frammenti);
    
       // let frammento_2 = PP.assets.image.add(s, img_frammento_2, 5391, 1089, 0, 0);
        //PP.physics.add(s, frammento_2, PP.physics.type.STATIC);
       // PP.physics.add_overlap_f(s, player,frammento_2, collision_frammenti);

        //let frammento_3 = PP.assets.image.add(s, img_frammento_1, 5382, 345, 0, 0);
        //PP.physics.add(s, frammento_3, PP.physics.type.STATIC);
        //PP.physics.add_overlap_f(s, player, frammento_3, collision_frammenti);
    
        //let frammento_4 = PP.assets.image.add(s, img_frammento_4,6546, 1221, 0, 0);
       // PP.physics.add(s, frammento_4, PP.physics.type.STATIC);
       // PP.physics.add_overlap_f(s, player,frammento_4, collision_frammenti);

        //let frammento_5 = PP.assets.image.add(s, img_frammento_5, 8121, 330, 0, 0);
       // PP.physics.add(s, frammento_5, PP.physics.type.STATIC);
       // PP.physics.add_overlap_f(s, player,frammento_5, collision_frammenti);

       // let frammento_6 = PP.assets.image.add(s, img_frammento_6,7977, 873, 0, 0);
       // PP.physics.add(s, frammento_6, PP.physics.type.STATIC);
        //PP.physics.add_overlap_f(s, player, frammento_6, collision_frammenti);
    
        //let frammento_7 = PP.assets.image.add(s, img_frammento_7, 8397, 1149, 0, 0);
        //PP.physics.add(s, frammento_7, PP.physics.type.STATIC);
       // PP.physics.add_overlap_f(s, player,frammento_7, collision_frammenti);




    }


    let framm_state = 0;
   

  

function collision_frammenti(s, player, frammento_1) {
    // In caso di collisione procedo come segue:
   // PP.assets.sprite.animation_play(frammento_1, "lighton");

  // player.is_on_frammenti = true;
  

   if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)){
    // 1) distruggo giada
    PP.assets.destroy(frammento_1);
    PP.assets.destroy(luce_frammento1);

    // 2) aumento di 10 lo score
   // let prev_score = PP.gameState.get_variable("score");
  //  PP.gameState.set_variable("score", prev_score + 1);
}
    
}


function update_frammento1(s, player){

   if(player.is_on_frammento1==true){

       if(framm_state==0){

           luce1.visibility.alpha=1;
       }
      
       if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)){
         // 1) distruggo giada
         PP.assets.destroy(frammento_1);
         PP.assets.destroy(luce1);
       }
      }

   else if(player.is_on_frammento1==false){

       luce1.visibility.alpha=0;
   }
   
   if(player.is_on_frammento1=false){

       if(framm_state==0){
           luce1.visibility.alpha=0;
       }
   }

 
}






//function overlap_frammenti(s, player, frammento_1) {
    // Riproduce l'animazione "lighton" quando il giocatore va in overlap con frammento_1
   // PP.assets.sprite.animation_play(frammento_1, "lighton");
//}


