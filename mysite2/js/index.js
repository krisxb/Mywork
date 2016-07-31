$(document).ready(function(){
		$count=$(".count");
		function count(){
			var a={val:0,val1:0,val2:0,val3:0};
			$(a).animate({val:120,val1:4600,val2:3400,val3:23},{
				duration:2000,
				step:function(now){
					$count.eq(0).html(Math.ceil(a.val));
					$count.eq(1).html(Math.ceil(a.val1));
					$count.eq(2).html(Math.ceil(a.val2));
					$count.eq(3).html(Math.ceil(a.val3));
				}
			})
		}
		// ……………………导航的点击效果………………………………
		var navbar=$(".navbar-toggle");
		var collapse=$(".collapse");
		collapse.slideUp();
		navbar.click(function(){
			collapse.slideToggle();
		})
		// ……………………楼层的跳转效果………………………………
		var $ch=$(window).height();
		var $floor=$(".floor-box");//获取楼层
		var flag=true;
		var $obj=$(document);
		var floorArr=[];//建一个空的数组
		var scrollTops=$obj.scrollTop();//获取滚动条滚动的距离
		var obj2=document.body.scrollTop?document.body:document.documentElement;
		$floor.each(function(i){
			floorArr.push(this.offsetTop);
		})
		var $item=$(".nav li");
		$item.each(function(i,elm){
			this.index=i;
			$(this).click(function(){
				// animate({scrollTop:floorArr[this.index]},"swing",1000)
				obj2.scrollTop=floorArr[this.index];
			})
		})
		// var item=$(item);
		/*for(var i=0;i<item.length;i++){
		item[i].index=i;
		item[i].onclick=function(){
			// flag=false;
			console.log(floorArr[this.index]);
			 obj2.animate({scrollTop:floorArr[this.index]},function(){
				// flag=true;
			},1000)
		}
	}*/

	// ……………………懒加载的效果………………………………





	// ……………………返回顶部的效果………………………………




	// ……………………我的作品动效切换………………………………
	// Portfolio isotope filter
       /* var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }()
            });
            return false;
        });*/
       
	// 顶部气球浮动效果
	var head=$(".intro-body");
	var color=["green","blue","red","yellow"];
	var colorNum=Math.round(Math.random()*3);//随机生成（0-3）不同的颜色
	var num=4;
	function createball(){
		var randombottom=Math.round(Math.random()*700);
		var randomLeft=Math.round(Math.random()*1200);
		var ball1=$("<div></div>").css({width:100,height:180,position:"absolute",left:randomLeft,bottom:-randombottom,background:"url(image/pic/"+color[colorNum]+".png) no-repeat",zIndex:9999}).appendTo(head).animate({bottom:head.height()},6000,"linear",function(){
				createball();
		});

	}
	function play(){
		for(var i=0;i<num;i++){
			createball();
		}
	}
	play();
})
	
	






		
