var api_host = "https://lair.idea-x.org:14874"

function buildRequest(parray) {
    request = api_host
    for (i = 0; i < parray.length; i++) {
        request += "/" + parray[i]
    }
    return request
}

$( document ).ready(function() {
    $('#email,#password,#login-button').removeAttr('disabled', 'false')
    $('#login-button').click(function() {
        $('#email,#password,#login-button').attr('disabled', 'true')
        $('alert').addClass('hide')
        request = buildRequest(["login", $("#email").val(), $("#password").val()])
        $.ajax({
            dataType: 'json',
            url: request,
            timeout: 3000
        })
        .done(function(response) {

        })
        .fail(function() {
            $('#unavailable-msg').removeClass('hide')
        })
        .always(function() {
            $('#email,#password,#login-button').removeAttr('disabled', 'false')
        })
    });
})
