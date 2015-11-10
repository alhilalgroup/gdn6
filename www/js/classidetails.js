jQuery(document).ready(function () {
  
    jQuery.getJSON('http://cdn.gdnonline.com/classidetails/' + querystring('orderid') + '/' + querystring('adserialno') + '/?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            jQuery('#title').append(data[key].Text);
        });
       
        
    });

    jQuery.getJSON('http://cdn.gdnonline.com/ClassiDetailsImages/' + querystring('orderid') + '/' + querystring('adserialno') + '/?jsoncallback=?', function (data) {
        jQuery.each(data, function (key, value) {
            jQuery('#images').append('<br><img style="width:100%" src="http://www.gulf-daily-news.com/classifieds/ads/'+data[key].imagename+'">');
        });


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

jQuery.date = function (dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = year + "-" + month + "-" + day;

    return date;
}



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