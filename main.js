let list = []

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