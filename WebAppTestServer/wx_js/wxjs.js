(function() {
  function Q() {
    if (wx_bridge._fetchQueue !== Z) return "";
    var c = x.stringify(L);
    L = [];
    var e = [];
    e[0] = c;
    e[1] = M;
    var i = e.join(""),
      e = "";
    "yes" === N && (e = K.SHA1(i).toString());
    i = {};
    i[$] = c;
    i[R] = e;
    return x.stringify(i)
  }
  function S(c) {
    if (wx_bridge._handleMessageFromWeixin !== aa) return "{}";
    var e = c[ba],
      c = c[R],
      i = [];
    i[0] = x.stringify(e);
    i[1] = M;
    var i = i.join(""),
      l = "";
    if ("yes" === N && (l = K.SHA1(i).toString(), l !== c)) return "{}";
    switch (e[T]) {
    case "callback":
      return "string" === typeof e[F] && "function" === typeof C[e[F]] ? (c = C[e[F]](e.__params), delete C[e[F]], x.stringify(c)) : x.stringify({
        __err_code: "cb404"
      });
    case "event":
      "object" === typeof e[U] && (V = e[U]);
      W = e[X];
      if ("string" === typeof e[D]) {
        if ("function" === typeof G[e[D]] && O(e[D])) return c = G[e[D]](e.__params), x.stringify(c);
        if ("function" === typeof H[e[D]]) return c = H[e[D]](e.__params), x.stringify(c)
      }
      return x.stringify({
        __err_code: "ev404"
      })
    }
    return "{}"
  }
  function O(c) {
    return V.some(function(e) {
      return e === c
    })
  }
  function E(c) {
    return wx_bridge.env !== ca ? "" : v[c]
  }
  function WX_LOG(c) {
    if (wx_bridge.log === da) {
      for (var e = [], i = 0; i < arguments.length; i++) e.push(arguments[i]);
      var i = e.shift(),
        l;
      try {
        e.unshift(i), l = P.apply(null, e)
      } catch (j) {
        l = c
      }
      o("log", {
        msg: l
      })
    }
  }
  function o(c, e, i) {
    if (wx_bridge.call === ea && c && "string" === typeof c) {
      "object" !== typeof e && (e = {});
      var l = (fa++).toString();
      "function" === typeof i && (C[l] = i);
      i = [];
      i[0] = W;
      i[1] = M;
      var i = i.join(""),
        j = "";
      "yes" === N && (j = K.SHA1(i).toString());
      e[X] = j;
      c = {
        func: c,
        params: e
      };
      c[T] = "call";
      c[F] = l;
      l = x.stringify(c);
      L.push(l);
      document.location = ga
    }
  }
  function A(c, e) {
    c && "string" === typeof c && "function" === typeof e && (H[c] = e)
  }
  function Y(c, e) {
    wx_bridge.on === ha && c && "string" === typeof c && "function" === typeof e && (G[c] = e)
  }
  function y(c, e) {
    if ("function" === typeof G[c] && O(c)) G[c](e);
    else if ("function" === typeof H[c]) H[c](e)
  }
  function I(c, e) {
    var i = new Image,
      l = !1;
    i.onload = function() {
      l || (l = !0, e(i))
    };
    i.src = c;
    setTimeout(function() {
      l || (l = !0, e(i))
    }, 1E3)
  }
  function ia(c, e) {
    I(c.src, function(i) {
      var l = /^data:image\/(png|jpg|jpeg|tiff|gif|bmp);base64,/i,
        j = "";
      if (i.src.match(l)) j = i.src;
      else {
        var b = document.createElement("canvas");
        b.width = i.width;
        b.height = i.height;
        b.getContext("2d").drawImage(i, 0, 0);
        var a = "jpg",
          m = i.src.match(/\.(png|jpg|jpeg|tiff|gif|bmp)$/i);
        m && (a = m[1].toLowerCase());
        try {
          j = b.toDataURL("image/" + a)
        } catch (p) {
          WX_LOG(p.message)
        }
      }
      e(j.replace(l, ""), i, c)
    })
  }
  function WX_VIEWIMAGE() {
    q('a[href^="weixin://viewimage/"]').on("click", function(c) {
      for (var e = "", e = ("string" === typeof c.target.href && 0 === c.target.href.search("weixin://viewimage/") ? c.target : q(c.target).parents('a[href^="weixin://viewimage/"]')[0]).href.substr(19), i = q('a[href^="weixin://viewimage/"]'), l = [], j = 0; j < i.length; j++) l.push(i[j].href.substr(19));
      o("imagePreview", {
        urls: l,
        current: e
      });
      c.preventDefault()
    })
  }
  function WX_READER_SHARE() {
    q('a[href^="weixin://readershare/"]').on("click", function(c) {
      c.preventDefault();
      y("menu:share:weibo", v.shareWeiboData || {})
    });
    q('a[href^="weixin://readertimeline/"]').on("click", function(c) {
      c.preventDefault();
      y("menu:share:timeline", v.shareTimelineData || {})
    })
  }
  function WX_PLAY_AUDIO() {
    var c = q("audio");
    c.on("play", function() {
      o("audioStateChanged", {
        state: "play"
      })
    });
    c.on("ended", function() {
      o("audioStateChanged", {
        state: "ended"
      })
    });
    c.on("pause", function() {
      o("audioStateChanged", {
        state: "pause"
      })
    });
    c = q("video");
    c.on("play", function() {
      o("videoStateChanged", {
        state: "play"
      })
    });
    c.on("ended", function() {
      o("videoStateChanged", {
        state: "ended"
      })
    });
    c.on("pause", function() {
      o("videoStateChanged", {
        state: "pause"
      })
    })
  }(function(c) {
    String.prototype.trim === c && (String.prototype.trim = function() {
      return this.replace(/^\s+/, "").replace(/\s+$/, "")
    });
    Array.prototype.reduce === c && (Array.prototype.reduce = function(e) {
      if (this === void 0 || this === null) throw new TypeError;
      var i = Object(this),
        l = i.length >>> 0,
        j = 0,
        b;
      if (typeof e != "function") throw new TypeError;
      if (l == 0 && arguments.length == 1) throw new TypeError;
      if (arguments.length >= 2) b = arguments[1];
      else {
        do {
          if (j in i) {
            b = i[j++];
            break
          }
          if (++j >= l) throw new TypeError;
        } while (1)
      }
      for (; j < l;) {
        j in i && (b = e.call(c, b, i[j], j, i));
        j++
      }
      return b
    })
  })();
  var q = function() {
      function c(d) {
        return "[object Function]" == F.call(d)
      }
      function e(d) {
        return d instanceof Object
      }
      function i(d) {
        var a, b;
        if ("[object Object]" !== F.call(d)) return !1;
        b = c(d.constructor) && d.constructor.prototype;
        if (!b || !hasOwnProperty.call(b, "isPrototypeOf")) return !1;
        for (a in d);
        return a === k || hasOwnProperty.call(d, a)
      }
      function l(d) {
        return d instanceof Array
      }
      function j(d) {
        return "number" == typeof d.length
      }
      function b(d) {
        return d.filter(function(d) {
          return d !== k && null !== d
        })
      }
      function a(d) {
        return d.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      }
      function m(d) {
        return d in q ? q[d] : q[d] = RegExp("(^|\\s)" + d + "(\\s|$)")
      }
      function p(d, a) {
        return a === k ? h(d) : h(d).filter(a)
      }
      function f(d, a, b, r) {
        return c(a) ? a.call(d, b, r) : a
      }
      function s(d, a, b) {
        var c = d % 2 ? a : a.parentNode;
        c ? c.insertBefore(b, !d ? a.nextSibling : 1 == d ? c.firstChild : 2 == d ? a : null) : h(b).remove()
      }
      function n(d, a) {
        a(d);
        for (var b in d.childNodes) n(d.childNodes[b], a)
      }
      var k, g, h, r, t = [],
        J = t.slice,
        z = window.document,
        o = {},
        q = {},
        v = z.defaultView.getComputedStyle,
        w = {
          "column-count": 1,
          columns: 1,
          "font-weight": 1,
          "line-height": 1,
          opacity: 1,
          "z-index": 1,
          zoom: 1
        },
        x = /^\s*<(\w+|!)[^>]*>/,
        A = [1, 3, 8, 9, 11],
        y = z.createElement("table"),
        B = z.createElement("tr"),
        D = {
          tr: z.createElement("tbody"),
          tbody: y,
          thead: y,
          tfoot: y,
          td: B,
          th: B,
          "*": z.createElement("div")
        },
        G = /complete|loaded|interactive/,
        H = /^\.([\w-]+)$/,
        I = /^#([\w-]+)$/,
        K = /^[\w-]+$/,
        F = {}.toString,
        u = {},
        E, C, L = z.createElement("div");
      u.matches = function(d, a) {
        if (!d || 1 !== d.nodeType) return !1;
        var b = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.matchesSelector;
        if (b) return b.call(d, a);
        var c;
        c = d.parentNode;
        (b = !c) && (c = L).appendChild(d);
        c = ~u.qsa(c, a).indexOf(d);
        b && L.removeChild(d);
        return c
      };
      E = function(d) {
        return d.replace(/-+(.)?/g, function(d, a) {
          return a ? a.toUpperCase() : ""
        })
      };
      C = function(d) {
        return d.filter(function(a, b) {
          return d.indexOf(a) == b
        })
      };
      u.fragment = function(d, a) {
        a === k && (a = x.test(d) && RegExp.$1);
        a in D || (a = "*");
        var b = D[a];
        b.innerHTML = "" + d;
        return h.each(J.call(b.childNodes), function() {
          b.removeChild(this)
        })
      };
      u.Z = function(d, a) {
        d = d || [];
        d.__proto__ = arguments.callee.prototype;
        d.selector = a || "";
        return d
      };
      u.isZ = function(d) {
        return d instanceof u.Z
      };
      u.init = function(d, a) {
        if (d) {
          if (c(d)) return h(z).ready(d);
          if (u.isZ(d)) return d;
          var r;
          if (l(d)) r = b(d);
          else if (i(d)) r = [h.extend({}, d)], d = null;
          else if (0 <= A.indexOf(d.nodeType) || d === window) r = [d], d = null;
          else if (x.test(d)) r = u.fragment(d.trim(), RegExp.$1), d = null;
          else {
            if (a !== k) return h(a).find(d);
            r = u.qsa(z, d)
          }
          return u.Z(r, d)
        }
        return u.Z()
      };
      h = function(d, a) {
        return u.init(d, a)
      };
      h.extend = function(d) {
        J.call(arguments, 1).forEach(function(a) {
          for (g in a) a[g] !== k && (d[g] = a[g])
        });
        return d
      };
      u.qsa = function(d, a) {
        var b;
        return d === z && I.test(a) ? (b = d.getElementById(RegExp.$1)) ? [b] : t : 1 !== d.nodeType && 9 !== d.nodeType ? t : J.call(H.test(a) ? d.getElementsByClassName(RegExp.$1) : K.test(a) ? d.getElementsByTagName(a) : d.querySelectorAll(a))
      };
      h.isFunction = c;
      h.isObject = e;
      h.isArray = l;
      h.isPlainObject = i;
      h.inArray = function(d, a, b) {
        return t.indexOf.call(a, d, b)
      };
      h.trim = function(d) {
        return d.trim()
      };
      h.uuid = 0;
      h.map = function(d, a) {
        var b, c = [],
          r;
        if (j(d)) for (r = 0; r < d.length; r++) b = a(d[r], r), null != b && c.push(b);
        else for (r in d) b = a(d[r], r), null != b && c.push(b);
        return 0 < c.length ? [].concat.apply([], c) : c
      };
      h.each = function(d, a) {
        var b;
        if (j(d)) for (b = 0; b < d.length && !1 !== a.call(d[b], b, d[b]); b++);
        else for (b in d) if (!1 === a.call(d[b], b, d[b])) break;
        return d
      };
      h.fn = {
        forEach: t.forEach,
        reduce: t.reduce,
        push: t.push,
        indexOf: t.indexOf,
        concat: t.concat,
        map: function(d) {
          return h.map(this, function(a, b) {
            return d.call(a, b, a)
          })
        },
        slice: function() {
          return h(J.apply(this, arguments))
        },
        ready: function(d) {
          G.test(z.readyState) ? d(h) : z.addEventListener("DOMContentLoaded", function() {
            d(h)
          }, !1);
          return this
        },
        get: function(d) {
          return d === k ? J.call(this) : this[d]
        },
        toArray: function() {
          return this.get()
        },
        size: function() {
          return this.length
        },
        remove: function() {
          return this.each(function() {
            null != this.parentNode && this.parentNode.removeChild(this)
          })
        },
        each: function(d) {
          this.forEach(function(a, b) {
            d.call(a, b, a)
          });
          return this
        },
        filter: function(d) {
          return h([].filter.call(this, function(a) {
            return u.matches(a, d)
          }))
        },
        add: function(d, a) {
          return h(C(this.concat(h(d, a))))
        },
        is: function(d) {
          return 0 < this.length && u.matches(this[0], d)
        },
        not: function(d) {
          var a = [];
          if (c(d) && d.call !== k) this.each(function(b) {
            d.call(this, b) || a.push(this)
          });
          else {
            var b = "string" == typeof d ? this.filter(d) : j(d) && c(d.item) ? J.call(d) : h(d);
            this.forEach(function(d) {
              0 > b.indexOf(d) && a.push(d)
            })
          }
          return h(a)
        },
        eq: function(d) {
          return -1 === d ? this.slice(d) : this.slice(d, +d + 1)
        },
        first: function() {
          var d = this[0];
          return d && !e(d) ? d : h(d)
        },
        last: function() {
          var d = this[this.length - 1];
          return d && !e(d) ? d : h(d)
        },
        find: function(d) {
          var a;
          a = 1 == this.length ? u.qsa(this[0], d) : this.map(function() {
            return u.qsa(this, d)
          });
          return h(a)
        },
        closest: function(d, a) {
          for (var b = this[0]; b && !u.matches(b, d);) b = b !== a && b !== z && b.parentNode;
          return h(b)
        },
        parents: function(d) {
          for (var a = [], b = this; 0 < b.length;) b = h.map(b, function(d) {
            if ((d = d.parentNode) && d !== z && 0 > a.indexOf(d)) return a.push(d), d
          });
          return p(a, d)
        },
        parent: function(d) {
          return p(C(this.pluck("parentNode")), d)
        },
        children: function(d) {
          return p(this.map(function() {
            return J.call(this.children)
          }), d)
        },
        siblings: function(d) {
          return p(this.map(function(d, a) {
            return J.call(a.parentNode.children).filter(function(d) {
              return d !== a
            })
          }), d)
        },
        empty: function() {
          return this.each(function() {
            this.innerHTML = ""
          })
        },
        pluck: function(d) {
          return this.map(function() {
            return this[d]
          })
        },
        show: function() {
          return this.each(function() {
            "none" == this.style.display && (this.style.display = null);
            if ("none" == v(this, "").getPropertyValue("display")) {
              var d = this.style,
                a = this.nodeName,
                b, c;
              o[a] || (b = z.createElement(a), z.body.appendChild(b), c = v(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), o[a] = c);
              d.display = o[a]
            }
          })
        },
        replaceWith: function(d) {
          return this.before(d).remove()
        },
        wrap: function(d) {
          return this.each(function() {
            h(this).wrapAll(h(d)[0].cloneNode(!1))
          })
        },
        wrapAll: function(d) {
          this[0] && (h(this[0]).before(d = h(d)), d.append(this));
          return this
        },
        unwrap: function() {
          this.parent().each(function() {
            h(this).replaceWith(h(this).children())
          });
          return this
        },
        clone: function() {
          return h(this.map(function() {
            return this.cloneNode(!0)
          }))
        },
        hide: function() {
          return this.css("display", "none")
        },
        toggle: function(d) {
          return (d === k ? "none" == this.css("display") : d) ? this.show() : this.hide()
        },
        prev: function() {
          return h(this.pluck("previousElementSibling"))
        },
        next: function() {
          return h(this.pluck("nextElementSibling"))
        },
        html: function(d) {
          return d === k ? 0 < this.length ? this[0].innerHTML : null : this.each(function(a) {
            var b = this.innerHTML;
            h(this).empty().append(f(this, d, a, b))
          })
        },
        text: function(d) {
          return d === k ? 0 < this.length ? this[0].textContent : null : this.each(function() {
            this.textContent = d
          })
        },
        attr: function(d, a) {
          var b;
          return "string" == typeof d && a === k ? 0 == this.length || 1 !== this[0].nodeType ? k : "value" == d && "INPUT" == this[0].nodeName ? this.val() : !(b = this[0].getAttribute(d)) && d in this[0] ? this[0][d] : b : this.each(function(b) {
            if (1 === this.nodeType) if (e(d)) for (g in d) this.setAttribute(g, d[g]);
            else this.setAttribute(d, f(this, a, b, this.getAttribute(d)))
          })
        },
        removeAttr: function(d) {
          return this.each(function() {
            1 === this.nodeType && this.removeAttribute(d)
          })
        },
        prop: function(d, a) {
          return a === k ? this[0] ? this[0][d] : k : this.each(function(b) {
            this[d] = f(this, a, b, this[d])
          })
        },
        data: function(d, b) {
          var c = this.attr("data-" + a(d), b);
          return null !== c ? c : k
        },
        val: function(d) {
          return d === k ? 0 < this.length ? this[0].value : k : this.each(function(a) {
            this.value = f(this, d, a, this.value)
          })
        },
        offset: function() {
          if (0 == this.length) return null;
          var d = this[0].getBoundingClientRect();
          return {
            left: d.left + window.pageXOffset,
            top: d.top + window.pageYOffset,
            width: d.width,
            height: d.height
          }
        },
        css: function(d, b) {
          if (b === k && "string" == typeof d) return 0 == this.length ? k : this[0].style[E(d)] || v(this[0], "").getPropertyValue(d);
          var c = "";
          for (g in d)"string" == typeof d[g] && "" == d[g] ? this.each(function() {
            this.style.removeProperty(a(g))
          }) : c += a(g) + ":" + ("number" == typeof d[g] && !w[a(g)] ? d[g] + "px" : d[g]) + ";";
          "string" == typeof d && ("" == b ? this.each(function() {
            this.style.removeProperty(a(d))
          }) : c = a(d) + ":" + ("number" == typeof b && !w[a(d)] ? b + "px" : b));
          return this.each(function() {
            this.style.cssText += ";" + c
          })
        },
        index: function(d) {
          return d ? this.indexOf(h(d)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(d) {
          return 1 > this.length ? !1 : m(d).test(this[0].className)
        },
        addClass: function(d) {
          return this.each(function(a) {
            r = [];
            var b = this.className;
            f(this, d, a, b).split(/\s+/g).forEach(function(d) {
              h(this).hasClass(d) || r.push(d)
            }, this);
            r.length && (this.className += (b ? " " : "") + r.join(" "))
          })
        },
        removeClass: function(d) {
          return this.each(function(a) {
            if (d === k) return this.className = "";
            r = this.className;
            f(this, d, a, r).split(/\s+/g).forEach(function(d) {
              r = r.replace(m(d), " ")
            });
            this.className = r.trim()
          })
        },
        toggleClass: function(d, a) {
          return this.each(function(b) {
            b = f(this, d, b, this.className);
            (a === k ? !h(this).hasClass(b) : a) ? h(this).addClass(b) : h(this).removeClass(b)
          })
        }
      };
      ["width", "height"].forEach(function(d) {
        h.fn[d] = function(a) {
          var b, c = d.replace(/./, function(a) {
            return a[0].toUpperCase()
          });
          return a === k ? this[0] == window ? window["inner" + c] : this[0] == z ? z.documentElement["offset" + c] : (b = this.offset()) && b[d] : this.each(function(b) {
            var c = h(this);
            c.css(d, f(this, a, b, c[d]()))
          })
        }
      });
      ["after", "prepend", "before", "append"].forEach(function(a, b) {
        h.fn[a] = function() {
          var a = h.map(arguments, function(a) {
            return e(a) ? a : u.fragment(a)
          });
          if (1 > a.length) return this;
          var d = this.length,
            c = 1 < d,
            r = 2 > b;
          return this.each(function(g, h) {
            for (var t = 0; t < a.length; t++) {
              var f = a[r ? a.length - t - 1 : t];
              n(f, function(a) {
                null != a.nodeName && ("SCRIPT" === a.nodeName.toUpperCase() && (!a.type || "text/javascript" === a.type)) && window.eval.call(window, a.innerHTML)
              });
              c && g < d - 1 && (f = f.cloneNode(!0));
              s(b, h, f)
            }
          })
        };
        h.fn[b % 2 ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
          h(b)[a](this);
          return this
        }
      });
      u.Z.prototype = h.fn;
      u.camelize = E;
      u.uniq = C;
      h._WXJS = u;
      return h
    }();
  window._WXJS = q;
  (function(c) {
    function e(a) {
      return a._zid || (a._zid = s++)
    }
    function i(a, b, c, g) {
      b = l(b);
      if (b.ns) var h = RegExp("(?:^| )" + b.ns.replace(" ", " .* ?") + "(?: |$)");
      return (f[e(a)] || []).filter(function(a) {
        return a && (!b.e || a.e == b.e) && (!b.ns || h.test(a.ns)) && (!c || e(a.fn) === e(c)) && (!g || a.sel == g)
      })
    }

    function l(a) {
      a = ("" + a).split(".");
      return {
        e: a[0],
        ns: a.slice(1).sort().join(" ")
      }
    }
    function j(a, b, g) {
      c.isObject(a) ? c.each(a, g) : a.split(/\s/).forEach(function(a) {
        g(a, b)
      })
    }
    function b(a, b, g, h, k, i) {
      var i = !! i,
        m = e(a),
        n = f[m] || (f[m] = []);
      j(b, g, function(b, g) {
        var f = k && k(g, b),
          t = f || g,
          e = function(b) {
            var c = t.apply(a, [b].concat(b.data));
            !1 === c && b.preventDefault();
            return c
          },
          f = c.extend(l(b), {
            fn: g,
            proxy: e,
            sel: h,
            del: f,
            i: n.length
          });
        n.push(f);
        a.addEventListener(f.e, e, i)
      })
    }
    function a(a, b, c, g) {
      var h = e(a);
      j(b || "", c, function(b, c) {
        i(a, b, c, g).forEach(function(b) {
          delete f[h][b.i];
          a.removeEventListener(b.e, b.proxy, !1)
        })
      })
    }
    function m(a) {
      var b = c.extend({
        originalEvent: a
      }, a);
      c.each(h, function(c, h) {
        b[c] = function() {
          this[h] = k;
          return a[c].apply(a, arguments)
        };
        b[h] = g
      });
      return b
    }
    function p(a) {
      if (!("defaultPrevented" in a)) {
        a.defaultPrevented = !1;
        var b = a.preventDefault;
        a.preventDefault = function() {
          this.defaultPrevented = !0;
          b.call(this)
        }
      }
    }
    var f = {},
      s = 1,
      n = {};
    n.click = n.mousedown = n.mouseup = n.mousemove = "MouseEvents";
    c.event = {
      add: b,
      remove: a
    };
    c.proxy = function(a, b) {
      if (c.isFunction(a)) {
        var g = function() {
            return a.apply(b, arguments)
          };
        g._zid = e(a);
        return g
      }
      if ("string" == typeof b) return c.proxy(a[b], a);
      throw new TypeError("expected function");
    };
    c.fn.bind = function(a, c) {
      return this.each(function() {
        b(this, a, c)
      })
    };
    c.fn.unbind = function(b, c) {
      return this.each(function() {
        a(this, b, c)
      })
    };
    c.fn.one = function(c, g) {
      return this.each(function(h, f) {
        b(this, c, g, null, function(b, c) {
          return function() {
            var g = b.apply(f, arguments);
            a(f, c, b);
            return g
          }
        })
      })
    };
    var k = function() {
        return !0
      },
      g = function() {
        return !1
      },
      h = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
      };
    c.fn.delegate = function(a, g, h) {
      var f = !1;
      if ("blur" == g || "focus" == g) c.iswebkit ? g = "blur" == g ? "focusout" : "focus" == g ? "focusin" : g : f = !0;
      return this.each(function(e, k) {
        b(k, g, h, a, function(b) {
          return function(g) {
            var h, f = c(g.target).closest(a, k).get(0);
            if (f) return h = c.extend(m(g), {
              currentTarget: f,
              liveFired: k
            }), b.apply(f, [h].concat([].slice.call(arguments, 1)))
          }
        }, f)
      })
    };
    c.fn.undelegate = function(b, c, g) {
      return this.each(function() {
        a(this, c, g, b)
      })
    };
    c.fn.live = function(a, b) {
      c(document.body).delegate(this.selector, a, b);
      return this
    };
    c.fn.die = function(a, b) {
      c(document.body).undelegate(this.selector, a, b);
      return this
    };
    c.fn.on = function(a, b, g) {
      return void 0 == b || c.isFunction(b) ? this.bind(a, b) : this.delegate(b, a, g)
    };
    c.fn.off = function(a, b, g) {
      return void 0 == b || c.isFunction(b) ? this.unbind(a, b) : this.undelegate(b, a, g)
    };
    c.fn.trigger = function(a, b) {
      "string" == typeof a && (a = c.Event(a));
      p(a);
      a.data = b;
      return this.each(function() {
        "dispatchEvent" in this && this.dispatchEvent(a)
      })
    };
    c.fn.triggerHandler = function(a, b) {
      var g, h;
      this.each(function(f, e) {
        g = m("string" == typeof a ? c.Event(a) : a);
        g.data = b;
        g.target = e;
        c.each(i(e, a.type || a), function(a, b) {
          h = b.proxy(g);
          if (g.isImmediatePropagationStopped()) return !1
        })
      });
      return h
    };
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(a) {
      c.fn[a] = function(b) {
        return this.bind(a, b)
      }
    });
    ["focus", "blur"].forEach(function(a) {
      c.fn[a] = function(b) {
        if (b) this.bind(a, b);
        else if (this.length) try {
          this.get(0)[a]()
        } catch (c) {}
        return this
      }
    });
    c.Event = function(a, b) {
      var c = document.createEvent(n[a] || "Events"),
        g = !0;
      if (b) for (var h in b)"bubbles" == h ? g = !! b[h] : c[h] = b[h];
      c.initEvent(a, g, !0, null, null, null, null, null, null, null, null, null, null, null, null);
      return c
    }
  })(q);
  (function(c) {
    function e(c) {
      var e = this.os = {},
        j = this.browser = {},
        b = c.match(/WebKit\/([\d.]+)/),
        a = c.match(/(Android)\s+([\d.]+)/),
        m = c.match(/(iPad).*OS\s([\d_]+)/),
        p = !m && c.match(/(iPhone\sOS)\s([\d_]+)/),
        f = c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        s = f && c.match(/TouchPad/),
        n = c.match(/Kindle\/([\d.]+)/),
        k = c.match(/Silk\/([\d._]+)/),
        g = c.match(/(BlackBerry).*Version\/([\d.]+)/);
      if (j.webkit = !! b) j.version = b[1];
      a && (e.android = !0, e.version = a[2]);
      p && (e.ios = e.iphone = !0, e.version = p[2].replace(/_/g, "."));
      m && (e.ios = e.ipad = !0, e.version = m[2].replace(/_/g, "."));
      f && (e.webos = !0, e.version = f[2]);
      s && (e.touchpad = !0);
      g && (e.blackberry = !0, e.version = g[2]);
      n && (e.kindle = !0, e.version = n[1]);
      k && (j.silk = !0, j.version = k[1]);
      !k && (e.android && c.match(/Kindle Fire/)) && (j.silk = !0)
    }
    e.call(c, navigator.userAgent);
    c.__detect = e
  })(q);
  var P = function() {
      function c(c) {
        return Object.prototype.toString.call(c).slice(8, -1).toLowerCase()
      }
      var e = function() {
          e.cache.hasOwnProperty(arguments[0]) || (e.cache[arguments[0]] = e.parse(arguments[0]));
          return e.format.call(null, e.cache[arguments[0]], arguments)
        };
      e.format = function(e, l) {
        var j = 1,
          b = e.length,
          a = "",
          m = [],
          p, f, s, n;
        for (p = 0; p < b; p++) if (a = c(e[p]), "string" === a) m.push(e[p]);
        else if ("array" === a) {
          s = e[p];
          if (s[2]) {
            a = l[j];
            for (f = 0; f < s[2].length; f++) {
              if (!a.hasOwnProperty(s[2][f])) throw P('[sprintf] property "%s" does not exist', s[2][f]);
              a = a[s[2][f]]
            }
          } else a = s[1] ? l[s[1]] : l[j++];
          if (/[^s]/.test(s[8]) && "number" != c(a)) throw P("[sprintf] expecting number but found %s", c(a));
          switch (s[8]) {
          case "b":
            a = a.toString(2);
            break;
          case "c":
            a = String.fromCharCode(a);
            break;
          case "d":
            a = parseInt(a, 10);
            break;
          case "e":
            a = s[7] ? a.toExponential(s[7]) : a.toExponential();
            break;
          case "f":
            a = s[7] ? parseFloat(a).toFixed(s[7]) : parseFloat(a);
            break;
          case "o":
            a = a.toString(8);
            break;
          case "s":
            a = (a = "" + a) && s[7] ? a.substring(0, s[7]) : a;
            break;
          case "u":
            a = Math.abs(a);
            break;
          case "x":
            a = a.toString(16);
            break;
          case "X":
            a = a.toString(16).toUpperCase()
          }
          a = /[def]/.test(s[8]) && s[3] && 0 <= a ? "+" + a : a;
          f = s[4] ? "0" == s[4] ? "0" : s[4].charAt(1) : " ";
          n = s[6] - ("" + a).length;
          if (s[6]) {
            for (var k = []; 0 < n; k[--n] = f);
            f = k.join("")
          } else f = "";
          m.push(s[5] ? a + f : f + a)
        }
        return m.join("")
      };
      e.cache = {};
      e.parse = function(c) {
        for (var e = [], j = [], b = 0; c;) {
          if (null !== (e = /^[^\x25]+/.exec(c))) j.push(e[0]);
          else if (null !== (e = /^\x25{2}/.exec(c))) j.push("%");
          else if (null !== (e = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(c))) {
            if (e[2]) {
              var b = b | 1,
                a = [],
                m = e[2],
                p = [];
              if (null !== (p = /^([a-z_][a-z_\d]*)/i.exec(m))) for (a.push(p[1]);
              "" !== (m = m.substring(p[0].length));) if (null !== (p = /^\.([a-z_][a-z_\d]*)/i.exec(m))) a.push(p[1]);
              else if (null !== (p = /^\[(\d+)\]/.exec(m))) a.push(p[1]);
              else throw "[sprintf] huh?";
              else throw "[sprintf] huh?";
              e[2] = a
            } else b |= 2;
            if (3 === b) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
            j.push(e)
          } else throw "[sprintf] huh?";
          c = c.substring(e[0].length)
        }
        return j
      };
      return e
    }(),
    x;
  x || (x = {});
  (function() {
    function c(a) {
      return 10 > a ? "0" + a : a
    }
    function e(a) {
      j.lastIndex = 0;
      return j.test(a) ? '"' + a.replace(j, function(a) {
        var b = m[a];
        return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + a + '"'
    }
    function i(c, m) {
      var n, k, g, h, r = b,
        t, j = m[c];
      "function" === typeof p && (j = p.call(m, c, j));
      switch (typeof j) {
      case "string":
        return e(j);
      case "number":
        return isFinite(j) ? "" + j : "null";
      case "boolean":
      case "null":
        return "" + j;
      case "object":
        if (!j) return "null";
        b += a;
        t = [];
        if ("[object Array]" === Object.prototype.toString.apply(j)) {
          h = j.length;
          for (n = 0; n < h; n += 1) t[n] = i(n, j) || "null";
          g = 0 === t.length ? "[]" : b ? "[\n" + b + t.join(",\n" + b) + "\n" + r + "]" : "[" + t.join(",") + "]";
          b = r;
          return g
        }
        if (p && "object" === typeof p) {
          h = p.length;
          for (n = 0; n < h; n += 1)"string" === typeof p[n] && (k = p[n], (g = i(k, j)) && t.push(e(k) + (b ? ": " : ":") + g))
        } else for (k in j) Object.prototype.hasOwnProperty.call(j, k) && (g = i(k, j)) && t.push(e(k) + (b ? ": " : ":") + g);
        g = 0 === t.length ? "{}" : b ? "{\n" + b + t.join(",\n" + b) + "\n" + r + "}" : "{" + t.join(",") + "}";
        b = r;
        return g
      }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
      return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
      return this.valueOf()
    });
    var l = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      b, a, m = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      },
      p;
    "function" !== typeof x.stringify && (x.stringify = function(c, e, m) {
      var k;
      a = b = "";
      if (typeof m === "number") for (k = 0; k < m; k = k + 1) a = a + " ";
      else typeof m === "string" && (a = m);
      if ((p = e) && typeof e !== "function" && (typeof e !== "object" || typeof e.length !== "number")) throw Error("JSON.stringify");
      return i("", {
        "": c
      })
    });
    "function" !== typeof x.parse && (x.parse = function(a, b) {
      function c(a, e) {
        var f, k, m = a[e];
        if (m && typeof m === "object") for (f in m) if (Object.prototype.hasOwnProperty.call(m, f)) {
          k = c(m, f);
          k !== void 0 ? m[f] = k : delete m[f]
        }
        return b.call(a, e, m)
      }
      var e, a = "" + a;
      l.lastIndex = 0;
      l.test(a) && (a = a.replace(l, function(a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
      }));
      if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
        e = eval("(" + a + ")");
        return typeof b === "function" ? c({
          "": e
        }, "") : e
      }
      throw new SyntaxError("JSON.parse");
    })
  })();
  var K = K ||
  function(c, e) {
    var i = {},
      l = i.lib = {},
      j = function() {},
      b = l.Base = {
        extend: function(a) {
          j.prototype = this;
          var b = new j;
          a && b.mixIn(a);
          b.hasOwnProperty("init") || (b.init = function() {
            b.$super.init.apply(this, arguments)
          });
          b.init.prototype = b;
          b.$super = this;
          return b
        },
        create: function() {
          var a = this.extend();
          a.init.apply(a, arguments);
          return a
        },
        init: function() {},
        mixIn: function(a) {
          for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
          a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
          return this.init.prototype.extend(this)
        }
      },
      a = l.WordArray = b.extend({
        init: function(a, b) {
          a = this.words = a || [];
          this.sigBytes = b != e ? b : 4 * a.length
        },
        toString: function(a) {
          return (a || p).stringify(this)
        },
        concat: function(a) {
          var b = this.words,
            c = a.words,
            e = this.sigBytes,
            a = a.sigBytes;
          this.clamp();
          if (e % 4) for (var f = 0; f < a; f++) b[e + f >>> 2] |= (c[f >>> 2] >>> 24 - 8 * (f % 4) & 255) << 24 - 8 * ((e + f) % 4);
          else if (65535 < c.length) for (f = 0; f < a; f += 4) b[e + f >>> 2] = c[f >>> 2];
          else b.push.apply(b, c);
          this.sigBytes += a;
          return this
        },
        clamp: function() {
          var a = this.words,
            b = this.sigBytes;
          a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4);
          a.length = c.ceil(b / 4)
        },
        clone: function() {
          var a = b.clone.call(this);
          a.words = this.words.slice(0);
          return a
        },
        random: function(b) {
          for (var e = [], f = 0; f < b; f += 4) e.push(4294967296 * c.random() | 0);
          return new a.init(e, b)
        }
      }),
      m = i.enc = {},
      p = m.Hex = {
        stringify: function(a) {
          for (var b = a.words, a = a.sigBytes, c = [], e = 0; e < a; e++) {
            var f = b[e >>> 2] >>> 24 - 8 * (e % 4) & 255;
            c.push((f >>> 4).toString(16));
            c.push((f & 15).toString(16))
          }
          return c.join("")
        },
        parse: function(b) {
          for (var c = b.length, e = [], f = 0; f < c; f += 2) e[f >>> 3] |= parseInt(b.substr(f, 2), 16) << 24 - 4 * (f % 8);
          return new a.init(e, c / 2)
        }
      },
      f = m.Latin1 = {
        stringify: function(a) {
          for (var b = a.words, a = a.sigBytes, c = [], e = 0; e < a; e++) c.push(String.fromCharCode(b[e >>> 2] >>> 24 - 8 * (e % 4) & 255));
          return c.join("")
        },
        parse: function(b) {
          for (var c = b.length, e = [], f = 0; f < c; f++) e[f >>> 2] |= (b.charCodeAt(f) & 255) << 24 - 8 * (f % 4);
          return new a.init(e, c)
        }
      },
      s = m.Utf8 = {
        stringify: function(a) {
          try {
            return decodeURIComponent(escape(f.stringify(a)))
          } catch (b) {
            throw Error("Malformed UTF-8 data");
          }
        },
        parse: function(a) {
          return f.parse(unescape(encodeURIComponent(a)))
        }
      },
      n = l.BufferedBlockAlgorithm = b.extend({
        reset: function() {
          this._data = new a.init;
          this._nDataBytes = 0
        },
        _append: function(a) {
          "string" == typeof a && (a = s.parse(a));
          this._data.concat(a);
          this._nDataBytes += a.sigBytes
        },
        _process: function(b) {
          var e = this._data,
            f = e.words,
            k = e.sigBytes,
            m = this.blockSize,
            j = k / (4 * m),
            j = b ? c.ceil(j) : c.max((j | 0) - this._minBufferSize, 0),
            b = j * m,
            k = c.min(4 * b, k);
          if (b) {
            for (var i = 0; i < b; i += m) this._doProcessBlock(f, i);
            i = f.splice(0, b);
            e.sigBytes -= k
          }
          return new a.init(i, k)
        },
        clone: function() {
          var a = b.clone.call(this);
          a._data = this._data.clone();
          return a
        },
        _minBufferSize: 0
      });
    l.Hasher = n.extend({
      cfg: b.extend(),
      init: function(a) {
        this.cfg = this.cfg.extend(a);
        this.reset()
      },
      reset: function() {
        n.reset.call(this);
        this._doReset()
      },
      update: function(a) {
        this._append(a);
        this._process();
        return this
      },
      finalize: function(a) {
        a && this._append(a);
        return this._doFinalize()
      },
      blockSize: 16,
      _createHelper: function(a) {
        return function(b, c) {
          return (new a.init(c)).finalize(b)
        }
      },
      _createHmacHelper: function(a) {
        return function(b, c) {
          return (new k.HMAC.init(a, c)).finalize(b)
        }
      }
    });
    var k = i.algo = {};
    return i
  }(Math);
  (function() {
    var c = K,
      e = c.lib,
      i = e.WordArray,
      l = e.Hasher,
      j = [],
      e = c.algo.SHA1 = l.extend({
        _doReset: function() {
          this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(b, a) {
          for (var c = this._hash.words, e = c[0], f = c[1], i = c[2], n = c[3], k = c[4], g = 0; 80 > g; g++) {
            if (16 > g) j[g] = b[a + g] | 0;
            else {
              var h = j[g - 3] ^ j[g - 8] ^ j[g - 14] ^ j[g - 16];
              j[g] = h << 1 | h >>> 31
            }
            h = (e << 5 | e >>> 27) + k + j[g];
            h = 20 > g ? h + ((f & i | ~f & n) + 1518500249) : 40 > g ? h + ((f ^ i ^ n) + 1859775393) : 60 > g ? h + ((f & i | f & n | i & n) - 1894007588) : h + ((f ^ i ^ n) - 899497514);
            k = n;
            n = i;
            i = f << 30 | f >>> 2;
            f = e;
            e = h
          }
          c[0] = c[0] + e | 0;
          c[1] = c[1] + f | 0;
          c[2] = c[2] + i | 0;
          c[3] = c[3] + n | 0;
          c[4] = c[4] + k | 0
        },
        _doFinalize: function() {
          var b = this._data,
            a = b.words,
            c = 8 * this._nDataBytes,
            e = 8 * b.sigBytes;
          a[e >>> 5] |= 128 << 24 - e % 32;
          a[(e + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296);
          a[(e + 64 >>> 9 << 4) + 15] = c;
          b.sigBytes = 4 * a.length;
          this._process();
          return this._hash
        },
        clone: function() {
          var b = l.clone.call(this);
          b._hash = this._hash.clone();
          return b
        }
      });
    c.SHA1 = l._createHelper(e);
    c.HmacSHA1 = l._createHmacHelper(e)
  })();
  var L = [],
    fa = 1E3,
    C = {},
    H = {},
    v = {},
    T = "__msg_type",
    F = "__callback_id",
    D = "__event_id",
    ga = "weixin://dispatch_message/",
    V = [],
    G = {},
    U = "__runOn3rd_apis",
    M = "xx_yy",
    ba = "__json_message",
    $ = "__msg_queue",
    X = "__context_key",
    W = "",
    N = "isUseMd5_check",
    R = "__sha_key",
    aa = S,
    Z = Q,
    da = WX_LOG,
    ca = E,
    ha = Y,
    ea = o,
    ma = window.alert;
  window.alert = function(c) {
    "yes" !== document.__wxjsjs__isWebviewWillClosed && ma(c)
  };
  var na = window.prompt;
  window.prompt = function(c, e) {
    "yes" !== document.__wxjsjs__isWebviewWillClosed && na(c, e)
  };
  var wx_bridge = {
    invoke: o,
    call: o,
    on: Y,
    env: E,
    log: WX_LOG,
    _fetchQueue: Q,
    _handleMessageFromWeixin: S
  };
  window.WeixinJSBridge ? q.extend(window.WeixinJSBridge, wx_bridge) : window.WeixinJSBridge = wx_bridge;
  (function() {
    function c(b, a) {
      for (var c = document.elementFromPoint(b, a), e = c; e && "IMG" != e.tagName;) e = e.parentNode;
      if (!e) var f = function(a, b) {
          for (var c in a.childNodes) {
            if (b(c)) return c;
            f(c, b)
          }
          return null
        },
        e = f(c, function(a) {
          return a && "IMG" == a.tagName
        });
      return e && "IMG" == e.tagName ? e : null
    }
    function e(b) {
      var a = b.offsetTop;
      null != b.offsetParent && (a += e(b.offsetParent));
      return a
    }
    function i(b) {
      var a = b.offsetLeft;
      null != b.offsetParent && (a += i(b.offsetParent));
      return a
    }
    A("menu:setfont", function(b) {
      if ("function" === typeof changefont) {
        var a = parseInt(b.fontSize);
        changefont(a)
      } else if (!b.isFirstAutoSet || !("2" === b.fontSize || "100" === b.fontScale)) if (a = E("system"), !("string" === typeof a && 0 <= a.indexOf("iPhone OS") && 4 >= Number(a.substr(a.indexOf(".") - 1, 1)))) {
        a = parseInt(b.fontScale);
        if (50 <= a && 500 >= a) b = b.fontScale + "%";
        else switch (b.fontSize) {
        case "1":
          b = "80%";
          break;
        case "2":
          b = "100%";
          break;
        case "3":
          b = "120%";
          break;
        case "4":
          b = "140%";
          break;
        default:
          return
        }
        document.getElementsByTagName("body")[0].style.webkitTextSizeAdjust = b
      }
    });
    var l = function(b) {
        var a = !1,
          c = function(c) {
            a || (a = !0, b(c))
          },
          e = q("img");
        if (0 == e.length) return c();
        for (var f = {}, i = [], j = 0; j < e.length; j++) {
          var k = e[j];
          if (!("none" == q(k).css("display") || "hidden" == q(k).css("visibility")) && !f[k.src]) f[k.src] = 1, i.push(k)
        }
        for (var g = [], j = 0; j < i.length && 100 > j; j++) e = i[j], f = new Image, f.onload = function() {
          this.isLoaded = !0;
          for (var a = 0, b = 0; b < g.length; b++) {
            var e = g[b];
            if (!e.isLoaded) break;
            a++;
            if (290 < e.width && 290 < e.height) {
              c(e);
              break
            }
          }
          a == g.length && c()
        }, f.src = e.src, g.push(f);
        setTimeout(function() {
          for (var a = 0; a < g.length; a++) {
            var b = g[a];
            if (b.isLoaded && 290 < b.width && 290 < b.height) {
              c(b);
              return
            }
          }
          c()
        }, 1E3)
      };
    A("menu:share:timeline", function(b) {
      WX_LOG("share timeline");
      var a;
      "string" === typeof b.title ? (a = b, o("shareTimeline", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("shareTimeline", a)
      }))
    });
    A("menu:share:qq", function(b) {
      WX_LOG("share QQ");
      var a;
      "string" === typeof b.title ? (a = b, o("shareQQ", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("shareQQ", a)
      }))
    });
    A("menu:share:weiboApp", function(b) {
      WX_LOG("share Weibo App");
      var a;
      "string" === typeof b.title ? (a = b, o("shareWeiboApp", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("shareWeiboApp", a)
      }))
    });
    var j = function(b) {
        WX_LOG("share weibo");
        var a;
        a = "string" === typeof b.content ? b : {
          content: document.title,
          type: "link",
          title: document.title,
          link: document.documentURI || v.short_url || v.init_url
        };
        l(function(b) {
          b && (a.img_url = b.src);
          o("shareWeibo", a)
        })
      };
    A("menu:share:weibo", j);
    A("menu:share:QZone", function(b) {
      WX_LOG("share QZone");
      var a;
      "string" === typeof b.title ? (a = b, o("shareQZone", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("shareQZone", a)
      }))
    });
    A("general:share", function(b) {
      WX_LOG("general share");
      var a = function(a, c) {
          "weibo" === b.shareTo && o("shareWeibo", a, function(a) {
            a.err_msg = "share_weibo:ok" === a.err_msg ? "general_share:ok" : "share_weibo:cancel" === a.err_msg ? "general_share:cancel" : "general_share:fail";
            c(a)
          });
          if ("friend" === b.shareTo || "favorite" === b.shareTo || "connector" === b.shareTo) {
            a.img_width = 0;
            a.img_height = 0;
            var e = function(a) {
                a.err_msg = "send_app_msg:confirm" === a.err_msg ? "general_share:ok" : "send_app_msg:cancel" === a.err_msg ? "general_share:cancel" : "general_share:fail";
                c(a)
              };
            a.img_url ? I(a.img_url, function(b) {
              a.img_width = b.width;
              a.img_height = b.height;
              o("sendAppMessage", a, e)
            }) : o("sendAppMessage", a, e)
          }
          "timeline" === b.shareTo && (e = function(a) {
            a.err_msg = "share_timeline:ok" === a.err_msg ? "general_share:ok" : "share_timeline:cancel" === a.err_msg ? "general_share:cancel" : "general_share:fail";
            c(a)
          }, a.img_width = 0, a.img_height = 0, a.img_url ? I(a.img_url, function(b) {
            a.img_width = b.width;
            a.img_height = b.height;
            o("shareTimeline", a, e)
          }) : o("shareTimeline", a, e));
          "QQ" === b.shareTo && (e = function(a) {
            a.err_msg = a.err_msg === "share_qq:ok" ? "general_share:ok" : a.err_msg === "share_qq:cancel" ? "general_share:cancel" : "general_share:fail";
            c(a)
          }, a.img_width = 0, a.img_height = 0, a.img_url ? I(a.img_url, function(b) {
            a.img_width = b.width;
            a.img_height = b.height;
            o("shareQQ", a, e)
          }) : o("shareQQ", a, e));
          "weiboApp" === b.shareTo && (e = function(a) {
            a.err_msg = a.err_msg === "share_weiboApp:ok" ? "general_share:ok" : a.err_msg === "share_weiboApp:cancel" ? "general_share:cancel" : "general_share:fail";
            c(a)
          }, a.img_width = 0, a.img_height = 0, a.img_url ? I(a.img_url, function(b) {
            a.img_width = b.width;
            a.img_height = b.height;
            o("shareWeiboApp", a, e)
          }) : o("shareWeiboApp", a, e));
          "QZone" === b.shareTo && (e = function(a) {
            a.err_msg = a.err_msg === "share_QZone:ok" ? "general_share:ok" : a.err_msg === "share_QZone:cancel" ? "general_share:cancel" : "general_share:fail";
            c(a)
          }, a.img_width = 0, a.img_height = 0, a.img_url ? I(a.img_url, function(b) {
            a.img_width = b.width;
            a.img_height = b.height;
            o("shareQZone", a, e)
          }) : o("shareQZone", a, e))
        },
        c = function() {
          WX_LOG("general share failed. fallback to original share" + b.shareTo);
          "weibo" === b.shareTo && y("menu:share:weibo", b);
          ("friend" === b.shareTo || "favorite" === b.shareTo || "connector" === b.shareTo) && y("menu:share:appmessage", b);
          "timeline" === b.shareTo && y("menu:share:timeline", b)
        },
        e = G["menu:general:share"];
      "function" === typeof e && O("menu:general:share") ? (b.generalShare = a, e(b)) : "weibo" === b.shareTo && H["menu:share:weibo"] != j ? y("menu:share:weibo", b) : "friend" === b.shareTo || "favorite" === b.shareTo || "connector" === b.shareTo ? y("menu:share:appmessage", b) : "timeline" === b.shareTo ? y("menu:share:timeline", b) : "QQ" == b.shareTo ? y("menu:share:qq", b) : "weiboApp" == b.shareTo ? y("menu:share:weiboApp", b) : "QZone" == b.shareTo ? y("menu:share:QZone", b) : (a = {
        $: q,
        fail: c,
        success: a
      }, WX_LOG("try default share handler"), y("__internal:get_share_object", a))
    });
    A("menu:share:appmessage", function(b) {
      WX_LOG("share appmessage");
      var a;
      "string" === typeof b.title ? (a = b, o("sendAppMessage", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("sendAppMessage", a)
      }))
    });
    A("menu:share:email", function(b) {
      WX_LOG("share email");
      o("sendEmail", "string" === typeof b.title ? b : {
        content: document.documentURI || v.init_url,
        title: document.title
      })
    });
    A("menu:share:facebook", function(b) {
      WX_LOG("share facebook");
      var a;
      "string" === typeof b.title ? (a = b, o("shareFB", a)) : (a = {
        link: document.documentURI || v.init_url,
        desc: document.documentURI || v.init_url,
        title: document.title
      }, l(function(b) {
        b && (a.img_url = b.src, a.img_width = b.width, a.img_height = b.height);
        o("shareFB", a)
      }))
    });
    A("ui:longpress", function(b) {
      WX_LOG("longpress at (" + b.x + "," + b.y + ")");
      var a = c(b.x, b.y);
      a ? ia(a, function(a, b, c) {
        o("saveImage", {
          base64DataString: a,
          url: b.src,
          elementWidth: c.width,
          elementHeight: c.height,
          elementTop: e(c),
          elementLeft: i(c)
        })
      }) : WX_LOG("cannot find image at (" + b.x + "," + b.y + ")")
    });
    A("sys:init", function(b) {
      v = b;
      b = document.createEvent("Events");
      b.initEvent("WeixinJSBridgeReady");
      document.dispatchEvent(b)
    });
    A("sys:bridged", function() {
      "1" === E("webview_type") && y("menu:setfont", {
        fontSize: E("init_font_size"),
        isFirstAutoSet: 1
      });
      try {
        WX_VIEWIMAGE(), WX_READER_SHARE(), WX_PLAY_AUDIO()
      } catch (b) {
        WX_LOG("error %s", b)
      }
    })
  })();
  q.JSON = x;
  q.disableImageSelection = function() {
    for (var c = q("img"), e = 0; e < c.length; e++) q(c[e])._wxjs_old_touch_callout = q(c[e]).css("-webkit-touch-callout"), q(c[e])._wxjs_old_user_select = q(c[e]).css("-webkit-user-select");
    q("img").css({
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none"
    })
  };
  q.restoreImageSelection = function() {
    for (var c = q("img"), e = 0; e < c.length; e++)"undefined" != typeof q(c[e])._wxjs_old_touch_callout && q(c[e]).css({
      "-webkit-touch-callout": q(c[e])._wxjs_old_touch_callout,
      "-webkit-user-select": q(c[e])._wxjs_old_user_select
    })
  };
  q.disableAlertView = function() {
    window.__wxjs_sys_alert = window.alert;
    window.alert = null;
    window.__wxjs_sys_prompt = window.prompt;
    window.prompt = null
  };
  q.restoreAlertView = function() {
    window.alert = window.__wxjs_sys_alert;
    window.prompt = window.__wxjs_sys_prompt;
    delete window.__wxjs_sys_alert;
    delete window.__wxjs_sys_prompt
  }
})();
