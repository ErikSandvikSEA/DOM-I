console.log('working')

let startTime = Date.now();


let secondTens = document.querySelector('#secondTens')
let secondOnes = document.querySelector('#secondOnes')
let msHundreds = document.querySelector('#msHundreds')
let msTens = document.querySelector('#msTens')
let digits = document.querySelectorAll('div.digit')
console.log(digits)
// console.log(secondTens)

function increaseTime(id, interval) {
     id.textContent = 0;
     setInterval(function () {
         let elapsedTime = Date.now() - startTime
          secondTens.textContent = Math.floor(elapsedTime / 10000) %10;
          secondOnes.textContent = Math.floor(elapsedTime / 1000) %10;
          msHundreds.textContent = Math.floor(elapsedTime / 100) %10;
          msTens.textContent = Math.floor(elapsedTime / 10)%10;
          if(elapsedTime >= 10000){
               secondTens.textContent = 1;
               secondOnes.textContent = 0;
               msHundreds.textContent = 0;
               msTens.textContent = 0;
               digits.forEach(number => {
                    number.classList.add('redDigit')
               })
          }
     //      console.log(elapsedTime)
     //     if (id.textContent < 9){
     //      id.textContent++
     //      } else {
     //           id.textContent = 0
     //      }
     }, interval
     )
}

// console.log(startTime)

// increaseTime(secondTens, 10000)
// increaseTime(secondOnes, 1000)
increaseTime(msHundreds, 100)
// increaseTime(msTens, 10)



let addRed = function(){
     if(secondTens.textContent >= 1){
          digits.classList.add('.redDigit')
     }
}
addRed()