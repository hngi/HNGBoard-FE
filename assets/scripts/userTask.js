// $('.alert').alert()?
$(document).ready(function() {
    $('#userTaskBtn').click(function() {
        $('#userAlert').show('fade');

        setTimeout(function() {
            $('userAlert').hide('fade');
        }, 2000);
    });
    $('#alertClose').hide('fade');
});