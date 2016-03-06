$.fn.watermark = function (options) {
	'use strict';

	options = $.extend({watermarkClass: 'watermark'}, options || {});
	return this.focus(function() {
		var field = $(this);

		if(field.val() == field.attr('title'))
			field.val('').removeClass(options.watermarkClass);
	}).blur(function() {
		var field = $(this);

		if(field.val() == '')
			field.val(field.attr('title')).addClass(options.watermarkClass);
	}).blur()
	;
}