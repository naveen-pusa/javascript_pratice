function diceGame(){

    
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')
let h2    = document.getElementById('h2')
let h3 = document.getElementById('h3')
let result = document.getElementById('result')
let sound = document.getElementById('sound')

// no value in the dice:
h2.innerHTML=''
h3.innerHTML=''
result.innerHTML=''

// add animation to the dice:
dice1.classList.add('addRotate')
dice2.classList.add('addRotate')

// set the music:
sound.currentTime = 0
sound.play()

// writing time to rotate and to stop rotate

setTimeout(()=>{

    let num1 =Math.floor(Math.random()*7)
    let num2 =Math.floor(Math.random()*7)
    
    h2.innerHTML=num1
    h3.innerHTML=num2
    // remove animation after the rotation:
    dice1.classList.remove('addRotate')
    dice2.classList.remove('addRotate')

     // now compare the result btw the two dice:

  if(num1>num2){
    result.innerHTML='Player One is Winner🤩'
  }else if(num2>num1){
    result.innerHTML='Player Two is Winnere✨'
  }else{
    result.innerHTML='it is draw😊'
  }
  sound.pause()

},2000)

 

}


