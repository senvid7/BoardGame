$(function () {
	var selected="red";
	var mycolors=new Array(3);
		mycolors[0]="rgb(255,0,114)";
		mycolors[1]="rgb(1,225,223)";
		mycolors[-1]="rgb(123,37,183)";		
	var  chen = 25 ;
	var　redC = 0;
	var　blueC = 0;
	var　greenC = 0;
	var　yellowC = 0;
	var　purpleC = 0;
	var score=100;
	var num=5;
	var hard=0;
	var num1=0;
	var help=new Array(5);
	var helpP=new Array(5);
		help[0]="RED:クリックのとき、この部分の色を転換します";
		helpP[0]='images/red.gif'
		help[1]="BLUE:クリックのとき、この部分とこの部分の一おきにの部分もを転換します";
		helpP[1]='images/blue.gif'
		help[2]="GREEN:クリックのとき、この部分の色と周りの部分を転換します";
		helpP[2]='images/green.gif'
		help[3]="YELLOW:クリックのとき、この行の部分を転換します";
		helpP[3]='images/yellow.gif'
		help[4]="PURPLE:クリックのとき、この縦の部分を転換します";
		helpP[4]='images/purple.gif'
		help[5]="勝利の条件:全部は同じ色（赤色も青色も）";
		helpP[5]='images/cheng.gif'
		help[6]="scoreは０、失败です";
		helpP[6]='images/bai.gif'
		help[7]="ここで、クリックのとき、レベルを変わります";
		helpP[7]='images/nandu.gif'
		help[8]="じゃ、ぜひ頑張ってください！！";
		helpP[8]='images/jiayou.png'
	var i = 0;
	var Tmiddle='<tr class="middle"><td data-color class="middle"></td><td  class="middle" data-color></td><td  class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td></tr>'
	function resetColor(){
		score=100;		
		yellowC=0;
		redC=0;
		greenC=0;
		blueC=0;
		purpleC=0;
		$('nav').find(".listw").css({'color':'white','font-weight':'normal'});
		$('nav').find(".listw").eq(1).text("score : ");
		$('nav').find("span").text("");

	}

	$('.help').on('mouseover',function(){
		$(this).css('background-color','#FF00FF')
	})
	$('.help').on('mouseout',function(){
		$(this).css('background-color','#9900FF')
	})	
	$('.help').on('click',function(){
		$('.tbody').hide();
			Alert();
	
	})	



 function Alert(){
 	 
        $("body").append('<div class="msg"><div id="msg_top">Message<span class="msg_close">×</span></div><div id="msg_cont">'+help[i]+'</div><img class="helpP" src="'+helpP[i]+'" ><div id="msg_clear">next</div></div>');
        	
		$("#msg_clear").click(function (){if(i!=8)
        	{
        	i=i+1;
			$('#msg_cont').text(help[i]);
        	$('.helpP').attr('src',helpP[i]);
			if(i==8){
					$('#msg_clear').text("确认");
			}
       
        	}
        	else{
        		$(".msg").remove();
        		$('.tbody').show();
        		i=0
        	}
          
        });
        $(".msg_close").click(function (){
            $(".msg").remove();
            $('.tbody').show();
            i=0;
        });
    }

	function buttonSwich(vo){
		if(vo=="images/button1.png")
			{
			$('.table').find('tr:last').after(Tmiddle+Tmiddle+Tmiddle+Tmiddle);
			$('.table').find('tr').each(function(){
			 $(this).find('.simple:last').after('<td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td><td class="middle" data-color></td>');
			});
			$('.table td').css('width','55.55555555555555px');
			$('.table').find('td.middle').each(function(){
			$(this).data('color',creatTable());
			$(this).css('backgroundColor',mycolors[$(this).data('color')]);
	})
			chen = 81;
			num = 9;
			resetColor();
			clolor();
				return "images/button2.png" ; }
		else if(vo=="images/button2.png")
			{	
				hard=1;
				score=100;
				resetColor();
				$('.table').find('td').each(function(){
				$(this).data('color',creatTable());
				$(this).css('backgroundColor',mycolors[$(this).data('color')]);
	})
				return "images/button.png"}
		else if(vo=="images/button.png"){

			hard=0;
			chen = 25 ;
			num = 5;
			resetColor();
			$('.middle').remove();
			$('.table td').css('width','100px');
			$('.table').find('td.middle').each(function(){
			$(this).data('color',0);
			$(this).css('backgroundColor',mycolors[$(this).data('color')]);
				})
			$('.table').find('.simple').each(function(){
			$(this).data('color',creatTable());
			$(this).css('backgroundColor',mycolors[$(this).data('color')]);
	})
			clolor();
			return "images/button1.png"
	

	}
}

	function creatTable()
	{	if(hard==1){
		var rand = Math.floor(Math.random() * 3-1);
		}
		else{
			var rand = parseInt(Math.random() * 2);
		}
		return rand ;
		}


	function swich(sw){
		if(hard==1){
			if(sw==-1)
			{
				return 0;
			}
			else if(sw==0){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			if(sw==1)
			{
				return 0;
			}
			else {
				return 1;
			}
	}
}
	
	$(document).ready(function(){
		$('#bug').on('click',function(){
		alert("这都被你发现了，分数加100");
		score=score+100;
	})
	if(typeof($.cookie('the_cookie'))!="underfined"){
	$('nav').find(".listw").eq(0).text("historc high :"+$.cookie('the_cookie')+" points").css({'color':'gold','font-weight':'bold'});
	}
	$('.middle').hide();
	$('.hard').hide();
	$('.table').css('height',$('.table').css('width'));
	$('.table').find('.simple').each(function(){
		$(this).data('color',creatTable());
		$(this).css('backgroundColor',mycolors[$(this).data('color')]);
	})

	});



	$(".cato img").on('click',function(){
		$(this).attr("src",buttonSwich($(this).attr("src") ));
	});
	



	$(".list").click(function() {
	$("nav p").slideToggle(700);
	});





	$(".daoju").children().on('click',function(){
		$(this).data('select',1);
		$(this).siblings().data('select',0)
		selected=$(this).data('color');
		$(this).css('width','45%').siblings()
		.css('width','30%');

	});
	$(".daoju").find('div').on('mouseover',function(){
		if($(this).data('select')=='0'){
		$(this).animate({width:'40%'} ,180,
			'linear')}
	});
	$(".daoju").find('div').on('mouseout',function(){
		$(this).stop(true);
		if($(this).data('select')=='0'){
		$(this).animate({width:'30%'} ,180,
			'linear')	
		}
	});
				$(".table").find('td').on('click',function(){
					num1=100/(num*num);
					var allColor = 0;
					var a = $(this).index();
					var b = $(this).closest('tr').index();
					switch(selected)
					{
						case "red": 
						score = score - Math.round(num1*num);
						redC = redC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(2).css({'color':'rgb(249,38,114)','font-weight':'bold'})
						$('nav').find(".listw").eq(2).find('span').text(redC+" step");
						$(this).css('background-color',mycolors[swich($(this).data('color'))]);
						$(this).data('color',swich($(this).data('color')))
						break;


						case "blue":
						score = score - Math.round(num1*(num/3));
						blueC = blueC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(3).css({'color':'rgb(102,217,239)','font-weight':'bold'}).find('span').text(blueC+" step");
						if(a%2 == b%2){
						$(this).closest('table').find('td:even').each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
							}
						else{
						$(this).closest('table').find('td:odd').each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));;
						})
						}
						break;


						case "green":
						score = score - Math.round(num1) ;
						greenC = greenC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(4).css({'color':'rgb(166,226,46)','font-weight':'bold'}).find('span').text(greenC+" step");
						$(this).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						});
						$(this).prev().each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).next().each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).closest('tr').prev().find("td").eq(a).each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).closest('tr').next().find("td").eq(a).each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						break;
					case "yellow":
						score = score - Math.round(num1*(num/4));
						yellowC = yellowC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(5).css({'color':'rgb(230,219,116)','font-weight':'bold'}).find('span').text(yellowC+" step");
						$(this).closest('tr').find("td").each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						break;


						case "purple": 
						score = score - Math.round(num1*(num/4));
						purpleC = purpleC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(6).css({'color':'rgb(174,129,255)','font-weight':'bold'}).find('span').text(purpleC+" step");
						$(this).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						}).data('color',swich($(this).data('color')))
						.closest('tr').siblings("tr").each(function(){
							$(this).find('td').eq(a).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')))
							});
						});

						break;

					}
				
					$(this).closest('table').find('td').each(function(){
						allColor=Math.abs($(this).data('color'))+allColor;
					})
					if(allColor==chen||allColor==0){
						alert("成功だ！");
				      setTimeout('window.location.reload()',500)

			 
					  	if(score>$.cookie('the_cookie'))
					{
						$.cookie('the_cookie',score);
						$('nav').find(".listw").eq(0).text("historc high :"+$.cookie('the_cookie')+" points").css({'color':'gold','font-weight':'bold'});
					}
			 
					}
					if(score<=0){

						alert("失败だ！");
				      setTimeout('window.location.reload()',500)
					
			 
					}
				});

				$('td').on('mouseenter',function(){
						$(this).css('outline','2px solid gold')
					.on('mouseleave',function(){
						$(this).css('outline','none');
					});
					});
		function clolor(){
				$(".table").find('td.middle').on('click',function(){
					num1=100/(num*num);
					var allColor = 0;
					var a = $(this).index();
					var b = $(this).closest('tr').index();
					switch(selected)
					{
						case "red": 
						score = score - Math.round(num1*num);
						redC = redC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(2).css({'color':'rgb(249,38,114)','font-weight':'bold'})
						$('nav').find(".listw").eq(2).find('span').text(redC+" step");
						$(this).css('background-color',mycolors[swich($(this).data('color'))]);
						$(this).data('color',swich($(this).data('color')))
						break;


						case "blue":
						score = score - Math.round(num1*(num/3));
						blueC = blueC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(3).css({'color':'rgb(102,217,239)','font-weight':'bold'}).find('span').text(blueC+" step");
						if(a%2 == b%2){
						$(this).closest('table').find('td:even').each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
							}
						else{
						$(this).closest('table').find('td:odd').each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));;
						})
						}
						break;


						case "green":
						score = score - Math.round(num1) ;
						greenC = greenC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(4).css({'color':'rgb(166,226,46)','font-weight':'bold'}).find('span').text(greenC+" step");
						$(this).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						});
						$(this).prev().each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).next().each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).closest('tr').prev().find("td").eq(a).each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						$(this).closest('tr').next().find("td").eq(a).each(function(){
							$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						break;
					case "yellow":
						score = score - Math.round(num1*(num/4));
						yellowC = yellowC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(5).css({'color':'rgb(230,219,116)','font-weight':'bold'}).find('span').text(yellowC+" step");
						$(this).closest('tr').find("td").each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')));
						})
						break;


						case "purple": 
						score = score - Math.round(num1*(num/4));
						purpleC = purpleC +1;
						$('nav').find(".listw").eq(1).text("score : "+score+" points").css({'color':'gold','font-weight':'bold'});
						$('nav').find(".listw").eq(6).css({'color':'rgb(174,129,255)','font-weight':'bold'}).find('span').text(purpleC+" step");
						$(this).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						}).data('color',swich($(this).data('color')))
						.closest('tr').siblings("tr").each(function(){
							$(this).find('td').eq(a).each(function(){$(this).css(
						'backgroundColor',mycolors[swich($(this).data('color'))])
						.data('color',swich($(this).data('color')))
							});
						});

						break;

					}
				
					$(this).closest('table').find('td').each(function(){
						allColor=Math.abs($(this).data('color'))+allColor;
					})
					if(allColor==chen||allColor==0){
						alert("成功だ！");
				      setTimeout('window.location.reload()',500)

			 
					  	if(score>$.cookie('the_cookie'))
					{
						$.cookie('the_cookie',score);
						$('nav').find(".listw").eq(0).text("historc high :"+$.cookie('the_cookie')+" points").css({'color':'gold','font-weight':'bold'});
					}
			 
					}
					if(score<=0){

						alert("失败だ！");
				      setTimeout('window.location.reload()',500)
					
			 
					}
				});

					$('td').on('mouseenter',function(){
						$(this).css('outline','2px solid gold')
					.on('mouseleave',function(){
						$(this).css('outline','none');
					});
					});
		}
	});
//});