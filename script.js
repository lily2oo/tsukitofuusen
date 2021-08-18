$(window).on('load',function(){
    var loading = function(){
      $('#loading').fadeOut('fast');
      $('.wrap').fadeIn('slow');
    };
    setTimeout(loading,5000); // setTimeoutを使って表示時間を設定する
  });

$(function () {
    $(".inview_re").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        } else {
            $(this).stop().removeClass("is-show");
        }
    });
});


if (window.matchMedia('(min-width: 768px)').matches) {
    $(function () {
        var duration = 1000;
        $(".amayadori_cover,.rinne_cover,.gallery_cover")
            .on("mouseover", function () {
                $(this).stop(true).animate({
                        opacity: 0,
                        "z-index": -10,
                    },
                    duration);
            })
            .on("mouseout", function () {
                $(this).stop(true).animate({
                        opacity: 1,
                        "z-index": 3,
                    },
                    duration);
            });
    });
} else {
    $(function () {
        var duration = 1000;
        $(".amayadori_cover,.rinne_cover,.gallery_cover")
            .on("click", function () {
                $(this).animate({
                        opacity: 0,
                        "z-index": -10,
                    },
                    duration,
                    function () {
                        setTimeout(function(){
                            $(".amayadori_cover,.rinne_cover,.gallery_cover")
                            .css({
                                "z-index": 1,
                            })
                            .animate({
                                opacity:1
                                },
                                duration);
                        },1500);
                    }
                    )
            });
    });
}