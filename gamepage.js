var y = Math.floor(Math.random() * 10 + 1);
guess = 1;
player = localStorage.getItem("playername");
function submit() {
    var x =document.getElementById("guessField").value;
    if (x == y) {
        alert("CONGRATULATIONS " + player + "!!! You won in " + guess + " guess/es!"); 
    }
    else if(x<y){
      guess++;
      alert("OOPS! Try a Greater Number"); 
    }
    else{
        guess++;
        alert("OOPS! Try a Smaller Number");
    }
}
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
    guess = 1; 
}