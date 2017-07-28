$(function(){
		setInterval("photoslide()", 50);
	});

	var current = 0;
	function photoslide(){
		current -= 1;
	if(current == -300){
		var copy = $(".post ul li:first").clone();
		$(".post ul li:first").remove();
		$(".post ul").append(copy);
		current = 0;

	};

	$('.post ul').css("margin-left", current+"px");
	}

	$(function(){
			setInterval("photoslide()", 50);
		});

		var current = 0;
		function photoslide(){
			current -= 1;
		if(current == -600){
			var copy = $(".index_post ul li:first").clone();
			$(".index_post ul li:first").remove();
			$(".index_post ul").append(copy);
			current = 0;

		};

		$('.index_post ul').css("margin-left", current+"px");
		}
