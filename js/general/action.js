/**
 * @fileoverview action
 * @author gao 
 * @date 2015-03-04
 */

define(['jquery', 'easing', 'scrollify'], function($) {
	"use strict";
	return {
		init : function(){

			var imgdefereds=[];  
			$('img').each(function(){  
			    var dfd=$.Deferred();  
			    $(this).bind('load',function(){  
			        dfd.resolve();  
			    }).bind('error',function(){  
			   	 //图片加载错误，加入错误处理  
			    	dfd.resolve();  
			    })  
			    if(this.complete) setTimeout(function(){  
			        dfd.resolve();  
			    },1000);  
			    imgdefereds.push(dfd);  
			});

			$.when.apply(null,imgdefereds).done(function(){  
				$(".loading").slideUp("fast",function(){

					$(".loading").remove();
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
						scrollbars : false,
						scrollSpeed: 1100,
						after : function(index,arr){
							arr[index].addClass('active');
						}
					});

					$(".scroll").click(function(e) {
						e.preventDefault();
						$.scrollify("move",$(this).attr("href"));
					}); 
				});
				
			}); 
			
		}
	};
});