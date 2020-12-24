

$('.chart1').circleProgress({
    size:200,
    //그래프 크기
    startAngle: -Math.PI/2 ,
    //시작지점 (기본값 Math.PI)
    value: 0.3,
    //그래프에 표시될 값 
    animation: false,
    //그래프가 그려지는 애니메이션 동작 여부
    fill: {gradient: ['#ff1e41', '#ff9f8e']}
  });

  $('.chart2').circleProgress({
    startAngle: -Math.PI/2 ,
    //시작지점 (기본값 Math.PI)
    value: 0.38,
    //그래프에 표시될 값 
    animation: true,
    //그래프가 그려지는 애니메이션 동작 여부
    reverse:true,
    //그래프가 반대방향으로 그려질지
    thickness:10,
    //그래프두께
    lineCap:'round',
    //그래프 선 모양
    fill: {gradient: ['#ff1e41', '#ff9f8e']},
    //그래프 선 색
    emptyFill: "rgba(0,0,0,0.3)",
    //그래프 빈칸색 기본값 rgba(0,0,0,0.1)
    animationStartValue:1.0,
    //애니메이션 시작값
  });

$('.chart3').circleProgress({
    value: 0.75,
    fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', 
      //그래프 애니메이션이 진행되는 동안 
      function(event, progress, stepValue) {
   
      //progress -현재 진행상탱 0.0~1.0
      //stepValue - 현재까지 그려진 그래프 값 
  $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });

 var c4 = $('.chart4.circle');

  c4.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.5,
    lineCap: 'round',
    fill: {color: '#ffa500'}
  }).on('circle-animation-end',function(event) {
    console.log('애니메이션 종료');
  
    
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);

