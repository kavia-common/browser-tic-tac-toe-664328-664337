// Add click event listeners to category buttons
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        button.classList.add('active');
    });
});

// Add click event listeners to favorite buttons
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        // Here you would typically update the heart icon to filled/unfilled
    });
});

// Add click event listeners to bottom navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    if (!item.classList.contains('add-button')) {
        item.addEventListener('click', () => {
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(navItem => {
                navItem.classList.remove('active');
            });
            // Add active class to clicked item
            item.classList.add('active');
        });
    }
});

// Add click event listener to add button
document.querySelector('.add-button').addEventListener('click', () => {
    // Implement add functionality
    console.log('Add button clicked');
});
