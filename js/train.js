
			function validateForm(){
			 c=0;
			  var a=document.getElementsByName("test1");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A1"){
				c++;
			}
			var a=document.getElementsByName("test2");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A2"){
				c++;	
			}
			var a=document.getElementsByName("test3");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A3"){
				c++;	
			}
			var a=document.getElementsByName("test4");
			
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A4"){
				c++;
			}
			var a=document.getElementsByName("test5");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A5"){
				c++;
			}
			var a=document.getElementsByName("test6");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A6"){
				c++;
			}
			var a=document.getElementsByName("test7");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A7"){
				c++;	
			}
			var a=document.getElementsByName("test8");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A8"){
				c++;	
			}
			var a=document.getElementsByName("test9");
			
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A9"){
				c++;
			}
			var a=document.getElementsByName("test10");
				for (var i = 0; i < a.length; i++) {	
				if (a[i].checked == true) {//如果选中，下面的alert就会弹出选中的值
				var b=a[i].value;
				} 
			}	  
			if(b=="A10"){
				c++;
			}
			
			alert("你答对"+c+"题")
		}