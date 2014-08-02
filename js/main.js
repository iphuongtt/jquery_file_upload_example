/*
 * jQuery File Upload Plugin JS Example 8.9.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global $, window */
var datatest = '';
function include_template(tem_folder) {
	var templates = ["template-download","template-upload"];
	$.each(templates, function(index, value){
		var template = $(value);
		if (template.length === 0) {
			var tmpl_dir = './template/'+ tem_folder;
			var tmpl_url = tmpl_dir + '/' + value + '.tmpl';
			var tmpl_string = '';
			$.ajax({
				url: tmpl_url,
				method: 'GET',
				async: false,
				contentType: 'text',
				success: function (data) {
					tmpl_string = data;
				}
			});

			$('head').append('<script id="' + 
			value + '" type="text/x-tmpl">' + tmpl_string + '<\/script>');
		}
	});
    
}

