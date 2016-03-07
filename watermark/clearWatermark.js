$.fn.clearWatermark = function() {
	return this.each(function() {
		var field = $(this);
		if(field.val() == field.attr('title'))
			field.val('');
	});
};
