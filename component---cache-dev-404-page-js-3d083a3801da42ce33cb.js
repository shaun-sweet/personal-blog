webpackJsonp([63035248922600],{596:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(1),c=n(u),i=a(56),p=n(i),s=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.location.pathname,t=void 0;return t="/"===e?"src/pages/index.js":"/"===e.slice(-1)?"src/pages"+e.slice(0,-1)+".js":"src/pages"+e+".js",c.default.createElement("div",null,c.default.createElement("h1",null,"Gatsby.js development 404 page"),c.default.createElement("p",null,"There's not a page yet at ",c.default.createElement("code",null,e)),c.default.createElement("p",null,"Create a React.js component in your site directory at"," ",c.default.createElement("code",null,t)," ","and this page will automatically refresh to show the new page component you created."),this.props.data.allSitePage&&this.props.data.allSitePage.totalCount>1&&c.default.createElement("div",null,c.default.createElement("p",null,"If you were trying to reach another page, perhaps you can find it below."),c.default.createElement("h2",null,"Pages (",this.props.data.allSitePage.totalCount,")"),c.default.createElement("ul",null,this.props.data.allSitePage.edges.map(function(e){var t=e.node;return c.default.createElement("li",{key:t.path},c.default.createElement(p.default,{to:t.path},t.path))}))))},t}(c.default.Component);s.propTypes={data:function(){},location:function(){}},t.default=s;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---cache-dev-404-page-js-3d083a3801da42ce33cb.js.map