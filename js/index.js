$(function () {

    //导航栏鼠标放入效果
    $("nav li a").on("mouseenter", function () {
        $(this).addClass("nvaactive");
        $(this).on("mouseleave", function () {
            $(this).removeClass("nvaactive");
        })
    })


    //轮播图
    $(function () {
        $($(".jh")[0]).find("h2").addClass("text")
        $($(".jh")[0]).find("p").addClass("ptext");
        var len = ($(".anniu span").length)
        for (var i = 0; i < len; i++) {
            $(function (i) {
                $(".anniu span")[i].onmouseenter = function () {
                    $(".anniu span").removeClass("anniuactive");
                    $(this).addClass("anniuactive");
                    $($(".jh")[i]).find("h2").removeClass("text");
                    $($(".jh")[i]).find("p").removeClass("ptext");
                    $(".jh").removeClass("jh1");
                    $($(".jh")[i]).addClass("jh1");
                    $($(".jh")[i]).find("h2").hide()
                    $($(".jh")[i]).find("h2").show()
                    $($(".jh")[i]).find("h2").addClass("text");
                    $($(".jh")[i]).find("p").addClass("ptext");
                    // $($(".jh")[i]).find("h2").css({display:"black"})
                    $(".banner ul").css({ marginLeft: -1920 * i + "px" })
                }
            }(i))
        }
        var i = 0;
        var timer = setInterval(function () {
            if (i >= len - 1) {
                i = 0;
                $(".banner ul").css({ marginLeft: -1920 * i + "px" });
                $(".anniu span").removeClass("anniuactive");
                $($(".anniu span")[i]).addClass("anniuactive");
                $($(".jh")[i]).find("h2").removeClass("text");
                $($(".jh")[i]).find("p").removeClass("ptext");
                $(".jh").removeClass("jh1");
                $($(".jh")[i]).addClass("jh1");
                $($(".jh")[i]).find("h2").hide()
                $($(".jh")[i]).find("h2").show()
                $($(".jh")[i]).find("h2").addClass("text")
                $($(".jh")[i]).find("p").addClass("ptext");
            } else {
                i++;
                $(".banner ul").css({ marginLeft: -1920 * i + "px" });
                $(".anniu span").removeClass("anniuactive");
                $($(".anniu span")[i]).addClass("anniuactive");
                $($(".jh")[i]).find("h2").removeClass("text");
                $($(".jh")[i]).find("p").removeClass("ptext");
                $(".jh").removeClass("jh1");
                $($(".jh")[i]).addClass("jh1");
                $($(".jh")[i]).find("h2").hide()
                $($(".jh")[i]).find("h2").show()
                $($(".jh")[i]).find("p").addClass("ptext");
                $($(".jh")[i]).find("h2").addClass("text")
            }
        }, 5000)
    })



    //关于我们
    $(".aboutimg .lf").on("mouseenter", function () {
        $(this).css({ backgroundSize: "200% 200%" });
        $(this).find("a").css({ opacity: "1" })
    }).on("mouseleave", function () {
        $(this).css({ backgroundSize: "100% 100%" });
        $(this).find("a").css({ opacity: "0" })
    })


    //我们的团队

    $(".tuan .lf").on("mouseenter", function () {
        $(this).find(".js").addClass("jsh");
        $(this).find(".js").find("h3").addClass("h3h")
        $(this).find(".js").find("p").addClass("ph")
        $(this).find(".js").find("div").addClass("lxth")
    }).on("mouseleave", function () {
        $(this).find(".js").removeClass("jsh");
        $(this).find(".js").find("h3").removeClass("h3h")
        $(this).find(".js").find("p").removeClass("ph")
        $(this).find(".js").find("div").removeClass("lxth")
    })

    //服务
    $(".fwxbox .lf").on("mouseenter", function () {
        $(this).find(".fwimg").css({ backgroundColor: "#e98f36" });
    }).on("mouseleave", function () {
        $(this).find(".fwimg").css({ backgroundColor: "#fff" });
    })

    //工作环境
    $(".gzhj").on("mouseenter", function () {
        $(this).find("p").css({ transform: "scale3d(2,2,1) rotate3d(0,0,1,45deg) translate3d(0,0,0)" })
        $(this).find('span').css({ opacity: "1" })
    }).on("mouseleave", function () {
        $(this).find("p").css({ transform: "scale3d(2.6,2.4,1) rotate3d(0,0,1,45deg) translate3d(0,-80%,0)" })
        $(this).find('span').css({ opacity: "0" })
    })

    //新闻和事件
    $(".newboximg").find("a").on("mouseenter", function () {
        $(this).css({ backgroundSize: "180% 180%" })
    }).on("mouseleave", function () {
        $(this).css({ backgroundSize: "100% 100%" })
    })
})







