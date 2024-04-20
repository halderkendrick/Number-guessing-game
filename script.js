const player1_button = document.querySelector('.player1_button')
const player1_input = document.querySelector('.player1_input')
const player1_err = document.querySelector('.player1_err')
const player_one = document.querySelector('.player_one')
const player_two = document.querySelector('.player_two')

const player2_button = document.querySelector('.player2_button')
const player2_input = document.querySelector('.player2_input')
const player2_err = document.querySelector('.player2_err')

const winner = document.querySelector('.winner')


player1_button.addEventListener('click', ()=>{
  let plyr1_valu = player1_input.value - 0

  if(isNaN(plyr1_valu)){
    player1_err.innerHTML = "Please input a number !"
  }
  else if(plyr1_valu >= 10){
    player1_err.innerHTML = "Please input a number less then 10 !"
  }
  else{
    player_one.style = 'display: none;'
    player_two.style = 'display: block;'
  }
})


let countClicks = 0;

player2_button.addEventListener('click',()=>{
  let plyr2_valu = player2_input.value - 0

  if(isNaN(plyr2_valu)){
    player2_err.innerHTML = "Please input a number !"
  }
  else if(plyr2_valu >= 10){
    player2_err.innerHTML = "Please input a number less then 10 !"
  }
  else{
    player2_err.innerHTML = ' '
    countClicks ++;
    player2_err.innerHTML = `Total Click ${countClicks} !`
    if(countClicks < 5){
      if( player1_input.value == plyr2_valu){
        player_two.style = 'display: none;'
        winner.style = 'display: block;'
        winner.innerHTML = "Player 2 winner"
      }
    }else if(player1_input.value == plyr2_valu) {
      player_two.style = 'display: none;'
      winner.style = 'display: block;'
      winner.innerHTML = "Player 2 winner"
    }
    else{
        player_two.style = 'display: none;'
        winner.style = 'display: block;'
        winner.innerHTML = "Player 1 winner"
    }

  }

})