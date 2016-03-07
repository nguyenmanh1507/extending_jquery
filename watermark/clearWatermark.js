$.fn.clearWatermark = function() {
	return this.each(function() {
		var field = $(this);
		if(field.val() == field.data('title'))
			field.val('');
	});
};
