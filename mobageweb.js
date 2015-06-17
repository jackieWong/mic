function mobageweb() {
    #var T = '',
    #Bb = '" for "gwt:onLoadErrorFn"',
    #zb = '" for "gwt:onPropertyErrorFn"',
    #mb = '"><\/script>',
    #bb = '#',
    #Pb = '.cache.html',
    #db = '/',
    #pb = '//',
    #Mb = '04B12698CB7B922F74CFE651A7144FCB',
    #Ob = ':',
    #tb = '::',
    #Xb = '<script defer="defer">mobageweb.onInjectionDone(\'mobageweb\')<\/script>',
    #lb = '<script id="',
    #wb = '=',
    #cb = '?',
    #Nb = 'A1974488F4DDDD89C4791B04B6506581',
    #yb = 'Bad handler "',
    #Wb = 'DOMContentLoaded',
    #nb = 'SCRIPT',
    #kb = '__gwt_marker_mobageweb',
    #ob = 'base',
    #gb = 'baseUrl',
    #begin = 'begin',
    #W = 'bootstrap',
    #fb = 'clear.cache.gif',
    #vb = 'content',
    #ab = 'end',
    #gwt.codesvr= = 'gwt.codesvr=',
    #gwt.hosted= = 'gwt.hosted=',
    #$ = 'gwt.hybrid',
    #Qb = 'gwt/clean/clean.css',
    #Ab = 'gwt:onLoadErrorFn',
    #xb = 'gwt:onPropertyErrorFn',
    #ub = 'gwt:property',
    #Vb = 'head',
    #Kb = 'hosted.html?mobageweb',
    #Ub = 'href',
    #Cb = 'iframe',
    #eb = 'img',
    #Db = "javascript:''",
    #Rb = 'link',
    #Jb = 'loadExternalRefs',
    #qb = 'meta',
    #'mobageweb' = 'mobageweb',
    #ib = 'mobageweb.nocache.js',
    #sb = 'mobageweb::',
    #Gb = 'mobile.user.agent',
    #Hb = 'mobilesafari',
    #Fb = 'moduleRequested',
    #_ = 'moduleStartup',
    #rb = 'name',
    #Ib = 'not_mobile',
    #Eb = 'position:absolute;width:0;height:0;border:none',
    #Sb = 'rel',
    #hb = 'script',
    #Lb = 'selectingPermutation',
    #V = 'startup',
    #Tb = 'stylesheet',
    #jb = 'undefined';
    #var window = window,
    #document = document,
    o = window.__gwtStatsEvent ?
    function(a) {
        return window.__gwtStatsEvent(a)
    }: null,
    # window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null = window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
    #q,
    #r,
    s,
    #t = '',
    u = {},
    v = [],
    w = [],
    A = [],
    B = 0,
    #C,
    D;
    
    
    
    
    
    
    
    
    o && o({
        moduleName: 'mobageweb',
        sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
        subSystem: 'startup',
        evtGroup: 'bootstrap',
        millis: (new Date).getTime(),
        type: begin
    });
    
    if (!window.__gwt_stylesLoaded) {
        window.__gwt_stylesLoaded = {}
    }
    if (!window.__gwt_scriptsLoaded) {
        window.__gwt_scriptsLoaded = {}
    }
    
    function F() {
        var b = false;
        try {
            var c = window.location.search;
            return (c.indexOf('gwt.codesvr=') != -1 || (c.indexOf('gwt.hosted=') != -1 || window.external && window.external.gwtOnLoad)) && c.indexOf($) == -1
        } catch(a) {}
        F = function() {
            return b
        };
        return b
    }
    
    
    function G() {
        if (q && r) {
            var b = document.getElementById('mobageweb');
            var c = b.contentWindow;
            if (F()) {
                c.__gwt_getProperty = function(a) {
                    return L(a)
                }
            }
            mobageweb = null;
            c.gwtOnLoad(C, 'mobageweb', t, B);
            o && o({
                moduleName: 'mobageweb',
                sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
                subSystem: 'startup',
                evtGroup: 'moduleStartup',
                millis: (new Date).getTime(),
                type: 'end'
            })
        }
    }
    
    
    function H() {
        function e(a) {
            var b = a.lastIndexOf('#');
            if (b == -1) {
                b = a.length
            }
            var c = a.indexOf('?');
            if (c == -1) {
                c = a.length
            }
            var d = a.lastIndexOf('/', Math.min(c, b));
            return d >= 0 ? a.substring(0, d + 1) : ''
        }
        function f(a) {
            if (a.match(/^\w+:\/\//)) {} else {
                var b = document.createElement('img');
                b.src = a + 'clear.cache.gif';
                a = e(b.src)
            }
            return a
        }
        function g() {
            var a = J('baseUrl');
            if (a != null) {
                return a
            }
            return ''
        }
        function h() {
            var a = document.getElementsByTagName('script');
            for (var b = 0; b < a.length; ++b) {
                if (a[b].src.indexOf('mobageweb.nocache.js') != -1) {
                    return e(a[b].src)
                }
            }
            return ''
        }
        function i() {
            var a;
            if (typeof isBodyLoaded == 'undefined' || !isBodyLoaded()) {
                var b = '__gwt_marker_mobageweb';
                var c;
                document.write('<script id="' + b + '"></script>');
                c = document.getElementById(b);
                a = c && c.previousSibling;
                while (a && a.tagName != 'SCRIPT') {
                    a = a.previousSibling
                }
                if (c) {
                    c.parentNode.removeChild(c)
                }
                if (a && a.src) {
                    return e(a.src)
                }
            }
            return ''
        }
        function j() {
            var a = document.getElementsByTagName('base');
            if (a.length > 0) {
                return a[a.length - 1].href
            }
            return ''
        }
        function k() {
            var a = document.location;
            return a.href == a.protocol + '//' + a.host + a.pathname + a.search + a.hash
        }
        var l = g();
        if (l == '') {
            l = h()
        }
        if (l == '') {
            l = i()
        }
        if (l == '') {
            l = j()
        }
        if (l == '' && k()) {
            l = e(document.location.href)
        }
        l = f(l);
        t = l;
        return l
    }
  
  
  
    function I() {
        var b = document.getElementsByTagName('meta');
        for (var c = 0,
        d = b.length; c < d; ++c) {
            var e = b[c],
            f = e.getAttribute('name'),
            g;
            if (f) {
                f = f.replace('mobageweb::', '');
                if (f.indexOf('::') >= 0) {
                    continue
                }
                if (f == 'gwt:property') {
                    g = e.getAttribute('content');
                    if (g) {
                        var h, i = g.indexOf('=');
                        if (i >= 0) {
                            f = g.substring(0, i);
                            h = g.substring(i + 1)
                        } else {
                            f = g;
                            h = ''
                        }
                        u[f] = h
                    }
                } else if (f == 'gwt:onPropertyErrorFn') {
                    g = e.getAttribute('content');
                    if (g) {
                        try {
                            D = eval(g)
                        } catch(a) {
                            alert('Bad handler "' + g + '" for "gwt:onPropertyErrorFn"')
                        }
                    }
                } else if (f == 'gwt:onLoadErrorFn') {
                    g = e.getAttribute('content');
                    if (g) {
                        try {
                            C = eval(g)
                        } catch(a) {
                            alert('Bad handler "' + g + '" for "gwt:onLoadErrorFn"')
                        }
                    }
                }
            }
        }
    }
    
    
    function J(a) {
        var b = u[a];
        return b == null ? null: b
    }
    
    
    function K(a, b) {
        var c = A;
        for (var d = 0,
        e = a.length - 1; d < e; ++d) {
            c = c[a[d]] || (c[a[d]] = [])
        }
        c[a[e]] = b
    }
    
    
    function L(a) {
        var b = w[a](),
        c = v[a];
        if (b in c) {
            return b
        }
        var d = [];
        for (var e in c) {
            d[c[e]] = e
        }
        if (D) {
            D(a, d, b)
        }
        throw null
    }
    
    
    
    var M;
    function N() {
        if (!M) {
            M = true;
            var a = document.createElement('iframe');
            a.src = "javascript:''";
            a.id = 'mobageweb';
            a.style.cssText = 'position:absolute;width:0;height:0;border:none';
            a.tabIndex = -1;
            document.body.appendChild(a);
            o && o({
                moduleName: 'mobageweb',
                sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
                subSystem: 'startup',
                evtGroup: 'moduleStartup',
                millis: (new Date).getTime(),
                type: 'moduleRequested'
            });
            a.contentWindow.location.replace(t + P)
        }
    }
    
    
    
    w['mobile.user.agent'] = function() {
        return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent) ? 'mobilesafari': 'not_mobile'
    };
    v['mobile.user.agent'] = {
        mobilesafari: 0,
        not_mobile: 1
    };
    mobageweb.onScriptLoad = function() {
        if (M) {
            r = true;
            G()
        }
    };
    mobageweb.onInjectionDone = function() {
        q = true;
        o && o({
            moduleName: 'mobageweb',
            sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
            subSystem: 'startup',
            evtGroup: 'loadExternalRefs',
            millis: (new Date).getTime(),
            type: 'end'
        });
        G()
    };
    I();
    H();
    var O;
    var P;
    if (F()) {
        if (window.external && (window.external.initModule && window.external.initModule('mobageweb'))) {
            window.location.reload();
            return
        }
        P = 'hosted.html?mobageweb';
        O = ''
    }
    o && o({
        moduleName: 'mobageweb',
        sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
        subSystem: 'startup',
        evtGroup: 'bootstrap',
        millis: (new Date).getTime(),
        type: 'selectingPermutation'
    });
    if (!F()) {
        try {
            K(['mobilesafari'], '04B12698CB7B922F74CFE651A7144FCB');
            K(['not_mobile'], 'A1974488F4DDDD89C4791B04B6506581');
            O = A[L('mobile.user.agent')];
            var Q = O.indexOf(':');
            if (Q != -1) {
                B = Number(O.substring(Q + 1));
                O = O.substring(0, Q)
            }
            P = O + '.cache.html'
        } catch(a) {
            return
        }
    }
    
    
    var R;
    function S() {
        if (!s) {
            s = true;
            if (!__gwt_stylesLoaded['gwt/clean/clean.css']) {
                var a = document.createElement('link');
                __gwt_stylesLoaded['gwt/clean/clean.css'] = a;
                a.setAttribute('rel', 'stylesheet');
                a.setAttribute('href', t + 'gwt/clean/clean.css');
                document.getElementsByTagName('head')[0].appendChild(a)
            }
            G();
            if (document.removeEventListener) {
                document.removeEventListener('DOMContentLoaded', S, false)
            }
            if (R) {
                clearInterval(R)
            }
        }
    }
    
    
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded',
        function() {
            N();
            S()
        },
        false)
    }
    
    
    var R = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            N();
            S()
        }
    },
    50);
    
    
    o && o({
        moduleName: 'mobageweb',
        sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
        subSystem: 'startup',
        evtGroup: 'bootstrap',
        millis: (new Date).getTime(),
        type: 'end'
    });
    o && o({
        moduleName: 'mobageweb',
        sessionId:  window.__gwtStatsSessionId ? window.__gwtStatsSessionId: null,
        subSystem: 'startup',
        evtGroup: 'loadExternalRefs',
        millis: (new Date).getTime(),
        type: begin
    });
    document.write('<script defer="defer">mobageweb.onInjectionDone('mobageweb')</script>')
}




mobageweb();
