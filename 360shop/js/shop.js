window.onload=function () {
        var designWidth=768;
        var fontSize=12;
        var fontSize2=10;
        function resize() {
            var deviceWidth=document.documentElement.clientWidth;
            var ratio=deviceWidth/designWidth;
            var newfontSize=ratio<1?fontSize2:fontSize2*ratio;
            // document.documentElement.style.fontSize=newfontSize+'px';
            document.documentElement.style.fontSize=newfontSize+'px';
        }
        resize();
        window.onresize=resize;

     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
 }