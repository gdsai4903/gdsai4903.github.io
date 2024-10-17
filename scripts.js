// Function to toggle mobile menu
function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
    console.log("Mobile menu toggled");
}

// Custom function to close the modal
function closeModal() {
    // Get the modal element
    var modalElement = document.getElementById('project1Modal');
    var modalElement = document.getElementById('project2Modal');

    // Create a Bootstrap modal instance
    var modalInstance = bootstrap.Modal.getInstance(modalElement);
    console.log('Close button clicked');

    // If the modal instance exists, hide it
    if (modalInstance) {
        modalInstance.hide();
    } else {
        // If the modal is not initialized, log a message
        console.log('Modal instance not found. Attempting to show it instead.');
        var modal = new bootstrap.Modal(modalElement); // Initialize and show if needed
        modal.show();
    }
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the close button
    var closeModalButton = document.getElementById('closeModalButton');
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Optional: Open modal function for the trigger button
    var openModalButton = document.getElementById('openModalButton');
    if (openModalButton) {
        openModalButton.addEventListener('click', function() {
            var modal = new bootstrap.Modal(document.getElementById('project1Modal'));
            modal.show();
        });
    }
});
