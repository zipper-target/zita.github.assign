
window.onload = function() {
    var modal = document.getElementById("discountModal");
    var span = document.getElementsByClassName("close")[0];

    // Show the modal when the page loads
    modal.style.display = "block";

    // Close the modal when the user clicks the "x"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};