jQuery(document).ready(function () {
    jQuery('#SubmitContact').click(function () {
        var userid = jQuery.trim(jQuery('input:text[name=userid]').val());
        var passwordx = jQuery.trim(jQuery('input:password[name=passwordx]').val());
        var rowcontent = '';
        jQuery.getJSON('http://cdn.gdnonline.com/logins/' + userid + '/' + passwordx + '/?jsoncallback=?', function (data) {
            jQuery.each(data, function (key, value) {
                window.localStorage.setItem("gdnonlineuser", data[key].name);
                window.localStorage.setItem("gdnonlinexpiry", parseJsonDate(data[key].expirydate));
                window.location.href = "index.html";

              //  alert(parseJsonDate(data[key].expirydate));
 

            });
            if (!data[0]) {
                jQuery('#msg').text("Invalid login!");

            }
        });

        function parseJsonDate(jsonDateString) {
            return new Date(parseInt(jsonDateString.replace('/Date(', '')));
        }


    });
});

