/**
 * @fileoverview action
 * @author gao 
 * @date 2015-03-04
 */

define(['jquery', 'easing', 'scrollify'], function($) {
	"use strict";
	return {
		init : function(){

			$(".panel").css({"height":$(window).height()});

			var timer;

			$(window).resize(function() {
				clearTimeout(timer);
				timer = setTimeout(function() {
					$(".panel").css({"height":$(window).height()});
				},40);
			});

			$.scrollify({
				section : ".panel",
				scrollbars : false
			});

			$(".scroll").click(function(e) {
				e.preventDefault();
				$.scrollify("move",$(this).attr("href"));
			});
		}
	};
});