function display_modal(modalID) {
    // Get the modal
    var modal = document.getElementById(modalID);

    // Get the button that opens the modal
    // var btn = document.getElementById(modalID);

    // Get the <span> element that closes the modal
    var specific_span = document.getElementsByClassName(modalID+"_close")[0];

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    specific_span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}