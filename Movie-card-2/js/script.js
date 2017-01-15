
var allStars = $(".star");

$(".star").click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".userRate").css("display", "none");
        return false;
    }

    allStars.removeClass("active");
    $(this).addClass("active");
    $(".userRate").html("User rating is " + ($(this).index() + 1)).css("display", "block");

});

