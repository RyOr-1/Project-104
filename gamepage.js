// random value generated
  var y = Math.floor(Math.random() * 10 + 1)
  console.log(y)
  var guess = 1
  var playerName = localStorage.getItem("playerName")

  function submit() {
    var x = document.getElementById("guessField").value 
    
    if(x == y)
    {
        alert("CONGRATS!! " + playerName+ " YOU GUESSED THE NUMBER CORRECT RIGHT " + guess + " TIMES")
        guess = guess + 1
    }
    else if (x > y)
    {
        guess++
        alert("SORRY!! TRY A SMALLER NUMBER")
    }
    else
    {
        guess++
        alert("SORRY!! TRY A BIGGER NUMBER")
    }


  }

  function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
    console.log(y)
  }
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
