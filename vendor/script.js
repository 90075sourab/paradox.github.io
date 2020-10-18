$(document).ready(function(){
var nav=$("#navbar");
var navwrap=$(".navbar-wrapper")


	$(".mn-btn").click(function(){


		mn_open();
		//test();
		
		

	});

	$(".mn-close-btn").click(function(){
		mn_close();


	

	})

	
		function mn_close(){

				$("body").css({"overflow":"auto","padding-right":"0px"});
				if(nav.hasClass('navfix')==true){
				nav.css({"margin-right":"0px"});
			}
		        $(".menu-cont").animate({right:'-999px'},1000);


		
		}


	function mn_open(){
		var p=0;
		if($(window).width()>=1100){
			
			p=16;

		}
		//alert(p);

		$("body").css({'overflow':"hidden",'padding-right':""+p+"px"});
		if(nav.hasClass('fixed')==true){
			nav.css({"margin-right":"16px"});


		}
		
		
		$(".menu-cont").animate({right:'0px'},500);
		
		
	



	}

	

		$("#menu-list a").click(function(e){

			
			if($(this).hasClass('page-link')!=true){
				e.preventDefault();
			//console.log(a);
			var idval=$(this).attr("href");

			x=$(idval).offset().top-nav.height();
			//alert(x);
			f=$('html,body').scrollTop();
			//alert(f);
			
			d=Math.abs(x-f);
/*
			if(d >= 3000){
				s=7000;

			}else if(d>=2000){
				s=5000;
			}else if(d>=1000){
				s=2000;
			}else{
				s=1000;
			}

			
			*/
             mn_close();

			//$("body").css({"overflow":"auto"});
			$("html,body").delay(500).animate({scrollTop:x},Math.ceil(d*.5));
			
			//alert(f);

}


		});






$(window).scroll(function(){
	
	if($(this).scrollTop()<=0)

	{
		//$("body").animate({"padding-top":"80px"},500).delay(1).animate({"padding-top":"0px"},1);
		$("#navbar").delay(500).removeClass("navfix");
		navwrap.css({height:"auto",width:"auto"});

		//$("body").delay(1100).css()
		
	}else{
		if(nav.hasClass("navfix")!=true){
			w=nav.width();
			h=nav.height();
			nav.addClass("navfix");
			navwrap.css({width:"auto",height:""+h+"px"});
			//alert("ok");

		}

		

	}
	
	//alert("ok");
	//alert($("#navbar").width(10));
	
	
});
/*
$(".level:after").click(function(){

	a=$("body").css({'width':"50%"});
    alert(a.Top);

});
*/



$(window).scroll(function(){

 width=$("html,body").outerHeight();
 scrolltop=$("html,body").scrollTop();

 progress=(scrolltop/width)*100;
$(".scroll-progress").delay(10000).width(""+progress+"%");



});

	var type=new Typed('#typestr',{
		stringsElement:'#typetext',
		typeSpeed:150,
		loop:'infinite',
		backSpeed:200,
		

	
	});




function count_info(first,last){
	this.first=first;
	this.last=last;
	this.valArray=[]
}

var countArray=[];
/* countArray[0]=new c_item(0,98);
 countArray[1]=new c_item(0,95);
 countArray[2]=new c_item(0,59);
 countArray[3]=new c_item(0,63);
 countArray[4]=new c_item(0,100);
*/


var element=$(".count");

for(i=0;i<element.length;i++){

	countArray[i]=new count_info(0,element.eq(i).text());
	//console.log(countArray[i]);

}

/*


var stop_handle=setInterval(count,50,countArray);

function count(count_array){



	for(i=0;i<element.length;i++){
    //console.log(count_array[i].first);

       if(  count_array[i].first <= count_array[i].last){
		
		  element.eq(i).text(countArray[i].first);
		  count_array[i].first=count_array[i].first+1;


		}

		//console.log(countArray);
		

	}
	//console.log("ok");

}

*/














});

setTimeout(()=>{

$(document).ready(function(){
	$('.page-loader').css('display','none');
});

},200);

