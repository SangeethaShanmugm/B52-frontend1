function welcome(name, callback) {
    console.log(`Hi ${name}`)
    callback()
}

//callback function 

function callMe() {
    console.log("I am callback function ")
}


welcome("jack", callMe)



function greet() {
    console.log("Hello World")
}

function sayName(name) {
    console.log(`Hello ${name}`)
}

//call func

// setTimeout(greet, 3000)
// sayName("John")


function welcome1(name, myFunction) {
    console.log("Hello")
    //callback function
    myFunction(name)
}

//callback Function 

function sayName(name) {
    console.log(`Hello ${name}`)
}

//calling func after 3sec
setTimeout(welcome1, 3000, "John", sayName)



const carts = ["shoes", "pants", 'tshirt', "kurta"]

//callback Hell => pyramid of Doom
api.createOrder(carts, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})



