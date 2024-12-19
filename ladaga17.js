// Task 1: Click Event Handling
function handleButtonClick() {
    console.log("Button clicked");
}
document.getElementById("myButton").addEventListener("click", handleButtonClick);

// Task 2: Keydown Event Handling
function handleKeyDown() {
    console.log("Key pressed down");
}
document.addEventListener("keydown", handleKeyDown);

// Task 3: Blur Event Handling
function handleBlur() {
    console.log("Input field lost focus");
}
document.getElementById("myInput").addEventListener("blur", handleBlur);

// Task 4: Mousedown Event Handling
function handleMouseDown() {
    console.log("Mouse button pressed down on the button");
}
document.getElementById("mousedownButton").addEventListener("mousedown", handleMouseDown);

// Task 5: Mousemove Event Handling
function handleMouseMove() {
    console.log("Mouse moved over the div");
}
document.getElementById("myDiv").addEventListener("mousemove", handleMouseMove);

// Task 6: Wheel Event Handling
function handleWheel() {
    console.log("Mouse wheel scrolled");
}
document.getElementById("myDiv").addEventListener("wheel", handleWheel);