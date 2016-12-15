"use strict";

function start() {
	var back_space = 8;
	var input_buffer = [];

    $(document).keypress(function (e) {
        if ($(":input:focus").length === 0) {
            input_buffer.push(e.keyCode);
        }
    });

    $(document).keydown(function (e) {
        if ($(":input:focus").length === 0 && e.keyCode === back_space) {
            input_buffer.pop();
            e.preventDefault();
        }
    });

    $("input").on("focus", function () {
        $(this).val($(this).val() + input_buffer.map(String.fromCharCode).join(""));
        input_buffer = [];
    });
}

$(window).load(function () {
    start();
});
