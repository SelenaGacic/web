var move = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    var img = $("img");

    img.offset({top: y - 50, left: x - 50});
}

var toggle = true;

var toggleMoving = function () {
    if (toggle) {
        $(document).of("click", move);
        toggle = !toggle;
    } else {
        $(document).on("click", move);
        toggle = !toggle;
    }
}


$(document).on("click", move);

$("button").on("click", toggleMoving)