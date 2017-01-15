
var allStars = $(".star");

$(".star").click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".userRate").css("display", "none");
        return false;
    }

    allStars.removeClass("active");
    $(this).addClass("active");
    $(".userRate").html("You rated this movie " + ($(this).index() + 1)).css("display", "block");

});

