jQuery(document).ready(function () {

    var rownum = 0;
    jQuery.getJSON('http://cdn.gdnonline.com/homenews?jsoncallback=?', function (data) {
        var contenthtml = '';

        var categoryname = "";

        jQuery.each(data, function (key, value) {

            if (categoryname != data[key].category) {
                contenthtml += '<div class="homecategory"    onclick="javascript:window.location.href=\'section.html?secid=' + data[key].category.replace('Local', 'local').replace('International', 'international') + ' \'"  >' + data[key].category.replace('Local', 'Bahrain').replace('International', 'World') + '</div>';
                if (screen.width < 768) {
                    contenthtml += '<div   class="sliderrow"><div class="sliderpicwrap"><img  class="sliderpic"   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   src ="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace(".jpg", "_t.jpg").replace(".JPG", "_t.jpg") + '" /></div>';
                }
                else {
                    contenthtml += '<div   class="sliderrow"><div class="sliderpicwrap"><img   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"    class="sliderpic"  src ="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source + '" /></div>';
                }
                contenthtml += '<div class="slidertext"   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"  >' + data[key].title + '</div></div>';
            }
            else {
                contenthtml += '<div class="homerowsmall" style="clear:both;background-color:white;" class="container no-bottom"> ';
                contenthtml += '<div class="timgwrap"><img onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   src="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace('.jpg', '_t.jpg').replace('.JPG', '_t.jpg') + '" alt="img" class="timg "></div> ';
                contenthtml += ' <div class="ttitle roboto"  onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   >' + data[key].title + '</div> ';
                contenthtml += '</div>';
            }
            //if (rownum == 4) {
            //    contenthtml += '<div class="clear" align="center" style="width:100%;background-color:red" ><iframe marginheight="0" marginwidth="0" align="left" src="topbanner.html" width="310" height="260" frameborder=0></iframe></div>';
                
            //}
            categoryname = data[key].category;

            rownum++;
        });

        jQuery('#pagecontent').append(contenthtml);
         


        jQuery.getJSON('http://cdn.gdnonline.com/slider?jsoncallback=?', function (data) {// editors pick
            var contenthtml = "";
            jQuery.each(data, function (key, value) {
                contenthtml = "";
                if (screen.width < 768) {
                    contenthtml += '<div   class="sliderrow"><div class="sliderpicwrap"><img  class="sliderpic"   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"   src ="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source.replace(".jpg", "_t.jpg").replace(".JPG", "_t.jpg") + '" /></div>';
                }
                else {
                    contenthtml += '<div   class="sliderrow"><div class="sliderpicwrap"><img   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"    class="sliderpic"  src ="http://www.gdnonline.com/gdnimages/' + data[key].mime_type_source + '" /></div>';
                }
                contenthtml += '<div class="slidertext"   onclick="javascript:window.location.href=\'details.html?id=' + data[key].article_id + ' \'"  >' + data[key].title + '</div><div class="homesmallcat"    onclick="javascript:window.location.href=\'section.html?secid=' + data[key].category.replace('Local', 'local').replace('International', 'international') + ' \'"  >' + data[key].category.replace('Local', 'Bahrain').replace('International', 'World') + '</div></div>';

                $("#slidercontent").append(contenthtml);
            });
        });
        


 


        var name = localStorage.getItem("gdnonlineuser");
        if (name != null && name != 'null') {
            jQuery("#salute,#salute1").append("Hi " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
        }
        else {
            jQuery("#salute,#salute1").hide();
        }



        function querystring(key) {
            var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|jQuery)', 'gi');
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
    });
});