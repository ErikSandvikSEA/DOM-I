console.log('working')

let secondTens = document.querySelector('#secondTens')
let secondOnes = document.querySelector('#secondOnes')
let msHundreds = document.querySelector('#msHundreds')
let msTens = document.querySelector('#msTens')
let digits = document.querySelectorAll('.digits')

console.log(secondTens)

function increaseTime(id, interval) {
     id.textContent = 0;
     setInterval(function () {
          if(id.textContent < 9){
          id.textContent++
          } else {
               id.textContent = 0
          }
     }, interval
     )
}

increaseTime(secondTens, 10000)
increaseTime(secondOnes, 1000)
increaseTime(msHundreds, 100)
increaseTime(msTens, 10)

let addRed = function(){
     if(secondTens.textContent >= 1){
          digits.classList.add('.redDigit')
     }
}
addRed()