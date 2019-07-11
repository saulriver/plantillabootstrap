(function() {
    "use strict";

    var treeviewMenu = $('.app-menu');

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function(event) {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
    });

    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function(event) {
        event.preventDefault();
        if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
    });

    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

    //Activate bootstrip tooltips
    $("[data-toggle='tooltip']").tooltip();

})();

//new js

//cambio de letra y aumento
$(document).ready(function() {

    // Donde queremos cambiar el tamaño de la fuente
    var donde = $('.bs-component');
    var sizeFuenteOriginal = donde.css('font-size');

    // Resetear Font Size
    $(".resetearFont").click(function() {
        donde.css('font-size', sizeFuenteOriginal);
    });

    // Aumentar Font Size
    $(".aumentarFont").click(function() {

        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum = 24;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

    // Disminuir Font Size
    $(".disminuirFont").click(function() {
        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum * 0.8;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

});

//cambiar tipo fuente

$(document).ready(function() {
    $("#cambiar").click(function() {
        $(".section").css({ 'font-family': 'Open Sans' });
    });
    $("#cambiar1").click(function() {
        $(".section").css({ 'font-family': 'Montserrat' });
    });
    $("#cambiar2").click(function() {
        $(".section").css({ 'font-family': 'Ubuntu Condensed' });
    });
});

//cambio de color

$(document).ready(function() {
    $("#color").click(function() {
        $(".container-fluid").css({ 'background-color': 'rgb(189, 202, 219)' });
    });
    $("#color1").click(function() {
        $(".body").css({ 'font-family': 'Montserrat' });
    });
    $("#color2").click(function() {
        $(".body").css({ 'font-family': 'Ubuntu Condensed' });
    });
});


//para cambiar el tema color de la pagina

function cambia(boton) {

    var color = boton.name;
    document.getElementById("prueba").style.background = color;

    var color = boton.name;
    document.getElementById("prueba2").style.background = color;

    var color = boton.name;
    document.getElementById("prueba3").style.background = color;
}

//paginacion para las vistas

function handlePagination(e) {
    if (isModifiedEvent(e) || !isLeftClickEvent(e)) {
        return
    }
    e.stopPropagation();
    e.preventDefault();
    var url = $(this).attr("href ");
    if (url) handleNavigation(url, true)
}

function cargar_pagina() { alert("Bienvenidos!"); }

(function(a) {
    r.event.simulate(b, a.target, r.event.fix(a))
});
(function(b) {
    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
});
(function(a) {
    r.event.simulate(b, a.target, r.event.fix(a))
});
(function(b) {
    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
});
(function() {
    return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
});
(function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        each(Chart.instances, function(instance) {
            // If the responsive flag is set in the chart instance config
            // Cascade the resize event down to the chart.
            if (instance.options.responsive) {
                instance.resize(instance.render, true);
            }
        });
    }, 50);
});

//buscador de palabras en el html

//buscador de vistas en el menu //

// EL CODIGO TRABAJADO SE ENCUENTRA DESDE LA LINE 171 

/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.0",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() { return f.call(this) },
        get: function(a) { return null != a ? a < 0 ? this[a + this.length] : this[a] : f.call(this) },
        pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b },
        each: function(a) { return r.each(this, a) },
        map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(f.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === r.type(a) },
        isArray: Array.isArray,
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) },
        isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a },
        globalEval: function(a) { p(a) },
        camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(s, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 }, { dir: "parentNode", next: "legend" });
        try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) {
            G = {
                apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a) } }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return X.test(a.nodeName) },
                input: function(a) { return W.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: pa(function() { return [0] }),
                last: pa(function(a, b) { return [b - 1] }),
                eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }),
                even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
                odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
                lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e)
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 }
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = V.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return r.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);
            b = r.filter(b, a)
        }
        return r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })
    }
    r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) { return this.pushStack(D(this, a || [], !1)) },
        not: function(a) { return this.pushStack(D(this, a || [], !0)) },
        is: function(a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return J(a, "nextSibling") }, prev: function(a) { return J(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return a.contentDocument || r.merge([], a.childNodes) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e) } });
    var K = /\S+/g;

    function L(a) { var b = {}; return r.each(a.match(K) || [], function(a, c) { b[c] = !0 }), b }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    };

    function M(a) { return a }

    function N(a) { throw a }

    function O(a, b, c) { var d; try { a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() { return d },
                    always: function() { return f.done(arguments).fail(arguments), this },
                    "catch": function(a) { return e.then(null, a) },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)) }).promise()
                    },
                    promise: function(a) { return null != a ? r.extend(a, e) : e }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var Q = r.Deferred();
    r.fn.ready = function(a) { return Q.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? r.readyWait++ : r.ready(!0) },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() { d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready() }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) { e = !0; for (h in c) S(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0,
                    r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function U() { this.expando = r.expando + U.uid++ }
    U.uid = 1, U.prototype = {
        cache: function(a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] },
        access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } },
        hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c) } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({ hasData: function(a) { return W.hasData(a) || V.hasData(a) }, data: function(a, b, c) { return W.access(a, b, c) }, removeData: function(a, b) { W.remove(a, b) }, _data: function(a, b, c) { return V.access(a, b, c) }, _removeData: function(a, b) { V.remove(a, b) } }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { W.set(this, a) }) : S(this, function(b) { var c; if (f && void 0 === b) { if (c = W.get(f, a), void 0 !== c) return c; if (c = Z(f, a), void 0 !== c) return c } else this.each(function() { W.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { W.remove(this, a) }) }
    }), r.extend({
        queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [] },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function() { V.remove(a, [b + "queue", c]) }) }) }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        ca = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function da(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ea = {};

    function fa(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e)
    }

    function ga(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }
    r.fn.extend({ show: function() { return ga(this, !0) }, hide: function() { return ga(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { ba(this) ? r(this).show() : r(this).hide() }) } });
    var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;

    function la(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c }

    function ma(a, b) { for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")) }
    var na = /<|&#?\w+;/;

    function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (na.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) { k = 0; while (f = g[k++]) ja.test(f.type || "") && c.push(f) }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;

    function ta() { return !0 }

    function ua() { return !1 }

    function va() { try { return d.activeElement } catch (a) {} }

    function wa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) wa(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(K) || [""], j = b.length; while (j--) h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) },
        fix: function(a) { return a[r.expando] ? a : new r.Event(a) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== va() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === va() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) { return r.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: ua,
        isPropagationStopped: ua,
        isImmediatePropagationStopped: ua,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({ on: function(a, b, c, d) { return wa(this, a, b, c, d) }, one: function(a, b, c, d) { return wa(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ca(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a }

    function Da(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Ea(a) { var b = Aa.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Fa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ga(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ha(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; l < i; l++) j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k))
        }
        return a
    }

    function Ia(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d)); return a }
    r.extend({
        htmlPrefilter: function(a) { return a.replace(xa, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = la(h), f = la(a), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || la(a), g = g || la(h), d = 0, e = f.length; d < e; d++) Fa(f[d], g[d]);
                else Fa(a, h);
            return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) { return Ia(this, a, !0) },
        remove: function(a) { return Ia(this, a) },
        text: function(a) { return S(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } }))
    }();

    function Ma(a, b, c) { var d, e, f, g, h = a.style; return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Na(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;

    function Ta(a) {
        if (a in Sa) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;
        while (c--)
            if (a = Ra[c] + b, a in Sa) return a
    }

    function Ua(a, b, c) { var d = _.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Va(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e))); return g }

    function Wa(a, b, c) {
        var d, e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Ma(a, b, f), (d < 0 || null == d) && (d = a.style[b]), Ka.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Ma(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) { if (c) return !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function() { return Wa(a, b, d) }) },
            set: function(a, c, d) {
                var e, f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + aa[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua) }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) { for (d = La(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Xa(a, b, c, d, e) { return new Xa.prototype.init(a, b, c, d, e) }
    r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = Xa.propHooks[this.prop]; return a && a.get ? a.get(this) : Xa.propHooks._default.get(this) }, run: function(a) { var b, c = Xa.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;

    function ab() { Za && (a.requestAnimationFrame(ab), r.fx.tick()) }

    function bb() { return a.setTimeout(function() { Ya = void 0 }), Ya = r.now() }

    function cb(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = aa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function eb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) }));
        for (d in b)
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function() { p || ga([a]), V.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) }
    }

    function fb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function gb(a, b, c) {
        var d, e, f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || bb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (fb(k, j.opts.specialEasing); f < g; f++)
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(gb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return da(c.elem, a, _.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b) }, prefilters: [eb], prefilter: function(a, b) { b ? gb.prefilters.unshift(a) : gb.prefilters.push(a) } }), r.speed = function(a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue) }, e }, r.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = gb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && _a.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e) }
        }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Ya = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Ya = void 0
        }, r.fx.timer = function(a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop() }, r.fx.interval = 13, r.fx.start = function() { Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval)) }, r.fx.stop = function() { a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var hb, ib = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return S(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d)) },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), hb = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ib[b] || r.find.attr;
        ib[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e }
    });
    var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return S(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });
    var lb = /[\t\r\n\f]/g;

    function mb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, mb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = r.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, mb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = r.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, mb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(K) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : r.trim(r.text(a)).replace(ob, " ") } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(ub, "\r\n") } }) : { name: b.name, value: c.replace(ub, "\r\n") } }).get() } });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a) },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) { h = {}; while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return k ? g : null },
                    setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this },
                    overrideMimeType: function(a) { return null == k && (o.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout));
                try { k = !1, e.send(v, A) } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) { return r.get(a, b, c, "json") },
        getScript: function(a, b) { return r.get(a, void 0, b, "script") }
    }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({
        wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this }
    }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i }
            },
            abort: function() { c && c() }
        }
    }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length };

    function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || pa }) }
    }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return S(this, function(a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
    }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Na(o.pixelPosition, function(a, c) { if (c) return c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r }, b || (a.jQuery = a.$ = r), r
});



