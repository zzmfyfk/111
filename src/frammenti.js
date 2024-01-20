//let img_frammento_1;
let img_frammento_2;
//let img_frammento_3;
let img_frammento_4;
let img_frammento_5;
let img_frammento_6;
let img_frammento_7;

let img_suggerimenti;
let suggerimenti_frammenti;

//let fraicon_1;
let fraicon_2;
//let fraicon_3;
let fraicon_4;
let fraicon_5;
let fraicon_6;
let fraicon_7;
let fraicons;

//let luce_frammento1;
let luce_frammento2;
//let luce_frammento3;
let luce_frammento4;
let luce_frammento5;
let luce_frammento6;
let luce_frammento7;

let luce1;
let luce2;

function preload_frammenti(s) {

    img_suggerimenti=PP.assets.image.load(s,"assets/images/tasto_C.png");
    // Load delle immagini del funghetto
    //img_frammento_1   = PP.assets.image.load(s, "assets/images/frammento_1.png");
    img_frammento_2   = PP.assets.image.load(s, "assets/images/frammento_2.png");
    //img_frammento_3   = PP.assets.image.load(s, "assets/images/frammento_3.png");
    img_frammento_4   = PP.assets.image.load(s, "assets/images/frammento_4.png");
    img_frammento_5   = PP.assets.image.load(s, "assets/images/frammento_5.png");
    img_frammento_6   = PP.assets.image.load(s, "assets/images/frammento_6.png");
    img_frammento_7   = PP.assets.image.load(s, "assets/images/frammento_7.png");
   // img_frammento_01 = PP.assets.image.load(s, "assets/images/frammento_01.png");

   //img_luce1= PP.assets.image.load(s,"assets/images/luce_frammento1.png");
   img_luce2= PP.assets.image.load(s,"assets/images/luce_frammento2.png");
   //img_luce3= PP.assets.image.load(s,"assets/images/luce_frammento3.png");
   img_luce4= PP.assets.image.load(s,"assets/images/luce_frammento4.png");
   img_luce5= PP.assets.image.load(s,"assets/images/luce_frammento5.png");
   img_luce6= PP.assets.image.load(s,"assets/images/luce_frammento6.png");
   img_luce7= PP.assets.image.load(s,"assets/images/luce_frammento7.png");
 
 

}

//function collision_frammenti (s, player, frammento) {


    // ... 其他代码 ...


   // if (!frammento || !frammento.id) {
      //  console.error("Frammento or its id is undefined", frammento);
      //  return;
    //}

    //let frammentoId = frammento.id; // 假设 frammento 对象有一个 id 属性
   // updateFraiconAlpha(frammentoId);
    // In caso di collisione procedo come segue:

    // 1) distruggo il funghetto
  //  PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
    //let prev_score = PP.gameState.get_variable("score");
   // PP.gameState.set_variable("score", prev_score + 10);

    //redirectToLiangIfScoreIsHighEnough(prev_score + 10);
//}






function updateFraIcons(score) {
    for (let i = 0; i < score; i++) {
        // 将对应的灰色图标设为不可见，并将绿色图标设为可见
        giadaIcons[i].gray.ph_obj.setVisible(false);
        giadaIcons[i].green.ph_obj.setVisible(true);
    }
}

