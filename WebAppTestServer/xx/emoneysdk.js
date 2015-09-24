(function() {

    var goods = {
        changeNavigationBarColor:function(colors, type) {
            var params = {
                "colors": colors,
                "type":type
            };
        },

        hideAllMenuItems:function() {
        },

        showMenuItemChangeFontSize:function(show) {
            var params = {
                "show": show,
            };
        },

        toggleMenuItem:function(action, show) {
            var params = {
                "action": action,
                "show":show
            };
        },
        onReady:function() {

        }
    }
    };

    windows.emoneysdk = goods;
    windows.goods = goods;
)