// function calculater
function setNumber(num) {
    var input = document.getElementById("number")
    // input.value = input.value + num
    input.value += num

    // console.log(num, input, "num")
}


function ans() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}
function clr() {
    var inputValue = document.getElementById("number")
    // var output = eval(inputValue.value)
    inputValue.value = " ";
}







// function Double() {
//     var inputValue = document.getElementById("number")
//     var output = eval(inputValue.value )
//     inputValue.value = output
// }
