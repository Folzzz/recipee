(this.webpackJsonprecipeee=this.webpackJsonprecipeee||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),i=t(2),s=t.n(i),u=t(5),m=t(1),o=(t(12),t(13),t(14),t(15),function(e){var a=e.open;return c.a.createElement("ul",{className:"".concat(a?"show":""," nav-ul")},c.a.createElement("li",null,"Home"),c.a.createElement("li",null,"About"),c.a.createElement("li",null,"User-Guide"))}),p=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],r=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(t?"burger-active":""," burger-div"),onClick:function(){return r(!t)}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement(o,{open:t}))},E=function(){return c.a.createElement("header",{className:"header-div"},c.a.createElement("div",null,c.a.createElement("h4",{className:"brand"},c.a.createElement("a",{href:"/"},"The Recipee"))),c.a.createElement(p,null))},d=(t(16),function(e){var a=e.searchRecipe,t=Object(n.useState)(""),r=Object(m.a)(t,2),l=r[0],i=r[1];return c.a.createElement("div",{className:"searchbar-div"},c.a.createElement("form",{className:"searchbar-form",onSubmit:function(e){e.preventDefault(),a(l),i("")}},c.a.createElement("div",{className:"searchbar"},c.a.createElement("input",{type:"text",className:"searchbar-input",onChange:function(e){i(e.target.value)},placeholder:"search for recipe"}),c.a.createElement("button",{type:"submit",className:"searchbar-button"},"Search"))))}),f=(t(17),function(){return c.a.createElement("div",{className:"loader-div"},c.a.createElement("h1",null,"Please wait a min..."),c.a.createElement("div",{className:"loader"}))}),h=(t(18),function(e){var a=e.recipe;return c.a.createElement("div",{className:"recipe-card-div"},c.a.createElement("div",null,c.a.createElement("img",{src:a.image,alt:"chicken recipe",className:"recipe-image"}),c.a.createElement("div",{className:"recipe-card-content"},c.a.createElement("h1",{className:"recipe-title"},a.label),c.a.createElement("p",{className:"recipe-details"},"Calories: ",Math.round(a.calories),"kcal"),c.a.createElement("p",{className:"recipe-details"},"Diet:",a.dietLabels.map((function(e,a){return c.a.createElement("span",{key:a}," ",e)}))),c.a.createElement("ul",{className:"recipe-ingre"},c.a.createElement("p",null,"Ingredients"),a.ingredients.map((function(e,a){return c.a.createElement("li",{key:a},e.text)}))))))}),v=(t(19),function(){return c.a.createElement("footer",{className:"footer-div"},c.a.createElement("p",null,"Created with React by Folu\u2764 "))});var b=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],p=i[1],b=Object(n.useState)("chicken"),N=Object(m.a)(b,2),g=N[0],j=N[1],k="".concat("https://cors-anywhere.herokuapp.com/","api.edamam.com/search?q=").concat(g,"&app_id=").concat("f83c5601","&app_key=").concat("e90210dc78c86acc61471c6bcb6b1bb3","&from=0&to=30"),y=function(){var e=Object(u.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k);case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,console.log(t),t.more?r(t.hits):r([]),p(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[g]),c.a.createElement("div",{className:"container"},c.a.createElement(E,null),c.a.createElement(d,{searchRecipe:function(e){j(e)}}),c.a.createElement("div",{className:"intro"},c.a.createElement("p",null,c.a.createElement("span",{className:"recipe"},"The Recipee")," helps you get recipe for your favourite dish"),c.a.createElement("h3",null,"Recipes for ",g)),!o&&0===t.length&&c.a.createElement("h1",null,"No Recipe Found..."),o?c.a.createElement(f,null):c.a.createElement("div",{className:"recipe-card"},t?t.map((function(e,a){return c.a.createElement(h,{key:a,recipe:e.recipe})})):"page not loading..."),c.a.createElement(v,null))};l.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.9873077a.chunk.js.map