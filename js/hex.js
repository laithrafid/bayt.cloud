// Function to open or close the service description pane
function toggleServiceDescription(description) {
    const servicePane = document.querySelector(`.service-pane[data-description="${description}"]`);
    
    // If the pane is hidden or not found, open it
    if (servicePane.style.display === 'none' || !servicePane.style.display) {
        // Hide all service panes
        const servicePanes = document.querySelectorAll('.service-pane');
        servicePanes.forEach(pane => {
            pane.style.display = 'none';
        });
        
        // Show the service pane with the matching data-description attribute
        servicePane.style.display = 'flex';
    } else {
        // Close the service description pane
        servicePane.style.display = 'none';
    }
}

// Add click event listeners to hexagons
const hexagons = document.querySelectorAll('.hex[data-description]');
hexagons.forEach(hexagon => {
    hexagon.addEventListener('click', function () {
        const description = this.getAttribute('data-description');
        toggleServiceDescription(description);
    });
});

// Add a click event listener to the document to close panes when clicking outside
document.addEventListener('click', function (event) {
    const servicePanes = document.querySelectorAll('.service-pane');
    servicePanes.forEach(pane => {
        if (pane.style.display === 'flex' && !pane.contains(event.target)) {
            pane.style.display = 'none';
        }
    });
});
