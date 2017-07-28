
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

	$('div#contents_a').each(function(){

    	$(this).css("height",$(this).height()+"px");
	});
	$('div#contents_a').hide();

	$('div#item_a').click(function () {

    	$(this).next('div#contents_a').slideToggle('slow').siblings('div#contents_a').slideUp('slow');
    	$(this).siblings('div#item_a').removeClass('active');
   	 	$(this).toggleClass('active');

	});

	$('div#contents_b').each(function(){

    	$(this).css("height",$(this).height()+"px");
	});
	$('div#contents_b').hide();

	$('div#item_b').click(function () {

    	$(this).next('div#contents_b').slideToggle('slow').siblings('div#contents_b').slideUp('slow');
    	$(this).siblings('div#item_b').removeClass('active');
    	$(this).toggleClass('active');

	});

	$('div#contents_c').each(function(){

	    	$(this).css("height",$(this).height()+"px");
		});
		$('div#contents_c').hide();

		$('div#item_c').click(function () {

	    	$(this).next('div#contents_c').slideToggle('slow').siblings('div#contents_c').slideUp('slow');
	    	$(this).siblings('div#item_c').removeClass('active');
	    	$(this).toggleClass('active');

	});

	