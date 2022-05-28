
	 onload = function() {
	 	var li = document.getElementById('box').getElementsByTagName('div');
	 	var index = 0;
	 	var now = null;
	 	goto();
	 	$('.nextimg').click(function(){
	 		goto();
	 	})
	 	$('.pervimg').click(function(){
	 		goto();
	 	})
	 	function goto() {
	 	
	 		for (var i = 0; i < li.length; i++) {
	 			li[i].style.opacity = 0;
	 		}
	 		
	 		if (index == li.length) index = 0;
	 		
	 		li[index++].style.opacity = 1;
	 		
	 	}
	 	console.log(index)
	 	setInterval(goto, 3000);
	 	
	 	var meet = document.getElementById('meet').getElementsByClassName('meet')
	 	// var span = document.getElementById('meetour').getElementsByTagName('span');
	 	var index = 0;
	 	gotoOn();
	 
	 	function gotoOn() {
	 
	 		for (var i = 0; i < meet.length; i++) {
	 			meet[i].style.opacity = 0;
	 			// span[i].style.background = '#fff'
	 
	 		}
	 		if (index == meet.length) index = 0;
	 		meet[index++].style.opacity = 1;
	 		
	 	}
	 	setInterval(gotoOn, 3000);
	 		
	 }
	 
	 var kg = true;
	 $(function() {
	 	$('.bookbtn').click(function() {
	 		setTimeout(()=>{
	 			$('body').css('padding','0')
	 		},10)
	 		
	 	});
	 	
	 })
	 $(function() {
	 
	 	$('.totop').on({
	 		click: function() {
	 			$("html").animate({
	 				scrollTop: 0
	 			}, 400)
	 		}
	 	})
	 })
	 $(function() {
	 	var opaci = 1
	 	$(window).scroll(function() {
	 		let srcllTop = $(window).scrollTop()
	 		if (srcllTop > 230) {
	 			$(".totop").css("opacity", opaci)
	 		} else if (srcllTop < 230) {
	 			$(".totop").css("opacity", "0")
	 		}
	 
	 	
	 	})
	 $('.lntera').click(function(){
	 		if(kg){
	 			$('.lntera p img').attr("src",'./img/top.png')
	 		}else{
	 			$('.lntera p img').attr("src",'./img/xia.png')
	 		}
	 		kg = !kg;
	 	})
	 })
	 
