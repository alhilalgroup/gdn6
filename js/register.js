jQuery(document).ready(function () {





    jQuery('#SubmitContact').click(function () {

        var name = jQuery.trim(jQuery('input:text[name=name]').val());
        var phone = jQuery.trim(jQuery('input:text[name=phone]').val());
        var email = jQuery.trim(jQuery('input:text[name=email]').val());
        var userid = jQuery.trim(jQuery('input:text[name=userid]').val());
        var passwordx = jQuery.trim(jQuery('input:password[name=passwordx]').val());

        if (name == "" || phone == "" || email == "" || userid == "" || passwordx == "") {
            jQuery('#msg').text("All Fields are mandatory!");
        }


        var rowcontent = '';
        jQuery.getJSON('http://cdn.gdnonline.com/register/' + name + '/' + phone + '/' + email + '/' + userid + '/' + passwordx + '/?jsoncallback=?', function (data) {
            jQuery.each(data, function (key, value) {
            });
            if (!data[0]) {
                jQuery('#msg').text("User ID already in use, try another one!");

            }
            else {
                jQuery('.contactForm').html("<br><br><p>You've successfully registered.<br><br>Click here to <a onclick=window.location.href='login.html' >Login</a></p>");
            }
        });
    });
});