function create_frammenti(s, player) {


    suggerimenti_frammenti = PP.assets.image.add(s,img_suggerimenti,3410,1195,0,0);
    suggerimenti_frammenti.visibility.alpha = 0;
   // img_suggerimenti=PP.assets.image.load(s,"assets/images/tasto_A.png");


        /*let frammento_1 = PP.assets.image.add(s, img_frammento_1, 3402,1228, 0, 0);
        PP.physics.add(s, frammento_1, PP.physics.type.STATIC);
       // PP.physics.set_collision_rectangle(frammento_1, 69, 57, 55, 14);
        //PP.physics.add_overlap_f(s, player, frammento_1, collision_frammenti);
        PP.physics.add_overlap_f(s, player, frammento_1, collision_frammento1);
        PP.physics.add_overlap_f(s, player, frammento_1, overlap_frammento1);
    frammento_1.id = "frammento_1";
    frammento_1.collected = false;

         function overlap_frammento1(s,player,frammento_1){
            player.is_on_frammento1=true;
        }
 
 
         luce1 = PP.assets.image.add(s,img_luce1,3402,1228,0,0);
         luce1.visibility.alpha = 0;*/



        let frammento_2 = PP.assets.image.add(s, img_frammento_2, 3402,1228, 0, 0);
        PP.physics.add(s, frammento_2, PP.physics.type.STATIC);
        //PP.physics.add_overlap_f(s, player, frammento_2, collision_frammenti);
        PP.physics.add_overlap_f(s, player, frammento_2, collision_frammento2);
        PP.physics.add_overlap_f(s, player, frammento_2, overlap_frammento2);
    frammento_2.id = "frammento_2";
    frammento_2.collected = false;

        function overlap_frammento2(s,player,frammento_2){
            player.is_on_frammento2=true;
        }
 
 
       luce2 = PP.assets.image.add(s,img_luce2, 3402,1228,0,0);
       luce2.visibility.alpha = 0;






       /* let frammento_3 = PP.assets.image.add(s, img_frammento_1, 5382, 345, 0, 0);
        PP.physics.add(s, frammento_3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_3, collision_frammento3);
        PP.physics.add_overlap_f(s, player, frammento_3, overlap_frammento3);
    frammento_3.id = "frammento_3";
    frammento_3.collected = false;

        function overlap_frammento3(s,player,frammento_3){
            player.is_on_frammento3=true;
        }
 
       luce3 = PP.assets.image.add(s,img_luce3,5382, 345,0,0);
       luce3.visibility.alpha = 0;*/



        let frammento_4 = PP.assets.image.add(s, img_frammento_4,3402,1228, 0, 0);
        PP.physics.add(s, frammento_4, PP.physics.type.STATIC);
       PP.physics.add_overlap_f(s, player,frammento_4, collision_frammento4);
       PP.physics.add_overlap_f(s, player, frammento_4, overlap_frammento4);
    frammento_4.id = "frammento_4";
    frammento_4.collected = false;

       function overlap_frammento4(s,player,frammento_4){
           player.is_on_frammento4=true;
       }

      luce4 = PP.assets.image.add(s,img_luce4,6546, 1221,0,0);
      luce4.visibility.alpha = 0;


        let frammento_5 = PP.assets.image.add(s, img_frammento_5, 3422,1228, 0, 0);
        PP.physics.add(s, frammento_5, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_5, collision_frammento5);
       PP.physics.add_overlap_f(s, player, frammento_5, overlap_frammento5);
    frammento_5.id = "frammento_5";
    frammento_5.collected = false;

       function overlap_frammento5(s,player,frammento_5){
           player.is_on_frammento5=true;
       }


      luce5 = PP.assets.image.add(s,img_luce5,8121, 330,0,0);
      luce5.visibility.alpha = 0;


        let frammento_6 = PP.assets.image.add(s, img_frammento_6,3442,1228, 0, 0);
        PP.physics.add(s, frammento_6, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, frammento_6, collision_frammento6);
       PP.physics.add_overlap_f(s, player, frammento_6, overlap_frammento6);
    frammento_6.id = "frammento_6";
    frammento_6.collected = false;

       function overlap_frammento6(s,player,frammento_6){
           player.is_on_frammento6=true;
       }


      luce6 = PP.assets.image.add(s,img_luce6,7977, 873,0,0);
      luce6.visibility.alpha = 0;

        let frammento_7 = PP.assets.image.add(s, img_frammento_7, 3452,1228, 0, 0);
        PP.physics.add(s, frammento_7, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player,frammento_7, collision_frammento7);
        PP.physics.add_overlap_f(s, player, frammento_7, overlap_frammento7);
    frammento_7.id = "frammento_7";
    frammento_7.collected = false;

       function overlap_frammento7(s,player,frammento_7){
           player.is_on_frammento7=true;
       }


      luce7 = PP.assets.image.add(s,img_luce7,8397, 1149,0,0);
      luce7.visibility.alpha = 0;

    /*let fraicon_1 = PP.assets.image.add(s, img_frammento_1, 10, 10, 0, 0);
    fraicon_1.tile_geometry.scroll_factor_x = 0;
    fraicon_1.tile_geometry.scroll_factor_y = 0;
    fraicon_1.id = "frammento_1"; // 设置标识符
    fraicon_1.ph_obj.setAlpha(0.5);*/

    let fraicon_2 = PP.assets.image.add(s, img_frammento_2, 60, 10, 0, 0);
    fraicon_2.tile_geometry.scroll_factor_x = 0;
    fraicon_2.tile_geometry.scroll_factor_y = 0;
    fraicon_2.id = "frammento_2"; // 设置标识符
    fraicon_2.ph_obj.setAlpha(0.5);

    /*let fraicon_3 = PP.assets.image.add(s, img_frammento_3, 110, 10, 0, 0);
    fraicon_3.tile_geometry.scroll_factor_x = 0;
    fraicon_3.tile_geometry.scroll_factor_y = 0;
    fraicon_3.id = "frammento_3"; // 设置标识符
    fraicon_3.ph_obj.setAlpha(0.5);*/

    let fraicon_4 = PP.assets.image.add(s, img_frammento_4, 160, 10, 0, 0);
    fraicon_4.tile_geometry.scroll_factor_x = 0;
    fraicon_4.tile_geometry.scroll_factor_y = 0;
    fraicon_4.id = "frammento_4"; // 设置标识符
    fraicon_4.ph_obj.setAlpha(0.5);

    let fraicon_5 = PP.assets.image.add(s, img_frammento_5, 210, 10, 0, 0);
    fraicon_5.tile_geometry.scroll_factor_x = 0;
    fraicon_5.tile_geometry.scroll_factor_y = 0;
    fraicon_5.id = "frammento_5"; // 设置标识符
    fraicon_5.ph_obj.setAlpha(0.5);

    let fraicon_6 = PP.assets.image.add(s, img_frammento_6, 260, 10, 0, 0);
    fraicon_6.tile_geometry.scroll_factor_x = 0;
    fraicon_6.tile_geometry.scroll_factor_y = 0;
    fraicon_6.id = "frammento_6"; // 设置标识符
    fraicon_6.ph_obj.setAlpha(0.5);

    let fraicon_7 = PP.assets.image.add(s, img_frammento_7, 310, 10, 0, 0);
    fraicon_7.tile_geometry.scroll_factor_x = 0;
    fraicon_7.tile_geometry.scroll_factor_y = 0;

    fraicon_7.id = "frammento_7"; // 设置标识符
    fraicon_7.ph_obj.setAlpha(0.5);

    fraicons = [ fraicon_2, fraicon_4, fraicon_5, fraicon_6, fraicon_7];
    //fraicon_1.id = "frammento_1"; // 设置标识符


}


