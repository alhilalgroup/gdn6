jQuery(document).ready(function () {
    jQuery('#SubmitContact').click(function () {
        var userid = jQuery.trim(jQuery('input:text[name=userid]').val());
        var passwordx = jQuery.trim(jQuery('input:password[name=passwordx]').val());
        var rowcontent = '';
        jQuery.getJSON('http://cdn.gdnonline.com/logins/' + userid + '/' + passwordx + '/?jsoncallback=?', function (data) {
            jQuery.each(data, function (key, value) {
                window.localStorage.setItem("gdnonlineuser", data[key].name);
                window.localStorage.setItem("gdnonlinexpiry", data[key].expirydate);
                window.location.href = "index.html";
            });
            if (!data[0]) {
                jQuery('#msg').text("Invalid login!");

            }
        });
    });
});

