$(document).ready(function(){
    $("#btn-f-out").click(function(){
        $(".box").fadeOut(1000, "swing", function(){
            $("#btn-f-out").text("animeDone");
        })
    });

    $("#btn-f-in").click(function(){
        $(".box").fadeIn(1000, "swing", function(){
            $("#btn-f-out").text("Fade Out");
        })
    });

    $("#btn-f-toggle").click(function(){
        $(".box").fadeToggle(500, "linear", function(e){

        })
    });


    $("#btn-s-down").click(function(){
        $(".box").slideDown(300, "linear" );
    });
    $("#btn-s-up").click(function(){
        $(".box").slideUp(300, "linear" );
    });

    $("#btn-s-toggle").click(function(){
        $(".box").slideToggle(3000, "linear" );
    });

    $("#btn-stop").click(function(){
        $(".box").stop();
    });



    // Animate function
    $("#btn-move-left").click(function(e){
        $(".animated").animate({
            left: "300px",
            height: 200,
            width: 200,
            opacity: 0.4,
            //width:0,
            
        }, 1000);
    })


    $("#btn-move-right").click(function(e){
        $(".animated").animate({
            left: 0,
            height: 100,
            width: 100,
            opacity: 1,
            //width:100,
        });
    })


    $("#btn-move-around").click(function(e){
        $(".animated").animate({
            left: 200,
        }).animate({
            top: 100
        }).animate({
            left:0
        }).animate({
            top:0
        });
    })
})