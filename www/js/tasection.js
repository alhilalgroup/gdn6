jQuery(document).ready(function () {

    jQuery("#sectionname").append(("" + querystring('secid')).replace("%20", " ").replace("%20", " ").replace("local news", "Bahrain"));

    var contenthtml = '';

    jQuery.getJSON('http://cdn.gdnonline.com/tasecstories/?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            contenthtml += '<div class="container no-bottom"> ';
            contenthtml += '<img onclick="javascript:window.location.href=\'tadetails.html?id=' + data[key].article_id + ' \'"   src="' + data[key].mime_type_source + '" alt="img" class="timg left"> ';
            contenthtml += ' <div class="ttitle oswald"  onclick="javascript:window.location.href=\'tadetails.html?id=' + data[key].article_id + ' \'"   >' + data[key].title + '</div> ';
            if (data[key].StandFirst != null) {
                contenthtml += '     <div class="standfirst"  onclick="javascript:window.location.href=\'tadetails.html?id=' + data[key].article_id + ' \'"   > ' + data[key].StandFirst.replace('<p>', '').replace('</p>', '') + ' </div> ';
            }
            contenthtml += '<br class="clear"></div><div class="clear decoration"></div> ';
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