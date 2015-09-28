(function() {
    // API_LIST
    var api_list = {
            onMenuShare: "menu:share",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest"
    }

    // Events
    var events = document.createEvent('Event');
    events.initEvent(api_list.onMenuShare, true, true);

    // Goods
    var goods = {
        changeNavigationBarColor: function(a) {
            invoke(api_list.changeNavigationBarColor, {"color": a.color}, a);
        },
        showOptionsMenu:function(a) {
            invoke(api_list.showOptionsMenu, {"menuItems": a.menuItems}, a);
        },
        hideOptionsMenu:function(a) {
            invoke(api_list.hideOptionsMenu, {"menuItems": a.menuItems}, a);
        },

        onMenuShare: function(a) {
            on(api_list.onMenuShare,
                {title: a.title,
                 url: a.url,
                 completion:function(){
                     console.log("onMenuShare:completion");
                     invoke("share", {title: a.title, url: a.url}, a);
                 }
                }, a);
        },

        dispatchEvent: function() {
            alert("HELLO");
           document.dispatchEvent(events);
        }
    };

    function invoke(api, args, callback) {
        EMJSAPI.invoke(api, args, callback);
    };

    function on(api, args, callback) {
        console.log("api:" + api + "xxx");
        document.addEventListener(api, function(){
            console.log("api:" + api + " yyyy");

            args.completion();
        }, false);
    };

    window.goods = goods;
})();