(function(Fa, T, k) {
    var S = function(h) {
        function X(a) {
            var b, c, d = {};
            h.each(a, function(e) { if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && X(a[e]) });
            a._hungarianMap = d
        }

        function I(a, b, c) {
            a._hungarianMap || X(a);
            var d;
            h.each(b, function(e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e] })
        }

        function S(a) {
            var b = m.defaults.oLanguage,
                c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && cb(a)
        }

        function db(a) {
            A(a, "ordering", "bSort");
            A(a, "orderMulti", "bSortMulti");
            A(a, "orderClasses", "bSortClasses");
            A(a, "orderCellsTop", "bSortCellsTop");
            A(a, "order", "aaSorting");
            A(a, "orderFixed", "aaSortingFixed");
            A(a, "paging", "bPaginate");
            A(a, "pagingType", "sPaginationType");
            A(a, "pageLength", "iDisplayLength");
            A(a, "searching", "bFilter");
            "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
            if (a = a.aoSearchCols)
                for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b])
        }

        function eb(a) {
            A(a, "orderable", "bSortable");
            A(a, "orderData", "aDataSort");
            A(a, "orderSequence", "asSorting");
            A(a, "orderDataType", "sortDataType");
            var b = a.aDataSort;
            b && !h.isArray(b) && (a.aDataSort = [b])
        }

        function fb(a) {
            if (!m.__browser) {
                var b = {};
                m.__browser = b;
                var c =
                    h("<div/>").css({ position: "fixed", top: 0, left: 0, height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({ position: "absolute", top: 1, left: 1, width: 100, overflow: "scroll" }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"),
                    d = c.children(),
                    e = d.children();
                b.barWidth = d[0].offsetWidth - d[0].clientWidth;
                b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
                b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
                b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
                c.remove()
            }
            h.extend(a.oBrowser,
                m.__browser);
            a.oScroll.iBarWidth = m.__browser.barWidth
        }

        function gb(a, b, c, d, e, f) {
            var g, i = !1;
            c !== k && (g = c, i = !0);
            for (; d !== e;) a.hasOwnProperty(d) && (g = i ? b(g, a[d], d, a) : a[d], i = !0, d += f);
            return g
        }

        function Ga(a, b) {
            var c = m.defaults.column,
                d = a.aoColumns.length,
                c = h.extend({}, m.models.oColumn, c, { nTh: b ? b : T.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d });
            a.aoColumns.push(c);
            c = a.aoPreSearchCols;
            c[d] = h.extend({}, m.models.oSearch, c[d]);
            la(a, d, h(b).data())
        }

        function la(a, b, c) {
            var b = a.aoColumns[b],
                d = a.oClasses,
                e = h(b.nTh);
            if (!b.sWidthOrig) {
                b.sWidthOrig = e.attr("width") || null;
                var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1])
            }
            c !== k && null !== c && (eb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
            var g = b.mData,
                i = P(g),
                j = b.mRender ? P(b.mRender) : null,
                c = function(a) { return "string" === typeof a && -1 !== a.indexOf("@") };
            b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
            b.fnGetData = function(a, b, c) { var d = i(a, b, k, c); return j && b ? j(d, b, a, c) : d };
            b.fnSetData = function(a, b, c) { return Q(g)(a, b, c) };
            "number" !== typeof g && (a._rowReadObject = !0);
            a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
            a = -1 !== h.inArray("asc", b.asSorting);
            c = -1 !== h.inArray("desc", b.asSorting);
            !b.bSortable || !a && !c ?
                (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
        }

        function Y(a) {
            if (!1 !== a.oFeatures.bAutoWidth) {
                var b = a.aoColumns;
                Ha(a);
                for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
            }
            b = a.oScroll;
            ("" !== b.sY || "" !== b.sX) && Z(a);
            w(a, null, "column-sizing", [a])
        }

        function $(a, b) {
            var c =
                aa(a, "bVisible");
            return "number" === typeof c[b] ? c[b] : null
        }

        function ba(a, b) {
            var c = aa(a, "bVisible"),
                c = h.inArray(b, c);
            return -1 !== c ? c : null
        }

        function ca(a) { return aa(a, "bVisible").length }

        function aa(a, b) {
            var c = [];
            h.map(a.aoColumns, function(a, e) { a[b] && c.push(e) });
            return c
        }

        function Ia(a) {
            var b = a.aoColumns,
                c = a.aoData,
                d = m.ext.type.detect,
                e, f, g, i, j, h, l, r, q;
            e = 0;
            for (f = b.length; e < f; e++)
                if (l = b[e], q = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                g = 0;
                for (i = d.length; g < i; g++) {
                    j = 0;
                    for (h = c.length; j <
                        h; j++) {
                        q[j] === k && (q[j] = B(a, j, e, "type"));
                        r = d[g](q[j], a);
                        if (!r && g !== d.length - 1) break;
                        if ("html" === r) break
                    }
                    if (r) { l.sType = r; break }
                }
                l.sType || (l.sType = "string")
            }
        }

        function hb(a, b, c, d) {
            var e, f, g, i, j, n, l = a.aoColumns;
            if (b)
                for (e = b.length - 1; 0 <= e; e--) {
                    n = b[e];
                    var r = n.targets !== k ? n.targets : n.aTargets;
                    h.isArray(r) || (r = [r]);
                    f = 0;
                    for (g = r.length; f < g; f++)
                        if ("number" === typeof r[f] && 0 <= r[f]) {
                            for (; l.length <= r[f];) Ga(a);
                            d(r[f], n)
                        } else if ("number" === typeof r[f] && 0 > r[f]) d(l.length + r[f], n);
                    else if ("string" === typeof r[f]) {
                        i = 0;
                        for (j = l.length; i < j; i++)("_all" == r[f] || h(l[i].nTh).hasClass(r[f])) && d(i, n)
                    }
                }
            if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
        }

        function L(a, b, c, d) {
            var e = a.aoData.length,
                f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e });
            f._aData = b;
            a.aoData.push(f);
            for (var g = a.aoColumns, i = 0, j = g.length; i < j; i++) g[i].sType = null;
            a.aiDisplayMaster.push(e);
            b = a.rowIdFn(b);
            b !== k && (a.aIds[b] = f);
            (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
            return e
        }

        function ma(a, b) {
            var c;
            b instanceof h || (b = h(b));
            return b.map(function(b, e) {
                c =
                    Ka(a, e);
                return L(a, c.data, e, c.cells)
            })
        }

        function B(a, b, c, d) {
            var e = a.iDraw,
                f = a.aoColumns[c],
                g = a.aoData[b]._aData,
                i = f.sDefaultContent,
                c = f.fnGetData(g, d, { settings: a, row: b, col: c });
            if (c === k) return a.iDrawError != e && null === i && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), i;
            if ((c === g || null === c) && null !== i) c = i;
            else if ("function" === typeof c) return c.call(g);
            return null === c && "display" == d ? "" : c
        }

        function ib(a, b, c, d) {
            a.aoColumns[c].fnSetData(a.aoData[b]._aData,
                d, { settings: a, row: b, col: c })
        }

        function La(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) { return a.replace(/\\./g, ".") }) }

        function P(a) {
            if (h.isPlainObject(a)) {
                var b = {};
                h.each(a, function(a, c) { c && (b[a] = P(c)) });
                return function(a, c, f, g) { var i = b[c] || b._; return i !== k ? i(a, c, f, g) : a }
            }
            if (null === a) return function(a) { return a };
            if ("function" === typeof a) return function(b, c, f, g) { return a(b, c, f, g) };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function(a, b,
                    f) {
                    var g, i;
                    if ("" !== f) {
                        i = La(f);
                        for (var j = 0, n = i.length; j < n; j++) {
                            f = i[j].match(da);
                            g = i[j].match(U);
                            if (f) {
                                i[j] = i[j].replace(da, "");
                                "" !== i[j] && (a = a[i[j]]);
                                g = [];
                                i.splice(0, j + 1);
                                i = i.join(".");
                                if (h.isArray(a)) { j = 0; for (n = a.length; j < n; j++) g.push(c(a[j], b, i)) }
                                a = f[0].substring(1, f[0].length - 1);
                                a = "" === a ? g : g.join(a);
                                break
                            } else if (g) {
                                i[j] = i[j].replace(U, "");
                                a = a[i[j]]();
                                continue
                            }
                            if (null === a || a[i[j]] === k) return k;
                            a = a[i[j]]
                        }
                    }
                    return a
                };
                return function(b, e) { return c(b, e, a) }
            }
            return function(b) { return b[a] }
        }

        function Q(a) {
            if (h.isPlainObject(a)) return Q(a._);
            if (null === a) return function() {};
            if ("function" === typeof a) return function(b, d, e) { a(b, "set", d, e) };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var b = function(a, d, e) {
                    var e = La(e),
                        f;
                    f = e[e.length - 1];
                    for (var g, i, j = 0, n = e.length - 1; j < n; j++) {
                        g = e[j].match(da);
                        i = e[j].match(U);
                        if (g) {
                            e[j] = e[j].replace(da, "");
                            a[e[j]] = [];
                            f = e.slice();
                            f.splice(0, j + 1);
                            g = f.join(".");
                            if (h.isArray(d)) { i = 0; for (n = d.length; i < n; i++) f = {}, b(f, d[i], g), a[e[j]].push(f) } else a[e[j]] = d;
                            return
                        }
                        i && (e[j] = e[j].replace(U,
                            ""), a = a[e[j]](d));
                        if (null === a[e[j]] || a[e[j]] === k) a[e[j]] = {};
                        a = a[e[j]]
                    }
                    if (f.match(U)) a[f.replace(U, "")](d);
                    else a[f.replace(da, "")] = d
                };
                return function(c, d) { return b(c, d, a) }
            }
            return function(b, d) { b[a] = d }
        }

        function Ma(a) { return D(a.aoData, "_aData") }

        function na(a) {
            a.aoData.length = 0;
            a.aiDisplayMaster.length = 0;
            a.aiDisplay.length = 0;
            a.aIds = {}
        }

        function oa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1) }

        function ea(a, b, c, d) {
            var e = a.aoData[b],
                f, g = function(c, d) {
                    for (; c.childNodes.length;) c.removeChild(c.firstChild);
                    c.innerHTML = B(a, b, d, "display")
                };
            if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
            else {
                var i = e.anCells;
                if (i)
                    if (d !== k) g(i[d], d);
                    else { c = 0; for (f = i.length; c < f; c++) g(i[c], c) }
            }
            e._aSortData = null;
            e._aFilterData = null;
            g = a.aoColumns;
            if (d !== k) g[d].sType = null;
            else {
                c = 0;
                for (f = g.length; c < f; c++) g[c].sType = null;
                Na(a, e)
            }
        }

        function Ka(a, b, c, d) {
            var e = [],
                f = b.firstChild,
                g, i, j = 0,
                n, l = a.aoColumns,
                r = a._rowReadObject,
                d = d !== k ? d : r ? {} : [],
                q = function(a, b) {
                    if ("string" === typeof a) {
                        var c = a.indexOf("@"); -
                        1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)))
                    }
                },
                jb = function(a) {
                    if (c === k || c === j) i = l[j], n = h.trim(a.innerHTML), i && i._bAttrSrc ? (Q(i.mData._)(d, n), q(i.mData.sort, a), q(i.mData.type, a), q(i.mData.filter, a)) : r ? (i._setter || (i._setter = Q(i.mData)), i._setter(d, n)) : d[j] = n;
                    j++
                };
            if (f)
                for (; f;) {
                    g = f.nodeName.toUpperCase();
                    if ("TD" == g || "TH" == g) jb(f), e.push(f);
                    f = f.nextSibling
                } else {
                    e = b.anCells;
                    g = 0;
                    for (var o = e.length; g < o; g++) jb(e[g])
                }
            if (b = f ? b : b.nTr)(b = b.getAttribute("id")) && Q(a.rowId)(d, b);
            return { data: d, cells: e }
        }

        function Ja(a, b, c, d) {
            var e = a.aoData[b],
                f = e._aData,
                g = [],
                i, j, h, l, r;
            if (null === e.nTr) {
                i = c || T.createElement("tr");
                e.nTr = i;
                e.anCells = g;
                i._DT_RowIndex = b;
                Na(a, e);
                l = 0;
                for (r = a.aoColumns.length; l < r; l++) {
                    h = a.aoColumns[l];
                    j = c ? d[l] : T.createElement(h.sCellType);
                    g.push(j);
                    if (!c || h.mRender || h.mData !== l) j.innerHTML = B(a, b, l, "display");
                    h.sClass && (j.className += " " + h.sClass);
                    h.bVisible && !c ? i.appendChild(j) : !h.bVisible && c && j.parentNode.removeChild(j);
                    h.fnCreatedCell && h.fnCreatedCell.call(a.oInstance, j, B(a, b, l), f, b, l)
                }
                w(a,
                    "aoRowCreatedCallback", null, [i, f, b])
            }
            e.nTr.setAttribute("role", "row")
        }

        function Na(a, b) {
            var c = b.nTr,
                d = b._aData;
            if (c) {
                var e = a.rowIdFn(d);
                e && (c.id = e);
                d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? pa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
                d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
                d.DT_RowData && h(c).data(d.DT_RowData)
            }
        }

        function kb(a) {
            var b, c, d, e, f, g = a.nTHead,
                i = a.nTFoot,
                j = 0 === h("th, td", g).length,
                n = a.oClasses,
                l = a.aoColumns;
            j && (e = h("<tr/>").appendTo(g));
            b = 0;
            for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), j && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n);
            j && fa(a.aoHeader, g);
            h(g).find(">tr").attr("role", "row");
            h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
            h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);
            if (null !== i) {
                a = a.aoFooter[0];
                b = 0;
                for (c = a.length; b <
                    c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
            }
        }

        function ga(a, b, c) {
            var d, e, f, g = [],
                i = [],
                j = a.aoColumns.length,
                n;
            if (b) {
                c === k && (c = !1);
                d = 0;
                for (e = b.length; d < e; d++) {
                    g[d] = b[d].slice();
                    g[d].nTr = b[d].nTr;
                    for (f = j - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                    i.push([])
                }
                d = 0;
                for (e = g.length; d < e; d++) {
                    if (a = g[d].nTr)
                        for (; f = a.firstChild;) a.removeChild(f);
                    f = 0;
                    for (b = g[d].length; f < b; f++)
                        if (n = j = 1, i[d][f] === k) {
                            a.appendChild(g[d][f].cell);
                            for (i[d][f] = 1; g[d + j] !== k && g[d][f].cell == g[d + j][f].cell;) i[d +
                                j][f] = 1, j++;
                            for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
                                for (c = 0; c < j; c++) i[d + c][f + n] = 1;
                                n++
                            }
                            h(g[d][f].cell).attr("rowspan", j).attr("colspan", n)
                        }
                }
            }
        }

        function M(a) {
            var b = w(a, "aoPreDrawCallback", "preDraw", [a]);
            if (-1 !== h.inArray(!1, b)) C(a, !1);
            else {
                var b = [],
                    c = 0,
                    d = a.asStripeClasses,
                    e = d.length,
                    f = a.oLanguage,
                    g = a.iInitDisplayStart,
                    i = "ssp" == y(a),
                    j = a.aiDisplay;
                a.bDrawing = !0;
                g !== k && -1 !== g && (a._iDisplayStart = i ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
                var g = a._iDisplayStart,
                    n = a.fnDisplayEnd();
                if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
                else if (i) { if (!a.bDestroying && !lb(a)) return } else a.iDraw++;
                if (0 !== j.length) {
                    f = i ? a.aoData.length : n;
                    for (i = i ? 0 : g; i < f; i++) {
                        var l = j[i],
                            r = a.aoData[l];
                        null === r.nTr && Ja(a, l);
                        l = r.nTr;
                        if (0 !== e) {
                            var q = d[c % e];
                            r._sRowStripe != q && (h(l).removeClass(r._sRowStripe).addClass(q), r._sRowStripe = q)
                        }
                        w(a, "aoRowCallback", null, [l, r._aData, c, i]);
                        b.push(l);
                        c++
                    }
                } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable),
                    b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: ca(a), "class": a.oClasses.sRowEmpty }).html(c))[0];
                w(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, j]);
                w(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, j]);
                d = h(a.nTBody);
                d.children().detach();
                d.append(h(b));
                w(a, "aoDrawCallback", "draw", [a]);
                a.bSorted = !1;
                a.bFiltered = !1;
                a.bDrawing = !1
            }
        }

        function R(a, b) {
            var c = a.oFeatures,
                d = c.bFilter;
            c.bSort && mb(a);
            d ? ha(a, a.oPreviousSearch) : a.aiDisplay =
                a.aiDisplayMaster.slice();
            !0 !== b && (a._iDisplayStart = 0);
            a._drawHold = b;
            M(a);
            a._drawHold = !1
        }

        function nb(a) {
            var b = a.oClasses,
                c = h(a.nTable),
                c = h("<div/>").insertBefore(c),
                d = a.oFeatures,
                e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) });
            a.nHolding = c[0];
            a.nTableWrapper = e[0];
            a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var f = a.sDom.split(""), g, i, j, n, l, r, q = 0; q < f.length; q++) {
                g = null;
                i = f[q];
                if ("<" == i) {
                    j = h("<div/>")[0];
                    n = f[q + 1];
                    if ("'" == n || '"' == n) {
                        l = "";
                        for (r = 2; f[q + r] != n;) l +=
                            f[q + r], r++;
                        "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), j.id = n[0].substr(1, n[0].length - 1), j.className = n[1]) : "#" == l.charAt(0) ? j.id = l.substr(1, l.length - 1) : j.className = l;
                        q += r
                    }
                    e.append(j);
                    e = h(j)
                } else if (">" == i) e = e.parent();
                else if ("l" == i && d.bPaginate && d.bLengthChange) g = ob(a);
                else if ("f" == i && d.bFilter) g = pb(a);
                else if ("r" == i && d.bProcessing) g = qb(a);
                else if ("t" == i) g = rb(a);
                else if ("i" == i && d.bInfo) g = sb(a);
                else if ("p" == i && d.bPaginate) g = tb(a);
                else if (0 !== m.ext.feature.length) {
                    j =
                        m.ext.feature;
                    r = 0;
                    for (n = j.length; r < n; r++)
                        if (i == j[r].cFeature) { g = j[r].fnInit(a); break }
                }
                g && (j = a.aanFeatures, j[i] || (j[i] = []), j[i].push(g), e.append(g))
            }
            c.replaceWith(e);
            a.nHolding = null
        }

        function fa(a, b) {
            var c = h(b).children("tr"),
                d, e, f, g, i, j, n, l, r, q;
            a.splice(0, a.length);
            f = 0;
            for (j = c.length; f < j; f++) a.push([]);
            f = 0;
            for (j = c.length; f < j; f++) {
                d = c[f];
                for (e = d.firstChild; e;) {
                    if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                        l = 1 * e.getAttribute("colspan");
                        r = 1 * e.getAttribute("rowspan");
                        l = !l || 0 === l ||
                            1 === l ? 1 : l;
                        r = !r || 0 === r || 1 === r ? 1 : r;
                        g = 0;
                        for (i = a[f]; i[g];) g++;
                        n = g;
                        q = 1 === l ? !0 : !1;
                        for (i = 0; i < l; i++)
                            for (g = 0; g < r; g++) a[f + g][n + i] = { cell: e, unique: q }, a[f + g].nTr = d
                    }
                    e = e.nextSibling
                }
            }
        }

        function qa(a, b, c) {
            var d = [];
            c || (c = a.aoHeader, b && (c = [], fa(c, b)));
            for (var b = 0, e = c.length; b < e; b++)
                for (var f = 0, g = c[b].length; f < g; f++)
                    if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
            return d
        }

        function ra(a, b, c) {
            w(a, "aoServerParams", "serverParams", [b]);
            if (b && h.isArray(b)) {
                var d = {},
                    e = /(.*?)\[\]$/;
                h.each(b, function(a, b) {
                    var c =
                        b.name.match(e);
                    c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
                });
                b = d
            }
            var f, g = a.ajax,
                i = a.oInstance,
                j = function(b) {
                    w(a, null, "xhr", [a, b, a.jqXHR]);
                    c(b)
                };
            if (h.isPlainObject(g) && g.data) {
                f = g.data;
                var n = h.isFunction(f) ? f(b, a) : f,
                    b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
                delete g.data
            }
            n = {
                data: b,
                success: function(b) {
                    var c = b.error || b.sError;
                    c && J(a, 0, c);
                    a.json = b;
                    j(b)
                },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function(b, c) {
                    var d = w(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" ==
                        c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7));
                    C(a, !1)
                }
            };
            a.oAjaxData = b;
            w(a, null, "preXhr", [a, b]);
            a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource, h.map(b, function(a, b) { return { name: b, value: a } }), j, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(i, b, j, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
        }

        function lb(a) { return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ra(a, ub(a), function(b) { vb(a, b) }), !1) : !0 }

        function ub(a) {
            var b =
                a.aoColumns,
                c = b.length,
                d = a.oFeatures,
                e = a.oPreviousSearch,
                f = a.aoPreSearchCols,
                g, i = [],
                j, n, l, r = V(a);
            g = a._iDisplayStart;
            j = !1 !== d.bPaginate ? a._iDisplayLength : -1;
            var q = function(a, b) { i.push({ name: a, value: b }) };
            q("sEcho", a.iDraw);
            q("iColumns", c);
            q("sColumns", D(b, "sName").join(","));
            q("iDisplayStart", g);
            q("iDisplayLength", j);
            var k = { draw: a.iDraw, columns: [], order: [], start: g, length: j, search: { value: e.sSearch, regex: e.bRegex } };
            for (g = 0; g < c; g++) n = b[g], l = f[g], j = "function" == typeof n.mData ? "function" : n.mData, k.columns.push({
                data: j,
                name: n.sName,
                searchable: n.bSearchable,
                orderable: n.bSortable,
                search: { value: l.sSearch, regex: l.bRegex }
            }), q("mDataProp_" + g, j), d.bFilter && (q("sSearch_" + g, l.sSearch), q("bRegex_" + g, l.bRegex), q("bSearchable_" + g, n.bSearchable)), d.bSort && q("bSortable_" + g, n.bSortable);
            d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex));
            d.bSort && (h.each(r, function(a, b) {
                k.order.push({ column: b.col, dir: b.dir });
                q("iSortCol_" + a, b.col);
                q("sSortDir_" + a, b.dir)
            }), q("iSortingCols", r.length));
            b = m.ext.legacy.ajax;
            return null === b ? a.sAjaxSource ?
                i : k : b ? i : k
        }

        function vb(a, b) {
            var c = sa(a, b),
                d = b.sEcho !== k ? b.sEcho : b.draw,
                e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
                f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
            if (d) {
                if (1 * d < a.iDraw) return;
                a.iDraw = 1 * d
            }
            na(a);
            a._iRecordsTotal = parseInt(e, 10);
            a._iRecordsDisplay = parseInt(f, 10);
            d = 0;
            for (e = c.length; d < e; d++) L(a, c[d]);
            a.aiDisplay = a.aiDisplayMaster.slice();
            a.bAjaxDataGet = !1;
            M(a);
            a._bInitComplete || ta(a, b);
            a.bAjaxDataGet = !0;
            C(a, !1)
        }

        function sa(a, b) {
            var c = h.isPlainObject(a.ajax) &&
                a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
            return "data" === c ? b.aaData || b[c] : "" !== c ? P(c)(b) : b
        }

        function pb(a) {
            var b = a.oClasses,
                c = a.sTableId,
                d = a.oLanguage,
                e = a.oPreviousSearch,
                f = a.aanFeatures,
                g = '<input type="search" class="' + b.sFilterInput + '"/>',
                i = d.sSearch,
                i = i.match(/_INPUT_/) ? i.replace("_INPUT_", g) : i + g,
                b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(i)),
                f = function() {
                    var b = !this.value ? "" : this.value;
                    b != e.sSearch && (ha(a, {
                        sSearch: b,
                        bRegex: e.bRegex,
                        bSmart: e.bSmart,
                        bCaseInsensitive: e.bCaseInsensitive
                    }), a._iDisplayStart = 0, M(a))
                },
                g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
                j = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", g ? ua(f, g) : f).bind("keypress.DT", function(a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c);
            h(a.nTable).on("search.dt.DT", function(b, c) { if (a === c) try { j[0] !== T.activeElement && j.val(e.sSearch) } catch (d) {} });
            return b[0]
        }

        function ha(a, b, c) {
            var d = a.oPreviousSearch,
                e = a.aoPreSearchCols,
                f = function(a) {
                    d.sSearch = a.sSearch;
                    d.bRegex = a.bRegex;
                    d.bSmart = a.bSmart;
                    d.bCaseInsensitive = a.bCaseInsensitive
                };
            Ia(a);
            if ("ssp" != y(a)) {
                wb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
                f(b);
                for (b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
                yb(a)
            } else f(b);
            a.bFiltered = !0;
            w(a, null, "search", [a])
        }

        function yb(a) {
            for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f <
                g; f++) {
                for (var i = [], j = 0, n = c.length; j < n; j++) e = c[j], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, j) && i.push(e);
                c.length = 0;
                h.merge(c, i)
            }
        }

        function xb(a, b, c, d, e, f) {
            if ("" !== b)
                for (var g = a.aiDisplay, d = Qa(b, d, e, f), e = g.length - 1; 0 <= e; e--) b = a.aoData[g[e]]._aFilterData[c], d.test(b) || g.splice(e, 1)
        }

        function wb(a, b, c, d, e, f) {
            var d = Qa(b, d, e, f),
                e = a.oPreviousSearch.sSearch,
                f = a.aiDisplayMaster,
                g;
            0 !== m.ext.search.length && (c = !0);
            g = zb(a);
            if (0 >= b.length) a.aiDisplay = f.slice();
            else {
                if (g || c || e.length > b.length || 0 !== b.indexOf(e) ||
                    a.bSorted) a.aiDisplay = f.slice();
                b = a.aiDisplay;
                for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
            }
        }

        function Qa(a, b, c, d) {
            a = b ? a : va(a);
            c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
                if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                    a = b ? b[1] : a;
                return a.replace('"', "")
            }).join(")(?=.*?") + ").*$");
            return RegExp(a, d ? "i" : "")
        }

        function va(a) { return a.replace(Yb, "\\$1") }

        function zb(a) {
            var b = a.aoColumns,
                c, d, e, f, g, i, j, h, l = m.ext.type.search;
            c = !1;
            d = 0;
            for (f = a.aoData.length; d <
                f; d++)
                if (h = a.aoData[d], !h._aFilterData) {
                    i = [];
                    e = 0;
                    for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (j = B(a, d, e, "filter"), l[c.sType] && (j = l[c.sType](j)), null === j && (j = ""), "string" !== typeof j && j.toString && (j = j.toString())) : j = "", j.indexOf && -1 !== j.indexOf("&") && (wa.innerHTML = j, j = Zb ? wa.textContent : wa.innerText), j.replace && (j = j.replace(/[\r\n]/g, "")), i.push(j);
                    h._aFilterData = i;
                    h._sFilterRow = i.join("  ");
                    c = !0
                }
            return c
        }

        function Ab(a) { return { search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive } }

        function Bb(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } }

        function sb(a) {
            var b = a.sTableId,
                c = a.aanFeatures.i,
                d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null });
            c || (a.aoDrawCallback.push({ fn: Cb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
            return d[0]
        }

        function Cb(a) {
            var b = a.aanFeatures.i;
            if (0 !== b.length) {
                var c = a.oLanguage,
                    d = a._iDisplayStart + 1,
                    e = a.fnDisplayEnd(),
                    f = a.fnRecordsTotal(),
                    g = a.fnRecordsDisplay(),
                    i = g ? c.sInfo : c.sInfoEmpty;
                g !== f && (i += " " + c.sInfoFiltered);
                i += c.sInfoPostFix;
                i = Db(a, i);
                c = c.fnInfoCallback;
                null !== c && (i = c.call(a.oInstance, a, d, e, f, g, i));
                h(b).html(i)
            }
        }

        function Db(a, b) {
            var c = a.fnFormatNumber,
                d = a._iDisplayStart + 1,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay(),
                g = -1 === e;
            return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d /
                e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
        }

        function ia(a) {
            var b, c, d = a.iInitDisplayStart,
                e = a.aoColumns,
                f;
            c = a.oFeatures;
            var g = a.bDeferLoading;
            if (a.bInitialised) {
                nb(a);
                kb(a);
                ga(a, a.aoHeader);
                ga(a, a.aoFooter);
                C(a, !0);
                c.bAutoWidth && Ha(a);
                b = 0;
                for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = u(f.sWidth));
                w(a, null, "preInit", [a]);
                R(a);
                e = y(a);
                if ("ssp" != e || g) "ajax" == e ? ra(a, [], function(c) {
                    var f = sa(a, c);
                    for (b = 0; b < f.length; b++) L(a, f[b]);
                    a.iInitDisplayStart = d;
                    R(a);
                    C(a, !1);
                    ta(a, c)
                }, a) : (C(a, !1),
                    ta(a))
            } else setTimeout(function() { ia(a) }, 200)
        }

        function ta(a, b) {
            a._bInitComplete = !0;
            (b || a.oInit.aaData) && Y(a);
            w(a, "aoInitComplete", "init", [a, b])
        }

        function Ra(a, b) {
            var c = parseInt(b, 10);
            a._iDisplayLength = c;
            Sa(a);
            w(a, null, "length", [a, c])
        }

        function ob(a) {
            for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, i = f.length; g < i; g++) e[0][g] = new Option(d[g], f[g]);
            var j = h("<div><label/></div>").addClass(b.sLength);
            a.aanFeatures.l || (j[0].id = c + "_length");
            j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
            h("select", j).val(a._iDisplayLength).bind("change.DT", function() {
                Ra(a, h(this).val());
                M(a)
            });
            h(a.nTable).bind("length.dt.DT", function(b, c, d) { a === c && h("select", j).val(d) });
            return j[0]
        }

        function tb(a) {
            var b = a.sPaginationType,
                c = m.ext.pager[b],
                d = "function" === typeof c,
                e = function(a) { M(a) },
                b = h("<div/>").addClass(a.oClasses.sPaging + b)[0],
                f = a.aanFeatures;
            d || c.fnInit(a, b, e);
            f.p || (b.id = a.sTableId +
                "_paginate", a.aoDrawCallback.push({
                    fn: function(a) {
                        if (d) {
                            var b = a._iDisplayStart,
                                j = a._iDisplayLength,
                                h = a.fnRecordsDisplay(),
                                l = -1 === j,
                                b = l ? 0 : Math.ceil(b / j),
                                j = l ? 1 : Math.ceil(h / j),
                                h = c(b, j),
                                k, l = 0;
                            for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, j)
                        } else c.fnUpdate(a, e)
                    },
                    sName: "pagination"
                }));
            return b
        }

        function Ta(a, b, c) {
            var d = a._iDisplayStart,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay();
            0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" ==
                b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5);
            b = a._iDisplayStart !== d;
            a._iDisplayStart = d;
            b && (w(a, null, "page", [a]), c && M(a));
            return b
        }

        function qb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] }

        function C(a, b) {
            a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
            w(a, null, "processing", [a, b])
        }

        function rb(a) {
            var b = h(a.nTable);
            b.attr("role",
                "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY) return a.nTable;
            var d = c.sX,
                e = c.sY,
                f = a.oClasses,
                g = b.children("caption"),
                i = g.length ? g[0]._captionSide : null,
                j = h(b[0].cloneNode(!1)),
                n = h(b[0].cloneNode(!1)),
                l = b.children("tfoot");
            c.sX && "100%" === b.attr("width") && b.removeAttr("width");
            l.length || (l = null);
            j = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(h("<div/>", { "class": f.sScrollHeadInner }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(j.removeAttr("id").css("margin-left", 0).append("top" === i ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : u(d) }).append(b));
            l && j.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : u(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === i ? g : null).append(b.children("tfoot")))));
            var b = j.children(),
                k = b[0],
                f = b[1],
                q = l ? b[2] : null;
            if (d) h(f).on("scroll.DT", function() {
                var a = this.scrollLeft;
                k.scrollLeft = a;
                l && (q.scrollLeft = a)
            });
            h(f).css(e && c.bCollapse ? "max-height" : "height", e);
            a.nScrollHead = k;
            a.nScrollBody = f;
            a.nScrollFoot = q;
            a.aoDrawCallback.push({ fn: Z, sName: "scrolling" });
            return j[0]
        }

        function Z(a) {
            var b = a.oScroll,
                c = b.sX,
                d = b.sXInner,
                e = b.sY,
                b = b.iBarWidth,
                f = h(a.nScrollHead),
                g = f[0].style,
                i = f.children("div"),
                j = i[0].style,
                n = i.children("table"),
                i = a.nScrollBody,
                l = h(i),
                k = i.style,
                q = h(a.nScrollFoot).children("div"),
                m = q.children("table"),
                o = h(a.nTHead),
                E = h(a.nTable),
                p = E[0],
                t = p.style,
                N = a.nTFoot ? h(a.nTFoot) : null,
                Eb = a.oBrowser,
                w = Eb.bScrollOversize,
                s, v, O, x, y = [],
                z = [],
                A = [],
                B, C = function(a) {
                    a = a.style;
                    a.paddingTop = "0";
                    a.paddingBottom = "0";
                    a.borderTopWidth = "0";
                    a.borderBottomWidth = "0";
                    a.height = 0
                };
            E.children("thead, tfoot").remove();
            x = o.clone().prependTo(E);
            o = o.find("tr");
            v = x.find("tr");
            x.find("th, td").removeAttr("tabindex");
            N && (O = N.clone().prependTo(E), s = N.find("tr"), O = O.find("tr"));
            c || (k.width = "100%", f[0].style.width = "100%");
            h.each(qa(a, x), function(b, c) {
                B = $(a, b);
                c.style.width = a.aoColumns[B].sWidth
            });
            N && H(function(a) { a.style.width = "" }, O);
            f = E.outerWidth();
            if ("" === c) {
                t.width = "100%";
                if (w && (E.find("tbody").height() > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(E.outerWidth() - b);
                f = E.outerWidth()
            } else "" !== d && (t.width = u(d), f = E.outerWidth());
            H(C, v);
            H(function(a) {
                A.push(a.innerHTML);
                y.push(u(h(a).css("width")))
            }, v);
            H(function(a, b) { a.style.width = y[b] }, o);
            h(v).height(0);
            N && (H(C, O), H(function(a) { z.push(u(h(a).css("width"))) },
                O), H(function(a, b) { a.style.width = z[b] }, s), h(O).height(0));
            H(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";
                a.style.width = y[b]
            }, v);
            N && H(function(a, b) {
                a.innerHTML = "";
                a.style.width = z[b]
            }, O);
            if (E.outerWidth() < f) {
                s = i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (w && (i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(s - b);
                ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6)
            } else s = "100%";
            k.width =
                u(s);
            g.width = u(s);
            N && (a.nScrollFoot.style.width = u(s));
            !e && w && (k.height = u(p.offsetHeight + b));
            c = E.outerWidth();
            n[0].style.width = u(c);
            j.width = u(c);
            d = E.height() > i.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right");
            j[e] = d ? b + "px" : "0px";
            N && (m[0].style.width = u(c), q[0].style.width = u(c), q[0].style[e] = d ? b + "px" : "0px");
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0
        }

        function H(a, b, c) {
            for (var d = 0, e = 0, f = b.length, g, i; e < f;) {
                g = b[e].firstChild;
                for (i = c ? c[e].firstChild :
                    null; g;) 1 === g.nodeType && (c ? a(g, i, d) : a(g, d), d++), g = g.nextSibling, i = c ? i.nextSibling : null;
                e++
            }
        }

        function Ha(a) {
            var b = a.nTable,
                c = a.aoColumns,
                d = a.oScroll,
                e = d.sY,
                f = d.sX,
                g = d.sXInner,
                i = c.length,
                j = aa(a, "bVisible"),
                n = h("th", a.nTHead),
                l = b.getAttribute("width"),
                k = b.parentNode,
                q = !1,
                m, o, p;
            p = a.oBrowser;
            d = p.bScrollOversize;
            (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
            for (m = 0; m < j.length; m++) o = c[j[m]], null !== o.sWidth && (o.sWidth = Fb(o.sWidthOrig, k), q = !0);
            if (d || !q && !f && !e && i == ca(a) && i == n.length)
                for (m = 0; m < i; m++) {
                    if (j =
                        $(a, m)) c[j].sWidth = u(n.eq(m).width())
                } else {
                    i = h(b).clone().css("visibility", "hidden").removeAttr("id");
                    i.find("tbody tr").remove();
                    var t = h("<tr/>").appendTo(i.find("tbody"));
                    i.find("thead, tfoot").remove();
                    i.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
                    i.find("tfoot th, tfoot td").css("width", "");
                    n = qa(a, i.find("thead")[0]);
                    for (m = 0; m < j.length; m++) o = c[j[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? u(o.sWidthOrig) : "";
                    if (a.aoData.length)
                        for (m = 0; m < j.length; m++) q = j[m], o = c[q], h(Gb(a,
                            q)).clone(!1).append(o.sContentPadding).appendTo(t);
                    q = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(i).appendTo(k);
                    f && g ? i.width(g) : f ? (i.css("width", "auto"), i.width() < k.clientWidth && i.width(k.clientWidth)) : e ? i.width(k.clientWidth) : l && i.width(l);
                    if (f) {
                        for (m = g = 0; m < j.length; m++) o = c[j[m]], e = p.bBounding ? n[m].getBoundingClientRect().width : h(n[m]).outerWidth(), g += null === o.sWidthOrig ? e : parseInt(o.sWidth, 10) + e - h(n[m]).width();
                        i.width(u(g));
                        b.style.width =
                            u(g)
                    }
                    for (m = 0; m < j.length; m++)
                        if (o = c[j[m]], p = h(n[m]).width()) o.sWidth = u(p);
                    b.style.width = u(i.css("width"));
                    q.remove()
                }
            l && (b.style.width = u(l));
            if ((l || f) && !a._reszEvt) b = function() { h(Fa).bind("resize.DT-" + a.sInstance, ua(function() { Y(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        }

        function ua(a, b) {
            var c = b !== k ? b : 200,
                d, e;
            return function() {
                var b = this,
                    g = +new Date,
                    i = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                    d = k;
                    a.apply(b, i)
                }, c)) : (d = g, a.apply(b, i))
            }
        }

        function Fb(a, b) {
            if (!a) return 0;
            var c = h("<div/>").css("width",
                    u(a)).appendTo(b || T.body),
                d = c[0].offsetWidth;
            c.remove();
            return d
        }

        function Gb(a, b) { var c = Hb(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] }

        function Hb(a, b) { for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace($b, ""), c.length > d && (d = c.length, e = f); return e }

        function u(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a }

        function V(a) {
            var b, c, d = [],
                e = a.aoColumns,
                f, g, i, j;
            b = a.aaSortingFixed;
            c = h.isPlainObject(b);
            var n = [];
            f = function(a) { a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a) };
            h.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            for (a = 0; a < n.length; a++) {
                j = n[a][0];
                f = e[j].aDataSort;
                b = 0;
                for (c = f.length; b < c; b++) g = f[b], i = e[g].sType || "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({ src: j, col: g, dir: n[a][1], index: n[a]._idx, type: i, formatter: m.ext.type.order[i + "-pre"] })
            }
            return d
        }

        function mb(a) {
            var b, c, d = [],
                e = m.ext.type.order,
                f = a.aoData,
                g =
                0,
                i, j = a.aiDisplayMaster,
                h;
            Ia(a);
            h = V(a);
            b = 0;
            for (c = h.length; b < c; b++) i = h[b], i.formatter && g++, Ib(a, i.col);
            if ("ssp" != y(a) && 0 !== h.length) {
                b = 0;
                for (c = j.length; b < c; b++) d[j[b]] = b;
                g === h.length ? j.sort(function(a, b) {
                    var c, e, g, i, j = h.length,
                        k = f[a]._aSortData,
                        m = f[b]._aSortData;
                    for (g = 0; g < j; g++)
                        if (i = h[g], c = k[i.col], e = m[i.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === i.dir ? c : -c;
                    c = d[a];
                    e = d[b];
                    return c < e ? -1 : c > e ? 1 : 0
                }) : j.sort(function(a, b) {
                    var c, g, i, j, k = h.length,
                        m = f[a]._aSortData,
                        p = f[b]._aSortData;
                    for (i = 0; i < k; i++)
                        if (j = h[i],
                            c = m[j.col], g = p[j.col], j = e[j.type + "-" + j.dir] || e["string-" + j.dir], c = j(c, g), 0 !== c) return c;
                    c = d[a];
                    g = d[b];
                    return c < g ? -1 : c > g ? 1 : 0
                })
            }
            a.bSorted = !0
        }

        function Jb(a) {
            for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
                c = d[f];
                var i = c.asSorting;
                b = c.sTitle.replace(/<.*?>/g, "");
                var j = c.nTh;
                j.removeAttribute("aria-sort");
                c.bSortable && (0 < e.length && e[0].col == f ? (j.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = i[e[0].index + 1] || i[0]) : c = i[0], b += "asc" === c ? a.sSortAscending :
                    a.sSortDescending);
                j.setAttribute("aria-label", b)
            }
        }

        function Ua(a, b, c, d) {
            var e = a.aaSorting,
                f = a.aoColumns[b].asSorting,
                g = function(a, b) {
                    var c = a._idx;
                    c === k && (c = h.inArray(a[1], f));
                    return c + 1 < f.length ? c + 1 : b ? null : 0
                };
            "number" === typeof e[0] && (e = a.aaSorting = [e]);
            c && a.oFeatures.bSortMulti ? (c = h.inArray(b, D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b],
                e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
            R(a);
            "function" == typeof d && d(a)
        }

        function Oa(a, b, c, d) {
            var e = a.aoColumns[c];
            Va(b, {}, function(b) {!1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() { Ua(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Ua(a, c, b.shiftKey, d)) })
        }

        function xa(a) {
            var b = a.aLastSort,
                c = a.oClasses.sSortColumn,
                d = V(a),
                e = a.oFeatures,
                f, g;
            if (e.bSort && e.bSortClasses) {
                e = 0;
                for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
                e = 0;
                for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
            }
            a.aLastSort = d
        }

        function Ib(a, b) {
            var c = a.aoColumns[b],
                d = m.ext.order[c.sSortDataType],
                e;
            d && (e = d.call(a.oInstance, a, b, ba(a, b)));
            for (var f, g = m.ext.type.order[c.sType + "-pre"], i = 0, h = a.aoData.length; i < h; i++)
                if (c = a.aoData[i], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[i] : B(a, i, b, "sort"), c._aSortData[b] = g ? g(f) : f
        }

        function ya(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: h.extend(!0, [], a.aaSorting),
                    search: Ab(a.oPreviousSearch),
                    columns: h.map(a.aoColumns, function(b, d) { return { visible: b.bVisible, search: Ab(a.aoPreSearchCols[d]) } })
                };
                w(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
                a.oSavedState = b;
                a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }

        function Kb(a) {
            var b, c, d = a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var e = a.fnStateLoadCallback.call(a.oInstance, a);
                if (e && e.time && (b = w(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === h.inArray(!1, b) && (b =
                        a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                    a.oLoadedState = h.extend(!0, {}, e);
                    e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start);
                    e.length !== k && (a._iDisplayLength = e.length);
                    e.order !== k && (a.aaSorting = [], h.each(e.order, function(b, c) { a.aaSorting.push(c[0] >= d.length ? [0, c[1]] : c) }));
                    e.search !== k && h.extend(a.oPreviousSearch, Bb(e.search));
                    b = 0;
                    for (c = e.columns.length; b < c; b++) {
                        var f = e.columns[b];
                        f.visible !== k && (d[b].bVisible = f.visible);
                        f.search !== k && h.extend(a.aoPreSearchCols[b],
                            Bb(f.search))
                    }
                    w(a, "aoStateLoaded", "stateLoaded", [a, e])
                }
            }
        }

        function za(a) {
            var b = m.settings,
                a = h.inArray(a, D(b, "nTable"));
            return -1 !== a ? b[a] : null
        }

        function J(a, b, c, d) {
            c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
            d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
            if (b) Fa.console && console.log && console.log(c);
            else if (b = m.ext, b = b.sErrMode || b.errMode, a && w(a, null, "error", [a, d, c]), "alert" == b) alert(c);
            else {
                if ("throw" == b) throw Error(c);
                "function" == typeof b &&
                    b(a, d, c)
            }
        }

        function F(a, b, c, d) { h.isArray(c) ? h.each(c, function(c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) }

        function Lb(a, b, c) { var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e], h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d); return a }

        function Va(a, b, c) {
            h(a).bind("click.DT", b, function(b) {
                a.blur();
                c(b)
            }).bind("keypress.DT", b, function(a) { 13 === a.which && (a.preventDefault(), c(a)) }).bind("selectstart.DT",
                function() { return !1 })
        }

        function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) }

        function w(a, b, c, d) {
            var e = [];
            b && (e = h.map(a[b].slice().reverse(), function(b) { return b.fn.apply(a.oInstance, d) }));
            null !== c && (b = h.Event(c + ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
            return e
        }

        function Sa(a) {
            var b = a._iDisplayStart,
                c = a.fnDisplayEnd(),
                d = a._iDisplayLength;
            b >= c && (b = c - d);
            b -= b % d;
            if (-1 === d || 0 > b) b = 0;
            a._iDisplayStart = b
        }

        function Pa(a, b) {
            var c = a.renderer,
                d = m.ext.renderer[b];
            return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" ===
                typeof c ? d[c] || d._ : d._
        }

        function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" }

        function Aa(a, b) {
            var c = [],
                c = Mb.numbers_length,
                d = Math.floor(c / 2);
            b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
            c.DT_el = "span";
            return c
        }

        function cb(a) {
            h.each({
                num: function(b) { return Ba(b, a) },
                "num-fmt": function(b) { return Ba(b, a, Wa) },
                "html-num": function(b) {
                    return Ba(b,
                        a, Ca)
                },
                "html-num-fmt": function(b) { return Ba(b, a, Ca, Wa) }
            }, function(b, c) {
                v.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html)
            })
        }

        function Nb(a) { return function() { var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return m.ext.internal[a].apply(this, b) } }
        var m, v, t, p, s, Xa = {},
            Ob = /[\r\n]/g,
            Ca = /<.*?>/g,
            ac = /^[\w\+\-]/,
            bc = /[\w\+\-]$/,
            Yb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Wa = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            K = function(a) { return !a || !0 === a || "-" === a ? !0 : !1 },
            Pb = function(a) { var b = parseInt(a, 10); return !isNaN(b) && isFinite(a) ? b : null },
            Qb = function(a, b) { Xa[b] || (Xa[b] = RegExp(va(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Xa[b], ".") : a },
            Ya = function(a, b, c) {
                var d = "string" === typeof a;
                if (K(a)) return !0;
                b && d && (a = Qb(a, b));
                c && d && (a = a.replace(Wa, ""));
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            Rb = function(a, b, c) { return K(a) ? !0 : !(K(a) || "string" === typeof a) ? null : Ya(a.replace(Ca, ""), b, c) ? !0 : null },
            D = function(a,
                b, c) {
                var d = [],
                    e = 0,
                    f = a.length;
                if (c !== k)
                    for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
                else
                    for (; e < f; e++) a[e] && d.push(a[e][b]);
                return d
            },
            ja = function(a, b, c, d) {
                var e = [],
                    f = 0,
                    g = b.length;
                if (d !== k)
                    for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
                else
                    for (; f < g; f++) e.push(a[b[f]][c]);
                return e
            },
            W = function(a, b) {
                var c = [],
                    d;
                b === k ? (b = 0, d = a) : (d = b, b = a);
                for (var e = b; e < d; e++) c.push(e);
                return c
            },
            Sb = function(a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b },
            pa = function(a) {
                var b = [],
                    c, d, e = a.length,
                    f, g = 0;
                d = 0;
                a: for (; d < e; d++) {
                    c = a[d];
                    for (f = 0; f < g; f++)
                        if (b[f] === c) continue a;
                    b.push(c);
                    g++
                }
                return b
            },
            A = function(a, b, c) { a[b] !== k && (a[c] = a[b]) },
            da = /\[.*?\]$/,
            U = /\(\)$/,
            wa = h("<div>")[0],
            Zb = wa.textContent !== k,
            $b = /<.*?>/g;
        m = function(a) {
            this.$ = function(a, b) { return this.api(!0).$(a, b) };
            this._ = function(a, b) { return this.api(!0).rows(a, b).data() };
            this.api = function(a) { return a ? new t(za(this[v.iApiIndex])) : new t(this) };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                    d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ?
                    c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            };
            this.fnClose = function(a) { this.api(!0).row(a).child.hide() };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0),
                    a = d.rows(a),
                    e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === k || c) && d.draw();
                return h
            };
            this.fnDestroy = function(a) { this.api(!0).destroy(a) };
            this.fnDraw = function(a) { this.api(!0).draw(a) };
            this.fnFilter = function(a, b, c, d, e, h) {
                e = this.api(!0);
                null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
                e.draw()
            };
            this.fnGetData = function(a, b) { var c = this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) { return this.api(!0).row(a).child.isShown() };
            this.fnOpen = function(a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1)
            };
            this.fnSetColumnVis =
                function(a, b, c) {
                    a = this.api(!0).column(a).visible(b);
                    (c === k || c) && a.columns.adjust().draw()
                };
            this.fnSettings = function() { return za(this[v.iApiIndex]) };
            this.fnSort = function(a) { this.api(!0).order(a).draw() };
            this.fnSortListener = function(a, b, c) { this.api(!0).order.listener(a, b, c) };
            this.fnUpdate = function(a, b, c, d, e) {
                var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === k || e) && h.columns.adjust();
                (d === k || d) && h.draw();
                return 0
            };
            this.fnVersionCheck = v.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = v.internal;
            for (var e in m.ext.internal) e && (this[e] = Nb(e));
            this.each(function() {
                var e = {},
                    e = 1 < d ? Lb(e, a, !0) : a,
                    g = 0,
                    i, j = this.getAttribute("id"),
                    n = !1,
                    l = m.defaults,
                    r = h(this);
                if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    db(l);
                    eb(l.column);
                    I(l, l, !0);
                    I(l.column, l.column, !0);
                    I(l, h.extend(e, r.data()));
                    var q = m.settings,
                        g = 0;
                    for (i = q.length; g < i; g++) {
                        var p = q[g];
                        if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot &&
                            p.nTFoot.parentNode == this) { g = e.bRetrieve !== k ? e.bRetrieve : l.bRetrieve; if (c || g) return p.oInstance; if (e.bDestroy !== k ? e.bDestroy : l.bDestroy) { p.oInstance.fnDestroy(); break } else { J(p, 0, "Cannot reinitialise DataTable", 3); return } }
                        if (p.sTableId == this.id) { q.splice(g, 1); break }
                    }
                    if (null === j || "" === j) this.id = j = "DataTables_Table_" + m.ext._unique++;
                    var o = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: r[0].style.width, sInstance: j, sTableId: j });
                    o.nTable = this;
                    o.oApi = b.internal;
                    o.oInit = e;
                    q.push(o);
                    o.oInstance = 1 === b.length ?
                        b : r.dataTable();
                    db(e);
                    e.oLanguage && S(e.oLanguage);
                    e.aLengthMenu && !e.iDisplayLength && (e.iDisplayLength = h.isArray(e.aLengthMenu[0]) ? e.aLengthMenu[0][0] : e.aLengthMenu[0]);
                    e = Lb(h.extend(!0, {}, l), e);
                    F(o.oFeatures, e, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(o, e, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp",
                        "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    F(o.oScroll, e, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    F(o.oLanguage, e, "fnInfoCallback");
                    z(o, "aoDrawCallback", e.fnDrawCallback, "user");
                    z(o, "aoServerParams",
                        e.fnServerParams, "user");
                    z(o, "aoStateSaveParams", e.fnStateSaveParams, "user");
                    z(o, "aoStateLoadParams", e.fnStateLoadParams, "user");
                    z(o, "aoStateLoaded", e.fnStateLoaded, "user");
                    z(o, "aoRowCallback", e.fnRowCallback, "user");
                    z(o, "aoRowCreatedCallback", e.fnCreatedRow, "user");
                    z(o, "aoHeaderCallback", e.fnHeaderCallback, "user");
                    z(o, "aoFooterCallback", e.fnFooterCallback, "user");
                    z(o, "aoInitComplete", e.fnInitComplete, "user");
                    z(o, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
                    o.rowIdFn = P(e.rowId);
                    fb(o);
                    j = o.oClasses;
                    e.bJQueryUI ? (h.extend(j, m.ext.oJUIClasses, e.oClasses), e.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(j, m.ext.classes, e.oClasses);
                    r.addClass(j.sTable);
                    o.iInitDisplayStart === k && (o.iInitDisplayStart = e.iDisplayStart, o._iDisplayStart = e.iDisplayStart);
                    null !== e.iDeferLoading && (o.bDeferLoading = !0, g = h.isArray(e.iDeferLoading), o._iRecordsDisplay = g ? e.iDeferLoading[0] : e.iDeferLoading,
                        o._iRecordsTotal = g ? e.iDeferLoading[1] : e.iDeferLoading);
                    var t = o.oLanguage;
                    h.extend(!0, t, e.oLanguage);
                    "" !== t.sUrl && (h.ajax({
                        dataType: "json",
                        url: t.sUrl,
                        success: function(a) {
                            S(a);
                            I(l.oLanguage, a);
                            h.extend(true, t, a);
                            ia(o)
                        },
                        error: function() { ia(o) }
                    }), n = !0);
                    null === e.asStripeClasses && (o.asStripeClasses = [j.sStripeOdd, j.sStripeEven]);
                    var g = o.asStripeClasses,
                        s = r.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(g, function(a) { return s.hasClass(a) })) && (h("tbody tr", this).removeClass(g.join(" ")), o.asDestroyStripes =
                        g.slice());
                    q = [];
                    g = this.getElementsByTagName("thead");
                    0 !== g.length && (fa(o.aoHeader, g[0]), q = qa(o));
                    if (null === e.aoColumns) {
                        p = [];
                        g = 0;
                        for (i = q.length; g < i; g++) p.push(null)
                    } else p = e.aoColumns;
                    g = 0;
                    for (i = p.length; g < i; g++) Ga(o, q ? q[g] : null);
                    hb(o, e.aoColumnDefs, p, function(a, b) { la(o, a, b) });
                    if (s.length) {
                        var u = function(a, b) { return a.getAttribute("data-" + b) !== null ? b : null };
                        h(s[0]).children("th, td").each(function(a, b) {
                            var c = o.aoColumns[a];
                            if (c.mData === a) {
                                var d = u(b, "sort") || u(b, "order"),
                                    e = u(b, "filter") || u(b, "search");
                                if (d !== null || e !== null) {
                                    c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k };
                                    la(o, a)
                                }
                            }
                        })
                    }
                    var v = o.oFeatures;
                    e.bStateSave && (v.bStateSave = !0, Kb(o, e), z(o, "aoDrawCallback", ya, "state_save"));
                    if (e.aaSorting === k) {
                        q = o.aaSorting;
                        g = 0;
                        for (i = q.length; g < i; g++) q[g][1] = o.aoColumns[g].asSorting[0]
                    }
                    xa(o);
                    v.bSort && z(o, "aoDrawCallback", function() {
                        if (o.bSorted) {
                            var a = V(o),
                                b = {};
                            h.each(a, function(a, c) { b[c.src] = c.dir });
                            w(o, null, "order", [o, a, b]);
                            Jb(o)
                        }
                    });
                    z(o,

                        "aoDrawCallback",
                        function() {
                            (o.bSorted || y(o) === "ssp" || v.bDeferRender) && xa(o)
                        }, "sc");
                    g = r.children("caption").each(function() { this._captionSide = r.css("caption-side") });
                    i = r.children("thead");
                    0 === i.length && (i = h("<thead/>").appendTo(this));
                    o.nTHead = i[0];
                    i = r.children("tbody");
                    0 === i.length && (i = h("<tbody/>").appendTo(this));
                    o.nTBody = i[0];
                    i = r.children("tfoot");
                    if (0 === i.length && 0 < g.length && ("" !== o.oScroll.sX || "" !== o.oScroll.sY)) i = h("<tfoot/>").appendTo(this);
                    0 === i.length || 0 === i.children().length ? r.addClass(j.sNoFooter) :
                        0 < i.length && (o.nTFoot = i[0], fa(o.aoFooter, o.nTFoot));
                    if (e.aaData)
                        for (g = 0; g < e.aaData.length; g++) L(o, e.aaData[g]);
                    else(o.bDeferLoading || "dom" == y(o)) && ma(o, h(o.nTBody).children("tr"));
                    o.aiDisplay = o.aiDisplayMaster.slice();
                    o.bInitialised = !0;
                    !1 === n && ia(o)
                }
            });
            b = null;
            return this
        };
        var Tb = [],
            x = Array.prototype,
            cc = function(a) {
                var b, c, d = m.settings,
                    e = h.map(d, function(a) { return a.nTable });
                if (a) {
                    if (a.nTable && a.oApi) return [a];
                    if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] :
                        null;
                    if (a && "function" === typeof a.settings) return a.settings().toArray();
                    "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
                } else return [];
                if (c) return c.map(function() { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray()
            };
        t = function(a, b) {
            if (!(this instanceof t)) return new t(a, b);
            var c = [],
                d = function(a) {
                    (a = cc(a)) && (c = c.concat(a))
                };
            if (h.isArray(a))
                for (var e = 0, f = a.length; e < f; e++) d(a[e]);
            else d(a);
            this.context = pa(c);
            b && h.merge(this, b);
            this.selector = { rows: null, cols: null, opts: null };
            t.extend(this, this, Tb)
        };
        m.Api = t;
        h.extend(t.prototype, {
            any: function() { return 0 !== this.count() },
            concat: x.concat,
            context: [],
            count: function() { return this.flatten().length },
            each: function(a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this },
            eq: function(a) { var b = this.context; return b.length > a ? new t(b[a], this[a]) : null },
            filter: function(a) {
                var b = [];
                if (x.filter) b = x.filter.call(this, a, this);
                else
                    for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
                return new t(this.context, b)
            },
            flatten: function() {
                var a = [];
                return new t(this.context, a.concat.apply(a, this.toArray()))
            },
            join: x.join,
            indexOf: x.indexOf || function(a, b) {
                for (var c = b || 0, d = this.length; c < d; c++)
                    if (this[c] === a) return c;
                return -1
            },
            iterator: function(a, b, c, d) {
                var e = [],
                    f, g, h, j, n, l = this.context,
                    m, q, p = this.selector;
                "string" === typeof a && (d = c, c = b, b = a, a = !1);
                g = 0;
                for (h = l.length; g < h; g++) {
                    var o = new t(l[g]);
                    if ("table" === b) f = c.call(o, l[g], g), f !== k && e.push(f);
                    else if ("columns" === b || "rows" === b) f = c.call(o, l[g], this[g], g), f !== k && e.push(f);
                    else if ("column" === b || "column-rows" ===
                        b || "row" === b || "cell" === b) {
                        q = this[g];
                        "column-rows" === b && (m = Da(l[g], p.opts));
                        j = 0;
                        for (n = q.length; j < n; j++) f = q[j], f = "cell" === b ? c.call(o, l[g], f.row, f.column, g, j) : c.call(o, l[g], f, g, j, m), f !== k && e.push(f)
                    }
                }
                return e.length || d ? (a = new t(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = p.rows, b.cols = p.cols, b.opts = p.opts, a) : this
            },
            lastIndexOf: x.lastIndexOf || function(a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) },
            length: 0,
            map: function(a) {
                var b = [];
                if (x.map) b = x.map.call(this, a, this);
                else
                    for (var c =
                            0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
                return new t(this.context, b)
            },
            pluck: function(a) { return this.map(function(b) { return b[a] }) },
            pop: x.pop,
            push: x.push,
            reduce: x.reduce || function(a, b) { return gb(this, a, b, 0, this.length, 1) },
            reduceRight: x.reduceRight || function(a, b) { return gb(this, a, b, this.length - 1, -1, -1) },
            reverse: x.reverse,
            selector: null,
            shift: x.shift,
            sort: x.sort,
            splice: x.splice,
            toArray: function() { return x.slice.call(this) },
            to$: function() { return h(this) },
            toJQuery: function() { return h(this) },
            unique: function() { return new t(this.context, pa(this)) },
            unshift: x.unshift
        });
        t.extend = function(a, b, c) {
            if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
                var d, e, f, g = function(a, b, c) {
                    return function() {
                        var d = b.apply(a, arguments);
                        t.extend(d, d, c.methodExt);
                        return d
                    }
                };
                d = 0;
                for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
            }
        };
        t.register = p = function(a, b) {
            if (h.isArray(a))
                for (var c = 0, d = a.length; c <
                    d; c++) t.register(a[c], b);
            else
                for (var e = a.split("."), f = Tb, g, i, c = 0, d = e.length; c < d; c++) {
                    g = (i = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
                    var j;
                    a: {
                        j = 0;
                        for (var n = f.length; j < n; j++)
                            if (f[j].name === g) { j = f[j]; break a }
                        j = null
                    }
                    j || (j = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(j));
                    c === d - 1 ? j.val = b : f = i ? j.methodExt : j.propExt
                }
        };
        t.registerPlural = s = function(a, b, c) {
            t.register(a, c);
            t.register(b, function() {
                var a = c.apply(this, arguments);
                return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ? new t(a.context,
                    a[0]) : a[0] : k : a
            })
        };
        p("tables()", function(a) {
            var b;
            if (a) {
                b = t;
                var c = this.context;
                if ("number" === typeof a) a = [c[a]];
                else var d = h.map(c, function(a) { return a.nTable }),
                    a = h(d).filter(a).map(function() { var a = h.inArray(this, d); return c[a] }).toArray();
                b = new b(a)
            } else b = this;
            return b
        });
        p("table()", function(a) {
            var a = this.tables(a),
                b = a.context;
            return b.length ? new t(b[0]) : a
        });
        s("tables().nodes()", "table().node()", function() { return this.iterator("table", function(a) { return a.nTable }, 1) });
        s("tables().body()", "table().body()",
            function() { return this.iterator("table", function(a) { return a.nTBody }, 1) });
        s("tables().header()", "table().header()", function() { return this.iterator("table", function(a) { return a.nTHead }, 1) });
        s("tables().footer()", "table().footer()", function() { return this.iterator("table", function(a) { return a.nTFoot }, 1) });
        s("tables().containers()", "table().container()", function() { return this.iterator("table", function(a) { return a.nTableWrapper }, 1) });
        p("draw()", function(a) {
            return this.iterator("table", function(b) {
                "page" ===
                a ? M(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), R(b, !1 === a))
            })
        });
        p("page()", function(a) { return a === k ? this.page.info().page : this.iterator("table", function(b) { Ta(b, a) }) });
        p("page.info()", function() {
            if (0 === this.context.length) return k;
            var a = this.context[0],
                b = a._iDisplayStart,
                c = a._iDisplayLength,
                d = a.fnRecordsDisplay(),
                e = -1 === c;
            return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) }
        });
        p("page.len()", function(a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) { Ra(b, a) }) });
        var Ub = function(a, b, c) {
            if (c) {
                var d = new t(a);
                d.one("draw", function() { c(d.ajax.json()) })
            }
            if ("ssp" == y(a)) R(a, b);
            else {
                C(a, !0);
                var e = a.jqXHR;
                e && 4 !== e.readyState && e.abort();
                ra(a, [], function(c) {
                    na(a);
                    for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) L(a, c[d]);
                    R(a, b);
                    C(a, !1)
                })
            }
        };
        p("ajax.json()", function() { var a = this.context; if (0 < a.length) return a[0].json });
        p("ajax.params()",
            function() { var a = this.context; if (0 < a.length) return a[0].oAjaxData });
        p("ajax.reload()", function(a, b) { return this.iterator("table", function(c) { Ub(c, !1 === b, a) }) });
        p("ajax.url()", function(a) {
            var b = this.context;
            if (a === k) {
                if (0 === b.length) return k;
                b = b[0];
                return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
            }
            return this.iterator("table", function(b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
        });
        p("ajax.url().load()", function(a, b) { return this.iterator("table", function(c) { Ub(c, !1 === b, a) }) });
        var Za = function(a, b, c, d, e) {
                var f = [],
                    g, i, j, n, l, m;
                j = typeof b;
                if (!b || "string" === j || "function" === j || b.length === k) b = [b];
                j = 0;
                for (n = b.length; j < n; j++) {
                    i = b[j] && b[j].split ? b[j].split(",") : [b[j]];
                    l = 0;
                    for (m = i.length; l < m; l++)(g = c("string" === typeof i[l] ? h.trim(i[l]) : i[l])) && g.length && (f = f.concat(g))
                }
                a = v.selector[a];
                if (a.length) { j = 0; for (n = a.length; j < n; j++) f = a[j](d, e, f) }
                return pa(f)
            },
            $a = function(a) {
                a || (a = {});
                a.filter && a.search === k && (a.search = a.filter);
                return h.extend({ search: "none", order: "current", page: "all" }, a)
            },
            ab = function(a) {
                for (var b = 0, c = a.length; b < c; b++)
                    if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
                a.length = 0;
                return a
            },
            Da = function(a, b) {
                var c, d, e, f = [],
                    g = a.aiDisplay;
                c = a.aiDisplayMaster;
                var i = b.search;
                d = b.order;
                e = b.page;
                if ("ssp" == y(a)) return "removed" === i ? [] : W(0, c.length);
                if ("current" == e) { c = a._iDisplayStart; for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c]) } else if ("current" == d || "applied" == d) f = "none" == i ? c.slice() : "applied" == i ? g.slice() : h.map(c, function(a) {
                    return -1 === h.inArray(a,
                        g) ? a : null
                });
                else if ("index" == d || "original" == d) { c = 0; for (d = a.aoData.length; c < d; c++) "none" == i ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == i || 0 <= e && "applied" == i) && f.push(c)) }
                return f
            };
        p("rows()", function(a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
            var b = $a(b),
                c = this.iterator("table", function(c) {
                    var e = b;
                    return Za("row", a, function(a) {
                        var b = Pb(a);
                        if (b !== null && !e) return [b];
                        var i = Da(c, e);
                        if (b !== null && h.inArray(b, i) !== -1) return [b];
                        if (!a) return i;
                        if (typeof a === "function") return h.map(i, function(b) {
                            var e =
                                c.aoData[b];
                            return a(b, e._aData, e.nTr) ? b : null
                        });
                        b = Sb(ja(c.aoData, i, "nTr"));
                        if (a.nodeName && h.inArray(a, b) !== -1) return [a._DT_RowIndex];
                        if (typeof a === "string" && a.charAt(0) === "#") { i = c.aIds[a.replace(/^#/, "")]; if (i !== k) return [i.idx] }
                        return h(b).filter(a).map(function() { return this._DT_RowIndex }).toArray()
                    }, c, e)
                }, 1);
            c.selector.rows = a;
            c.selector.opts = b;
            return c
        });
        p("rows().nodes()", function() { return this.iterator("row", function(a, b) { return a.aoData[b].nTr || k }, 1) });
        p("rows().data()", function() {
            return this.iterator(!0,
                "rows",
                function(a, b) { return ja(a.aoData, b, "_aData") }, 1)
        });
        s("rows().cache()", "row().cache()", function(a) { return this.iterator("row", function(b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) });
        s("rows().invalidate()", "row().invalidate()", function(a) { return this.iterator("row", function(b, c) { ea(b, c, a) }) });
        s("rows().indexes()", "row().index()", function() { return this.iterator("row", function(a, b) { return b }, 1) });
        s("rows().ids()", "row().id()", function(a) {
            for (var b = [], c = this.context,
                    d = 0, e = c.length; d < e; d++)
                for (var f = 0, g = this[d].length; f < g; f++) {
                    var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                    b.push((!0 === a ? "#" : "") + h)
                }
            return new t(c, b)
        });
        s("rows().remove()", "row().remove()", function() {
            var a = this;
            this.iterator("row", function(b, c, d) {
                var e = b.aoData,
                    f = e[c];
                e.splice(c, 1);
                for (var g = 0, h = e.length; g < h; g++) null !== e[g].nTr && (e[g].nTr._DT_RowIndex = g);
                oa(b.aiDisplayMaster, c);
                oa(b.aiDisplay, c);
                oa(a[d], c, !1);
                Sa(b);
                c = b.rowIdFn(f._aData);
                c !== k && delete b.aIds[c]
            });
            this.iterator("table", function(a) {
                for (var c =
                        0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
            });
            return this
        });
        p("rows.add()", function(a) {
            var b = this.iterator("table", function(b) {
                    var c, f, g, h = [];
                    f = 0;
                    for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(ma(b, c)[0]) : h.push(L(b, c));
                    return h
                }, 1),
                c = this.rows(-1);
            c.pop();
            h.merge(c, b);
            return c
        });
        p("row()", function(a, b) { return ab(this.rows(a, b)) });
        p("row().data()", function(a) {
            var b = this.context;
            if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
            b[0].aoData[this[0]]._aData =
                a;
            ea(b[0], this[0], "data");
            return this
        });
        p("row().node()", function() { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null });
        p("row.add()", function(a) { a instanceof h && a.length && (a = a[0]); var b = this.iterator("table", function(b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : L(b, a) }); return this.row(b[0]) });
        var bb = function(a, b) { var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k },
            Vb = function(a,
                b) {
                var c = a.context;
                if (c.length && a.length) {
                    var d = c[0].aoData[a[0]];
                    if (d._details) {
                        (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                        var e = c[0],
                            f = new t(e),
                            g = e.aoData;
                        f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) {
                            e === b && f.rows({ page: "current" }).eq(0).each(function(a) {
                                a = g[a];
                                a._detailsShow && a._details.insertAfter(a.nTr)
                            })
                        }), f.on("column-visibility.dt.DT_details", function(a, b) {
                            if (e ===
                                b)
                                for (var c, d = ca(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                        }), f.on("destroy.dt.DT_details", function(a, b) {
                            if (e === b)
                                for (var c = 0, d = g.length; c < d; c++) g[c]._details && bb(f, c)
                        }))
                    }
                }
            };
        p("row().child()", function(a, b) {
            var c = this.context;
            if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
            if (!0 === a) this.child.show();
            else if (!1 === a) bb(this);
            else if (c.length && this.length) {
                var d = c[0],
                    c = c[0].aoData[this[0]],
                    e = [],
                    f = function(a, b) {
                        if (h.isArray(a) ||
                            a instanceof h)
                            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                        else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ca(d), e.push(c[0]))
                    };
                f(a, b);
                c._details && c._details.remove();
                c._details = h(e);
                c._detailsShow && c._details.insertAfter(c.nTr)
            }
            return this
        });
        p(["row().child.show()", "row().child().show()"], function() { Vb(this, !0); return this });
        p(["row().child.hide()", "row().child().hide()"], function() { Vb(this, !1); return this });
        p(["row().child.remove()",
            "row().child().remove()"
        ], function() { bb(this); return this });
        p("row().child.isShown()", function() { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 });
        var dc = /^(.+):(name|visIdx|visible)$/,
            Wb = function(a, b, c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b)); return c };
        p("columns()", function(a, b) {
            a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
            var b = $a(b),
                c = this.iterator("table", function(c) {
                    var e = a,
                        f = b,
                        g = c.aoColumns,
                        i = D(g, "sName"),
                        j = D(g, "nTh");
                    return Za("column",
                        e,
                        function(a) {
                            var b = Pb(a);
                            if (a === "") return W(g.length);
                            if (b !== null) return [b >= 0 ? b : g.length + b];
                            if (typeof a === "function") { var e = Da(c, f); return h.map(g, function(b, f) { return a(f, Wb(c, f, 0, 0, e), j[f]) ? f : null }) }
                            var k = typeof a === "string" ? a.match(dc) : "";
                            if (k) switch (k[2]) {
                                case "visIdx":
                                case "visible":
                                    b = parseInt(k[1], 10);
                                    if (b < 0) { var m = h.map(g, function(a, b) { return a.bVisible ? b : null }); return [m[m.length + b]] }
                                    return [$(c, b)];
                                case "name":
                                    return h.map(i, function(a, b) { return a === k[1] ? b : null })
                            } else return h(j).filter(a).map(function() {
                                return h.inArray(this,
                                    j)
                            }).toArray()
                        }, c, f)
                }, 1);
            c.selector.cols = a;
            c.selector.opts = b;
            return c
        });
        s("columns().header()", "column().header()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTh }, 1) });
        s("columns().footer()", "column().footer()", function() { return this.iterator("column", function(a, b) { return a.aoColumns[b].nTf }, 1) });
        s("columns().data()", "column().data()", function() { return this.iterator("column-rows", Wb, 1) });
        s("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column",
                function(a, b) { return a.aoColumns[b].mData }, 1)
        });
        s("columns().cache()", "column().cache()", function(a) { return this.iterator("column-rows", function(b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) });
        s("columns().nodes()", "column().nodes()", function() { return this.iterator("column-rows", function(a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) });
        s("columns().visible()", "column().visible()", function(a, b) {
            return this.iterator("column", function(c, d) {
                if (a === k) return c.aoColumns[d].bVisible;
                var e = c.aoColumns,
                    f = e[d],
                    g = c.aoData,
                    i, j, m;
                if (a !== k && f.bVisible !== a) {
                    if (a) {
                        var l = h.inArray(!0, D(e, "bVisible"), d + 1);
                        i = 0;
                        for (j = g.length; i < j; i++) m = g[i].nTr, e = g[i].anCells, m && m.insertBefore(e[d], e[l] || null)
                    } else h(D(c.aoData, "anCells", d)).detach();
                    f.bVisible = a;
                    ga(c, c.aoHeader);
                    ga(c, c.aoFooter);
                    if (b === k || b) Y(c), (c.oScroll.sX || c.oScroll.sY) && Z(c);
                    w(c, null, "column-visibility", [c, d, a]);
                    ya(c)
                }
            })
        });
        s("columns().indexes()", "column().index()", function(a) {
            return this.iterator("column", function(b, c) {
                return "visible" ===
                    a ? ba(b, c) : c
            }, 1)
        });
        p("columns.adjust()", function() { return this.iterator("table", function(a) { Y(a) }, 1) });
        p("column.index()", function(a, b) { if (0 !== this.context.length) { var c = this.context[0]; if ("fromVisible" === a || "toData" === a) return $(c, b); if ("fromData" === a || "toVisible" === a) return ba(c, b) } });
        p("column()", function(a, b) { return ab(this.columns(a, b)) });
        p("cells()", function(a, b, c) {
            h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
            h.isPlainObject(b) && (c = b, b = null);
            if (null === b || b === k) return this.iterator("table",
                function(b) {
                    var d = a,
                        e = $a(c),
                        f = b.aoData,
                        g = Da(b, e),
                        i = Sb(ja(f, g, "anCells")),
                        j = h([].concat.apply([], i)),
                        l, m = b.aoColumns.length,
                        n, p, t, s, u, v;
                    return Za("cell", d, function(a) {
                        var c = typeof a === "function";
                        if (a === null || a === k || c) {
                            n = [];
                            p = 0;
                            for (t = g.length; p < t; p++) {
                                l = g[p];
                                for (s = 0; s < m; s++) {
                                    u = { row: l, column: s };
                                    if (c) {
                                        v = f[l];
                                        a(u, B(b, l, s), v.anCells ? v.anCells[s] : null) && n.push(u)
                                    } else n.push(u)
                                }
                            }
                            return n
                        }
                        return h.isPlainObject(a) ? [a] : j.filter(a).map(function(a, b) {
                            if (b.parentNode) l = b.parentNode._DT_RowIndex;
                            else {
                                a = 0;
                                for (t =
                                    f.length; a < t; a++)
                                    if (h.inArray(b, f[a].anCells) !== -1) { l = a; break }
                            }
                            return { row: l, column: h.inArray(b, f[l].anCells) }
                        }).toArray()
                    }, b, e)
                });
            var d = this.columns(b, c),
                e = this.rows(a, c),
                f, g, i, j, m, l = this.iterator("table", function(a, b) {
                    f = [];
                    g = 0;
                    for (i = e[b].length; g < i; g++) { j = 0; for (m = d[b].length; j < m; j++) f.push({ row: e[b][g], column: d[b][j] }) }
                    return f
                }, 1);
            h.extend(l.selector, { cols: b, rows: a, opts: c });
            return l
        });
        s("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(a, b, c) {
                return (a = a.aoData[b].anCells) ?
                    a[c] : k
            }, 1)
        });
        p("cells().data()", function() { return this.iterator("cell", function(a, b, c) { return B(a, b, c) }, 1) });
        s("cells().cache()", "cell().cache()", function(a) { a = "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function(b, c, d) { return b.aoData[c][a][d] }, 1) });
        s("cells().render()", "cell().render()", function(a) { return this.iterator("cell", function(b, c, d) { return B(b, c, d, a) }, 1) });
        s("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(a, b, c) {
                return {
                    row: b,
                    column: c,
                    columnVisible: ba(a, c)
                }
            }, 1)
        });
        s("cells().invalidate()", "cell().invalidate()", function(a) { return this.iterator("cell", function(b, c, d) { ea(b, c, a, d) }) });
        p("cell()", function(a, b, c) { return ab(this.cells(a, b, c)) });
        p("cell().data()", function(a) {
            var b = this.context,
                c = this[0];
            if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
            ib(b[0], c[0].row, c[0].column, a);
            ea(b[0], c[0].row, "data", c[0].column);
            return this
        });
        p("order()", function(a, b) {
            var c = this.context;
            if (a === k) return 0 !== c.length ? c[0].aaSorting :
                k;
            "number" === typeof a ? a = [
                [a, b]
            ] : h.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
            return this.iterator("table", function(b) { b.aaSorting = a.slice() })
        });
        p("order.listener()", function(a, b, c) { return this.iterator("table", function(d) { Oa(d, a, b, c) }) });
        p(["columns().order()", "column().order()"], function(a) {
            var b = this;
            return this.iterator("table", function(c, d) {
                var e = [];
                h.each(b[d], function(b, c) { e.push([c, a]) });
                c.aaSorting = e
            })
        });
        p("search()", function(a, b, c, d) {
            var e = this.context;
            return a === k ? 0 !== e.length ?
                e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) { e.oFeatures.bFilter && ha(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) })
        });
        s("columns().search()", "column().search()", function(a, b, c, d) {
            return this.iterator("column", function(e, f) {
                var g = e.aoPreSearchCols;
                if (a === k) return g[f].sSearch;
                e.oFeatures.bFilter && (h.extend(g[f], { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), ha(e,
                    e.oPreviousSearch, 1))
            })
        });
        p("state()", function() { return this.context.length ? this.context[0].oSavedState : null });
        p("state.clear()", function() { return this.iterator("table", function(a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) });
        p("state.loaded()", function() { return this.context.length ? this.context[0].oLoadedState : null });
        p("state.save()", function() { return this.iterator("table", function(a) { ya(a) }) });
        m.versionCheck = m.fnVersionCheck = function(a) {
            for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f =
                    a.length; e < f; e++)
                if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
            return !0
        };
        m.isDataTable = m.fnIsDataTable = function(a) {
            var b = h(a).get(0),
                c = !1;
            h.each(m.settings, function(a, e) {
                var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                    g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
                if (e.nTable === b || f === b || g === b) c = !0
            });
            return c
        };
        m.tables = m.fnTables = function(a) {
            var b = !1;
            h.isPlainObject(a) && (b = a.api, a = a.visible);
            var c = h.map(m.settings, function(b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable });
            return b ? new t(c) : c
        };
        m.util = { throttle: ua, escapeRegex: va };
        m.camelToHungarian = I;
        p("$()", function(a, b) {
            var c = this.rows(b).nodes(),
                c = h(c);
            return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
        });
        h.each(["on", "one", "off"], function(a, b) {
            p(b + "()", function() {
                var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt");
                var d = h(this.tables().nodes());
                d[b].apply(d, a);
                return this
            })
        });
        p("clear()", function() { return this.iterator("table", function(a) { na(a) }) });
        p("settings()", function() {
            return new t(this.context,
                this.context)
        });
        p("init()", function() { var a = this.context; return a.length ? a[0].oInit : null });
        p("data()", function() { return this.iterator("table", function(a) { return D(a.aoData, "_aData") }).flatten() });
        p("destroy()", function(a) {
            a = a || !1;
            return this.iterator("table", function(b) {
                var c = b.nTableWrapper.parentNode,
                    d = b.oClasses,
                    e = b.nTable,
                    f = b.nTBody,
                    g = b.nTHead,
                    i = b.nTFoot,
                    j = h(e),
                    f = h(f),
                    k = h(b.nTableWrapper),
                    l = h.map(b.aoData, function(a) { return a.nTr }),
                    p;
                b.bDestroying = !0;
                w(b, "aoDestroyCallback", "destroy", [b]);
                a ||
                    (new t(b)).columns().visible(!0);
                k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
                h(Fa).unbind(".DT-" + b.sInstance);
                e != g.parentNode && (j.children("thead").detach(), j.append(g));
                i && e != i.parentNode && (j.children("tfoot").detach(), j.append(i));
                b.aaSorting = [];
                b.aaSortingFixed = [];
                xa(b);
                h(l).removeClass(b.asStripeClasses.join(" "));
                h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
                b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td",
                    g).each(function() {
                    var a = h("div." + d.sSortJUIWrapper, this);
                    h(this).append(a.contents());
                    a.detach()
                }));
                f.children().detach();
                f.append(l);
                g = a ? "remove" : "detach";
                j[g]();
                k[g]();
                !a && c && (c.insertBefore(e, b.nTableReinsertBefore), j.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function(a) { h(this).addClass(b.asDestroyStripes[a % p]) }));
                c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
            })
        });
        h.each(["column", "row", "cell"], function(a, b) {
            p(b + "s().every()",
                function(a) { return this.iterator(b, function(d, e, f, g, h) { a.call((new t(d))[b](e, "cell" === b ? f : k), e, f, g, h) }) })
        });
        p("i18n()", function(a, b, c) {
            var d = this.context[0],
                a = P(a)(d.oLanguage);
            a === k && (a = b);
            c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
            return a.replace("%d", c)
        });
        m.version = "1.10.9";
        m.settings = [];
        m.models = {};
        m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 };
        m.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        };
        m.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null };
        m.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10,
                25, 50, 100
            ],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(a) { return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands) },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) {} },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(a, b) {
                try {
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
                } catch (c) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 50,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" },
                oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No se encontraron resultados"
            },
            oSearch: h.extend({}, m.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        };
        X(m.defaults);
        m.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        X(m.defaults.column);
        m.models.oSettings = {
            oFeatures: { bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null, bSortClasses: null, bStateSave: null },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: { fnInfoCallback: null },
            oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: k,
            oAjaxData: k,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() { return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length },
            fnRecordsDisplay: function() { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length },
            fnDisplayEnd: function() {
                var a = this._iDisplayLength,
                    b = this._iDisplayStart,
                    c = b + a,
                    d = this.aiDisplay.length,
                    e =
                    this.oFeatures,
                    f = e.bPaginate;
                return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        };
        m.ext = v = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            selector: { cell: [], column: [], row: [] },
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: { pageButton: {}, header: {} },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: m.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: m.version
        };
        h.extend(v, { afnFiltering: v.search, aTypes: v.type.detect, ofnSearch: v.type.search, oSort: v.type.order, afnSortData: v.order, aoFeatures: v.feature, oApi: v.internal, oStdClasses: v.classes, oPagination: v.pager });
        h.extend(m.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Ea = "",
            Ea = "",
            G = Ea + "ui-state-default",
            ka = Ea + "css_right ui-icon ui-icon-",
            Xb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        h.extend(m.ext.oJUIClasses, m.ext.classes, {
            sPageButton: "fg-button ui-button " + G,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: G + " sorting_asc",
            sSortDesc: G + " sorting_desc",
            sSortable: G + " sorting",
            sSortableAsc: G + " sorting_asc_disabled",
            sSortableDesc: G + " sorting_desc_disabled",
            sSortableNone: G + " sorting_disabled",
            sSortJUIAsc: ka + "triangle-1-n",
            sSortJUIDesc: ka + "triangle-1-s",
            sSortJUI: ka + "carat-2-n-s",
            sSortJUIAscAllowed: ka + "carat-1-n",
            sSortJUIDescAllowed: ka + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + G,
            sScrollFoot: "dataTables_scrollFoot " + G,
            sHeaderTH: G,
            sFooterTH: G,
            sJUIHeader: Xb + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Xb + " ui-corner-bl ui-corner-br"
        });
        var Mb = m.ext.pager;
        h.extend(Mb, {
            simple: function() { return ["previous", "next"] },
            full: function() { return ["first", "previous", "next", "last"] },
            numbers: function(a, b) { return [Aa(a, b)] },
            simple_numbers: function(a, b) { return ["previous", Aa(a, b), "next"] },
            full_numbers: function(a, b) {
                return ["first",
                    "previous", Aa(a, b), "next", "last"
                ]
            },
            _numbers: Aa,
            numbers_length: 7
        });
        h.extend(!0, m.ext.renderer, {
            pageButton: {
                _: function(a, b, c, d, e, f) {
                    var g = a.oClasses,
                        i = a.oLanguage.oPaginate,
                        j, k, l = 0,
                        m = function(b, d) {
                            var p, q, t, s, u = function(b) { Ta(a, b.data.action, true) };
                            p = 0;
                            for (q = d.length; p < q; p++) {
                                s = d[p];
                                if (h.isArray(s)) {
                                    t = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                    m(t, s)
                                } else {
                                    j = null;
                                    k = "";
                                    switch (s) {
                                        case "ellipsis":
                                            b.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            j = i.sFirst;
                                            k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            j = i.sPrevious;
                                            k = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            j = i.sNext;
                                            k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            j = i.sLast;
                                            k = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                            break;
                                        default:
                                            j = s + 1;
                                            k = e === s ? g.sPageButtonActive : ""
                                    }
                                    if (j !== null) {
                                        t = h("<a>", { "class": g.sPageButton + " " + k, "aria-controls": a.sTableId, "data-dt-idx": l, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null }).html(j).appendTo(b);
                                        Va(t, { action: s }, u);
                                        l++
                                    }
                                }
                            }
                        },
                        p;
                    try { p = h(b).find(T.activeElement).data("dt-idx") } catch (t) {}
                    m(h(b).empty(),
                        d);
                    p && h(b).find("[data-dt-idx=" + p + "]").focus()
                }
            }
        });
        h.extend(m.ext.type.detect, [function(a, b) { var c = b.oLanguage.sDecimal; return Ya(a, c) ? "num" + c : null }, function(a) { if (a && !(a instanceof Date) && (!ac.test(a) || !bc.test(a))) return null; var b = Date.parse(a); return null !== b && !isNaN(b) || K(a) ? "date" : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Ya(a, c, !0) ? "num-fmt" + c : null }, function(a, b) { var c = b.oLanguage.sDecimal; return Rb(a, c) ? "html-num" + c : null }, function(a, b) {
            var c = b.oLanguage.sDecimal;
            return Rb(a, c, !0) ? "html-num-fmt" + c : null
        }, function(a) { return K(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]);
        h.extend(m.ext.type.search, { html: function(a) { return K(a) ? a : "string" === typeof a ? a.replace(Ob, " ").replace(Ca, "") : "" }, string: function(a) { return K(a) ? a : "string" === typeof a ? a.replace(Ob, " ") : a } });
        var Ba = function(a, b, c, d) {
            if (0 !== a && (!a || "-" === a)) return -Infinity;
            b && (a = Qb(a, b));
            a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
            return 1 * a
        };
        h.extend(v.type.order, {
            "date-pre": function(a) {
                return Date.parse(a) ||
                    0
            },
            "html-pre": function(a) { return K(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" },
            "string-pre": function(a) { return K(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() },
            "string-asc": function(a, b) { return a < b ? -1 : a > b ? 1 : 0 },
            "string-desc": function(a, b) { return a < b ? 1 : a > b ? -1 : 0 }
        });
        cb("");
        h.extend(!0, m.ext.renderer, {
            header: {
                _: function(a, b, c, d) {
                    h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] ==
                                "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                        }
                    })
                },
                jqueryui: function(a, b, c, d) {
                    h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                    h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " +
                                d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        });
        m.render = {
            number: function(a, b, c, d, e) {
                return {
                    display: function(f) {
                        if ("number" !== typeof f && "string" !== typeof f) return f;
                        var g = 0 > f ? "-" : "",
                            f = Math.abs(parseFloat(f)),
                            h = parseInt(f, 10),
                            f = c ? b + (f - h).toFixed(c).substring(2) : "";
                        return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                    }
                }
            }
        };
        h.extend(m.ext.internal, {
            _fnExternApiFunc: Nb,
            _fnBuildAjax: ra,
            _fnAjaxUpdate: lb,
            _fnAjaxParameters: ub,
            _fnAjaxUpdateDraw: vb,
            _fnAjaxDataSrc: sa,
            _fnAddColumn: Ga,
            _fnColumnOptions: la,
            _fnAdjustColumnSizing: Y,
            _fnVisibleToColumnIndex: $,
            _fnColumnIndexToVisible: ba,
            _fnVisbleColumns: ca,
            _fnGetColumns: aa,
            _fnColumnTypes: Ia,
            _fnApplyColumnDefs: hb,
            _fnHungarianMap: X,
            _fnCamelToHungarian: I,
            _fnLanguageCompat: S,
            _fnBrowserDetect: fb,
            _fnAddData: L,
            _fnAddTr: ma,
            _fnNodeToDataIndex: function(a, b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null },
            _fnNodeToColumnIndex: function(a, b, c) { return h.inArray(c, a.aoData[b].anCells) },
            _fnGetCellData: B,
            _fnSetCellData: ib,
            _fnSplitObjNotation: La,
            _fnGetObjectDataFn: P,
            _fnSetObjectDataFn: Q,
            _fnGetDataMaster: Ma,
            _fnClearTable: na,
            _fnDeleteIndex: oa,
            _fnInvalidate: ea,
            _fnGetRowElements: Ka,
            _fnCreateTr: Ja,
            _fnBuildHead: kb,
            _fnDrawHead: ga,
            _fnDraw: M,
            _fnReDraw: R,
            _fnAddOptionsHtml: nb,
            _fnDetectHeader: fa,
            _fnGetUniqueThs: qa,
            _fnFeatureHtmlFilter: pb,
            _fnFilterComplete: ha,
            _fnFilterCustom: yb,
            _fnFilterColumn: xb,
            _fnFilter: wb,
            _fnFilterCreateSearch: Qa,
            _fnEscapeRegex: va,
            _fnFilterData: zb,
            _fnFeatureHtmlInfo: sb,
            _fnUpdateInfo: Cb,
            _fnInfoMacros: Db,
            _fnInitialise: ia,
            _fnInitComplete: ta,
            _fnLengthChange: Ra,
            _fnFeatureHtmlLength: ob,
            _fnFeatureHtmlPaginate: tb,
            _fnPageChange: Ta,
            _fnFeatureHtmlProcessing: qb,
            _fnProcessingDisplay: C,
            _fnFeatureHtmlTable: rb,
            _fnScrollDraw: Z,
            _fnApplyToChildren: H,
            _fnCalculateColumnWidths: Ha,
            _fnThrottle: ua,
            _fnConvertToWidth: Fb,
            _fnGetWidestNode: Gb,
            _fnGetMaxLenString: Hb,
            _fnStringToCss: u,
            _fnSortFlatten: V,
            _fnSort: mb,
            _fnSortAria: Jb,
            _fnSortListener: Ua,
            _fnSortAttachListener: Oa,
            _fnSortingClasses: xa,
            _fnSortData: Ib,
            _fnSaveState: ya,
            _fnLoadState: Kb,
            _fnSettingsFromNode: za,
            _fnLog: J,
            _fnMap: F,
            _fnBindAction: Va,
            _fnCallbackReg: z,
            _fnCallbackFire: w,
            _fnLengthOverflow: Sa,
            _fnRenderer: Pa,
            _fnDataSource: y,
            _fnRowAttributes: Na,
            _fnCalculateEnd: function() {}
        });
        h.fn.dataTable = m;
        h.fn.dataTableSettings = m.settings;
        h.fn.dataTableExt = m.ext;
        h.fn.DataTable = function(a) { return h(this).dataTable(a).api() };
        h.each(m, function(a, b) { h.fn.DataTable[a] = b });
        return h.fn.dataTable
    };
    "function" === typeof define && define.amd ? define("datatables", ["jquery"], S) : "object" ===
        typeof exports ? module.exports = S(require("jquery")) : jQuery && !jQuery.fn.dataTable && S(jQuery)
})(window, document);

var consulta = $("#searchTable").DataTable();

$("#inputBusqueda").keyup(function() {
    consulta.search($(this).val()).draw();

    $("header").css({
        "height": "100vh",
        "background": "rgba(0,0,0,0.5)"
    })

    if ($("#inputBusqueda").val() == "") {
        $("header").css({
            "height": "auto",
            "background": "none"
        })

        $("#search").hide()

    } else {
        $("#search").fadeIn("fast");
    }
})