let framm_state = 0;

 /*function collision_frammento1(s, player, frammento_1) {
    // In caso di collisione procedo come segue:
   // PP.assets.sprite.animation_play(frammento_1, "lighton");

   player.is_on_frammenti = true;
  

   if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_1.collected) {

        frammento_1.ph_obj.x = 10; // X 坐标
        frammento_1.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_1.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_1.ph_obj.setDepth(10);

        frammento_1.collected = true;
    // 1) distruggo giada

    //PP.assets.destroy(luce_frammento1);

    // 2) aumento di 10 lo score
    let prev_score = PP.gameState.get_variable("score");
    PP.gameState.set_variable("score", prev_score + 70);

    
}
    
}*/



function collision_frammento2(s, player, frammento_2) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_2.collected) {

        frammento_2.ph_obj.x = 60; // X 坐标
        frammento_2.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_2.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_2.ph_obj.setDepth(10);

        frammento_2.collected = true;
        // 1) distruggo giada

        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}

/*function collision_frammento3(s, player, frammento_3) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_3.collected) {

        frammento_3.ph_obj.x = 110; // X 坐标
        frammento_3.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_3.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_3.ph_obj.setDepth(10);

        frammento_3.collected = true;
        // 1) distruggo giada

        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}*/

function collision_frammento4(s, player, frammento_4) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_4.collected) {

        frammento_4.ph_obj.x = 160; // X 坐标
        frammento_4.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_4.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_4.ph_obj.setDepth(10);
        // 1) distruggo giada
        frammento_4.collected = true;
        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}

function collision_frammento5(s, player, frammento_5) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_5.collected) {

        frammento_5.ph_obj.x = 210; // X 坐标
        frammento_5.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_5.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_5.ph_obj.setDepth(10);
        // 1) distruggo giada
        frammento_5.collected = true;
        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}

function collision_frammento6(s, player, frammento_6) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_6.collected) {

        frammento_6.ph_obj.x = 260; // X 坐标
        frammento_6.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_6.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_6.ph_obj.setDepth(10);
        // 1) distruggo giada
        frammento_6.collected = true;
        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}

function collision_frammento7(s, player, frammento_7) {
    // In caso di collisione procedo come segue:
    // PP.assets.sprite.animation_play(frammento_1, "lighton");

    player.is_on_frammenti = true;


    if (PP.interactive.kb.is_key_down(s, PP.key_codes.C) && !frammento_7.collected) {

        frammento_7.ph_obj.x = 310; // X 坐标
        frammento_7.ph_obj.y = 10; // Y 坐标

        // 固定 frammento_1 到摄像机视图
        frammento_7.ph_obj.setScrollFactor(0);

        // 确保 frammento_1 位于最上层
        frammento_7.ph_obj.setDepth(10);
        // 1) distruggo giada
        frammento_7.collected = true;
        //PP.assets.destroy(luce_frammento1);

        // 2) aumento di 10 lo score
        let prev_score = PP.gameState.get_variable("score");
        PP.gameState.set_variable("score", prev_score + 10);


    }

}




