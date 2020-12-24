$(document).ready(function() {

    // wow.js - 애니메이션 css가 화면에서 보일 때(스크롤 되었을때) 작동
    new WOW().init();


    var wHeight = $(window).height(); //화면의 세로길이를 구해서 변수에 넣어준다.

    $("section").css("height", wHeight); //각 섹션의 가로길이를 위에서 잰 화면의 가로길이로 맞춘다.

    // 각 section의 거리를 잰다
    var pos = []; // 변수 pos는 배열

    for (var i = 1; i < 7; i++) {
        pos.push($("#section" + i).offset().top);
    }
    // A.offset().top   -위에서부터 A의 거리
    // A.push(b)        - 배열 A에 배열값을 집어넣는다

    // 각 section 안의 btn_down버튼을 클릭
    $("#section1 .btn_down").click(function () {
        $("html,body").animate({
            scrollTop: pos[1]
        }, 500);
    });
    $("#section2 .btn_down").click(function () {
        $("html,body").animate({
            scrollTop: pos[2]
        }, 500);
    });
    $("#section3 .btn_down").click(function () {
        $("html,body").animate({
            scrollTop: pos[3]
        }, 500);
    });
    $("#section4 .btn_down").click(function () {
        $("html,body").animate({
            scrollTop: pos[4]
        }, 500);
    });
    $("#section5 .btn_down").click(function () {
        $("html,body").animate({
            scrollTop: pos[5]
        }, 500);
    });


    // remote 버튼을 누르면 화면 이동
    $("#remote a").on("click", function (e) {
        e.preventDefault();
        var ttt = this.hash; // 클릭한 a의 #(해쉬) 값을 변수에 넣는다

        $("#remote a").removeClass("on");
        $(this).addClass("on");

        $("html,body").animate({
            scrollTop: $(ttt).offset().top
        }, 500, "swing")
    });

    $(window).scroll(function () {
        var scroll_n = $(window).scrollTop(); // 스크롤 된 거리를 구해서 변수에 넣어준다. 

        if (scroll_n < pos[1]) {
            $("#remote a").removeClass("on");
            $("#remote a").eq(0).addClass("on");
        } else if (scroll_n >= pos[1] && scroll_n < pos[2]) {
            $("#remote a").removeClass("on");
            $("#remote a").eq(1).addClass("on");
        } else if (scroll_n >= pos[2] && scroll_n < pos[3]) {
            $("#remote a").removeClass("on");
            $("#remote a").eq(2).addClass("on");
        } else if (scroll_n >= pos[3] && scroll_n < pos[4]) {
            $("#remote a").removeClass("on");
            $("#remote a").eq(3).addClass("on");
        } else if (scroll_n >= pos[4] && scroll_n < pos[5]) {
            $("#remote a").removeClass("on");
            $("#remote a").eq(4).addClass("on");
        } else {
            $("#remote a").removeClass("on");
            $("#remote a").eq(5).addClass("on");
        }
    });




    

        var menu = $("#header_menu li");
    
        $(".header_bar").on("click",function(e){
            e.preventDefault();
            menu.slideToggle(500);
        });
    
        //모바일 상태에서 슬라이드를 펼쳤다 닫은 뒤 화면을 넓게 하면 이전에 (nav)에 display:none이 적용된 상태가 유지되는것을 막아준다
    
        $(window).resize(function(){
            var w = $(window).width();  //브라우저창의 가로길이를 알아내서 변수 w에 넣어준다
            if (w >= 768 && menu.is(":hidden")) {   // 화면의 너비가 768 이상이고 ul 부분이 히든상태일때 
                menu.removeAttr("style")
            }
        });
    


        var btn = $("nav li");		//위의 메뉴들을 변수 btn으로 

	    btn.click(function(){
		var btn_num = $(this).index();	// 클릭한 li가 몇번째인지 찾아서 변수에 넣어준다. (0부터)

		btn.find("a").removeClass("on");		// 모든 li안의 a에 클라스를 없애준다
		btn.eq(btn_num).find("a").addClass("on");	// 모든 li안의 a에 클라스를 추가한다
	});	

    // 옆에서 나오는 사진설명
    var la = 700;
    var du = 300;
    var nn = 900;

        // section 3
    var $fourth = $(".item_wrap > article")

    $fourth.on("mouseover",function(){
        $(this).find("strong").stop().animate({"left":"0"},la,"easeOutSine");
        $(this).find("span").stop().delay().animate({"opacity":"1"},la);
    })
    .on("mouseout",function(){
        $(this).find("strong").stop().animate({"left":"-300"},la,"easeOutSine");
        $(this).find("span").stop().animate({"opacity":"0"},la);
    });

    var $fourth = $(".slider_wrap > .slider")

    $fourth.on("mouseover",function(){
        $(this).find("strong").stop().animate({"top":"0"},la,"easeOutSine");
        $(this).find("span").stop().delay().animate({"opacity":"1"},la);
    })
    .on("mouseout",function(){
        $(this).find("strong").stop().animate({"top":"-220"},la,"easeOutSine");
        $(this).find("span").stop().animate({"opacity":"0"},la);
    });
    
    $('.slider_wrap').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});