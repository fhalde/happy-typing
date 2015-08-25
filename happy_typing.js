var BACK_SPACE = 8;
var input_buffer = [];

$( window ).load(function() {
  start();
});

function start() {
	$(document).keypress(function(e) {
		inputs_focus_free = $(":input:focus").length == 0;
		if(inputs_focus_free) {
			input_buffer.push(e.keyCode);
		}
	});

	$(document).keydown(function(e) {
		inputs_focus_free = $(":input:focus").length == 0;
		if(inputs_focus_free && e.keyCode == BACK_SPACE) {
			input_buffer.pop();
			e.preventDefault();
		}
	});
	
	$("input").on("focus", function() {
		current_input_value = $(this).val();
		buffer_string_value = "";
		for(i = 0; i < input_buffer.length; i++) {
			buffer_string_value += String.fromCharCode(input_buffer[i]);
		}
		$(this).val(current_input_value + buffer_string_value);
		input_buffer = [];
	});
}