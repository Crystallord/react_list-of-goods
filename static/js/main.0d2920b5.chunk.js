(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s.n(n),c=s(6),a=s(4),o=s(5),i=s(8),l=s(7),u=s(1),b=s.n(u),h=(s(13),s(0)),d=function(t){var e=t.list;return Object(h.jsx)("ul",{className:"List",children:e.map((function(t){return Object(h.jsx)("li",{className:"List__item",children:t})}))})},j=(s(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(t){Object(i.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={goodsList:j,isReversed:!1,getStart:!1,sortBy:""},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t.checkStatus=function(e){t.state.sortBy&&e.sort((function(e,s){switch(t.state.sortBy){case"alphabetically":return e.localeCompare(s);case"sortByLength":return e.length-s.length;default:return 0}})),t.state.isReversed&&e.reverse()},t.start=function(){t.setState({getStart:!0})},t}return Object(o.a)(s,[{key:"render",value:function(){var t=this,e=this.state,s=e.goodsList,n=e.getStart,r=Object(c.a)(s);return this.checkStatus(r),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:"Goods"}),!n&&Object(h.jsx)("button",{type:"button",className:"button-start",onClick:this.start,children:"Let's start!"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"goods",children:n&&Object(h.jsx)(d,{list:r})}),n&&Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsxs)("div",{className:"buttons__group",children:[Object(h.jsx)("button",{type:"button",className:"button-sort",onClick:function(){return t.setState({sortBy:"alphabetically"})},children:"Sort by alphabeticall"}),Object(h.jsx)("button",{type:"button",className:"button-sort",onClick:function(){return t.setState({sortBy:"sortByLength"})},children:"Sort by length"})]}),Object(h.jsxs)("div",{className:"buttons__group",children:[Object(h.jsx)("button",{type:"button",className:"button-reverse",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"button-reset",onClick:this.reset,children:"Reset"})]})]})]})]})}}]),s}(b.a.Component);r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d2920b5.chunk.js.map