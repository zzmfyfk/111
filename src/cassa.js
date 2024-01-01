
let sprite_cassa;
let cassa;
let cassaoverlap;



function preload_cassa (s){
   
    sprite_cassa = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_cassa.png", 168, 75);
    //img_cassa   = PP.assets.image.load(s, "assets/images/cassa.png");


}



function collision_cassa(s, player, cassa) {
    
            player.is_on_cassa = true;
    }


function create_cassa(s, player,cassa) {

    cassaoverlap =  PP.shapes.rectangle_add(s, 800, 964, 180, 75, "0x000000", 0);
    PP.physics.add(s, cassaoverlap, PP.physics.type.STATIC); 
    //PP.physics.add_collider_f(s, player, cassaoverlap, collision_platform);
    PP.physics.add_overlap_f(s, player, cassaoverlap, overlap_casse);

    cassa = PP.assets.sprite.add(s,sprite_cassa, 800, 964, 0.5, 1);
    PP.physics.add(s, cassa, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(cassa, 69, 57, 55, 14); //rettangolo di collisione della cassa

    PP.physics.add_collider_f(s, player, cassa, collision_platform);

    PP.physics.add_collider_f(s, cassa, player, collision_cassa);
    PP.physics.add_overlap_f(s, cassa, player, collision_cassa);

    PP.assets.sprite.animation_add(cassa, "start", 0,0,1,0);
    PP.assets.sprite.animation_add(cassa, "destroycassa", 0,11,6,0);
    PP.assets.sprite.animation_play(cassa, "destroycassa");
   

    
        //crea cassa: è da correggere questa dinamica
       // let cassa_1 = PP.assets.image.add(s, img_cassa_1, 1800, 1100, 0, 0);
       // PP.physics.add(s, cassa_1, PP.physics.type.STATIC);
       // PP.physics.add_overlap_f(s, player, cassa_1, collision_cassa);
        

       // let cassa = PP.assets.sprite.add(s, img_cassa, 1305, 964, 0.5, 1);
        // Aggiungiamo il giocatore alla fisica come entità dinamica
       // PP.physics.add(s, cassa, PP.physics.type.STATIC); 
      //  PP.physics.add_overlap_f(s, player, cassa, collision_cassa);
       // PP.assets.sprite.animation_add(img_cassa, "destroycassa", 1, 12, 6, 1);

        
    }



    
function  overlap_casse(s, player, cassaoverlap) {
    player.is_on_cassa = true;
    //   console.log(player.is_on_cassa);
            if(PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
           //  console.log("hi");
            PP.assets.destroy(cassaoverlap);   
           // PP.assets.sprite.animation_add(img_cassa, "destroycassa", 1, 12, 6, 1);

}
}
    
function collision_cassa(s, player, cassa){
        player.is_on_cassa = true;
          console.log(player.is_on_cassa);
               if(PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
                console.log("hi");
               //PP.assets.destroy(cassa);   
               PP.assets.sprite.animation_play(cassa, "destroycassa");
             
            } 
            else {
                
                PP.assets.sprite.animation_add(cassa, "start", 0,0,1,0);
            }
        }
    




