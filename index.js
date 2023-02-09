// initialize count as 0
// listen for clicks in increment button
// for every click increment count variable and log it out
// change the count-el in HTML to reflect the count variable

let count = 0
let countEl = document.getElementById('count-el')
function increment(){
    count += 1
    console.log(count)
    //ele = document.querySelector('#count-el')
    //ele.target = count;
    countEl.innerText = count
}

let saveEl = document.querySelector('#save-el')
function save(){
    let saveVar = ` ${count} - `
    saveEl.textContent += saveVar
    count = 0
    countEl.innerText = 0
    
}