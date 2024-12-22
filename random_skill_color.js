// Random light color generator
function getRandomLightColor() {
    const r = Math.floor(Math.random() * 128) + 128; // Red: 128–255
    const g = Math.floor(Math.random() * 128) + 128; // Green: 128–255
    const b = Math.floor(Math.random() * 128) + 128; // Blue: 128–255
    return `rgb(${r}, ${g}, ${b})`;
}

// Select all elements with the class 'random-bg'
const elements = document.querySelectorAll('.x-entry');

// Apply a random light background color to each element
elements.forEach(element => {
    element.style.backgroundColor = getRandomLightColor();
});