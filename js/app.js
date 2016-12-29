/* wartości areny:
    
    99 - bomba
    0 - 0 bomb w pobliżu
    1 - 1 bomba w pobliżu
    itd
    
    wartości arenymark:
    
    0 - nieklikniete
    1 - klikniete (bez bomby)
    2 - postawiona flaga
    3 - klikniete z bomba? */


document.addEventListener("DOMContentLoaded", function(){
    
    var rows = document.getElementsByClassName("row");
    var fields = document.getElementsByClassName("field");
    
    for (var i=0; i<fields.length; i++){
        
        fields[i].classList.add('unclicked');
    }
    
    
    var bombsleft = 0;
    var arena = [];
    var arenamark = [];
    
    var bombisplaced = false; //zmienna pomocnicza do losowania miejsc bomb
    
    
    
    for (var i=0; i<= 23; i++){ //rysowanie tablic
        arena[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        arenamark[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    
    
    
    
    
    for (var i=1; i<=112; i++){ //rozlosowanie 112 bomb
        
        while (bombisplaced == false) {
            
            var y = Math.round(Math.random() * 23);
            var x = Math.round(Math.random() * 23);
            
            if (arena[y][x] == 0){
                
                arena[y][x] = 99;
                bombisplaced = true;
            }
        
        }
        
        bombisplaced = false;
        
    }
    
    /* wywala wszystkie bomby na mapie
    for (var i=0; i<=23; i++){
        for (var j=0; j<=23; j++){
        
            if (arena[i][j] == 99){
                rows[i].children[j].classList.add('bombhere');
            }
            
        }
    }
    */
    
    
    console.log(arena);
    
    
    
    
    
});