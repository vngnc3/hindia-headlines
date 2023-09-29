const intervalDuration = 5000;
let indices = [0, 0, 0, 0]; // Indices for each array

function displayHeadline(columnId, array, arrayIndex) {
    const col = document.getElementById(columnId);
    if(!col) {
        console.error(`Element with ID ${columnId} not found!`);
        return;
    }
    if(!Array.isArray(array) || array.length === 0) {
        console.error(`Array for ${columnId} is not defined or empty!`);
        return;
    }
    const index = indices[arrayIndex];
    if(index >= array.length) {
        console.error(`Index ${index} out of bounds for ${columnId}!`);
        return;
    }
    const headline = array[index];
    if(!headline) {
        console.error(`Headline at index ${index} for ${columnId} is undefined!`);
        return;
    }
    console.log(`Displaying headline for ${columnId} - ${headline}`);
    col.textContent = headline;
    indices[arrayIndex] = (index + 1) % array.length;
}

function displayHeadlines() {
    console.log('Displaying headlines...');
    displayHeadline('headlineOne', arrayOne, 0);
    displayHeadline('headlineTwo', arrayTwo, 1);
    displayHeadline('headlineThree', arrayThree, 2);
    displayHeadline('headlineFour', arrayFour, 3);
}

setInterval(() => {
    console.log('Interval triggered...');
    displayHeadlines();
}, intervalDuration);

// Kick off the first display
console.log('Kicking off the first display...');
displayHeadlines();
