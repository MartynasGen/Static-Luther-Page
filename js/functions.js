"use strict";

function pageScroll() {
    var top = $(window).scrollTop();
    if ( top > 80 ) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
    return;
}
function changeActiveMenuItem() {
    var top = $(window).scrollTop() + 45,
        nuorodu_kiekis = $('#main_nav > a').length,
        nuorodos_tekstas = '';

    for ( var n=0; n<nuorodu_kiekis; n++ ) {
        nuorodos_tekstas = $('#main_nav > a').eq(n).attr('href');
        if ( $(nuorodos_tekstas).position().top <= top ) {
            $('#main_nav > a').removeClass('active');
            $('#main_nav > a').eq(n).addClass('active');
        }
    }
    return;
}
function aboutSectionSocialIcons( icon_list ) {
    var ilgis = icon_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<a href="'+icon_list[i].url+'">\
                        <i class="fa '+icon_list[i].ikona+'"></i>\
                    </a>';
        }
        $('#about_social_icons').html(HTML);
    }
    return;
}
function serviceSection( service_list ) {
    var ilgis = service_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="service">\
                        <span>\
                        <i class="fa '+service_list[i].ikona+'"></i>\
                        </span>\
                        <h3>'+service_list[i].title+'</h3>\
                        <p>'+service_list[i].description+'</p>\
                    </div>';
        }
        $('#services_list').html(HTML);
    }
    return;
}
function resumeSection( resume_list ){
    var ilgis = resume_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var o=0; o<ilgis; o++ ) {
            HTML += '<div class="resume_box">\
                        <h3>'+resume_list[o].main_title+'</h3>\
                        <h5>'+resume_list[o].title+'</h5>\
                        <span>'+resume_list[o].date+'</span>\
                        <p>'+resume_list[o].text+'</p>\
                        <h5>'+resume_list[o].title_second+'</h5>\
                        <span>'+resume_list[o].date_second+'</span>\
                        <p>'+resume_list[o].text_second+'</p>\
                    </div>';
        }
        $('#resumes_list').html(HTML);
    }
    return;
}
function gallerySection( target, data ) {
    if ( data.length === 0 ) {
        HTML = 'NO WORKS FOR TODAY... :( COME BACK LATER ;)';
        return $(target).html(HTML);
    }
    var panaudoti_tagai = [],
        kiekis = data.length,
        tagas = '',
        HTML = '<div class="gallery">\
                    <div class="filter">\
                        <div class="item active">ALL</div>';
                for ( var o=0; o<kiekis; o++) {
                    tagas = data[o].tag.toLowerCase();
                    if ( panaudoti_tagai.indexOf(tagas) === -1 ) {
                        HTML += '<div class="item">'+tagas+'</div>';
                        panaudoti_tagai.push(tagas);
                    }
                }
            HTML += '</div>\
                    <div class="list">';
                for ( var i=0; i<kiekis; i++ ) {
                    HTML += '<div class="item" data-tag="'+data[i].tag.toLowerCase()+'"\
                                style="background-image: url(images/gallery/'+data[i].img+');">\
                                <div class="black"></div>\
                                <div class="texts">\
                                    <div class="title">'+data[i].title+'</div>\
                                    <div class="tag">'+data[i].tag+'</div>\
                                </div>\
                            </div>';
                }
            HTML += '</div>\
                </div>';
            return $(target).html(HTML);
}
function blogSection( blog_list ) {
    var ilgis = blog_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<div class="blog">\
                        <img src="images/'+blog_list[i].photo+'">\
                        <h3>'+blog_list[i].title+'</h3>\
                        <span>Posted On '+blog_list[i].date+'</span>\
                        <p>'+blog_list[i].description+'</p>\
                        <button class="btn_blog">Read more</button>\
                    </div>';
        }
        $('#blog_list').html(HTML);
        // fixBlogPostHeights();
    }
    return;
}
// function fixBlogPostHeights() {
//     var kiekis = $('#blog_list > .blog').length,
//         max_height = 0,
//         height = 0;
//     for ( var k=0; k<kiekis; k++ ) {
//         height = $('#blog_list > .blog').eq(k).height();
//         console.log(height);
//         if ( height > max_height ) {
//             max_height = height;
//         }
//     }
//     return;
// }
function SocialIcons( icon_list ) {
    var ilgis = icon_list.length,
        HTML = '';
    if ( ilgis > 0 ) {
        for ( var i=0; i<ilgis; i++ ) {
            HTML += '<a href="'+icon_list[i].url+'">\
                        <i class="fa '+icon_list[i].ikona+'"></i>\
                    </a>';
        }
        $('#social_icons').html(HTML);
    }
    return;
}
