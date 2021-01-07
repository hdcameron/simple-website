// Define a Function
function sayOuch() {
	alert('Hey, you just clicked the image!');
}

// Use a CSS selector to identify an element
var logo = document.querySelector('img');

// Assign the function to the onclick event on that element
logo.onclick = sayOuch;
