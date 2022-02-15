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

function lastDigitDelete() {
    let headNumber = document.getElementById('head-number')
    let headText = headNumber.innerText
    let editedText = headText.slice(0, -1)
    headNumber.innerText = editedText
}









