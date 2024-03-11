import { items } from "./items.js";

function generateMasonryGrid(columns, items) {
    const gridContainer = document.querySelector(".grid");
    gridContainer.innerHTML = "";

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

        const gridColumnItems = gridColumns[i];
        for (let j = 0; j < gridColumnItems.length; j++) {

            const itemElement = document.createElement("div");
            itemElement.classList.add("grid-col-item");

            const imgElement = document.createElement("img");
            imgElement.src = gridColumnItems[j].imgUrl;

            itemElement.appendChild(imgElement);
            columnElement.appendChild(itemElement);
        }

        gridContainer.appendChild(columnElement);
    }

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
