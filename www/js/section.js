jQuery(document).ready(function () {

    jQuery("#sectionname").append(("" + querystring('secid')).replace("%20", " ").replace("%20", " ").replace('local', 'Bahrain').replace('international', 'World'));

    var contenthtml = '';

    jQuery.getJSON('http://cdn.gdnonline.com/secstories/' + querystring('secid') + '?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {

            contenthtml += '<div class="homerowsmall" style="clear:both;background-color:white;" class="container no-bottom"> ';
            contenthtml += '<div class="timgwrap"><img onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   src="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace('.jpg', '_t.jpg').replace('.JPG', '_t.jpg') + '" alt="img" class="timg "></div> ';
            contenthtml += ' <div class="ttitle roboto"  onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   >' + data[key].title + '</div> ';
            contenthtml += '</div>';



        });
        jQuery('#pagecontent').append(contenthtml);
    });

    var name = localStorage.getItem("gdnonlineuser");
    if (name != null && name != 'null') {
        jQuery("#salute").append("Welcome " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
    }
    else {
        jQuery("#salute").hide();
    }


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