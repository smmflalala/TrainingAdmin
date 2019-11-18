
var BASE_URL = "https://apis.zqartcenter2015.cn/";
var TOKEN = sessionStorage.getItem("TOKEN") || '';
var BUCKET = 'small-app-itms-1253600541';
var REGION = 'ap-guangzhou';


function request_(ajax_info, func){
	var async_ = ajax_info.async_ || 'false'
	$.ajax({
		url: BASE_URL + ajax_info.api,
		type: ajax_info.type,
		dataType: "json",
		jsonp: "callback",
		async: async_,
		beforeSend: function(request_data) {
			request_data.setRequestHeader("x-access-token", TOKEN);
		},
		crossDomain: true,
		data: ajax_info.data,
		contentType: "application/json;charset=utf-8",
		success: function(e) {
			// console.log(e);
			func(e);
		},
		error: function(e){
			console.log(e);
		}
	});
}

function getPar(par) {
	//获取当前URL
	var local_url = document.location.href;
	//获取要取得的get参数位置
	var get = local_url.indexOf(par + "=");
	if(get == -1) {
		return "";
	}
	//截取字符串
	var get_par = local_url.slice(par.length + get + 1);
	//判断截取后的字符串是否还有其他get参数
	var nextPar = get_par.indexOf("&");
	if(nextPar != -1) {
		get_par = get_par.slice(0, nextPar);
	}
	
	return get_par;
}

function week_num_change_str(week){
	var week_str = '';
	switch(week){
		case '1':
			week_str = '周一';
			break;
		case '2':
			week_str = '周二';
			break;
		case '3':
			week_str = '周三';
			break;
		case '4':
			week_str = '周四';
			break;
		case '5':
			week_str = '周五';
			break;
		case '6':
			week_str = '周六';
			break;
		case '7':
			week_str = '周日';
			break;
	}
	return week_str;
}
