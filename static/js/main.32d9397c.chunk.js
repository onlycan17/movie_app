(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(3),n=s.n(i),r=s(14),c=s.n(r),o=s(5),d=s.n(o),m=s(15),l=s(16),u=s(17),j=s(20),g=s(19),v=s(18),b=s.n(v),p=s(2),h=s.n(p);s(47);function y(e){e.id;var t=e.year,s=e.title,i=e.summary,n=e.poster,r=e.genres;return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:n,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie__title",children:s}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summery",children:[i.slice(0,180),"..."]})]})]})}y.prototype={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var O=y,f=(s(48),function(e){Object(j.a)(s,e);var t=Object(g.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(d.a.mark((function t(){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e.getLoading=function(){return Object(a.jsxs)("div",{className:"loader",children:[Object(a.jsx)("span",{className:"loader__text",children:"Loading..."}),Object(a.jsx)("img",{src:"https://devtalk.kakao.com/uploads/default/original/2X/8/8d3426581b592b46157de64b919d4378b504d346.gif",alt:"Loading"})]})},e.getReady=function(e){return Object(a.jsx)("div",{className:"movies",children:e.map((function(e){return Object(a.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?this.getLoading():this.getReady(s)})}}]),s}(n.a.Component));c.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.32d9397c.chunk.js.map