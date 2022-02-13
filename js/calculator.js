function deleteButton() {
    document.getElementById('head-number').innerText = ""
}
function operationCalculation(operator) {
    document.getElementById('head-number').innerText += operator
}

function resultCalculation() {
    let a = document.getElementById('head-number').innerText;
    let b = eval(a);
    document.getElementById('head-number').innerText = b
}







/* function numberButton() {
    let sevenclick = document.getElementsByClassName('number-button')
    console.log(parseFloat(sevenclick))
    let headNumber = document.getElementById('head-number')
    console.log(headNumber.innerText)
    headNumber.innerText = parseFloat(sevenclick.innerText)
    console.log(headNumber.innerText)
} */