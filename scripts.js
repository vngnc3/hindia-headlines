const intervalDuration = 5000; // Adjust this for headline change interval
const transitionDuration = 500; // Adjust this for the duration of the unmounting
const delayBetweenHeadlines = 100; // Adjust this for delay between headlines appearing
let shownIndices = [[], [], [], []]; // Store indices that have been shown

function getUniqueRandomIndex(array, arrayIndex) {
    if (shownIndices[arrayIndex].length >= array.length) shownIndices[arrayIndex] = [];
    let index;
    do {
        index = Math.floor(Math.random() * array.length);
    } while (shownIndices[arrayIndex].includes(index));
    shownIndices[arrayIndex].push(index);
    return index;
}

function displayHeadline(columnId, array, arrayIndex) {
    const col = document.getElementById(columnId);
    if(!col) {
        console.error(`Element with ID ${columnId} not found!`);
        return;
    }
    setTimeout(() => {
        const index = getUniqueRandomIndex(array, arrayIndex);
        const headline = array[index];
        col.textContent = headline;
        console.log(`Displaying headline for ${columnId} - ${headline}`);
    }, transitionDuration + (arrayIndex * delayBetweenHeadlines));
}

function displayHeadlines() {
    console.log('Unmounting text...');
    document.querySelectorAll('.column').forEach(col => col.textContent = '');
    setTimeout(() => {
        console.log('Displaying headlines...');
        displayHeadline('headlineOne', arrayOne, 0);
        displayHeadline('headlineTwo', arrayTwo, 1);
        displayHeadline('headlineThree', arrayThree, 2);
        displayHeadline('headlineFour', arrayFour, 3);
    }, transitionDuration);
}

setInterval(() => {
    console.log('Interval triggered...');
    displayHeadlines();
}, intervalDuration + transitionDuration);

// Kick off the first display
console.log('Kicking off the first display...');
displayHeadlines();
