function validateForm() {
	c = 0;
	var d = new Array();
	var e = 0;
	f = 0;
	var a = document.getElementsByName("test1");
	f++;
	for (var i = 0; i < a.length; i++) {
		if (a[i].checked == true) { //如果选中，下面的alert就会弹出选中的值
			var b = a[i].value;
		}
	}
	if (b == "A1") {
		c++;
		d[e] = f;
		e++;
	}
	var a = document.getElementsByName("test2");
	f++;
	for (var i = 0; i < a.length; i++) {
		if (a[i].checked == true) { //如果选中，下面的alert就会弹出选中的值
			var b = a[i].value;
		}
	}
	if (b == "A2") {
		c++;
		d[e] = f;
		e++;
	}
	var a = document.getElementsByName("test3");
	f++;
	for (var i = 0; i < a.length; i++) {
		if (a[i].checked == true) { //如果选中，下面的alert就会弹出选中的值
			var b = a[i].value;
		}
	}
	if (b == "A3") {
		c++;
		d[e] = f;
		e++;
	}
	var a = document.getElementsByName("test4");
	f++;
	for (var i = 0; i < a.length; i++) {
		if (a[i].checked == true) { //如果选中，下面的alert就会弹出选中的值
			var b = a[i].value;
		}
	}
	if (b == "A4") {
		c++;
		d[e] = f;
		e++;
	}
	var a = document.getElementsByName("test5");
	f++;
	for (var i = 0; i < a.length; i++) {
		if (a[i].checked == true) { //如果选中，下面的alert就会弹出选中的值
			var b = a[i].value;
		}
	}
	if (b == "A5") {
		c++;
		d[e] = f;
		e++;
	}
	document.getElementById("demo").innerHTML = "您答对了" + c + "题" + "分别是" + d;
}
