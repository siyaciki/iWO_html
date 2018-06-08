function ajax_send(url_str, data_cont) {
	jQuery.ajax({
		url: url_str,
		type: 'post',
		dataType: 'json',
		data: data_cont,
		//异步加载
		async: false,
		headers: {
			'Content-Type': 'application/json'
		},
		success: function(data) {
			//对象转字符串
			var a = JSON.stringify(data);

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			var str = "status：" + XMLHttpRequest.status + "---readyState：" + XMLHttpRequest.readyState + "---textStatus：" + textStatus + "---responseText：" + XMLHttpRequest.responseText;
			console.log(str);
		}

	});
}