jQuery(document).ready(function () {

    var contenthtml = '';

    jQuery.getJSON('http://cdn.gdnonline.com/classifiedsections/?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            contenthtml += '<img onclick=window.location.href="classifieds.html?id=' + data[key].SectionID + '" style="float:left; margin:5px 5px 0 0" src="http://www.gdnonline.com/images/icons/' + data[key].SectionID + '.png"> <div class="" style="color:black;float:left;font-size:15px;margin:25px 0 0 0"  onclick=window.location.href="classifieds.html?id=' + data[key].SectionID + '">' + data[key].SectionName + ' </div><br style="clear:both">';
            
        });
        jQuery('#pagecontent').append(contenthtml);
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