//function updateFraiconAlpha(frammentoId) {
 //   console.log("fraicons array:", fraicons);

   // let fraiconToUpdate = fraicons.find(fraicon => fraicon && fraicon.id === frammentoId);
    //if (fraiconToUpdate) {
    //    fraiconToUpdate.ph_obj.setAlpha(1);
    //} else {
    //    console.error("No matching fraicon found for id:", frammentoId);
    //}
//}



   


//function collision_frammenti(s, player, frammento) {

    //let frammentoId = frammento.id;
    // In caso di collisione procedo come segue:

    // 1) distruggo giada
  //  PP.assets.destroy(frammento);

    // 2) aumento di 10 lo score
    //let prev_score = PP.gameState.get_variable("score");
    //PP.gameState.set_variable("score", prev_score + 1);

   // if (giada.isLastframmento) {
        // Imposta la variabile per indicare che l'ultima Giada è stata raccolta
      //  lastGiadaCollected = true;
        // Potresti voler aggiungere qui ulteriori azioni o transizioni
       // checkGiadasAndTransition(s);


   // }

    //console.log(frammentoIcons[prev_score].ph_obj);

   // updateframmentoIcons(prev_score + 1);
//}



function redirectToLiangIfScoreIsHighEnough(score) {
    if (score >= 70) {
        // 执行跳转到 'liang.html'
        liang.visibility.alpha = 1; 
        //window.location.href = 'liang.html';
    }
}



/*function update_frammento1(s, player){

    if(player.is_on_frammento1==true){
 
        if(framm_state==0){
 
            luce1.visibility.alpha=0.5;
            suggerimenti_frammenti.visibility.alpha=1;
            
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce1);
          PP.assets.destroy(suggerimenti_frammenti);
        }
       }
 
    else if(player.is_on_frammento1==false){
 
        luce1.visibility.alpha=0;
        suggerimenti_frammenti.visibility.alpha=0;
    }
    
    if(player.is_on_frammento1=false){
 
        if(framm_state==0){
            luce1.visibility.alpha=0;
        }
    }
 }*/
 
 function update_frammento2(s, player){

    if(player.is_on_frammento2==true){
        if(framm_state==0){
            luce2.visibility.alpha=0.5;
            suggerimenti_frammenti.visibility.alpha=1;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada
          PP.assets.destroy(luce2);
          PP.assets.destroy(suggerimenti_frammenti);
        }
       }
 
    else if(player.is_on_frammento2==false){
        luce2.visibility.alpha=0;
        suggerimenti_frammenti.visibility.alpha=0;
    }
    
    if(player.is_on_frammento2=false){
        if(framm_state==0){
            luce2.visibility.alpha=0;
        }
    }
 }
 

 /*function update_frammento3(s, player){

    if(player.is_on_frammento3==true){
        if(framm_state==0){
            luce3.visibility.alpha=0.5;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce3);
        }
       }
 
    else if(player.is_on_frammento3==false){
        luce3.visibility.alpha=0;
    }
    
    if(player.is_on_frammento3=false){
        if(framm_state==0){
            luce3.visibility.alpha=0;
        }
    }
 }*/
 
 
 function update_frammento4(s, player){

    if(player.is_on_frammento4==true){
        if(framm_state==0){
            luce4.visibility.alpha=0.5;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce4);
        }
       }
 
    else if(player.is_on_frammento4==false){
        luce4.visibility.alpha=0;
    }
    
    if(player.is_on_frammento4=false){
        if(framm_state==0){
            luce4.visibility.alpha=0;
        }
    }
 }
 
 function update_frammento5(s, player){

    if(player.is_on_frammento5==true){
        if(framm_state==0){
            luce5.visibility.alpha=0.5;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce5);
        }
       }
 
    else if(player.is_on_frammento5==false){
        luce5.visibility.alpha=0;
    }
    
    if(player.is_on_frammento5=false){
        if(framm_state==0){
            luce5.visibility.alpha=0;
        }
    }
 }

 function update_frammento6(s, player){

    if(player.is_on_frammento6==true){
        if(framm_state==0){
            luce6.visibility.alpha=0.5;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce6);
        }
       }
 
    else if(player.is_on_frammento6==false){
        luce6.visibility.alpha=0;
    }
    
    if(player.is_on_frammento6=false){
        if(framm_state==0){
            luce6.visibility.alpha=0;
        }
    }
 }

 function update_frammento7(s, player){

    if(player.is_on_frammento7==true){
        if(framm_state==0){
            luce7.visibility.alpha=0.5;
        }
       
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.C)){
          // 1) distruggo giada

          PP.assets.destroy(luce7);
        }
       }
 
    else if(player.is_on_frammento7==false){
        luce7.visibility.alpha=0;
    }
    
    if(player.is_on_frammento7=false){
        if(framm_state==0){
            luce7.visibility.alpha=0;
        }
    }
 }