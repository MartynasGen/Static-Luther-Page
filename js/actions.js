"use strict";
$(document).ready(function (){

pageScroll();
changeActiveMenuItem();
aboutSectionSocialIcons( socials );
serviceSection( service_info );
resumeSection( resume_info );
$('body').on('click', '.gallery > .filter > .item', function(){
    var filtras = $(this).text();

    $('.gallery > .filter > .item').removeClass('active');
    $(this).addClass('active');

    if ( filtras === 'ALL' ) {
        $('.gallery > .list > .item').show();
    } else {
        $('.gallery > .list > .item').hide();
        $('.gallery > .list > .item[data-tag="'+filtras+'"]').show();
    }
});
gallerySection( '#portfolio_gallery', gallery_info );
blogSection( blog_info );
SocialIcons( socials );

$(window).scroll(function(){
    pageScroll();
    changeActiveMenuItem();
});





});