/* wartości areny:
    
    99 - bomba
    0 - 0 bomb w pobliżu
    1 - 1 bomba w pobliżu
    itd
    
    wartości arenymark:
    
    0 - nieklikniete
    2 - klikniete (bez bomby)
    1 - postawiona flaga
    3 - klikniete z bomba? */


document.addEventListener("DOMContentLoaded", function(){
    
    var rows = document.getElementsByClassName("row");
    var fields = document.getElementsByClassName("field");
    var gamebox = document.getElementsByClassName("gamebox");
    
    var gameover = false;
    
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
    
    
    
    
    
    for (var i=1; i<=106; i++){ //rozlosowanie 106 bomb
        
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
    
    
    
    
    function showbombs() {  // wyrzuca wszystkie bomby na mapie
        
        for (var i=0; i<=23; i++){
            for (var j=0; j<=23; j++){

                if (arena[i][j] == 99){
                    rows[i].children[j].classList.add('bombhere');
                }

            }
        }
        
    }
    
    
    
    
    
    for (var i=0; i<=23; i++){
        for (var j=0; j<=23; j++){
            
            //tu przeleci przez każde pole na planszy
            
            if (arena[i][j] != 99){ // ma nadać indeks w każde miejsce areny które nie jest bombą
                var counter = 0;
                
                if (i >=1 && j>=1){ // sprawdza czy nie jest w rogu mapy
                    if (arena[i-1][j-1] == 99){ counter++;} // w odpowiednim miejscu liczy czy są bomby
                }
                
                if (i >=1){
                    if (arena[i-1][j] == 99){ counter++;}
                }
                
                if (i >=1 && j <23){
                    if (arena[i-1][j+1] == 99){ counter++;}
                }
                
                if (j >=1){
                    if (arena[i][j-1] == 99){ counter++;}
                }
                
                if (j <23){
                    if (arena[i][j+1] == 99){ counter++;}
                }
                
                if (i <23 && j>=1){
                    if (arena[i+1][j-1] == 99){ counter++;}
                }
                
                if (i <23){
                    if (arena[i+1][j] == 99){ counter++;}
                }
                
                if (i <23 && j<23){
                    if (arena[i+1][j+1] == 99){ counter++;}
                }
                
                arena[i][j] = counter;
                //rows[i].children[j].innerHTML += counter; // to by wywaliło numer w każdym miejscu
            }
            
        }
    }
    
    
    
    
    gamebox[0].addEventListener("click", function(event){

        if (gameover != true) {
            
            
            
            var x = event.clientX-this.offsetLeft;
            x = Math.floor(x / 16);

            var y = event.clientY-this.offsetTop;
            y = Math.floor(y / 16);

            if (arenamark[y][x] == 0){  // pole niekliknięte

                arenamark[y][x] = 1;
                rows[y].children[x].classList.add('flaghere');


            } else if (arenamark[y][x] == 1){   //pole z flagą

                rows[y].children[x].classList.remove('flaghere');
                rows[y].children[x].classList.remove('unclicked');

                if (arena[y][x] == 99){ // wchodzi w bombe!
                    showbombs();
                    arenamark[y][x] = 3;
                    gameover = true;
                    
                } else if (arena[y][x] == 0){
                    //rozwinięcie, pokazanie całej otoczki wobec pustych pól
                    
                    
                    
                    
                    
                    
                    
                    
                } else {
                    rows[y].children[x].innerHTML += arena[y][x];
                        
                    if (arena[y][x] == 1){
                        rows[y].children[x].style.color = "blue";
                    }
                    if (arena[y][x] == 2){
                        rows[y].children[x].style.color = "green";
                    }
                    if (arena[y][x] == 3){
                        rows[y].children[x].style.color = "red";
                    }
                    if (arena[y][x] == 4){
                        rows[y].children[x].style.color = "brown";
                    }
                    if (arena[y][x] == 5){
                        rows[y].children[x].style.color = "purple";
                    }
                    if (arena[y][x] == 6){
                        rows[y].children[x].style.color = "darkblue";
                    }
                    if (arena[y][x] == 7){
                        rows[y].children[x].style.color = "darkviolet";
                    }
                    
                    
                    arenamark[y][x] = 2;
                }

            } else {

            }
            
            
            
            
        }
        
        
        
    })
    
    
});