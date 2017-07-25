
    $(document).ready(function(){

        $('#slide').hide(); //初期では非表示

        $('#tags span').click(function() {

            if($(this).hasClass('active')){

                $('#slide').hide();

                $($(this).find('#slide').attr('href')).fadeOut();

                $('#slide').removeClass('active');

            }else{

                $('#slide').removeClass('active');

                $('#slide').hide();
                $($(this).find('#slide').attr('href')).fadeIn();

                $(this).addClass('active');

            }

        })

    });

    $(document).ready(function(){

        $('#slide2').hide(); //初期では非表示

        $('#tags span').click(function() {

            if($(this).hasClass('active')){

                $('#slide2').hide();

                $($(this).find('#slide2').attr('href')).fadeOut();

                $('#slide2').removeClass('active');

            }else{

                $('#slide2').removeClass('active');

                $('#slide2').hide();
                $($(this).find('tags').attr('href')).fadeIn();

                $(this).addClass('active');

            }

        })

    });

    $(document).ready(function(){

        $('#slide3').hide(); //初期では非表示

        $('#tags span').click(function() {

            if($(this).hasClass('active')){

                $('#slide3').hide();

                $($(this).find('#slide3').attr('href')).fadeOut();

                $('#slide3').removeClass('active');

            }else{

                $('#slide3').removeClass('active');

                $('#slide3').hide();
                $($(this).find('#slide3').attr('href')).fadeIn();

                $(this).addClass('active');

            }

        })

    });

    $(document).ready(function(){

        $('#slide4').hide(); //初期では非表示

        $('#tags span').click(function() {

            if($(this).hasClass('active')){

                $('#slide4').hide();

                $($(this).find('#slide4').attr('href')).fadeOut();

                $('#slide4').removeClass('active');

            }else{

                $('#slide4').removeClass('active');

                $('#slide4').hide();
                $($(this).find('#slide4').attr('href')).fadeIn();

                $(this).addClass('active');

            }

        })

    });

    $(document).ready(function(){

        $('#slide5').hide(); //初期では非表示

        $('#tags span').click(function() {

            if($(this).hasClass('active')){

                $('#slide5').hide();

                $($(this).find('#slide5').attr('href')).fadeOut();

                $('#slide5').removeClass('active');

            }else{

                $('#slide5').removeClass('active');

                $('#slide5').hide();
                $($(this).find('#slide5').attr('href')).fadeIn();

                $(this).addClass('active');

            }

        })

    });

    $(function(){

          var time=1500;
          var speed=1000;

          $("slide ul li").css({"posithon":"relative","overflow":"hidden"});
          $("slide ul li").hide().css({"posotion":"absolute","top":0,"left":0});
          $("slide ul li").addClass("active").show();

          setInterval(function(){

            var active = $("#slide ul li.active");

            var next = active.next("li").length?active.next("li"):$("#slide ul li:first");

            active.fadeOut(speed).removeClass("active");

            next.fadeIn(speed).addClass("active");
          },time)
          
    });


    $(function(){

          
          var time=1500;
          var speed=1000;

          $("slide2 ul li").css({"posithon":"relative","overflow":"hidden"});
          $("slide2 ul li").hide().css({"posotion":"absolute","top":0,"left":0});
          $("slide2 ul li").addClass("active").show();

          setInterval(function(){

            var active = $("#slide2 ul li.active");

            var next = active.next("li").length?active.next("li"):$("#slide2 ul li:first");

            active.fadeOut(speed).removeClass("active");

            next.fadeIn(speed).addClass("active");
          },time)
          
    });


     $(function(){

          
          var time=1500;
          var speed=1000;

          $("slide3 ul li").css({"posithon":"relative","overflow":"hidden"});
          $("slide3 ul li").hide().css({"posotion":"absolute","top":0,"left":0});
          $("slide3 ul li").addClass("active").show();

          setInterval(function(){

            var active = $("#slide3 ul li.active");

            var next = active.next("li").length?active.next("li"):$("#slide3 ul li:first");

            active.fadeOut(speed).removeClass("active");

            next.fadeIn(speed).addClass("active");
          },time)
          
      });

  $(function(){

          
          var time=1500;
          var speed=1000;

          $("slide4 ul li").css({"posithon":"relative","overflow":"hidden"});
          $("slide4 ul li").hide().css({"posotion":"absolute","top":0,"left":0});
          $("slide4 ul li").addClass("active").show();

          setInterval(function(){

            var active = $("#slide4 ul li.active");

            var next = active.next("li").length?active.next("li"):$("#slide4 ul li:first");

            active.fadeOut(speed).removeClass("active");

            next.fadeIn(speed).addClass("active");
          },time)
          
    });

    $(function(){

          
          var time=1500;
          var speed=1000;

          $("slide5 ul li").css({"posithon":"relative","overflow":"hidden"});
          $("slide5 ul li").hide().css({"posotion":"absolute","top":0,"left":0});
          $("slide5 ul li").addClass("active").show();

          setInterval(function(){

            var active = $("#slide5 ul li.active");

            var next = active.next("li").length?active.next("li"):$("#slide5 ul li:first");

            active.fadeOut(speed).removeClass("active");

            next.fadeIn(speed).addClass("active");
          },time)
          
    });

  

  $(function() {

    $("#tags span").click(function() {

      var tags = $(this).attr('id');
    $("#tags span").removeClass('select');
    $(this).addClass('select');
    $("#choice div").fadeOut(500);
      if(tags == 'tab02') {
          $("#choice .tab02").fadeIn(500);
      } else if(tags == 'tab01') {
          $("#choice .tab01").fadeIn(500);
      } else if(tags == 'tab03') {
          $("#choice .tab03").fadeIn(500);
      } else if(tags == 'tab04') {
          $("#choice .tab04").fadeIn(500);
      } else if(tags == 'tab05') {
          $("#choice .tab05").fadeIn(500);
      } else if(tags == 'tab06') {
          $("#choice .tab01").fadeIn(500);
      } else if(tags == 'tab07') {
          $("#choice .tab02").fadeIn(500);
      } else if(tags == 'tab08') {
          $("#choice .tab03").fadeIn(500);
      } else if(tags == 'tab09') {
          $("#choice .tab04").fadeIn(500);
      } else if(tags == 'tab10') {
          $("#choice .tab05").fadeIn(500);
      } else if(tags == 'tab11') {
          $("#choice .tab01").fadeIn(500);
      } else if(tags == 'tab12') {
          $("#choice .tab02").fadeIn(500);
      } else if(tags == 'tab13') {
          $("#choice .tab03").fadeIn(500);
      } else if(tags == 'tab14') {
          $("#choice .tab04").fadeIn(500);
      } else if(tags == 'tab15') {
          $("#choice .tab05").fadeIn(500);
      }  else {
          $("#choice div").fadeIn(500);
      }
    });
  });
