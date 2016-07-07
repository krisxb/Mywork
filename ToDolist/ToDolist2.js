var text=document.querySelector("#title");
var nowlist=document.getElementById("todolist");
var comlist=document.getElementById("donelist");
var todocount=document.querySelector("#todocount");
var donecount=document.querySelector("#donecount");
//首先实现按下键盘添加事项
text.onkeydown=function(e){
	if(e.keyCode==13){
		var val=this.value;
		if(val.length==""){
			alert("内容不能为空！")
		}else{
			var data=getData();
			console.log(data)
			data.push({
				title:val,
				status:false
			})
			saveData(data);//保存数据
			reload();
		}
	}
}
		
function getData(){
	var collection=localStorage.getItem("todo");
	if(collection!=null){
		return JSON.parse(collection);
	}
	else return [];
}
function saveData(data){ //保存数据
	localStorage.setItem("todo",JSON.stringify(data));
}
//只要数据发生变化，所有的数据重写
// 重写函数
//重写DOM，只操作其中一个，让另一个也变化;获取数据，保存数据，重写数据
function reload(){ 
	var nowStr="",
		comStr="",
		nowNum=0;
		comNum=0;
	var data=getData();
	console.log(data.length)
	for(var i=0;i<data.length;i++){
		if(data[i].status==false){//正在进行
			nowStr+="<li><input type='checkbox' onchange='changeStatus("+i+",true)' />"
				+"<p id='p-"+i+"' onclick='changeStatus("+i+")' contenteditable onblur='changeContent("+i+",this.innerHTML)'>"+data[i].title+"</p>"
				+"<a href='' onclick='del("+i+")'>×</a></li>"
			nowNum++;
		}else{//已完成
			comStr+="<li draggable='true'><input type='checkbox' onchange='changeStatus("+i+",false)' checked/>"
				+"<p id='p-"+i+"' onclick='changeStatus("+i+")' contenteditable>"+data[i].title+"</p>"
				+"<a href='' onclick='del("+i+")'>×</a></li>";
			comNum++;
		}
	}
	nowlist.innerHTML=nowStr;
	comlist.innerHTML=comStr;
	todocount.innerHTML=nowNum;
	donecount.innerHTML=comNum;
}
function changeStatus(i,sta){
	var data=getData();
	data[i].status=sta;
	saveData(data);
	reload();

}
function changeContent(i,text){
	var data=getData();
	data[i].title=text;
	saveData(data);
}
function del(i){
	var data=getData();
	data.splice(i,1);
	saveData(data);
	reload();
}
window.onload=function(){
	reload();
}
/*var a=[{'name':1,'sex':'nan'}];
a.push({
	name:2
});
console.log(a);*/

/*window.onload=function(){
	console.log(loadData())
}*/