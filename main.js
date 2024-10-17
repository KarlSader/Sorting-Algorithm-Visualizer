function resizeSquare() {
    const size = document.getElementById("sizeInput").value;
    const square = document.getElementById("square");
    console.log(size)
    square.style.width = size + "px";
    square.style.height = size + "px";
}