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






    $.getJSON('http://cdn.gdnonline.com/tastorydetail/' + querystring('id') + '/?jsoncallback=?', function (data) {

        morestories += "<div style=''><table style='font-size:16px'>";

        $.each(data, function (key, value) {

 
 
                

            pageno++;
            cupageno++;
            if (cupageno <= 25) {
                pagecontent += "<li>";
                pagecontent += "<div data-role='listview'>";
                pagecontent += "<div  style='float:right;font-size: 12px;margin:10px 15px 0 0'><div style='color: #555' class='secmore'> " + cupageno + " of " + data.length + "</div></div>";
                pagecontent += "<div  style='float:right;font-size: 12px;margin:8px 5px 0 0'><a style='color: #666' class='secmore'><i class='fa fa-angle-right fa-fw'></i></a></div>";
                pagecontent += "<div id='curpage' style='float:right;font-size: 12px; margin: 10px 0px 0px 0px;color:#666'>swipe for more</div>";
                pagecontent += "<div style='float:right;font-size: 12px;margin-top:8px'><a style='color: #666' id='prevstory' class='secmore'><i style='margin: 0px' class='fa fa-angle-left fa-fw'></i></a></div>";
                pagecontent += "<div class='bar'></div><div class='sectionbox oswald' style='margin-top:-32px'>Middle East Business</div>";
                pagecontent += "<div style='height: 5px;' class='clear'></div>";
                pagecontent += "<div style='padding: 4px 10px;'>";
                pagecontent += "<div data-role='listview' class='' >";
                pagecontent += "<h2 class='oswald' style='font-size: 22px;font-weight:normal; max-width: 100%; margin: 10px 0px 0px 0px; padding: 0px;'>" + data[key].title + "</h2>";
                if (data[key].imagefilename != '') {
                    
                    pagecontent += "<br style='clear:both'><img style='width:100%;' onerror=this.style.display = 'none' src='" + data[key].mime_type_source + "'>";
                       pagecontent += "<div style='font-size: 12px; text-align: center; color: #666'>" + data[key].caption_text + "</div>";
                    
                }

                pagecontent += "<div class='roboto' style='line-height: 17px; font-size: 16px;overflow:hidden;'>" + data[key].Article + "</div>";
                pagecontent += "</div>";
                pagecontent += "</div>";
                pagecontent += "</li>";


                morestories += "<tr><td style='padding:5px 0px;vertical-align:top'><i class='fa fa-angle-right fa-fw'></i></td>";
                morestories += "<td style='padding:5px 0px;vertical-align:top'><span style='cursor:pointer'  onclick=pagefinder('" + cupageno + "')>" + data[key].title + "</span></td></tr>";

                //if (data[key].articleid == querystring('id')) {
                //    goto = cupageno;

                //}

            }


        });
        morestories += "</table></div>";

        $("#morestr").append(morestories);


        var name = localStorage.getItem("gdnonlineuser");
        if (name != null && name != 'null') {
            jQuery("#salute").append("Welcome " + name + " &nbsp;&nbsp;|&nbsp;&nbsp; <a onclick=window.location.href='logout.html'>Logout</a>");
        }
        else {
            jQuery("#salute").hide();
        }


        

        jQuery('#content-slider-1').royalSlider({
            slides: pagecontent,
            autoHeight: true,
            arrowsNav: false,
            fadeinLoadedSlide: true,
            controlNavigationSpacing: 0,
            controlNavigation: 'bullets',
            imageScaleMode: 'none',
            imageAlignCenter: false,
            navigateByClick: false,
            loop: true,
            loopRewind: true,
            numImagesToPreload: 30,
            keyboardNavEnabled: true
        });

       
   


      //  $('#content-slider-1').royalSlider('goTo', goto - 1);

    });
});


$(window).load(function () {
    $('#content-slider-1').royalSlider('updateSliderSize', true);
});

function pagefinder(pageno) {
    $('#content-slider-1').royalSlider('goTo', pageno - 1);
    jQuery('html, body').animate({ scrollTop: 0 }, 5);
}


 

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