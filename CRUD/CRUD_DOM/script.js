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
    td3.innerHTML = `<button type="button" class='btn btn-primary'  id='edit${id}' onClick="getModal('${id}','${value1}','${value2}')" data-bs-toggle="modal" data-bs-target=#exampleModal${id}>Edit</button><button class='btn btn-danger' id='delete${id}' onClick='deleteUserById(${id})'>Delete</button>`
    console.log(value1, value2)
    tr.append(td1, td2, td3)
    itemList.append(tr)
}


function getModal(id, value1, value2) {
    console.log(id, value1, value2)
    const modal = document.createElement('span')
    console.log(modal)
    modal.innerHTML =
        `<div div class="modal fade" id=exampleModal${id} role='dialog' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for=modalname${id} class="form-label">Name</label>
                               <input type="text" class="form-control" id=modalname${id} value=${value1} aria-describedby="name" />                              
                            </div>
                            <div class="mb-3">
                                <label for=modalemail${id} class="form-label">Email</label>
                                <input type="text" class="form-control" id=modalemail${id} value=${value2} aria-describedby="email" />                               
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick='updateUserData(${id})'>Save Changes</button>
                    </div>
                </div>
            </div> 
            </div>`


    document.body.append(modal)
}



async function updateUserData(id) {

    let modelName = document.getElementById(`modalname${id}`).value
    let modelEmail = document.getElementById(`modalemail${id}`).value
    console.log(modelName, modelEmail)


    let updatedUser = {
        name: modelName,
        email: modelEmail,
    }

    //post 
    // 1. method - PUT
    // 2. headers => data is in jSON 
    // 3. body => JSON.stringify
    let data = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        //pass data in body
        body: JSON.stringify(updatedUser)
    })
    let res = await data.json()
    console.log(res)
    document.getElementById(`name${id}`).innerText = res.name
    document.getElementById(`email${id}`).innerText = res.email

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


async function deleteUserById(id) {
    console.log(id)
    let data = await fetch(url + "/" + id, {
        method: "DELETE"
    })
    let res = await data.json()
    console.log(res)
    itemList.innerHTML = ""
    getUserData()
}