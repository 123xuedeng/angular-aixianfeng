	$('#main>div').eq(0).show();
	$('#main>div').eq(0).siblings().hide();
	//var liObjs = $('#tab ul li');
	$('#tab>ul li').tap(function(){
		$('#main>div').eq($(this).index()).show();
		$('#main>div').eq($(this).index()).siblings().hide();
	})

	/*轮播部分*/
	$.getJSON('http://h5.yztctech.net/api/axf/apihome.php',function(res){
		initSwiperData(res.data.slide)
		initSwiperMenu(res.data.menu);
	})
	function initSwiperData(arr){
		console.log(arr);
		for(var i = 0;i<arr.length;i++){
			var divObj = $('<div class="swiper-slide"><img/></div>');
			divObj.find('img').attr('src',arr[i].activity.img)
			$('.swiper-wrapper').append(divObj);
		}
		
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay : 500,
		    autoplayDisableOnInteraction : false,
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
	    })  
	}
		function initSwiperMenu(arr){
			console.log(arr);
			for(var i = 0; i <arr.length; i++){
				var liObj = $('<li><img /><p></p></li>');
				liObj.find('img').attr('src',arr[i].activity.img);
				liObj.find('p').text(arr[i].activity.name);
				$('.homeMenu>ul').append(liObj);
	    	}
			
//			
		}
		
		
	    
