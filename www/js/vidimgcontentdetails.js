jQuery(document).ready(function ($) {




    function ParseJsonDate(dateString) {
        var milli = dateString.replace(/\/Date\((-?\d+)\)\//, '$1');
        var date = new Date(parseInt(milli));
        var date2 = String(date).substring(0, 16);
        return date2;
    }


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
        var date = day + "/" + month + "/" + year;

        return date;
    }

    if (localStorage.getItem("gdnonlinexpiry") != null) {
        var formattedDate = new Date(ParseJsonDate(localStorage.getItem("gdnonlinexpiry")));
        var datex = jQuery.date(formattedDate);
        var now = new Date();
    }
    
    

    var pageno = 1;
    var cupageno = 0;
    var pagecontent = "";
    var newslides = "";
    var goto = 0;

    var morestories = "<br class='clear'><div style='color:white; background-color:red;padding:5px 10px;text-transform:uppercase;font-size:16px;font-weight:bold'>More Stories</div><br>"






    $.getJSON('http://cdn.gdnonline.com/vidimgcontentdetail/' + querystring('id') + '/?jsoncallback=?', function (data) {

        morestories += "<div style=''><table style='font-size:16px'>";

        $.each(data, function (key, value) {

 


            if (data[key].category == "Local News" || data[key].category == "Local Business" || data[key].category == "Letters") {

                name = localStorage.getItem("gdnonlineuser");
               
                if (name == null || name == 'null') {
                     window.location.href = "login.html";
                }
                if (Date.parse(datex) < Date.parse(now)) {
                      window.location.href = "login.html";
                }

            }

                

            pageno++;
            cupageno++;
            if (cupageno <= 25) {
                pagecontent += "<div data-role='listview'>";
                pagecontent += " <div class='homecategory ' style='margin-top:-32px'>" + data[key].category + "</div>";
                pagecontent += "<div style='padding: 4px 10px;'>";
                pagecontent += "<div data-role='listview' class='' >";
                pagecontent += "<div class='dettitle'>" + data[key].title + "</div>";
                pagecontent += "<div class='roboto' style='line-height: 17px; font-size: 16px;overflow:hidden'>" + data[key].Article + "</div>";
                pagecontent += "</div></div></div>";

                morestories += "<tr><td style='padding:5px 0px;vertical-align:top'><i class='fa fa-angle-right fa-fw'></i></td>";
                morestories += "<td style='padding:5px 0px;vertical-align:top'><span style='cursor:pointer'  onclick=pagefinder('" + cupageno + "')>" + data[key].title + "</span></td></tr>";

                //if (data[key].articleid == querystring('id')) {
                //    goto = cupageno;

                //}

            }


        });
        morestories += "</table></div>";

        $("#morestr").append(morestories);

        $("#pagecontent").append(pagecontent);


        var name = localStorage.getItem("gdnonlineuser");
        if (name != null && name != 'null') {
            jQuery("#salute").append("Welcome " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
        }
        else {
            jQuery("#salute").hide();
        }




     
    });
});


 


 

function querystring(key) {
    var re = new RegExp('(?:\\?|&)' + key + '=(.*?)(?=&|$)', 'gi');
    var r = [], m;
    while ((m = re.exec(document.location.search)) != null) r.push(m[1]);
    return r;
}



jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});