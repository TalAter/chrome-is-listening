(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);

// jQuery-typing
(function(f){function l(g,h){function d(a){if(!e){e=true;c.start&&c.start(a,b)}}function i(a,j){if(e){clearTimeout(k);k=setTimeout(function(){e=false;c.stop&&c.stop(a,b)},j>=0?j:c.delay)}}var c=f.extend({start:null,stop:null,delay:400},h),b=f(g),e=false,k;b.keypress(d);b.keydown(function(a){if(a.keyCode===8||a.keyCode===46)d(a)});b.keyup(i);b.blur(function(a){i(a,0)})}f.fn.typing=function(g){return this.each(function(h,d){l(d,g)})}})(jQuery);

jQuery(function($) {

    // pin script
    if($('.post_share').length){
        if(screen.width < 768 || window.innerWidth < 768 || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)){}else{
            $(window).bind('load', function(){
                var values_3 = function(){
                    screenWidth = screen.width;
                    windowWidth = window.innerWidth;
                    post_offset_top = $('.post_share').offset().top;
                    post_offset_left = $('#main').offset().left + $('#main').outerWidth();
                    menu_height = $('#main_menu').outerHeight();
                    content_height = ($('#main').offset().top + $('#main').outerHeight()) - $('.post_share').height();
                }
                values_3();
                function post_social_margin(){
                    scrollPosition = $(document).scrollTop();
                    if (scrollPosition > post_offset_top - 100 ) {
                        if(scrollPosition > content_height){
                            $('.post_share').css({'position': 'absolute','top': 'auto', 'bottom': 0, 'left': 'auto'});
                        } else {
                            $('.post_share').css({'position': 'fixed','top': menu_height + 50, 'left': post_offset_left - 70 });
                        }
                    } else {
                        $('.post_share').css({'position': 'absolute', 'top': 0, 'left': 'auto'});
                    }
                };
                post_social_margin();
                $(window).scroll(function() {
                    if(screenWidth > 768 || windowWidth > 768){
                        post_social_margin();
                    }
                });
                $(window).resize(function() {
                    values_3();
                    if(screenWidth > 768 || windowWidth > 768){
                        post_social_margin();
                    }
                });
            });
        }
    }
});
