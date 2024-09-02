// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Apply the 'all' filter when the page loads
    filterImages('all');
});

function filterImages(category) {
    // Get all grid items
    const items = document.querySelectorAll('.grid-item');
    
    // Show all items if "all" is selected
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block'; // Show all items
        });
    } else {
        // Loop through all items
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block'; // Show items with the selected category
            } else {
                item.style.display = 'none'; // Hide items not in the selected category
            }
        });
    }
}
