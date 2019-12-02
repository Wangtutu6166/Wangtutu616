window.onload = function(){
	var ibtn = document.getElementById("search-b");
	ibtn.onclick = function(){
		var itext = document.getElementById("search-t").value;
		if(itext == ""){
			alert("请输入要搜索的关键字");
		}else{
			window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + itext;
		}
	}
}
document.onkeydown = function(event){
	var keydown = event || window.event || arguments.callee.caller.arguments[0];
	if (keydown && keydown.keyCode == 13){
		var itext = document.getElementById("search-t").value;
		if(itext == ""){
			alert("请输入要搜索的关键字");
		}else{
			window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" + itext;
		}
	}
}