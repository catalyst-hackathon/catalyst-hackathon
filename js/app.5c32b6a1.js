(function(t) {
  function e(e) {
    for (
      var s, r, o = e[0], c = e[1], l = e[2], d = 0, u = [];
      d < o.length;
      d++
    )
      (r = o[d]), n[r] && u.push(n[r][0]), (n[r] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    f && f(e);
    while (u.length) u.shift()();
    return i.push.apply(i, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], s = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== n[c] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = r((r.s = a[0]))));
    }
    return t;
  }
  var s = {},
    n = { app: 0 },
    i = [];
  function r(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = t),
    (r.c = s),
    (r.d = function(t, e, a) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (r.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          r.d(
            a,
            s,
            function(e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var f = c;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function(t, e, a) {
    t.exports = a("56d7");
  },
  "129b": function(t, e, a) {
    t.exports = a.p + "img/laptophappy.fc4f6a70.jpg";
  },
  "34fb": function(t, e, a) {
    t.exports = a.p + "img/nanoleaf.f5458956.png";
  },
  "56d7": function(t, e, a) {
    "use strict";
    a.r(e);
    a("744f"),
      a("6c7b"),
      a("7514"),
      a("20d6"),
      a("1c4c"),
      a("6762"),
      a("cadf"),
      a("e804"),
      a("55dd"),
      a("d04f"),
      a("c8ce"),
      a("217b"),
      a("7f7f"),
      a("f400"),
      a("7f25"),
      a("536b"),
      a("d9ab"),
      a("f9ab"),
      a("32d7"),
      a("25c9"),
      a("9f3c"),
      a("042e"),
      a("c7c6"),
      a("f4ff"),
      a("049f"),
      a("7872"),
      a("a69f"),
      a("0b21"),
      a("6c1a"),
      a("c7c62"),
      a("84b4"),
      a("c5f6"),
      a("2e37"),
      a("fca0"),
      a("7cdf"),
      a("ee1d"),
      a("b1b1"),
      a("87f3"),
      a("9278"),
      a("5df2"),
      a("04ff"),
      a("f751"),
      a("4504"),
      a("fee7"),
      a("ffc1"),
      a("0d6d"),
      a("9986"),
      a("8e6e"),
      a("25db"),
      a("e4f7"),
      a("b9a1"),
      a("64d5"),
      a("9aea"),
      a("db97"),
      a("66c8"),
      a("57f0"),
      a("165b"),
      a("456d"),
      a("cf6a"),
      a("fd24"),
      a("8615"),
      a("551c"),
      a("097d"),
      a("df1b"),
      a("2397"),
      a("88ca"),
      a("ba16"),
      a("d185"),
      a("ebde"),
      a("2d34"),
      a("f6b3"),
      a("2251"),
      a("c698"),
      a("a19f"),
      a("9253"),
      a("9275"),
      a("3b2b"),
      a("3846"),
      a("4917"),
      a("a481"),
      a("28a5"),
      a("386d"),
      a("6b54"),
      a("4f7f"),
      a("8a81"),
      a("ac4d"),
      a("8449"),
      a("9c86"),
      a("fa83"),
      a("48c0"),
      a("a032"),
      a("aef6"),
      a("d263"),
      a("6c37"),
      a("9ec8"),
      a("5695"),
      a("2fdb"),
      a("d0b0"),
      a("5df3"),
      a("b54a"),
      a("f576"),
      a("ed50"),
      a("788d"),
      a("14b9"),
      a("f386"),
      a("f559"),
      a("1448"),
      a("673e"),
      a("242a"),
      a("c66f"),
      a("b05c"),
      a("34ef"),
      a("6aa2"),
      a("15ac"),
      a("af56"),
      a("b6e4"),
      a("9c29"),
      a("63d9"),
      a("4dda"),
      a("10ad"),
      a("c02b"),
      a("4795"),
      a("130f"),
      a("ac6a"),
      a("96cf");
    var s = a("2b0e"),
      n = a("ce5b"),
      i = a.n(n);
    a("bf40");
    s["default"].use(i.a, {
      iconfont: "fa",
      theme: {
        primary: "#50428B",
        secondary: "#BA68C8",
        accent: "#E48F90",
        error: "#f44336",
        warning: "ea893d",
        info: "#50428b",
        success: "#6d9975"
      }
    });
    var r = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "v-app",
          { attrs: { light: "" } },
          [
            a(
              "v-toolbar",
              [
                a(
                  "v-toolbar-side-icon",
                  [a("v-icon", [t._v("fab fa-venus")])],
                  1
                ),
                a("v-spacer"),
                a(
                  "v-toolbar-items",
                  { staticClass: "hidden-xs-only" },
                  t._l(t.menuItems, function(e) {
                    return a(
                      "v-btn",
                      { key: e.icon, attrs: { flat: "", to: e.path } },
                      [a("v-icon", [t._v(t._s(e.icon))])],
                      1
                    );
                  }),
                  1
                )
              ],
              1
            ),
            a("v-content", [a("HelloWorld")], 1)
          ],
          1
        );
      },
      o = [],
      c = function() {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "v-app",
          { attrs: { light: "" } },
          [
            s(
              "v-content",
              [
                s(
                  "section",
                  { staticClass: "primary" },
                  [
                    s(
                      "v-container",
                      { attrs: { "grid-list-xl": "" } },
                      [
                        s(
                          "v-layout",
                          {
                            staticClass: "my-1",
                            attrs: { row: "", wrap: "", "justify-center": "" }
                          },
                          [
                            s(
                              "v-flex",
                              { attrs: { xs12: "", sm5: "" } },
                              [
                                s(
                                  "v-card",
                                  { staticClass: "elevation-0 transparent" },
                                  [
                                    s("v-card-title", {
                                      staticClass: "layout justify-center",
                                      attrs: { "primary-title": "" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            s(
                              "v-flex",
                              {
                                attrs: { xs12: "", sm5: "", "offset-sm1": "" }
                              },
                              [
                                s(
                                  "v-card",
                                  { staticClass: "elevation-0 transparent" },
                                  [
                                    s(
                                      "v-card-title",
                                      {
                                        staticClass: "layout",
                                        attrs: { "primary-title": "" }
                                      },
                                      [
                                        s(
                                          "h1",
                                          {
                                            staticClass:
                                              "white--text mb-2 display-2 text-xs-left",
                                            staticStyle: {
                                              "font-weight": "900"
                                            }
                                          },
                                          [t._v("Catalyst Hack")]
                                        )
                                      ]
                                    ),
                                    s(
                                      "div",
                                      { staticClass: "text-xs white--text" },
                                      [
                                        t._v(
                                          "Catalyst Hack is an annual event to create an inclusive, safe and exciting space for young women aged 18-25 from different\n                backgrounds to collaborate, learn, and develop their skills to create tech for good. It is entirely volunteer-led by STEM professionals and students. "
                                        )
                                      ]
                                    ),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "headline font-weight-bold white--text text-xs-center mt-4"
                                      },
                                      [
                                        t._v(
                                          "Let's change the game for women in STEM."
                                        )
                                      ]
                                    ),
                                    s(
                                      "v-card-actions",
                                      { staticClass: "justify-center" },
                                      [
                                        s(
                                          "v-btn",
                                          {
                                            staticClass: "mt-2",
                                            attrs: {
                                              color: "accent",
                                              large: "",
                                              href: "/pre-made-themes"
                                            }
                                          },
                                          [
                                            t._v(
                                              "\n                  HELP US SHAPE 2020\n                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  "section",
                  { staticClass: "secondary" },
                  [
                    s(
                      "v-container",
                      [
                        s(
                          "v-layout",
                          {
                            staticClass: "my-3",
                            attrs: { row: "", wrap: "", "justify-center": "" }
                          },
                          [
                            s("v-flex", { attrs: { xs12: "", sm5: "" } }, [
                              s(
                                "div",
                                {
                                  staticClass:
                                    "headline mb-3 text-xs white--text",
                                  staticStyle: { "font-weight": "900" }
                                },
                                [
                                  t._v(
                                    "Catalyst Hack was created for women and \n                non-binary individuals to gain confidence in their tech skills. \n                "
                                  )
                                ]
                              ),
                              s(
                                "div",
                                {
                                  staticClass:
                                    "title mb-3 mt-5 text-xs white--text"
                                },
                                [
                                  t._v(
                                    "Every hackathon we host will be:\n                "
                                  )
                                ]
                              ),
                              s("div", { staticClass: "text-xs white--text" }, [
                                s("ul", [
                                  s("li", [
                                    s("b", [t._v("Free to attend")]),
                                    t._v(
                                      " (and we will always try to offer some travel subsidy for those coming from further afield)"
                                    )
                                  ]),
                                  s("li", [
                                    s("b", [t._v("No experience required*")])
                                  ]),
                                  s("li", [
                                    s("b", [
                                      t._v(
                                        "Focused on a challenge that makes a positive difference in the world"
                                      )
                                    ])
                                  ])
                                ])
                              ]),
                              s(
                                "div",
                                {
                                  staticClass:
                                    "caption text-xs white--text mt-3"
                                },
                                [
                                  t._v(
                                    "\n            * We try our best to make our hackathons  as possible by providing mentors, \n            workshops and releasing details about the challenge in advance. However, \n            it would be wise to practice some coding in advance as we can't teach you\n             "
                                  ),
                                  s(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://www.edx.org/course/cs50s-introduction-to-computer-science"
                                      }
                                    },
                                    [t._v("computer science fundamentals")]
                                  ),
                                  t._v(
                                    " \n             and how to tackle the challenge over a weekend!\n            "
                                  )
                                ]
                              )
                            ]),
                            s(
                              "v-flex",
                              {
                                attrs: { xs12: "", sm5: "", "offset-sm1": "" }
                              },
                              [
                                s("v-img", {
                                  staticClass: "img-rounded",
                                  attrs: { src: a("129b"), height: "300" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  "section",
                  [
                    s(
                      "v-container",
                      [
                        s(
                          "v-layout",
                          {
                            staticClass: "my-3",
                            attrs: { row: "", wrap: "", "justify-center": "" }
                          },
                          [
                            s(
                              "v-flex",
                              { attrs: { xs12: "", sm5: "" } },
                              [
                                s("v-img", {
                                  staticClass: "img-rounded",
                                  attrs: { src: a("5a3f"), height: "300" }
                                })
                              ],
                              1
                            ),
                            s(
                              "v-flex",
                              {
                                attrs: { xs12: "", sm5: "", "offset-sm1": "" }
                              },
                              [
                                s(
                                  "div",
                                  { staticClass: "headline mb-3 text-xs" },
                                  [
                                    t._v(
                                      "This year we partnered with Bossa Studios and Rolls-Royce plc \n                to change the game for girls in STEM.\n               "
                                    )
                                  ]
                                ),
                                s("div", { staticClass: "mt-2" }, [
                                  s("em", [
                                    t._v(
                                      "The challenge was to design a concept for a gaming app that would inspire the next generation of girls in STEM.\n                  Over the weekend, 85 amazing hackers worked in teams to showcase and develop their novel game ideas.\n                  "
                                    ),
                                    s("p", [
                                      t._v(
                                        "Our mission started with accelerating change in closing the STEM gender gap."
                                      )
                                    ]),
                                    s("p", [
                                      t._v("The winning game was Custodian by.")
                                    ])
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    s(
                      "v-layout",
                      {
                        staticClass: "my-1",
                        attrs: { column: "", wrap: "", "align-center": "" }
                      },
                      [
                        s(
                          "v-flex",
                          { attrs: { xs12: "" } },
                          [
                            s(
                              "v-container",
                              { attrs: { "grid-list-xl": "" } },
                              [
                                s("div", { staticClass: "text-xs-center" }, [
                                  s("h2", { staticClass: "headline" }, [
                                    t._v(
                                      "Thank you to all our 2019 sponsors and partners"
                                    )
                                  ])
                                ]),
                                s(
                                  "v-layout",
                                  {
                                    attrs: {
                                      row: "",
                                      wrap: "",
                                      "justify-center": "",
                                      "align-center": ""
                                    }
                                  },
                                  [
                                    s(
                                      "v-flex",
                                      { attrs: { xs6: "", md2: "" } },
                                      [
                                        s("img", {
                                          attrs: {
                                            height: "200px",
                                            src: a("7c55")
                                          }
                                        })
                                      ]
                                    ),
                                    s(
                                      "v-flex",
                                      {
                                        attrs: { xs6: "", md2: "", "pa-1": "" }
                                      },
                                      [
                                        s("img", {
                                          attrs: {
                                            height: "100px",
                                            src: a("6a96")
                                          }
                                        })
                                      ]
                                    ),
                                    s(
                                      "v-flex",
                                      {
                                        attrs: { xs6: "", md2: "", "pa-1": "" }
                                      },
                                      [
                                        s("img", {
                                          attrs: {
                                            height: "100px",
                                            src: a("dfc1")
                                          }
                                        })
                                      ]
                                    ),
                                    s(
                                      "v-flex",
                                      {
                                        attrs: { xs6: "", md3: "", "pa-2": "" }
                                      },
                                      [
                                        s("img", {
                                          attrs: {
                                            height: "100px",
                                            src: a("bc4e")
                                          }
                                        })
                                      ]
                                    ),
                                    s(
                                      "v-flex",
                                      {
                                        attrs: { xs6: "", md3: "", "pa-2": "" }
                                      },
                                      [
                                        s("img", {
                                          attrs: {
                                            height: "50px",
                                            src: a("34fb")
                                          }
                                        })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  "section",
                  { staticClass: "secondary" },
                  [
                    s(
                      "v-container",
                      { attrs: { "grid-list-md": "" } },
                      [
                        s(
                          "v-layout",
                          { attrs: { row: "", wrap: "" } },
                          [
                            s(
                              "v-flex",
                              {
                                staticClass: "mt-5",
                                attrs: { xs12: "", "text-xs-center": "" }
                              },
                              [
                                s("div", { staticClass: "headline" }, [
                                  t._v("Want to get involved?")
                                ]),
                                s("br"),
                                s("div", [
                                  t._v(
                                    "We are currently looking for dedicated volunteers and sponsors to help us create an inspiring hack experience for 2020.\n          "
                                  )
                                ]),
                                s("div", { staticClass: "mt-2" }, [
                                  t._v(
                                    "The 2020 challenge will be around sustainability. "
                                  ),
                                  s("br"),
                                  t._v(
                                    " We are currently talking to the Woodland Trust and energy companies to explore\n            data science challenges. "
                                  )
                                ])
                              ]
                            ),
                            s(
                              "v-flex",
                              { attrs: { xs8: "", "offset-xs2": "" } },
                              [
                                s(
                                  "v-card",
                                  { staticClass: "elevation-0 transparent" },
                                  [
                                    s(
                                      "v-card-text",
                                      [
                                        t.subscribed
                                          ? t._e()
                                          : s(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                s("v-text-field", {
                                                  attrs: {
                                                    box: "",
                                                    label: "Email address",
                                                    rules: t.emailRules,
                                                    hint: "Enter your email!",
                                                    "persistent-hint": ""
                                                  },
                                                  model: {
                                                    value: t.email,
                                                    callback: function(e) {
                                                      t.email = e;
                                                    },
                                                    expression: "email"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                        t.subscribed
                                          ? t._e()
                                          : s(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                s("v-text-field", {
                                                  attrs: {
                                                    box: "",
                                                    "multi-line": "",
                                                    label: "Your message"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                        t.subscribed
                                          ? t._e()
                                          : s(
                                              "v-flex",
                                              {
                                                staticClass: "text-xs-center",
                                                attrs: { xs12: "" }
                                              },
                                              [
                                                s(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mb-5 ",
                                                    attrs: {
                                                      color: "accent",
                                                      dark: "",
                                                      large: ""
                                                    },
                                                    on: { click: t.subscribe }
                                                  },
                                                  [t._v("Get in touch")]
                                                )
                                              ],
                                              1
                                            ),
                                        t.subscribed
                                          ? s(
                                              "v-flex",
                                              {
                                                staticClass:
                                                  "text-xs-center white--text",
                                                attrs: { xs12: "" }
                                              },
                                              [
                                                t._v(
                                                  "\n                    Thanks for your message, we'll be in touch soon!\n                  "
                                                )
                                              ]
                                            )
                                          : t._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                s(
                  "v-footer",
                  { staticClass: "primary" },
                  [
                    s(
                      "v-layout",
                      { attrs: { row: "", wrap: "", "align-center": "" } },
                      [
                        s(
                          "v-flex",
                          {
                            staticClass: "text-xs-center",
                            attrs: { xs12: "" }
                          },
                          [
                            s("div", { staticClass: "white--text ml-3" }, [
                              t._v(
                                "\n              Catalyst Hack is a not-for-profit that will publicly reports accounts on an annual basis.\n            "
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        );
      },
      l = [],
      f =
        (a("39d2"),
        {
          name: "App",
          data: function() {
            return {
              title: "Catalyst Hack",
              menuItems: [
                {
                  title: "Twitter",
                  path: "https://twitter.com/catalysthack",
                  icon: "mdi-twitter"
                },
                {
                  title: "Facebook",
                  path: "https://www.facebook.com/catalysthack/",
                  icon: "mdi-facebook"
                },
                {
                  title: "Instagram",
                  path: "https://www.instagram.com/catalyst_hack/",
                  icon: "mdi-instagram"
                },
                { title: "Contact", path: "/", icon: "mdi-email" }
              ],
              imageLink: {
                sub_main:
                  "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2155&q=80",
                logo:
                  "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
                social_cover:
                  "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
              },
              email: "",
              emailRules: [
                function(t) {
                  return !!t || "E-mail is required";
                },
                function(t) {
                  return (
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t) ||
                    "E-mail must be valid"
                  );
                }
              ],
              subscribed: !1
            };
          },
          video: {
            url: "https://www.youtube.com/watch?v=OxyLk5JRiyo&app=desktop",
            previewImageSize: "hqdefault"
          },
          methods: {
            subscribe: function() {
              this.subscribed = !this.subscribed;
            }
          },
          computed: {
            imgHeight: function() {
              var t = 320;
              return (
                console.log("new image height is " + (this.pageHeight - t)),
                this.pageHeight - t
              );
            }
          },
          mounted: function() {
            this.calculateHeight();
          }
        }),
      d = f,
      u = (a("6999"), a("2877")),
      p = Object(u["a"])(d, c, l, !1, null, "7e636b02", null),
      h = p.exports,
      m = {
        name: "App",
        components: { HelloWorld: h },
        data: function() {
          return {
            title: "Catalyst Hack",
            menuItems: [
              {
                title: "Twitter",
                path: "https://twitter.com/catalysthack",
                icon: "fab fa-twitter"
              },
              {
                title: "Facebook",
                path: "https://www.facebook.com/catalysthack/",
                icon: "fab fa-facebook-square"
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/catalyst_hack/",
                icon: "fab fa-instagram"
              },
              { title: "Contact", path: "/", icon: "fa5 fa-envelope" }
            ],
            primary: "#50428B"
          };
        }
      },
      v = m,
      b = Object(u["a"])(v, r, o, !1, null, null, null),
      g = b.exports;
    (s["default"].config.productionTip = !1),
      new s["default"]({
        render: function(t) {
          return t(g);
        }
      }).$mount("#app");
  },
  "5a3f": function(t, e, a) {
    t.exports = a.p + "img/grouppic.d9908742.jpg";
  },
  6999: function(t, e, a) {
    "use strict";
    var s = a("7256"),
      n = a.n(s);
    n.a;
  },
  "6a96": function(t, e, a) {
    t.exports = a.p + "img/Goldman_Sachs.b8119631.svg";
  },
  7256: function(t, e, a) {},
  "7c55": function(t, e, a) {
    t.exports = a.p + "img/RollsRoyce.cf7c4cb3.png";
  },
  bc4e: function(t, e, a) {
    t.exports = a.p + "img/ReachRobotics.5259f255.png";
  },
  dfc1: function(t, e, a) {
    t.exports = a.p + "img/bossa.bed33c56.png";
  }
});
//# sourceMappingURL=app.5c32b6a1.js.map
