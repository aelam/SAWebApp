(function (j) {
    var k = {qqmusic: function (a, b) {
        var c = {type: "music", content: "", title: a("#song_name")[0].innerHTML, desc: a("#singer_name")[0].innerHTML, img_url: a("#album_pic")[0].src, link: document.location.href, data_url: a("audio")[0].src};
        b(c)
    }, qqvideo: function (a, b) {
        var c = {type: "video", content: "", title: a(".mod_video_tit")[0].innerHTML, desc: "", img_url: a(".tvp-poster-img")[0].src, link: document.location.href, data_url: document.location.href};
        b(c)
    }, qqnews: function (a, b) {
        b({type: "link", content: "", title: contentModel.title,
            desc: contentModel.desc, img_url: contentModel.img_url, link: contentModel.link})
    }, mpmsg: function (a, b) {
        var c = {type: "link", content: "", title: document.title, desc: a("<div/>").html(a("#txt-desc").html()).text(), img_url: _WXJS("#media img").attr("src"), link: document.location.href};
        b(c)
    }}, h = [
        {re: /^http(s)?:\/\/y.qq.com\/i\/song\.html\?songid=.*/, handlers: ["qqmusic"]},
        {re: /^http(s)?:\/\/(m|3g)\.v\.qq\.com\/play\/play.html\?.*/, handlers: ["qqvideo"]},
        {re: /^http(s)?:\/\/view.inews.qq.com\/w\/.*/, handlers: ["qqnews"]},
        {re: /^http(s)?:\/\/mp\.weixin\.qq\.com\/mp\/appmsg\/show.*/, handlers: ["mpmsg"]}
    ], l = {getShareObject: function (a, b, c) {
        var f, e, d, g, i;
        for (e = 0; e < h.length; e++)if (f = h[e], f.re.test(document.location.href)) {
            i = !0;
            for (g = 0; g < f.handlers.length; g++)e = f.handlers[g], k[e](a, function (a) {
                d || (d = a) && b(a)
            });
            break
        }
        i ? setTimeout(function () {
            d || (d = "timeout", c(d))
        }, 4E3) : (d = "nomatch", c(d))
    }};
    j.on("__internal:get_share_object", function (a) {
        l.getShareObject(a.$, a.success, a.fail)
    })
})(WeixinJSBridge);
