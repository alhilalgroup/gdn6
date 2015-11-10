jQuery(document).ready(function () {

    var contenthtml = '';

    jQuery.getJSON('http://cdn.gdnonline.com/classifieds/' + querystring('id') + '?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            contenthtml += '<div class="container no-bottom"> ';
            contenthtml += ' <div class="ttitle  "  onclick="javascript:window.location.href=\'classdetails.html?orderid=' + data[key].OrderID + '&adserialno=' + data[key].adserialno + ' \'"   >' + data[key].Text + '';
            if (data[key].AdvType == 1 || data[key].addimg != "") {
                contenthtml += '<i style="color:red;font-size:25px" class="fa fa-picture-o"></i>';
            }

            contenthtml += '</div> <br class="clear"></div><div class="clear decoration"></div> ';
        });
        jQuery('#pagecontent').append(contenthtml);
    });



    
    var dd = '';

    jQuery.getJSON('http://cdn.gdnonline.com/ClassifiedSections/1/?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            dd += '<option value=classifieds.html?id=' + data[key].SectionID + '>' + data[key].SectionName + '</option>';

            if (querystring('id') == data[key].SectionID) {
                jQuery('#sectionname').append(data[key].SectionName);
            }

        });
        jQuery('#ddClassifieds').append(dd);
    });


    var name = localStorage.getItem("gdnonlineuser");
    if (name != null && name != 'null') {
        jQuery("#salute").append("Welcome " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
    }
    else {
        jQuery("#salute").hide();
    }



    jQuery('#ddClassifieds').change(function () {
        window.location = jQuery(this).val();
    });


});





function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
    return r;
}

function ParseJsonDate(dateString) {
    var milli = dateString.replace(/\/Date\((-?\d+)\)\//, '$1');
    var date = new Date(parseInt(milli));
    var date2 = String(date).substring(0, 16);
    return date2;
}