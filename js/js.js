$(function(){
    var du = 300;       //변수 du 안에 300을 넣어준다.(시간)
    var nn = 900;
    var la = 700;
    
    var $first = $(".first > article")     // jQuery객체(선택자)를 변수($first) 안에 넣는다

    // 첫번째 줄 캡션, 투명하게 나타남
    $first.on("mouseover",function(){
        $(this).find("strong,span").stop().animate({"opacity":"1"},du);
    })
    .on("mouseout",function(){
        $(this).find("strong,span").stop().animate({"opacity":"0"},du);
    });

    
    // 두번째 줄 캡션, 왼쪽에서 슬라이딩 되어 나타남
    var $second = $(".second > article")

    $second.on("mouseover",function(){
        $(this).find("strong").stop().animate({"left":"0"},nn,"easeOutBounce");
    })
    .on("mouseout",function(){
        $(this).find("strong").stop().animate({"left":"-300px"},nn,"easeOutBounce");
    });
    // 두번째줄 캡션, delay(시간) - 시간이 지난 뒤 실행하게 한다 
    $second.on("mouseover",function(){
        $(this).find("span").stop().delay(200).animate({"opacity":"1"},nn);
    })
    .on("mouseout",function(){
        $(this).find("span").stop().animate({"opacity":"0"},nn);
    });


    // 세번째 줄 캡션, 캡션이 위로 올라오고, 앨범 이미지도 위로 올라간다.
    var $third = $(".third > article")

    $third.on("mouseover",function(){
        $(this).find("strong").stop().animate({"bottom":"0"},nn,"easeOutBounce");
        $(this).find("img").stop().animate({"top":-40},du);
        $(this).find("span").stop().delay(200).animate({"opacity":"1"},nn);
    })
    .on("mouseout",function(){
        $(this).find("strong").stop().animate({"bottom":"-80px"},nn,"easeOutBounce");
        $(this).find("img").stop().animate({"top":0},du);
        $(this).find("span").stop().animate({"opacity":"0"},nn);
    })

    // 네번째 줄, 옆에서 나온다
    var $fourth = $(".fourth > article")

    $fourth.on("mouseover",function(){
        $(this).find("strong").stop().animate({"left":"0"},la,"easeOutSine");
        $(this).find("span").stop().delay().animate({"opacity":"1"},la);
    })
    .on("mouseout",function(){
        $(this).find("strong").stop().animate({"left":"-300"},la,"easeOutSine");
        $(this).find("span").stop().animate({"opacity":"0"},la);
    })


});