(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2339)}])},2339:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n,i=t(5893),a=t(7294),s=t(9008);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o,l=function(e){return a.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24"},e),n||(n=a.createElement("path",{fill:"rgba(243, 193, 101, 0.7)",d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z"})))};function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var p=function(e){return a.createElement("svg",h({width:20,height:20,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},e),o||(o=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"rgba(243, 193, 101, 0.7)",d:"M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0Z"})))},d=function(){return(0,i.jsxs)("header",{className:"header",children:[(0,i.jsxs)("h1",{children:["Philip",(0,i.jsx)("br",{}),"Ghering"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"link",href:"https://www.linkedin.com/in/philip-ghering-942460115/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(l,{width:"20px",height:"20px"})}),(0,i.jsx)("a",{className:"link",href:"https://github.com/philipgher",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(p,{})})]})]})},u=t(5697),f=t.n(u),x=t(9515),v=t.n(x),j=function(e){return(Math.sin(e)+1)/2},m=function(e){var r=e.tick,t=e.driftBy,n=(0,a.useState)(600*Math.random()+300)[0],s=(0,a.useState)(600*Math.random()+300)[0],c=(0,a.useState)(110*Math.random()-20)[0],o=(0,a.useState)(110*Math.random()-20)[0],l=(0,a.useState)(15*Math.random())[0],h=.001+.02*j(r*t/10),p=300*j(r*t*l)+100;return(0,i.jsxs)("div",{className:v().cloudWrapper,children:[(0,i.jsx)("div",{className:v().cloudCirle,style:{top:"calc(-200vh + ".concat(o,"vh)"),left:"calc(-200vw + ".concat(c,"vw)"),width:"".concat(n,"px"),height:"".concat(s,"px"),boxShadow:"200vw 200vh ".concat((n+s)/4,"px 0px #fff")}}),(0,i.jsx)("svg",{width:"0",height:"0",children:(0,i.jsxs)("filter",{id:"filter",children:[(0,i.jsx)("feTurbulence",{type:"fractalNoise",baseFrequency:h,numOctaves:"10"}),(0,i.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:p})]})})]})};m.propTypes={tick:f().number.isRequired,driftBy:f().number.isRequired};var g=function(){var e=(0,a.useState)(0),r=e[0],t=e[1],n=(0,a.useCallback)((function(){t((function(e){return e+.001})),requestAnimationFrame(n)}),[]);return(0,a.useEffect)((function(){n()}),[]),(0,i.jsxs)("div",{className:v().container,children:[(0,i.jsx)(m,{tick:r,driftBy:.2}),(0,i.jsx)(m,{tick:r,driftBy:.8}),(0,i.jsx)(m,{tick:r,driftBy:1.2}),(0,i.jsx)(m,{tick:r,driftBy:1.6}),(0,i.jsx)(m,{tick:r,driftBy:2}),(0,i.jsx)(m,{tick:r,driftBy:2.4})]})};g.propTypes={};var y=g,_=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{}),(0,i.jsxs)(s.default,{children:[(0,i.jsx)("title",{children:"Philip Ghering | Portfolio"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon_128.ico"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsx)(d,{}),(0,i.jsx)("div",{className:"content-wrapper",children:(0,i.jsxs)("div",{className:"content-section",children:[(0,i.jsx)("div",{className:"notification",children:"Mainly a..."}),(0,i.jsx)("h1",{className:"main",children:"Frontend Developer"})]})}),(0,i.jsx)("div",{className:"subtext",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{children:"Hi! I am Philip, a Frontend Developer and Creative Coder. I've"}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{children:["worked on ",(0,i.jsx)("a",{href:"https://random.studio/projects/a-series-of-digital-experiments-for-space10",target:"_blank",rel:"noreferrer",children:"research"}),", ",(0,i.jsx)("a",{href:"https://augustgetty.com/",target:"_blank",rel:"noreferrer",children:"experiential"}),", ",(0,i.jsx)("a",{href:"https://cinekid-parallel-archaeologies.netlify.app/",target:"_blank",rel:"noreferrer",children:"artsy"})," and ",(0,i.jsx)("a",{href:"https://th.outlet-catalog.com/outlet/AU64/en_GB",target:"_blank",rel:"noreferrer",children:"corporate"})," projects "]}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{children:["as well as ",(0,i.jsx)("a",{href:"https://random.studio/projects/interactive-retail-fixture-for-tommy-hilfiger",target:"_blank",rel:"noreferrer",children:"interactive installations"})," and ",(0,i.jsx)("a",{href:"https://random.studio/projects/an-archival-experience-celebrating-c-p-companys-50th-anniversary",target:"_blank",rel:"noreferrer",children:"experiences"}),"."]})]})}),(0,i.jsx)("div",{className:"footer"})]})}},9515:function(e){e.exports={container:"Background_container__6fpUW",cloudWrapper:"Background_cloudWrapper___Znhm",cloudCirle:"Background_cloudCirle__FcwaI"}},9008:function(e,r,t){e.exports=t(5443)},2703:function(e,r,t){"use strict";var n=t(414);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,r,t,i,a,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,r,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[774,888,179],(function(){return r=3685,e(e.s=r);var r}));var r=e.O();_N_E=r}]);