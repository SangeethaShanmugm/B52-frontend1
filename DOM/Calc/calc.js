
function calc(option) {
    let a = document.getElementById("first").value
    let b = document.getElementById("second").value
    let output;
    if (option == "Add") {
        output = `Sum of the number is ${Number(a) + Number(b)}`
    } else {
        output = `Difference of the number is ${Number(a) - Number(b)}`
    }
    document.getElementsByClassName(
        "output")[0].innerText = output
}


function result() {
    let x = document.getElementById("first")
    console.log(x.value.toString())
}


function mouseOver(c) {
    c.innerHTML = "Welcome"
    c.style.backgroundColor = "red"
}

function mouseOut(c) {
    c.innerHTML = "Hello"
    c.style.backgroundColor = "lightblue"
}

document.getElementById('myDiv').addEventListener('click', myDivFunction)

function myDivFunction() {
    alert("Hey everyone")
}

// function add() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     let output = Number(a) + Number(b)
//     document.getElementsByClassName(
//         "output")[0].innerText = `Sum of the number is ${output}`
// }


// function sub() {
//     let a = document.getElementById("first").value
//     let b = document.getElementById("second").value
//     let output = Number(a) - Number(b)
//     document.getElementsByClassName(
//         "output")[0].innerText = `Sum of the number is ${output}`
// }