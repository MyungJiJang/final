$(document).ready(function(e) {
	var winh=$(window).height();    
	var sections=$('section');	
	var nav=$('nav');
	var btn=$('#btn');
    var num=0;
    var total=$('.box').length;
	sections.css('height',winh);
    $('.total').val(total);
    //내비게이션
    $('nav ul li').hover(function(){
       $('.sub').stop().slideDown(); 
    });
    $('nav ul li').mouseleave(function(){
       $('.sub').stop().slideUp(); 
    });
    //화면 스크롤
	$(".box").each(function () {
                
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } else if (event.detail) delta = -event.detail / 3;
                    var moveTop = null;
                    if (delta < 0) {
                        if ($(this).next() != undefined) {
                            moveTop = $(this).next().offset().top;
                            num=Number($(this).attr('data'));
                            $('.page').val(num+1);
                        }
                    } else {
                        if ($(this).prev() != undefined) {
                            moveTop = $(this).prev().offset().top;
                            num=Number($(this).attr('data'));
                            $('.page').val(num-1);
                        }
                    }
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 800, complete: function () {
                            
                        }
                    });
                    
                });
            });

	$(window).on('scroll', function(){
		var cur_pos=$(this).scrollTop();
		sections.each(function(){
			var top=$(this).offset().top;
			var bottom=top + $(this).outerHeight();
			if(cur_pos >= top && cur_pos < bottom){
				nav.find('a').removeClass('active');				
				nav.find('a[href="#' + $(this).attr('id')+'"]').addClass('active');
				btn.find('a').removeClass('active');				
				btn.find('a[href="#' + $(this).attr('id')+'"]').addClass('active');
			}				
		
		/*if(cur_pos + $(window).height() == $(document).height()) {
                if (!$(".nav li:last-child a").hasClass("active")) {
                    nav.find('a[href="#' + $(this).attr('id')+'"]').removeClass('active');
                    $(".nav li:last-child a").addClass("active");
                }
            }*/
		});
	});
	
	$('#btn ul li a').click(function(e){
		e.preventDefault();
		var attrib=$(this).attr('href');
		$('html,body').stop().animate({'scrollTop':$(attrib).offset().top},800,function(){
            	//scrollEvent=false;            		
		});	
	});
	
	
	
	$('nav ul li a').click(function(e){
		e.preventDefault();	
		var attrib=$(this).attr('href');
		$('html,body').stop().animate({'scrollTop':$(attrib).offset().top},800,function(){
				//scrollEvent=false;					
		});		
	});
	
	
	$('.top').click(function(){
			$('html,body').animate({'scrollTop':0});
		});
    
    //#s8영역의 이미지 페이드인
    var imgNum=0;
	$('#s8 .txt img').hide();
    $('#s8 .txt img:first-child').show();
    var auto=setInterval(imgfn,3000);
    
    $('.next').click(function(e){
        e.preventDefault();
        clearInterval(auto);
        imgNum++;
        console.log(imgNum);
        if(imgNum>=4){imgNum=-1;}
        $('#s8 .txt img').each(function(){
            if(imgNum==$(this).index()){
                $('#s8 .txt img').stop().fadeOut();
                $(this).stop().fadeIn();
            }
        });
        
    });
    $('.prev').click(function(e){
        e.preventDefault();
        clearInterval(auto);
        imgNum--;
        console.log(imgNum);
        if(imgNum<0){imgNum=3;}
        $('#s8 .txt img').each(function(){
            if(imgNum==$(this).index()){
                $('#s8 .txt img').stop().fadeOut();
                $(this).stop().fadeIn();
            }
        });
        
    });
    $('.prev').hover(function(){
        clearInterval(auto);
    });
    $('.next').hover(function(){
        clearInterval(auto);
    });
    $('.prev').mouseleave(function(){
        auto=setInterval(imgfn,3000);
    });
    $('.next').mouseleave(function(){
        auto=setInterval(imgfn,3000);
    });
    function imgfn(){
        imgNum++;
        if(imgNum>=4){imgNum=0;}
        if(imgNum>=4){imgNum=-1;}
        $('#s8 .txt img').each(function(){
            if(imgNum==$(this).index()){
                $('#s8 .txt img').stop().fadeOut();
                $(this).stop().fadeIn();
            }
        });
    }
});