﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  CKEDITOR.plugins.add("embedbase", {
    lang: "cs,da,de,en,eo,fr,gl,it,ko,ku,nb,nl,pl,pt-br,ru,sv,tr,zh,zh-cn",
    requires: "widget,notificationaggregator",
    onLoad: function () {
      CKEDITOR._.jsonpCallbacks = {};
    },
    init: function () {
      CKEDITOR.dialog.add("embedBase", this.path + "dialogs/embedbase.js");
    },
  });
  var j = {
    _attachScript: function (e, c) {
      var d = new CKEDITOR.dom.element("script");
      d.setAttribute("src", e);
      d.on("error", c);
      CKEDITOR.document.getBody().append(d);
      return d;
    },
    sendRequest: function (e, c, d, a) {
      function b() {
        g && (g.remove(), delete CKEDITOR._.jsonpCallbacks[h], (g = null));
      }
      var i = {},
        c = c || {},
        h = CKEDITOR.tools.getNextNumber(),
        g;
      c.callback = "CKEDITOR._.jsonpCallbacks[" + h + "]";
      CKEDITOR._.jsonpCallbacks[h] = function (a) {
        setTimeout(function () {
          b();
          d(a);
        });
      };
      g = this._attachScript(e.output(c), function () {
        b();
        a && a();
      });
      i.cancel = b;
      return i;
    },
  };
  CKEDITOR.plugins.embedBase = {
    createWidgetBaseDefinition: function (e) {
      var c,
        d = e.lang.embedbase;
      return {
        mask: !0,
        template: "<div></div>",
        pathName: d.pathName,
        _cache: {},
        urlRegExp: /^((https?:)?\/\/|www\.)/i,
        init: function () {
          this.on(
            "sendRequest",
            function (a) {
              this._sendRequest(a.data);
            },
            this,
            null,
            999
          );
          this.on(
            "dialog",
            function (a) {
              a.data.widget = this;
            },
            this
          );
          this.on(
            "handleResponse",
            function (a) {
              if (!a.data.html) {
                var b = this._responseToHtml(a.data.url, a.data.response);
                null !== b
                  ? (a.data.html = b)
                  : ((a.data.errorMessage = "unsupportedUrl"), a.cancel());
              }
            },
            this,
            null,
            999
          );
        },
        loadContent: function (a, b) {
          function c(e) {
            f.response = e;
            d.editor.widgets.instances[d.id]
              ? d._handleResponse(f) &&
                (d._cacheResponse(a, e), b.callback && b.callback())
              : f.task && f.task.done();
          }
          var b = b || {},
            d = this,
            e = this._getCachedResponse(a),
            f = {
              noNotifications: b.noNotifications,
              url: a,
              callback: c,
              errorCallback: function (a) {
                d._handleError(f, a);
                b.errorCallback && b.errorCallback(a);
              },
            };
          if (e)
            setTimeout(function () {
              c(e);
            });
          else
            return (
              b.noNotifications || (f.task = this._createTask()),
              this.fire("sendRequest", f),
              f
            );
        },
        isUrlValid: function (a) {
          return this.urlRegExp.test(a) && !1 !== this.fire("validateUrl", a);
        },
        getErrorMessage: function (a, b, c) {
          (c = e.lang.embedbase[a + (c || "")]) || (c = a);
          return new CKEDITOR.template(c).output({ url: b || "" });
        },
        _sendRequest: function (a) {
          var b = this,
            c = j.sendRequest(
              this.providerUrl,
              { url: encodeURIComponent(a.url) },
              a.callback,
              function () {
                a.errorCallback("fetchingFailed");
              }
            );
          a.cancel = function () {
            c.cancel();
            b.fire("requestCanceled", a);
          };
        },
        _handleResponse: function (a) {
          var b = { url: a.url, html: "", response: a.response };
          if (!1 !== this.fire("handleResponse", b))
            return a.task && a.task.done(), this._setContent(a.url, b.html), !0;
          a.errorCallback(b.errorMessage);
          return !1;
        },
        _handleError: function (a, b) {
          a.task &&
            (a.task.cancel(),
            a.noNotifications ||
              e.showNotification(this.getErrorMessage(b, a.url), "warning"));
        },
        _responseToHtml: function (a, b) {
          return "photo" == b.type
            ? '<img src="' +
                CKEDITOR.tools.htmlEncodeAttr(b.url) +
                '" alt="' +
                CKEDITOR.tools.htmlEncodeAttr(b.title || "") +
                '" style="max-width:100%;height:auto" />'
            : "video" == b.type || "rich" == b.type
            ? `<video>
                <source style="max-width:100%;height:auto" src=${CKEDITOR.tools.htmlEncodeAttr(b.url)} type="video/mp4"></source>
              </video>`
            : null;
        },
        _setContent: function (a, b) {
          this.setData("url", a);
          this.element.setHtml(b);
        },
        _createTask: function () {
          if (!c || c.isFinished())
            (c = new CKEDITOR.plugins.notificationAggregator(
              e,
              d.fetchingMany,
              d.fetchingOne
            )),
              c.on("finished", function () {
                c.notification.hide();
              });
          return c.createTask();
        },
        _cacheResponse: function (a, b) {
          this._cache[a] = b;
        },
        _getCachedResponse: function (a) {
          return this._cache[a];
        },
      };
    },
    _jsonp: j,
  };
})();
