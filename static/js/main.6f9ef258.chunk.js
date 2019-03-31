(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},23:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(6),i=t.n(a),c=(t(23),t(1)),u=t(2),l=t(4),s=t(3),f=t(5),d=t(12),m=t(7),g=t(8);function v(){var n=Object(m.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-rows: ",";\n  grid-auto-columns: ",';\n  justify-content: center;\n  align-items: center;\n\n  position: relative;\n  width: 500px;\n  margin: 10vh auto;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);\n\n  &:before {\n    content: "";\n    position: absolute;\n    pointer-events: none;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url("/img/bg.png");\n    opacity: 0.35;\n  }\n']);return v=function(){return n},n}var p=g.a.div(v(),function(n){return"repeat(".concat(n.rows,", ").concat(500/n.rows,"px)")},function(n){return"".concat(500/n.rows,"px")});function h(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-self: center;\n  align-self: center;\n  height: 100%;\n  width: 100%;\n  border: ",";\n  cursor: pointer;\n  user-select: none;\n\n  transition: background-color 0.3s;\n\n  &.land {\n    background-color: #4caf50;\n\n    &:hover {\n      background-color: #bdbdbd;\n      transition: background-color 0.05s;\n    }\n  }\n  &.empty {\n    background-color: #795548;\n  }\n  &.mine {\n    background-color: #ffffff;\n  }\n  &.num-1 {\n    background-color: #8bc34a;\n  }\n  &.num-2 {\n    background-color: #cddc39;\n  }\n  &.num-3 {\n    background-color: #ffeb3b;\n  }\n  &.num-4 {\n    background-color: #ffc107;\n  }\n  &.num-5 {\n    background-color: #ff9800;\n  }\n  &.num-6 {\n    background-color: #ff5722;\n  }\n  &.num-7 {\n    background-color: #e91e63;\n  }\n  &.num-8 {\n    background-color: #673ab7;\n    color: white;\n  }\n"]);return h=function(){return n},n}var b=g.a.div(h(),function(n){return n.revealed?"none":"1px dashed #6fbd73"}),C=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(l.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(o)))).state={flag:!1},t.handleFlag=function(n){var e=t.props,r=e.handleFlagCount,o=e.flagCount,a=e.mineAmount,i=t.state.flag;n.preventDefault(),!i&&o>=a||t.setState(function(n){return{flag:!n.flag}},r(i))},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state.flag,e=this.props,t=e.revealed,r=e.mine,a=e.handleCellClick,i=e.mineCount,c=e.x,u=e.y,l="land";return t&&(l=r?"mine":i>0?"num-".concat(i):"empty"),o.a.createElement(b,{revealed:t,mine:r,isNumber:i>0,className:l,onClick:function(){return a(c,u)},onContextMenu:this.handleFlag},n?"\ud83c\udff3":t?r?"\ud83d\udc7b":0===i?"":i:"")}}]),e}(r.PureComponent),w=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(l.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(a)))).state={grid:[],mineAmount:t.props.mineAmount,cols:t.props.cols,rows:t.props.rows},t.make2DArray=function(n,e){for(var t=new Array(n),r=0;r<t.length;r++)t[r]=new Array(e);return t},t.generateGrid=function(){for(var n=t.state,e=n.cols,r=n.rows,o=n.mineAmount,a=t.make2DArray(e,r),i=[],c=0;c<e;c++)for(var u=0;u<r;u++){var l=c,s=u;i.push([l,s]),a[l][s]={key:u+l*e,revealed:!1,mine:!1,mineCount:0,x:l,y:s}}var f=t.placeMines(o,a,i),d=t.countMines(f);t.setState({grid:d})},t.placeMines=function(n,e,t){for(var r=e,o=0;o<n;o++){var a=Math.floor(Math.random()*t.length),i=t[a],c=i[0],u=i[1];r[c][u].mine=!0,t.splice(a,1)}return r},t.countMines=function(n){for(var e=t.props,r=e.cols,o=e.rows,a=0;a<r;a++)for(var i=0;i<o;i++){var c=a,u=i;if(n[c][u].mine)n[c][u].mineCount=-1;else{for(var l=0,s=-1;s<=1;s++)for(var f=-1;f<=1;f++){if(c+s>-1&&c+s<r&&u+f>-1&&u+f<o)n[c+s][u+f].mine&&l++}n[c][u].mineCount=l}}return n},t.handleCellClick=function(n,e){var r,o=t.state.grid;if(!o[n][e].revealed)return o[n][e].mine&&t.gameOver(),0===o[n][e].mineCount?t.revealNeighbor(o,n,e):((r=o)[n][e].revealed=!0,t.setState({grid:Object(d.a)(r)}))},t.gameOver=function(){var n=t.state.grid.map(function(n){return n.map(function(n){return n.revealed=!0})});t.setState({grid:n})},t.revealNeighbor=function(n,e,r){for(var o=t.props,a=o.cols,i=o.rows,c=function(o){for(var c=function(c){if(e+o>-1&&e+o<a&&r+c>-1&&r+c<i){var u=n[e+o][r+c];u.revealed||u.mine||(u.revealed=!0,0===u.mineCount&&setTimeout(function(){t.revealNeighbor(n,e+o,r+c)},150))}},u=-1;u<=1;u++)c(u)},u=-1;u<=1;u++)c(u);return t.setState({grid:Object(d.a)(n)})},t.renderGrid=function(){var n=t.state.grid,e=t.props,r=e.handleFlagCount,a=e.flagCount,i=e.mineAmount;if(0!==n.length)return n.map(function(n){return n.map(function(n){return o.a.createElement(C,{key:n.key,x:n.x,y:n.y,mine:n.mine,mineCount:n.mineCount,revealed:n.revealed,handleCellClick:t.handleCellClick,handleFlagCount:r,flagCount:a,mineAmount:i})})})},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.generateGrid()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var n=this.state,e=n.grid,t=n.cols,r=n.rows;return o.a.createElement(p,{onClick:this.handleClick,cols:t,rows:r},e&&this.renderGrid())}}]),e}(o.a.PureComponent),k=function(n){var e=n.flagCount;return o.a.createElement("div",null,e)},y=function(n){function e(){var n,t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(l.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(o)))).state={mineAmount:10,flagCount:0,cols:20,rows:20},t.handleFlagCount=function(n){var e=t.state.flagCount;n?e--:e++,t.setState({flagCount:e})},t}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state,e=n.cols,t=n.rows,r=n.flagCount,a=n.mineAmount;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{mineAmount:a,flagCount:r}),o.a.createElement(w,{flagCount:r,handleFlagCount:this.handleFlagCount,cols:e,rows:t,mineAmount:a}))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.6f9ef258.chunk.js.map