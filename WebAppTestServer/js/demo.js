//goods.changeNavigationBarColor({
//    color:"#ff00ff",
//    success:function(){
//
//    },
//    error:function() {
//
//    }
//
//});
//
goods.showOptionsMenu({
//    menuItems:["changeFontSize","search"],
//    success:function(){
//         alert("changeFontSize, success");
//    },
//    error:function() {
//        alert("changeFontSize, error");
//    }
    menuItems:["onMenuShare"],
    success:function(){
        alert("changeFontSize, success");
    },
    error:function() {
        alert("changeFontSize, error");
    }


});


goods.onMenuShare({
    url:"http://baidu.com",
    title:"timeline title",
    success:function(){
        alert("onMenuShare, success");
    },
    error:function() {
        alert("onMenuShare, error");
    }
});


//goods.hello("xxx");


console.log("console.log");

//em.ready(function() {
//    alert("em.ready");
//
//    em.onMenuShareTimeline({
//    title: '', // 分享标题
//    link: '', // 分享链接
//    imgUrl: '', // 分享图标
//    success: function () {
//        // 用户确认分享后执行的回调函数
//    },
//    cancel: function () {
//        // 用户取消分享后执行的回调函数
//    }
//});
//
//});
//
//
//em.error(function(res) {
//    alert("em.error");
//});
//

//em.shareTimeline({
//    title: '', // 分享标题
//    link: '', // 分享链接
//    imgUrl: '', // 分享图标
//    success: function () {
//        // 用户确认分享后执行的回调函数
//    },
//    cancel: function () {
//        // 用户取消分享后执行的回调函数
//    }
//});
//
//em.showNavigationBar(function(){
//
//});
//
//em.setNavigationBarColor();
//
//em.getNetworkType({
//    success: function (res) {
//        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
//    }
//});
//

//em.getThemeType({
//    success: function (res) {
//        var themeType = res.themeType; // 返回网络类型2g，3g，4g，wifi
//    }
//});
