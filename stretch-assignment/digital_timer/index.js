console.log('working')

let secondTens = document.querySelector('#secondTens')
let secondOnes = document.querySelector('#secondOnes')
let msHundreds = document.querySelector('#msHundreds')
let msTens = document.querySelector('#msTens')
console.log(secondTens)

function increaseTime(id, interval) {
     id.textContent = 0;
     setInterval(function (){
       id.textContent++
     }, interval     
     )
}

increaseTime(secondTens, 10000)
increaseTime(secondOnes, 1000)
increaseTime(msHundreds, 100)
increaseTime(msTens, 10)