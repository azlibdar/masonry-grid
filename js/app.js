// Array of image URLs
const imageUrls = [
    'https://dr.savee-cdn.com/things/6/4/0931a3aad3fe1c3f114f4a.webp',
    'https://dr.savee-cdn.com/things/6/5/e92bd09bcfc189c00b435a.webp',
    'https://dr.savee-cdn.com/things/5/e/8b5b7eb191c717d17ccfea.webp',
    'https://dr.savee-cdn.com/things/6/5/48f4b64e6f08f27cb92ef7.webp',
    'https://dr.savee-cdn.com/things/6/4/9fc3a296d2d243a443801d.webp',
    'https://dr.savee-cdn.com/things/6/5/dd1164360b890fb4bf1768.webp',
    'https://dr.savee-cdn.com/things/6/5/8bf967611a20b1976aea90.webp',
    'https://dr.savee-cdn.com/things/6/5/e1e48e8a561d909b45a006.png',
    'https://dr.savee-cdn.com/things/6/3/de3d16632ee2b7bbe8caa3.webp',
    'https://dr.savee-cdn.com/things/6/5/e0fdad5e16c848d19e9f75.webp',

    // Add more as needed
];

// Array to hold items with IDs and image URLs
const items = [];

// Generate items with IDs and image URLs
for (let i = 0; i < 80; i++) {
    const item = {
        id: i,
        imgUrl: imageUrls[i % imageUrls.length]
    };
    items.push(item);
}

// Function to generate a Masonry grid layout
function generateMasonryGrid(columns, items) {
    // Find the grid container
    const gridContainer = document.querySelector(".grid");
    // Clear the existing content
    gridContainer.innerHTML = "";

    // Create an array to hold grid columns
    const gridColumns = [];

    // Initialize grid columns
    for (let i = 0; i < columns; i++) {
        gridColumns.push([]);
    }

    // Distribute items into grid columns
    for (let i = 0; i < items.length; i++) {
        const columnIndex = i % gridColumns.length;
        gridColumns[columnIndex].push(items[i]);
    }

    // Create HTML elements for grid columns
    for (let i = 0; i < columns; i++) {
        const columnElement = document.createElement("div");
        columnElement.classList.add("grid-col");

        // Get items for the current column
        const gridColumnItems = gridColumns[i];
        for (let j = 0; j < gridColumnItems.length; j++) {

            const itemElement = document.createElement("div");
            itemElement.classList.add("grid-col-item");

            // Create img element for each item
            const imgElement = document.createElement("img");
            imgElement.src = gridColumnItems[j].imgUrl;

            // Append img element to item element
            itemElement.appendChild(imgElement);
            // Append item element to column element
            columnElement.appendChild(itemElement);
        }

        // Append column element to grid container
        gridContainer.appendChild(columnElement);
    }

    // Call animateOnScroll after generating the grid
    animateOnScroll();
}

window.addEventListener("DOMContentLoaded", function () {
    animateOnScroll();
    window.addEventListener("scroll", function () {
        animateOnScroll();
    });
});

// Scroll Animation
function animateOnScroll() {
    const itemsInsideGrid = document.querySelectorAll(".grid-col-item");

    const triggerBottom = window.innerHeight;

    itemsInsideGrid.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show-item');
        } else {
            item.classList.remove('show-item');
        }
    });
}

// Resposive Design Code
let columns = 4;
if (window.matchMedia("(max-width: 767px)").matches) {
    columns = 1;
} else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
    columns = 2;
}

generateMasonryGrid(columns, items);

// When Resizing window
window.addEventListener('resize', function () {
    let newColumns = 4;
    if (window.matchMedia("(max-width: 767px)").matches) {
        newColumns = 1;
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
        newColumns = 2;
    }

    if (newColumns !== columns) {
        columns = newColumns;
        generateMasonryGrid(columns, items);
    }
});
