(this.webpackJsonpcryptodreams=this.webpackJsonpcryptodreams||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(15),a=c.n(i),s=(c(23),c(14)),l=c(6),o=c(2),r=(c(24),c(25),c(0)),j=function(){return Object(r.jsxs)("div",{className:"about-wrapper grad",children:[Object(r.jsx)("h2",{children:"About cryptoFOMO"}),Object(r.jsx)("p",{className:"about-info",children:"cryptoFOMO\u2122  is an application to determine how much you would have earned or lost if you invested in a cryptocurrency, of your choosing, over pre-determined intervals of time."})]})},A=(c(27),function(){return Object(r.jsxs)("div",{className:"contact-wrapper grad",children:[Object(r.jsx)("h2",{children:"Need to reach us?"}),Object(r.jsx)("h3",{className:"no-margin",children:"Don't bother."}),Object(r.jsx)("p",{className:"no-margin",children:"None of this is financial advice."})]})}),d=c(18),h=c(5),b=(c(28),c(29),c(30),function(e){var t=e.liveBlockDetails.symbol.toUpperCase(),c=e.sendAmount,n=e.liveBlockDetails.market_data.current_price.usd,i=e.liveBlockDetails.market_data.price_change_percentage_24h,a=e.liveBlockDetails.market_data.price_change_percentage_7d,s=e.liveBlockDetails.market_data.price_change_percentage_30d,l=e.liveBlockDetails.market_data.price_change_percentage_1y,o=(100*n/(100+i)).toFixed(20),j=(100*n/(100+a)).toFixed(20),A=(100*n/(100+s)).toFixed(20),d=(100*n/(100+l)).toFixed(20),h=(c/o).toFixed(6),b=(c/j).toFixed(6),O=(c/A).toFixed(6),m=(c/d).toFixed(6),p=(h*n).toFixed(2),u=(b*n).toFixed(2),x=(O*n).toFixed(2),g=(m*n).toFixed(2),N=[{time:"Day",gainLoss:(p-c).toFixed(2),totalValue:p,tokenAmount:h},{time:"Week",gainLoss:(u-c).toFixed(2),totalValue:u,tokenAmount:b},{time:"Month",gainLoss:(x-c).toFixed(2),totalValue:x,tokenAmount:O},{time:"Year",gainLoss:(g-c).toFixed(2),totalValue:g,tokenAmount:m}].map((function(e){return Object(r.jsxs)("div",{className:"price-block grad",children:[Object(r.jsxs)("h2",{children:[e.time," Ago"]}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("h2",{style:e.gainLoss>0?{color:"#24C7A2"}:{color:"#BC353B"},children:["$",e.gainLoss.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(r.jsx)("p",{children:e.gainLoss>0?"Gained":"Lost"})]}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsxs)("h3",{children:["$",e.totalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(r.jsx)("p",{children:"Total Worth"})]}),Object(r.jsxs)("p",{className:"tokens",children:["You would have ",e.tokenAmount," ",t]})]})}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"price-block-wrapper",children:N})})}),O=function(e){var t,c,i,a,s,l,o,j,A=Object(n.useState)(),d=Object(h.a)(A,2),O=d[0],m=d[1],p=Object(n.useState)(),u=Object(h.a)(p,2),x=u[0],g=u[1],N=Object(n.useState)({}),I=Object(h.a)(N,2),D=I[0],w=I[1];Object(n.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/".concat(e.singleCrypto)).then((function(e){return e.json()})).then((function(e){return w(e)}))}),[e.singleCrypto]),D.market_data?(c=D.market_data.current_price.usd.toFixed(2),i=D.name,a=D.market_data.market_cap.usd.toLocaleString(),s=D.symbol.toUpperCase(),t=D.image.small,l=D.market_cap_rank,o=D.market_data.ath.usd,j=D.links.homepage[0]):(c="loading",i="loading",a="loading",s="loading",t="loading",l="loading",o="loading",j="loading");var v=Object(n.useState)(!0),k=Object(h.a)(v,2),C=k[0],G=k[1],y=Object(n.useState)(!1),Q=Object(h.a)(y,2),Z=Q[0],M=Q[1];return Object(r.jsx)(r.Fragment,{children:"loading"!==i?Object(r.jsx)("div",{className:"live-section",children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"first-block",children:[Object(r.jsx)("div",{className:"live-image",children:Object(r.jsx)("a",{href:j,rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("img",{alt:"live_image",src:t})})}),Object(r.jsxs)("div",{className:"live-price-block grad",children:[Object(r.jsxs)("h1",{children:["$",c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(r.jsxs)("div",{className:"market",children:[Object(r.jsxs)("p",{className:"small-detail-info left",children:["ATH: $",o]}),Object(r.jsxs)("h3",{className:"right",children:[i," (",s,")"]})]}),Object(r.jsxs)("div",{className:"market",children:[Object(r.jsxs)("p",{className:"small-detail-info left",children:["Market Rank: #",l]}),Object(r.jsxs)("p",{className:"small-detail-info right",children:["Market Cap: $",a]})]})]})]}),Object(r.jsxs)("div",{className:"amount-input",children:[Object(r.jsx)("p",{className:"how-much",children:C?"How much did you miss out on?":"Please enter a valid number"}),Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),isNaN(O)?(M(!1),G(!1)):(g(O),M(!0),G(!0))},children:Object(r.jsx)("input",{onChange:function(e){e.preventDefault(),m(e.target.value)},value:O,type:"text",placeholder:"enter an amount"})})]}),Object(r.jsx)("div",{children:Z?Object(r.jsx)(b,{sendAmount:x,liveBlockDetails:D}):""})]})}):""})},m=(c(31),function(e){var t=e.coinList.filter((function(e){return"btc"===e.symbol||"eth"===e.symbol||"sol"===e.symbol||"ada"===e.symbol||"dot"===e.symbol})).map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(l.b,{to:"/"+e.id,children:[Object(r.jsx)("img",{src:e.image.small,alt:e.id}),Object(r.jsx)("span",{className:"sidebar-sym",children:e.symbol.toUpperCase()})]})})})),c=e.validCrypto.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(l.b,{to:"/"+e.id,children:[Object(r.jsx)("img",{src:e.image.small,alt:e.id}),Object(r.jsx)("span",{className:"sidebar-sym",children:e.symbol.toUpperCase()})]})})}));return Object(r.jsxs)("div",{className:"sidebar",children:[Object(r.jsx)("div",{className:"side-center",children:Object(r.jsxs)("ul",{children:[t,c,Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:"addCrypto grad",onClick:e.handleAddCrypto,children:e.searchCrypto?"-":"+"})})]})}),e.searchCrypto?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:e.handleSubmitCrypto,children:[Object(r.jsx)("p",{className:"check-coin",children:e.searchError?"Please check your spelling":"Which cryptocurrency would you like to check?"}),Object(r.jsx)("input",{onChange:e.handleCryptoChange,value:e.inputCrypto,type:"text",placeholder:"enter a cryptocurrency"})]})}):""]})}),p=function(e){var t=Object(o.e)().sym,c=Object(n.useState)([]),i=Object(h.a)(c,2),a=i[0],s=i[1];Object(n.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var l=t,j=Object(n.useState)(),A=Object(h.a)(j,2),b=A[0],p=A[1],u=Object(n.useState)(!1),x=Object(h.a)(u,2),g=x[0],N=x[1],I=Object(n.useState)([]),D=Object(h.a)(I,2),w=D[0],v=D[1],k=Object(n.useState)(!1),C=Object(h.a)(k,2),G=C[0],y=C[1],Q=function(e){fetch("https://api.coingecko.com/api/v3/coins/".concat(e)).then((function(e){return e.json()})).then((function(e){e.error?y(!0):(v([].concat(Object(d.a)(w),[e])),y(!1))})).catch((function(){return v(!1)}))};return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(m,{sym:t,searchError:G,validCrypto:w,coinList:a,inputCrypto:b,searchCrypto:g,handleAddCrypto:function(e){e.preventDefault(),N(!g)},handleCryptoChange:function(e){e.preventDefault(),p(e.target.value)},handleSubmitCrypto:function(e){e.preventDefault(),Q(b.toLowerCase()),p("")}}),Object(r.jsx)(O,{singleCrypto:l,handleMoney:e.handleMoney})]})},u=(c(40),function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("section",{className:"foot-nav-wrapper",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/about",children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/contact",children:"Contact"})})]})}),Object(r.jsx)("section",{children:Object(r.jsxs)("div",{className:"social-pack",children:[Object(r.jsx)("a",{href:"https://www.instagram.com/marcopenajoia",rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("img",{className:"social",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTA4VDE5OjAxOjU1LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0wOFQxOTowNToxMC0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0wOFQxOTowNToxMC0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEb3QgR2FpbiAyMCUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUwZGE2NjUtNDgzZi00OWY4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",alt:"IG"})}),Object(r.jsx)("a",{href:"http://www.linkedin.com/in/mpenajoia",rel:"noopener noreferrer",target:"_blank",children:Object(r.jsx)("img",{className:"social",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuZGFiYWNiYiwgMjAyMS8wNC8xNC0wMDozOTo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjUgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTA4VDE5OjAyOjA1LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0wOFQxOTowNTozNC0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0wOFQxOTowNTozNC0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTU5ZDQ2ZC1jOWMwLTQ1OTUtODFiZC1lNTBkZDE0NDcxYzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NWU1OWQ0NmQtYzljMC00NTk1LTgxYmQtZTUwZGQxNDQ3MWM4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NWU1OWQ0NmQtYzljMC00NTk1LTgxYmQtZTUwZGQxNDQ3MWM4Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZTU5ZDQ2ZC1jOWMwLTQ1OTUtODFiZC1lNTBkZDE0NDcxYzgiIHN0RXZ0OndoZW49IjIwMjEtMTAtMDhUMTk6MDI6MDUtMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChNYWNpbnRvc2gpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrP+UFIAAAPFSURBVHic7dzPi01hHMfx9zUYUij5UZIoNopk4Q+wUPwFVlOUsmCjxEbZUxLrKStZWLFVmo3VLGw0WUmNDCnyY2JmrsUj1+i69zkz55znee7n81ppnHvn25z3Pffe59xzO91uF9O1JvUAlpYDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMStTT3APy4DV4AtQCfxLHVbAj4CF4FHiWf5o5PRl0S9A3akHqIlL4AjqYeAfJ4CptDZ+QCHgTuph4B8jgBLjN4hf5ifwPrUQ+QSQBZDJJA8+lyeAiwRByDOAYhzAOIcgLiSA1gCFlMPUboSA5gkvH0aIyxld4CrhCCsopLWAbrAZuDLgG0WCGGUwusAFdxm8M4HONXCHCOlpCNA7KNlkXLC9hEgUpXn9/nGphhBpQRQZc51jU0xgkoJAOB05HYOoIKSXgP8AMaHbPMB2Lb6cVrj1wAVrAe+8v9z6HOUtfOzUNIR4G/fgbe//70T2FTvOK1JfgQoNYBRkTyAkp4CrAG5fSw8VwuEtYg1hKXm5I/cupQUwBzwdMg2x4F9fX4+GXH/Eyw/Ir4Gzg74nfeAcwx/Z5K1kl4DPADODNnmOnCjz89jHrHzhJ25AOwFZiNuA+FilpuR265krkb5NcBy84SFpNidD3CLcE1DkaejHUDPBmDjCm/7HthT4yytcQD1mQXupx6iKgdQrwkKW9NwAPV7lnqAKhxAfzOED5Z0Ce8Knle47flGJmqIA1juAGGnH6T3txkjrC/EftDkVQNzNcYBLDcz4P/GgceR9/O9hlla4QB6HjJ8YeZk5H19W+UsrXEAPScitoldOh/26eVsOICe2EWg7RHbfFrNIG1yAD2xf4vdjU7RMgdQXdFn//7lAMQ5AHEOQJwDEOcAxDkAcQ5AnAMQ5wDEOQBxDkCcAxDnAMSVdGnYZ+DlkG320/98/XTE/R8l7lKtN4QLQQY5RNxZw+SXhpUUwChKHoCfAsQ5AHEOQJwDEOcAxOUSgOK7gJ+pB4B8AphKPUACd1MPAPmsA0D44sddqYdoyTRwLPUQkFcAAJeAa8BW8jk61WWR8F3GF4AniWf5I7cArGWj9iizihyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGIcwDiHIA4ByDOAYhzAOIcgDgHIM4BiHMA4hyAOAcgzgGI+wWg2oZkywptegAAAABJRU5ErkJggg==",alt:"LI"})})]})}),Object(r.jsx)("p",{className:"copy",children:"\xa9 2021 All rights and all lefts reserved."})]})}),x=(c(41),function(){return Object(r.jsx)("div",{className:"intro-wrapper",children:Object(r.jsx)("h2",{children:"Select a cryptocurrency to begin."})})});var g=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("nav",{children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:"cryptoFOMO"})})})}),Object(r.jsxs)("main",{children:[Object(r.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(p,Object(s.a)({},e))}}),Object(r.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(r.jsx)(o.a,{exact:!0,path:"/:sym",render:function(e){return Object(r.jsx)(p,Object(s.a)({},e))}}),Object(r.jsx)(o.a,{exact:!0,path:"/about",component:j}),Object(r.jsx)(o.a,{exact:!0,path:"/contact",component:A})]}),Object(r.jsx)(u,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};a.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),N()}},[[42,1,2]]]);
//# sourceMappingURL=main.66c86f0e.chunk.js.map