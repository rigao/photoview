/**
 * @fileoverview config
 * @author gao 
 * @date 2015-05-22
 */

requirejs.config({
	baseUrl : "js",
	paths : {
		jquery : 'lib/jquery',
		easing : 'lib/easing',
		scrollify : 'lib/scrollify',
		action : 'general/action.js?6565465465fasdfaasdsafas66'
	}
});

define("config/require.conf", function(require, exports, module) {
	"use strict";
	var action = require("general/action"); 
	action.init();
});

require(["config/require.conf"]);