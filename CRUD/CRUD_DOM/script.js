let url = "https://6541cd35f0b8287df1fee5de.mockapi.io/users"
console.log(url)



var itemList = document.getElementById("itemList")

//     < tr >
//     <td>abc</td>
//     <td>abc@gmail.com</td>
//     <td><button>Edit</button><button>Delete</button></td>
// </ > 
function createTableRow(value1, value2, id) {
    console.log(id)
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    td1.setAttribute('id', `name${id}`)
    td2.setAttribute('id', `email${id}`)
    td1.innerHTML = value1
    td2.innerHTML = value2
    td3.innerHTML = "<button>Edit</button><button>Delete</button>"
    console.log(value1, value2)
    tr.append(td1, td2, td3)
    itemList.append(tr)
}


async function getUserData() {
    let data = await fetch(url, {
        method: "GET"
    })
    let res = await data.json()
    console.log(res)
    console.table(res);
    res.map((element) => {
        console.log(element.name, element.email, element.id)
        createTableRow(element.name, element.email, element.id)
    })

}
getUserData()



// async function getUserById(id) {
//     let data = await fetch(`${url}/${id}`, {
//         method: "GET"
//     })
//     let res = await data.json()
//     console.log(res)
//     createTableRow(res.name, res.email, res.id)

// }
// getUserById(3)


async function createUserData() {


    let nameInput = document.getElementById('nameInput').value
    let emailInput = document.getElementById('emailInput').value

    let newUser = {
        name: nameInput,
        email: emailInput,
    }

    //post
    // 1. method - POST
    // 2. headers => data is in jSON
    // 3. body => JSON.stringify
    let data = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //pass data in body
        body: JSON.stringify(newUser)
    })
    let res = await data.json()
    console.log(res)
    createTableRow(res.name, res.email, res.id)
    // getUserById(res.id)

}

