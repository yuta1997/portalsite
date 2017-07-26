
	$(document).ready(function(){
		$("div#item_teach_a").click(function(){
			$(this).next().slideToggle(300);
		});
	});

	$(document).ready(function(){
		$("div#item_teach_b").click(function(){
			$(this).next().slideToggle(300);
		});
	});

	$(document).ready(function(){
		$("div#item_teach_c").click(function(){
			$(this).next().slideToggle(300);
		});
	});

	$('div#container_a').each(function(){

    	$(this).css("height",$(this).height()+"px");
	});
	$('div#container_a').hide();

	$('div#item_a').click(function () {

    	$(this).next('div#container_a').slideToggle('slow').siblings('div#container_a').slideUp('slow');
    	$(this).siblings('div#item_a').removeClass('active');
   	 	$(this).toggleClass('active');

	});

	$('div#container_b').each(function(){

    	$(this).css("height",$(this).height()+"px");
	});
	$('div#container_b').hide();

	$('div#item_b').click(function () {

    	$(this).next('div#container_b').slideToggle('slow').siblings('div#container_b').slideUp('slow');
    	$(this).siblings('div#item_b').removeClass('active');
    	$(this).toggleClass('active');

	});

	$('div#container_c').each(function(){

	    	$(this).css("height",$(this).height()+"px");
		});
		$('div#container_c').hide();

		$('div#item_c').click(function () {

	    	$(this).next('div#container_c').slideToggle('slow').siblings('div#container_c').slideUp('slow');
	    	$(this).siblings('div#item_c').removeClass('active');
	    	$(this).toggleClass('active');

	});

	