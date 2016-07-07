//添加事项
function addlist(){
	
		if(title.value==""){
			alert("内容不能为空！")
		}else{
			var data=loadData();
			var todo={"title":title.value,"done":false};
			data.push(todo);
			localStorage.setItem("todo",JSON.stringify(data));
			var form=document.getElementById("form");
			form.reset();
			load();
		}
}
//获取本地存储的数据
function loadData(){
	var content=localStorage.getItem("todo");
	if(content!=null){
		return JSON.parse(content);//将json字符串转化为对象
	}
	else return [];
}
//函数把数据展现在页面
function load(){//传一个参数
	var todolist=document.getElementById("todolist");
	var donelist=document.getElementById("donelist");
	var content=localStorage.getItem("todo");
	if(content!=null){

		var todoCount=0;
		var doneCount=0;
		var todoString="";
		var doneString="";
		var data=JSON.parse(content);
		for(var i = data.length - 1; i >= 0; i--){
			if(data[i].done){//done为自定义的属性
				doneString+="<li><input type='checkbox'>"+"<p>"+data[i].title+"</p>"+"<a>×</a></li>";
				doneCount++;
			}else{
				alert(1);
				todoString+="<li><input type='checkbox'>"+"<p>"+data[i].title+"</p>"+"<a>×</a></li>";
				todoCount++;
			}
		}
		todolist.innerHTML=todoString;
		donelist.innerHTML=doneString;
	}

}