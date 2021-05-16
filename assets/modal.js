function display_modal(modalID) {
    var modal = document.getElementById(modalID);

    var specific_span = document.getElementsByClassName(modalID+"_close")[0];


    jQuery('#'+modalID+' video').prop('muted', false);
    jQuery('#'+modalID+' video')[0].play();

    modal.style.display = "block";

    specific_span.onclick = function() {
        modal.style.display = "none";
        jQuery('#'+modalID+' video')[0].pause();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            jQuery('#'+modalID+' video')[0].pause();
        }
    }
}