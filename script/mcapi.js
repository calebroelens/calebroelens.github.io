(function () {
    var f, g;
    f = function () {
        function a() {
        }

        a.prototype.f = function (a) {
            var c, b;
            c = [];
            for (b in a) void 0 !== a[b] && a.hasOwnProperty(b) && c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a[b]));
            return "?" + c.join("&")
        };
        a.prototype.a = function (a, c, b) {
            var d;
            "function" === typeof c && (b = c, c = {});
            c = this.f(c);
            d = new XMLHttpRequest;
            d.onerror = function () {
                b(!0)
            };
            d.onload = function () {
                var a;
                try {
                    a = JSON.parse(d.responseText)
                } catch (c) {
                    return b(c)
                }
                if ("error" === a.status) return b(a.error);
                b(void 0, a)
            };
            d.open("GET", "https://mcapi.us" +
                a + c, !0);
            d.send()
        };
        return a
    }();
    g = function () {
        function a() {
        }

        var e;
        e = new f;
        a.prototype.c = function (a, b, d) {
            "function" === typeof b && (d = b, b = {});
            b.ip = a;
            e.a("/server/status", b, d)
        };
        a.prototype.getServerStatus = a.prototype.c;
        a.prototype.b = function (a, b, d) {
            "function" === typeof b && (d = b, b = {});
            b.ip = a;
            e.a("/server/query", b, d)
        };
        a.prototype.getServerQuery = a.prototype.b;
        return a
    }();
    window.MinecraftAPI = new g
})();
