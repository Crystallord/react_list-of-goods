(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),o=n(6),i=n(4),c=n(5),a=n(8),l=n(7),u=n(1),h=n.n(u),b=n(0),p=function(t){var e=t.list;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{children:t})}))})},j=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),d=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={goodsList:j,isReversed:!1,getStart:!1,isSortByAlph:!1,isSortByLength:!1},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlph=function(){t.setState((function(t){return{isSortByAlph:!t.isSortByAlph}}))},t.sortByLength=function(){t.setState((function(t){return{isSortByLength:!t.isSortByLength}}))},t.reset=function(){t.setState({isReversed:!1,isSortByAlph:!1})},t.start=function(){t.setState({getStart:!0})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goodsList,n=t.getStart,r=t.isReversed,s=t.isSortByAlph,i=t.isSortByLength,c=Object(o.a)(e);return r&&c.reverse(),s&&c.sort((function(t,e){return t.localeCompare(e)})),i&&c.sort((function(t,e){return t.length-e.length})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),Object(b.jsx)("button",{type:"button",onClick:this.start,children:"Start"}),Object(b.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:this.sortByAlph,children:"Sort by alphabeticall"}),Object(b.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"btn btn-start",onClick:this.reset,children:"Reset"}),n&&Object(b.jsx)(p,{list:c})]})}}]),n}(h.a.Component);s.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d486c863.chunk.js.map