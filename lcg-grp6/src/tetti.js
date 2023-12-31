let tetto_1;
let tetto_2;
let tetto_3;
let tetto_4;
let tetto_5;


function preload_tetti (s) {
    
}

function create_tetti(s, player) {

tetto_1 = PP.shapes.rectangle_add(s,1333, 621, 51, 1, "0x008000", 0);
// Aggiungiamo il pavimento alla fisica come entità statica
PP.physics.add(s, tetto_1, PP.physics.type.STATIC); 
PP.physics.add_collider_f(s, player, tetto_1, collision_floor);

tetto_2 = PP.shapes.rectangle_add(s,14550, 621, 102, 1, "0x008000", 0);
// Aggiungiamo il pavimento alla fisica come entità statica
PP.physics.add(s, tetto_2, PP.physics.type.STATIC); 
PP.physics.add_collider_f(s, player, tetto_2, collision_floor);


tetto_3 = PP.shapes.rectangle_add(s,5403, 860, 5280, 0, "0x008000", 0);
// Aggiungiamo il pavimento alla fisica come entità statica
PP.physics.add(s, tetto_3, PP.physics.type.STATIC); 
// Creiamo un collider tra pavimento e giocatore
PP.physics.add_collider_f(s, player, tetto_3, collision_floor);

tetto_4 = PP.shapes.rectangle_add(s,8560, 828, 879, 1, "0x008000", 0);
// Aggiungiamo il pavimento alla fisica come entità statica
PP.physics.add(s, tetto_4, PP.physics.type.STATIC); 
// Creiamo un collider tra pavimento e giocatore
PP.physics.add_collider_f(s, player, tetto_4, collision_floor);

tetto_5 = PP.shapes.rectangle_add(s, 2005, 1143, 1191, 1, "0x008000", 0);
PP.physics.add(s, tetto_5, PP.physics.type.STATIC); 
PP.physics.add_collider_f(s, player, tetto_5, collision_floor);
}

function collision_floor(s,player,floor) {
    player.is_on_platform = true;
}

