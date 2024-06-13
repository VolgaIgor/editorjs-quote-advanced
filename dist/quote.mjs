(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.quote-adv{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.quote-adv_quote{min-height:158px;margin-bottom:10px}.quote-adv_author{display:flex;gap:10px}.quote-adv_author-inputs{flex-grow:1}.quote-adv_author-name{margin-bottom:10px}.quote-adv__image{display:flex;flex-shrink:0;border-radius:3px;overflow:hidden;width:120px;height:120px;position:relative}.quote-adv__image-picture{width:100%;height:100%;display:block;object-fit:cover;border-radius:50%}.quote-adv__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.quote-adv__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.quote-adv_quote[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.quote-adv_quote[contentEditable=true][data-placeholder]:empty:before{display:block}.quote-adv_quote[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.quote-adv_delete-button{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;background-color:#0000007f;cursor:pointer;transition:.2s;opacity:0;border-radius:50%}.quote-adv_delete-button svg{width:32px;height:32px}.quote-adv_delete-button:hover{opacity:1}.quote-adv .cdx-button{display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:14px}.quote-adv .cdx-button svg{height:26px;width:26px;margin:0}.quote-adv--empty .quote-adv__image-preloader,.quote-adv--empty .quote-adv_delete-button,.quote-adv--loading .cdx-button,.quote-adv--loading .quote-adv_delete-button,.quote-adv--filled .quote-adv__image-preloader,.quote-adv--filled .cdx-button{display:none}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>';
function k(E, u = null, d = {}) {
  const h = document.createElement(E);
  Array.isArray(u) ? h.classList.add(...u) : u && h.classList.add(u);
  for (const r in d)
    h[r] = d[r];
  return h;
}
class T {
  /**
   * @param {object} ui - Quote Advanced tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {QuoteAdvancedConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {Function} ui.onDeleteFile - callback for clicks on Delete file button
   */
  constructor({ api: u, config: d, onSelectFile: h, onDeleteFile: r }) {
    this.api = u, this.config = d, this.onSelectFile = h, this.onDeleteFile = r, this.nodes = {
      wrapper: k("div", [this.CSS.baseClass, this.CSS.wrapper]),
      quote: k("div", [this.CSS.input, this.CSS.quote], {
        contentEditable: !0
        // innerHTML: this.data.quote,
      }),
      imageContainer: k("div", [this.CSS.imageContainer]),
      imageEl: void 0,
      imagePreloader: k("div", this.CSS.imagePreloader),
      fileButton: this.createFileButton(),
      deleteButton: this.createDeleteButton(),
      authorName: k("input", [this.CSS.input, this.CSS.authorName]),
      authorInfo: k("input", [this.CSS.input, this.CSS.authorInfo])
    }, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.imageContainer.appendChild(this.nodes.fileButton), this.nodes.imageContainer.appendChild(this.nodes.deleteButton);
    let n = k("div", [this.CSS.authorInputs]);
    this.nodes.authorName.placeholder = this.config.authorNamePlaceholder, n.appendChild(this.nodes.authorName), this.nodes.authorInfo.placeholder = this.config.authorInfoPlaceholder, n.appendChild(this.nodes.authorInfo);
    let o = k("div", [this.CSS.author]);
    o.appendChild(this.nodes.imageContainer), o.appendChild(n), this.nodes.quote.dataset.placeholder = this.config.quotePlaceholder, this.nodes.wrapper.appendChild(this.nodes.quote), this.nodes.wrapper.appendChild(o);
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "quote-adv",
      quote: "quote-adv_quote",
      imageContainer: "quote-adv__image",
      imagePreloader: "quote-adv__image-preloader",
      imageEl: "quote-adv__image-picture",
      author: "quote-adv_author",
      authorInputs: "quote-adv_author-inputs",
      authorName: "quote-adv_author-name",
      authorInfo: "quote-adv_author-info",
      deleteButton: "quote-adv_delete-button"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {QuoteAdvancedToolData} toolData - saved tool data
   * @returns {Element}
   */
  render(u) {
    return !u.file || Object.keys(u.file).length === 0 ? this.toggleStatus(T.status.EMPTY) : this.toggleStatus(T.status.UPLOADING), this.nodes.wrapper;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const u = k("div", [this.CSS.button]);
    return u.innerHTML = this.config.buttonContent || `${M} ${this.api.i18n.t("Select an Image")}`, u.addEventListener("click", () => {
      this.onSelectFile();
    }), u;
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createDeleteButton() {
    const u = k("div", [this.CSS.deleteButton]);
    return u.innerHTML = q, u.addEventListener("click", () => {
      this.onDeleteFile();
    }), u;
  }
  /**
   * Shows uploading preloader
   *
   * @param {string} src - preview source
   * @returns {void}
   */
  showPreloader(u) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${u})`, this.toggleStatus(T.status.UPLOADING);
  }
  /**
   * Hide uploading preloader
   *
   * @returns {void}
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(T.status.EMPTY);
  }
  deleteImage() {
    this.nodes.imageContainer.removeChild(this.nodes.imageEl), this.nodes.imageEl = void 0, this.toggleStatus(T.status.EMPTY);
  }
  /**
   * Shows an image
   *
   * @param {string} url - image source
   * @returns {void}
   */
  fillImage(u) {
    const d = {
      src: u
    };
    let h = "load";
    this.nodes.imageEl = k("IMG", this.CSS.imageEl, d), this.nodes.imageEl.addEventListener(h, () => {
      this.toggleStatus(T.status.FILLED), this.nodes.imagePreloader && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows quote input
   *
   * @param {string} text - quote text
   * @returns {void}
   */
  fillQuote(u) {
    this.nodes.quote && (this.nodes.quote.innerHTML = u);
  }
  /**
   * Shows author name input
   *
   * @param {string} text - author name
   * @returns {void}
   */
  fillAuthorName(u) {
    this.nodes.authorName && (this.nodes.authorName.value = u);
  }
  /**
   * Shows author info input
   *
   * @param {string} text - author info
   * @returns {void}
   */
  fillAuthorInfo(u) {
    this.nodes.authorInfo && (this.nodes.authorInfo.value = u);
  }
  /**
   * Changes UI status
   *
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(u) {
    for (const d in T.status)
      Object.prototype.hasOwnProperty.call(T.status, d) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${T.status[d]}`, u === T.status[d]);
  }
}
function N(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var O = { exports: {} };
(function(E, u) {
  (function(d, h) {
    E.exports = h();
  })(window, function() {
    return function(d) {
      var h = {};
      function r(n) {
        if (h[n])
          return h[n].exports;
        var o = h[n] = { i: n, l: !1, exports: {} };
        return d[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }
      return r.m = d, r.c = h, r.d = function(n, o, l) {
        r.o(n, o) || Object.defineProperty(n, o, { enumerable: !0, get: l });
      }, r.r = function(n) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
      }, r.t = function(n, o) {
        if (1 & o && (n = r(n)), 8 & o || 4 & o && typeof n == "object" && n && n.__esModule)
          return n;
        var l = /* @__PURE__ */ Object.create(null);
        if (r.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: n }), 2 & o && typeof n != "string")
          for (var b in n)
            r.d(l, b, (function(s) {
              return n[s];
            }).bind(null, b));
        return l;
      }, r.n = function(n) {
        var o = n && n.__esModule ? function() {
          return n.default;
        } : function() {
          return n;
        };
        return r.d(o, "a", o), o;
      }, r.o = function(n, o) {
        return Object.prototype.hasOwnProperty.call(n, o);
      }, r.p = "", r(r.s = 3);
    }([function(d, h) {
      var r;
      r = function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch {
        typeof window == "object" && (r = window);
      }
      d.exports = r;
    }, function(d, h, r) {
      (function(n) {
        var o = r(2), l = setTimeout;
        function b() {
        }
        function s(e) {
          if (!(this instanceof s))
            throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, a) {
          for (; e._state === 3; )
            e = e._value;
          e._state !== 0 ? (e._handled = !0, s._immediateFn(function() {
            var i = e._state === 1 ? a.onFulfilled : a.onRejected;
            if (i !== null) {
              var g;
              try {
                g = i(e._value);
              } catch (m) {
                return void y(a.promise, m);
              }
              c(a.promise, g);
            } else
              (e._state === 1 ? c : y)(a.promise, e._value);
          })) : e._deferreds.push(a);
        }
        function c(e, a) {
          try {
            if (a === e)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (a && (typeof a == "object" || typeof a == "function")) {
              var i = a.then;
              if (a instanceof s)
                return e._state = 3, e._value = a, void v(e);
              if (typeof i == "function")
                return void t((g = i, m = a, function() {
                  g.apply(m, arguments);
                }), e);
            }
            e._state = 1, e._value = a, v(e);
          } catch (p) {
            y(e, p);
          }
          var g, m;
        }
        function y(e, a) {
          e._state = 2, e._value = a, v(e);
        }
        function v(e) {
          e._state === 2 && e._deferreds.length === 0 && s._immediateFn(function() {
            e._handled || s._unhandledRejectionFn(e._value);
          });
          for (var a = 0, i = e._deferreds.length; a < i; a++)
            f(e, e._deferreds[a]);
          e._deferreds = null;
        }
        function w(e, a, i) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof a == "function" ? a : null, this.promise = i;
        }
        function t(e, a) {
          var i = !1;
          try {
            e(function(g) {
              i || (i = !0, c(a, g));
            }, function(g) {
              i || (i = !0, y(a, g));
            });
          } catch (g) {
            if (i)
              return;
            i = !0, y(a, g);
          }
        }
        s.prototype.catch = function(e) {
          return this.then(null, e);
        }, s.prototype.then = function(e, a) {
          var i = new this.constructor(b);
          return f(this, new w(e, a, i)), i;
        }, s.prototype.finally = o.a, s.all = function(e) {
          return new s(function(a, i) {
            if (!e || e.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0)
              return a([]);
            var m = g.length;
            function p(_, S) {
              try {
                if (S && (typeof S == "object" || typeof S == "function")) {
                  var F = S.then;
                  if (typeof F == "function")
                    return void F.call(S, function(I) {
                      p(_, I);
                    }, i);
                }
                g[_] = S, --m == 0 && a(g);
              } catch (I) {
                i(I);
              }
            }
            for (var C = 0; C < g.length; C++)
              p(C, g[C]);
          });
        }, s.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === s ? e : new s(function(a) {
            a(e);
          });
        }, s.reject = function(e) {
          return new s(function(a, i) {
            i(e);
          });
        }, s.race = function(e) {
          return new s(function(a, i) {
            for (var g = 0, m = e.length; g < m; g++)
              e[g].then(a, i);
          });
        }, s._immediateFn = typeof n == "function" && function(e) {
          n(e);
        } || function(e) {
          l(e, 0);
        }, s._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, h.a = s;
      }).call(this, r(5).setImmediate);
    }, function(d, h, r) {
      h.a = function(n) {
        var o = this.constructor;
        return this.then(function(l) {
          return o.resolve(n()).then(function() {
            return l;
          });
        }, function(l) {
          return o.resolve(n()).then(function() {
            return o.reject(l);
          });
        });
      };
    }, function(d, h, r) {
      function n(t) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      r(4);
      var o, l, b, s, f, c, y, v = r(8), w = (l = function(t) {
        return new Promise(function(e, a) {
          t = s(t), (t = f(t)).beforeSend && t.beforeSend();
          var i = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          i.open(t.method, t.url), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var p = t.headers[m];
            i.setRequestHeader(m, p);
          });
          var g = t.ratio;
          i.upload.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), C = Math.ceil(p * g / 100);
            t.progress(Math.min(C, 100));
          }, !1), i.addEventListener("progress", function(m) {
            var p = Math.round(m.loaded / m.total * 100), C = Math.ceil(p * (100 - g) / 100) + g;
            t.progress(Math.min(C, 100));
          }, !1), i.onreadystatechange = function() {
            if (i.readyState === 4) {
              var m = i.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var p = v.parseHeaders(i.getAllResponseHeaders()), C = { body: m, code: i.status, headers: p };
              y(i.status) ? e(C) : a(C);
            }
          }, i.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", l(t);
      }, s = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && n(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = c(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var a = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
            }(t);
            (v.isFormData(t.data) || v.isFormElement(t.data)) && (a = o.FORM), t.data = c(t.data, a), a !== w.contentType.FORM && (t.headers["content-type"] = a);
        }
        return t;
      }, c = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return v.urlEncode(t);
          case o.JSON:
            return v.jsonEncode(t);
          case o.FORM:
            return v.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: l, get: function(t) {
        return t.method = "GET", l(t);
      }, post: b, transport: function(t) {
        return t = s(t), v.selectFiles(t).then(function(e) {
          for (var a = new FormData(), i = 0; i < e.length; i++)
            a.append(t.fieldName, e[i], e[i].name);
          v.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var p = t.data[m];
            a.append(m, p);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = a, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = s(t)).beforeSend, v.selectFiles(t);
      } });
      d.exports = w;
    }, function(d, h, r) {
      r.r(h);
      var n = r(1);
      window.Promise = window.Promise || n.a;
    }, function(d, h, r) {
      (function(n) {
        var o = n !== void 0 && n || typeof self < "u" && self || window, l = Function.prototype.apply;
        function b(s, f) {
          this._id = s, this._clearFn = f;
        }
        h.setTimeout = function() {
          return new b(l.call(setTimeout, o, arguments), clearTimeout);
        }, h.setInterval = function() {
          return new b(l.call(setInterval, o, arguments), clearInterval);
        }, h.clearTimeout = h.clearInterval = function(s) {
          s && s.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(o, this._id);
        }, h.enroll = function(s, f) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = f;
        }, h.unenroll = function(s) {
          clearTimeout(s._idleTimeoutId), s._idleTimeout = -1;
        }, h._unrefActive = h.active = function(s) {
          clearTimeout(s._idleTimeoutId);
          var f = s._idleTimeout;
          f >= 0 && (s._idleTimeoutId = setTimeout(function() {
            s._onTimeout && s._onTimeout();
          }, f));
        }, r(6), h.setImmediate = typeof self < "u" && self.setImmediate || n !== void 0 && n.setImmediate || this && this.setImmediate, h.clearImmediate = typeof self < "u" && self.clearImmediate || n !== void 0 && n.clearImmediate || this && this.clearImmediate;
      }).call(this, r(0));
    }, function(d, h, r) {
      (function(n, o) {
        (function(l, b) {
          if (!l.setImmediate) {
            var s, f, c, y, v, w = 1, t = {}, e = !1, a = l.document, i = Object.getPrototypeOf && Object.getPrototypeOf(l);
            i = i && i.setTimeout ? i : l, {}.toString.call(l.process) === "[object process]" ? s = function(p) {
              o.nextTick(function() {
                m(p);
              });
            } : function() {
              if (l.postMessage && !l.importScripts) {
                var p = !0, C = l.onmessage;
                return l.onmessage = function() {
                  p = !1;
                }, l.postMessage("", "*"), l.onmessage = C, p;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", v = function(p) {
              p.source === l && typeof p.data == "string" && p.data.indexOf(y) === 0 && m(+p.data.slice(y.length));
            }, l.addEventListener ? l.addEventListener("message", v, !1) : l.attachEvent("onmessage", v), s = function(p) {
              l.postMessage(y + p, "*");
            }) : l.MessageChannel ? ((c = new MessageChannel()).port1.onmessage = function(p) {
              m(p.data);
            }, s = function(p) {
              c.port2.postMessage(p);
            }) : a && "onreadystatechange" in a.createElement("script") ? (f = a.documentElement, s = function(p) {
              var C = a.createElement("script");
              C.onreadystatechange = function() {
                m(p), C.onreadystatechange = null, f.removeChild(C), C = null;
              }, f.appendChild(C);
            }) : s = function(p) {
              setTimeout(m, 0, p);
            }, i.setImmediate = function(p) {
              typeof p != "function" && (p = new Function("" + p));
              for (var C = new Array(arguments.length - 1), _ = 0; _ < C.length; _++)
                C[_] = arguments[_ + 1];
              var S = { callback: p, args: C };
              return t[w] = S, s(w), w++;
            }, i.clearImmediate = g;
          }
          function g(p) {
            delete t[p];
          }
          function m(p) {
            if (e)
              setTimeout(m, 0, p);
            else {
              var C = t[p];
              if (C) {
                e = !0;
                try {
                  (function(_) {
                    var S = _.callback, F = _.args;
                    switch (F.length) {
                      case 0:
                        S();
                        break;
                      case 1:
                        S(F[0]);
                        break;
                      case 2:
                        S(F[0], F[1]);
                        break;
                      case 3:
                        S(F[0], F[1], F[2]);
                        break;
                      default:
                        S.apply(b, F);
                    }
                  })(C);
                } finally {
                  g(p), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, r(0), r(7));
    }, function(d, h) {
      var r, n, o = d.exports = {};
      function l() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(i) {
        if (r === setTimeout)
          return setTimeout(i, 0);
        if ((r === l || !r) && setTimeout)
          return r = setTimeout, setTimeout(i, 0);
        try {
          return r(i, 0);
        } catch {
          try {
            return r.call(null, i, 0);
          } catch {
            return r.call(this, i, 0);
          }
        }
      }
      (function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : l;
        } catch {
          r = l;
        }
        try {
          n = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          n = b;
        }
      })();
      var f, c = [], y = !1, v = -1;
      function w() {
        y && f && (y = !1, f.length ? c = f.concat(c) : v = -1, c.length && t());
      }
      function t() {
        if (!y) {
          var i = s(w);
          y = !0;
          for (var g = c.length; g; ) {
            for (f = c, c = []; ++v < g; )
              f && f[v].run();
            v = -1, g = c.length;
          }
          f = null, y = !1, function(m) {
            if (n === clearTimeout)
              return clearTimeout(m);
            if ((n === b || !n) && clearTimeout)
              return n = clearTimeout, clearTimeout(m);
            try {
              n(m);
            } catch {
              try {
                return n.call(null, m);
              } catch {
                return n.call(this, m);
              }
            }
          }(i);
        }
      }
      function e(i, g) {
        this.fun = i, this.array = g;
      }
      function a() {
      }
      o.nextTick = function(i) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var m = 1; m < arguments.length; m++)
            g[m - 1] = arguments[m];
        c.push(new e(i, g)), c.length !== 1 || y || s(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = a, o.addListener = a, o.once = a, o.off = a, o.removeListener = a, o.removeAllListeners = a, o.emit = a, o.prependListener = a, o.prependOnceListener = a, o.listeners = function(i) {
        return [];
      }, o.binding = function(i) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function() {
        return "/";
      }, o.chdir = function(i) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function() {
        return 0;
      };
    }, function(d, h, r) {
      function n(l, b) {
        for (var s = 0; s < b.length; s++) {
          var f = b[s];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
        }
      }
      var o = r(9);
      d.exports = function() {
        function l() {
          (function(c, y) {
            if (!(c instanceof y))
              throw new TypeError("Cannot call a class as a function");
          })(this, l);
        }
        var b, s, f;
        return b = l, f = [{ key: "urlEncode", value: function(c) {
          return o(c);
        } }, { key: "jsonEncode", value: function(c) {
          return JSON.stringify(c);
        } }, { key: "formEncode", value: function(c) {
          if (this.isFormData(c))
            return c;
          if (this.isFormElement(c))
            return new FormData(c);
          if (this.isObject(c)) {
            var y = new FormData();
            return Object.keys(c).forEach(function(v) {
              var w = c[v];
              y.append(v, w);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(c) {
          return Object.prototype.toString.call(c) === "[object Object]";
        } }, { key: "isFormData", value: function(c) {
          return c instanceof FormData;
        } }, { key: "isFormElement", value: function(c) {
          return c instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, v) {
            var w = document.createElement("INPUT");
            w.type = "file", c.multiple && w.setAttribute("multiple", "multiple"), c.accept && w.setAttribute("accept", c.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(c) {
          var y = c.trim().split(/[\r\n]+/), v = {};
          return y.forEach(function(w) {
            var t = w.split(": "), e = t.shift(), a = t.join(": ");
            e && (v[e] = a);
          }), v;
        } }], (s = null) && n(b.prototype, s), f && n(b, f), l;
      }();
    }, function(d, h) {
      var r = function(o) {
        return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, n = function(o, l, b, s) {
        return l = l || null, b = b || "&", s = s || null, o ? function(f) {
          for (var c = new Array(), y = 0; y < f.length; y++)
            f[y] && c.push(f[y]);
          return c;
        }(Object.keys(o).map(function(f) {
          var c, y, v = f;
          if (s && (v = s + "[" + v + "]"), typeof o[f] == "object" && o[f] !== null)
            c = n(o[f], null, b, v);
          else {
            l && (y = v, v = !isNaN(parseFloat(y)) && isFinite(y) ? l + Number(v) : v);
            var w = o[f];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", c = r(v) + "=" + r(w);
          }
          return c;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      d.exports = n;
    }]);
  });
})(O);
var D = O.exports;
const P = /* @__PURE__ */ N(D);
function j(E) {
  return E && typeof E.then == "function";
}
class R {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   * @param {Function} params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param {Function} params.onError - callback for uploading errors
   */
  constructor({ config: u, onUpload: d, onError: h }) {
    this.config = u, this.onUpload = d, this.onError = h;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   *
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: u }) {
    const d = function(r) {
      const n = new FileReader();
      n.readAsDataURL(r), n.onload = (o) => {
        u(o.target.result);
      };
    };
    let h;
    this.config.uploader && typeof this.config.uploader.uploadByFile == "function" ? h = P.selectFiles({ accept: this.config.types }).then((r) => {
      d(r[0]);
      const n = this.config.uploader.uploadByFile(r[0]);
      return j(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
    }) : h = P.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types,
      headers: this.config.additionalRequestHeaders,
      beforeSend: (r) => {
        d(r[0]);
      },
      fieldName: this.config.field
    }).then((r) => r.body), h.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   * @param {Function} onPreview - file pasted by drag-n-drop
   */
  uploadByFile(u, { onPreview: d }) {
    const h = new FileReader();
    h.readAsDataURL(u), h.onload = (n) => {
      d(n.target.result);
    };
    let r;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      r = this.config.uploader.uploadByFile(u), j(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const n = new FormData();
      n.append(this.config.field, u), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, l]) => {
        n.append(o, l);
      }), r = P.post({
        url: this.config.endpoints.byFile,
        data: n,
        type: P.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((o) => o.body);
    }
    r.then((n) => {
      this.onUpload(n);
    }).catch((n) => {
      this.onError(n);
    });
  }
}
/**
 * Advanced Quote Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-quote-advanced}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *
 * quote: {
 *   class: QuoteAdvanced,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */
class x {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Quote"
    };
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {QuoteAdvancedToolData} tool.data - previously saved data
   * @param {QuoteAdvancedConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data: u, config: d, api: h, readOnly: r }) {
    this.api = h, this.readOnly = r, this.config = {
      endpoints: d.endpoints || "",
      additionalRequestData: d.additionalRequestData || {},
      additionalRequestHeaders: d.additionalRequestHeaders || {},
      field: d.field || "image",
      types: d.types || "image/*",
      quotePlaceholder: this.api.i18n.t(d.quotePlaceholder || "Enter quote..."),
      authorNamePlaceholder: this.api.i18n.t(d.authorNamePlaceholder || "Author name"),
      authorInfoPlaceholder: this.api.i18n.t(d.authorInfoPlaceholder || "Author summary"),
      buttonContent: d.buttonContent || "",
      uploader: d.uploader || void 0,
      actions: d.actions || []
    }, this.uploader = new R({
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new T({
      api: h,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (n) => {
            this.ui.showPreloader(n);
          }
        });
      },
      onDeleteFile: () => {
        this.image = null, this.ui.deleteImage();
      }
    }), this._data = {}, this.data = u;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !1;
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {QuoteAdvancedToolData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(u) {
    return u.quote.length !== 0;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {QuoteAdvancedToolData}
   */
  save() {
    const u = this.ui.nodes.quote, d = this.ui.nodes.authorName, h = this.ui.nodes.authorInfo;
    return this._data.quote = u.innerHTML.trim(), this._data.authorName = d.value.trim(), this._data.authorInfo = h.value.trim(), this.data;
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      quote: {
        br: !0
      },
      authorName: !0,
      authorInfo: !0
    };
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {QuoteAdvancedToolData} data - data in Quote Advanced Tool format
   */
  set data(u) {
    this.image = u.file, this._data.quote = u.quote || "", this.ui.fillQuote(this._data.quote), this._data.authorName = u.authorName || "", this.ui.fillAuthorName(this._data.authorName), this._data.authorInfo = u.authorInfo || "", this.ui.fillAuthorInfo(this._data.authorInfo);
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {QuoteAdvancedToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {object} file - uploaded file data
   */
  set image(u) {
    this._data.file = u || {}, u && u.url && this.ui.fillImage(u.url);
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(u) {
    u.success && u.file ? this.image = u.file : this.uploadingFailed("incorrect response: " + JSON.stringify(u));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(u) {
    console.log("Image Tool: uploading failed because of", u), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Show preloader and upload image file
   *
   * @param {File} file - file that is currently uploading (from paste)
   * @returns {void}
   */
  uploadFile(u) {
    this.uploader.uploadByFile(u, {
      onPreview: (d) => {
        this.ui.showPreloader(d);
      }
    });
  }
}
export {
  x as default
};
