let buttonList = []
let list = []

for (let i = 0; i < 20; i++) {
    buttonList.push(i+1)
}

const buttonContainer1 = document.getElementById("buttonContainer1")
    const buttonContainer2 = document.getElementById("buttonContainer2")
    //buttonContainer.innerHTML = "";
    for (let i = 0; i < buttonList.length; i++) {
        const button = document.createElement("button")
        button.textContent = buttonList[i].toString()
        button.onclick = function() {
            list.push(buttonList[i])
            console.log(list)
            let copyButton = button.cloneNode(true)
            buttonContainer2.appendChild(copyButton)
        }
        buttonContainer1.appendChild(button)
    }


/*
function addSquare() {
    // Get the value of the input
    const size = document.getElementById("listInput").value
    // Add the number to a list
    list.push(size)
    // Clear the input field
    document.getElementById("listInput").value=null
}

function doneSquare() {
    console.log(list)
    for(let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
    // Get square container
    const container = document.getElementById("squareContainer")
    // Clear existing squares
    container.innerHTML = ""

    for (let i = 0; i < list.length; i++) {
        const square = document.createElement("div")
        square.className = "square"
        square.style.width = 30 + "px"
        square.style.height = list[i] + "px"
        container.appendChild(square)
    }

    // Clear the list
    list = []
}

function clearSquare() {
    // Get square container
    const container = document.getElementById("squareContainer")
    // Clear existing squares
    container.innerHTML = ""
}
*/