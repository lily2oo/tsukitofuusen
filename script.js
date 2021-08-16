$(function () {
    $(".inview_re").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("is-show");
        } else {
            $(this).stop().removeClass("is-show");
        }
    });
});

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