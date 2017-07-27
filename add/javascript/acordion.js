
	//ゼミ情報のアコーディオン	
	$(function() {
    	$("div#contents_semi").hide();
        // アコーディオン
        $("div#container_semi").each(function() {
            var accordion = $(this);
            $(this).find("div#item_semi").click(function() {
                var targetContentWrap = $(this).next("div#contents_semi");
                if ( targetContentWrap.css("display") === "none" ) {
                    accordion.find("div#contents_semi").slideUp();
                    accordion.find("div#item_semi.div#contents_semi").removeClass("open");
                }
                targetContentWrap.slideToggle();
                $(this).toggleClass("open");
            });
        });
    
    });

	//レポートのアコーディオン
	$(function() {
    	$("div#contents_teach").hide();
        // アコーディオン
        $("div#container_teach").each(function() {
            var accordion = $(this);
            $(this).find("div#item_teach").click(function() {
                var targetContentWrap = $(this).next("div#contents_teach");
                if ( targetContentWrap.css("display") === "none" ) {
                    accordion.find("div#contents_teach").slideUp();
                    accordion.find("div#item_teach.div#contents_teach").removeClass("open");
                }
                targetContentWrap.slideToggle();
                $(this).toggleClass("open");
            });
        });
    
    });


	