(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var n={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},r={duration:.5,overwrite:!1,delay:0},i,a,o,s=1e8,c=1/s,l=Math.PI*2,u=l/4,d=0,f=Math.sqrt,p=Math.cos,m=Math.sin,h=function(e){return typeof e==`string`},g=function(e){return typeof e==`function`},_=function(e){return typeof e==`number`},v=function(e){return e===void 0},y=function(e){return typeof e==`object`},b=function(e){return e!==!1},x=function(){return typeof window<`u`},S=function(e){return g(e)||h(e)},C=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},w=Array.isArray,T=/random\([^)]+\)/g,E=/,\s*/g,D=/(?:-?\.?\d|\.)+/gi,O=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,k=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,A=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,j=/[+-]=-?[.\d]+/,M=/[^,'"\[\]\s]+/gi,N=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,P,F,I,L,R={},ee={},te,z=function(e){return(ee=ke(e,R))&&Yn},ne=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},B=function(e,t){return!t&&console.warn(e)},re=function(e,t){return e&&(R[e]=t)&&ee&&(ee[e]=t)||R},ie=function(){return 0},ae={suppressEvents:!0,isStart:!0,kill:!1},oe={suppressEvents:!0,kill:!1},se={suppressEvents:!0},ce={},le=[],ue={},de,fe={},pe={},me=30,he=[],ge=``,V=function(e){var t=e[0],n,r;if(y(t)||g(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=he.length;r--&&!he[r].targetTest(t););n=he[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new an(e[r],n)))||e.splice(r,1);return e},_e=function(e){return e._gsap||V(ft(e))[0]._gsap},ve=function(e,t,n){return(n=e[t])&&g(n)?e[t]():v(n)&&e.getAttribute&&e.getAttribute(t)||n},ye=function(e,t){return(e=e.split(`,`)).forEach(t)||e},H=function(e){return Math.round(e*1e5)/1e5||0},be=function(e){return Math.round(e*1e7)/1e7||0},U=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},xe=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Se=function(){var e=le.length,t=le.slice(0),n,r;for(ue={},le.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ce=function(e){return!!(e._initted||e._startAt||e.add)},we=function(e,t,n,r){le.length&&!a&&Se(),e.render(t,n,r||!!(a&&t<0&&Ce(e))),le.length&&!a&&Se()},Te=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(M).length<2?t:h(e)?e.trim():e},Ee=function(e){return e},De=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oe=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},ke=function(e,t){for(var n in t)e[n]=t[n];return e},Ae=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=y(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},je=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Me=function(e){var t=e.parent||P,n=e.keyframes?Oe(w(e.keyframes)):De;if(b(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ne=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Pe=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Fe=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Ie=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Le=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Re=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ze=function(e,t,n,r){return e._startAt&&(a?e._startAt.revert(oe):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Be=function e(t){return!t||t._ts&&e(t.parent)},Ve=function(e){return e._repeat?He(e._tTime,e=e.duration()+e._rDelay)*e:0},He=function(e,t){var n=Math.floor(e=be(e/t));return e&&n===e?n-1:n},Ue=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},We=function(e){return e._end=be(e._start+(e._tDur/Math.abs(e._ts||e._rts||c)||0))},Ge=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=be(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),We(e),n._dirty||Le(n,e)),e},Ke=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ue(e.rawTime(),t),(!t._dur||ot(0,t.totalDuration(),n)-t._tTime>c)&&t.render(n,!0)),Le(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-c}},qe=function(e,t,n,r){return t.parent&&Ie(t),t._start=be((_(n)?n:n||e!==P?rt(e,n,t):e._time)+t._delay),t._end=be(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pe(e,t,`_first`,`_last`,e._sort?`_start`:0),Ze(t)||(e._recent=t),r||Ke(e,t),e._ts<0&&Ge(e,e._tTime),e},Je=function(e,t){return(R.ScrollTrigger||ne(`scrollTrigger`,t))&&R.ScrollTrigger.create(t,e)},Ye=function(e,t,n,r,i){if(mn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!a&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&de!==Wt.frame)return le.push(e),e._lazy=[i,r],1},Xe=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Ze=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Qe=function(e,t,n,r){var i=e.ratio,o=t<0||!t&&(!e._start&&Xe(e)&&(e._initted||!Ze(e))||(e._ts<0||e._dp._ts<0)&&!Ze(e))?0:1,s=e._rDelay,l=0,u,d,f;if(s&&e._repeat&&(l=ot(0,e._tDur,t),d=He(l,s),e._yoyo&&d&1&&(o=1-o),d!==He(e._tTime,s)&&(i=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==i||a||r||e._zTime===c||!t&&e._zTime){if(!e._initted&&Ye(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?c:0),n||=t&&!f,e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&ze(e,t,n,!0),e._onUpdate&&!n&&kt(e,`onUpdate`),l&&e._repeat&&!n&&e.parent&&kt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ie(e,1),!n&&!a&&(kt(e,o?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},$e=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},et=function(e,t,n,r){var i=e._repeat,a=be(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:be(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Ge(e,e._tTime=e._tDur*o),e.parent&&We(e),n||Le(e.parent,e),e},tt=function(e){return e instanceof sn?Le(e):et(e,e._dur)},nt={_start:0,endTime:ie,totalDuration:ie},rt=function e(t,n,r){var i=t.labels,a=t._recent||nt,o=t.duration()>=s?a.endTime(!1):t._dur,c,l,u;return h(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)===`%`,c=n.indexOf(`=`),l===`<`||l===`>`?(c>=0&&(n=n.replace(/=/,``)),(l===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(c<0?a:r).totalDuration()/100:1)):c<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(c-1)+n.substr(c+1)),u&&r&&(l=l/100*(w(r)?r[0]:r).totalDuration()),c>1?e(t,n.substr(0,c-1),r)+l:o+l)):n==null?o:+n},it=function(e,t,n){var r=_(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=b(s.vars.inherit)&&s.parent;a.immediateRender=b(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new xn(t[0],a,t[i+1])},at=function(e,t){return e||e===0?t(e):t},ot=function(e,t,n){return n<e?e:n>t?t:n},st=function(e,t){return!h(e)||!(t=N.exec(e))?``:t[1]},ct=function(e,t,n){return at(n,function(n){return ot(e,t,n)})},lt=[].slice,ut=function(e,t){return e&&y(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&y(e[0]))&&!e.nodeType&&e!==F},dt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return h(e)&&!t||ut(e,1)?(r=n).push.apply(r,ft(e)):n.push(e)})||n},ft=function(e,t,n){return o&&!t&&o.selector?o.selector(e):h(e)&&!n&&(I||!Gt())?lt.call((t||L).querySelectorAll(e),0):w(e)?dt(e,n):ut(e)?lt.call(e,0):e?[e]:[]},pt=function(e){return e=ft(e)[0]||B(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return ft(t,n.querySelectorAll?n:n===e?B(`Invalid scope`)||L.createElement(`div`):e)}},mt=function(e){return e.sort(function(){return .5-Math.random()})},ht=function(e){if(g(e))return e;var t=y(e)?e:{each:e},n=$t(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,c=isNaN(r)||o,l=t.axis,u=r,d=r;return h(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&c&&(u=r[0],d=r[1]),function(e,o,p){var m=(p||t).length,h=a[m],g,_,v,y,b,x,S,C,w;if(!h){if(w=t.grid===`auto`?0:(t.grid||[1,s])[1],!w){for(S=-s;S<(S=p[w++].getBoundingClientRect().left)&&w<m;);w<m&&w--}for(h=a[m]=[],g=c?Math.min(w,m)*u-.5:r%w,_=w===s?0:c?m*d/w-.5:r/w|0,S=0,C=s,x=0;x<m;x++)v=x%w-g,y=_-(x/w|0),h[x]=b=l?Math.abs(l===`y`?y:v):f(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&mt(h),h.max=S-C,h.min=C,h.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(w>m?m-1:l?l===`y`?m/w:w:Math.max(w,m/w))||0)*(r===`edges`?-1:1),h.b=m<0?i-m:i,h.u=st(t.amount||t.each)||0,n=n&&m<0?Qt(n):n}return m=(h[e]-h.min)/h.max||0,be(h.b+(n?n(m):m)*h.v)+h.u}},gt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=be(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_(n)?0:st(n))}},_t=function(e,t){var n=w(e),r,i;return!n&&y(e)&&(r=n=e.radius||s,e.values?(e=ft(e.values),(i=!_(e[0]))&&(r*=r)):e=gt(e.increment)),at(t,n?g(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=s,c=0,l=e.length,u,d;l--;)i?(u=e[l].x-n,d=e[l].y-a,u=u*u+d*d):u=Math.abs(e[l]-n),u<o&&(o=u,c=l);return c=!r||o<=r?e[c]:t,i||c===t||_(t)?c:c+st(t)}:gt(e))},vt=function(e,t,n,r){return at(w(e)?!t:n===!0?!!(n=0):!r,function(){return w(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},yt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},bt=function(e,t){return function(n){return e(parseFloat(n))+(t||st(n))}},xt=function(e,t,n){return Et(e,t,0,1,n)},St=function(e,t,n){return at(n,function(n){return e[~~t(n)]})},Ct=function e(t,n,r){var i=n-t;return w(t)?St(t,e(0,t.length),n):at(r,function(e){return(i+(e-t)%i)%i+t})},wt=function e(t,n,r){var i=n-t,a=i*2;return w(t)?St(t,e(0,t.length-1),n):at(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Tt=function(e){return e.replace(T,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(E);return vt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Et=function(e,t,n,r,i){var a=t-e,o=r-n;return at(i,function(t){return n+((t-e)/a*o||0)})},Dt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=h(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(w(t)&&!w(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=ke(w(t)?[]:{},t));if(!u){for(c in n)ln.call(s,t,c,`get`,n[c]);a=function(e){return An(e,s)||(o?t.p:t)}}}return at(r,a)},Ot=function(e,t,n){var r=e.labels,i=s,a,o,c;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(c=a,i=o);return c},kt=function(e,t,n){var r=e.vars,i=r[t],a=o,s=e._ctx,c,l,u;if(i)return c=r[t+`Params`],l=r.callbackScope||e,n&&le.length&&Se(),s&&(o=s),u=c?i.apply(l,c):i.call(l),o=a,u},At=function(e){return Ie(e),e.scrollTrigger&&e.scrollTrigger.kill(!!a),e.progress()<1&&kt(e,`onInterrupt`),e},jt,Mt=[],Nt=function(e){if(e){if(e=!e.name&&e.default||e,x()||e.headless){var t=e.name,n=g(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ie,render:An,add:ln,kill:Mn,modifier:jn,rawVars:0},a={targetTest:0,get:0,getSetter:En,aliases:{},register:0};if(Gt(),e!==r){if(fe[t])return;De(r,De(je(e,i),a)),ke(r.prototype,ke(i,je(e,a))),fe[r.prop=t]=r,e.targetTest&&(he.push(r),ce[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}re(t,r),e.register&&e.register(Yn,r,Fn)}else Mt.push(e)}},Pt=255,Ft={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},It=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},Lt=function(e,t,n){var r=e?_(e)?[e>>16,e>>8&Pt,e&Pt]:0:Ft.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Ft[e])r=Ft[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(D),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=It(s+1/3,i,a),r[1]=It(s,i,a),r[2]=It(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(O),n&&r.length<4&&(r[3]=1),r}else r=e.match(D)||Ft.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Pt,a=r[1]/Pt,o=r[2]/Pt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Rt=function(e){var t=[],n=[],r=-1;return e.split(Bt).forEach(function(e){var i=e.match(k)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},zt=function(e,t,n){var r=``,i=(e+r).match(Bt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Lt(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Rt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Bt,`1`).split(k),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Bt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Bt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Ft)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Vt=/hsl[a]?\(/,Ht=function(e){var t=e.join(` `),n;if(Bt.lastIndex=0,Bt.test(t))return n=Vt.test(t),e[1]=zt(e[1],n),e[0]=zt(e[0],n,Rt(e[1])),!0},Ut,Wt=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){te&&(!I&&x()&&(F=I=window,L=F.document||{},R.gsap=Yn,(F.gsapVersions||(F.gsapVersions=[])).push(Yn.version),z(ee||F.GreenSockGlobals||!F.gsap&&F||{}),Mt.forEach(Nt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Ut=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ut=0,l=ie},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Gt(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Gt=function(){return!Ut&&Wt.wake()},Kt={},qt=/^[\d.\-M][\d.\-,\s]/,Jt=/["']/g,Yt=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Jt,``).trim():+c,r=s.substr(o+1).trim();return t},Xt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Zt=function(e){var t=(e+``).split(`(`),n=Kt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Yt(t[1])]:Xt(e).split(`,`).map(Te)):Kt._CE&&qt.test(e)?Kt._CE(``,e):n},Qt=function(e){return function(t){return 1-e(1-t)}},$t=function(e,t){return e&&(g(e)?e:Kt[e]||Zt(e))||t},en=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return ye(e,function(e){for(var t in Kt[e]=R[e]=i,Kt[a=e.toLowerCase()]=n,i)Kt[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Kt[e+`.`+t]=i[t]}),i},tn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/l*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*m((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:tn(s);return a=l/a,c.config=function(n,r){return e(t,n,r)},c},rn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:tn(r);return i.config=function(n){return e(t,n)},i};ye(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;en(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn,en(`Elastic`,nn(`in`),nn(`out`),nn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};en(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),en(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),en(`Circ`,function(e){return-(f(1-e*e)-1)}),en(`Sine`,function(e){return e===1?1:-p(e*u)+1}),en(`Back`,rn(`in`),rn(`out`),rn()),Kt.SteppedEase=Kt.steps=R.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-c;return function(e){return((r*ot(0,a,e)|0)+i)*n}}},r.ease=Kt[`quad.out`],ye(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return ge+=e+`,`+e+`Params,`});var an=function(e,t){this.id=d++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ve,this.set=t?t.getSetter:En},on=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,et(this,+e.duration,1,1),this.data=e.data,o&&(this._ctx=o,o.data.push(this)),Ut||Wt.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,et(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Gt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ge(this,e),!n._dp||n.parent||Ke(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&qe(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===c||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),we(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ve(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ve(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?He(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-c?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ue(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-c?0:this._rts,this.totalTime(ot(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),We(this),Re(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==c&&(this._tTime-=c)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=be(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&qe(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(b(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ue(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=se);var t=a;return a=e,Ce(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),a=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,tt(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,tt(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(rt(this,e),b(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,b(t)),this._dur||(this._zTime=-c),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-c:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-c,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-c)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=g(e)?e:Ee,a=function(){var e=t.then;t.then=null,n&&n(),g(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){At(this)},e}();De(on.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-c,_prom:0,_ps:!1,_rts:1});var sn=function(r){t(i,r);function i(t,n){var i;return t===void 0&&(t={}),i=r.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=b(t.sortChildren),P&&qe(t.parent||P,e(i),n),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&Je(e(i),t.scrollTrigger),i}var o=i.prototype;return o.to=function(e,t,n){return it(0,arguments,this),this},o.from=function(e,t,n){return it(1,arguments,this),this},o.fromTo=function(e,t,n,r){return it(2,arguments,this),this},o.set=function(e,t,n){return t.duration=0,t.parent=this,Me(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new xn(e,t,rt(this,n),1),this},o.call=function(e,t,n){return qe(this,xn.delayedCall(0,e,t),n)},o.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new xn(e,n,rt(this,i)),this},o.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Me(n).immediateRender=b(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},o.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Me(r).immediateRender=b(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},o.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,o=this._dur,s=e<=0?0:be(e),l=this._zTime<0!=e<0&&(this._initted||!o),u,d,f,p,m,h,g,_,v,y,b,x;if(this!==P&&s>i&&e>=0&&(s=i),s!==this._tTime||n||l){if(r!==this._time&&o&&(s+=this._time-r,e+=this._time-r),u=s,v=this._start,_=this._ts,h=!_,l&&(o||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=o+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(u=be(s%m),s===i?(p=this._repeat,u=o):(y=be(s/m),p=~~y,p&&p===y&&(u=o,p--),u>o&&(u=o)),y=He(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(u=o-u,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:s%o?o:s,this._lock=1,this.render(r||(x?0:be(p*m)),t,!o)._lock=0,this._tTime=s,!t&&this.parent&&kt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=p),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(o=this._dur,i=this._tDur,C&&(this._lock=2,r=S?o:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=$e(this,be(r),be(u)),g&&(s-=u-(u=g._start))),this._tTime=s,this._time=u,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&s&&o&&!t&&!y&&(kt(this,`onStart`),this._tTime!==s))return this;if(u>=r&&e>=0)for(d=this._first;d;){if(f=d._next,(d._act||u>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,t,n),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=-c);break}}d=f}else{d=this._last;for(var w=e<0?e:u;d;){if(f=d._prev,(d._act||w<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,t,n||a&&Ce(d)),u!==this._time||!this._ts&&!h){g=0,f&&(s+=this._zTime=w?-c:c);break}}d=f}}if(g&&!t&&(this.pause(),g.render(u>=r?0:-c)._zTime=u>=r?1:-1,this._ts))return this._start=v,We(this),this.render(e,t,n);this._onUpdate&&!t&&kt(this,`onUpdate`,!0),(s===i&&this._tTime>=this.totalDuration()||!s&&r)&&(v!==this._start&&Math.abs(_)===Math.abs(this._ts)||this._lock||((e||!o)&&(s===i&&this._ts>0||!s&&this._ts<0)&&Ie(this,1),t||e<0&&!r||!s&&!r&&i||(kt(this,s===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom())))}return this},o.add=function(e,t){var n=this;if(_(t)||(t=rt(this,t,e)),!(e instanceof on)){if(w(e))return e.forEach(function(e){return n.add(e,t)}),this;if(h(e))return this.addLabel(e,t);if(g(e))e=xn.delayedCall(0,e);else return this}return this===e?this:qe(this,e,t)},o.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-s);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof xn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},o.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},o.remove=function(e){return h(e)?this.removeLabel(e):g(e)?this.killTweensOf(e):(e.parent===this&&Fe(this,e),e===this._recent&&(this._recent=this._last),Le(this))},o.totalTime=function(e,t){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(Wt.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),r.prototype.totalTime.call(this,e,t),this._forcing=0,this):this._tTime},o.addLabel=function(e,t){return this.labels[e]=rt(this,t),this},o.removeLabel=function(e){return delete this.labels[e],this},o.addPause=function(e,t,n){var r=xn.delayedCall(0,t||ie,n);return r.data=`isPause`,this._hasPause=1,qe(this,r,rt(this,e))},o.removePause=function(e){var t=this._first;for(e=rt(this,e);t;)t._start===e&&t.data===`isPause`&&Ie(t),t=t._next},o.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)fn!==r[i]&&r[i].kill(e,t);return this},o.getTweensOf=function(e,t){for(var n=[],r=ft(e),i=this._first,a=_(t),o;i;)i instanceof xn?xe(i._targets,r)&&(a?(!fn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},o.tweenTo=function(e,t){t||={};var n=this,r=rt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,l=i.immediateRender,u,d=xn.to(n,De({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||c,onStart:function(){if(n.pause(),!u){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());d._dur!==e&&et(d,e,0,1).render(d._time,!0,!0),u=1}o&&o.apply(d,s||[])}},t));return l?d.render(0):d},o.tweenFromTo=function(e,t,n){return this.tweenTo(t,De({startAt:{time:rt(this,e)}},n))},o.recent=function(){return this._recent},o.nextLabel=function(e){return e===void 0&&(e=this._time),Ot(this,rt(this,e))},o.previousLabel=function(e){return e===void 0&&(e=this._time),Ot(this,rt(this,e),1)},o.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+c)},o.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=be(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Le(this)},o.invalidate=function(e){var t=this._first;for(this._lock=0;t;)t.invalidate(e),t=t._next;return r.prototype.invalidate.call(this,e)},o.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Le(this)},o.totalDuration=function(e){var t=0,n=this,r=n._last,i=s,a,o,c;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(c=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,qe(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!c&&!n._dp||c&&c.smoothChildTiming)&&(n._start+=be(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;et(n,n===P&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},i.updateRoot=function(e){if(P._ts&&(we(P,Ue(e,P)),de=Wt.frame),Wt.frame>=me){me+=n.autoSleep||120;var t=P._first;if((!t||!t._ts)&&n.autoSleep&&Wt._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Wt.sleep()}}},i}(on);De(sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cn=function(e,t,n,r,i,a,o){var s=new Fn(this._pt,e,t,0,1,kn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Tt(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(A)||[];u=A.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?U(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=A.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(j.test(r)||g)&&(s.e=0),this._pt=s,s},ln=function(e,t,r,i,a,o,s,c,l,u){g(i)&&(i=i(a||0,e,o));var d=e[t],f=r===`get`?g(d)?l?e[t.indexOf(`set`)||!g(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:r,p=g(d)?l?wn:Cn:Sn,m;if(h(i)&&(~i.indexOf(`random(`)&&(i=Tt(i)),i.charAt(1)===`=`&&(m=U(f,i)+(st(f)||0),(m||m===0)&&(i=m))),!u||f!==i||pn)return!isNaN(f*i)&&i!==``?(m=new Fn(this._pt,e,t,+f||0,i-(f||0),typeof d==`boolean`?On:Dn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&ne(t,i),cn.call(this,e,t,f,i,p,c||n.stringFilter,l))},un=function(e,t,n,r,i){if(g(e)&&(e=vn(e,i,t,n,r)),!y(e)||e.style&&e.nodeType||w(e)||C(e))return h(e)?vn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=vn(e[o],i,t,n,r);return a},dn=function(e,t,n,r,i,a){var o,s,c,l;if(fe[e]&&(o=new fe[e]).init(i,o.rawVars?t[e]:un(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Fn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==jt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},fn,pn,mn=function e(t,n,o){var l=t.vars,u=l.ease,d=l.startAt,f=l.immediateRender,p=l.lazy,m=l.onUpdate,h=l.runBackwards,g=l.yoyoEase,_=l.keyframes,v=l.autoRevert,y=t._dur,x=t._startAt,S=t._targets,C=t.parent,w=C&&C.data===`nested`?C.vars.targets:S,T=t._overwrite===`auto`&&!i,E=t.timeline,D=l.easeReverse||g,O,k,A,j,M,N,F,I,L,R,ee,te,z;if(!E||_&&u||(u=`none`),t._ease=$t(u,r.ease),t._rEase=D&&($t(D)||t._ease),t._from=!E&&!!l.runBackwards,t._from&&(t.ratio=1),!E||_&&!l.stagger){if(I=S[0]?_e(S[0]).harness:0,te=I&&l[I.prop],O=je(l,ce),x&&(x._zTime<0&&x.progress(1),n<0&&h&&f&&!v?x.render(-1,!0):x.revert(h&&y?oe:ae),x._lazy=0),d){if(Ie(t._startAt=xn.set(S,De({data:`isStart`,overwrite:!1,parent:C,immediateRender:!0,lazy:!x&&b(p),startAt:null,delay:0,onUpdate:m&&function(){return kt(t,`onUpdate`)},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a||!f&&!v)&&t._startAt.revert(oe),f&&y&&n<=0&&o<=0){n&&(t._zTime=n);return}}else if(h&&y&&!x){if(n&&(f=!1),A=De({overwrite:!1,data:`isFromStart`,lazy:f&&!x&&b(p),immediateRender:f,stagger:0,parent:C},O),te&&(A[I.prop]=te),Ie(t._startAt=xn.set(S,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(a?t._startAt.revert(oe):t._startAt.render(-1,!0)),t._zTime=n,!f)e(t._startAt,c,c);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&b(p)||p&&!y,k=0;k<S.length;k++){if(M=S[k],F=M._gsap||V(S)[k]._gsap,t._ptLookup[k]=R={},ue[F.id]&&le.length&&Se(),ee=w===S?k:w.indexOf(M),I&&(L=new I).init(M,te||O,t,ee,w)!==!1&&(t._pt=j=new Fn(t._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(e){R[e]=j}),L.priority&&(N=1)),!I||te)for(A in O)fe[A]&&(L=dn(A,O,t,ee,M,w))?L.priority&&(N=1):R[A]=j=ln.call(t,M,A,`get`,O[A],ee,w,0,l.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),T&&t._pt&&(fn=t,P.killTweensOf(M,R,t.globalTime(n)),z=!t.parent,fn=0),t._pt&&p&&(ue[F.id]=1)}N&&Pn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!z,_&&n<=0&&E.render(s,!0,!0)},hn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return pn=1,e.vars[t]=`+=0`,mn(e,o),pn=0,s?B(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=H(n)+st(u.e)),u.b&&(u.b=l.s+st(u.b))},gn=function(e,t){var n=e[0]?_e(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=ke({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},_n=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(w(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},vn=function(e,t,n,r,i){return g(e)?e.call(t,n,r,i):h(e)&&~e.indexOf(`random(`)?Tt(e):e},yn=ge+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,bn={};ye(yn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return bn[e]=1});var xn=function(r){t(o,r);function o(t,a,o,s){var l;typeof a==`number`&&(o.duration=a,a=o,o=null),l=r.call(this,s?a:Me(a))||this;var u=l.vars,d=u.duration,f=u.delay,p=u.immediateRender,m=u.stagger,h=u.overwrite,g=u.keyframes,v=u.defaults,x=u.scrollTrigger,T=a.parent||P,E=(w(t)||C(t)?_(t[0]):`length`in a)?[t]:ft(t),D,O,k,A,j,M,N,F;if(l._targets=E.length?V(E):B(`GSAP target `+t+` not found. https://gsap.com`,!n.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,g||m||S(d)||S(f)){a=l.vars;var I=a.easeReverse||a.yoyoEase;if(D=l.timeline=new sn({data:`nested`,defaults:v||{},targets:T&&T.data===`nested`?T.vars.targets:E}),D.kill(),D.parent=D._dp=e(l),D._start=0,m||S(d)||S(f)){if(A=E.length,N=m&&ht(m),y(m))for(j in m)~yn.indexOf(j)&&(F||={},F[j]=m[j]);for(O=0;O<A;O++)k=je(a,bn),k.stagger=0,I&&(k.easeReverse=I),F&&ke(k,F),M=E[O],k.duration=+vn(d,e(l),O,M,E),k.delay=(+vn(f,e(l),O,M,E)||0)-l._delay,!m&&A===1&&k.delay&&(l._delay=f=k.delay,l._start+=f,k.delay=0),D.to(M,k,N?N(O,M,E):0),D._ease=Kt.none;D.duration()?d=f=0:l.timeline=0}else if(g){Me(De(D.vars.defaults,{ease:`none`})),D._ease=$t(g.ease||a.ease||`none`);var L=0,R,ee,te;if(w(g))g.forEach(function(e){return D.to(E,e,`>`)}),D.duration();else{for(j in k={},g)j===`ease`||j===`easeEach`||_n(j,g[j],k,g.easeEach);for(j in k)for(R=k[j].sort(function(e,t){return e.t-t.t}),L=0,O=0;O<R.length;O++)ee=R[O],te={ease:ee.e,duration:(ee.t-(O?R[O-1].t:0))/100*d},te[j]=ee.v,D.to(E,te,L),L+=te.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||l.duration(d=D.duration())}else l.timeline=0;return h===!0&&!i&&(fn=e(l),P.killTweensOf(E),fn=0),qe(T,e(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),(p||!d&&!g&&l._start===be(T._time)&&b(p)&&Be(e(l))&&T.data!==`nested`)&&(l._tTime=-c,l.render(Math.max(0,-f)||0)),x&&Je(e(l),x),l}var s=o.prototype;return s.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-c&&!o?i:e<c?0:e,l,u,d,f,p,m,h,g;if(!a)Qe(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(l=s,g=this.timeline,this._repeat){if(f=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(f*100+e,t,n);if(l=be(s%f),s===i?(d=this._repeat,l=a):(p=be(s/f),d=~~p,d&&d===p?(l=a,d--):l>a&&(l=a)),m=this._yoyo&&d&1,m&&(l=a-l),p=He(this._tTime,f),l===r&&!n&&this._initted&&d===p)return this._tTime=s,this;d!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&l!==f&&this._initted&&(this._lock=n=1,this.render(be(f*d),!0).invalidate()._lock=0)}if(!this._initted){if(Ye(this,o?e:l,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&d!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=l<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=h=this._invRatio+this._invScale*this._invEase((l-this._invTime)*this._invRecip)}else this.ratio=h=this._ease(l/a);if(this._from&&(this.ratio=h=1-h),this._tTime=s,this._time=l,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!p&&(kt(this,`onStart`),this._tTime!==s))return this;for(u=this._pt;u;)u.r(h,u.d),u=u._next;g&&g.render(e<0?e:g._dur*g._ease(l/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&ze(this,e,t,n),kt(this,`onUpdate`)),this._repeat&&d!==p&&this.vars.onRepeat&&!t&&this.parent&&kt(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&ze(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Ie(this,1),!t&&(!o||r)&&(s||r||m)&&(kt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},s.targets=function(){return this._targets},s.invalidate=function(e){return e&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),r.prototype.invalidate.call(this,e)},s.resetTo=function(e,t,n,r,i){Ut||Wt.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||mn(this,a),o=this._ease(a/this._dur),hn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Ge(this,0),this.parent||Pe(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},s.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?At(this):this.scrollTrigger&&this.scrollTrigger.kill(!!a),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,fn&&fn.vars.overwrite!==!0)._first||At(this),this.parent&&n!==this.timeline.totalDuration()&&et(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?ft(e):r,o=this._ptLookup,s=this._pt,c,l,u,d,f,p,m;if((!t||t===`all`)&&Ne(r,i))return t===`all`&&(this._pt=0),At(this);for(c=this._op=this._op||[],t!==`all`&&(h(t)&&(f={},ye(t,function(e){return f[e]=1}),t=f),t=gn(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(f in l=o[m],t===`all`?(c[m]=t,d=l,u={}):(u=c[m]=c[m]||{},d=t),d)p=l&&l[f],p&&(`kill`in p.d&&p.d.kill(f)!==!0||Fe(this,p,`_pt`),delete l[f]),u!==`all`&&(u[f]=1);return this._initted&&!this._pt&&s&&At(this),this},o.to=function(e,t){return new o(e,t,arguments[2])},o.from=function(e,t){return it(1,arguments)},o.delayedCall=function(e,t,n,r){return new o(t,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:t,onReverseComplete:t,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:r})},o.fromTo=function(e,t,n){return it(2,arguments)},o.set=function(e,t){return t.duration=0,t.repeatDelay||(t.repeat=0),new o(e,t)},o.killTweensOf=function(e,t,n){return P.killTweensOf(e,t,n)},o}(on);De(xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ye(`staggerTo,staggerFrom,staggerFromTo`,function(e){xn[e]=function(){var t=new sn,n=lt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Sn=function(e,t,n){return e[t]=n},Cn=function(e,t,n){return e[t](n)},wn=function(e,t,n,r){return e[t](r.fp,n)},Tn=function(e,t,n){return e.setAttribute(t,n)},En=function(e,t){return g(e[t])?Cn:v(e[t])&&e.setAttribute?Tn:Sn},Dn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},On=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},kn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},An=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Mn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fe(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Nn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Pn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Fn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Dn,this.d=o||this,this.set=s||Sn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Nn,this.m=e,this.mt=n,this.tween=t},e}();ye(ge+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return ce[e]=1}),R.TweenMax=R.TweenLite=xn,R.TimelineLite=R.TimelineMax=sn,P=new sn({sortChildren:!1,defaults:r,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),n.stringFilter=Ht;var In=[],Ln={},Rn=[],zn=0,Bn=0,Vn=function(e){return(Ln[e]||Rn).map(function(e){return e()})},Hn=function(){var e=Date.now(),t=[];e-zn>2&&(Vn(`matchMediaInit`),In.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=F.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Vn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),zn=e,Vn(`matchMedia`))},Un=function(){function e(e,t){this.selector=t&&pt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Bn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){g(e)&&(n=t,t=e,e=g);var r=this,i=function(){var e=o,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=pt(n)),o=r,a=t.apply(r,arguments),g(a)&&r._r.push(a),o=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===g?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=o;o=null,e(this),o=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof xn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof sn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof xn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=In.length;r--;)In[r].id===this.id&&In.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Wn=function(){function e(e){this.contexts=[],this.scope=e,o&&o.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){y(e)||(e={matches:e});var r=new Un(0,n||this.scope),i=r.conditions={},a,s,c;for(s in o&&!r.selector&&(r.selector=o.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)s===`all`?c=1:(a=F.matchMedia(e[s]),a&&(In.indexOf(r)<0&&In.push(r),(i[s]=a.matches)&&(c=1),a.addListener?a.addListener(Hn):a.addEventListener(`change`,Hn)));return c&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Gn={registerPlugin:function(){[...arguments].forEach(function(e){return Nt(e)})},timeline:function(e){return new sn(e)},getTweensOf:function(e,t){return P.getTweensOf(e,t)},getProperty:function(e,t,n,r){h(e)&&(e=ft(e)[0]);var i=_e(e||{}).get,a=n?Ee:Te;return n===`native`&&(n=``),e&&(t?a((fe[t]&&fe[t].get||i)(e,t,n,r)):function(t,n,r){return a((fe[t]&&fe[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=ft(e),e.length>1){var r=e.map(function(e){return Yn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=fe[t],o=_e(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;jt._pt=0,r.init(e,n?t+n:t,jt,0,[e]),r.render(1,r),jt._pt&&An(1,jt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Yn.to(e,De((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return P.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$t(e.ease,r.ease)),Ae(r,e||{})},config:function(e){return Ae(n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!fe[e]&&!R[e]&&B(t+` effect requires `+e+` plugin.`)}),pe[t]=function(e,t,r){return n(ft(e),De(t||{},i),r)},a&&(sn.prototype[t]=function(e,n,r){return this.add(pe[t](e,y(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Kt[e]=$t(t)},parseEase:function(e,t){return arguments.length?$t(e,t):Kt},getById:function(e){return P.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new sn(e),r,i;for(n.smoothChildTiming=b(e.smoothChildTiming),P.remove(n),n._dp=0,n._time=n._tTime=P._time,r=P._first;r;)i=r._next,(t||!(!r._dur&&r instanceof xn&&r.vars.onComplete===r._targets[0]))&&qe(n,r,r._start-r._delay),r=i;return qe(P,n,0),n},context:function(e,t){return e?new Un(e,t):o},matchMedia:function(e){return new Wn(e)},matchMediaRefresh:function(){return In.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Hn()},addEventListener:function(e,t){var n=Ln[e]||(Ln[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ln[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ct,wrapYoyo:wt,distribute:ht,random:vt,snap:_t,normalize:xt,getUnit:st,clamp:ct,splitColor:Lt,toArray:ft,selector:pt,mapRange:Et,pipe:yt,unitize:bt,interpolate:Dt,shuffle:mt},install:z,effects:pe,ticker:Wt,updateRoot:sn.updateRoot,plugins:fe,globalTimeline:P,core:{PropTween:Fn,globals:re,Tween:xn,Timeline:sn,Animation:on,getCache:_e,_removeLinkedListItem:Fe,reverting:function(){return a},context:function(e){return e&&o&&(o.data.push(e),e._ctx=o),o},suppressOverwrites:function(e){return i=e}}};ye(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Gn[e]=xn[e]}),Wt.add(sn.updateRoot),jt=Gn.to({},{duration:0});var Kn=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Kn(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Jn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(h(n)&&(r={},ye(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}qn(e,n)}}}},Yn=Gn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)a?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jn(`roundProps`,gt),Jn(`modifiers`),Jn(`snap`,_t))||Gn;xn.version=sn.version=Yn.version=`3.15.0`,te=1,x()&&Gt(),Kt.Power0,Kt.Power1,Kt.Power2,Kt.Power3,Kt.Power4,Kt.Linear,Kt.Quad,Kt.Cubic,Kt.Quart,Kt.Quint,Kt.Strong,Kt.Elastic,Kt.Back,Kt.SteppedEase,Kt.Bounce,Kt.Sine,Kt.Expo,Kt.Circ;var Xn,Zn,Qn,$n,er,tr,nr,rr=function(){return typeof window<`u`},ir={},ar=180/Math.PI,or=Math.PI/180,sr=Math.atan2,cr=1e8,lr=/([A-Z])/g,ur=/(left|right|width|margin|padding|x)/i,dr=/[\s,\(]\S/,fr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},pr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_r=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},br=function(e,t,n){return e.style[t]=n},xr=function(e,t,n){return e.style.setProperty(t,n)},Sr=function(e,t,n){return e._gsap[t]=n},Cr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},wr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Tr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Er=`transform`,Dr=Er+`Origin`,Or=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in ir&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=fr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=qr(i,e)}):this.tfm[t]=o.x?o[t]:qr(i,t),t===Dr&&(this.tfm.zOrigin=o.zOrigin);else return fr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Er)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Dr,n,``)),t=Er}(a||n)&&this.props.push(t,n,a[t])},kr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Ar=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(lr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=nr(),i&&i.isStart||n[Er]||(kr(n),r.zOrigin&&n[Dr]&&(n[Dr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jr=function(e,t){var n={target:e,props:[],revert:Ar,save:Or};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Mr,Nr=function(e,t){var n=Zn.createElementNS?Zn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Zn.createElement(e);return n&&n.style?n:Zn.createElement(e)},Pr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(lr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Ir(n)||n,1)||``},Fr=`O,Moz,ms,Ms,Webkit`.split(`,`),Ir=function(e,t,n){var r=(t||er).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Fr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Fr[i]:``)+e},Lr=function(){rr()&&window.document&&(Xn=window,Zn=Xn.document,Qn=Zn.documentElement,er=Nr(`div`)||{style:{}},Nr(`div`),Er=Ir(Er),Dr=Er+`Origin`,er.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Mr=!!Ir(`perspective`),nr=Yn.core.reverting,$n=1)},Rr=function(e){var t=e.ownerSVGElement,n=Nr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Qn.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Qn.removeChild(n),i},zr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Br=function(e){var t,n;try{t=e.getBBox()}catch{t=Rr(e),n=1}return t&&(t.width||t.height)||n||(t=Rr(e)),t&&!t.width&&!t.x&&!t.y?{x:+zr(e,[`x`,`cx`,`x1`])||0,y:+zr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Vr=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Br(e))},Hr=function(e,t){if(t){var n=e.style,r;t in ir&&t!==Dr&&(t=Er),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(lr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Ur=function(e,t,n,r,i,a){var o=new Fn(e._pt,t,n,0,1,a?yr:vr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Wr={deg:1,rad:1,turn:1},Gr={grid:1,flex:1},Kr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=er.style,c=ur.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Wr[i]||Wr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Vr(t),(p||o===`%`)&&(ir[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],H(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==Zn&&h.appendChild||(h=Zn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Wt.time&&!g.uncache)return H(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Hr(t,n)}else(p||o===`%`)&&!Gr[Pr(h,`display`)]&&(s.position=Pr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(er),m=er[u],h.removeChild(er),s.position=`absolute`;return c&&p&&(g=_e(h),g.time=Wt.time,g.width=h[u]),H(f?m*a/d:m&&a?d/m*a:0)},qr=function(e,t,n,r){var i;return $n||Lr(),t in fr&&t!==`transform`&&(t=fr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),ir[t]&&t!==`transform`?(i=ai(e,r),i=t===`transformOrigin`?i.svg?i.origin:oi(Pr(e,Dr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Qr[t]&&Qr[t](e,t,n)||Pr(e,t)||ve(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Kr(e,t,i,n)+n:i},Jr=function(e,t,r,i){if(!r||r===`none`){var a=Ir(t,e,1),o=a&&Pr(e,a,1);o&&o!==r?(t=a,r=o):t===`borderColor`&&(r=Pr(e,`borderTopColor`))}var s=new Fn(this._pt,e.style,t,0,1,kn),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=r,s.e=i,r+=``,i+=``,i.substring(0,6)===`var(--`&&(i=Pr(e,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(h=e.style[t],e.style[t]=i,i=Pr(e,t)||i,h?e.style[t]=h:Hr(e,t)),u=[r,i],Ht(u),r=u[0],i=u[1],f=r.match(k)||[],x=i.match(k)||[],x.length){for(;d=k.exec(i);)g=d[0],v=i.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=U(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=k.lastIndex-y.length,y||(y=y||n.units[t]||b,c===i.length&&(i+=y,s.e+=y)),b!==y&&(p=Kr(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<i.length?i.substring(c,i.length):``}else s.r=t===`display`&&i===`none`?yr:vr;return j.test(i)&&(s.e=0),this._pt=s,s},Yr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Xr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Yr[n]||n,t[1]=Yr[r]||r,t.join(` `)},Zr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],ir[o]&&(s=1,o=o===`transformOrigin`?Dr:Er),Hr(n,o);s&&(Hr(n,Er),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ai(n,1),a.uncache=1,kr(r)))}},Qr={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Fn(e._pt,t,n,0,0,Zr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},$r=[1,0,0,1,0,0],ei={},ti=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ni=function(e){var t=Pr(e,Er);return ti(t)?$r:t.substr(7).match(O).map(H)},ri=function(e,t){var n=e._gsap||_e(e),r=e.style,i=ni(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?$r:i):(i===$r&&!e.offsetParent&&e!==Qn&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,Qn.appendChild(e)),i=ni(e),s?r.display=s:Hr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Qn.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ii=function(e,t,n,r,i,a){var o=e._gsap,s=i||ri(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==$r&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Br(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Dr]=`0px 0px`,a&&(Ur(a,o,`xOrigin`,c,y),Ur(a,o,`yOrigin`,l,b),Ur(a,o,`xOffset`,u,o.xOffset),Ur(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ai=function(e,t){var r=e._gsap||new an(e);if(`x`in r&&!t&&!r.uncache)return r;var i=e.style,a=r.scaleX<0,o=`px`,s=`deg`,c=getComputedStyle(e),l=Pr(e,Dr)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ee,te,z;return r.svg=!!(e.getCTM&&Vr(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(i[Er]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[Er]===`none`?``:c[Er])),i.scale=i.rotate=i.translate=`none`),C=ri(e,r.svg),r.svg&&(r.uncache?(P=e.getBBox(),l=r.xOrigin-P.x+`px `+(r.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),ii(e,N||l,!!N||r.originIsAbsolute,r.smooth!==!1,C)),x=r.xOrigin||0,S=r.yOrigin||0,C!==$r&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?sr(O,D)*ar:0,v=k||A?sr(k,A)*ar+h:0,v&&(m*=Math.abs(Math.cos(v*or))),r.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(z=C[6],ee=C[7],I=C[8],L=C[9],R=C[10],te=C[11],u=C[12],d=C[13],f=C[14],w=sr(z,R),g=w*ar,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+L*E,F=z*T+R*E,I=j*-E+I*T,L=M*-E+L*T,R=z*-E+R*T,te=ee*-E+te*T,j=N,M=P,z=F),w=sr(-k,R),_=w*ar,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-L*E,F=k*T-R*E,te=A*E+te*T,D=N,O=P,k=F),w=sr(O,D),h=w*ar,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=H(Math.sqrt(D*D+O*O+k*k)),m=H(Math.sqrt(M*M+z*z)),w=sr(j,M),v=Math.abs(w)>2e-4?w*ar:0,b=te?1/(te<0?-te:te):0),r.svg&&(N=e.getAttribute(`transform`),r.forceCSS=e.setAttribute(`transform`,``)||!ti(Pr(e,Er)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=r.uncache,r.x=u-((r.xPercent=u&&(!t&&r.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*r.xPercent/100:0)+o,r.y=d-((r.yPercent=d&&(!t&&r.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*r.yPercent/100:0)+o,r.z=f+o,r.scaleX=H(p),r.scaleY=H(m),r.rotation=H(h)+s,r.rotationX=H(g)+s,r.rotationY=H(_)+s,r.skewX=v+s,r.skewY=y+s,r.transformPerspective=b+o,(r.zOrigin=parseFloat(l.split(` `)[2])||!t&&r.zOrigin||0)&&(i[Dr]=oi(l)),r.xOffset=r.yOffset=0,r.force3D=n.force3D,r.renderTransform=r.svg?pi:Mr?fi:ci,r.uncache=0,r},oi=function(e){return(e=e.split(` `))[0]+` `+e[1]},si=function(e,t,n){var r=st(t);return H(parseFloat(t)+parseFloat(Kr(e,`x`,n+`px`,r)))+r},ci=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,fi(e,t)},li=`0deg`,ui=`0px`,di=`) `,fi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==li||l!==li)){var x=parseFloat(l)*or,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*or,w=Math.cos(x),a=si(_,a,S*w*-v),o=si(_,o,-Math.sin(x)*-v),s=si(_,s,C*w*-v+v)}h!==ui&&(y+=`perspective(`+h+di),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ui||o!==ui||s!==ui)&&(y+=s!==ui||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+di),c!==li&&(y+=`rotate(`+c+di),l!==li&&(y+=`rotateY(`+l+di),u!==li&&(y+=`rotateX(`+u+di),(d!==li||f!==li)&&(y+=`skew(`+d+`, `+f+di),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+di),_.style[Er]=y||`translate(0, 0)`},pi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=or,c*=or,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=or,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=H(b),x=H(x),S=H(S),C=H(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Kr(f,`x`,a,`px`),y=Kr(f,`y`,o,`px`)),(p||m||h||g)&&(v=H(v+p-(p*b+m*S)+h),y=H(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=H(v+r/100*w.width),y=H(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Er]=w)},mi=function(e,t,n,r,i){var a=360,o=h(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?ar:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*cr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*cr)%a-~~(s/a)*a)),e._pt=u=new Fn(e._pt,t,n,r,s,mr),u.e=c,u.u=`deg`,e._props.push(n),u},hi=function(e,t){for(var n in t)e[n]=t[n];return e},gi=function(e,t,n){var r=hi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Er]=t,o=ai(n,1),Hr(n,Er),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Er],a[Er]=t,o=ai(n,1),a[Er]=c),ir)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=st(c),p=st(l),u=f===p?parseFloat(c):Kr(n,s,c,p),d=parseFloat(l),e._pt=new Fn(e._pt,o,s,u,d-u,pr),e._pt.u=p||0,e._props.push(s));hi(o,r)};ye(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Qr[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return qr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var _i={name:`css`,register:Lr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,r,i,a){var o=this._props,s=e.style,c=r.vars.startAt,l,u,d,f,p,m,g,_,v,y,b,x,S,C,w,T,E;for(g in $n||Lr(),this.styles=this.styles||jr(e),T=this.styles.props,this.tween=r,t)if(g!==`autoRound`&&(u=t[g],!(fe[g]&&dn(g,t,r,i,e,a)))){if(p=typeof u,m=Qr[g],p===`function`&&(u=u.call(r,i,e,a),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=Tt(u)),m)m(this,e,g,u,r)&&(w=1);else if(g.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(g)+``).trim(),u+=``,Bt.lastIndex=0,Bt.test(l)||(_=st(l),v=st(u),v?_!==v&&(l=Kr(e,g,l,v)+v):_&&(u+=_)),this.add(s,`setProperty`,l,u,i,a,0,0,g),o.push(g),T.push(g,0,s[g]);else if(p!==`undefined`){if(c&&g in c?(l=typeof c[g]==`function`?c[g].call(r,i,e,a):c[g],h(l)&&~l.indexOf(`random(`)&&(l=Tt(l)),st(l+``)||l===`auto`||(l+=n.units[g]||st(qr(e,g))||``),(l+``).charAt(1)===`=`&&(l=qr(e,g))):l=qr(e,g),f=parseFloat(l),y=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),g in fr&&(g===`autoAlpha`&&(f===1&&qr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Ur(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),g!==`scale`&&g!==`transform`&&(g=fr[g],~g.indexOf(`,`)&&(g=g.split(`,`)[0]))),b=g in ir,b){if(this.styles.save(g),E=u,p===`string`&&u.substring(0,6)===`var(--`){if(u=Pr(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=u,u=Pr(e,`perspective`),D?e.style.perspective=D:Hr(e,`perspective`)}d=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||ai(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Fn(this._pt,s,Er,0,1,S.renderTransform,S,0,-1),x.dep=1),g===`scale`)this._pt=new Fn(this._pt,S,`scaleY`,S.scaleY,(y?U(S.scaleY,y+d):d)-S.scaleY||0,pr),this._pt.u=0,o.push(`scaleY`,g),g+=`X`;else if(g===`transformOrigin`){T.push(Dr,0,s[Dr]),u=Xr(u),S.svg?ii(e,u,0,C,0,this):(v=parseFloat(u.split(` `)[2])||0,v!==S.zOrigin&&Ur(this,S,`zOrigin`,S.zOrigin,v),Ur(this,s,g,oi(l),oi(u)));continue}else if(g===`svgOrigin`){ii(e,u,1,C,0,this);continue}else if(g in ei){mi(this,S,g,f,y?U(f,y+u):u);continue}else if(g===`smoothOrigin`){Ur(this,S,`smooth`,S.smooth,u);continue}else if(g===`force3D`){S[g]=u;continue}else if(g===`transform`){gi(this,u,e);continue}}else g in s||(g=Ir(g)||g);if(b||(d||d===0)&&(f||f===0)&&!dr.test(u)&&g in s)_=(l+``).substr((f+``).length),d||=0,v=st(u)||(g in n.units?n.units[g]:_),_!==v&&(f=Kr(e,g,l,v)),this._pt=new Fn(this._pt,b?S:s,g,f,(y?U(f,y+d):d)-f,!b&&(v===`px`||g===`zIndex`)&&t.autoRound!==!1?_r:pr),this._pt.u=v||0,b&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=gr):_!==v&&v!==`%`&&(this._pt.b=l,this._pt.r=hr);else if(g in s)Jr.call(this,e,g,l,y?y+u:u);else if(g in e)this.add(e,g,l||e[g],y?y+u:u,i,a);else if(g!==`parseTransform`){ne(g,u);continue}b||(g in s?T.push(g,0,s[g]):typeof e[g]==`function`?T.push(g,2,e[g]()):T.push(g,1,l||e[g])),o.push(g)}}w&&Pn(this)},render:function(e,t){if(t.tween._time||!nr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qr,aliases:fr,getSetter:function(e,t,n){var r=fr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in ir&&t!==Dr&&(e._gsap.x||qr(e,`x`))?n&&tr===n?t===`scale`?Cr:Sr:(tr=n||{})&&(t===`scale`?wr:Tr):e.style&&!v(e.style[t])?br:~t.indexOf(`-`)?xr:En(e,t)},core:{_removeProperty:Hr,_getMatrix:ri}};Yn.utils.checkPrefix=Ir,Yn.core.getStyleSaver=jr,(function(e,t,r,i){var a=ye(e+`,`+t+`,`+r,function(e){ir[e]=1});ye(t,function(e){n.units[e]=`deg`,ei[e]=1}),fr[a[13]]=e+`,`+t,ye(i,function(e){var t=e.split(`:`);fr[t[1]]=a[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),ye(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){n.units[e]=`px`}),Yn.registerPlugin(_i);var W=Yn.registerPlugin(_i)||Yn;W.core.Tween;var vi=1/20,yi=class{timeScale=1;_elapsed=0;hitStopLeft=0;seq=0;queue=[];get elapsed(){return this._elapsed}bindGsap(){W.ticker.remove(W.updateRoot),this._elapsed=W.ticker.time}advance(e){let t=Math.min(Math.max(e,0),vi);if(this.hitStopLeft>0){let e=Math.min(this.hitStopLeft,t);this.hitStopLeft-=e,t-=e}for(t*=this.timeScale,this._elapsed+=t,W.updateRoot(this._elapsed);this.queue.length>0&&this.queue[0].at<=this._elapsed;)this.queue.shift().fn();return t}hitStop(e){this.hitStopLeft=Math.max(this.hitStopLeft,e/1e3)}after(e,t){let n={at:this._elapsed+e/1e3,seq:this.seq++,fn:t},r=this.queue.findIndex(e=>e.at>n.at);r===-1?this.queue.push(n):this.queue.splice(r,0,n)}wait(e){return new Promise(t=>this.after(e,t))}},bi=4294967296,xi=2**21;function Si(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0};return{next:()=>n()/bi,int(e){if(!Number.isInteger(e)||e<=0||e>bi)throw RangeError(`Rng.int: invalid range ${e}`);let t=(bi-e)%e;if(e<=xi){let r=n()*e;for(;r%bi<t;)r=n()*e;return Math.floor(r/bi)}let r=BigInt(e),i=BigInt(t),a=BigInt(n())*r;for(;(a&4294967295n)<i;)a=BigInt(n())*r;return Number(a>>32n)}}}function Ci(e){return e=e+2654435769>>>0,e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),(e^e>>>15)>>>0}function wi(e){let t=e>>>0;return{outcome:Ci(Ci(t^1592590337)),pick:Ci(Ci(t^1592590338)+1663821227),cosmetic:Ci(Ci(t^1592590339)+2232777461)}}var Ti=[1,2,5,10,20,50,100,200,500,1e3],Ei=Ti[0];function Di(e){let t=Ei;for(let n of Ti)n<=e&&(t=n);return t}function Oi(e,t){let n=Ei;for(let r of Ti)r*e<=t&&(n=r);return n}function ki(e,t,n){let r=Math.floor(n/100);return Di(Math.min(e,t,r))}function Ai(e,t,n,r){let i=e;if(t>0)i=Ti.find(t=>t>e)??Ti[Ti.length-1];else{let t=Ti.filter(t=>t<e);i=t.length>0?t[t.length-1]:Ei}return ki(i,n,r)}function ji(e,t,n){return ki(Di(e/2),t,n)}function Mi(e,t,n){return ki(Ti.find(t=>t>=e*2)??Ti[Ti.length-1],t,n)}function Ni(e){let t=String(e),n=``;for(let e=0;e<t.length;e++)e>0&&(t.length-e)%3==0&&(n+=`.`),n+=t[e];return n}function Pi(e){let t=Math.round(e),n=Math.abs(t),r=Math.floor(n/100),i=n%100;return{sign:t<0?`-`:``,body:`${Ni(r)},${i<10?`0`:``}${i}`}}function Fi(e){let{sign:t,body:n}=Pi(e);return`${t}₺${n}`}var Ii=`attached`,Li=1e3,Ri=1001,zi=1002,Bi=1003,Vi=1004,Hi=1005,Ui=1006,Wi=1007,Gi=1008,Ki=1009,qi=1010,Ji=1011,Yi=1012,Xi=1013,Zi=1014,Qi=1015,$i=1016,ea=1017,ta=1018,na=1020,ra=35902,ia=35899,aa=1021,oa=1022,sa=1023,ca=1026,la=1027,ua=1028,da=1029,fa=1030,pa=1031,ma=1033,ha=33776,ga=33777,_a=33778,va=33779,ya=35840,ba=35841,xa=35842,Sa=35843,Ca=36196,wa=37492,Ta=37496,Ea=37488,Da=37489,Oa=37490,ka=37491,Aa=37808,ja=37809,Ma=37810,Na=37811,Pa=37812,Fa=37813,Ia=37814,La=37815,Ra=37816,za=37817,Ba=37818,Va=37819,Ha=37820,Ua=37821,Wa=36492,Ga=36494,Ka=36495,qa=36283,Ja=36284,Ya=36285,Xa=36286,Za=2300,Qa=2301,$a=2302,eo=2303,to=2400,no=2401,ro=2402,io=2500,ao=3200,oo=`srgb`,so=`srgb-linear`,co=`linear`,lo=`srgb`,uo=7680,fo=35044,po=35048,mo=2e3;function ho(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function go(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _o(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function vo(){let e=_o(`canvas`);return e.style.display=`block`,e}var yo={};function bo(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function xo(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=xo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function So(...e){e=xo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Co(...e){let t=e.join(` `);t in yo||(yo[t]=!0,G(...e))}function wo(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var To={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Eo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Do=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Oo=1234567,ko=Math.PI/180,Ao=180/Math.PI;function jo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Do[e&255]+Do[e>>8&255]+Do[e>>16&255]+Do[e>>24&255]+`-`+Do[t&255]+Do[t>>8&255]+`-`+Do[t>>16&15|64]+Do[t>>24&255]+`-`+Do[n&63|128]+Do[n>>8&255]+`-`+Do[n>>16&255]+Do[n>>24&255]+Do[r&255]+Do[r>>8&255]+Do[r>>16&255]+Do[r>>24&255]).toLowerCase()}function Mo(e,t,n){return Math.max(t,Math.min(n,e))}function No(e,t){return(e%t+t)%t}function Po(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Fo(e,t,n){return e===t?0:(n-e)/(t-e)}function Io(e,t,n){return(1-n)*e+n*t}function Lo(e,t,n,r){return Io(e,t,1-Math.exp(-n*r))}function Ro(e,t=1){return t-Math.abs(No(e,t*2)-t)}function zo(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Bo(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Vo(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ho(e,t){return e+Math.random()*(t-e)}function Uo(e){return e*(.5-Math.random())}function Wo(e){e!==void 0&&(Oo=e);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Go(e){return e*ko}function Ko(e){return e*Ao}function qo(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Jo(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Yo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Xo(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:G(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Zo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Qo(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var $o={DEG2RAD:ko,RAD2DEG:Ao,generateUUID:jo,clamp:Mo,euclideanModulo:No,mapLinear:Po,inverseLerp:Fo,lerp:Io,damp:Lo,pingpong:Ro,smoothstep:zo,smootherstep:Bo,randInt:Vo,randFloat:Ho,randFloatSpread:Uo,seededRandom:Wo,degToRad:Go,radToDeg:Ko,isPowerOfTwo:qo,ceilPowerOfTwo:Jo,floorPowerOfTwo:Yo,setQuaternionFromProperEuler:Xo,normalize:Qo,denormalize:Zo},K=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mo(this.x,e.x,t.x),this.y=Mo(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mo(this.x,e,t),this.y=Mo(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},es=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mo(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ns.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ns.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mo(this.x,e.x,t.x),this.y=Mo(this.y,e.y,t.y),this.z=Mo(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mo(this.x,e,t),this.y=Mo(this.y,e,t),this.z=Mo(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ts=new q,ns=new es,rs=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Co(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(is.makeScale(e,t)),this}rotate(e){return Co(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(is.makeRotation(-e)),this}translate(e,t){return Co(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(is.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},is=new rs,as=new rs().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),os=new rs().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ss(){let e={enabled:!0,workingColorSpace:so,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ls(e.r),e.g=ls(e.g),e.b=ls(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=us(e.r),e.g=us(e.g),e.b=us(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?co:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Co(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Co(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[so]:{primaries:t,whitePoint:r,transfer:co,toXYZ:as,fromXYZ:os,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oo},outputColorSpaceConfig:{drawingBufferColorSpace:oo}},[oo]:{primaries:t,whitePoint:r,transfer:lo,toXYZ:as,fromXYZ:os,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oo}}}),e}var cs=ss();function ls(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function us(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ds,fs=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=_o(`canvas`)),ds.width=e.width,ds.height=e.height;let t=ds.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=_o(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ls(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ls(t[e]/255)*255):t[e]=ls(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ps=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ps++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(hs(r[t].image)):e.push(hs(r[t]))}else e=hs(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function hs(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?fs.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var gs=0,_s=new q,vs=class e extends Eo{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ri,i=Ri,a=Ui,o=Gi,s=sa,c=Ki,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gs++}),this.uuid=jo(),this.name=``,this.source=new ms(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rs,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_s).x}get height(){return this.source.getSize(_s).y}get depth(){return this.source.getSize(_s).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x-=Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case zi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y-=Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case zi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vs.DEFAULT_IMAGE=null,vs.DEFAULT_MAPPING=300,vs.DEFAULT_ANISOTROPY=1;var ys=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mo(this.x,e.x,t.x),this.y=Mo(this.y,e.y,t.y),this.z=Mo(this.z,e.z,t.z),this.w=Mo(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mo(this.x,e,t),this.y=Mo(this.y,e,t),this.z=Mo(this.z,e,t),this.w=Mo(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bs=class extends Eo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ys(0,0,e,t),this.scissorTest=!1,this.viewport=new ys(0,0,e,t),this.textures=[];let r=new vs({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},xs=class extends bs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends vs{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Cs=class extends vs{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},J=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),i=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Es,e,Ds)}lookAt(e,t,n){let r=this.elements;return As.subVectors(e,t),As.lengthSq()===0&&(As.z=1),As.normalize(),Os.crossVectors(n,As),Os.lengthSq()===0&&(Math.abs(n.z)===1?As.x+=1e-4:As.z+=1e-4,As.normalize(),Os.crossVectors(n,As)),Os.normalize(),ks.crossVectors(As,Os),r[0]=Os.x,r[4]=ks.x,r[8]=As.x,r[1]=Os.y,r[5]=ks.y,r[9]=As.y,r[2]=Os.z,r[6]=ks.z,r[10]=As.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ws.set(r[0],r[1],r[2]).length(),o=ws.set(r[4],r[5],r[6]).length(),s=ws.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ts.copy(this);let c=1/a,l=1/o,u=1/s;return Ts.elements[0]*=c,Ts.elements[1]*=c,Ts.elements[2]*=c,Ts.elements[4]*=l,Ts.elements[5]*=l,Ts.elements[6]*=l,Ts.elements[8]*=u,Ts.elements[9]*=u,Ts.elements[10]*=u,t.setFromRotationMatrix(Ts),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=mo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=mo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ws=new q,Ts=new J,Es=new q(0,0,0),Ds=new q(1,1,1),Os=new q,ks=new q,As=new q,js=new J,Ms=new es,Ns=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Mo(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Mo(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Mo(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Mo(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Mo(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Mo(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ms.setFromEuler(this),this.setFromQuaternion(Ms,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ns.DEFAULT_ORDER=`XYZ`;var Ps=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Fs=0,Is=new q,Ls=new es,Rs=new J,zs=new q,Bs=new q,Vs=new q,Hs=new es,Us=new q(1,0,0),Ws=new q(0,1,0),Gs=new q(0,0,1),Ks={type:`added`},qs={type:`removed`},Js={type:`childadded`,child:null},Ys={type:`childremoved`,child:null},Xs=class e extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fs++}),this.uuid=jo(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Ns,r=new es,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new J},normalMatrix:{value:new rs}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Us,e)}rotateY(e){return this.rotateOnAxis(Ws,e)}rotateZ(e){return this.rotateOnAxis(Gs,e)}translateOnAxis(e,t){return Is.copy(e).applyQuaternion(this.quaternion),this.position.add(Is.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Us,e)}translateY(e){return this.translateOnAxis(Ws,e)}translateZ(e){return this.translateOnAxis(Gs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(Bs,zs,this.up):Rs.lookAt(zs,Bs,this.up),this.quaternion.setFromRotationMatrix(Rs),r&&(Rs.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Rs),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(So(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ks),Js.child=e,this.dispatchEvent(Js),Js.child=null):So(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qs),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ks),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Vs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Hs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Xs.DEFAULT_UP=new q(0,1,0),Xs.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xs.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zs=class extends Xs{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Qs={type:`move`},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tc={h:0,s:0,l:0},nc={h:0,s:0,l:0};function rc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oo){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cs.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=cs.workingColorSpace){return this.r=e,this.g=t,this.b=n,cs.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=cs.workingColorSpace){if(e=No(e,1),t=Mo(t,0,1),n=Mo(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=rc(i,r,e+1/3),this.g=rc(i,r,e),this.b=rc(i,r,e-1/3)}return cs.colorSpaceToWorking(this,r),this}setStyle(e,t=oo){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oo){let n=ec[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oo){return cs.workingToColorSpace(ic.copy(this),e),Math.round(Mo(ic.r*255,0,255))*65536+Math.round(Mo(ic.g*255,0,255))*256+Math.round(Mo(ic.b*255,0,255))}getHexString(e=oo){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cs.workingColorSpace){cs.workingToColorSpace(ic.copy(this),t);let n=ic.r,r=ic.g,i=ic.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=cs.workingColorSpace){return cs.workingToColorSpace(ic.copy(this),t),e.r=ic.r,e.g=ic.g,e.b=ic.b,e}getStyle(e=oo){cs.workingToColorSpace(ic.copy(this),e);let t=ic.r,n=ic.g,r=ic.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(tc),this.setHSL(tc.h+e,tc.s+t,tc.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tc),e.getHSL(nc);let n=Io(tc.h,nc.h,t),r=Io(tc.s,nc.s,t),i=Io(tc.l,nc.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ic=new Y;Y.NAMES=ec;var ac=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},oc=class extends Xs{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ns,this.environmentIntensity=1,this.environmentRotation=new Ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},sc=new q,cc=new q,lc=new q,uc=new q,dc=new q,fc=new q,pc=new q,mc=new q,hc=new q,gc=new q,_c=new ys,vc=new ys,yc=new ys,bc=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),sc.subVectors(e,t),r.cross(sc);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){sc.subVectors(r,t),cc.subVectors(n,t),lc.subVectors(e,t);let a=sc.dot(sc),o=sc.dot(cc),s=sc.dot(lc),c=cc.dot(cc),l=cc.dot(lc),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,uc)!==null&&uc.x>=0&&uc.y>=0&&uc.x+uc.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,uc)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,uc.x),s.addScaledVector(a,uc.y),s.addScaledVector(o,uc.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return _c.setScalar(0),vc.setScalar(0),yc.setScalar(0),_c.fromBufferAttribute(e,t),vc.fromBufferAttribute(e,n),yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(_c,i.x),a.addScaledVector(vc,i.y),a.addScaledVector(yc,i.z),a}static isFrontFacing(e,t,n,r){return sc.subVectors(n,t),cc.subVectors(e,t),sc.cross(cc).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sc.subVectors(this.c,this.b),cc.subVectors(this.a,this.b),sc.cross(cc).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;dc.subVectors(r,n),fc.subVectors(i,n),mc.subVectors(e,n);let s=dc.dot(mc),c=fc.dot(mc);if(s<=0&&c<=0)return t.copy(n);hc.subVectors(e,r);let l=dc.dot(hc),u=fc.dot(hc);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(dc,a);gc.subVectors(e,i);let f=dc.dot(gc),p=fc.dot(gc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(fc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return pc.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(pc,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(dc,a).addScaledVector(fc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xc=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Cc):Cc.fromBufferAttribute(r,t),Cc.applyMatrix4(e.matrixWorld),this.expandByPoint(Cc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),wc.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cc),Cc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jc),Mc.subVectors(this.max,jc),Tc.subVectors(e.a,jc),Ec.subVectors(e.b,jc),Dc.subVectors(e.c,jc),Oc.subVectors(Ec,Tc),kc.subVectors(Dc,Ec),Ac.subVectors(Tc,Dc);let t=[0,-Oc.z,Oc.y,0,-kc.z,kc.y,0,-Ac.z,Ac.y,Oc.z,0,-Oc.x,kc.z,0,-kc.x,Ac.z,0,-Ac.x,-Oc.y,Oc.x,0,-kc.y,kc.x,0,-Ac.y,Ac.x,0];return!Fc(t,Tc,Ec,Dc,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Tc,Ec,Dc,Mc))?!1:(Nc.crossVectors(Oc,kc),t=[Nc.x,Nc.y,Nc.z],Fc(t,Tc,Ec,Dc,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Sc[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sc[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sc[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sc[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sc[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sc[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sc[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sc[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sc)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sc=[new q,new q,new q,new q,new q,new q,new q,new q],Cc=new q,wc=new xc,Tc=new q,Ec=new q,Dc=new q,Oc=new q,kc=new q,Ac=new q,jc=new q,Mc=new q,Nc=new q,Pc=new q;function Fc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Pc.fromArray(e,a);let o=i.x*Math.abs(Pc.x)+i.y*Math.abs(Pc.y)+i.z*Math.abs(Pc.z),s=t.dot(Pc),c=n.dot(Pc),l=r.dot(Pc);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ic=new q,Lc=new K,Rc=0,zc=class extends Eo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix4(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyNormalMatrix(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.transformDirection(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qo(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qo(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qo(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qo(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qo(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array),r=Qo(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array),r=Qo(r,this.array),i=Qo(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Bc=class extends zc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Vc=class extends zc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Hc=class extends zc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Uc=new xc,Wc=new q,Gc=new q,Kc=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Uc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wc.subVectors(e,this.center);let t=Wc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Wc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wc.copy(e.center).add(Gc)),this.expandByPoint(Wc.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qc=0,Jc=new J,Yc=new Xs,Xc=new q,Zc=new xc,Qc=new xc,$c=new q,el=class e extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=jo(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ho(e)?Vc:Bc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new rs().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jc.makeRotationFromQuaternion(e),this.applyMatrix4(Jc),this}rotateX(e){return Jc.makeRotationX(e),this.applyMatrix4(Jc),this}rotateY(e){return Jc.makeRotationY(e),this.applyMatrix4(Jc),this}rotateZ(e){return Jc.makeRotationZ(e),this.applyMatrix4(Jc),this}translate(e,t,n){return Jc.makeTranslation(e,t,n),this.applyMatrix4(Jc),this}scale(e,t,n){return Jc.makeScale(e,t,n),this.applyMatrix4(Jc),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xc).negate(),this.translate(Xc.x,Xc.y,Xc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Hc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)So(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Zc.setFromBufferAttribute(n),this.morphTargetsRelative?($c.addVectors(this.boundingBox.min,Zc.min),this.boundingBox.expandByPoint($c),$c.addVectors(this.boundingBox.max,Zc.max),this.boundingBox.expandByPoint($c)):(this.boundingBox.expandByPoint(Zc.min),this.boundingBox.expandByPoint(Zc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&So(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)So(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Zc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Qc.setFromBufferAttribute(n),this.morphTargetsRelative?($c.addVectors(Zc.min,Qc.min),Zc.expandByPoint($c),$c.addVectors(Zc.max,Qc.max),Zc.expandByPoint($c)):(Zc.expandByPoint(Qc.min),Zc.expandByPoint(Qc.max))}Zc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)$c.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared($c));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)$c.fromBufferAttribute(a,t),o&&(Xc.fromBufferAttribute(e,t),$c.add(Xc)),r=Math.max(r,n.distanceToSquared($c))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&So(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){So(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new zc(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new zc(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$c.fromBufferAttribute(e,t),$c.normalize(),e.setXYZ(t,$c.x,$c.y,$c.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new zc(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},tl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=jo()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jo()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},nl=new q,rl=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix4(e),this.setXYZ(t,nl.x,nl.y,nl.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyNormalMatrix(e),this.setXYZ(t,nl.x,nl.y,nl.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.transformDirection(e),this.setXYZ(t,nl.x,nl.y,nl.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qo(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qo(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qo(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qo(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qo(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zo(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zo(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zo(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zo(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array),r=Qo(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qo(t,this.array),n=Qo(n,this.array),r=Qo(r,this.array),i=Qo(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){bo(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new zc(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},il=new q,al=new q,ol=new rs,sl=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=il.subVectors(n,t).cross(al.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(il),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ol.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cl=0,ll=class extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cl++}),this.uuid=jo(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new sl().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ul=new q,dl=new q,fl=new q,pl=new q,ml=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ul)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ul.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ul.copy(this.origin).addScaledVector(this.direction,t),ul.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){dl.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),pl.copy(this.origin).sub(dl);let i=e.distanceTo(t)*.5,a=-this.direction.dot(fl),o=pl.dot(this.direction),s=-pl.dot(fl),c=pl.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(dl).addScaledVector(fl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ul.subVectors(e.center,this.origin);let n=ul.dot(this.direction),r=ul.dot(ul)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ul)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,R=E-F*D,ee=O-P*A,te=k-F*A,z=j-P*N,ne=M-F*N,B=z*te-ne*ee,re=L*ne-R*z,ie=ee*R-te*L;if(r){if(B<0||re<0||ie<0)return null}else if((B<0||re<0||ie<0)&&(B>0||re>0||ie>0))return null;let ae=B+re+ie;if(ae===0)return null;let oe=I*(B*D+re*A+ie*N);return(ae>0?oe<0:oe>0)?null:this.at(oe/ae,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hl=class extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ns,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gl=new J,_l=new ml,vl=new Kc,yl=new q,bl=new q,xl=new q,Sl=new q,Cl=new q,wl=new q,Tl=new q,El=new q,Dl=class extends Xs{constructor(e=new el,t=new hl){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){wl.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Cl.fromBufferAttribute(s,e),a?wl.addScaledVector(Cl,r):wl.addScaledVector(Cl.sub(t),r))}t.add(wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(i),_l.copy(e.ray).recast(e.near),!(vl.containsPoint(_l.origin)===!1&&(_l.intersectSphere(vl,yl)===null||_l.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(gl.copy(i).invert(),_l.copy(e.ray).applyMatrix4(gl),(n.boundingBox===null||_l.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,_l)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=kl(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=kl(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=kl(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=kl(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ol(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;El.copy(s),El.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(El);return l<n.near||l>n.far?null:{distance:l,point:El.clone(),object:e}}function kl(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,bl),e.getVertexPosition(c,xl),e.getVertexPosition(l,Sl);let u=Ol(e,t,n,r,bl,xl,Sl,Tl);if(u){let e=new q;bc.getBarycoord(Tl,bl,xl,Sl,e),i&&(u.uv=bc.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=bc.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=bc.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};bc.getNormal(bl,xl,Sl,t.normal),u.face=t,u.barycoord=e}return u}var Al=new ys,jl=new ys,Ml=new ys,Nl=new ys,Pl=new J,Fl=new q,Il=new Kc,Ll=new J,Rl=new ml,zl=class extends Dl{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=Ii,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xc),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Fl),this.boundingBox.expandByPoint(Fl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kc),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Fl),this.boundingSphere.expandByPoint(Fl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Il.copy(this.boundingSphere),Il.applyMatrix4(r),e.ray.intersectsSphere(Il)!==!1&&(Ll.copy(r).invert(),Rl.copy(e.ray).applyMatrix4(Ll),(this.boundingBox===null||Rl.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ys,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():G(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;jl.fromBufferAttribute(r.attributes.skinIndex,e),Ml.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Al.copy(t),t.set(0,0,0,0)):(Al.set(...t,1),t.set(0,0,0)),Al.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ml.getComponent(e);if(r!==0){let i=jl.getComponent(e);Pl.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Nl.copy(Al).applyMatrix4(Pl),r)}}return t.isVector4&&(t.w=Al.w),t.applyMatrix4(this.bindMatrixInverse)}},Bl=class extends Xs{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Vl=class extends vs{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Bi,l=Bi,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hl=new J,Ul=new J,Wl=class e{constructor(e=[],t=[]){this.uuid=jo(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){G(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new J;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ul;Hl.multiplyMatrices(i,t[r]),Hl.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Vl(t,e,e,sa,Qi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(G(`Skeleton: No bone found with UUID:`,r),i=new Bl),this.bones.push(i),this.boneInverses.push(new J().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Gl=class extends zc{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Kl=new J,ql=new J,Jl=[],Yl=new xc,Xl=new J,Zl=new Dl,Ql=new Kc,$l=class extends Dl{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Xl)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xc),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kl),Yl.copy(e.boundingBox).applyMatrix4(Kl),this.boundingBox.union(Yl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Kl),Ql.copy(e.boundingSphere).applyMatrix4(Kl),this.boundingSphere.union(Ql)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Zl.geometry=this.geometry,Zl.material=this.material,Zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(n),e.ray.intersectsSphere(Ql)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Kl),ql.multiplyMatrices(n,Kl),Zl.matrixWorld=ql,Zl.raycast(e,Jl);for(let e=0,n=Jl.length;e<n;e++){let n=Jl[e];n.instanceId=i,n.object=this,t.push(n)}Jl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vl(new Float32Array(r*this.count),r,this.count,ua,Qi));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},eu=new Kc,tu=new K(.5,.5),nu=new q,ru=class{constructor(e=new sl,t=new sl,n=new sl,r=new sl,i=new sl,a=new sl){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),eu.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),eu.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(eu)}intersectsSprite(e){return eu.center.set(0,0,0),eu.radius=.7071067811865476+tu.distanceTo(e.center),eu.applyMatrix4(e.matrixWorld),this.intersectsSphere(eu)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(nu.x=r.normal.x>0?e.max.x:e.min.x,nu.y=r.normal.y>0?e.max.y:e.min.y,nu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},iu=class extends ll{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},au=new q,ou=new q,su=new J,cu=new ml,lu=new Kc,uu=new q,du=new q,fu=class extends Xs{constructor(e=new el,t=new iu){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)au.fromBufferAttribute(t,e-1),ou.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=au.distanceTo(ou);e.setAttribute(`lineDistance`,new Hc(n,1))}else G(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lu.copy(n.boundingSphere),lu.applyMatrix4(r),lu.radius+=i,e.ray.intersectsSphere(lu)===!1)return;su.copy(r).invert(),cu.copy(e.ray).applyMatrix4(su);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=pu(this,e,cu,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=pu(this,e,cu,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=pu(this,e,cu,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=pu(this,e,cu,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function pu(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(au.fromBufferAttribute(s,i),ou.fromBufferAttribute(s,a),n.distanceSqToSegment(au,ou,uu,du)>r)return;uu.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(uu);if(!(c<t.near||c>t.far))return{distance:c,point:du.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var mu=new q,hu=new q,gu=class extends fu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)mu.fromBufferAttribute(t,e),hu.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+mu.distanceTo(hu);e.setAttribute(`lineDistance`,new Hc(n,1))}else G(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},_u=class extends fu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},vu=class extends ll{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yu=new J,bu=new ml,xu=new Kc,Su=new q,Cu=class extends Xs{constructor(e=new el,t=new vu){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xu.copy(n.boundingSphere),xu.applyMatrix4(r),xu.radius+=i,e.ray.intersectsSphere(xu)===!1)return;yu.copy(r).invert(),bu.copy(e.ray).applyMatrix4(yu);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Su.fromBufferAttribute(l,n),wu(Su,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Su.fromBufferAttribute(l,a),wu(Su,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wu(e,t,n,r,i,a,o){let s=bu.distanceSqToPoint(e);if(s<n){let n=new q;bu.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Tu=class extends vs{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eu=class extends vs{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Du=class extends vs{constructor(e,t,n=Zi,r,i,a,o=Bi,s=Bi,c,l=ca,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ou=class extends Du{constructor(e,t=Zi,n=301,r,i,a=Bi,o=Bi,s,c=ca){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ku=class extends vs{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Au=class e extends el{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Hc(c,3)),this.setAttribute(`normal`,new Hc(l,3)),this.setAttribute(`uv`,new Hc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ju=class e extends el{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Hc(u,3)),this.setAttribute(`normal`,new Hc(d,3)),this.setAttribute(`uv`,new Hc(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mu=class e extends el{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Hc(i,3)),this.setAttribute(`normal`,new Hc(i.slice(),3)),this.setAttribute(`uv`,new Hc(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Nu=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){G(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new J;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Mo(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Mo(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pu=class extends Nu{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fu=class extends Pu{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Iu(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Lu=new q,Ru=new q,zu=new Iu,Bu=new Iu,Vu=new Iu,Hu=class extends Nu{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ru.subVectors(r[0],r[1]).add(r[0]),c=Ru);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Lu.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Lu),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),zu.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Bu.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Vu.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(zu.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Bu.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Vu.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(zu.calc(s),Bu.calc(s),Vu.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uu(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Wu(e,t){let n=1-e;return n*n*t}function Gu(e,t){return 2*(1-e)*e*t}function Ku(e,t){return e*e*t}function qu(e,t,n,r){return Wu(e,t)+Gu(e,n)+Ku(e,r)}function Ju(e,t){let n=1-e;return n*n*n*t}function Yu(e,t){let n=1-e;return 3*n*n*e*t}function Xu(e,t){return 3*(1-e)*e*e*t}function Zu(e,t){return e*e*e*t}function Qu(e,t,n,r,i){return Ju(e,t)+Yu(e,n)+Xu(e,r)+Zu(e,i)}var $u=class extends Nu{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Qu(e,r.x,i.x,a.x,o.x),Qu(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ed=class extends Nu{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Qu(e,r.x,i.x,a.x,o.x),Qu(e,r.y,i.y,a.y,o.y),Qu(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},td=class extends Nu{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nd=class extends Nu{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rd=class extends Nu{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(qu(e,r.x,i.x,a.x),qu(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},id=class extends Nu{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(qu(e,r.x,i.x,a.x),qu(e,r.y,i.y,a.y),qu(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ad=class extends Nu{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Uu(o,s.x,c.x,l.x,u.x),Uu(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},od=Object.freeze({__proto__:null,ArcCurve:Fu,CatmullRomCurve3:Hu,CubicBezierCurve:$u,CubicBezierCurve3:ed,EllipseCurve:Pu,LineCurve:td,LineCurve3:nd,QuadraticBezierCurve:rd,QuadraticBezierCurve3:id,SplineCurve:ad}),sd=class extends Nu{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new od[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new od[n.type]().fromJSON(n))}return this}},cd=class extends sd{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new td(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new rd(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new $u(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ad([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Pu(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ld=class extends cd{constructor(e){super(e),this.uuid=jo(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new cd().fromJSON(n))}return this}};function ud(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=dd(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=vd(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return pd(a,o,n,s,c,l,0),o}function dd(e,t,n,r,i){let a;if(i===Hd(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=zd(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=zd(i/r|0,e[i],e[i+1],a);return a&&jd(a,a.next)&&(Bd(a),a=a.next),a}function fd(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(jd(n,n.next)||Ad(n.prev,n,n.next)===0)){if(Bd(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function pd(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Cd(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?hd(e,r,i,a):md(e))t.push(c.i,e.i,l.i),Bd(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=gd(fd(e),t),pd(e,t,n,r,i,a,2)):o===2&&_d(e,t,n,r,i,a):pd(fd(e),t,n,r,i,a,1);break}}}function md(e){let t=e.prev,n=e,r=e.next;if(Ad(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Od(i,s,a,c,o,l,m.x,m.y)&&Ad(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hd(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ad(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Td(p,m,t,n,r),v=Td(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Od(s,u,c,d,l,f,y.x,y.y)&&Ad(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Od(s,u,c,d,l,f,b.x,b.y)&&Ad(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Od(s,u,c,d,l,f,y.x,y.y)&&Ad(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Od(s,u,c,d,l,f,b.x,b.y)&&Ad(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gd(e,t){let n=e;do{let r=n.prev,i=n.next.next;!jd(r,i)&&Md(r,n,n.next,i)&&Id(r,i)&&Id(i,r)&&(t.push(r.i,n.i,i.i),Bd(n),Bd(n.next),n=e=i),n=n.next}while(n!==e);return fd(n)}function _d(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&kd(o,e)){let s=Rd(o,e);o=fd(o,o.next),s=fd(s,s.next),pd(o,t,n,r,i,a,0),pd(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function vd(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=dd(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ed(o))}i.sort(yd);for(let e=0;e<i.length;e++)n=bd(i[e],n);return n}function yd(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function bd(e,t){let n=xd(e,t);if(!n)return t;let r=Rd(n,e);return fd(r,r.next),fd(n,n.next)}function xd(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(jd(e,n))return n;do{if(jd(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Dd(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Id(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Sd(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Sd(e,t){return Ad(e.prev,e,t.prev)<0&&Ad(t.next,e,e.next)<0}function Cd(e,t,n,r){let i=e;do i.z===0&&(i.z=Td(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,wd(i)}function wd(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Td(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ed(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Dd(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Od(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Dd(e,t,n,r,i,a,o,s)}function kd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Fd(e,t)&&(Id(e,t)&&Id(t,e)&&Ld(e,t)&&(Ad(e.prev,e,t.prev)||Ad(e,t.prev,t))||jd(e,t)&&Ad(e.prev,e,e.next)>0&&Ad(t.prev,t,t.next)>0)}function Ad(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function jd(e,t){return e.x===t.x&&e.y===t.y}function Md(e,t,n,r){let i=Pd(Ad(e,t,n)),a=Pd(Ad(e,t,r)),o=Pd(Ad(n,r,e)),s=Pd(Ad(n,r,t));return!!(i!==a&&o!==s||i===0&&Nd(e,n,t)||a===0&&Nd(e,r,t)||o===0&&Nd(n,e,r)||s===0&&Nd(n,t,r))}function Nd(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Pd(e){return e>0?1:e<0?-1:0}function Fd(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Md(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Id(e,t){return Ad(e.prev,e,e.next)<0?Ad(e,t,e.next)>=0&&Ad(e,e.prev,t)>=0:Ad(e,t,e.prev)<0||Ad(e,e.next,t)<0}function Ld(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Rd(e,t){let n=Vd(e.i,e.x,e.y),r=Vd(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function zd(e,t,n,r){let i=Vd(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Bd(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Vd(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hd(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ud=class{static triangulate(e,t,n=2){return ud(e,t,n)}},Wd=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Gd(e),Kd(n,e);let a=e.length;t.forEach(Gd);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Kd(n,t[e]);let o=Ud.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Gd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Kd(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var qd=class e extends el{constructor(e=new ld([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Hc(r,3)),this.setAttribute(`uv`,new Hc(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Jd:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Wd.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Wd.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||So(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Wd.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);z(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);z(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Wd.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),z(x.x,x.y,x.z)):z(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),z(x.x,x.y,x.z)):z(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);z(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?z(i.x,i.y+g[s-1].y,g[s-1].x+n):z(i.x,i.y,c+n)}}}R(),ee();function R(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ne(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ne(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ne(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ne(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ee(){let e=r.length/3,t=0;te(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];te(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function te(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);B(t+r+n,t+i+n,t+i+a,t+r+a)}}}function z(e,t,n){a.push(e),a.push(t),a.push(n)}function ne(e,t,i){re(e),re(t),re(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ie(o[0]),ie(o[1]),ie(o[2])}function B(e,t,i,a){re(e),re(t),re(a),re(t),re(i),re(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ie(s[0]),ie(s[1]),ie(s[3]),ie(s[1]),ie(s[2]),ie(s[3])}function re(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ie(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yd(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new od[i.type]().fromJSON(i)),new e(r,t.options)}},Jd={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function Yd(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Xd=class e extends Mu{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Zd=class e extends el{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Hc(p,3)),this.setAttribute(`normal`,new Hc(m,3)),this.setAttribute(`uv`,new Hc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Qd=class e extends el{constructor(e=new ld([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Hc(r,3)),this.setAttribute(`normal`,new Hc(i,3)),this.setAttribute(`uv`,new Hc(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Wd.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Wd.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Wd.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return $d(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function $d(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ef=class e extends el{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Hc(p,3)),this.setAttribute(`normal`,new Hc(m,3)),this.setAttribute(`uv`,new Hc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},tf=class e extends el{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Hc(c,3)),this.setAttribute(`normal`,new Hc(l,3)),this.setAttribute(`uv`,new Hc(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function nf(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(af(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(af(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function rf(e){let t={};for(let n=0;n<e.length;n++){let r=nf(e[n]);for(let e in r)t[e]=r[e]}return t}function af(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function of(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function sf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cs.workingColorSpace}var cf={clone:nf,merge:rf},lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,df=class extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nf(e.uniforms),this.uniformsGroups=of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new ys().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new rs().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new J().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ff=class extends df{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},pf=class extends ll{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mf=class extends pf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mo(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},hf=class extends ll{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new Y(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gf=class extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ao,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_f=class extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function yf(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function bf(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function xf(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Sf(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Cf=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},wf=class extends Cf{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case no:i=e,o=2*t-n;break;case ro:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case no:a=e,s=2*n-t;break;case ro:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Tf=class extends Cf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ef=class extends Cf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Df=class extends Cf{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Af(n,t,g,y,r);i[p]=Of(x,o,_,b,m)}return i}};function Of(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function kf(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Af(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Of(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=kf(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var jf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=vf(t,this.TimeBufferType),this.values=vf(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vf(e.times,Array),values:vf(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),yf(e.settings)&&(n.settings={inTangents:vf(e.settings.inTangents,Array),outTangents:vf(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Df(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case eo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;yf(this.settings)&&(Mf(this.settings.inTangents,e),Mf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(So(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(So(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){So(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){So(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&go(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){So(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$a,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,yf(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Mf(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}jf.prototype.ValueTypeName=``,jf.prototype.TimeBufferType=Float32Array,jf.prototype.ValueBufferType=Float32Array,jf.prototype.DefaultInterpolation=Qa;var Nf=class extends jf{constructor(e,t,n){super(e,t,n)}};Nf.prototype.ValueTypeName=`bool`,Nf.prototype.ValueBufferType=Array,Nf.prototype.DefaultInterpolation=Za,Nf.prototype.InterpolantFactoryMethodLinear=void 0,Nf.prototype.InterpolantFactoryMethodSmooth=void 0;var Pf=class extends jf{constructor(e,t,n,r){super(e,t,n,r)}};Pf.prototype.ValueTypeName=`color`;var Ff=class extends jf{constructor(e,t,n,r){super(e,t,n,r)}};Ff.prototype.ValueTypeName=`number`;var If=class extends Cf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)es.slerpFlat(i,0,a,c-o,a,c,s);return i}},Lf=class extends jf{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new If(this.times,this.values,this.getValueSize(),e)}};Lf.prototype.ValueTypeName=`quaternion`,Lf.prototype.InterpolantFactoryMethodSmooth=void 0;var Rf=class extends jf{constructor(e,t,n){super(e,t,n)}};Rf.prototype.ValueTypeName=`string`,Rf.prototype.ValueBufferType=Array,Rf.prototype.DefaultInterpolation=Za,Rf.prototype.InterpolantFactoryMethodLinear=void 0,Rf.prototype.InterpolantFactoryMethodSmooth=void 0;var zf=class extends jf{constructor(e,t,n,r){super(e,t,n,r)}};zf.prototype.ValueTypeName=`vector`;var Bf=class{constructor(e=``,t=-1,n=[],r=io){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jo(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Hf(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(jf.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=bf(o);o=xf(o,1,c),s=xf(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ff(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vf(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ff;case`vector`:case`vector2`:case`vector3`:case`vector4`:return zf;case`color`:return Pf;case`quaternion`:return Lf;case`bool`:case`boolean`:return Nf;case`string`:return Rf}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Hf(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Vf(e.type);if(e.times===void 0){let t=[],n=[];Sf(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),yf(e.settings)&&(n.settings={inTangents:vf(e.settings.inTangents,Float32Array),outTangents:vf(e.settings.outTangents,Float32Array)}),n}var Uf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Wf(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Wf(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Wf(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Gf=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Kf=class{constructor(e){this.manager=e===void 0?Gf:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kf.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var qf={},Jf=class extends Error{constructor(e,t){super(e),this.response=t}},Yf=class extends Kf{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Uf.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(qf[e]!==void 0){qf[e].push({onLoad:t,onProgress:n,onError:r});return}qf[e]=[],qf[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&G(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=qf[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Jf(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Uf.add(`file:${e}`,t);let n=qf[e];delete qf[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=qf[e];if(n===void 0)throw this.manager.itemError(e),t;delete qf[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Xf=new WeakMap,Zf=class extends Kf{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Uf.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Xf.get(a);e===void 0&&(e=[],Xf.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=_o(`img`);function s(){l(),t&&t(this);let n=Xf.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Xf.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Uf.remove(`image:${e}`);let n=Xf.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Xf.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uf.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Qf=class extends Kf{constructor(e){super(e)}load(e,t,n,r){let i=new vs,a=new Zf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},$f=class extends Xs{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ep=class extends $f{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Xs.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tp=new J,np=new q,rp=new q,ip=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new ys(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){tp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tp,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ap=new q,op=new es,sp=new q,cp=class extends Xs{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=mo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ap,op,sp),sp.x===1&&sp.y===1&&sp.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ap,op,sp.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ap,op,sp),sp.x===1&&sp.y===1&&sp.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ap,op,sp.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},lp=new q,up=new K,dp=new K,fp=class extends cp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lp.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lp.x,lp.y).multiplyScalar(-e/lp.z),lp.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lp.x,lp.y).multiplyScalar(-e/lp.z)}getViewSize(e,t){return this.getViewBounds(e,up,dp),t.subVectors(dp,up)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ko*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pp=class extends ip{constructor(){super(new fp(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ao*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},mp=class extends $f{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Xs.DEFAULT_UP),this.updateMatrix(),this.target=new Xs,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new pp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hp=class extends ip{constructor(){super(new fp(90,1,.5,500)),this.isPointLightShadow=!0}},gp=class extends $f{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_p=class extends cp{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vp=class extends ip{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yp=class extends $f{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Xs.DEFAULT_UP),this.updateMatrix(),this.target=new Xs,this.shadow=new vp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bp=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},xp=new WeakMap,Sp=class extends Kf{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&G(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&G(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Uf.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{xp.has(a)===!0?(r&&r(xp.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Uf.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),xp.set(s,t),Uf.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Uf.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Cp=-90,wp=1,Tp=class extends Xs{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fp(Cp,wp,e,t);r.layers=this.layers,this.add(r);let i=new fp(Cp,wp,e,t);i.layers=this.layers,this.add(i);let a=new fp(Cp,wp,e,t);a.layers=this.layers,this.add(a);let o=new fp(Cp,wp,e,t);o.layers=this.layers,this.add(o);let s=new fp(Cp,wp,e,t);s.layers=this.layers,this.add(s);let c=new fp(Cp,wp,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ep=class extends fp{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Dp=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Op.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Op(){this._document.hidden===!1&&this.reset()}var kp=`\\[\\]\\.:\\/`,Ap=RegExp(`[\\[\\]\\.:\\/]`,`g`),jp=`[^\\[\\]\\.:\\/]`,Mp=`[^`+kp.replace(`\\.`,``)+`]`,Np=`((?:WC+[\\/:])*)`.replace(`WC`,jp),Pp=`(WCOD+)?`.replace(`WCOD`,Mp),Fp=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,jp),Ip=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,jp),Lp=RegExp(`^`+Np+Pp+Fp+Ip+`$`),Rp=[`material`,`materials`,`bones`,`map`],zp=class{constructor(e,t,n){let r=n||Bp.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bp=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ap,``)}static parseTrackName(e){let t=Lp.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Rp.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){So(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){So(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){So(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){So(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){So(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){So(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){So(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;So(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){So(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){So(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bp.Composite=zp,Bp.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bp.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bp.prototype.GetterByBindingType=[Bp.prototype._getValue_direct,Bp.prototype._getValue_array,Bp.prototype._getValue_arrayElement,Bp.prototype._getValue_toArray],Bp.prototype.SetterByBindingTypeAndVersioning=[[Bp.prototype._setValue_direct,Bp.prototype._setValue_direct_setNeedsUpdate,Bp.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bp.prototype._setValue_array,Bp.prototype._setValue_array_setNeedsUpdate,Bp.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bp.prototype._setValue_arrayElement,Bp.prototype._setValue_arrayElement_setNeedsUpdate,Bp.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bp.prototype._setValue_fromArray,Bp.prototype._setValue_fromArray_setNeedsUpdate,Bp.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Vp(e,t,n,r){let i=Hp(r);switch(n){case aa:return e*t;case ua:return e*t/i.components*i.byteLength;case da:return e*t/i.components*i.byteLength;case fa:return e*t*2/i.components*i.byteLength;case pa:return e*t*2/i.components*i.byteLength;case oa:return e*t*3/i.components*i.byteLength;case sa:return e*t*4/i.components*i.byteLength;case ma:return e*t*4/i.components*i.byteLength;case ha:case ga:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _a:case va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ba:case Sa:return Math.max(e,16)*Math.max(t,8)/4;case ya:case xa:return Math.max(e,8)*Math.max(t,8)/2;case Ca:case wa:case Ea:case Da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Oa:case ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Ga:case Ka:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qa:case Ja:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ya:case Xa:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Hp(e){switch(e){case Ki:case qi:return{byteLength:1,components:1};case Yi:case Ji:case $i:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case Zi:case Xi:case Qi:return{byteLength:4,components:1};case ra:case ia:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Up(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Wp(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Gp={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rs},alphaMap:{value:null},alphaMapTransform:{value:new rs},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rs}},envmap:{envMap:{value:null},envMapRotation:{value:new rs},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rs}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rs}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rs},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rs},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rs},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rs}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rs}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rs}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rs},alphaTest:{value:0},uvTransform:{value:new rs}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rs},alphaMap:{value:null},alphaMapTransform:{value:new rs},alphaTest:{value:0}}},Kp={basic:{uniforms:rf([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Gp.meshbasic_vert,fragmentShader:Gp.meshbasic_frag},lambert:{uniforms:rf([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Gp.meshlambert_vert,fragmentShader:Gp.meshlambert_frag},phong:{uniforms:rf([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gp.meshphong_vert,fragmentShader:Gp.meshphong_frag},standard:{uniforms:rf([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gp.meshphysical_vert,fragmentShader:Gp.meshphysical_frag},toon:{uniforms:rf([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new Y(0)}}]),vertexShader:Gp.meshtoon_vert,fragmentShader:Gp.meshtoon_frag},matcap:{uniforms:rf([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Gp.meshmatcap_vert,fragmentShader:Gp.meshmatcap_frag},points:{uniforms:rf([X.points,X.fog]),vertexShader:Gp.points_vert,fragmentShader:Gp.points_frag},dashed:{uniforms:rf([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gp.linedashed_vert,fragmentShader:Gp.linedashed_frag},depth:{uniforms:rf([X.common,X.displacementmap]),vertexShader:Gp.depth_vert,fragmentShader:Gp.depth_frag},normal:{uniforms:rf([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Gp.meshnormal_vert,fragmentShader:Gp.meshnormal_frag},sprite:{uniforms:rf([X.sprite,X.fog]),vertexShader:Gp.sprite_vert,fragmentShader:Gp.sprite_frag},background:{uniforms:{uvTransform:{value:new rs},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gp.background_vert,fragmentShader:Gp.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rs}},vertexShader:Gp.backgroundCube_vert,fragmentShader:Gp.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gp.cube_vert,fragmentShader:Gp.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gp.equirect_vert,fragmentShader:Gp.equirect_frag},distance:{uniforms:rf([X.common,X.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gp.distance_vert,fragmentShader:Gp.distance_frag},shadow:{uniforms:rf([X.lights,X.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Gp.shadow_vert,fragmentShader:Gp.shadow_frag}};Kp.physical={uniforms:rf([Kp.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rs},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rs},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rs},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rs},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rs},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rs},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rs},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rs},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rs},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rs},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rs},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rs}}]),vertexShader:Gp.meshphysical_vert,fragmentShader:Gp.meshphysical_frag};var qp={r:0,b:0,g:0},Jp=new J,Yp=new rs;Yp.set(-1,0,0,0,1,0,0,0,1);function Xp(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Dl(new Au(1,1,1),new df({name:`BackgroundCubeMaterial`,uniforms:nf(Kp.backgroundCube.uniforms),vertexShader:Kp.backgroundCube.vertexShader,fragmentShader:Kp.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yp),l.material.toneMapped=cs.getTransfer(i.colorSpace)!==lo,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Dl(new Zd(2,2),new df({name:`BackgroundMaterial`,uniforms:nf(Kp.background.uniforms),vertexShader:Kp.background.vertexShader,fragmentShader:Kp.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=cs.getTransfer(i.colorSpace)!==lo,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qp,sf(e)),n.buffers.color.setClear(qp.r,qp.g,qp.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Zp(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qp(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $p(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function em(e){let t=this,n=null,r=0,i=!1,a=!1,o=new sl,s=new rs,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var tm=4,nm=6,rm=20,im=256,am=new _p,om=new Y,sm=null,cm=0,lm=0,um=!1,dm=new q,fm=new q,pm=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=dm}=i;sm=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),lm=this._renderer.getActiveMipmapLevel(),um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sm,cm,lm),this._renderer.xr.enabled=um,e.scissorTest=!1,gm(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sm=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),lm=this._renderer.getActiveMipmapLevel(),um=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:$i,format:sa,colorSpace:so,depthBuffer:!1},r=hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mm(r)),this._blurMaterial=vm(r,e,t),this._ggxMaterial=_m(r,e,t)}return r}_compileMaterial(e){let t=new Dl(new el,e);this._renderer.compile(t,am)}_sceneToCubeUV(e,t,n,r,i){let a=new fp(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(om),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dl(new Au,new hl({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(om),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;gm(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;gm(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,am)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-tm?n-d+tm:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,gm(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,am),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,gm(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,am)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];gm(t,3*l*(r>this._lodMax-tm?r-this._lodMax+tm:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,am)}};function mm(e){let t=[],n=[],r=e,i=e-tm+1+nm;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?fm.set(1,r,n):e===1?fm.set(-n,1,-r):e===2?fm.set(-n,r,1):e===3?fm.set(-1,r,-n):e===4?fm.set(-n,-1,r):fm.set(n,r,-1),fm.toArray(l,(e*6+t)*3)}}let u=new el;u.setAttribute(`position`,new zc(c,3)),u.setAttribute(`outputDirection`,new zc(l,3)),n.push(new Dl(u,null)),r>tm&&r--}return{lodMeshes:n,sizeLods:t}}function hm(e,t,n){let r=new xs(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function gm(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _m(e,t,n){return new df({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:im,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xm(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vm(e,t,n){return new df({name:`SphericalGaussianBlur`,defines:{SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xm(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ym(){return new df({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bm(){return new df({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xm(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sm=class extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Tu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Au(5,5,5),i=new df({name:`CubemapFromEquirect`,uniforms:nf(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Dl(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ui),new Tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Cm(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Sm(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new pm(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new pm(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wm(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Co(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Tm(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Vc:Bc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Em(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Dm(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:So(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Om(e,t,n){let r=new WeakMap,i=new ys;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ss(h,p,m,u);g.type=Qi,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function km(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Am={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jm(e,t,n,r,i,a){let o=new xs(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new el;l.setAttribute(`position`,new Hc([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Hc([0,2,0,0,2,0],2));let u=new ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Dl(l,u),f=new _p(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new xs(t,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),c=new xs(t,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},cs.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Am[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Mm=new vs,Nm=new Du(1,1),Pm=new Ss,Fm=new Cs,Im=new Tu,Lm=[],Rm=[],zm=new Float32Array(16),Bm=new Float32Array(9),Vm=new Float32Array(4);function Hm(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Lm[i];if(a===void 0&&(a=new Float32Array(i),Lm[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Um(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wm(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Gm(e,t){let n=Rm[t];n===void 0&&(n=new Int32Array(t),Rm[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Km(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Um(n,t))return;e.uniform2fv(this.addr,t),Wm(n,t)}}function Jm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Um(n,t))return;e.uniform3fv(this.addr,t),Wm(n,t)}}function Ym(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Um(n,t))return;e.uniform4fv(this.addr,t),Wm(n,t)}}function Xm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Um(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wm(n,t)}else{if(Um(n,r))return;Vm.set(r),e.uniformMatrix2fv(this.addr,!1,Vm),Wm(n,r)}}function Zm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Um(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wm(n,t)}else{if(Um(n,r))return;Bm.set(r),e.uniformMatrix3fv(this.addr,!1,Bm),Wm(n,r)}}function Qm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Um(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wm(n,t)}else{if(Um(n,r))return;zm.set(r),e.uniformMatrix4fv(this.addr,!1,zm),Wm(n,r)}}function $m(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function eh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Um(n,t))return;e.uniform2iv(this.addr,t),Wm(n,t)}}function th(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Um(n,t))return;e.uniform3iv(this.addr,t),Wm(n,t)}}function nh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Um(n,t))return;e.uniform4iv(this.addr,t),Wm(n,t)}}function rh(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ih(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Um(n,t))return;e.uniform2uiv(this.addr,t),Wm(n,t)}}function ah(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Um(n,t))return;e.uniform3uiv(this.addr,t),Wm(n,t)}}function oh(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Um(n,t))return;e.uniform4uiv(this.addr,t),Wm(n,t)}}function sh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Nm.compareFunction=n.isReversedDepthBuffer()?518:515,a=Nm):a=Mm,n.setTexture2D(t||a,i)}function ch(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fm,i)}function lh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Im,i)}function uh(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Pm,i)}function dh(e){switch(e){case 5126:return Km;case 35664:return qm;case 35665:return Jm;case 35666:return Ym;case 35674:return Xm;case 35675:return Zm;case 35676:return Qm;case 5124:case 35670:return $m;case 35667:case 35671:return eh;case 35668:case 35672:return th;case 35669:case 35673:return nh;case 5125:return rh;case 36294:return ih;case 36295:return ah;case 36296:return oh;case 35678:case 36198:case 36298:case 36306:case 35682:return sh;case 35679:case 36299:case 36307:return ch;case 35680:case 36300:case 36308:case 36293:return lh;case 36289:case 36303:case 36311:case 36292:return uh}}function fh(e,t){e.uniform1fv(this.addr,t)}function ph(e,t){let n=Hm(t,this.size,2);e.uniform2fv(this.addr,n)}function mh(e,t){let n=Hm(t,this.size,3);e.uniform3fv(this.addr,n)}function hh(e,t){let n=Hm(t,this.size,4);e.uniform4fv(this.addr,n)}function gh(e,t){let n=Hm(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _h(e,t){let n=Hm(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vh(e,t){let n=Hm(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yh(e,t){e.uniform1iv(this.addr,t)}function bh(e,t){e.uniform2iv(this.addr,t)}function xh(e,t){e.uniform3iv(this.addr,t)}function Sh(e,t){e.uniform4iv(this.addr,t)}function Ch(e,t){e.uniform1uiv(this.addr,t)}function wh(e,t){e.uniform2uiv(this.addr,t)}function Th(e,t){e.uniform3uiv(this.addr,t)}function Eh(e,t){e.uniform4uiv(this.addr,t)}function Dh(e,t,n){let r=this.cache,i=t.length,a=Gm(n,i);Um(r,a)||(e.uniform1iv(this.addr,a),Wm(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Nm:Mm;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Oh(e,t,n){let r=this.cache,i=t.length,a=Gm(n,i);Um(r,a)||(e.uniform1iv(this.addr,a),Wm(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fm,a[e])}function kh(e,t,n){let r=this.cache,i=t.length,a=Gm(n,i);Um(r,a)||(e.uniform1iv(this.addr,a),Wm(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Im,a[e])}function Ah(e,t,n){let r=this.cache,i=t.length,a=Gm(n,i);Um(r,a)||(e.uniform1iv(this.addr,a),Wm(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Pm,a[e])}function jh(e){switch(e){case 5126:return fh;case 35664:return ph;case 35665:return mh;case 35666:return hh;case 35674:return gh;case 35675:return _h;case 35676:return vh;case 5124:case 35670:return yh;case 35667:case 35671:return bh;case 35668:case 35672:return xh;case 35669:case 35673:return Sh;case 5125:return Ch;case 36294:return wh;case 36295:return Th;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return Dh;case 35679:case 36299:case 36307:return Oh;case 35680:case 36300:case 36308:case 36293:return kh;case 36289:case 36303:case 36311:case 36292:return Ah}}var Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dh(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jh(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function Ih(e,t){e.seq.push(t),e.map[t.id]=t}function Lh(e,t,n){let r=e.name,i=r.length;for(Fh.lastIndex=0;;){let a=Fh.exec(r),o=Fh.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ih(n,l===void 0?new Mh(s,e,t):new Nh(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ph(s),Ih(n,e)),n=e}}}var Rh=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Lh(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zh(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bh=37297,Vh=0;function Hh(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Uh=new rs;function Wh(e){cs._getMatrix(Uh,cs.workingColorSpace,e);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(cs.getTransfer(e)){case co:return[t,`LinearTransferOETF`];case lo:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gh(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hh(e.getShaderSource(t),r)}return i}function Kh(e,t){let n=Wh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qh={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Jh(e,t){let n=qh[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Yh=new q;function Xh(){return cs.getLuminanceCoefficients(Yh),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Yh.x.toFixed(4)}, ${Yh.y.toFixed(4)}, ${Yh.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zh(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(eg).join(`
`)}function Qh(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $h(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function eg(e){return e!==``}function tg(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ng(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ig(e){return e.replace(rg,og)}var ag=new Map;function og(e,t){let n=Gp[t];if(n===void 0){let e=ag.get(t);if(e!==void 0)n=Gp[e],G(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ig(n)}var sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(e){return e.replace(sg,lg)}function lg(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ug(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dg={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fg(e){return dg[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pg={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function mg(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:pg[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hg={302:`ENVMAP_MODE_REFRACTION`};function gg(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hg[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _g={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vg(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_g[e.combine]||`ENVMAP_BLENDING_NONE`}function yg(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bg(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fg(n),l=mg(n),u=gg(n),d=vg(n),f=yg(n),p=Zh(n),m=Qh(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eg).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(eg).join(`
`),_.length>0&&(_+=`
`)):(g=[ug(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(eg).join(`
`),_=[ug(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Gp.tonemapping_pars_fragment,n.toneMapping===0?``:Jh(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Gp.colorspace_pars_fragment,Kh(`linearToOutputTexel`,n.outputColorSpace),Xh(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(eg).join(`
`)),o=ig(o),o=tg(o,n),o=ng(o,n),s=ig(s),s=tg(s,n),s=ng(s,n),o=cg(o),s=cg(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zh(i,i.VERTEX_SHADER,y),S=zh(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gh(i,x,`vertex`),n=Gh(i,S,`fragment`);So(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rh(i,h),T=$h(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bh)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vh++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xg=0,Sg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cg(e),t.set(e,n)),n}},Cg=class{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}};function wg(e){return e===1030||e===37490||e===36285}function Tg(e,t,n,r,i,a){let o=new Ps,s=new Sg,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Kp[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,R=!!i.aoMap,ee=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,ne=!!i.displacementMap,B=!!i.emissiveMap,re=!!i.metalnessMap,ie=!!i.roughnessMap,ae=i.anisotropy>0,oe=i.clearcoat>0,se=i.dispersion>0,ce=i.retroreflectivity>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=ae&&!!i.anisotropyMap,pe=oe&&!!i.clearcoatMap,me=oe&&!!i.clearcoatNormalMap,he=oe&&!!i.clearcoatRoughnessMap,ge=le&&!!i.iridescenceMap,V=le&&!!i.iridescenceThicknessMap,_e=ue&&!!i.sheenColorMap,ve=ue&&!!i.sheenRoughnessMap,ye=!!i.specularMap,H=!!i.specularColorMap,be=!!i.specularIntensityMap,U=de&&!!i.transmissionMap,xe=de&&!!i.thicknessMap,Se=!!i.gradientMap,Ce=!!i.alphaMap,we=i.alphaTest>0,Te=!!i.alphaHash,Ee=!!i.extensions,De=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=e.toneMapping);let Oe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:cs.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:te,normalMap:z,displacementMap:ne,emissiveMap:B,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&wg(i.normalMap.format),metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:fe,clearcoat:oe,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:se,retroreflection:ce,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:V,sheen:ue,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:H,specularIntensityMap:be,transmission:de,transmissionMap:U,thicknessMap:xe,gradientMap:Se,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ce,alphaTest:we,alphaHash:Te,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:R&&m(i.aoMap.channel),lightMapUv:ee&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:ne&&m(i.displacementMap.channel),emissiveMapUv:B&&m(i.emissiveMap.channel),metalnessMapUv:re&&m(i.metalnessMap.channel),roughnessMapUv:ie&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:V&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(i.sheenRoughnessMap.channel),specularMapUv:ye&&m(i.specularMap.channel),specularColorMapUv:H&&m(i.specularColorMap.channel),specularIntensityMapUv:be&&m(i.specularIntensityMap.channel),transmissionMapUv:U&&m(i.transmissionMap.channel),thicknessMapUv:xe&&m(i.thicknessMap.channel),alphaMapUv:Ce&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||ae),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Ce),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:De,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&cs.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&cs.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ee&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ee&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Kp[t];n=cf.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bg(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Eg(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dg(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Og(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kg(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Dg),r.length>1&&r.sort(t||Og),i.length>1&&i.sort(t||Og)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ag(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kg,e.set(t,[i])):n>=r.length?(i=new kg,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function Mg(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ng=0;function Pg(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fg(e){let t=new jg,n=Mg(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new J,o=new J;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Pg);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ng++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ig(e){let t=new Fg(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Lg(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ig(e),t.set(n,[a])):r>=i.length?(a=new Ig(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bg=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],Vg=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Hg=new J,Ug=new q,Wg=new q;function Gg(e,t,n){let r=new ru,i=new K,a=new K,o=new ys,s=new gf,c=new _f,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new df({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Rg,fragmentShader:zg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new el;m.setAttribute(`position`,new zc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Dl(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new xs(i.x,i.y,{format:fa,type:$i,minFilter:Ui,magFilter:Ui,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Du(i.x,i.y,Qi),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ca,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bi,d.map.depthTexture.magFilter=Bi}else l.isPointLight?(d.map=new Sm(i.x),d.map.depthTexture=new Ou(i.x,Zi)):(d.map=new xs(i.x,i.y),d.map.depthTexture=new Du(i.x,i.y,Zi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ca,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ui,d.map.depthTexture.magFilter=Ui):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bi,d.map.depthTexture.magFilter=Bi);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ug.setFromMatrixPosition(l.matrixWorld),e.position.copy(Ug),Wg.copy(e.position),Wg.add(Bg[t]),e.up.copy(Vg[t]),e.lookAt(Wg),e.updateMatrixWorld(),n.makeTranslation(-Ug.x,-Ug.y,-Ug.z),Hg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Hg,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new xs(i.x,i.y,{format:fa,type:$i}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kg(e,t){function n(){let t=!1,n=new ys,r=null,i=new ys(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?re(e.DEPTH_TEST):ie(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=To[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?re(e.STENCIL_TEST):ie(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},R=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),te=new ys().fromArray(R),z=new ys().fromArray(ee);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let B={};B[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),B[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),B[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),re(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),re(e.CULL_FACE),ue(0);function re(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ie(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ae(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ie(e.BLEND),g=!1);else if(g===!1&&(re(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:So(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:So(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:So(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:So(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?ie(e.CULL_FACE):re(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):ie(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?ie(e.CULL_FACE):(re(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(re(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ie(e.POLYGON_OFFSET_FILL)}function ge(t){t?re(e.SCISSOR_TEST):ie(e.SCISSOR_TEST)}function V(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function _e(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||B[t]),i.type=t,i.texture=n)}function ve(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){So(`WebGLState:`,e)}}function H(){try{e.compressedTexImage3D(...arguments)}catch(e){So(`WebGLState:`,e)}}function be(){try{e.texSubImage2D(...arguments)}catch(e){So(`WebGLState:`,e)}}function U(){try{e.texSubImage3D(...arguments)}catch(e){So(`WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){So(`WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage3D(...arguments)}catch(e){So(`WebGLState:`,e)}}function Ce(){try{e.texStorage2D(...arguments)}catch(e){So(`WebGLState:`,e)}}function we(){try{e.texStorage3D(...arguments)}catch(e){So(`WebGLState:`,e)}}function Te(){try{e.texImage2D(...arguments)}catch(e){So(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){So(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function Ae(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Me(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:re,disable:ie,bindFramebuffer:ae,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:V,bindTexture:_e,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:H,texImage2D:Te,texImage3D:Ee,pixelStorei:Oe,getParameter:De,updateUBOMapping:je,uniformBlockBinding:Me,texStorage2D:Ce,texStorage3D:we,texSubImage2D:be,texSubImage3D:U,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:ke,viewport:Ae,reset:Ne}}function qg(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):_o(`canvas`)}function g(e,t,n){let r=1,i=ye(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?co:cs.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&_e(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ie(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ie(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ie(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ae(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let R={[Li]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[zi]:e.MIRRORED_REPEAT},ee={[Bi]:e.NEAREST,[Vi]:e.NEAREST_MIPMAP_NEAREST,[Hi]:e.NEAREST_MIPMAP_LINEAR,[Ui]:e.LINEAR,[Wi]:e.LINEAR_MIPMAP_NEAREST,[Gi]:e.LINEAR_MIPMAP_LINEAR},te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function z(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ee[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ee[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ne(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function B(e,t,n){return Math.floor(Math.floor(e/n)/t)}function re(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=B(n.start,r.width,4),c=B(t.start,r.width,4);n.start<=i+1&&a===c&&B(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ie(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ne(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=cs.getPrimaries(cs.workingColorSpace),r=o.colorSpace===``?null:cs.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=ve(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);z(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===la,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&re(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Vp(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Vp(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=ye(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=ye(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,o,s){if(o.image.length!==6)return;let c=ne(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=cs.getPrimaries(cs.workingColorSpace),r=o.colorSpace===``?null:cs.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ve(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);z(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=ye(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ge(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);V(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,l.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),z(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=ge(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)V(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function le(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ce(i.__webglFramebuffer[0],t,0):ce(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,i){let a=r.get(t);n!==void 0&&oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&le(t)}function de(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&V(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ge(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),z(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),z(c,a),oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),z(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&le(t)}function fe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let pe=[],me=[];function he(t){if(t.samples>0){if(V(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(pe.length=0,me.length=0,pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(pe.push(l),me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ge(e){return Math.min(i.maxSamples,e.samples)}function V(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function _e(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ve(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(cs.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):So(`WebGLTextures: Unsupported texture color space:`,n)),t}function ye(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=V,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Jg(e,t){function n(n,r=``){let i,a=cs.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new df({vertexShader:Yg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Dl(new Zd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qg=class extends Eo{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Zg,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new fp;T.viewport=new ys;let E=new fp;E.viewport=new ys;let D=[T,E],O=new Ep,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new $s,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new $s,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new $s,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?la:ca,a=_.stencil?na:Zi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xs(d.textureWidth,d.textureHeight,{format:sa,type:Ki,depthTexture:new Du(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xs(f.framebufferWidth,f.framebufferHeight,{format:sa,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new q,F=new q;function I(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;L(O,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?I(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),R(e,O,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ao*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ee=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new fp,o.layers.enable(n),o.viewport=new ys,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ku,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ee&&ee(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let z=new Up;z.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}},$g=new J,e_=new rs;e_.set(-1,0,0,0,1,0,0,0,1);function t_(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,sf(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(e_),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function n_(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return So(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),i_=null;function a_(){return i_===null&&(i_=new Vl(r_,16,16,fa,$i),i_.name=`DFG_LUT`,i_.minFilter=Ui,i_.magFilter=Ui,i_.wrapS=Ri,i_.wrapT=Ri,i_.generateMipmaps=!1,i_.needsUpdate=!0),i_}var o_=class{constructor(e={}){let{canvas:t=vo(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ki}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ma,pa,da]),g=new Set([Ki,Zi,Yi,na,ea,ta]),_=new Uint32Array(4),v=new Int32Array(4),y=new q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=oo;let j=0,M=0,N=null,P=-1,F=null,I=new ys,L=new ys,R=null,ee=new Y(0),te=0,z=t.width,ne=t.height,B=1,re=null,ie=null,ae=new ys(0,0,z,ne),oe=new ys(0,0,z,ne),se=!1,ce=new ru,le=!1,ue=!1,de=new J,fe=new q,pe=new ys,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return N===null?B:1}let V=n;function _e(e,n){return t.getContext(e,n)}let ve,ye,H,be,U,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),V===null){let t=`webgl2`;if(V=_e(t,e),V===null)throw _e(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),So(`WebGLRenderer: `+e.message),e}function ze(){ve=new wm(V),ve.init(),Ie=new Jg(V,ve),ye=new $p(V,ve,e,Ie),H=new Kg(V,ve),ye.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),O=V.createFramebuffer(),k=V.createFramebuffer(),A=V.createFramebuffer(),be=new Dm(V),U=new Eg,xe=new qg(V,ve,H,U,ye,Ie,be),Se=new Cm(T),Ce=new Wp(V),Le=new Zp(V,Ce),we=new Tm(V,Ce,be,Le),Te=new km(V,we,Ce,Le,be),Ne=new Om(V,ye,xe),Ae=new em(U),Ee=new Tg(T,Se,ve,ye,Le,Ae),De=new t_(T,U),Oe=new Ag,ke=new Lg(ve),Me=new Xp(T,Se,H,Te,p,s),je=new Gg(T,Te,ye),Re=new n_(V,be,ye,H),Pe=new Qp(V,ve,be),Fe=new Em(V,ve,be),be.programs=Ee.programs,T.capabilities=ye,T.extensions=ve,T.properties=U,T.renderLists=Oe,T.shadowMap=je,T.state=H,T.info=be}m!==1009&&(w=new jm(m,t.width,t.height,o,r,i));let Be=new Qg(T,V);this.xr=Be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(e){e!==void 0&&(B=e,this.setSize(z,ne,!1))},this.getSize=function(e){return e.set(z,ne)},this.setSize=function(e,n,r=!0){Be.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(z=e,ne=n,t.width=Math.floor(e*B),t.height=Math.floor(n*B),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(z*B,ne*B).floor()},this.setDrawingBufferSize=function(e,n,r){z=e,ne=n,B=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)So(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ae)},this.setViewport=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),H.viewport(I.copy(ae).multiplyScalar(B).round())},this.getScissor=function(e){return e.copy(oe)},this.setScissor=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),H.scissor(L.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(e){H.setScissorTest(se=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){ie=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,V.clearBufferiv(V.COLOR,0,v))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Me.dispose(),Oe.dispose(),ke.dispose(),U.dispose(),Se.dispose(),Te.dispose(),Le.dispose(),Re.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,Xe),Be.removeEventListener(`sessionend`,Ze),Qe.stop()};function Ve(e){e.preventDefault(),bo(`WebGLRenderer: Context Lost.`),E=!0}function He(){bo(`WebGLRenderer: Context Restored.`),E=!1;let e=be.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;ze(),be.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function Ue(e){So(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){Ke(e),U.remove(e)}function Ke(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ee.releaseProgram(e)}),e.isShaderMaterial&&Ee.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ct(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=we.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=Ce.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*ge()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*ge()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(ve.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ce.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),le===!0&&Ae.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,it(e,t,r),e.side=0,e.needsUpdate=!0,it(e,t,r),e.side=2):it(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ue=this.localClippingEnabled,le=Ae.init(this.clippingPlanes,ue),le===!0&&Ae.setGlobalState(this.clippingPlanes,t),D!==null&&je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];qe(o,n,t,e),r.add(o)}else qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ve.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new Up;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Be.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Be.addEventListener(`sessionstart`,Xe),Be.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){So(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=ke.get(e,C.length),x.init(t),x.state.textureUnits=xe.getTextureUnits(),C.push(x),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ce.setFromProjectionMatrix(de,mo,t.reversedDepth),ue=this.localClippingEnabled,le=Ae.init(this.clippingPlanes,ue),b=Oe.get(e,S.length),b.init(),S.push(b),Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&$e(e,t,-1/0,T.sortObjects)}$e(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(re,ie),he=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,he&&Me.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ae.beginShadows();let i=x.state.shadowsArray;if(je.render(i,e,t),le===!0&&Ae.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];tt(n,r,e,a)}he&&Me.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];et(b,e,n,n.viewport)}}else r.length>0&&tt(n,r,e,t),he&&Me.render(e),et(b,e,t)}N!==null&&M===0&&(xe.updateMultisampleRenderTarget(N),xe.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],xe.setTextureUnits(x.state.textureUnits),le===!0&&Ae.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function $e(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ce)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let i=Te.update(e),a=e.material;a.visible&&b.push(e,i,a,n,pe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ce))){let i=Te.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,pe.z,s,t)}}else a.visible&&b.push(e,i,a,n,pe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)$e(i[e],t,n,r)}function et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),le===!0&&Ae.setGlobalState(T.clippingPlanes,n),r&&H.viewport(I.copy(r)),i.length>0&&nt(i,t,n),a.length>0&&nt(a,t,n),o.length>0&&nt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ve.has(`EXT_color_buffer_half_float`)||ve.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new xs(1,1,{generateMipmaps:!0,type:e?$i:Ki,minFilter:Gi,samples:Math.max(4,ye.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cs.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ee),te=T.getClearAlpha(),te<1&&T.setClearColor(16777215,.5),T.clear(),he&&Me.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),le===!0&&Ae.setGlobalState(T.clippingPlanes,r),nt(e,n,r),xe.updateMultisampleRenderTarget(a),xe.updateRenderTargetMipmap(a),ve.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,rt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(xe.updateMultisampleRenderTarget(a),xe.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ee,te),d!==void 0&&(r.viewport=d),T.toneMapping=u}function nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&rt(o,t,n,s,l,c)}}function rt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function it(e,t,n){t.isScene!==!0&&(t=me);let r=U.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ee.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ee.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Se.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ot(e,s),d}else s.uniforms=Ee.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ee.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ae.uniform),ot(e,s),r.needsLights=ut(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function at(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rh.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ot(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function st(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function ct(e,t,n,r,i){t.isScene!==!0&&(t=me),xe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:cs.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Se.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=x.state.lights;if(le===!0&&(ue===!0||e!==F)){let t=e===F&&r.id===P;Ae.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ae.numPlanes||v.numIntersection!==Ae.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=it(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(H.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=st(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(V,`projectionMatrix`,e.projectionMatrix),O.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(V,fe.setFromMatrixPosition(e.matrixWorld)),ye.logarithmicDepthBuffer&&O.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(V,`sunShadowMap`,y.state.sunShadowMap,xe),y.state.directionalShadowMap.length>0&&O.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,xe),y.state.spotShadowMap.length>0&&O.setValue(V,`spotShadowMap`,y.state.spotShadowMap,xe),y.state.pointShadowMap.length>0&&O.setValue(V,`pointShadowMap`,y.state.pointShadowMap,xe)),i.isSkinnedMesh){O.setOptional(V,i,`bindMatrix`),O.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(V,`boneTexture`,e.boneTexture,xe))}i.isBatchedMesh&&(O.setOptional(V,i,`batchingTexture`),O.setValue(V,`batchingTexture`,i._matricesTexture,xe),O.setOptional(V,i,`batchingIdTexture`),O.setValue(V,`batchingIdTexture`,i._indirectTexture,xe),O.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(V,`batchingColorTexture`,i._colorsTexture,xe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ne.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=a_()),w){if(O.setValue(V,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&lt(k,E),a&&r.fog===!0&&De.refreshFogUniforms(k,a),De.refreshMaterialUniforms(k,r,B,ne,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Rh.upload(V,at(v),k,xe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rh.upload(V,at(v),k,xe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(V,`center`,i.center),O.setValue(V,`modelViewMatrix`,i.modelViewMatrix),O.setValue(V,`normalMatrix`,i.normalMatrix),O.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,S),Re.bind(n,S)}}return S}function lt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ut(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest,H.viewport(I),H.scissor(L),H.setScissorTest(R),P=-1;return}if(o.__webglFramebuffer===void 0)xe.setupRenderTarget(e);else if(o.__hasExternalTextures)xe.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);xe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&xe.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),R=e.scissorTest}else I.copy(ae).multiplyScalar(B).floor(),L.copy(oe).multiplyScalar(B).floor(),R=se;if(n!==0&&(r=O),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(I),H.scissor(L),H.setScissorTest(R),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}P=-1};function dt(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ye.textureFormatReadable(e.format),t.__typeReadable=ye.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){So(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=dt(o);if(u.__formatReadable===!1){So(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){So(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a)}finally{let e=N===null?null:U.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=N===null?null:U.get(N).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await wo(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;xe.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(xe.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(xe.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(xe.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,k),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&xe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?xe.setTextureCube(e,0):e.isData3DTexture?xe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?xe.setTexture2DArray(e,0):xe.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,H.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return mo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=cs._getDrawingBufferColorSpace(e),t.unpackColorSpace=cs._getUnpackColorSpace()}};function s_(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}[`#b94a31`,`#c4553a`,`#ad432c`,`#c95e40`,`#b65038`,`#bf4d33`,`#a8402b`].map(s_),[`#6a655d`,`#5e5a54`,`#726b60`,`#56524d`,`#635d55`,`#6e6962`,`#5a5650`,`#67605a`].map(s_);var c_={maxDpr:2,pixelBudget:22e5,minDpr:.75},l_={windowFrames:90,lateMs:20,lateShare:.25,step:.85,tries:2,helped:.6,warmupMs:2e3,settleMs:1e3,gapMs:250},u_=e=>Math.floor(e*100)/100;function d_(e,t,n,r){let i=Math.min(Number.isFinite(n)&&n>0?n:1,r.maxDpr),a=Math.sqrt(r.pixelBudget/Math.max(1,e*t));return u_(Math.max(Math.min(i,1),Math.min(i,a)))}var f_=class{o;scale=1;lastBase;warmLeft=l_.warmupMs;frames=0;late=0;phase=`watch`;origin={scale:1,share:0};tries=0;constructor(e=c_){this.o=e,this.lastBase=e.maxDpr}dpr(e,t,n){let r=d_(e,t,n,this.o);return this.lastBase=r,Math.max(Math.min(r,this.o.minDpr),u_(r*this.scale))}reset(){this.warmLeft=l_.warmupMs,this.frames=0,this.late=0}frame(e){if(!(e>=0)||e>l_.gapMs)return this.frames=0,this.late=0,!1;if(this.warmLeft>0)return this.warmLeft-=e,!1;if(this.frames++,e>l_.lateMs&&this.late++,this.frames<l_.windowFrames)return!1;let t=this.late/this.frames;if(this.frames=0,this.late=0,this.phase===`done`)return!1;if(this.phase===`verify`){if(t<l_.lateShare||t<=this.origin.share*l_.helped)this.phase=`watch`;else if(this.tries>=l_.tries)return this.scale=this.origin.scale,this.phase=`done`,this.warmLeft=l_.settleMs,!0;else return this.step()}return t<l_.lateShare?!1:(this.origin={scale:this.scale,share:t},this.tries=0,this.step())}step(){return this.lastBase*this.scale<=this.o.minDpr?(this.phase=`done`,!1):(this.scale*=l_.step,this.tries++,this.phase=`verify`,this.warmLeft=l_.settleMs,!0)}},p_={volume:.3,sampleRate:44100,audioContext:new AudioContext,play:function(...e){return this.playSamples([this.buildSamples(...e)])},playSamples:function(e,t=1,n=1,r=0,i=!1){let a=e.length,o=e[0].length,s=this.audioContext.createBuffer(a,o,this.sampleRate),c=this.audioContext.createBufferSource();e.forEach((e,t)=>s.getChannelData(t).set(e)),c.buffer=s,c.playbackRate.value=n,c.loop=i;let l=this.audioContext.createGain();l.gain.value=this.volume*t,l.connect(this.audioContext.destination),c.gainNode=l;let u=new StereoPannerNode(this.audioContext,{pan:r});return c.connect(u).connect(l),c.start(),c},buildSamples:function(e=1,t=.05,n=220,r=0,i=0,a=.1,o=0,s=1,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=1,v=0,y=0,b=0){let x=this.sampleRate,S=Math.PI*2,C=Math.abs,w=e=>e<0?-1:1,T=c*=500*S/x/x,E=n*=(1+t*2*Math.random()-t)*S/x,D=0,O=0,k=0,A=1,j,M,N=0,P=0,F=0,I,L=S*C(b)*2/x,R=Math.cos(L),ee=Math.sin(L)/2/2,te=1+ee,z=-2*R/te,ne=(1-ee)/te,B=(1+w(b)*R)/2/te,re=-(w(b)+R)/te,ie=B,ae=0,oe=0,se=0,ce=0;for(r=r*x||9,v*=x,i*=x,a*=x,g*=x,l*=500*S/x**3,m*=S/x,u*=S/x,d*=x,f=f*x|0,j=r+v+i+a+g|0,M=new Float32Array(j>0?j:0);P<j;M[P++]=F*e)++k%(h*100|0)||(F=o?o>1?o>2?o>3?o>4?N/S%1<s/2?1:-1:Math.sin(N**3):Math.max(Math.min(Math.tan(N),1),-1):1-(2*N/S%2+2)%2:1-4*C(Math.round(N/S)-N/S):Math.sin(N),F=(f?1-y+y*Math.sin(S*P/f):1)*(o>4?F:w(F)*C(F)**s)*(P<r?P/r:P<r+v?1-(P-r)/v*(1-_):P<r+v+i?_:P<j-g?(j-P-g)/a*_:0),F=g?F/2+(g>P?0:(P<j-g?1:(j-P)/g)*M[P-g|0]/2/e):F,b&&(F=ce=ie*ae+re*(ae=oe)+B*(oe=F)-ne*se-z*(se=ce))),I=(n+=c+=l)*Math.cos(m*D++),N+=I+I*p*(P*P*S%2-1),A&&++A>d&&(n+=u,E+=u,A=0),f&&!(++O%f)&&(n=E,c=T,A||=1);return M},getNote:function(e=0,t=440){return t*2**(e/12)}},m_=.95,h_=0,g_=1,__=2,v_=4,y_=5,b_=e=>-e/2,x_=e=>e/2,S_=(e,t)=>e*2**(t/12),C_={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function w_(e){let t=/^([A-G])([#b]?)(-?\d)$/.exec(e);if(!t)throw Error(`bad note ${e}`);return 440*2**((12*(Number(t[3])+1)+C_[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0)-69)/12)}function T_(e){let t=e.freq??(e.shape===v_?2e3:220),n=e.slide??0,r=e.deltaSlide??0;if(e.dropTo!==void 0){let i=(e.attack??0)+(e.decay??0)+(e.sustain??0)+(e.release??.1);n=(e.dropTo-t)/(250*i),r=-n/i}return[1,0,t,e.attack??0,e.sustain??0,e.release??.1,e.shape??h_,e.curve??1,n,r,e.jump??0,e.jumpTime??0,e.repeat??0,e.noise??0,e.mod??0,e.crush??0,e.delay??0,e.sustainVol??1,e.decay??0,e.tremolo??0,e.filter??0]}function E_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function D_(e,t,n){let r=1/t,i=n/(125*r);return{freq:e-2/3*n,slide:i,deltaSlide:-2*i/r,repeat:r}}function O_(e,t,n=740,r=2.2){return[...[[1,1,1],[1.0035,.6,.9],[2.02,.42,.62],[2.74,.4,.45],[3.76,.26,.28],[5.1,.16,.16],[6.9,.1,.09]].map(([i,a,o])=>({at:e,freq:n*i,shape:h_,attack:.001,decay:.08,sustainVol:.55,release:r*o,gain:t*a*.6})),{at:e,shape:v_,attack:5e-4,release:.02,filter:x_(3e3),gain:t*.35},{at:e,freq:n*4.3,shape:g_,slide:-40,attack:5e-4,release:.015,gain:t*.2}]}function k_(e,t,n,r,i=0,a=!1){let o={attack:.012,decay:.06,sustainVol:.72,sustain:Math.max(0,n-.07),release:n>.3?.24:.09},s=a?D_(e,5.5,e*.012):{freq:e};return[{...o,...s,at:t,shape:__,filter:b_(Math.min(e*4.5,3400)),gain:r,pan:i},{...o,...s,at:t,freq:e*1.004,shape:__,filter:b_(Math.min(e*3,2600)),gain:r*.4,pan:-i},{...o,at:t,freq:e/2,shape:g_,gain:r*.5,pan:i}]}function A_(e,t,n,r,i=!1){let a=e.length>1?.55:0;return e.flatMap((o,s)=>k_(o,t,n,r,e.length>1?-a+2*a*s/(e.length-1):0,i))}function j_(e,t,n=75){return[{at:e,freq:n,shape:h_,curve:.6,dropTo:n*.55,attack:.002,decay:.04,sustainVol:.6,release:.3,gain:t},{at:e,shape:v_,attack:5e-4,release:.03,filter:b_(2200),gain:t*.35}]}function M_(e,t,n=1){return[{at:e,freq:1800+n*97,shape:v_,attack:8e-4,release:.12,filter:x_(1500),gain:t*.7},{at:e,freq:210,shape:g_,slide:-6,attack:.001,release:.06,gain:t*.5},{at:e,freq:2600+n*131,shape:v_,attack:8e-4,release:.05,filter:b_(4500),gain:t*.5}]}function N_(e,t,n){return[{at:e,freq:3100,shape:v_,attack:.002,decay:.08,sustainVol:.4,release:t,filter:x_(4500),gain:n},{at:e,freq:3700,shape:v_,attack:.002,release:.12,filter:x_(2e3),gain:n*.6}]}function P_(e,t,n,r=0){let i=4/3*t;return[{at:e,freq:t,jump:i-t,jumpTime:.05,attack:.001,decay:.03,sustainVol:.55,sustain:.04,release:.18,shape:g_,gain:n,pan:r},{at:e+.05,freq:i*2,attack:.002,release:.12,shape:h_,gain:n*.22,pan:r}]}function F_(e,t,n,r,i){let a=E_(e),o=[1567.98,1760,1975.53,2349.32,2637.02],s=[];for(let e=0;e<t;e++){let c=n+(r-n)*e/Math.max(1,t-1)+(a()-.5)*.03;s.push(...P_(Math.max(0,c),o[Math.floor(a()*o.length)],i*(.6+a()*.4),(a()*2-1)*.7))}return s}function I_(e,t,n,r=0){return t.map(([t,i],a)=>({at:e+a*n,freq:1700+a*211,shape:v_,attack:n*2,release:n*2,filter:b_(t),gain:i*.5,pan:r}))}function L_(e,t){let n=E_(e),r=[];for(let e=0;e<t.count;e++){let e=t.f0[0]+n()*(t.f0[1]-t.f0[0]),i=4+n()*3.5,a=1/i,o=D_(e,i,e*(t.vib??.03)*(.6+n()*.8));t.rise&&Object.assign(o,{jump:t.rise*a*(.6+n()*.8),jumpTime:a/2}),t.fall&&(o.mod=t.fall*(.7+n()*.6)),r.push({at:t.at+n()*(t.spread??.12),...o,shape:n()<.75?__:g_,attack:t.attack*(.7+n()*.6),sustain:t.dur[0]+n()*(t.dur[1]-t.dur[0]),release:t.release*(.7+n()*.6),noise:t.rough*(.6+n()*.8),filter:b_(t.cut[0]+n()*(t.cut[1]-t.cut[0])),gain:t.gain*(.6+n()*.4),pan:(n()*2-1)*(t.panWidth??.85),wrap:t.wrap})}return r}function R_(e,t,n,r,i,a=!1,o=!0){let s=E_(e),c=[];for(let e=0;e<t;e++){let e=o?s()**1.4:s();c.push({at:n+e*(r-n),freq:1500+s()*2500,shape:v_,attack:8e-4,release:.012+s()*.018,filter:s()<.5?b_(2200+s()*1200):x_(700+s()*500),gain:i*(.45+s()*.55)*(o?1-.5*e:1),pan:(s()*2-1)*.85,wrap:a})}return c}function z_(e,t,n,r=0,i=!1){return[{at:e,freq:t,shape:h_,slide:22,attack:.03,sustain:.08,release:.03,gain:n,pan:r,wrap:i},{at:e+.13,freq:t+1250,shape:h_,slide:-9,attack:.02,sustain:.14,release:.18,gain:n,pan:r,wrap:i}]}function B_(e,t){return[{at:e+.085,freq:2300,shape:v_,attack:.002,release:.07,filter:b_(1800),gain:t*.32},{at:e+.17,freq:2900,shape:v_,attack:.004,release:.1,filter:b_(1300),gain:t*.2},{at:e+.27,freq:3500,shape:v_,attack:.006,release:.14,filter:b_(900),gain:t*.12}]}function V_(e,t,n){return[{freq:e,shape:h_,curve:.5,dropTo:e*.4,attack:.001,decay:.015,sustainVol:.5,release:.06,gain:.9},{shape:v_,attack:6e-4,release:.03,filter:b_(t),gain:.95},{freq:3100,shape:v_,attack:4e-4,release:.012,filter:x_(1500),gain:.35},{freq:n,shape:g_,slide:-20,attack:5e-4,release:.02,gain:.3},{freq:66,shape:h_,attack:.003,release:.07,gain:.3}]}function H_(e,t){return[{freq:e,shape:h_,curve:.5,dropTo:e*.42,attack:.002,decay:.03,sustainVol:.6,sustain:.02,release:.14,gain:1},{shape:v_,attack:.001,release:.07,filter:b_(t),gain:.85},{freq:3300,shape:v_,attack:5e-4,release:.02,filter:x_(1200),gain:.3},{freq:52,shape:h_,attack:.003,release:.2,gain:.5},{freq:380,shape:g_,slide:-12,attack:.001,release:.03,gain:.3},...B_(0,.5)]}function U_(){return[{shape:v_,attack:4e-4,release:.03,gain:.6},{freq:2600,shape:v_,attack:8e-4,release:.07,filter:b_(4800),gain:.7},{freq:150,shape:h_,curve:.4,dropTo:46,attack:.001,decay:.04,sustainVol:.6,sustain:.04,release:.2,gain:1},{freq:110,shape:__,dropTo:50,attack:.002,release:.18,filter:b_(900),gain:.4},{freq:62,shape:h_,dropTo:34,attack:.003,decay:.08,sustainVol:.7,release:.45,gain:.95},{freq:3100,shape:v_,attack:.01,release:.35,filter:b_(900),gain:.32},...B_(0,.9)]}function W_(){return[...I_(0,[[260,.15],[380,.35],[560,.6],[820,.85],[1200,1],[1600,1],[1900,.85],[1600,.65],[1200,.45],[850,.28],[600,.14],[450,.05]],.026),{freq:3900,shape:v_,attack:.13,release:.16,filter:x_(3200),gain:.05}]}function G_(){return[{freq:210,shape:h_,curve:.6,dropTo:80,attack:.001,release:.05,gain:.8},{shape:v_,attack:8e-4,release:.04,filter:b_(1400),gain:.95},{at:.028,freq:2500,shape:v_,attack:.001,release:.03,filter:b_(1100),gain:.5},{at:.028,freq:160,shape:h_,dropTo:70,attack:.001,release:.04,gain:.4},{freq:1100,shape:g_,slide:-25,attack:5e-4,release:.012,gain:.15}]}function K_(){return[{shape:v_,attack:4e-4,release:.025,gain:.55},{freq:2600,shape:v_,attack:8e-4,release:.08,filter:b_(2600),gain:.85},{freq:120,shape:h_,curve:.4,dropTo:42,attack:.001,decay:.04,sustainVol:.65,sustain:.05,release:.22,gain:1},{freq:56,shape:h_,dropTo:32,attack:.003,decay:.08,sustainVol:.7,release:.5,gain:.9},...B_(0,.8),{at:.07,...D_(170,6,6),mod:.2,shape:__,noise:.28,attack:.04,decay:.08,sustainVol:.75,sustain:.22,release:.35,filter:b_(1050),gain:.42},{at:.07,...D_(170,6,6),mod:.2,shape:y_,curve:.35,attack:.05,sustain:.2,release:.3,filter:b_(2e3),gain:.12},{at:.07,...D_(85,6,3),mod:.2,shape:g_,attack:.04,sustain:.22,release:.3,gain:.2},{at:.12,freq:78,shape:h_,dropTo:38,attack:.02,release:.4,gain:.45}]}function q_(){let e=[{shape:v_,attack:4e-4,release:.04,gain:.6},{freq:2600,shape:v_,attack:.001,release:.2,filter:b_(1500),gain:.75},{freq:115,shape:h_,curve:.4,dropTo:40,attack:.001,decay:.05,sustainVol:.65,sustain:.06,release:.3,gain:.9},{freq:60,shape:h_,curve:.8,dropTo:30,attack:.003,decay:.12,sustainVol:.65,sustain:.12,release:.9,gain:1},{freq:3300,shape:v_,attack:.02,sustain:.2,release:1,filter:b_(380),gain:.5},...B_(0,1)];for(let t=0;t<5;t++)e.push(...O_(.32+t*.19,.55-t*.04,740,t===4?1.8:1.3));return e}function J_(){return[...L_(10,{at:0,count:26,f0:[130,290],cut:[560,900],dur:[.5,.8],attack:.14,release:.6,rough:.14,gain:.3,spread:.12,vib:.03,fall:.11}),{shape:v_,attack:.15,sustain:.5,release:.6,filter:b_(620),gain:.32},{freq:2900,shape:v_,attack:.18,sustain:.4,release:.5,filter:x_(1400),gain:.04}]}function Y_(){return[{shape:v_,attack:.18,sustain:.6,release:1,filter:b_(2e3),gain:.38},{freq:2700,shape:v_,attack:.15,sustain:.55,release:.9,filter:b_(950),gain:.36},{freq:3300,shape:v_,attack:.15,sustain:.5,release:.7,filter:x_(1e3),gain:.07},...L_(50414,{at:0,count:30,f0:[170,420],cut:[1300,2400],dur:[.5,.9],attack:.12,release:.7,rough:.32,gain:.17,spread:.2,vib:.04,rise:60}),...R_(49577,70,.05,2,.42),...z_(.2,2e3,.1,-.55),...z_(.55,2300,.08,.6)]}function X_(){let e=(e,t)=>[{at:e,freq:1900,shape:g_,slide:-40,attack:5e-4,release:.012,gain:t},{at:e,freq:3300,shape:v_,attack:5e-4,release:.01,filter:x_(2500),gain:t*.6},{at:e,freq:240,shape:h_,slide:-8,attack:.001,release:.03,gain:t*.5}];return[...e(0,.6),...e(.07,.5),{at:.11,freq:2100,shape:v_,attack:.02,sustain:.06,release:.04,filter:b_(1800),repeat:1/45,tremolo:.6,gain:.3},{at:.22,freq:120,shape:h_,dropTo:60,attack:.001,release:.08,gain:.55},{at:.22,freq:2400,shape:v_,attack:.001,release:.04,filter:b_(2500),gain:.4},...O_(.22,.75,2637,.9),...O_(.3,.45,3520,.7),...F_(3237,9,.32,.85,.42)]}function Z_(){let e=[];e.push(...A_([w_(`C3`),w_(`G3`),w_(`Eb4`)],0,.3,.34)),e.push(...k_(w_(`C2`),0,.36,.55)),e.push({freq:66,shape:__,dropTo:58,attack:.004,decay:.08,sustainVol:.6,sustain:.16,release:.34,filter:b_(620),gain:.55},{freq:98,shape:y_,curve:.4,dropTo:88,attack:.003,decay:.06,sustainVol:.4,sustain:.1,release:.22,filter:b_(900),gain:.18}),e.push(...j_(0,1,56),...M_(0,.35,3),...N_(0,.7,.09),...B_(0,.7));for(let[t,n]of[.42,.78].entries())e.push({at:n-.012,freq:2800,shape:v_,attack:.006,release:.05,filter:x_(900),gain:.16}),e.push(...L_(19984+t,{at:n,count:30,f0:[150,330],cut:[1500,2400],dur:[.06,.1],attack:.01,release:.11,rough:.34,gain:.2,spread:.035,vib:.02,rise:45})),e.push({at:n,shape:v_,attack:.008,sustain:.05,release:.12,filter:b_(1700),gain:.22}),e.push(...j_(n,.7,68),...R_(1441+t,24,n,n+.05,.42,!1,!1));return e}function Q_(e){let t=S_(w_(`C5`),[0,2,4][e]),n=e=>S_(t,e),r=[];r.push(...A_([n(-12),n(0),n(4),n(7)],0,.16,.42)),r.push(...j_(0,.9),...M_(0,.5,1),...N_(0,.5,.08));let i=e===2?[0,4,7,12,16,19]:[0,4,7,12];i.forEach((e,t)=>{r.push(...k_(n(e),.22+t*.09,.1,.5)),r.push(...M_(.22+t*.09,.22+t*.03,t+2))});let a=.22+i.length*.09+.04;e>=1&&(r.push(...A_([n(-7),n(5),n(9),n(12)],a,.22,.38),...j_(a,.6)),r.push(...A_([n(-5),n(7),n(11),n(14)],a+.26,.22,.38),...j_(a+.26,.6)),a+=.52),e===2&&([0,2,4,5,7,9,11,12].forEach((e,t)=>r.push(...k_(n(e+12),a+t*.06,.07,.34,-.4+t*.1))),r.push({at:a,freq:2100,shape:v_,attack:.48,release:.04,repeat:1/24,tremolo:.8,filter:x_(1400),gain:.25}),a+=.56,r.push(...A_([n(-5),n(7),n(11),n(14)],a,.2,.38),...j_(a,.6)),a+=.24);let o=[.75,.9,1.1][e],s=e===2?[n(0),n(4),n(7),n(12),n(16)]:[n(0),n(4),n(7),n(12)];return r.push(...A_(s,a,o,.36,!0)),r.push(...k_(n(-12),a,o,.42,0,!0)),r.push(...j_(a,1,62),...M_(a,.45,9),...N_(a,o+.4,.12)),r.push(...F_(2838+e,[5,8,12][e],a+.05,a+o+.1,.3)),r}var $_={seconds:9,crossfade:1},ev={seconds:7,crossfade:1};function tv(){let{seconds:e,crossfade:t}=$_,n={attack:0,sustain:e+t+.01,release:0},r=[{...n,bed:!0,freq:2100,shape:v_,filter:b_(900),repeat:1.8,tremolo:.25,gain:.32},{...n,bed:!0,freq:2500,shape:v_,filter:b_(500),repeat:2.6,tremolo:.3,gain:.26},{...n,bed:!0,freq:2900,shape:v_,filter:x_(1600),repeat:1.3,tremolo:.3,gain:.03}],i=E_(12215838);for(let t=0;t<230;t++){let n=i()<.7?100+i()*120:190+i()*140;r.push({at:t/230*e+i()*.08,freq:n,shape:i()<.7?__:g_,slide:(i()*2-1)*.35,noise:.15+i()*.2,attack:.03+i()*.05,sustain:.04+i()*.2,release:.08+i()*.14,filter:b_(600+i()*700),gain:.08+i()*.08,pan:(i()*2-1)*.9,wrap:!0})}return r.push(...R_(49569,14,.3,e-.3,.16,!0,!1)),r.push(...L_(21505,{at:2.4,count:3,f0:[190,260],cut:[1100,1500],dur:[.12,.2],attack:.03,release:.15,rough:.3,gain:.08,spread:.05,vib:.04,wrap:!0})),r.push(...L_(21506,{at:6.3,count:2,f0:[200,300],cut:[1100,1600],dur:[.15,.25],attack:.03,release:.15,rough:.3,gain:.07,spread:.05,vib:.04,rise:120,wrap:!0})),r}function nv(){let{seconds:e,crossfade:t}=ev,n={attack:0,sustain:e+t+.01,release:0},r=[{...n,bed:!0,freq:2200,shape:v_,filter:b_(1900),repeat:1.4,tremolo:.3,gain:.3},{...n,bed:!0,freq:2600,shape:v_,filter:b_(950),repeat:2.2,tremolo:.25,gain:.26}],i=E_(3098),a=.5;for(let t=0;t<e/a;t++)for(let n=0;n<12;n++)r.push({at:(t*a+(i()-.5)*.045+e)%e,freq:1500+i()*2500,shape:v_,attack:8e-4,release:.012+i()*.016,filter:i()<.5?b_(2e3+i()*1200):x_(700+i()*400),gain:(t%2==0?.42:.34)*(.5+i()*.5),pan:(i()*2-1)*.85,wrap:!0});for(let[e,t]of[.4,2.1,3.9,5.6].entries())r.push(...L_(96+e,{at:t,count:8,f0:[180,360],cut:[1300,2200],dur:[.25,.5],attack:.06,release:.3,rough:.3,gain:.1,spread:.25,vib:.04,rise:80,wrap:!0}));return r.push(...z_(1.3,2200,.06,.6,!0),...z_(4.8,1900,.05,-.5,!0)),r}var rv=[1,1.12,1.25],iv={"sfx.bell":{bus:`sfx`,rate:22050,loudness:-14,maxVoices:1,variants:[[...O_(0,1),...O_(.3,.85)]]},"sfx.jab":{bus:`sfx`,loudness:-14,jitter:.07,drive:2,maxVoices:3,variants:[V_(170,3500,620),V_(188,3900,680),V_(158,3200,560)]},"sfx.hook":{bus:`sfx`,loudness:-12,jitter:.05,drive:2.2,maxVoices:3,variants:[H_(120,1900),H_(108,1700),H_(132,2100)]},"sfx.uppercut":{bus:`sfx`,loudness:-10,jitter:.03,drive:2.6,maxVoices:2,variants:[U_()]},"sfx.whiff":{bus:`sfx`,loudness:-17,jitter:.06,hpf:220,maxVoices:2,variants:[W_()]},"sfx.block":{bus:`sfx`,loudness:-15,jitter:.06,maxVoices:2,variants:[G_()]},"sfx.counter":{bus:`sfx`,loudness:-11,jitter:.03,drive:2.2,maxVoices:1,variants:[K_()]},"sfx.ko":{bus:`sfx`,rate:22050,loudness:-10,drive:2,maxVoices:1,variants:[q_()]},"sfx.crowd.ooh":{bus:`sfx`,rate:22050,loudness:-17,jitter:.03,hpf:110,maxVoices:1,variants:[J_()]},"sfx.crowd.cheer":{bus:`sfx`,rate:22050,loudness:-16,jitter:.03,hpf:140,maxVoices:2,variants:[Y_()]},"sfx.cashout":{bus:`sfx`,rate:22050,loudness:-14,maxVoices:1,variants:[X_()]},"sfx.finish":{bus:`sfx`,rate:22050,loudness:-12,drive:1.6,maxVoices:1,variants:[Z_()]},"sfx.bigwin":{bus:`sfx`,rate:22050,loudness:-13,maxVoices:1,variants:[Q_(0),Q_(1),Q_(2)],variantPitch:rv},"ui.click":{bus:`ui`,loudness:-24,jitter:.04,maxVoices:3,variants:[[{freq:1100,shape:g_,slide:-25,attack:5e-4,release:.02,gain:1},{freq:3300,shape:v_,attack:5e-4,release:.006,filter:x_(3e3),gain:.25},{freq:190,shape:h_,attack:.001,release:.03,gain:.35}]]},"ui.select":{bus:`ui`,loudness:-20,jitter:.04,maxVoices:2,variants:[[{freq:260,shape:h_,curve:.6,dropTo:95,attack:.001,release:.05,gain:.9},{freq:2700,shape:v_,attack:5e-4,release:.02,filter:b_(2600),gain:.6},{freq:1500,shape:g_,slide:-20,attack:5e-4,release:.015,gain:.25},{at:.03,freq:1320,shape:y_,curve:.5,attack:.002,release:.06,filter:b_(3e3),gain:.12}]]},"amb.murmur":{bus:`amb`,rate:22050,loudness:-27,maxVoices:1,loop:$_,variants:[tv()]},"amb.roar":{bus:`amb`,rate:22050,loudness:-25,maxVoices:1,loop:ev,variants:[nv()]}},av=Object.keys(iv),ov=e=>e.rate??44100;function sv(e,t){return((e.attack??0)*t||9)+(e.decay??0)*t+(e.sustain??0)*t+(e.release??.1)*t+(e.delay??0)*t|0}function cv(e,t){let n=sv(e,t),r=new Float32Array(n),i=e.filter??0,a=2*Math.PI*Math.abs(i)*2/t,o=Math.cos(a),s=Math.sin(a)/2/2,c=1+s,l=-2*o/c,u=(1-s)/c,d=i<0?-1:1,f=(1+d*o)/2/c,p=-(d+o)/c,m=f,h=(e.repeat??0)*t|0,g=e.tremolo??0,_=0,v=0,y=0,b=0,x=Math.round((e.freq??2e3)*7919+(e.at??0)*104729)>>>0||1;for(let e=0;e<n;e++){x^=x<<13,x^=x>>>17,x^=x<<5;let t=((x>>>0)/4294967296-.5)*2*1.2247;if(h&&(t*=1-g+g*Math.sin(2*Math.PI*e/h)),i){let e=m*v+p*_+f*t-u*b-l*y;v=_,_=t,b=y,y=e,t=e}r[e]=t}return r}var lv=class{out;parts;cache=new Map;build;sr;next=0;constructor(e,t,n,r,i=!1){this.build=t,this.sr=n,this.parts=e.filter(e=>e.shape===v_||(e.freq??220)<.46*n).map(e=>{let t=T_(e);return{l:e,params:t,key:t.join(`,`),off:Math.round((e.at??0)*n)}});let a=i||e.some(e=>(e.pan??0)!==0),o=r??this.parts.reduce((e,t)=>Math.max(e,t.off+sv(t.l,n)),1);this.out=a?[new Float32Array(o),new Float32Array(o)]:[new Float32Array(o)]}get done(){return this.next>=this.parts.length}step(){let{l:e,params:t,key:n,off:r}=this.parts[this.next++],i=this.cache.get(n);i||(i=e.bed?cv(e,this.sr):this.build(this.sr,t),this.cache.set(n,i));let a=e.gain??1,o=this.out.length===2,s=((e.pan??0)+1)*Math.PI/4,c=o?[a*Math.cos(s)*Math.SQRT2,a*Math.sin(s)*Math.SQRT2]:[a];for(let e=0;e<this.out.length;e++){let t=this.out[e],n=c[e],a=Math.min(i.length,t.length-r);for(let e=Math.max(0,-r);e<a;e++)t[r+e]+=i[e]*n}this.done&&this.cache.clear()}};function uv(e,t){let n=1-2*Math.PI*14/t,r=0,i=0;for(let t=0;t<e.length;t++){let a=e[t],o=a-r+n*i;r=a,i=o,e[t]=o}}function dv(e,t){let n=Math.min(t,e.length);for(let t=0;t<n;t++)e[e.length-1-t]*=t/n}function fv(e){let t=0;for(let n of e)for(let e=0;e<n.length;e++)t=Math.max(t,Math.abs(n[e]));return t}function pv(e,t,n,r,i,a,o){let s=0,c=0,l=0,u=0;for(let d=0;d<e.length;d++){let f=e[d],p=(t*f+n*s+r*c-a*l-o*u)/i;c=s,s=f,u=l,l=p,e[d]=p}}function mv(e,t,n){let r=2*Math.PI*n/t,i=Math.cos(r),a=Math.sin(r)/(2*Math.SQRT1_2);pv(e,(1+i)/2,-(1+i),(1+i)/2,1+a,-2*i,1-a)}function hv(e,t){{let n=2*Math.PI*100/t,r=Math.cos(n),i=Math.sin(n)/1;pv(e,(1+r)/2,-(1+r),(1+r)/2,1+i,-2*r,1-i)}{let n=2*Math.PI*1500/t,r=Math.cos(n),i=10**(4/40),a=Math.sin(n)/2*Math.SQRT2,o=2*Math.sqrt(i)*a;pv(e,i*(i+1+(i-1)*r+o),-2*i*(i-1+(i+1)*r),i*(i+1+(i-1)*r-o),i+1-(i-1)*r+o,2*(i-1-(i+1)*r),i+1-(i-1)*r-o)}}function gv(e,t){let n=e[0].length,r=Math.max(1,Math.round(.05*t)),i=new Float32Array(n);for(let t of e)for(let r=0;r<n;r++)i[r]+=t[r]/e.length;hv(i,t);let a=0,o=0;for(let e=0;e<n;e++)a+=i[e]*i[e],e>=r&&(a-=i[e-r]*i[e-r]),o=Math.max(o,a);let s=Math.sqrt(Math.max(o,0)/Math.min(r,n));return s>0?20*Math.log10(s):-1/0}function _v(e,t){let n=fv(e);if(n===0)return;let r=Math.tanh(t);for(let i of e)for(let e=0;e<i.length;e++)i[e]=Math.tanh(t*i[e]/n)/r}function vv(e,t,n){let r=gv(e,n),i=fv(e);if(!Number.isFinite(r)||i===0)return;let a=10**((t-r)/20);i*a>.95&&(a=m_/i);for(let t of e)for(let e=0;e<t.length;e++)t[e]*=a}function yv(e,t,n,r){let i=Math.round(t.seconds*r),a=Math.round(t.crossfade*r),o=e.some(e=>(e.pan??0)!==0),s=e.filter(e=>!e.periodic&&!e.wrap),c=e.filter(e=>e.wrap),l=e.filter(e=>e.periodic),u=s.length>0?new lv(s,n,r,i+a,o):null,d=c.length>0?new lv(c,n,r,void 0,o):null,f=l.length>0?new lv(l,n,r,i+64,o):null;return{mixes:[u,d,f].filter(e=>e!==null),finish:()=>{let e=o?[new Float32Array(i),new Float32Array(i)]:[new Float32Array(i)];return u?.out.forEach((t,n)=>{uv(t,r);for(let r=0;r<i;r++)if(r<a){let o=r/a*(Math.PI/2);e[n][r]+=t[r]*Math.sin(o)+t[i+r]*Math.cos(o)}else e[n][r]+=t[r]}),d?.out.forEach((t,n)=>{uv(t,r);for(let r=0;r<t.length;r++)e[n][r%i]+=t[r]}),f?.out.forEach((t,n)=>{for(let r=0;r<i;r++)e[n][r]+=r<64?t[i+r]:t[r]}),e}}}function bv(e,t,n){let r=ov(e),i=e.variants[t],a,o;if(e.loop)({mixes:a,finish:o}=yv(i,e.loop,n,r));else{let t=new lv(i,n,r);a=[t],o=()=>{for(let n of t.out)uv(n,r),e.hpf&&mv(n,r,e.hpf),dv(n,Math.round(.004*r));return e.drive&&_v(t.out,e.drive),t.out}}let s=null,c=null;return{step(){if(c)return!0;let t=a.find(e=>!e.done);return t?(t.step(),!1):s?(vv(s,e.loudness,r),c=s,!0):(s=o(),!1)},get result(){return c}}}function xv(e,t,n){let r=bv(e,t,n);for(;!r.step(););return r.result}function Sv(e,t){let n=0;for(let r=1;r<e.length;r++)Math.abs(e[r]-t)<Math.abs(e[n]-t)&&(n=r);return n}var Cv=`nk.sound`,wv=.6,Tv={sfx:1,ui:.8,amb:.9},Ev=.03,Dv=.03,Ov=1.5,kv=.4,Av=.35,jv=[`amb.murmur`,`amb.roar`],Mv=.15;function Nv(e){return 10**((-12+12*Math.sqrt(e))/20)}function Pv(e){return Math.min(1,Math.max(0,(e-.2)/.8))**1.2}var Fv=[`ui.click`,`ui.select`,`amb.murmur`,`sfx.bell`,`sfx.jab`,`sfx.hook`,`sfx.uppercut`,`sfx.whiff`,`sfx.block`,`amb.roar`,`sfx.counter`,`sfx.crowd.ooh`,`sfx.crowd.cheer`,`sfx.cashout`,`sfx.finish`,`sfx.ko`,`sfx.bigwin`],Iv=(e,t)=>p_.buildSamples.call({sampleRate:e},...t),Lv=new WeakMap;function Rv(){try{return globalThis.localStorage?.getItem(Cv)===`0`}catch{return!1}}function zv(e){try{globalThis.localStorage?.setItem(Cv,e?`0`:`1`)}catch{}}function Bv(e){if(typeof requestIdleCallback==`function`){requestIdleCallback(t=>e(()=>t.timeRemaining()),{timeout:1500});return}let t=new MessageChannel;t.port1.onmessage=()=>{t.port1.close(),e(()=>0)},t.port2.postMessage(null)}function Vv(e,t,n,r){e.cancelScheduledValues(n),e.setValueAtTime(e.value,n),e.linearRampToValueAtTime(t,n+r)}function Hv(){let e=p_.audioContext,t=Rv(),n=!1,r=null,i=!1,a=!1,o=Mv,s=e.createGain();s.gain.value=t?0:wv;let c=e.createDynamicsCompressor();c.threshold.value=-4,c.knee.value=4,c.ratio.value=10,c.attack.value=.002,c.release.value=.15,s.connect(c).connect(e.destination);let l={};for(let t of Object.keys(Tv))l[t]=e.createGain(),l[t].gain.value=Tv[t],l[t].connect(s);let u={"amb.murmur":e.createGain(),"amb.roar":e.createGain()},d={"amb.murmur":Nv,"amb.roar":Pv};for(let e of jv)u[e].gain.value=d[e](o),u[e].connect(l.amb);let f=new Map,p=new Map,m=null,h=(e,t)=>{let n=f.get(e);if(n||f.set(e,n=[]),!n[t]){if(m&&m.id===e&&m.vi===t){for(;!m.job.step(););n[t]=m.job.result,m=null}else n[t]=xv(iv[e],t,Iv)}return n[t]},g=(t,n)=>{let r=p.get(t);r||p.set(t,r=[]);let i=r[n];if(!i){let a=h(t,n);i=e.createBuffer(a.length,a[0].length,ov(iv[t])),a.forEach((e,t)=>i.getChannelData(t).set(e)),r[n]=i,f.get(t)[n]=void 0}return i},_=(e,t)=>!!(p.get(e)?.[t]??f.get(e)?.[t]),v=[...Fv,...av.filter(e=>!Fv.includes(e))].flatMap(e=>iv[e].variants.map((t,n)=>[e,n])),y=0,b=0,x=0,S=e=>{do{if(!m){let e=v[y++];if(!e)return;if(_(e[0],e[1]))continue;m={id:e[0],vi:e[1],job:bv(iv[e[0]],e[1],Iv)}}let e=performance.now(),t=m.job.step();if(t){let{id:e,vi:t,job:r}=m;m=null;let i=f.get(e);i||f.set(e,i=[]),i[t]=r.result,n&&g(e,t)}let r=performance.now()-e;b+=r,x=Math.max(x,r),t&&O()}while(e()>8);(m||y<v.length)&&Bv(S)};Bv(S);let C=new Map,w=new Map,T=(t,n,r,i,a,o)=>{let s=e.createBufferSource();s.buffer=t,s.loop=a,s.playbackRate.value=i;let c=e.createGain();return c.gain.value=r,s.connect(c).connect(n),s.onended=()=>{s.disconnect(),c.disconnect(),o?.()},s.start(),{src:s,gain:c}},E=(t,n)=>{let r=e.currentTime;Vv(t.gain.gain,0,r,n);try{t.src.stop(r+n+.02)}catch{}},D=(e,t)=>{let n=iv[e];if(n.variantPitch){let e=Sv(n.variantPitch,t);return{vi:e,rate:t/n.variantPitch[e]}}let r=n.variants.length;if(r===1)return{vi:0,rate:t};let i=w.get(e),a=Math.floor(Math.random()*(i===void 0?r:r-1));return i!==void 0&&a>=i&&a++,w.set(e,a),{vi:a,rate:t}},O=()=>{if(r||!i||!n||t||e.state===`closed`||!jv.every(e=>_(e,0)))return;let a=e.currentTime;r=jv.map(e=>{let t=T(g(e,0),u[e],0,1,!0);return t.gain.gain.setValueAtTime(0,a),t.gain.gain.linearRampToValueAtTime(1,a+Ov),t})},k=()=>{!document.hidden&&!a&&e.state!==`running`&&e.state!==`closed`&&e.resume().catch(()=>{})};typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>{n&&(document.hidden?e.state===`running`&&(a=!0,e.suspend().catch(()=>{})):a&&(a=!1,e.resume().catch(()=>{})))});let A={unlock(){if(e.state!==`running`&&e.state!==`closed`&&e.resume().catch(()=>{}),n)return;n=!0;let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,22050),t.connect(e.destination),t.start(),addEventListener(`pointerdown`,k,{capture:!0,passive:!0}),addEventListener(`keydown`,k,{capture:!0}),O()},play(r,i){if(!n||t||e.state===`closed`)return;let a=iv[r];if(!a)return;let{vi:o,rate:s}=D(r,i?.pitch??1),c=a.jitter?1+a.jitter*(Math.random()*2-1):1,u=Math.min(Math.max(i?.volume??1,0),4),d=C.get(r);d||C.set(r,d=[]);let f=d,p=T(g(r,o),l[a.bus],u,Math.max(.25,s*c),!1,()=>{let e=f.indexOf(p);e>=0&&f.splice(e,1)});for(f.push(p);f.length>a.maxVoices;)E(f.shift(),Dv)},startAmbient(){i=!0,O()},stopAmbient(){if(i=!1,r){for(let e of r)E(e,kv);r=null}},setHype(t){let n=Number.isFinite(t)?Math.min(1,Math.max(0,t)):Mv;if(o=n,e.state===`closed`)return;let r=e.currentTime;for(let e of jv)u[e].gain.setTargetAtTime(d[e](n),r,Av)},setMuted(n){t=n,zv(n),Vv(s.gain,n?0:wv,e.currentTime,Ev),n||O()},get muted(){return t}};return Lv.set(A,{context:e,output:c,activeVoices:()=>[...C.values()].reduce((e,t)=>e+t.length,0)+(r?r.length:0),prerender:()=>({done:v.filter(([e,t])=>_(e,t)).length,total:v.length,ms:b,longestSliceMs:x}),hype:()=>({hype:o,murmur:u[`amb.murmur`].gain.value,roar:u[`amb.roar`].gain.value})}),A}var Uv=7800,Wv=5e3,Gv=1e8,Kv=1e6,qv=1e3,Jv={demir:{id:`demir`,name:`DEMİR`,add:{direkt:25,krose:75,aparkat:250},damage:{direkt:6,krose:14,aparkat:28}},yildirim:{id:`yildirim`,name:`YILDIRIM`,add:{direkt:40,krose:90,aparkat:200},damage:{direkt:8,krose:13,aparkat:20}},kralice:{id:`kralice`,name:`KRALİÇE`,add:{direkt:30,krose:80,aparkat:225},damage:{direkt:7,krose:14,aparkat:24}},firtina:{id:`firtina`,name:`FIRTINA`,add:{direkt:30,krose:110,aparkat:200},damage:{direkt:7,krose:16,aparkat:22}}},Yv=[`demir`,`yildirim`,`kralice`,`firtina`];function Xv(e){return e<=20?Math.max(e+15,30):Math.min(100,e+15)}var Zv=[`direkt`,`krose`,`aparkat`],Qv={direkt:`DİREKT`,krose:`KROŞE`,aparkat:`APARKAT`};function $v(e,t){let n=Yv.filter(t=>t!==e);return n[Math.min(n.length-1,Math.floor(t*n.length))]}function ey(e){return e>=5e3?`efsane`:e>=1500?`mega`:e>=500?`buyuk`:null}function ty(e,t){for(;t!==0;){let n=e%t;e=t,t=n}return e}function ny(e,t){let n=ty(e,t);return{num:e/n,den:t/n}}var ry=Object.freeze(ny(Uv,1e4));function iy(e,t){return Math.min(e+t,Wv)}function ay(e,t){if(!Number.isInteger(e)||e<100||e>5e3)throw RangeError(`multiplier ${e} kuruş is outside 100…${Wv}`);if(!Number.isInteger(t)||t<=0)throw RangeError(`punch value ${t} kuruş is not a positive integer`)}function oy(e,t,n){ay(e,t);let r=iy(e,t);return n?ny(ry.num*e,ry.den*r):ny(e,r)}function sy(e,t,n){let r=oy(e,t,n);return r.num/r.den}function cy(e,t,n){let r=Jv[e].add,i={};for(let e of Zv)i[e]=sy(t,r[e],n);return i}if(ry.den*5e3>2**21)throw Error(`Nakavt odds denominators no longer fit the exact comparison; revisit outcome.ts`);function ly(e,t,n,r){if(!(t>=100&&t<5e3&&n>0))throw RangeError(`no punch at M = ${t} with +${n}`);let i=iy(t,n),a=r?e*(ry.den*i)<ry.num*t:e*i<t;return{landed:a,multiplierKurus:a?i:t}}function uy(e){let t=null;return{peek(){return t??=e.next(),t},next(){if(t===null)return e.next();let n=t;return t=null,n}}}var dy=Math.min(qv,Oi(Wv,Gv)),fy=1,py=new Set([`HAMLE`,`YUMRUK`,`PARAYI_AL`,`NAKAVT`]),my=new Set([`BEKLE`,`YENILDIN`]);function hy(){let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]}var gy=()=>({direkt:0,krose:0,aparkat:0}),_y=e=>Zv.includes(e),vy=e=>typeof e==`string`&&Object.hasOwn(Jv,e);function yy(e={}){let t=e.seed===void 0?null:wi(e.seed),n=uy(Si(t?t.outcome:hy())),r=Si(t?t.pick:hy()),i=`BEKLE`,a=`demir`,o=$v(a,0),s=10,c=10,l=Kv,u=100,d=100,f=100,p=0,m=gy(),h=!1,g=[],_=()=>c*100,v=()=>i===`BEKLE`||i===`HAZIR`,y=()=>i===`HAZIR`&&l>=_()||i===`HAMLE`,b=()=>i===`HAMLE`&&p>=1,x=()=>{c=ki(s,dy,l)},S=()=>i===`HAMLE`||i===`YUMRUK`&&h&&f<5e3;function C(){return{state:i,fighter:a,opponent:o,betTL:c,maxBetTL:dy,balanceKurus:l,multiplierKurus:f,currentWinKurus:p>=1&&py.has(i)?c*f:0,landed:p,counts:{...m},chance:S()?cy(a,f,!1):cy(a,100,!0),add:{...Jv[a].add},opponentHealth:u/100,playerHealth:d/100,finishHim:!my.has(i)&&u>0&&u<=20,inRound:i===`HAMLE`||i===`YUMRUK`,canPunch:y(),canCashout:b(),canEditBet:v(),history:g.map(e=>({...e}))}}let w=new Set,T=[],E=!1;function D(e){if(T.push([e,C()]),E)return;E=!0;let t=null;try{for(;T.length>0;){let[e,n]=T.shift();for(let r of[...w])if(w.has(r))try{r(e,n)}catch(e){t??={error:e}}}}finally{E=!1}if(t)throw t.error}function O(e){i=e.to,D(e)}function k(e){if(!Number.isInteger(e)||e<0)throw Error(`invalid payout ${e}`);if(e>1e8)throw Error(`payout ${e} exceeds the cap ${Gv}`);l+=e}function A(){f=100,p=0,m=gy(),h=!1}function j(e){g=[e,...g].slice(0,10),A(),x()}function M(){let e=c*f;k(e),O({to:`PARAYI_AL`,payoutKurus:e,multiplierKurus:f,tier:ey(f)})}function N(){u=0;let e=c*f;k(e),O({to:`NAKAVT`,payoutKurus:e,multiplierKurus:f,tier:ey(f)})}function P(){u<=20?N():M()}function F(e){O({to:`BEKLE`,match:e})}return{view:C,subscribe(e){return w.add(e),()=>{w.delete(e)}},startMatch(e){i===`BEKLE`&&vy(e)&&(a=e,o=$v(e,r.next()),u=100,d=100,A(),O({to:`GONG`,fighter:a,opponent:o}))},betStep(e){!v()||e!==1&&e!==-1||(s=c=Ai(c,e,dy,l))},betHalf(){v()&&(s=c=ji(c,dy,l))},betDouble(){v()&&(s=c=Mi(c,dy,l))},punch(e){if(!y()||!_y(e))return;let t=i===`HAZIR`;t&&(l-=_(),A());let r=Jv[a].add[e],o=p+1,s=ly(n.next(),f,r,p===0);h=s.landed;let c=0;s.landed&&(f=s.multiplierKurus,p+=1,m={...m,[e]:m[e]+1},c=Jv[a].damage[e],u=Math.max(fy,u-c)),O({to:`YUMRUK`,punch:e,landed:s.landed,addKurus:r,multiplierKurus:f,index:o,damage:c,opponentHealth:u/100,startedRound:t})},cashout(){b()&&P()},presentationDone(){switch(i){case`BEKLE`:case`HAZIR`:case`HAMLE`:return;case`GONG`:O({to:`HAZIR`,result:null});return;case`YUMRUK`:h?f>=5e3?P():O({to:`HAMLE`,landed:p}):(d=Math.max(0,d-20),u=Xv(u),O({to:`KARSI`,lostMultiplierKurus:f,playerHealth:d/100,opponentHealth:u/100}));return;case`KARSI`:{let e={kind:`loss`,multiplierKurus:f};j(e),O(d===0?{to:`YENILDIN`}:{to:`HAZIR`,result:e});return}case`PARAYI_AL`:{let e={kind:`win`,multiplierKurus:f};j(e),O({to:`HAZIR`,result:e});return}case`NAKAVT`:j({kind:`ko`,multiplierKurus:f}),F({kind:`won`});return;case`YENILDIN`:F({kind:`lost`});return}},resetBalance(){v()&&(l=Kv,x())},debugPeek:()=>n.peek()}}var by={buyuk:1,mega:1.12,efsane:1.25},xy={direkt:220,krose:330,aparkat:550},Sy={direkt:`sfx.jab`,krose:`sfx.hook`,aparkat:`sfx.uppercut`},Cy=20/100,wy=650,Ty=700;function Ey(e){let{game:t,scene:n,ui:r,audio:i,clock:a}=e,o=0,s=!1,c=()=>r.render(t.view(),!i.muted),l=e=>{e===o&&(t.presentationDone(),c())},u=async(e,t)=>{t&&(i.play(`sfx.bigwin`,{pitch:by[t]}),await r.bigWin(t,e))},d=e=>{e!==s&&(s=e,n.setFinishHim(e),e&&(i.play(`sfx.finish`),r.banner(`bitir`)))},f=async(e,t)=>{switch(e.to){case`GONG`:return await n.preload(e.fighter,e.opponent),t===o&&(n.newMatch(e.fighter,e.opponent),n.setOpponentHealth(1),n.setPlayerHealth(1),s=!1,n.setFinishHim(!1),i.play(`sfx.bell`),i.setHype(.25),await Promise.all([r.banner(`dovus`),n.gong()]),!0);case`HAZIR`:case`HAMLE`:return!1;case`YUMRUK`:return e.landed||i.play(`sfx.whiff`),a.after(xy[e.punch],()=>{e.landed?(i.play(Sy[e.punch]),e.punch===`aparkat`&&i.play(`sfx.crowd.cheer`,{volume:.7}),r.flyNumber(n.impactScreenPos(),e.multiplierKurus),r.bumpMultiplier(e.multiplierKurus),n.setOpponentHealth(e.opponentHealth),i.setHype(.25+.75*(1-e.opponentHealth)),d(e.opponentHealth>0&&e.opponentHealth<=Cy)):i.play(`sfx.block`)}),await n.punch(e.punch,e.landed),!0;case`KARSI`:{i.play(`sfx.counter`),a.after(200,()=>i.play(`sfx.crowd.ooh`));let s=!1,c=()=>{s||(s=!0,n.setPlayerHealth(e.playerHealth),n.setOpponentHealth(e.opponentHealth),d(e.opponentHealth>0&&e.opponentHealth<=Cy))};return a.after(350,c),r.flash(`#ff2d7a`,220),r.bumpMultiplier(e.lostMultiplierKurus,!0),a.after(400,()=>{t===o&&r.banner(`karsi`)}),await n.counter(),c(),i.setHype(.2),!0}case`PARAYI_AL`:return i.play(`sfx.cashout`),i.play(`sfx.crowd.cheer`,{volume:.6}),await Promise.all([r.banner(`raunt`,e.payoutKurus),n.celebrate()]),await u(e.payoutKurus,e.tier),!0;case`NAKAVT`:{let s=!1,c=()=>{s||t!==o||(s=!0,i.play(`sfx.uppercut`),i.play(`sfx.ko`),i.play(`sfx.crowd.cheer`),i.setHype(1),n.setOpponentHealth(0))};return a.after(wy,c),await n.knockout(),c(),d(!1),r.flash(`#ffffff`,200),i.play(`sfx.bell`),await r.banner(`nakavt`,e.payoutKurus),await u(e.payoutKurus,e.tier),!0}case`YENILDIN`:{i.play(`sfx.ko`,{pitch:.85}),a.after(300,()=>i.play(`sfx.crowd.ooh`));let e=n.playerKnockedOut();return await a.wait(900),await Promise.all([e,r.banner(`yenildin`)]),d(!1),!0}case`BEKLE`:return i.setHype(.15),e.match&&a.after(Ty,()=>{o===t&&r.showFighterSelect()}),!1}};return t.subscribe((e,t)=>{let n=++o;try{r.render(t,!i.muted)}catch(e){console.error(`ui.render failed`,e)}f(e,n).then(e=>{e&&l(n)}).catch(t=>{console.error(`presentation failed`,e,t),l(n)})}),{refresh:c}}var Dy=new Set([`KARSI`,`PARAYI_AL`,`NAKAVT`,`YENILDIN`]);function Oy(){let e=null,t=-1/0;return(n,r,i)=>{if(Dy.has(r))return e=null,t=n.at,`skip`;if(n.at-t<320)return e=null,t=n.at,null;if(!i)return e=null,null;let a=e!==null&&n.at-e.at<320&&Math.hypot(n.x-e.x,n.y-e.y)<40;return e=a?null:n,a?`direkt`:null}}function ky(e){let t=new Map;return{get(n){let r=t.get(n);return r||(r=e(n).catch(e=>(console.warn(`Nakavt: the ${n} model load failed; the procedural fighter plays`,e),null)),t.set(n,r)),r},started:e=>t.has(e)}}var Ay=[0,1.765,.76],Z=(e,t)=>e===`l`?t:-t;function jy(e,t){let n={},r=n,i=t=>Z(e,t);return t.c&&(r[`${e}ax`]=i(t.c[0]),r[`${e}ay`]=t.c[1],r[`${e}az`]=t.c[2]),t.r&&(r[`${e}bx`]=i(t.r[0]),r[`${e}by`]=t.r[1],r[`${e}bz`]=t.r[2]),t.w!==void 0&&(r[`${e}w`]=t.w),t.pole&&(r[`${e}px`]=i(t.pole[0]),r[`${e}py`]=t.pole[1],r[`${e}pz`]=t.pole[2]),t.g&&(r[`${e}gx`]=t.g[0],r[`${e}gy`]=i(t.g[1]),r[`${e}gz`]=i(t.g[2])),t.gs!==void 0&&(r[`${e}gs`]=t.gs),n}function My(e,t){let n={},r=n,i=t=>Z(e,t);return t.p&&(r[`${e}fx`]=i(t.p[0]),r[`${e}fy`]=t.p[1],r[`${e}fz`]=t.p[2]),t.rot&&(r[`${e}frx`]=t.rot[0],r[`${e}fry`]=i(t.rot[1]),r[`${e}frz`]=i(t.rot[2])),t.knee&&(r[`${e}kx`]=i(t.knee[0]),r[`${e}ky`]=t.knee[1],r[`${e}kz`]=t.knee[2]),n}var Ny=(e,t=e)=>({...jy(`l`,e),...jy(`r`,t)}),Py=(e,t=e)=>({...My(`l`,e),...My(`r`,t)}),Fy={hx:0,hy:-.055,hz:.01,hrx:.03,hry:-.06,hrz:0,srx:.05,sry:.03,srz:0,crx:.12,cry:0,crz:0,nrx:-.06,nry:.02,nrz:0,arx:.1,ary:.01,arz:0,lcy:-.04,lcz:.08,rcy:.04,rcz:-.08,...jy(`l`,{c:[.19,1.635,.25],w:0,pole:[.8,-1,-.4],g:[-.45,.15,.1],gs:1}),...jy(`r`,{c:[.19,1.615,.21],w:0,pole:[.8,-1,-.4],g:[-.45,.15,.1],gs:1}),...My(`l`,{p:[.16,.09,.09],rot:[0,-.12,0],knee:[.35,0,1]}),...My(`r`,{p:[.17,.09,-.11],rot:[0,.42,0],knee:[.35,0,1]}),mo:0,mw:0,look:1,stars:0},Iy={...Fy,hy:-.03,crx:.06,arx:.04,...Ny({c:[.2,1.42,.2],w:0,pole:[.9,-1,-.5],g:[-.2,.2,.1],gs:1})},Ly={crx:.22,arx:.26,nrx:.04,hy:-.08,...Ny({c:[.075,1.72,.2],w:0,pole:[.25,-1,.1],g:[-.55,0,.2]})},Ry={hx:0,hy:-.09,hz:-.02,hrx:-.04,hry:0,hrz:0,srx:-.02,sry:0,srz:.04,crx:.02,cry:.05,crz:.06,nrx:.1,nry:0,nrz:.1,arx:.1,ary:.12,arz:.16,lcy:0,lcz:-.06,rcy:0,rcz:.06,...jy(`l`,{c:[.24,1.25,.2],w:0,pole:[1,-.6,-.5],g:[.1,.1,.25],gs:1}),...jy(`r`,{c:[.2,1.2,.24],w:0,pole:[1,-.6,-.5],g:[.1,.1,.25],gs:1}),...My(`l`,{p:[.2,.09,.06],rot:[0,.1,0],knee:[.1,0,1]}),...My(`r`,{p:[.18,.09,-.1],rot:[0,.3,0],knee:[.5,0,1]}),eyeL:.42,eyeR:.5,mo:.35,mw:.1,bly:.6,bry:.2,blr:-.1,brr:.25,look:.5,stars:1},zy={hx:.02,hy:-.83,hz:-.62,hrx:-1.5,hry:0,hrz:.04,srx:.02,sry:0,srz:.03,crx:.04,cry:.06,crz:0,nrx:.18,nry:.05,nrz:.1,arx:-.05,ary:.55,arz:.1,lcy:0,lcz:.25,rcy:0,rcz:-.25,...jy(`l`,{c:[.58,1.82,-.06],w:0,pole:[.2,-.2,-1],g:[.3,.4,.2],gs:1}),...jy(`r`,{c:[.62,1.55,-.1],w:0,pole:[.2,-.2,-1],g:[.2,-.2,.3],gs:1}),...My(`l`,{p:[.2,.075,.2],rot:[-1.2,.3,.1],knee:[.3,0,1]}),...My(`r`,{p:[.14,.075,.12],rot:[-1.05,.1,-.1],knee:[.2,0,1]}),eyeL:.06,eyeR:.06,mo:.45,mw:.05,bly:.5,bry:.5,blr:-.2,brr:.2,look:0,stars:1},By={hx:0,hy:0,hz:0,hrx:-.03,hry:0,hrz:0,srx:-.06,sry:0,srz:0,crx:-.16,cry:0,crz:0,nrx:-.12,nry:0,nrz:0,arx:-.22,ary:0,arz:0,lcy:0,lcz:.22,rcy:0,rcz:-.22,...Ny({c:[.34,2.2,.06],w:0,pole:[1,-.2,-.6],g:[-.3,.2,-.3],gs:1}),...Py({p:[.17,.09,0],rot:[0,.15,0],knee:[.3,0,1]}),eyeL:.55,eyeR:.55,mo:.95,mw:.25,bly:.6,bry:.6,blr:0,brr:0,look:.6,stars:0},Vy={idle:{bounce:0,breathe:1,sway:1,dizzy:0,down:0,cheer:0},guard:{bounce:0,breathe:1,sway:.6,dizzy:0,down:0,cheer:0},bounce:{bounce:1,breathe:.5,sway:.25,dizzy:0,down:0,cheer:0},dizzy:{bounce:0,breathe:.6,sway:0,dizzy:1,down:0,cheer:0},down:{bounce:0,breathe:0,sway:0,dizzy:0,down:1,cheer:0},victory:{bounce:0,breathe:.4,sway:0,dizzy:0,down:0,cheer:1}},Hy={jab:220,hook:330,uppercut:550,counter:350};function Uy(e,t){switch(e){case`idle`:return{...Iy,...t,mo:0,mw:0,stars:0};case`guard`:case`bounce`:return{...Fy,...t,mo:0,mw:0,stars:0};case`dizzy`:return{...Ry};case`down`:return{...zy};case`victory`:return{...By}}}var Wy=(e,t,n,r,i,a)=>e.to(t,{...n,duration:r,ease:i,overwrite:!1},a);function Gy(e,t){let n=W.timeline({paused:!0}),r=t.P,i=Uy(t.loop,t.rest),a=t.rest,o=t.loop,s=(e,t,i,a)=>Wy(n,r,e,t,i,a);switch(e){case`jab`:{let e=t.nextSide(`jab`),r=e===`l`?`r`:`l`;return s({hy:-.08,cry:Z(e,.1),sry:Z(e,.03),...jy(e,{c:[.15,1.57,.19],pole:[.9,-1,-.5]}),eyeL:.7,eyeR:.7,bly:-.4,bry:-.4},.07,`power2.out`,0),s({hy:-.065,hz:.07,crx:.17,cry:Z(e,-.34),sry:Z(e,-.1),arz:Z(e,.06),ary:Z(e,.08),[`${e}cy`]:Z(e,-.32),...jy(e,{r:[Ay[0]+.03,Ay[1],Ay[2]],w:1,pole:[.7,-.45,-.6],g:[-.35,0,.12],gs:1.13}),...jy(r,{c:[.11,1.64,.25]}),...My(e,{p:[.16,.09,.15]}),mo:.12},.15,`power3.in`,.07),n.call(()=>t.landed(e,.6),[],.22),s({...jy(e,{gs:1})},.05,`power2.out`,.22),s({...i,[`${e}gs`]:1},.21,`power2.out`,.24),{tl:n,next:o,duration:.45}}case`hook`:{let e=t.nextSide(`hook`),r=e===`l`?`r`:`l`;return s({hy:-.1,hry:Z(e,.12),cry:Z(e,.32),sry:Z(e,.08),crz:Z(e,.06),crx:.16,[`${e}cy`]:Z(e,.12),...jy(e,{c:[.3,1.62,.2],w:0,pole:[1,.3,-.45],g:[-.45,.2,.25]}),...jy(r,{c:[.08,1.7,.24]}),arx:.18,eyeL:.62,eyeR:.62,bly:-.5,bry:-.5,mo:0},.14,`power2.out`,0),s({hry:Z(e,-.12),cry:Z(e,-.2),sry:Z(e,-.06),crz:Z(e,-.04),[`${e}cy`]:Z(e,-.15),...jy(e,{r:[.36,1.72,.5],w:1,pole:[1,.4,-.3],g:[-.4,.1,.3]})},.11,`power2.in`,.14),s({hz:.06,hry:Z(e,-.2),cry:Z(e,-.5),sry:Z(e,-.14),crz:Z(e,-.08),crx:.2,[`${e}cy`]:Z(e,-.3),...jy(e,{r:[.04,Ay[1]+.01,Ay[2]-.03],pole:[1,.6,-.1],g:[-.35,0,.35],gs:1.16}),...My(e,{rot:[.25,-.5,0]}),mo:.2},.08,`power1.in`,.25),n.call(()=>t.landed(e,.8),[],.33),s({hry:Z(e,-.24),cry:Z(e,-.62),sry:Z(e,-.18),...jy(e,{r:[-.12,1.6,Ay[2]-.1],gs:1})},.09,`power2.out`,.33),s({...i,[`${e}gs`]:1},.23,`power2.inOut`,.42),{tl:n,next:o,duration:.65}}case`uppercut`:{let e=t.nextSide(`uppercut`),r=e===`l`?`r`:`l`;return s({hy:-.11,hz:-.02,hry:Z(e,.14),cry:Z(e,.3),sry:Z(e,.08),crz:Z(e,-.16),srz:Z(e,-.05),crx:.26,srx:.1,[`${e}cy`]:Z(e,.08),[`${e}cz`]:Z(e,-.1),...jy(e,{c:[.2,1.2,.2],w:0,pole:[.5,-1,-.7],g:[-.45,.2,0]}),...jy(r,{c:[.07,1.69,.25]}),arx:.24,eyeL:.55,eyeR:.55,bly:-.7,bry:-.7,mo:0,mw:.1},.22,`power2.out`,0),s({hy:-.12,crz:Z(e,-.19),...jy(e,{c:[.2,1.16,.2]})},.08,`sine.inOut`,.22),s({hy:-.02,hz:.06,hry:Z(e,-.08),cry:Z(e,-.3),sry:Z(e,-.08),crz:Z(e,.04),srz:0,crx:.1,srx:.02,[`${e}cy`]:Z(e,-.15),[`${e}cz`]:0,...jy(e,{r:[.16,1.4,.62],w:1,pole:[.35,-1,-.1],g:[-.35,.3,0]}),...Py({rot:[.15,.12,0]})},.13,`power2.in`,.3),s({hy:.01,hz:.13,cry:Z(e,-.42),crx:0,srx:-.02,arx:0,...jy(e,{r:[.03,Ay[1]-.03,Ay[2]-.01],pole:[.3,-1,.15],g:[-.3,.3,0],gs:1.2}),...Py({p:[.16,.12,.06],rot:[.32,.12,0]}),mo:.45,mw:.15},.12,`power3.in`,.43),n.call(()=>t.landed(e,1),[],.55),s({hy:.02,crx:-.18,srx:-.06,arx:-.12,...jy(e,{r:[0,2,Ay[2]-.12],gs:1.04})},.13,`power2.out`,.55),s({...i,hy:-.06,[`${e}gs`]:1,...Py({p:[.16,.09,0],rot:[0,.2,0]})},.17,`power2.inOut`,.68),s({...i,[`${e}gs`]:1},.15,`back.out(1.6)`,.85),{tl:n,next:o,duration:1}}case`counter`:{let e=t.nextSide(`counter`),r=e===`l`?`r`:`l`;return s({hy:-.11,hz:-.03,hry:Z(e,.14),cry:Z(e,.36),sry:Z(e,.08),crx:.08,crz:Z(e,-.06),[`${e}cy`]:Z(e,.16),[`${e}cz`]:Z(e,.1),...jy(e,{c:[.33,1.8,-.06],w:0,pole:[1,.2,-.8],g:[-.45,.2,.2]}),...jy(r,{c:[.1,1.68,.26]}),arx:.12,eyeL:.5,eyeR:.5,bly:-.8,bry:-.8,blr:.35,brr:-.35,mo:.1,mw:.3},.17,`power2.out`,0),s({hz:.04,hry:Z(e,-.05),cry:Z(e,-.15),crx:.16,[`${e}cy`]:Z(e,-.1),...jy(e,{r:[.28,1.98,.42],w:1,pole:[1,.6,-.4],g:[-.4,.1,.3]})},.09,`power2.in`,.17),s({hy:-.06,hz:.12,hry:Z(e,-.2),cry:Z(e,-.55),sry:Z(e,-.15),crx:.28,crz:Z(e,.08),[`${e}cy`]:Z(e,-.34),...jy(e,{r:[.03,Ay[1],Ay[2]-.02],pole:[1,.3,-.3],g:[-.35,0,.3],gs:1.2}),...My(e,{p:[.16,.09,0]}),mo:.6,mw:.25},.09,`power3.in`,.26),n.call(()=>t.landed(e,1.1),[],.35),s({cry:Z(e,-.66),crx:.32,...jy(e,{r:[-.14,1.6,Ay[2]-.08],gs:1.03})},.12,`power2.out`,.35),s({...i,arz:Z(e,-.12),ary:Z(e,.08),[`${e}gs`]:1,mo:.1,mw:.2,grin:1},.3,`power2.inOut`,.47),s({...i},.2,`power2.inOut`,.77),{tl:n,next:o,duration:.97}}case`slip`:{let e=t.nextSide(`slip`)===`l`?1:-1;return s({hx:e*.12,hy:-.13,hz:-.03,hry:e*-.1,srz:-e*.12,crz:-e*.2,crx:.24,cry:e*.12,arz:-e*.12,arx:.16,...Ny({c:[.1,1.66,.22]}),eyeL:1,eyeR:1,bly:.3,bry:.3},.16,`power3.out`,0),s({hx:e*.13,hy:-.14,crz:-e*.22},.22,`sine.inOut`,.16),s({...i},.27,`power2.inOut`,.38),{tl:n,next:o,duration:.65}}case`block`:return s({...Ly,eyeL:.55,eyeR:.55,bly:-.5,bry:-.5},.12,`power3.out`,0),n.call(()=>t.shake(.45),[],.2),s({hz:-.07,crx:.1,arx:.16,...Ny({c:[.075,1.73,.14]})},.07,`expo.out`,.2),s({hz:-.04,...Ly},.15,`power2.out`,.27),s({...i},.2,`power2.inOut`,.42),{tl:n,next:o,duration:.62};case`hitLight`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(.55,e),[],0),s({hz:(i.hz??0)-.04,crx:(i.crx??0)-.08,cry:r*.12,srx:-.02,nrx:-.16,arx:-.42,ary:r*.32,arz:-r*.12,eyeL:.12,eyeR:.12,mo:.65,mw:.1,bly:.7,bry:.7,blr:0,brr:0,grin:0},.06,`expo.out`,0),s({...i,...a,mo:.2},.39,`elastic.out(1, 0.55)`,.08),{tl:n,next:o,duration:.47}}case`hitHeavy`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(1,e),[],0),s({hy:-.02,hz:(i.hz??0)-.1,crx:-.26,cry:r*.22,crz:-r*.1,srx:-.1,nrx:-.26,arx:-.72,ary:r*.5,arz:-r*.26,...Ny({c:[.36,1.48,.14],pole:[1,-.4,-.5],g:[.1,.3,.4]}),eyeL:.06,eyeR:.06,mo:1,mw:.2,bly:.9,bry:.9,blr:0,brr:0,grin:0},.08,`expo.out`,0),s({hy:-.1,hz:(i.hz??0)-.17,crx:-.1,arx:-.3,ary:r*.25,...My(`l`,{p:[.17,.09,-.02]}),eyeL:.3,eyeR:.3,mo:.6},.22,`power2.out`,.08),s({...i,...a,mo:.15},.5,`back.out(1.3)`,.3),{tl:n,next:o,duration:.8}}case`stagger`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(1.2,e),[],0),s({hy:-.03,hz:-.12,crx:-.26,cry:r*.24,crz:-r*.12,srx:-.1,nrx:-.2,arx:-.55,ary:r*.5,arz:-r*.3,...Ny({c:[.42,1.5,.06],pole:[1,-.3,-.6],g:[.1,.3,.4]}),eyeL:.06,eyeR:.06,mo:1,mw:.25,bly:1,bry:1,blr:0,brr:0,grin:0},.08,`expo.out`,0),s({...My(`r`,{p:[.19,.16,-.24]})},.1,`power2.out`,.06),s({...My(`r`,{p:[.19,.09,-.34]}),hz:-.24,hy:-.1},.1,`power2.in`,.16),s({...My(`l`,{p:[.15,.17,-.06]}),crx:-.12,arx:-.4},.1,`power2.out`,.24),s({...My(`l`,{p:[.14,.09,-.14]}),hz:-.3,hy:-.12},.12,`power2.in`,.34),s({crz:r*.1,arz:r*.22,ary:-r*.15,crx:.05,eyeL:.4,eyeR:.4,mo:.4},.18,`sine.inOut`,.46),s({crz:-r*.06,arz:-r*.12,ary:r*.1,eyeL:.7,eyeR:.7},.16,`sine.inOut`,.64),s({...My(`r`,{p:[.17,.15,-.2]})},.12,`power2.out`,.78),s({...i,...a,...My(`l`,{p:[.16,.13,0]})},.2,`power2.inOut`,.86),s({...i,...a},.14,`power2.out`,1.02),{tl:n,next:o,duration:1.16}}case`koFall`:{let e=t.incomingSide(),r=e===`r`?-1:1;return o=`down`,n.call(()=>t.hit(1.5,e),[],0),s({hy:.02,hz:-.08,crx:-.36,cry:r*.26,crz:-r*.12,srx:-.16,hrx:-.04,nrx:-.32,arx:-.95,ary:r*.6,arz:-r*.32,...jy(`l`,{c:[.55,1.82,.12],w:0,pole:[1,.3,-.5],g:[.2,.4,.3]}),...jy(`r`,{c:[.6,1.66,.16],w:0,pole:[1,.3,-.5],g:[.2,.4,.3]}),...Py({rot:[.2,.1,0]}),eyeL:.06,eyeR:.06,mo:1,mw:.25,bly:1,bry:1,blr:0,brr:0,grin:0,look:.4},.12,`expo.out`,0),s({hy:-.04,hz:-.26,hrx:-.46,crx:-.2,srx:-.1,cry:r*.18,arx:-.55,ary:r*.4,look:0,...jy(`l`,{c:[.72,1.78,.02],pole:[.6,.5,-.8]}),...jy(`r`,{c:[.76,1.62,.06],pole:[.6,.5,-.8]}),...Py({rot:[-.1,-.1,0]})},.63,`sine.inOut`,.12),s({hx:zy.hx,hy:-.84,hz:-.62,hrx:-1.5,hrz:zy.hrz,srx:.02,crx:.02,cry:r*.08,nrx:.1,arx:-.25,ary:r*.3,...jy(`l`,{c:[.6,1.9,-.08],pole:[.2,-.2,-1]}),...jy(`r`,{c:[.64,1.62,-.1],pole:[.2,-.2,-1]}),...My(`l`,{p:[.2,.36,.22],rot:[-1.1,.3,.1],knee:[.3,0,1]}),...My(`r`,{p:[.13,.3,.12],rot:[-.9,.1,-.1],knee:[.2,0,1]})},.45,`power2.in`,.75),n.call(()=>t.shake(.9),[],1.2),s({hy:-.77,hrx:-1.42,arx:-.35,...My(`l`,{p:[.2,.17,.2]}),...My(`r`,{p:[.14,.15,.12]})},.17,`power2.out`,1.2),s({hy:-.84,hrx:-1.5,arx:-.1,...My(`l`,{p:[.2,.075,.2]}),...My(`r`,{p:[.14,.075,.12]})},.2,`power2.in`,1.37),s({...zy},.55,`sine.inOut`,1.57),{tl:n,next:o,duration:2.12}}case`celebrate`:return o=`victory`,s({hy:-.13,crx:.22,arx:.16,...Ny({c:[.22,1.2,.2],w:0,pole:[1,-.6,-.5]}),eyeL:.4,eyeR:.4,mo:.1,grin:0},.15,`power2.out`,0),s({...By,hy:.08,...Py({p:[.17,.17,0],rot:[.35,.15,0]})},.27,`back.out(1.6)`,.15),s({hy:-.05,...Py({p:[.17,.09,0],rot:[0,.15,0]})},.16,`power2.in`,.42),s({...By},.5,`back.out(2)`,.58),{tl:n,next:o,duration:1.1};case`walkIn`:{let e=-1.25,t={...Fy,...a};n.set(r,{...t,hz:(t.hz??0)+e,lfz:(t.lfz??0)+e,rfz:(t.rfz??0)+e},0);let i=.3;for(let n=0;n<4;n++){let r=n*i,a=n%2==0?`l`:`r`,o=(a===`l`?t.lfz:t.rfz)+e+1.25*(n<2?.5:1);s({[`${a}fy`]:.18,[`${a}fz`]:o-.2,[`${a}frx`]:-.15},i*.5,`power2.out`,r),s({[`${a}fy`]:.09,[`${a}fz`]:o,[`${a}frx`]:0},i*.5,`power2.in`,r+i*.5),s({hy:(t.hy??0)+.02,hry:(t.hry??0)+(a===`l`?-.06:.06)},i*.5,`sine.out`,r),s({hy:(t.hy??0)-.03},i*.5,`sine.in`,r+i*.5)}return s({hz:t.hz},i*4,`power1.inOut`,0),s({...t},.15,`power2.out`,i*4),{tl:n,next:o,duration:1.3499999999999999}}default:return{tl:n,next:o,duration:0}}}var Ky=[`hips`,`spine`,`chest`,`neck`,`head`,`clavL`,`upperL`,`foreL`,`gloveL`,`clavR`,`upperR`,`foreR`,`gloveR`,`thighL`,`shinL`,`footL`,`thighR`,`shinR`,`footR`,`eyeL`,`eyeR`,`mouth`,`browL`,`browR`,`swell`],Q=Object.fromEntries(Ky.map((e,t)=>[e,t])),qy={hips:null,spine:`hips`,chest:`spine`,neck:`chest`,head:`neck`,clavL:`chest`,upperL:`clavL`,foreL:`upperL`,gloveL:`foreL`,clavR:`chest`,upperR:`clavR`,foreR:`upperR`,gloveR:`foreR`,thighL:`hips`,shinL:`thighL`,footL:`shinL`,thighR:`hips`,shinR:`thighR`,footR:`shinR`,eyeL:`head`,eyeR:`head`,mouth:`head`,browL:`head`,browR:`head`,swell:`head`},Jy=[0,1.69,0],Yy=1.1;function Xy(e){return[Jy[0]+(e[0]-Jy[0])*Yy,Jy[1]+(e[1]-Jy[1])*Yy,Jy[2]+(e[2]-Jy[2])*Yy]}var Zy={hips:[0,.98,0],spine:[0,1.08,0],chest:[0,1.27,-.005],neck:[0,1.56,-.02],head:[0,1.68,0],clavL:[.05,1.5,-.02],upperL:[.285,1.5,-.025],foreL:[.285,1.21,-.025],gloveL:[.285,.95,-.025],clavR:[-.05,1.5,-.02],upperR:[-.285,1.5,-.025],foreR:[-.285,1.21,-.025],gloveR:[-.285,.95,-.025],thighL:[.1,.92,0],shinL:[.1,.5,.01],footL:[.1,.09,-.005],thighR:[-.1,.92,0],shinR:[-.1,.5,.01],footR:[-.1,.09,-.005],eyeL:Xy([.04,1.8,.088]),eyeR:Xy([-.04,1.8,.088]),mouth:Xy([0,1.712,.104]),browL:Xy([.042,1.833,.1]),browR:Xy([-.042,1.833,.1]),swell:Xy([.045,1.79,.088])},Qy=.29,$y=.42,eb=.41,tb={hx:0,hy:0,hz:0,hrx:0,hry:0,hrz:0,srx:0,sry:0,srz:0,crx:0,cry:0,crz:0,nrx:0,nry:0,nrz:0,arx:0,ary:0,arz:0,lcy:0,lcz:0,rcy:0,rcz:0,lax:.3,lay:.84,laz:.02,lbx:.3,lby:.84,lbz:.02,lw:0,lpx:.2,lpy:0,lpz:-1,lgx:0,lgy:0,lgz:0,lgs:1,rax:-.3,ray:.84,raz:.02,rbx:-.3,rby:.84,rbz:.02,rw:0,rpx:-.2,rpy:0,rpz:-1,rgx:0,rgy:0,rgz:0,rgs:1,lfx:.11,lfy:.09,lfz:0,lfrx:0,lfry:0,lfrz:0,lkx:.15,lky:0,lkz:1,rfx:-.11,rfy:.09,rfz:0,rfrx:0,rfry:0,rfrz:0,rkx:-.15,rky:0,rkz:1,eyeL:1,eyeR:1,mo:0,mw:0,grin:0,bly:0,bry:0,blr:0,brr:0,look:1,stars:0},nb=new es,rb=new es,ib=new Ns,ab=new J,ob=new q,sb=new q,cb=new q,lb=new q,ub=new q,db=new q,fb=new q,pb=new q;function mb(){let e=Ky.map(e=>{let t=new Bl;return t.name=e,t});Ky.forEach((t,n)=>{let r=qy[t],i=Zy[t];if(r){let t=Zy[r];e[n].position.set(i[0]-t[0],i[1]-t[1],i[2]-t[2]),e[Q[r]].add(e[n])}else e[n].position.set(i[0],i[1],i[2])});let t=e.map(()=>new J),n={l:0,r:0},r=Ky.map(e=>qy[e]?Q[qy[e]]:-1),i=n=>{let i=e[n];i.updateMatrix();let a=r[n];a<0?t[n].copy(i.matrix):t[n].multiplyMatrices(t[a],i.matrix)},a=(t,n,r,i,a=`YXZ`)=>{e[t].quaternion.setFromEuler(ib.set(n,r,i,a))},o=(n,a,o,s,c,l)=>{let u=r[n];e[n].quaternion.identity(),i(n),ob.setFromMatrixPosition(t[n]),cb.copy(s).sub(ob);let d=Math.min(Math.max(cb.length(),Math.abs(a-o)+.01),(a+o)*.9995);cb.lengthSq()<1e-8&&cb.set(0,-1,0),cb.normalize();let f=Math.min(1,Math.max(-1,(a*a+d*d-o*o)/(2*a*d))),p=Math.sqrt(1-f*f);lb.copy(c).addScaledVector(cb,-c.dot(cb)),lb.lengthSq()<1e-8&&lb.set(cb.y,-cb.x,0).addScaledVector(cb,0),lb.lengthSq()<1e-8&&lb.set(0,cb.z,-cb.y),lb.normalize(),ub.copy(ob).addScaledVector(cb,a*f).addScaledVector(lb,a*p),fb.copy(ub).sub(ob).normalize().negate(),pb.copy(s).sub(ub),pb.addScaledVector(fb,-pb.dot(fb)),pb.lengthSq()<1e-6&&pb.copy(lb).multiplyScalar(-1).addScaledVector(fb,lb.dot(fb)),pb.normalize().multiplyScalar(l),db.crossVectors(fb,pb).normalize(),ab.makeBasis(db,fb,pb),nb.setFromRotationMatrix(ab),rb.setFromRotationMatrix(t[u]).invert(),e[n].quaternion.copy(rb.multiply(nb)),i(n);let m=Math.min(1,Math.max(-1,(a*a+o*o-d*d)/(2*a*o)));return Math.PI-Math.acos(m)},s=new q,c=new q,l=new q(...Zy.chest),u=(r,u)=>{let d=u===`l`,f=d?Q.upperL:Q.upperR,p=d?Q.foreL:Q.foreR,m=d?Q.gloveL:Q.gloveR,h=d?r.lax:r.rax,g=d?r.lay:r.ray,_=d?r.laz:r.raz,v=d?r.lbx:r.rbx,y=d?r.lby:r.rby,b=d?r.lbz:r.rbz,x=d?r.lw:r.rw;n[u]=Math.min(1,Math.max(0,x)),c.set(h,g,_).sub(l).applyMatrix4(t[Q.chest]),s.set(v,y,b),s.lerpVectors(c,s,Math.min(1,Math.max(0,x))),sb.set(d?r.lpx:r.rpx,d?r.lpy:r.rpy,d?r.lpz:r.rpz).transformDirection(t[Q.chest]);let S=o(f,Qy,.385,s,sb,1);a(p,-S,0,0,`XYZ`),i(p),a(m,d?r.lgx:r.rgx,d?r.lgy:r.rgy,d?r.lgz:r.rgz,`XYZ`);let C=d?r.lgs:r.rgs;e[m].scale.set(C,C,C),i(m)},d=(n,r)=>{let c=r===`l`,l=c?Q.thighL:Q.thighR,u=c?Q.shinL:Q.shinR,d=c?Q.footL:Q.footR;s.set(c?n.lfx:n.rfx,c?n.lfy:n.rfy,c?n.lfz:n.rfz),sb.set(c?n.lkx:n.rkx,c?n.lky:n.rky,c?n.lkz:n.rkz).transformDirection(t[Q.hips]);let f=o(l,$y,eb,s,sb,-1);a(u,f,0,0,`XYZ`),i(u),nb.setFromEuler(ib.set(c?n.lfrx:n.rfrx,c?n.lfry:n.rfry,c?n.lfrz:n.rfrz,`YXZ`)),rb.setFromRotationMatrix(t[u]).invert(),e[d].quaternion.copy(rb.multiply(nb)),i(d)};return{bones:e,model:t,solve:(t,n)=>{e[Q.hips].position.set(Zy.hips[0]+t.hx,Zy.hips[1]+t.hy,Zy.hips[2]+t.hz),a(Q.hips,t.hrx,t.hry,t.hrz),i(Q.hips),a(Q.spine,t.srx,t.sry,t.srz),i(Q.spine),a(Q.chest,t.crx,t.cry,t.crz),i(Q.chest),a(Q.neck,t.nrx,t.nry,t.nrz),i(Q.neck);let r=t.hry+t.sry+t.cry+t.nry,o=t.hrz+t.srz+t.crz+t.nrz;a(Q.head,t.arx,t.ary-t.look*r,t.arz-t.look*.75*o),i(Q.head),a(Q.clavL,0,t.lcy,t.lcz),i(Q.clavL),a(Q.clavR,0,t.rcy,t.rcz),i(Q.clavR),u(t,`l`),u(t,`r`),d(t,`l`),d(t,`r`);let s=(t,n,r)=>{let a=Math.min(1.15,Math.max(0,r));e[t].position.set(Zy[n][0]-Zy.head[0],Zy[n][1]-Zy.head[1]+(-5e-4+.0235*a)*Yy,Zy[n][2]-Zy.head[2]+(5e-4-.0075*a)*Yy),e[t].scale.set(1,1,1),i(t)};s(Q.eyeL,`eyeL`,t.eyeL),s(Q.eyeR,`eyeR`,t.eyeR);let c=e[Q.mouth];c.scale.set(1+t.mw+.25*t.grin,1+t.mo*3.2,1+t.mo*.4),c.position.set(Zy.mouth[0]-Zy.head[0],Zy.mouth[1]-Zy.head[1]-t.mo*.012+t.grin*.002,Zy.mouth[2]-Zy.head[2]),a(Q.mouth,0,0,t.grin*.12,`XYZ`),i(Q.mouth);let l=(t,n,r,o)=>{e[t].position.set(Zy[n][0]-Zy.head[0],Zy[n][1]-Zy.head[1]+r*.012,Zy[n][2]-Zy.head[2]),a(t,0,0,o,`XYZ`),i(t)};l(Q.browL,`browL`,t.bly,t.blr),l(Q.browR,`browR`,t.bry,t.brr);let f=Math.max(.001,n);e[Q.swell].scale.set(f,f,f),i(Q.swell)},armBlend:n}}function hb(e,t,n){return n.setFromMatrixPosition(e.model[Q[t]])}function gb(e,t,n,r){let i=Zy[t];return r.set(n[0]-i[0],n[1]-i[1],n[2]-i[2]).applyMatrix4(e.model[Q[t]])}var _b=new Y,vb=new q,yb=new q,bb=new q;function xb(e,t){return e===void 0?t:typeof e==`number`?e:e(vb,yb,bb)}var Sb=class{pos=[];nrm=[];col=[];aux=[];skI=[];skW=[];idx=[];get vertexCount(){return this.pos.length/3}add(e,t,n,r=!1){let i=e.getAttribute(`position`),a=e.getAttribute(`normal`),o=new rs().getNormalMatrix(t),s=this.vertexCount,c=n.shade??.14;for(let e=0;e<i.count;e++){vb.fromBufferAttribute(i,e),bb.fromBufferAttribute(a,e).applyMatrix3(o).normalize(),r&&bb.negate(),yb.copy(vb).applyMatrix4(t),this.pos.push(yb.x,yb.y,yb.z),this.nrm.push(bb.x,bb.y,bb.z);let s=typeof n.paint==`number`?n.paint:n.paint(vb,yb,bb);_b.setHex(s);let l=1-c*(.5-.5*bb.y)*(.6+.4*Math.max(0,-bb.y));this.col.push(_b.r*l,_b.g*l,_b.b*l),this.aux.push(xb(n.gloss,.25),xb(n.outline,1),xb(n.cheek,0),xb(n.bruise,0)),this.skI.push(n.bone,0,0,0),this.skW.push(1,0,0,0)}if(e.index){let t=e.index;for(let e=0;e<t.count;e+=3){let n=t.getX(e)+s,i=t.getX(e+1)+s,a=t.getX(e+2)+s;r?this.idx.push(n,a,i):this.idx.push(n,i,a)}}else for(let e=0;e<i.count;e+=3)r?this.idx.push(s+e,s+e+2,s+e+1):this.idx.push(s+e,s+e+1,s+e+2);e.dispose()}build(){return this.buildPair().body}buildPair(){let e=this.vertexCount,t={position:new Hc(this.pos,3),normal:new Hc(this.nrm,3),color:new Hc(this.col,3),aux:new Hc(this.aux,4),skinIndex:new Bc(this.skI,4),skinWeight:new Hc(this.skW,4)},n=t=>e>65535?new Vc(t,1):new Bc(t,1),r=e=>{let r=new el;for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return r.setIndex(n(e)),r.computeBoundingSphere(),r},i=[];for(let e=0;e<this.idx.length;e+=3){let t=this.idx[e],n=this.idx[e+1],r=this.idx[e+2];(this.aux[t*4+1]>0||this.aux[n*4+1]>0||this.aux[r*4+1]>0)&&i.push(t,n,r)}return{body:r(this.idx),outline:r(i)}}},Cb=Math.PI/180;function wb(e,t=[0,0,0],n=[1,1,1],r=`XYZ`){let i=new es().setFromEuler(new Ns(t[0]*Cb,t[1]*Cb,t[2]*Cb,r));return new J().compose(new q(...e),i,new q(...n))}function Tb(e,t,n=1,r=1,i=0){let a=new q(...e),o=new q(...t).sub(a).normalize(),s=new es().setFromUnitVectors(new q(0,1,0),o);return i&&s.multiply(new es().setFromAxisAngle(new q(0,1,0),i*Cb)),new J().compose(a,s,new q(n,1,r))}function Eb(e,t){return Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2])}function Db(e=22,t=16,n=0,r=Math.PI,i=0,a=Math.PI*2){return new ef(1,e,t,i,a,n,r)}function Ob(e,t=24,n){let r=e[0][1]>e[e.length-1][1],i=r?[...e].reverse():e,a=n&&r?[...n].reverse():n,o=i.length,s=a??i.map((e,t)=>{let n=i[Math.max(0,t-1)],r=i[Math.min(o-1,t+1)],a=r[0]-n[0],s=r[1]-n[1],c=Math.hypot(a,s)||1;return[s/c,-a/c]}),c=[],l=[],u=[];for(let e=0;e<=t;e++){let n=e/t*Math.PI*2,r=Math.sin(n),a=Math.cos(n);for(let e=0;e<o;e++){let[t,n]=i[e];c.push(t*r,n,t*a),l.push(s[e][0]*r,s[e][1],s[e][0]*a)}}for(let e=0;e<t;e++)for(let t=0;t<o-1;t++){let n=t+e*o,r=n+o;u.push(n,r,n+1,r+1,n+1,r)}let d=new el;return d.setAttribute(`position`,new Hc(c,3)),d.setAttribute(`normal`,new Hc(l,3)),d.setIndex(u),d}function kb(e,t,n,r=16,i=5){let a=Math.asin(Math.max(-.95,Math.min(.95,(e-t)/n))),o=[],s=[];for(let t=0;t<=i;t++){let n=-Math.PI/2+t/i*(a+Math.PI/2);o.push([e*Math.cos(n),e*Math.sin(n)]),s.push([Math.cos(n),Math.sin(n)])}let c=Math.max(2,Math.round(n/.045));for(let r=1;r<c;r++){let i=r/c,l=e*Math.cos(a),u=t*Math.cos(a),d=e*Math.sin(a),f=n+t*Math.sin(a);o.push([l+(u-l)*i,d+(f-d)*i]),s.push([Math.cos(a),Math.sin(a)])}for(let e=0;e<=i;e++){let r=a+e/i*(Math.PI/2-a);o.push([t*Math.cos(r),n+t*Math.sin(r)]),s.push([Math.cos(r),Math.sin(r)])}return Ob(o,r,s)}function Ab(e,t,n=.003,r=6){let i=new qd(e,{depth:t,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:r});return i.translate(0,0,-t/2),i.deleteAttribute(`uv`),i}function jb(e,t){let n=e.index?e.toNonIndexed():e;for(let r=0;r<t;r++){let t=n.getAttribute(`position`),r=n.getAttribute(`normal`),i=[],a=[],o=[new q,new q,new q],s=[new q,new q,new q],c=[new q,new q,new q],l=[new q,new q,new q];for(let e=0;e<t.count;e+=3){for(let n=0;n<3;n++)o[n].fromBufferAttribute(t,e+n),s[n].fromBufferAttribute(r,e+n);for(let e=0;e<3;e++)c[e].copy(o[e]).add(o[(e+1)%3]).multiplyScalar(.5),l[e].copy(s[e]).add(s[(e+1)%3]).normalize();let n=[[[o[0],s[0]],[c[0],l[0]],[c[2],l[2]]],[[c[0],l[0]],[o[1],s[1]],[c[1],l[1]]],[[c[2],l[2]],[c[1],l[1]],[o[2],s[2]]],[[c[0],l[0]],[c[1],l[1]],[c[2],l[2]]]];for(let e of n)for(let[t,n]of e)i.push(t.x,t.y,t.z),a.push(n.x,n.y,n.z)}n!==e&&n.dispose(),n=new el,n.setAttribute(`position`,new zc(new Float32Array(i),3)),n.setAttribute(`normal`,new zc(new Float32Array(a),3))}return n}function Mb(e,t,n,r,i){let a=jb(e,3);e.dispose(),a.applyMatrix4(t);let o=a.getAttribute(`position`),s=a.getAttribute(`normal`),c=new q(...n),l=new q(...r),u=new q,d=new q,f=new q,p=new q;for(let e=0;e<o.count;e++)u.fromBufferAttribute(o,e).sub(c),d.set(u.x/l.x,u.y/l.y,u.z/l.z).normalize(),f.set(d.x*l.x,d.y*l.y,d.z*l.z),p.set(d.x/l.x,d.y/l.y,d.z/l.z).normalize(),f.add(c).addScaledVector(p,i),o.setXYZ(e,f.x,f.y,f.z),s.setXYZ(e,p.x,p.y,p.z);return a}function Nb(){let e=new ld,t=[[.12,.5],[-.26,.02],[-.02,.02],[-.16,-.5],[.28,.06],[.04,.06],[.2,.5]];e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);return e.closePath(),e}function Pb(e=.48){let t=new ld;for(let n=0;n<10;n++){let r=Math.PI/2+n*Math.PI/5,i=n%2==0?1:e,a=Math.cos(r)*i,o=Math.sin(r)*i;n===0?t.moveTo(a,o):t.lineTo(a,o)}return t.closePath(),t}var Fb=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Ib(e){let t=new Sb,n=e.bulk,r=(e,n,r,i,a,o=[18,12])=>t.add(Db(o[0],o[1]),wb(n,i,r),{bone:e,...a}),i=(e,n,r,i,a,o,s=16)=>t.add(kb(i,a,Eb(n,r),s),Tb(n,r),{bone:e,...o}),a=(e,n,r,i,a,o=[0,0,0])=>t.add(Ob(r,28),wb(n,o,i),{bone:e,...a}),o={paint:e.skin,gloss:.12,outline:1,shade:.14},s={...o,outline:.4,shade:.1},c={...o,outline:.55,shade:.12};t.add(Ob(zb([[0,1.13],[.115,1.14],[.145,1.2],[.172,1.28],[.198,1.36],[.213,1.43],[.21,1.49],[.19,1.54],[.15,1.58],[.09,1.615],[0,1.63]],3),36),wb([0,0,-.02],[0,0,0],[1*n,1,.68]),{bone:Q.chest,...o});for(let t of[1,-1])r(Q.chest,[t*.088,1.418,.078],[.1*n,.074,.066],[-8,t*20,t*12],c),r(Q.chest,[t*.112,1.39,.138],[.009,.008,.005],[0,0,0],{paint:e.skinDeep,outline:0,gloss:0},[10,8]),r(Q.chest,[t*.132,1.33,-.03],[.092*n,.17,.09],[0,0,t*-12],{...c,outline:.7}),r(Q.chest,[t*.078,1.578,-.042],[.13*n,.07,.085],[-6,0,t*-24],c),r(Q.chest,[t*.085,1.45,-.128],[.062*n,.08,.034],[8,t*-16,t*18],{...s,outline:.3}),r(Q.chest,[t*.152,1.33,.03],[.045,.08,.055],[0,0,t*-8],{...s,outline:.28},[12,8]);r(Q.chest,[0,1.605,-.07],[.105*n,.085,.062],[10,0,0],{...c,outline:.7}),r(Q.spine,[0,1.17,-.005],[.14*n,.17,.112],[0,0,0],o,[22,16]),r(Q.spine,[0,1.2,.072],[.07,.125,.04],[-6,0,0],{paint:t=>{let n=Math.abs(t.x)<.07,r=[.42,-.02,-.46].some(e=>Math.abs(t.y-e)<.07);return(n||r)&&t.z>.2?e.skinDeep:e.skin},gloss:.12,outline:.3,shade:.06},[24,26]);for(let e of[1,-1])r(Q.spine,[e*.108,1.105,.02],[.05,.085,.07],[0,0,e*8],{...s,outline:.28}),r(Q.spine,[e*.038,1.2,-.084],[.04,.15,.04],[0,0,0],{...s,outline:.4});r(Q.hips,[0,1.03,-.005],[.148*n,.11,.11],[0,0,0],{paint:(t=>(n,r)=>r.y>1.075?e.skin:t)(e.shorts),gloss:.15,outline:.6}),r(Q.hips,[0,.935,-.01],[.168*Math.sqrt(n),.13,.128],[0,0,0],{paint:e.shorts,gloss:.18});for(let t of[1,-1])r(Q.hips,[t*.07,.905,-.07],[.092,.1,.076],[0,0,0],{paint:e.shorts,gloss:.18,outline:.7});a(Q.hips,[0,0,-.008],[[.13,.988],[.152,.992],[.158,1],[.16,1.04],[.158,1.078],[.15,1.086],[.128,1.09]],[1.02*n,1,.8],{paint:(t,n)=>{let r=n.y;return r>1.022&&r<1.036||r>1.044&&r<1.056?e.shortsDeep:e.trim},gloss:.45,outline:1});for(let a of[1,-1]){let l=a===1,u=l?Q.thighL:Q.thighR,d=l?Q.shinL:Q.shinR,f=l?Q.footL:Q.footR,p=Zy[l?`thighL`:`thighR`],m=Zy[l?`shinL`:`shinR`],h=Zy[l?`footL`:`footR`],g=p[0];t.add(Ob([[.07,.11],[.112,.07],[.13,0],[.136,-.07],[.134,-.14],[.128,-.19],[.131,-.2],[.131,-.225],[.12,-.236],[.09,-.24]],30),wb([g+a*.008,p[1],p[2]-.005],[0,0,a*3]),{bone:u,paint:t=>{let n=Math.hypot(t.x,t.z)||1;return t.y<-.19?e.trim:a*t.x/n>.9?e.stripe:a*t.x/n>.82?e.shortsDeep:e.shorts},gloss:.18,outline:1}),i(u,m,p,.078,.102,o),r(u,[g+a*.004,.63,.028],[.088*n,.16,.084],[0,0,0],c),r(u,[g+a*.032,.6,-.01],[.052,.12,.064],[0,0,a*-6],{...s,outline:.3}),i(d,h,m,.048,.066,o),r(d,[g,.5,.058],[.042,.044,.026],[0,0,0],{...s,outline:.35},[12,8]),r(d,[g+a*.008,.37,-.034],[.068*n,.12,.064],[0,0,0],c),t.add(Ob([[.045,.198],[.058,.205],[.06,.226],[.058,.262],[.046,.268]],24),wb([g,0,h[2]-.004]),{bone:d,paint:e.sock,gloss:.1,outline:.8}),t.add(Ob([[.044,.03],[.064,.042],[.068,.11],[.065,.19],[.068,.2],[.066,.214],[.05,.22]],26),wb([g,0,h[2]-.008]),{bone:f,paint:(t,n)=>n.y>.168&&n.y<.19||n.y>.198?e.shoeTrim:n.z>h[2]+.05&&Math.abs(n.x-g)<.022&&Math.floor(n.y*55)%2==0?e.sock:e.shoe,gloss:.5,outline:1}),r(f,[g,.058,.04],[.064,.056,.125],[-4,0,0],{paint:t=>t.z>.25&&t.y>.35&&Math.abs(t.x)<.32&&Math.floor((t.z+1)*9)%2==0?e.sock:t.y<-.25?e.shoeTrim:e.shoe,gloss:.55,outline:1}),r(f,[g,.017,.042],[.07,.022,.136],[0,0,0],{paint:e.sole,gloss:.2,outline:1,shade:.15})}for(let a of[1,-1]){let s=a===1,l=s?Q.upperL:Q.upperR,u=s?Q.foreL:Q.foreR,d=s?Q.gloveL:Q.gloveR,f=Zy[s?`upperL`:`upperR`],p=Zy[s?`foreL`:`foreR`],m=Zy[s?`gloveL`:`gloveR`],h=f[0];r(l,[h+a*.01,1.462,-.02],[.09*n,.13,.09],[0,0,a*-8],{...c,outline:.8},[20,16]),i(l,p,f,.07,.084,o),r(l,[h,1.338,.022],[.064*n,.098,.062],[0,0,0],{...c,outline:.45}),r(l,[h+a*.004,1.362,-.034],[.064*n,.112,.06],[0,0,0],{...c,outline:.45}),i(u,m,p,.05,.066,o),r(u,[h+a*.006,1.128,.002],[.066*n,.088,.062],[0,0,a*4],{...c,outline:.4}),Lb(t,e,a,d,[h,m[1],m[2]])}i(Q.neck,[0,1.5,-.03],[0,1.72,-.008],.098*n,.08,o);for(let e of[1,-1])r(Q.neck,[e*.038,1.625,.034],[.018,.074,.02],[-24,0,e*-16],{...s,outline:.32},[12,8]);if(Vb(t,e),e.tattoo){let e=[.295,1.462,-.02],r=[.09*n,.13,.09],i=new q(1,.12,.18).normalize(),a=new q(0,1,0),o=new q().crossVectors(a,i).normalize(),s=new q().crossVectors(i,o).normalize(),c=(t,n)=>new J().makeBasis(o,s,i).setPosition(new q(...e).addScaledVector(i,.1+n)).multiply(new J().makeScale(t,t,t)),l=Mb(new Qd(Nb()),c(.15,0),e,r,.0022);t.add(l,new J,{bone:Q.upperL,paint:2758144,outline:0,gloss:.1,shade:0});let u=Mb(new Qd(Nb()),c(.118,0),e,r,.0042);t.add(u,new J,{bone:Q.upperL,paint:16766238,outline:0,gloss:.4,shade:0})}return t.buildPair()}function Lb(e,t,n,r,i){let[a,o,s]=i;e.add(Ob([[0,.05],[.045,.047],[.066,.038],[.074,.01],[.08,-.03],[.083,-.052],[.07,-.062]],28),wb([a,o,s]),{bone:r,paint:e=>e.y<-.028&&e.y>-.042?t.cuffStripe:t.cuff,gloss:.55,outline:1});let c=e=>Fb(.2,.9,-n*e.x)>.5?t.gloveDeep:t.glove,l=(t,n,i,a,o)=>e.add(Db(o[0],o[1]),wb(t,i,n),{bone:r,...a});l([a,o-.13,s+.012],[.114,.13,.122],[0,0,0],{paint:c,gloss:1,outline:1.1,shade:.22},[24,18]),l([a+n*.004,o-.18,s+.036],[.104,.085,.102],[0,0,0],{paint:t.glove,gloss:1,outline:1.1,shade:.2},[20,14]),l([a-n*.062,o-.105,s+.082],[.034,.074,.037],[-16,0,n*14],{paint:t.glove,gloss:1,outline:.9},[14,10])}function Rb(e){let t=new Sb;return Lb(t,e,1,0,[0,0,0]),Lb(t,e,-1,1,[0,0,0]),t.build()}function zb(e,t){let n=[];for(let r=0;r<e.length-1;r++){let i=e[Math.max(0,r-1)],a=e[r],o=e[r+1],s=e[Math.min(e.length-1,r+2)];for(let e=0;e<t;e++){let r=e/t,c=r*r,l=c*r,u=(e,t,n,i)=>.5*(2*t+(-e+n)*r+(2*e-5*t+4*n-i)*c+(-e+3*t-3*n+i)*l);n.push([Math.max(0,u(i[0],a[0],o[0],s[0])),u(i[1],a[1],o[1],s[1])])}}return n.push(e[e.length-1]),n}function Bb(e,t){let n=Db(20,10);n.scale(e[0],e[1],e[2]);let r=n.getAttribute(`position`);for(let n=0;n<r.count;n++){let i=r.getX(n);r.setY(n,r.getY(n)+t*i*i/e[0])}return n.computeVertexNormals(),n}function Vb(e,t){let n=t.bulk,r=new J().makeTranslation(Jy[0],Jy[1],Jy[2]).multiply(new J().makeScale(Yy,Yy,Yy)).multiply(new J().makeTranslation(-Jy[0],-Jy[1],-Jy[2])),i={add:(t,n,i)=>e.add(t,r.clone().multiply(n),i)},a=(e,t,n,r,a,o=[14,10])=>i.add(Db(o[0],o[1]),wb(t,r,n),{bone:e,...a}),o=Q.head,s=t.hair===null,c={paint:t.skin,gloss:.12,outline:1,shade:.1};a(o,[0,1.805,-.012],[.1,.118,.114],[0,0,0],{paint:e=>!s&&Math.abs(e.x)<.34&&e.y>-.45&&e.z<.8?t.brow:t.skin,gloss:s?.4:.12,outline:1,shade:.1},[30,22]);let l=e=>-.12+.62*Fb(.3,.92,Math.abs(e.x));a(o,[0,1.738,.026],[.09*(t.expression===`scowl`?1.05:.97)*Math.sqrt(n),.08,.088],[10,0,0],{paint:e=>t.beard!==null&&e.y<l(e)&&e.z>-.55?t.beard:t.skin,gloss:.25,outline:1,cheek:e=>{let t=Math.abs(e.x)-.62,n=e.y-.3,r=e.z-.65;return Math.exp(-(t*t+n*n+r*r)/.09)},shade:.2},[30,22]);for(let e of[1,-1])a(o,[e*.097,1.784,-.014],[.014,.034,.025],[0,e*22,0],{paint:t.skinWarm,gloss:.1,outline:.5},[12,8]),a(o,[e*.017,1.765,.105],[.014,.012,.014],[0,0,0],{...c,outline:.35},[12,8]);a(o,[0,1.676,.068],[.044,.032,.036],[0,0,0],{paint:t.beard??t.skin,gloss:.2,outline:.7},[16,10]),a(o,[0,1.826,.073],[.08,.024,.036],[-8,0,0],{...c,outline:0,bruise:e=>Fb(.1,.8,e.x)},[20,10]),a(o,[0,1.797,.102],[.014,.03,.016],[-22,0,0],{...c,outline:.35},[12,8]),a(o,[0,1.772,.114],[.018,.018,.02],[0,0,0],{paint:t.skin,gloss:.2,outline:.45,cheek:.35},[12,8]);for(let e of[1,-1]){let n=e===1?Q.eyeL:Q.eyeR,r=t.expression===`scowl`?12:6;a(o,[e*.04,1.8,.087],[.024,.0165,.015],[0,0,e*r],{paint:16249318,gloss:.7,outline:.5,shade:.1},[14,10]),a(o,[e*.037,1.799,.0985],[.0088,.0098,.0062],[0,0,0],{paint:1708560,gloss:1,outline:0,shade:0},[12,8]),a(n,[e*.04,1.8,.0885],[.0285,.0195,.0185],[0,0,e*(r+6)],{paint:t.skinDeep,gloss:.15,outline:.5,shade:.05},[16,12]),a(e===1?Q.browL:Q.browR,[e*.042,1.833,.1],[.034,.0105,.014],[0,e*-14,0],{paint:t.brow,gloss:.1,outline:.5,shade:0},[12,8])}a(Q.swell,[.045,1.79,.088],[.03,.026,.022],[0,0,15],{paint:t.expression===`scowl`?7023164:13131902,gloss:.6,outline:.6,bruise:.4},[14,10]);let u=t.expression===`grin`,d=u?.32:-.22;if(i.add(Bb([.031,.0062,.012],d),wb([0,1.712,.104],[0,0,u?7:0]),{bone:Q.mouth,paint:3804436,gloss:.3,outline:.42,shade:0}),u&&i.add(Bb([.027,.0034,.0085],d),wb([0,1.7138,.1085],[0,0,7]),{bone:Q.mouth,paint:16578799,gloss:.6,outline:0,shade:0}),t.beard!==null)for(let e of[1,-1])a(o,[e*.021,1.727,.106],[.027,.0095,.013],[0,e*12,e*-14],{paint:t.beard,gloss:.15,outline:.4},[12,8]);if(t.hair!==null){let e=new q(0,1.805,-.012),n=new q(.1,.118,.114),r=t=>({base:new q(0,e.y+n.y*Math.cos(t),e.z-n.z*Math.sin(t)),nrm:new q(0,Math.cos(t)/n.y,-Math.sin(t)/n.z).normalize()});for(let e=0;e<9;e++){let n=e/8,i=-.5+n*2.2,{base:s,nrm:c}=r(i),l=s.clone().addScaledVector(c,.008),u=-i*180/Math.PI;a(o,[l.x,l.y,l.z],[.034-.006*n,.026,.04],[u,0,0],{paint:t.hair,gloss:.35,outline:.7,shade:.12},[12,8])}for(let e=0;e<11;e++){let n=e/10,{base:a,nrm:s}=r(-.55+n*2.2),c=.045+.05*Math.sin(Math.min(1,n*1.7)*Math.PI*.85)*(1-n*.4),l=(e%2==0?1:-1)*(.008+.01*Math.sin(n*9)),u=a.clone().addScaledVector(s,c).add(new q(l,.004,-.03-.025*n)),d=a.clone().addScaledVector(s,-.006);i.add(kb(.026,.0035,d.distanceTo(u),8,3),Tb([d.x,d.y,d.z],[u.x,u.y,u.z],.9,1.1),{bone:o,paint:(e,n)=>n.distanceTo(u)<c*.42?t.hairTip:t.hair,gloss:.45,outline:.7,shade:.12})}}}var Hb=32,Ub=5;function Wb(){let e=new Sb,t=Db(12,10),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=n.getY(e),r=t>0?1-.75*t*t:1;n.setXYZ(e,n.getX(e)*r,t*(t>0?1.7:1),n.getZ(e)*r)}e.add(t,new J,{bone:0,paint:15334399,shade:.25});let r=Db(8,6);e.add(r,wb([-.32,.18,.72],[0,0,0],[.28,.36,.2]),{bone:0,paint:16777215,shade:0});let i=Db(12,10),a=i.getAttribute(`position`);for(let e=0;e<a.count;e++){let t=a.getY(e),n=t>0?1-.75*t*t:1;a.setXYZ(e,a.getX(e)*n*1.2,t*(t>0?1.7:1)*1.15+.02,a.getZ(e)*n*1.2)}return e.add(i,new J,{bone:0,paint:3107996,shade:0},!0),e.build()}function Gb(){let e=new Sb;return e.add(Ab(Pb(.46),.32,.09,4),new J,{bone:0,paint:(e,t,n)=>Math.abs(n.z)>.7?16765466:16751122,shade:0}),e.add(Ab(Pb(.46),.32,.09,4),new J().makeScale(1.22,1.22,1.5),{bone:0,paint:2757376,shade:0},!0),e.build()}var Kb=class{group=new Zs;drops=[];dropMesh;starMesh;shadow;shadowMat;dripTimer=0;t=0;m=new J;q=new es;s=new q;up=new q(0,1,0);tmp=new q;constructor(){this.group.name=`boxer.fx`;let e=new hl({vertexColors:!0});e.name=`boxer.sweat`,this.dropMesh=new $l(Wb(),e,Hb),this.dropMesh.name=`sweat`,this.dropMesh.frustumCulled=!1,this.dropMesh.count=0;for(let e=0;e<Hb;e++)this.drops.push({p:new q,v:new q,life:0,max:1,size:.01});let t=new hl({vertexColors:!0,color:new Y(1.25,1.25,1.25)});t.name=`boxer.stars`,this.starMesh=new $l(Gb(),t,Ub),this.starMesh.name=`dizzyStars`,this.starMesh.frustumCulled=!1,this.starMesh.visible=!1,this.shadowMat=new df({uniforms:{uOpacity:{value:.55},uColor:{value:new Y(656404)}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vUv;
        void main() {
          float d = length(vUv * 2.0 - 1.0);
          float a = (1.0 - smoothstep(0.35, 1.0, d)) * uOpacity;
          gl_FragColor = vec4(uColor, a);
        }`,transparent:!0,depthWrite:!1,side:2}),this.shadowMat.name=`boxer.shadow`,this.shadow=new Dl(new Zd(1,1),this.shadowMat),this.shadow.name=`blobShadow`,this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.004,this.shadow.renderOrder=-1,this.group.add(this.shadow,this.dropMesh,this.starMesh)}spray(e,t,n,r){for(let i=0;i<n;i++){let n=this.drops.find(e=>e.life<=0);if(!n)return;let a=i*2.399+this.t*13.1,o=.55;n.p.copy(e).add(this.tmp.set(Math.cos(a)*.04,Math.sin(a*1.3)*.03,Math.sin(a)*.03)),n.v.copy(t).normalize().multiplyScalar(r*(.6+.4*(i*.618%1))),n.v.x+=Math.cos(a)*o*r*.5,n.v.y+=(.35+Math.sin(a*.7)*.35)*r*.5,n.v.z+=Math.sin(a)*o*r*.3,n.max=.7+.5*(i*.37%1),n.life=n.max,n.size=.007+.009*(i*.773%1)}}drip(e){let t=this.drops.find(e=>e.life<=0);t&&(t.p.copy(e),t.v.set(Math.sin(this.t*7.3)*.12,.15,.25+.1*Math.sin(this.t*3.1)),t.max=.9,t.life=t.max,t.size=.008)}update(e,t){this.t+=e,t.damage>.25&&(this.dripTimer-=e,this.dripTimer<=0&&(this.dripTimer=1.1-.75*t.damage,this.drip(t.brow)));let n=0;for(let t of this.drops){if(t.life<=0||(t.life-=e,t.v.y-=6.5*e,t.p.addScaledVector(t.v,e),t.p.y<.005&&(t.life=0),t.life<=0))continue;let r=Math.min(1,t.life/(t.max*.3)),i=t.v.length();this.q.setFromUnitVectors(this.up,this.tmp.copy(t.v).normalize().negate());let a=1+Math.min(1.2,i*.25);this.s.set(t.size*r,t.size*r*a,t.size*r),this.m.compose(t.p,this.q,this.s),this.dropMesh.setMatrixAt(n++,this.m)}this.dropMesh.count=n,this.dropMesh.instanceMatrix.needsUpdate=n>0;let r=t.stars;if(this.starMesh.visible=r>.01,this.starMesh.visible){let e=.15+.03*t.lying;for(let n=0;n<Ub;n++){let i=this.t*3.2+n/Ub*Math.PI*2,a=.032*Math.min(1,r*(1.15-.03*n))*(.9+.12*Math.sin(this.t*6+n));this.tmp.set(t.headTop.x+Math.cos(i)*e,t.headTop.y+Math.sin(i*1)*.035+Math.sin(this.t*2+n)*.01,t.headTop.z+Math.sin(i)*e*.8),this.q.setFromAxisAngle(this.up,this.t*4+n),this.s.setScalar(Math.max(1e-4,a)),this.m.compose(this.tmp,this.q,this.s),this.starMesh.setMatrixAt(n,this.m)}this.starMesh.instanceMatrix.needsUpdate=!0}let i=t.hips.x+(t.chest.x-t.hips.x)*.5*t.lying,a=t.hips.z+(t.chest.z-t.hips.z)*.7*t.lying;this.shadow.position.set(i,.004,a);let o=1+Math.max(0,t.hips.y-.9*(1-t.lying))*.8;this.shadow.scale.set(.8*o+.15*t.lying,.62*o+1.1*t.lying,1),this.shadowMat.uniforms.uOpacity.value=.6/o}dispose(){this.dropMesh.geometry.dispose(),this.dropMesh.material.dispose(),this.dropMesh.dispose(),this.starMesh.geometry.dispose(),this.starMesh.material.dispose(),this.starMesh.dispose(),this.shadow.geometry.dispose(),this.shadowMat.dispose()}},qb={demir:{skin:9064756,skinDeep:6173216,skinWarm:10114358,shorts:13836334,shortsDeep:10227744,trim:16169256,stripe:16169256,glove:14885420,gloveDeep:10818076,cuff:16169256,cuffStripe:16774102,shoe:1907234,shoeTrim:13836334,sole:15921128,sock:16052714,brow:1313802,hair:null,hairTip:0,beard:1511438,lips:5909022,bulk:1.07,expression:`scowl`,tattoo:!1,face:{blr:.42,brr:-.42,bly:-.35,bry:-.35,grin:0,eye:.82}},yildirim:{skin:15975068,skinDeep:14260856,skinWarm:15769736,shorts:1924064,shortsDeep:998046,trim:16251391,stripe:16251391,glove:1382173,gloveDeep:460811,cuff:3073791,cuffStripe:731702,shoe:15922424,shoeTrim:1924064,sole:2237227,sock:16251391,brow:14260766,hair:16764718,hairTip:16773798,beard:null,lips:13135966,bulk:.97,expression:`grin`,tattoo:!0,face:{blr:.18,brr:-.05,bly:-.1,bry:.45,grin:1,eye:.78}}},Jb={...qb,kralice:{...qb.demir,shorts:7024593,trim:16171834,stripe:16171834,cuff:16171834,glove:8009184,gloveDeep:4856476},firtina:{...qb.yildirim,shorts:16732067,trim:4063114,glove:3797611,gloveDeep:1415740,cuff:16251391,cuffStripe:1415740}},Yb=`
varying vec3 vViewPosition;
varying vec4 vAux;
uniform vec3 uShade;

struct ToonMaterial { vec3 diffuseColor; };

float boxerBand(float x) {
  // soft-edged cel bands: crisp enough to read as illustration, soft enough to hide the tessellation
  float fw = fwidth(x) + 0.03;
  float b1 = smoothstep(0.47 - fw, 0.47 + fw, x);
  float b2 = smoothstep(0.78 - fw, 0.78 + fw, x);
  return 0.66 * b1 + 0.34 * b2;
}

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal,
    const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material,
    inout ReflectedLight reflectedLight ) {
  float ndl = dot( geometryNormal, directLight.direction ) * 0.5 + 0.5;
  float b = boxerBand( ndl );
  vec3 irradiance = mix( uShade, vec3( 1.0 ), b ) * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  // toon specular: a crisp blob, bigger and brighter on glossy vertices
  vec3 h = normalize( directLight.direction + geometryViewDir );
  float nh = max( dot( geometryNormal, h ), 0.0 );
  float edge = mix( 0.997, 0.955, vAux.x );
  float fs = fwidth( nh ) + 1e-4;
  float sp = smoothstep( edge - fs, edge + fs, nh ) * vAux.x * step( 0.5, b );
  // highlights stay white even under coloured stage lights
  float lum = dot( directLight.color, vec3( 0.3333 ) );
  reflectedLight.directDiffuse += mix( directLight.color, vec3( lum ), 0.85 ) * sp * 0.22;
}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal,
    const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material,
    inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

#define RE_Direct RE_Direct_Toon
#define RE_IndirectDiffuse RE_IndirectDiffuse_Toon
`,Xb=`
  // arena rim light: a soft-edged band hugging the silhouette, stronger on upward-facing surfaces
  float ndv = max( dot( normal, normalize( vViewPosition ) ), 0.0 );
  float fr = fwidth( ndv ) + 1e-4;
  float rim = 1.0 - smoothstep( 0.1 - fr, 0.26 + fr, ndv );
  rim *= 0.45 + 0.55 * clamp( normal.y * 0.6 + 0.6, 0.0, 1.0 );
  outgoingLight += uRimColor * rim * uRim * ( 0.25 + diffuseColor.rgb * 0.9 );
  outgoingLight = mix( outgoingLight, uFlashColor, uFlash );`;function Zb(){let e={uDamage:{value:0},uFlash:{value:0},uFlashColor:{value:new Y(1,.96,.9)},uRimColor:{value:new Y(16736210)},uRim:{value:.4},uShade:{value:new Y(.07,.04,.11)},uCheek:{value:new Y(14692410)},uBruise:{value:new Y(6955088)},uOutline:{value:.0075}},t=new hf({vertexColors:!0});t.name=`boxer.body`,t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aux;
varying vec4 vAux;`).replace(`#include <color_vertex>`,`#include <color_vertex>
	vAux = aux;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDamage;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec3 uRimColor;
uniform float uRim;
uniform vec3 uCheek;
uniform vec3 uBruise;`).replace(`#include <lights_toon_pars_fragment>`,Yb).replace(`#include <color_fragment>`,`#include <color_fragment>
  // stylised look: more saturated albedo, so the lit gloves stay green / red / black instead of washing toward white
  float albedoLum = dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
  diffuseColor.rgb = max( vec3( 0.0 ), mix( vec3( albedoLum ), diffuseColor.rgb, 1.3 ) );
  float dmgCheek = clamp( uDamage * vAux.z * 1.25, 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uCheek * ( 0.55 + 0.45 * max( max( diffuseColor.r, diffuseColor.g ), diffuseColor.b ) * 2.0 ), dmgCheek * 0.62 );
  float dmgBruise = clamp( uDamage * vAux.w * 1.3, 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uBruise, dmgBruise * 0.55 );`).replace(`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`,`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;${Xb}`)},t.customProgramCacheKey=()=>`nakavt.boxer.body.v2`;let n=new hl({color:1509916,side:1});return n.name=`boxer.outline`,n.onBeforeCompile=t=>{t.uniforms.uOutline=e.uOutline,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aux;
uniform float uOutline;`).replace(`#include <begin_vertex>`,`vec4 olView = modelViewMatrix * vec4( position, 1.0 );
  float olScale = clamp( -olView.z / 2.6, 0.55, 1.5 );
  vec3 transformed = vec3( position ) + normal * ( uOutline * aux.y * olScale );`)},n.customProgramCacheKey=()=>`nakavt.boxer.outline.v1`,{body:t,outline:n,u:e,dispose(){t.dispose(),n.dispose()}}}var Qb=[`hips`,`spine`,`chest`,`neck`,`head`,`clavL`,`upperL`,`foreL`,`gloveL`,`clavR`,`upperR`,`foreR`,`gloveR`,`thighL`,`shinL`,`footL`,`thighR`,`shinR`,`footR`],$b={hips:null,spine:`hips`,chest:`spine`,neck:`chest`,head:`neck`,clavL:`chest`,upperL:`clavL`,foreL:`upperL`,gloveL:`foreL`,clavR:`chest`,upperR:`clavR`,foreR:`upperR`,gloveR:`foreR`,thighL:`hips`,shinL:`thighL`,footL:`shinL`,thighR:`hips`,shinR:`thighR`,footR:`shinR`},ex=Qb.filter(e=>e!==`clavL`&&e!==`clavR`),tx=[/^.*[:|]/,/^mixamorig\d*_?/i,/^bip\d*[\s_]+/i,/^def[-_.]/i],nx=[/^(left|right)/i,/^([lr])[\s._-]+/i],rx=[/[\s._-]+(l|r|left|right)$/i,/(left|right)$/i,/(?<=[a-z0-9])([LR])$/];function ix(e,t){let n=e;for(let e of tx)n=n.replace(e,``);let r=null;for(let e of[...nx,...rx]){let t=e.exec(n);if(t){r=t[1][0].toUpperCase(),n=n.slice(0,t.index)+n.slice(t.index+t[0].length);break}}let i=n.toLowerCase().replace(/[^a-z0-9]/g,``),a=/^(.*?)(\d*)$/.exec(i),o=a[1];if(!r){for(let[e,t]of[[o.slice(-1),o.slice(0,-1)],[o.slice(0,1),o.slice(1)]])if((e===`l`||e===`r`)&&lx.some(([,e])=>e.test(t))){r=e.toUpperCase(),o=t;break}}return{name:e,side:r,part:o,index:a[2]?Number(a[2]):0,order:t}}var ax=/^(hips?|pelvis|roothips?)$/,ox=/^spine$/,sx=/^neck$/,cx=/^head$/,lx=[[{L:`clavL`,R:`clavR`},/^(shoulder|clavicle)$/],[{L:`upperL`,R:`upperR`},/^(upperarm|arm)$/],[{L:`foreL`,R:`foreR`},/^(forearm|lowerarm)$/],[{L:`gloveL`,R:`gloveR`},/^(hand|wrist)$/],[{L:`thighL`,R:`thighR`},/^(upleg|upperleg|thigh)$/],[{L:`shinL`,R:`shinR`},/^(leg|lowerleg|calf|shin)$/],[{L:`footL`,R:`footR`},/^foot$/]],ux=(e,t)=>e.index-t.index||e.order-t.order;function dx(e){let t=e.map(ix),n=e=>t.filter(t=>t.side===null&&e.test(t.part)).sort(ux),r={},i=(e,t)=>{t.length&&(r[e]=t[0].name)};i(`hips`,n(ax));let a=n(ox),o=[...n(/^upperchest$/),...n(/^chest$/)];o.length?(r.chest=o[0].name,i(`spine`,a)):a.length&&(r.chest=a[a.length-1].name,a.length>1&&(r.spine=a[0].name)),i(`neck`,n(sx)),i(`head`,n(cx));for(let[e,n]of lx)for(let r of[`L`,`R`])i(e[r],t.filter(e=>e.side===r&&n.test(e.part)).sort(ux));return{map:r,missing:ex.filter(e=>r[e]===void 0)}}var fx=new Set([`hips`,`spine`,`chest`,`neck`,`head`,`footL`,`footR`]),px=Object.fromEntries(Qb.map(e=>[e,Qb.find(t=>$b[t]===e)])),mx=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)(e||t||n)&&mx.push(new q(e,t,n).normalize());var hx=.98,gx=1.5,_x=new J,vx=new es,yx=new es,bx=new q,xx=new q;function Sx(e,t,n){if(n.identity(),e===t)throw Error(`createRetarget: target.root must be an ancestor of the bones, not a bone`);for(let r=e;r!==t;r=r.parent){if(!r)throw Error(`createRetarget: bone "${e.name}" is not under target.root`);r.updateMatrix(),n.premultiply(r.matrix)}return n}var Cx=(e,t)=>t.setFromRotationMatrix(_x.extractRotation(e));function wx(e,t){let n=e;for(;n.parent;)n=n.parent;n.updateMatrixWorld(!0);for(let e of t.values())e.updateWorldMatrix(!0,!1);let r=new Map([...t].map(([e,t])=>[t,e])),i=e.skeleton.bones.map(e=>{for(let t=e;t;t=t.parent){let e=r.get(t);if(e)return e}return null}),a=new Map([...t].map(([e,t])=>[e,t.matrixWorld.clone().invert()])),o=new Map,{position:s,skinIndex:c,skinWeight:l}=e.geometry.attributes,u=new q;for(let t=0;t<s.count;t++){let n=0;for(let e=1;e<4;e++)l.getComponent(t,e)>l.getComponent(t,n)&&(n=e);let r=i[c.getComponent(t,n)];if(!r)continue;e.getVertexPosition(t,u).applyMatrix4(e.matrixWorld).applyMatrix4(a.get(r));let s=o.get(r);s||o.set(r,s=[]),s.push(u.x,u.y,u.z)}let d={};for(let[e,t]of o){let n=t.length/3,r=Array.from({length:n},(e,t)=>t),i=new Set;for(let e of mx){let a=n=>t[3*n]*e.x+t[3*n+1]*e.y+t[3*n+2]*e.z;r.sort((e,t)=>a(e)-a(t)),i.add(r[Math.floor(hx*(n-1))])}d[e]=Float32Array.from([...i].flatMap(e=>[t[3*e],t[3*e+1],t[3*e+2]]))}return d}function Tx(e,t){let{root:n}=t,r=new Map;for(let[e,i]of t.bones)r.set(e,Sx(i,n,new J));let i=e=>new q().setFromMatrixPosition(r.get(e)),a=e=>new q(...Zy[e]),o=t.bones.get(`hips`),s=o?i(`hips`):new q;if(o&&!(s.y>0))throw Error(`createRetarget: the hips' bind height is ${s.y.toFixed(3)}, not above the floor — the target root must sit at floor level with the feet on y = 0 (facing +Z)`);let c=e=>{let n=px[e];if(n&&t.bones.has(n))return[e,n];for(let n=$b[e];n;n=$b[n])if(t.bones.has(n))return[n,e];return null},l=[],u=new Map,d=new Map;for(let e of Qb){let n=t.bones.get(e);if(!n)continue;let o=new es,s=fx.has(e)?null:c(e);if(s){let e=a(s[1]).sub(a(s[0])),t=i(s[1]).sub(i(s[0]));e.lengthSq()>1e-12&&t.lengthSq()>1e-12&&o.setFromUnitVectors(t.normalize(),e.normalize())}let d=t.extents?.[e],f=new q().setFromMatrixScale(r.get(e)).x,p={bone:n,source:Q[e],aligned:o.multiply(Cx(r.get(e),new es)),ancestor:null,link:new es,rot:new es,offset:null,pos:i(e),points:d?.length?d.map(e=>e*f):null};l.push(p),u.set(n,p)}for(let e of l){let t=0;for(let r=e.bone.parent;r&&r!==n;r=r.parent)t++,e.ancestor??=u.get(r)??null;d.set(e,t);let r=e.bone.parent;if(r!==n&&Cx(Sx(r,n,new J),e.link),e.ancestor){let t=Cx(Sx(e.ancestor.bone,n,new J),new es).invert();e.link.premultiply(t),e.offset=e.pos.clone().sub(e.ancestor.pos).applyQuaternion(t)}}l.sort((e,t)=>d.get(e)-d.get(t));let f=[];for(let e of[`L`,`R`]){let[n,r,i]=[`upper${e}`,`fore${e}`,`glove${e}`],a=t.bones.get(n),o=t.bones.get(r),s=t.bones.get(i),c=a&&u.get(a),l=o&&u.get(o),d=s&&u.get(s);a&&o&&s&&c&&l&&d&&l.ancestor===c&&d.ancestor===l&&f.push({side:e===`L`?`l`:`r`,upper:c,fore:l,hand:d,foreOffset:o.position.clone(),handOffset:s.position.clone(),shoulder:Q[n],wrist:Q[i]})}let p=t.unit??0,m=o?u.get(o):null,h=a(`hips`),g=m?s.y/h.y:1,_=new J;m&&m.bone.parent!==n&&Sx(m.bone.parent,n,_).invert();let v=m!==null&&l.some(e=>e.points),y=e.armBlend,b=new q,x=new q,S=new q,C=new q,w=new q,T=new q,E=new es,D=new es,O=new q,k=new q,A=new q,j=new q,M=e=>{yx.copy(e.link),e.ancestor&&yx.premultiply(e.ancestor.rot),e.bone.quaternion.copy(yx.invert().multiply(e.rot))},N=t=>{let n=y[t.side];if(n<.02){t.fore.bone.position.copy(t.foreOffset),t.hand.bone.position.copy(t.handOffset);return}let{upper:r,fore:i,hand:a}=t;b.copy(r.pos),x.copy(t.foreOffset).applyQuaternion(r.rot).add(b),S.copy(t.handOffset).applyQuaternion(i.rot).add(x),C.setFromMatrixPosition(e.model[t.wrist]).divideScalar(p),C.lerpVectors(S,C,n);let o=t.foreOffset.length(),s=t.handOffset.length();w.subVectors(C,b);let c=w.length();if(c<1e-6)return;let l=Math.min(gx,Math.max(1,c/((o+s)*.995))),u=o*l,d=s*l,f=Math.min(c,(u+d)*.995);w.divideScalar(c),T.subVectors(x,b),T.addScaledVector(w,-T.dot(w)),T.lengthSq()<1e-10&&T.set(0,-1,0).addScaledVector(w,w.y),T.normalize();let m=Math.min(1,Math.max(-1,(u*u+f*f-d*d)/(2*u*f))),h=Math.sqrt(1-m*m),g=x.copy(b).addScaledVector(w,u*m).addScaledVector(T,u*h),_=E;O.copy(t.foreOffset).applyQuaternion(r.rot).normalize(),k.subVectors(g,b).normalize(),_.setFromUnitVectors(O,k),r.rot.premultiply(_),i.rot.premultiply(_),a.rot.premultiply(_),A.copy(t.handOffset).applyQuaternion(i.rot).normalize(),j.copy(b).addScaledVector(w,f).sub(g).normalize(),D.setFromUnitVectors(A,j),i.rot.premultiply(D),a.rot.premultiply(D),M(r),M(i),M(a),i.bone.position.copy(t.foreOffset).multiplyScalar(l),a.bone.position.copy(t.handOffset).multiplyScalar(l),i.pos.copy(g),a.pos.copy(b).addScaledVector(w,f)};return{hipsScale:g,apply(){for(let t of l)t.rot.multiplyQuaternions(Cx(e.model[t.source],vx),t.aligned),yx.copy(t.link),t.ancestor&&yx.premultiply(t.ancestor.rot),t.bone.quaternion.copy(yx.invert().multiply(t.rot));if(!m)return;bx.setFromMatrixPosition(e.model[Q.hips]).sub(h).multiplyScalar(g).add(s);for(let e of l)e===m?e.pos.copy(bx):e.ancestor&&e.pos.copy(e.offset).applyQuaternion(e.ancestor.rot).add(e.ancestor.pos);if(p>0)for(let e of f)N(e);let t=0;if(v){let e=0;for(let t of l){let n=t.points;if(n)for(let r=0;r<n.length;r+=3){let i=xx.set(n[r],n[r+1],n[r+2]).applyQuaternion(t.rot).y+t.pos.y;i<e&&(e=i)}}t=-e}bx.y+=t,m.bone.position.copy(bx.applyMatrix4(_))},sourceFrame(e){let n=t.bones.get(e);if(!n)throw Error(`createRetarget: "${e}" is not mapped`);return u.get(n).aligned.clone().invert()}}}var Ex=1.35,Dx=.02,Ox=new q(0,-.13,.012),kx={face:[0,-.171,-.047],brow:[.05,-.111,-.047],spit:[0,-.196,-.047],top:[0,.054],out:[0,-.156,.053]},Ax=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)(e||t||n)&&Ax.push(new q(e,t,n).normalize());function jx(e,t,n){let r=Ax.map(()=>({d:-1/0,p:new q})),i=new q;for(let a=0;a<e.count;a++)t.getX(a)===n&&(i.set(e.getX(a),e.getY(a),e.getZ(a)),Ax.forEach((e,t)=>{let n=i.dot(e);n>r[t].d&&(r[t]={d:n,p:i.clone()})}));return r.map(e=>e.p)}var Mx=[`map`,`normalMap`,`roughnessMap`,`metalnessMap`,`aoMap`,`emissiveMap`,`alphaMap`,`bumpMap`,`lightMap`];function Nx(e,t,n){let r=e.onBeforeCompile;e.onBeforeCompile=(i,a)=>{r.call(e,i,a),Object.assign(i.uniforms,t,{uHeadBone:{value:n},uSat:{value:Ex}}),i.vertexShader=i.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uHeadBone;
varying float vHead;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vHead = 0.0;
  #ifdef USE_SKINNING
    vHead = dot( step( abs( skinIndex - vec4( uHeadBone ) ), vec4( 0.5 ) ), skinWeight );
  #endif`),i.fragmentShader=i.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDamage;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec3 uRimColor;
uniform float uRim;
uniform vec3 uCheek;
uniform float uSat;
varying float vHead;`).replace(`#include <map_fragment>`,`#include <map_fragment>
  // stylised look: push the albedo's saturation up so the lit result stays vivid under the violet stage lights
  float albedoLum = dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
  diffuseColor.rgb = max( vec3( 0.0 ), mix( vec3( albedoLum ), diffuseColor.rgb, uSat ) );
  float dmgFlush = clamp( uDamage * vHead, 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uCheek * ( 0.35 + 0.65 * max( max( diffuseColor.r, diffuseColor.g ), diffuseColor.b ) * 2.0 ), dmgFlush * 0.4 );`).replace(`#include <opaque_fragment>`,`${Xb}
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>`nakavt.boxer.model.v2`,e.needsUpdate=!0}function Px(e){let{model:t,rig:n,root:r}=e,{scene:i,bones:a,mesh:o}=t,s=e=>a.get(e),c=e.height/t.height;i.updateMatrixWorld(!0);let l=new J().copy(i.matrixWorld).invert(),u=e=>new J().multiplyMatrices(l,e.matrixWorld),d=new xc,f=t.extents.head,p=u(s(`head`));for(let e=0;e<f.length;e+=3)d.expandByPoint(new q(f[e],f[e+1],f[e+2]).applyMatrix4(p));let m=d.max.y,h=d.max.z,g=(d.min.x+d.max.x)/2,_=(d.min.z+d.max.z)/2,v=(e,t,n,r,i)=>{let a=new Xs;return a.name=e,a.position.set(n/c,r/c,i/c).applyMatrix4(u(t).invert()),t.add(a),a},y=m*c,b=h*c,x=g*c,S=v(`faceMarker`,s(`head`),x+kx.face[0],y+kx.face[1],b+kx.face[2]),C=v(`browMarker`,s(`head`),x+kx.brow[0],y+kx.brow[1],b+kx.brow[2]),w=v(`spitMarker`,s(`head`),x+kx.spit[0],y+kx.spit[1],b+kx.spit[2]),T=v(`crownMarker`,s(`head`),x,y+kx.top[1],_*c),E=v(`faceOutMarker`,s(`head`),x,y+kx.out[1],b+kx.out[2]),D=Math.min(1.3,Math.max(.75,(d.max.x-d.min.x)*c/e.headWidth)),O=Rb(e.look),k=Tx(n,{root:i,bones:a,unit:c}),A={gloveL:k.sourceFrame(`gloveL`),gloveR:k.sourceFrame(`gloveR`)},j=(e,t)=>Float32Array.from(jx(O.attributes.position,O.attributes.skinIndex,e).flatMap(e=>e.multiplyScalar(D/c).applyQuaternion(t).toArray())),M=Tx(n,{root:i,bones:a,extents:{...t.extents,gloveL:j(0,A.gloveL),gloveR:j(1,A.gloveR)},unit:c}),N=D/(Dx*c),P=t=>{let n=s(t);n.scale.setScalar(Dx);let r=new Bl;r.name=`${e.name}.${t}`,r.quaternion.copy(A[t]),r.scale.setScalar(N),n.add(r);let i=new Xs;return i.name=t===`gloveL`?`gloveMarkerL`:`gloveMarkerR`,i.position.copy(Ox),r.add(i),{bone:r,marker:i}},F=P(`gloveL`),I=P(`gloveR`),L=new zl(O,e.gloveMaterial);L.name=`${e.name}.gloves`,L.bind(new Wl([F.bone,I.bone],[new J,new J]),new J),L.frustumCulled=!1,L.castShadow=!0,i.add(L),o.name=`${e.name}.model`,o.frustumCulled=!1,o.castShadow=!0;let R=o.skeleton.bones.indexOf(s(`head`));for(let t of Array.isArray(o.material)?o.material:[o.material])Nx(t,e.uniforms,R);i.scale.setScalar(c),r.add(i);let ee=s(`hips`),te=s(`neck`),z=n.bones[Q.gloveL],ne=n.bones[Q.gloveR],B=new J,re=(e,t)=>t.setFromMatrixPosition(e.matrixWorld).applyMatrix4(B);return{head:S,gloveL:F.marker,gloveR:I.marker,pose(){M.apply(),F.bone.scale.setScalar(N*z.scale.x),I.bone.scale.setScalar(N*ne.scale.x)},read(e){i.updateWorldMatrix(!0,!0),B.copy(r.matrixWorld).invert(),re(T,e.headTop),re(C,e.brow),re(E,e.faceOut),re(w,e.spit),re(ee,e.hips),re(te,e.chest)},dispose(){let e=new Set;i.traverse(t=>{let n=t;if(n.isMesh&&n!==L){n.geometry.dispose();for(let t of Array.isArray(n.material)?n.material:[n.material]){for(let n of Mx){let r=t[n];r?.isTexture&&e.add(r)}t.dispose()}n.isSkinnedMesh&&n.skeleton.dispose()}});for(let t of e)t.dispose();O.dispose(),L.skeleton.dispose(),i.removeFromParent()}}}var Fx=null,Ix={idle:`idle`,guard:`guard`,bounce:`bounce`,dizzy:`dizzy`,down:`down`},Lx=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Rx=[0,2,0],zx=[.05,1.835,.1],Bx=[0,1.79,.2],Vx=[0,1.75,.1],Hx=[0,1.6,0],Ux=new Map;function Wx(e){let t=Ux.get(e);if(!t){let{body:n,outline:r}=Ib(e),i=n.attributes.position,a=n.attributes.skinIndex,o=1/0,s=-1/0,c=1/0,l=-1/0;for(let e=0;e<i.count;e++){let t=i.getY(e);o=Math.min(o,t),s=Math.max(s,t),a.getX(e)===Q.head&&(c=Math.min(c,i.getX(e)),l=Math.max(l,i.getX(e)))}n.dispose(),r.dispose(),t={height:s-o,headWidth:l-c},Ux.set(e,t)}return t}function Gx(e,t,n,r,i){let a=Ib(t),o=new zl(a.body,i.body);o.name=`${e}.body`;let s=new zl(a.outline,i.outline);s.name=`${e}.outline`,o.add(r.bones[0]),n.add(o,s),n.updateMatrixWorld(!0);let c=new Wl(r.bones);o.bind(c),s.bind(c,o.bindMatrix),o.frustumCulled=!1,s.frustumCulled=!1,o.castShadow=!0,s.castShadow=!1;let l=new Xs;l.name=`faceMarker`,l.position.set(0,1.775-Zy.head[1],.1-Zy.head[2]),r.bones[Q.head].add(l);let u=(e,t)=>{let n=new Xs;return n.name=t,n.position.set(0,-.13,.012),r.bones[e].add(n),n};return{head:l,gloveL:u(Q.gloveL,`gloveMarkerL`),gloveR:u(Q.gloveR,`gloveMarkerR`),pose(){},read(e){gb(r,`head`,Rx,e.headTop),gb(r,`head`,zx,e.brow),gb(r,`head`,Bx,e.faceOut),gb(r,`head`,Vx,e.spit),hb(r,`hips`,e.hips),gb(r,`chest`,Hx,e.chest)},dispose(){a.body.dispose(),a.outline.dispose(),c.dispose()}}}function Kx(e){let t=e.fighter,n=Jb[t],r=new Zs;r.name=`boxer.${t}`;let i=mb(),a=Zb(),o=e.model?Px({name:t,root:r,rig:i,model:e.model,look:n,gloveMaterial:a.body,uniforms:a.u,...Wx(n)}):Gx(t,n,r,i,a),{head:s,gloveL:c,gloveR:l}=o,u=new Kb;r.add(u.group);let d={eyeL:n.face.eye,eyeR:n.face.eye,blr:n.face.blr,brr:n.face.brr,bly:n.face.bly,bry:n.face.bry,grin:n.face.grin},f={...tb},p={...tb},m={...Vy.guard},h=`guard`;Object.assign(f,Uy(h,d));let g=0,_=0,v=0,y=0,b=2.2,x=0,S=null,C=null,w=null,T={},E={},D={headTop:new q,brow:new q,faceOut:new q,spit:new q,hips:new q,chest:new q},O={damage:0,headTop:D.headTop,brow:D.brow,stars:0,hips:D.hips,chest:D.chest,lying:0},k=new q,A=()=>{S&&=(S.kill(),null);let e=C;C=null,e?.()},j=(e,t)=>{w?.kill(),t<=0?(Object.assign(m,e),w=null):w=W.to(m,{...e,duration:t,ease:`power2.out`})},M={P:f,look:n,rest:d,loop:h,incomingSide:()=>Fx&&Fx.by!==E?Fx.side:`r`,nextSide:e=>{let t=T[e]??(e===`jab`||e===`slip`?0:1);return T[e]=t+1,t%2==0?`l`:`r`},hit:(e,t)=>{v=Math.max(v,.12+.16*Math.min(1.5,e)),y=Math.min(1.6,y+e*.8),o.read(D);let n=t===`r`?-1:1;k.set(n*.7,.05,-1.2),u.spray(D.spit,k,Math.round(6+12*Math.min(1.4,e)),1.6+1.3*e)},shake:e=>{y=Math.min(1.6,y+e)},landed:(e,t)=>{y=Math.min(1.6,y+.15*t)}},N=(e,t)=>{let n=t?.timeScale??1,r=!(n>0)||n>=50;A();let i=Ix[e];if(i){h=i;let e=Uy(h,d);if(r)W.killTweensOf(f),Object.assign(f,e),j(Vy[h],0);else{let t=W.timeline();t.to(f,{...e,duration:.32/n,ease:`power2.inOut`}),S=t,j(Vy[h],.3/n)}return Promise.resolve()}if(M.loop=h,e===`jab`||e===`hook`||e===`uppercut`||e===`counter`){let t=T[e]??(e===`jab`?0:1);Fx={by:E,side:t%2==0?`l`:`r`}}let a=Gy(e,M),o=a.next,s={bounce:e===`walkIn`?0:m.bounce*.2,breathe:.2,sway:0,dizzy:e===`hitLight`||e===`hitHeavy`?m.dizzy*.5:0,down:0,cheer:0};return j(s,.08),new Promise(e=>{let t=()=>{S===a.tl&&(S=null,C=null,h=o,j(Vy[h],r?0:.35),e())};S=a.tl,C=e,a.tl.eventCallback(`onComplete`,t),r?(a.tl.progress(1),t(),o!==M.loop&&Object.assign(f,Uy(o,d))):a.tl.timeScale(n).play(0)})},P=e=>{Object.assign(p,f);let t=g,n=Math.PI*2;if(m.bounce>.001){let e=t*2.15,r=.5-.5*Math.cos(n*e),i=m.bounce;p.hy+=i*(.034*r-.014),p.lfy+=i*.032*r,p.rfy+=i*.032*r,p.lfrx+=i*.22*r,p.rfrx+=i*.22*r,p.crx+=i*.025*Math.sin(n*(e-.2)),p.arx+=i*.03*Math.sin(n*(e-.35)),p.lay+=i*.014*Math.sin(n*(e-.3)),p.ray+=i*.014*Math.sin(n*(e-.3)),p.hx+=i*.018*Math.sin(Math.PI*e),p.hry+=i*.04*Math.sin(Math.PI*e+.6),p.crz+=i*.02*Math.sin(Math.PI*e)}let r=1+_*1.2;if(m.breathe>.001){let e=Math.sin(n*.33*r*t);p.crx+=m.breathe*.014*r*e,p.lcz+=m.breathe*.025*r*e,p.rcz-=m.breathe*.025*r*e,p.lay+=m.breathe*.008*e,p.ray+=m.breathe*.008*e}if(m.sway>.001&&(p.hx+=m.sway*.014*Math.sin(n*.27*t),p.hry+=m.sway*.045*Math.sin(n*.19*t+1),p.ary+=m.sway*.05*Math.sin(n*.13*t+2),p.arz+=m.sway*.025*Math.sin(n*.21*t)),m.dizzy>.001){let e=n*.55*t,r=m.dizzy;p.hx+=r*.055*Math.sin(e),p.hz+=r*.035*Math.cos(e),p.hy+=r*-.03*(.5+.5*Math.sin(2*e)),p.srz+=r*.08*Math.sin(e+.6),p.crz+=r*.1*Math.sin(e+1),p.crx+=r*.05*Math.cos(e+1),p.arz+=r*.22*Math.sin(e+1.6),p.arx+=r*.12*Math.cos(e+1.6),p.ary+=r*.14*Math.sin(e*.5),p.lax+=r*.04*Math.sin(e+2),p.rax+=r*.04*Math.sin(e+2.6),p.lay+=r*.05*Math.cos(e+2),p.ray+=r*.05*Math.cos(e+2.4)}if(m.down>.001){let e=Math.sin(n*.45*t);p.crx+=m.down*.035*e,p.ary+=m.down*.08*Math.sin(n*.12*t),p.mo+=m.down*.12*e}if(m.cheer>.001){let e=Math.sin(n*1.5*t);p.lay+=m.cheer*.08*e,p.ray+=m.cheer*.08*e,p.lax+=m.cheer*.03*e,p.rax-=m.cheer*.03*e,p.hy+=m.cheer*.025*Math.max(0,e),p.arx-=m.cheer*.06*e,p.mo+=m.cheer*.08*e}if(y>.001){let n=y*y;p.arx+=n*.07*Math.sin(t*61),p.ary+=n*.09*Math.sin(t*47.3+1.3),p.arz+=n*.06*Math.sin(t*53.7+2.1),p.crz+=n*.025*Math.sin(t*41.1),y=Math.max(0,y-e*2.4)}if(b-=e,b<=0&&(x=.13,b=2.4+2.2*(.5+.5*Math.sin(t*12.9898))),x>0){x-=e;let t=Math.sin(Math.min(1,1-x/.13)*Math.PI);p.eyeL*=1-.92*t,p.eyeR*=1-.92*t}let i=Lx(.32,1,_);p.eyeL*=1-.65*i},F=e=>{g+=e,P(e),i.solve(p,Lx(.32,1,_)),o.pose(),a.u.uFlash.value=v,v=Math.max(0,v-e*3.2),o.read(D);let t=Lx(-.4,-1.3,p.hrx);t>0&&D.headTop.lerp(D.faceOut.setY(D.faceOut.y+.1),t),O.damage=_,O.stars=p.stars,O.lying=t,u.update(e,O)};return F(0),{fighter:t,root:r,head:s,gloveL:c,gloveR:l,play:N,impactAt:e=>Hy[e]??0,setDamage(e){_=Math.min(1,Math.max(0,e)),a.u.uDamage.value=_},update:F,dispose(){A(),w?.kill(),W.killTweensOf(f),W.killTweensOf(m),o.dispose(),a.dispose(),u.dispose(),r.removeFromParent()}}}var qx=new Set([`idle`,`guard`,`bounce`,`dizzy`,`down`]),Jx=class{boxer;base=`guard`;current=`guard`;token=0;anims=[];slow=1;constructor(e){this.boxer=e}loop(e,t=!0,n=!1){this.base=e,(t||qx.has(this.current))&&(this.token++,this.current=e,this.run(()=>this.boxer.play(e,n?{timeScale:1/0}:void 0)))}act(e,t=1){let n=++this.token;this.current=e;let r=this.run(()=>this.boxer.play(e,{timeScale:t}));return r.then(()=>{this.token===n&&(this.current=this.base,this.run(()=>this.boxer.play(this.base)))}),r}setSlow(e){if(e!==this.slow){this.slow=e;for(let{a:t,ts:n}of this.anims)t.timeScale(n*e)}}run(e){let t=Promise.resolve(),n=W.context(()=>{try{t=e()??Promise.resolve()}catch(e){console.error(`boxer.play failed`,e)}}),r=(n.data??[]).filter(e=>e instanceof W.core.Animation),i=new Set(r),a=r.filter(e=>!i.has(e.parent));if(this.anims=a.map(e=>({a:e,ts:e.timeScale()})),this.slow!==1)for(let{a:e,ts:t}of this.anims)e.timeScale(t*this.slow);return n.clear(),t.catch(e=>console.error(`boxer animation failed`,e))}};function Yx(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new el,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Xx(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Xx(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Xx(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new zc(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Zx(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Qx=3.55,$x=4.05,eS=1.25,tS=[.48,.9,1.32],nS=1.62,rS={x:0,z:.525},iS={x:0,z:-.525},aS=6.2,oS=.95,sS=.5,cS=.9,lS=2;function uS(e){let t=e>=7;return{d:aS+e*oS+(t?cS:0),floor:-1.25+(e+1)*sS+(t?lS:0),depth:oS}}var dS=`
  attribute float aShape;
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vShape;
  void main() {
    vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float s = length(instanceMatrix[0].xyz);
    c.xy += position.xy * s;
    gl_Position = projectionMatrix * c;
    vUv = uv;
    vColor = instanceColor;
    vShape = aShape;
  }`,fS=`
  varying vec2 vUv;
  varying vec3 vColor;
  varying float vShape;
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float disc = pow(max(0.0, 1.0 - r), 2.2);
    float a = disc;
    if (vShape > 0.5) {
      float cross = max(pow(max(0.0, 1.0 - abs(p.x) * 9.0), 2.0) * (1.0 - abs(p.y)), pow(max(0.0, 1.0 - abs(p.y) * 9.0), 2.0) * (1.0 - abs(p.x)));
      a = disc * 0.8 + cross * 1.2 + pow(max(0.0, 1.0 - r * 3.0), 2.0) * 2.0;
    }
    gl_FragColor = vec4(vColor * a, 1.0);
  }`,pS=new J,mS=new Y(0,0,0),hS=class{capacity;mesh;shape;constructor(e){this.capacity=e;let t=new Zd(1,1);this.shape=new Gl(new Float32Array(e),1),t.setAttribute(`aShape`,this.shape);let n=new df({vertexShader:dS,fragmentShader:fS,transparent:!0,depthWrite:!1,blending:2});this.mesh=new $l(t,n,e),this.mesh.instanceMatrix.setUsage(po);for(let t=0;t<e;t++)this.mesh.setColorAt(t,mS);this.mesh.instanceColor.setUsage(po),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6}set(e,t,n,r,i=0){pS.makeScale(n,n,n).setPosition(t),this.mesh.setMatrixAt(e,pS),this.mesh.setColorAt(e,r),this.shape.getX(e)!==i&&(this.shape.setX(e,i),this.shape.needsUpdate=!0)}hide(e){pS.makeScale(0,0,0),this.mesh.setMatrixAt(e,pS)}commit(e=this.capacity){this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}},gS=`"Anton", "Oswald", Impact, sans-serif`;function _S(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function vS(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function yS(e,t=!1){let n=new Eu(e);return n.colorSpace=oo,n.anisotropy=8,n.wrapS=n.wrapT=t?Li:Ri,n}function bS(e,t,n,r,i=.45,a=5,o=-Math.PI/2){e.beginPath();for(let s=0;s<a*2;s++){let c=o+s*Math.PI/a,l=s%2==0?r:r*i,u=t+Math.cos(c)*l,d=n+Math.sin(c)*l;s===0?e.moveTo(u,d):e.lineTo(u,d)}e.closePath()}function xS(e,t,n,r,i){e.beginPath(),[[.62,0],[.12,.55],[.46,.55],[.3,1],[.9,.38],[.54,.38],[.78,0]].forEach(([a,o],s)=>s===0?e.moveTo(t+a*r,n+o*i):e.lineTo(t+a*r,n+o*i)),e.closePath()}function SS(e,t,n,r,i,a={}){e.save(),e.translate(n,r),e.transform(1,0,-.2,1,0,0),e.font=`400 ${i}px ${gS}`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineJoin=`round`,e.fillStyle=a.shadow??`rgba(18,4,40,0.85)`,e.fillText(t,i*.05,i*.07),e.strokeStyle=a.shadow??`rgba(18,4,40,0.85)`,e.lineWidth=i*.2,e.strokeText(t,i*.05,i*.07),e.strokeStyle=a.stroke??`#ff2f9a`,e.lineWidth=i*.13,e.strokeText(t,0,0);let o=e.createLinearGradient(0,-i/2,0,i/2);o.addColorStop(0,`#ffffff`),o.addColorStop(.55,a.face??`#fff3fb`),o.addColorStop(1,`#ffc6ea`),e.fillStyle=o,e.fillText(t,0,0),e.restore()}function CS(){let e=2048,[t,n]=vS(e,e),r=_S(829861),i=n.createRadialGradient(e/2,e/2,e*.05,e/2,e/2,e*.72);i.addColorStop(0,`#3f78ff`),i.addColorStop(.55,`#2b56ea`),i.addColorStop(1,`#1a2fa8`),n.fillStyle=i,n.fillRect(0,0,e,e),n.globalAlpha=.05;for(let t=0;t<e;t+=4)n.fillStyle=t%8==0?`#ffffff`:`#001060`,n.fillRect(t,0,2,e),n.fillRect(0,t,e,2);n.globalAlpha=1;for(let t=0;t<900;t++){n.fillStyle=`rgba(${r()<.5?`255,255,255`:`10,20,90`},${.03+r()*.05})`;let t=r()*e,i=r()*e;n.beginPath(),n.ellipse(t,i,4+r()*26,2+r()*10,r()*Math.PI,0,Math.PI*2),n.fill()}let a=e*(1-3.55/4.05)*.5;n.strokeStyle=`rgba(8,10,60,0.85)`,n.lineWidth=a*1.6,n.strokeRect(0,0,e,e),n.strokeStyle=`#ff4fb8`,n.lineWidth=10,n.strokeRect(a*.82,a*.82,e-a*1.64,e-a*1.64),n.strokeStyle=`rgba(255,255,255,0.65)`,n.lineWidth=4,n.strokeRect(119.66419753086419,119.66419753086419,e-a*1.64-32,e-a*1.64-32);let o=e/2,s=e/2,c=n.createRadialGradient(o,s,0,o,s,e*.3);c.addColorStop(0,`rgba(120,170,255,0.55)`),c.addColorStop(1,`rgba(120,170,255,0)`),n.fillStyle=c,n.fillRect(0,0,e,e),n.lineWidth=14,n.strokeStyle=`rgba(255,255,255,0.75)`,n.beginPath(),n.arc(o,s,e*.25,0,Math.PI*2),n.stroke(),n.lineWidth=6,n.strokeStyle=`rgba(255,79,184,0.9)`,n.beginPath(),n.arc(o,s,538,0,Math.PI*2),n.stroke(),n.fillStyle=`rgba(255,255,255,0.85)`;for(let t=0;t<12;t++){let r=t/12*Math.PI*2;bS(n,o+Math.cos(r)*e*.288,s+Math.sin(r)*e*.288,16,.45),n.fill()}n.save(),n.globalAlpha=.9,xS(n,o-e*.11,s-e*.2,e*.22,e*.4),n.fillStyle=`#ffd23a`,n.fill(),n.lineWidth=12,n.strokeStyle=`#1a0838`,n.stroke(),n.restore(),SS(n,`NAKAVT`,o,s,e*.15),n.font=`400 ${e*.03}px ${gS}`,n.fillStyle=`rgba(255,255,255,0.85)`,n.textAlign=`center`,n.fillText(`★  ANA KARŞILAŞMA  ★`,o,1290.24);let l=yS(t);return l.anisotropy=16,l}function wS(){let e=2048,[t,n]=vS(e,320),r=n.createLinearGradient(0,0,0,320);r.addColorStop(0,`#1b1060`),r.addColorStop(1,`#090420`),n.fillStyle=r,n.fillRect(0,0,e,320),n.fillStyle=`#ff3fae`,n.fillRect(0,10,e,10),n.fillStyle=`#3f8bff`,n.fillRect(0,298,e,8);for(let t=0;t<2;t++){let r=e*(.25+t*.5);SS(n,`NAKAVT`,r,166.4,160),n.fillStyle=`#ffd23a`,bS(n,r-e*.17,166.4,26),n.fill(),bS(n,r+e*.17,166.4,26),n.fill()}return yS(t,!0)}function TS(e,t){let n=1024,[r,i]=vS(256,n),a=i.createLinearGradient(0,0,256,0);return a.addColorStop(0,t),a.addColorStop(.5,e),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,256,n),i.fillStyle=`rgba(255,255,255,0.18)`,i.fillRect(0,0,256,18),i.fillRect(0,1006,256,18),i.save(),i.translate(128,n/2),i.rotate(-Math.PI/2),i.font=`400 158.72px ${gS}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`rgba(30,6,50,0.45)`,i.fillText(`NAKAVT`,6,8),i.fillStyle=`#ffffff`,i.fillText(`NAKAVT`,0,0),i.restore(),yS(r)}function ES(){let e=2048,[t,n]=vS(e,128);n.fillStyle=`#0a0418`,n.fillRect(0,0,e,128);let r=[[`NAKAVT`,`#ff4fb8`],[`★`,`#ffd23a`],[`DEMİR`,`#ff5a4a`],[`✦`,`#ffffff`],[`YILDIRIM`,`#4fb2ff`],[`★`,`#ffd23a`],[`ANA KARŞILAŞMA`,`#c58bff`],[`✦`,`#ffffff`]];n.font=`400 79.36px ${gS}`,n.textBaseline=`middle`;let i=30,a=0;for(;i<2008;){let[e,t]=r[a%r.length];n.fillStyle=t,n.fillText(e,i,66),i+=n.measureText(e).width+46,a++}n.globalCompositeOperation=`destination-in`;let[o,s]=vS(8,8);return s.fillStyle=`#fff`,s.beginPath(),s.arc(4,4,3.1,0,Math.PI*2),s.fill(),n.fillStyle=n.createPattern(o,`repeat`),n.fillRect(0,0,e,128),n.globalCompositeOperation=`destination-over`,n.fillStyle=`#07030f`,n.fillRect(0,0,e,128),n.globalCompositeOperation=`source-over`,yS(t,!0)}function DS(){let e=1024,[t,n]=vS(e,512),r=n.createLinearGradient(0,0,e,512);r.addColorStop(0,`#4b0f7a`),r.addColorStop(.5,`#a3127a`),r.addColorStop(1,`#1f2bb0`),n.fillStyle=r,n.fillRect(0,0,e,512),n.fillStyle=`rgba(255,255,255,0.08)`;for(let t=0;t<512;t+=14)for(let r=t/14%2?7:0;r<e;r+=14)n.beginPath(),n.arc(r,t,r/e*3.2,0,Math.PI*2),n.fill();return SS(n,`NAKAVT`,e/2,230.4,215.04),n.font=`400 61.44px ${gS}`,n.textAlign=`center`,n.fillStyle=`#ffd23a`,n.fillText(`DEMİR  ✦  YILDIRIM`,e/2,424.96),n.strokeStyle=`#ff4fb8`,n.lineWidth=14,n.strokeRect(7,7,1010,498),yS(t)}function OS(){let[e,t]=vS(640,480);t.fillStyle=`#ffffff`,t.strokeStyle=`#ffffff`,t.lineCap=`round`,t.lineJoin=`round`;for(let e=0;e<2;e++)for(let n=0;n<4;n++){let r=n*160,i=e*240,a=r+80,o=e===1?1.14:1,s=i+100.8,c=i+134.4,l=34*o;t.beginPath(),t.moveTo(a-l,c+10),t.quadraticCurveTo(a-l-2,c-8,a-l+16,c-10),t.lineTo(a+l-16,c-10),t.quadraticCurveTo(a+l+2,c-8,a+l,c+10),t.lineTo(a+l*.92,i+240),t.lineTo(a-l*.92,i+240),t.closePath(),t.fill(),t.fillRect(a-8,s+10,16,22),t.beginPath(),t.ellipse(a,s,18*o,22,0,0,Math.PI*2),t.fill(),e===1?(t.beginPath(),t.ellipse(a+4,s-20,12,9,.3,0,Math.PI*2),t.fill()):(t.beginPath(),t.ellipse(a-2,s-14,22,9,-.1,Math.PI,Math.PI*2),t.fill(),t.fillRect(a-22,s-15,34,6)),t.lineWidth=15*o;let u=(e,n,r,i,o)=>{t.beginPath(),t.moveTo(a+e,c-2),t.lineTo(a+n,r),t.lineTo(a+i,o),t.stroke(),t.beginPath(),t.arc(a+i,o,10,0,Math.PI*2),t.fill()},d=-l+8,f=l-8;n===0?(u(d,d-8,c+40,d-4,c+78),u(f,f+8,c+40,f+4,c+78)):n===1?(u(d,d-8,c+40,d-4,c+78),u(f,f+22,c-44,f+14,i+22)):n===2?(u(d,d-26,c-46,d-34,i+18),u(f,f+26,c-46,f+34,i+18)):(u(d,d-6,c+34,-7,c+14),u(f,f+6,c+34,7,c+14))}let n=yS(e);return n.anisotropy=4,n}var kS=`
  float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x) {
    vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
  }`,AS=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,jS=`
  uniform float uTime;
  uniform float uFlare;
  uniform float uRed;
  varying vec3 vDir;
  ${kS}
  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 low = vec3(0.035, 0.008, 0.07);
    vec3 mid = vec3(0.24, 0.025, 0.22);
    vec3 high = vec3(0.07, 0.015, 0.17);
    vec3 col = mix(low, mid, smoothstep(-0.12, 0.1, h));
    col = mix(col, high, smoothstep(0.1, 0.55, h));
    float back = pow(max(0.0, -d.z), 2.0);
    col += vec3(0.3, 0.03, 0.24) * back * smoothstep(-0.05, 0.2, h) * (1.0 - smoothstep(0.25, 0.7, h));
    col += vec3(0.04, 0.12, 0.55) * pow(max(0.0, abs(d.x)), 5.0) * smoothstep(-0.1, 0.25, h) * (1.0 - smoothstep(0.3, 0.8, h));
    // drifting smoke in the upper hall
    float n = vnoise(d * 6.0 + vec3(uTime * 0.03, 0.0, uTime * 0.02)) * 0.6 + vnoise(d * 14.0 - vec3(0.0, uTime * 0.05, 0.0)) * 0.4;
    col += vec3(0.25, 0.05, 0.3) * n * smoothstep(0.05, 0.35, h) * 0.6;
    col *= 1.0 + uFlare * 0.25;
    col = mix(col, vec3(col.r * 0.8 + col.g * 0.7 + col.b * 0.55, col.g * 0.1, col.b * 0.07), uRed);
    gl_FragColor = vec4(col, 1.0);
  }`,MS=`
  attribute float aV;
  varying float vV;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vColor;
  varying vec3 vWorld;
  void main() {
    vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vec4 mv = viewMatrix * wp;
    vN = normalize(mat3(viewMatrix) * mat3(modelMatrix) * mat3(instanceMatrix) * normal);
    vView = -mv.xyz;
    vV = aV;
    vColor = instanceColor;
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * mv;
  }`,NS=`
  uniform float uTime;
  varying float vV;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vColor;
  varying vec3 vWorld;
  ${kS}
  void main() {
    float ndv = clamp(abs(dot(normalize(vN), normalize(vView))), 0.0, 1.0);
    float edge = pow(ndv, 2.4);
    float v = clamp(vV, 0.0, 1.0);
    float along = pow(1.0 - v, 1.3) * smoothstep(0.0, 0.05, v) * (1.0 - smoothstep(0.8, 1.0, v));
    float n = vnoise(vWorld * 1.3 + vec3(uTime * 0.12, uTime * 0.05, -uTime * 0.08));
    float a = edge * along * (0.55 + 0.8 * n);
    gl_FragColor = vec4(vColor * a, 1.0);
  }`,PS=`
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vSeed;
  void main() {
    vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float sx = length(instanceMatrix[0].xyz);
    float sy = length(instanceMatrix[1].xyz);
    c.xy += position.xy * vec2(sx, sy);
    gl_Position = projectionMatrix * c;
    vUv = uv;
    vColor = instanceColor;
    vSeed = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  }`,FS=`
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vSeed;
  ${kS}
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float m = (1.0 - smoothstep(0.35, 1.0, length(p * vec2(0.8, 1.0))));
    vec3 q = vec3(vUv * vec2(3.0, 2.0), 0.0) + vSeed * 0.13 + vec3(uTime * 0.05, uTime * 0.02, uTime * 0.03);
    float n = vnoise(q) * 0.55 + vnoise(q * 2.3) * 0.3 + vnoise(q * 5.1) * 0.15;
    float a = m * smoothstep(0.25, 0.85, n);
    gl_FragColor = vec4(vColor * a, 1.0);
  }`,IS=new J,LS=new es,RS=new q,zS=new q,BS=new q(0,-1,0),VS=new q(0,0,1),HS=new q(1,0,0),US=class{group=new Zs;fx={flare:0,chase:1,beams:1,bulbs:1,red:0,throb:0};ledMat;redTmp=new Y;lastRed=-1;domeMat;beamMat;hazeMat;beams;beamDefs=[];bulbs;bulbPos=[];bulbBase=[];halos;led;textures=[];time=0;col=new Y;constructor(){this.domeMat=new df({uniforms:{uTime:{value:0},uFlare:{value:0},uRed:{value:0}},vertexShader:AS,fragmentShader:jS,side:1,depthWrite:!1,fog:!1});let e=new Dl(new ef(90,48,24),this.domeMat);e.renderOrder=-10,e.frustumCulled=!1,this.group.add(e);let t=new Dl(new Zd(80,80),new pf({color:1378854,roughness:.35,metalness:.2}));t.rotation.x=-Math.PI/2,t.position.y=-eS-.01,this.group.add(t);let n=[];for(let e=0;e<4;e++)for(let t=0;t<11;t++){let{d:r,floor:i,depth:a}=uS(t),o=new Au((r+a)*2,i+eS,a);o.applyMatrix4(new J().makeTranslation(0,(i-eS)/2,-(r+a/2))),o.applyMatrix4(new J().makeRotationY(e*Math.PI/2)),n.push(o)}let r=new Dl(Yx(n),new pf({color:1838387,roughness:.8}));n.forEach(e=>e.dispose()),this.group.add(r),this.led=ES(),this.led.repeat.set(3,1),this.textures.push(this.led);let i=[],a=uS(7),o=a.d-.03,s=a.floor-.42;for(let e=0;e<4;e++){let t=new Zd(o*2,.7),n=t.attributes.uv;for(let t=0;t<n.count;t++)n.setX(t,(n.getX(t)+e)/4);t.applyMatrix4(new J().makeTranslation(0,s,-o)),t.applyMatrix4(new J().makeRotationY(e*Math.PI/2)),i.push(t)}let c=new hl({map:this.led,color:new Y(.9,.9,.9),side:2});this.ledMat=c;let l=new Dl(Yx(i),c);i.forEach(e=>e.dispose()),this.group.add(l);let u=[],d=4.3;for(let e=0;e<4;e++){for(let t of[0,.42]){let n=new Au(8.9,.07,.07);n.applyMatrix4(new J().makeTranslation(0,6.7+t,-4.3)),n.applyMatrix4(new J().makeRotationY(e*Math.PI/2)),u.push(n)}for(let t=-8;t<=8;t++){let n=new Au(.04,.42,.04);n.applyMatrix4(new J().makeRotationZ(t%2==0?.6:-.6)),n.applyMatrix4(new J().makeTranslation(t*d/8,6.91,-4.3)),n.applyMatrix4(new J().makeRotationY(e*Math.PI/2)),u.push(n)}let t=new ju(.02,.02,12,4);t.applyMatrix4(new J().makeTranslation(d*(e%2?1:-1),13.100000000000001,d*(e<2?1:-1))),u.push(t)}let f=[];for(let[e,t]of[[-2.6,-4.3],[0,-4.3],[2.6,-4.3],[-4.3,-1.2],[d,-1.2],[-4.3,1.6],[d,1.6],[-1.3,d],[1.3,d]]){let n=new q(e,6.5200000000000005,t);f.push(n);let r=new ju(.16,.22,.42,12),i=new J().lookAt(n,new q(e*.15,.5,t*.15),new q(0,1,0));r.applyMatrix4(new J().makeRotationX(Math.PI/2)),r.applyMatrix4(i),r.applyMatrix4(new J().makeTranslation(n.x,n.y,n.z)),u.push(r)}let p=new Dl(Yx(u),new pf({color:2366515,metalness:.9,roughness:.35}));u.forEach(e=>e.dispose()),this.group.add(p);let m=DS();this.textures.push(m);let h=new Dl(new Au(3.4,1.7,3.4),[new hl({map:m,color:new Y(1.5,1.5,1.5)}),new hl({map:m,color:new Y(1.5,1.5,1.5)}),new hl({color:1182240}),new hl({color:1182240}),new hl({map:m,color:new Y(1.5,1.5,1.5)}),new hl({map:m,color:new Y(1.5,1.5,1.5)})]);h.position.set(0,9.6,0),this.group.add(h);let g=(e,t)=>{this.bulbPos.push(e),this.bulbBase.push(t)};for(let e=0;e<9;e++)g(new q(-6.4+e*1.6,5.35,-11.6),.36);for(let e=0;e<13;e++)g(new q(-4.2+e*.7,6.65,-4.3-.06),.09);for(let e=0;e<13;e++)g(new q(-4.3-.06,6.65,-4.2+e*.7),.09);for(let e=0;e<13;e++)g(new q(4.359999999999999,6.65,-4.2+e*.7),.09);for(let e=0;e<7;e++)g(new q(-17.5,6.6,-9+e*3),.36);for(let e=0;e<7;e++)g(new q(17.5,6.6,-9+e*3),.36);let _=this.bulbPos.length;this.bulbs=new $l(new ef(1,14,10),new hl({color:16777215}),_);let v=new Xs;this.bulbPos.forEach((e,t)=>{v.position.copy(e),v.scale.setScalar(this.bulbBase[t]),v.updateMatrix(),this.bulbs.setMatrixAt(t,v.matrix),this.bulbs.setColorAt(t,new Y(3,3,3))}),this.bulbs.instanceColor.setUsage(po),this.group.add(this.bulbs);let y=new Dl(new Au(14.6,1.15,.3),new hl({color:722452}));y.position.set(0,5.35,-11.85),this.group.add(y),this.halos=new hS(_),this.group.add(this.halos.mesh),f.forEach((e,t)=>{this.beamDefs.push({from:e,to:new q(e.x*.12,0,e.z*.12-.2),radius:1.25,color:t%3==1?new Y(.12,.1,.16):t%2==0?new Y(.16,.06,.16):new Y(.07,.09,.2),sweep:0,speed:0,phase:0})}),[[-9,-15,new Y(.5,.06,.35)],[-4,-16,new Y(.12,.18,.6)],[4,-16,new Y(.5,.06,.35)],[9,-15,new Y(.12,.18,.6)],[-15,-6,new Y(.45,.08,.4)],[15,-6,new Y(.1,.2,.6)]].forEach(([e,t,n],r)=>{this.beamDefs.push({from:new q(e,4.2,t),to:new q(e*.35,16,t*.25),radius:1.6,color:n,sweep:.32,speed:.45+r%3*.12,phase:r*1.7})});let b=new ju(.03,1,1,28,1,!0);b.applyMatrix4(new J().makeTranslation(0,-.5,0));let x=b.attributes.position,S=new Float32Array(x.count);for(let e=0;e<x.count;e++)S[e]=-x.getY(e);b.setAttribute(`aV`,new zc(S,1)),this.beamMat=new df({uniforms:{uTime:{value:0}},vertexShader:MS,fragmentShader:NS,transparent:!0,depthWrite:!1,blending:2,side:2}),this.beams=new $l(b,this.beamMat,this.beamDefs.length),this.beams.instanceMatrix.setUsage(po),this.beamDefs.forEach((e,t)=>this.beams.setColorAt(t,e.color)),this.beams.instanceColor.setUsage(po),this.beams.frustumCulled=!1,this.beams.renderOrder=5,this.group.add(this.beams);let C=[[0,2.6,-9.5,22,6,new Y(.11,.025,.12)],[-8,1.8,-5,10,5,new Y(.09,.02,.1)],[8,1.8,-5,10,5,new Y(.04,.04,.13)],[0,6.2,-14,30,8,new Y(.12,.02,.14)]];this.hazeMat=new df({uniforms:{uTime:{value:0}},vertexShader:PS,fragmentShader:FS,transparent:!0,depthWrite:!1,blending:2});let w=new $l(new Zd(1,1),this.hazeMat,C.length);C.forEach(([e,t,n,r,i,a],o)=>{v.position.set(e,t,n),v.scale.set(r,i,1),v.updateMatrix(),w.setMatrixAt(o,v.matrix),w.setColorAt(o,a)}),w.frustumCulled=!1,w.renderOrder=4,this.group.add(w)}update(e,t){this.time+=e;let n=this.time,r=this.fx;this.domeMat.uniforms.uTime.value=n,this.domeMat.uniforms.uFlare.value=r.flare;let i=r.red,a=r.throb*i;this.domeMat.uniforms.uRed.value=i*.92,i!==this.lastRed&&(this.lastRed=i,this.ledMat.color.setRGB(.9+.6*i,.9*(1-.8*i),.9*(1-.82*i))),this.beamMat.uniforms.uTime.value=n,this.hazeMat.uniforms.uTime.value=n,this.led.offset.x=n*.035%1;let o=r.beams*(1+r.flare*.5)*(1+.4*i+1.2*a);this.beamDefs.forEach((e,r)=>{RS.subVectors(e.to,e.from);let a=RS.length();if(RS.normalize(),e.sweep>0){let r=Math.sin(n*e.speed+e.phase)*e.sweep*(.6+t*.8),i=Math.cos(n*e.speed*.7+e.phase)*e.sweep*.5;RS.applyAxisAngle(VS,r).applyAxisAngle(HS,i).normalize()}LS.setFromUnitVectors(BS,RS),zS.set(e.radius,a,e.radius),IS.compose(e.from,LS,zS),this.beams.setMatrixAt(r,IS);let s=e.sweep>0?.75+.25*Math.sin(n*7+e.phase*3):1;if(this.col.copy(e.color),i>0){let e=this.col;this.redTmp.setRGB((e.r+e.g+e.b)*.95,e.g*.12,e.b*.1),e.lerp(this.redTmp,i*.9)}this.col.multiplyScalar(o*s*(e.sweep>0?.6+t*.7:1)),this.beams.setColorAt(r,this.col)}),this.beams.instanceMatrix.needsUpdate=!0,this.beams.instanceColor.needsUpdate=!0;let s=2.2+t*6*r.chase;this.bulbPos.forEach((e,t)=>{let o=this.bulbBase[t]>.3,c=.5+.5*Math.sin(n*s-(e.x+e.z)*(o?.9:2.4)),l=((o?.55+.25*c:.3+.7*(c>.55?1:.15))*(1-r.flare)+r.flare*1.6)*r.bulbs*(1+.5*a)*.55,u=o?1:.92;this.col.setRGB(3.2*l,3*l*u*(1-.82*i),2.7*l*u*(1-.86*i)),this.bulbs.setColorAt(t,this.col);let d=o?1.9:.6;this.col.multiplyScalar(o?.09:.16),this.halos.set(t,e,d*(.8+.4*l),this.col,+!!o)}),this.bulbs.instanceColor.needsUpdate=!0,this.halos.commit()}allTextures(){return this.textures}},WS=(e,t,n,r,i,a,o)=>({pos:new q(e,t,n),look:new q(r,i,a),fov:o}),GS=.56,KS=WS(0,2.45,2.15,0,1.55,-.5,36),qS=WS(0,2.45,2.15,0,1.55,-.5,29),JS=WS(5.6,3.9,8.4,.1,1.15,-.3,50),YS=WS(5.2,3.15,6.9,.2,1.25,-.4,38);function XS(e,t,n,r){return r.pos.lerpVectors(e.pos,t.pos,n),r.look.lerpVectors(e.look,t.look,n),r.fov=$o.lerp(e.fov,t.fov,n),r}function ZS(e,t,n,r){let i=Math.atan2(e.pos.x,e.pos.z),a=Math.atan2(t.pos.x,t.pos.z);for(;a-i>Math.PI;)a-=Math.PI*2;for(;a-i<-Math.PI;)a+=Math.PI*2;let o=Math.hypot(e.pos.x,e.pos.z),s=Math.hypot(t.pos.x,t.pos.z),c=$o.lerp(i,a,n),l=$o.lerp(o,s,n);return r.pos.set(Math.sin(c)*l,$o.lerp(e.pos.y,t.pos.y,n),Math.cos(c)*l),r.look.lerpVectors(e.look,t.look,n),r.fov=$o.lerp(e.fov,t.fov,n),r}var QS=class{camera=new fp(40,1,.05,220);ots=WS(0,0,0,0,0,0,40);wide=WS(0,0,0,0,0,0,40);shot=WS(0,0,0,0,0,0,40);wideMix=0;shotMix=0;dolly=0;tension=0;fovKick=0;roll=0;offset=new q;lookOffset=new q;sway=1;trackX=0;landscape=1;base=WS(0,0,0,0,0,0,40);cur=WS(0,0,0,0,0,0,40);dir=new q;canvasW=1;canvasH=1;canvasLeft=0;canvasTop=0;rect=null;time=0;fovNow=40;constructor(){this.camera.rotation.order=`YXZ`,this.recompute()}setCanvas(e,t,n,r){this.canvasW=Math.max(1,e),this.canvasH=Math.max(1,t),this.canvasLeft=n,this.canvasTop=r,this.recompute()}setRect(e){this.rect={...e},this.recompute()}sceneRect(){let e=this.rect;return e&&e.width>4&&e.height>4?e:{left:this.canvasLeft,top:this.canvasTop,width:this.canvasW,height:this.canvasH}}recompute(){let e=this.sceneRect(),t=e.width/e.height,n=$o.clamp((t-GS)/1.22,0,1);this.landscape=n;let r=$o.smoothstep(n,0,1);if(XS(KS,qS,r,this.ots),XS(JS,YS,r,this.wide),t<GS){let e=Math.tan($o.degToRad(KS.fov/2))*GS;this.ots.fov=Math.min(68,$o.radToDeg(2*Math.atan(e/t)));let n=Math.tan($o.degToRad(JS.fov/2))*GS;this.wide.fov=Math.min(68,$o.radToDeg(2*Math.atan(n/t)))}}basePose(e){return ZS(this.ots,this.wide,this.wideMix,e),e}update(e,t){this.time+=e,this.basePose(this.base),this.shotMix>0?ZS(this.base,this.shot,this.shotMix,this.cur):XS(this.base,this.base,0,this.cur);let n=this.cur,r=this.time,i=this.sway,a=Math.sin(r*.21)*.07*this.wideMix*i;if(a!==0){let e=Math.atan2(n.pos.x,n.pos.z)+a,t=Math.hypot(n.pos.x,n.pos.z);n.pos.x=Math.sin(e)*t,n.pos.z=Math.cos(e)*t}n.pos.x+=Math.sin(r*.53)*.035*i,n.pos.y+=Math.sin(r*.71+1.3)*.022*i;let o=(1-this.wideMix)*(1-this.shotMix);n.pos.x+=this.trackX*o,n.look.x+=this.trackX*.45*o,n.look.addScaledVector(this.lookOffset,1),this.dir.subVectors(n.look,n.pos).normalize(),n.pos.addScaledVector(this.dir,this.dolly+this.tension*.2*(1-this.shotMix)).add(this.offset);let s=this.camera;s.position.set(n.pos.x+t.x,n.pos.y+t.y,n.pos.z),s.lookAt(n.look),s.rotation.y+=t.yaw,s.rotation.x+=t.pitch,s.rotation.z+=t.roll+this.roll,this.fovNow=$o.clamp(n.fov+this.fovKick-this.tension*2.5*(1-this.shotMix),12,90),this.applyProjection(),s.updateMatrixWorld()}applyProjection(){let e=this.camera,t=this.canvasW,n=this.canvasH,r=this.sceneRect(),i=r.height/2/Math.tan($o.degToRad(this.fovNow/2)),a=$o.clamp(r.left+r.width/2-this.canvasLeft,1,t-1),o=$o.clamp(r.top+r.height/2-this.canvasTop,1,n-1),s=2*Math.max(a,t-a),c=2*Math.max(o,n-o);e.fov=$o.radToDeg(2*Math.atan(c/2/i)),e.aspect=s/c,e.setViewOffset(s,c,s/2-a,c/2-o,t,n)}project(e){let t=e.clone().project(this.camera);return{x:this.canvasLeft+(t.x+1)/2*this.canvasW,y:this.canvasTop+(1-t.y)/2*this.canvasH}}uv(e){let t=e.clone().project(this.camera);return{x:(t.x+1)/2,y:(t.y+1)/2}}},$S=`
  #include <common>
  #include <fog_pars_vertex>
  attribute vec4 aRand;
  uniform float uTime;
  uniform float uHype;
  uniform float uJump;
  uniform vec3 uPoolPos[3];
  uniform vec3 uPoolCol[3];
  varying vec2 vUv;
  varying vec2 vLocal;
  varying vec3 vTint;
  varying vec3 vLit;
  void main() {
    vec3 center = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    // moving follow-spot pools sweeping the stands
    vLit = vec3(0.0);
    for (int i = 0; i < 3; i++) {
      float d = distance(center, uPoolPos[i]);
      vLit += uPoolCol[i] * (1.0 - smoothstep(0.6, 2.6, d));
    }
    float sc = length(instanceMatrix[0].xyz);
    float energy = clamp(uHype + uJump * (0.55 + 0.45 * aRand.z), 0.0, 1.0);
    float act = step(aRand.z * 0.92 + 0.04, energy);
    float rate = 2.4 + aRand.y * 2.8;
    float t = uTime * rate + aRand.x * 6.2831;
    float bounce = max(0.0, sin(t)) * (0.03 + 0.17 * energy) * act + uJump * 0.32 * max(0.0, sin(uTime * 10.0 + aRand.x * 5.0));
    float pose = step(0.93, fract(aRand.w * 13.7 + floor(uTime * 0.25 + aRand.x)) ) ;
    if (act > 0.5) {
      float alt = step(0.0, sin(t * 0.5 + aRand.w * 6.0));
      float hi = energy > 0.72 ? 1.0 : 0.0;
      float a = mix(1.0, 3.0, step(0.5, fract(aRand.w * 3.1)));
      pose = hi > 0.5 ? mix(2.0, a, alt) : mix(a, 0.0, alt * step(0.45, aRand.y));
    }
    float variant = step(0.5, fract(aRand.w * 7.3));
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    right.y = 0.0;
    right = normalize(right);
    vec3 wp = center + right * position.x * sc * 0.667 + vec3(0.0, position.y * sc + bounce, 0.0);
    vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = vec2((uv.x + pose) / 4.0, (uv.y + 1.0 - variant) / 2.0);
    vLocal = uv;
    vTint = instanceColor;
    #include <fog_vertex>
  }`,eC=`
  #include <common>
  #include <fog_pars_fragment>
  uniform sampler2D uAtlas;
  uniform vec3 uRim;
  uniform float uRimAmt;
  varying vec2 vUv;
  varying vec2 vLocal;
  varying vec3 vTint;
  varying vec3 vLit;
  void main() {
    float a = texture2D(uAtlas, vUv).a;
    if (a < 0.5) discard;
    float above = texture2D(uAtlas, vUv + vec2(0.0, 0.006)).a;
    float side = texture2D(uAtlas, vUv + vec2(0.004, 0.0)).a;
    float rim = clamp((1.0 - above) + (1.0 - side) * 0.5, 0.0, 1.0);
    float shade = mix(0.45, 1.05, smoothstep(0.0, 0.85, vLocal.y));
    vec3 col = vTint * shade + uRim * rim * uRimAmt + vLit * (0.35 + 0.65 * shade) * (0.6 + rim);
    gl_FragColor = vec4(col, 1.0);
    #include <fog_fragment>
  }`,tC=class{mesh;flashes;state={hype:.15,jump:0,flashRate:3,red:0};lastRed=-1;rimBase=new Y(1,.45,.85);rimRed=new Y(1,.12,.08);poolBase=[new Y(.4,.08,.3),new Y(.08,.14,.45),new Y(.32,.28,.36)];poolRed=[new Y(.55,.03,.02),new Y(.45,.05,.02),new Y(.5,.12,.06)];mat;heads=[];live=[];atlas;time=0;seed=19088743;flashCol=new Y;constructor(e=!1){this.atlas=OS(),this.mat=new df({uniforms:cf.merge([X.fog,{uTime:{value:0},uHype:{value:0},uJump:{value:0},uAtlas:{value:null},uRim:{value:new Y(1,.45,.85)},uRimAmt:{value:.3},uPoolPos:{value:[new q,new q,new q]},uPoolCol:{value:[new Y(.4,.08,.3),new Y(.08,.14,.45),new Y(.32,.28,.36)]}}]),vertexShader:$S,fragmentShader:eC,fog:!0}),this.mat.uniforms.uAtlas.value=this.atlas;let t=new Zd(1,1);t.translate(0,.5,0);let n=[];for(let t=0;t<4;t++)for(let r=0;r<11;r++){let i=uS(r),a=i.d+i.depth*.45,o=i.floor,s=a+.4,c=.62,l=Math.floor(s*2/c);for(let i=0;i<l;i++){if(this.rand()<.06||e&&(r>=7&&i%3!=0||r>=3&&r<7&&i%2==1))continue;let l=-s+(i+.5)*c+(this.rand()-.5)*.18,u=a+(this.rand()-.5)*.12,d=new q(l,o-.05,-u);d.applyAxisAngle(new q(0,1,0),t*Math.PI/2),n.push({p:d,s:1.5+this.rand()*.28,row:r})}}let r=n.length;this.mesh=new $l(t,this.mat,r);let i=new Float32Array(r*4),a=new Xs,o=[new Y(5909132),new Y(9055366),new Y(11680917),new Y(4861850),new Y(7020398),new Y(3095194)],s=new Y;n.forEach((e,t)=>{a.position.copy(e.p),a.scale.setScalar(e.s),a.updateMatrix(),this.mesh.setMatrixAt(t,a.matrix),s.copy(o[Math.floor(this.rand()*o.length)]);let n=1-e.row/7;s.multiplyScalar(e.row>=7?.07+this.rand()*.05:.12+n*n*.4+this.rand()*.08);let r=s.r*.3+s.g*.59+s.b*.11;s.setRGB(r+(s.r-r)*.45,r+(s.g-r)*.45,r+(s.b-r)*.45).multiplyScalar(.62),this.mesh.setColorAt(t,s),i[t*4]=this.rand(),i[t*4+1]=this.rand(),i[t*4+2]=this.rand(),i[t*4+3]=this.rand(),this.heads.push(e.p.clone().add(new q(0,e.s*.82,0)))}),t.setAttribute(`aRand`,new Gl(i,4)),this.mesh.frustumCulled=!1,this.flashes=new hS(48);for(let e=0;e<48;e++)this.flashes.hide(e);this.flashes.commit()}rand(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}get count(){return this.mesh.count}flashBurst(e){for(let t=0;t<e;t++)this.spawnFlash(t*.012)}spawnFlash(e=0){if(this.live.length>=48)return;let t=this.heads[Math.floor(this.rand()*this.heads.length)];this.live.push({pos:t.clone().add(new q(0,.15,0)),age:-e,life:.09+this.rand()*.08,size:.5+this.rand()*.5})}update(e){this.time+=e;let t=this.state;t.jump=Math.max(0,t.jump-e*.9);let n=this.mat.uniforms;n.uTime.value=this.time,n.uHype.value=t.hype,n.uJump.value=t.jump,n.uRimAmt.value=.1+t.hype*.14+t.red*.15,t.red!==this.lastRed&&(this.lastRed=t.red,n.uRim.value.copy(this.rimBase).lerp(this.rimRed,t.red),n.uPoolCol.value.forEach((e,n)=>e.copy(this.poolBase[n]).lerp(this.poolRed[n],t.red)));let r=n.uPoolPos.value,i=.25+t.hype*.5,a=this.time;r[0].set(Math.sin(a*i)*8,.6+Math.sin(a*i*.7)*1.2,-9.5),r[1].set(-9,.9+Math.sin(a*i*.8+1)*1,Math.sin(a*i*.9+2)*6-2),r[2].set(9,.9+Math.sin(a*i*.6+3)*1,Math.sin(a*i*1.1+4)*6-2);let o=t.flashRate*(.4+t.hype*1.6+t.jump*3)*e;for(;o>0;)this.rand()<Math.min(1,o)&&this.spawnFlash(),--o;let s=0;for(let t=this.live.length-1;t>=0;t--){let n=this.live[t];n.age+=e,n.age>n.life&&this.live.splice(t,1)}for(let e of this.live){if(e.age<0)continue;let t=e.age/e.life,n=t<.15?t/.15:1-(t-.15)/.85;this.flashCol.setRGB(5*n,5*n,5.6*n),this.flashes.set(s++,e.pos,e.size*(.6+.6*n),this.flashCol,1)}this.flashes.commit(Math.max(s,0))}allTextures(){return[this.atlas]}},nC=new J,rC=new es,iC=new es,aC=new q,oC=new q,sC=new q(0,1,0),cC={star:0,pink:1,ring:2,whiff:3,block:4,puff:5,flare:6},lC=`
  attribute vec4 aParams;   // t (0..1), seed, kind, rotation
  attribute vec4 aTint;     // rgb, intensity
  varying vec2 vUv;
  varying vec4 vParams;
  varying vec4 vTint;
  void main() {
    vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float s = length(instanceMatrix[0].xyz);
    float r = aParams.w;
    vec2 p = position.xy;
    p = vec2(p.x * cos(r) - p.y * sin(r), p.x * sin(r) + p.y * cos(r));
    c.xy += p * s;
    gl_Position = projectionMatrix * c;
    vUv = uv;
    vParams = aParams;
    vTint = aTint;
  }`,uC=`
  varying vec2 vUv;
  varying vec4 vParams;
  varying vec4 vTint;
  float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float r = length(p);
    float ang = atan(p.y, p.x) / 6.28318 + 0.5;
    float t = vParams.x;
    float seed = vParams.y;
    float kind = vParams.z;
    vec3 col = vec3(0.0);
    if (kind < 0.5) {
      // comic starburst: jagged spikes, white core → yellow → orange rim, hollowing out as it dies
      float spikes = 13.0;
      float seg = floor(ang * spikes);
      float f = fract(ang * spikes);
      float len = 0.55 + 0.45 * hash11(seg + seed * 31.0);
      float tri = 1.0 - abs(f * 2.0 - 1.0);
      float rad = mix(0.34, 0.98 * len, pow(max(tri, 0.0), 1.6));
      float shape = 1.0 - smoothstep(rad - 0.03, rad, r);
      float hole = smoothstep(t * 0.95 - 0.05, t * 0.95, r / max(rad, 0.001));
      shape *= mix(1.0, hole, smoothstep(0.25, 0.5, t));
      vec3 c = mix(vec3(1.0, 0.36, 0.04), vec3(1.0, 0.86, 0.3), smoothstep(rad, rad * 0.5, r));
      c = mix(c, vec3(1.25, 1.2, 1.1), smoothstep(0.4, 0.05, r));
      float rim = smoothstep(rad - 0.09, rad - 0.03, r) * shape;
      float rays = pow(max(0.0, cos((ang + seed) * 6.28318 * 9.0)), 40.0) * (1.0 - smoothstep(0.2, 1.0, r));
      col = c * shape * 1.05 + vec3(0.9, 0.25, 0.02) * rim * 0.6 + vec3(0.9, 0.7, 0.35) * rays * (1.0 - t) * 0.6;
      col *= 1.0 - smoothstep(0.6, 1.0, t);
    } else if (kind < 1.5) {
      // counter: pink radial burst — expanding ring, fine rays, sparkles, white-hot core
      float ring = (1.0 - smoothstep(0.0, 0.05 + 0.06 * t, abs(r - (0.18 + 0.75 * sqrt(t))))) * (1.0 - t);
      float seg = floor(ang * 120.0);
      float ray = step(0.55, hash11(seg + seed * 7.0)) * (1.0 - smoothstep(0.15 + 0.85 * sqrt(t), 1.0, r)) * smoothstep(0.08, 0.3, r);
      float spark = step(0.985, hash11(floor(ang * 300.0) * 3.1 + floor(r * 40.0) * 17.0 + seed)) * (1.0 - smoothstep(0.7, 1.0, r));
      float core = 1.0 - smoothstep(0.0, 0.42 * (1.0 - t * 0.6), r);
      vec3 pink = vec3(1.0, 0.16, 0.55);
      col = pink * (ring * 1.5 + ray * 0.75 * (1.0 - t) + spark * 1.6 * (1.0 - t)) + mix(pink, vec3(1.2, 1.0, 1.1), 0.5) * core * 0.85 * (1.0 - t);
    } else if (kind < 2.5) {
      // shockwave ring
      float ring = 1.0 - smoothstep(0.0, 0.07, abs(r - (0.15 + 0.8 * t)));
      col = vec3(1.0, 0.92, 0.75) * ring * (1.0 - t) * 0.85;
    } else if (kind < 3.5) {
      // whiff crescent: a swooshing arc that sweeps and fades
      float arc = 1.0 - smoothstep(0.0, 0.07, abs(r - 0.75));
      float a2 = fract(ang + seed);
      float sweep = smoothstep(0.0, 0.35, a2) * (1.0 - smoothstep(0.35 + t * 0.4, 0.45 + t * 0.4, a2));
      col = vec3(0.85, 0.95, 1.2) * arc * sweep * (1.0 - t) * 1.1;
    } else if (kind < 4.5) {
      // block: small blue-white star flash
      float star = max(1.0 - smoothstep(0.0, 0.08, abs(p.x)) , 1.0 - smoothstep(0.0, 0.08, abs(p.y))) * (1.0 - smoothstep(0.2, 1.0, r));
      float core = 1.0 - smoothstep(0.0, 0.45, r);
      col = vec3(0.7, 0.85, 1.6) * (star * 1.6 + core * 1.4) * (1.0 - t);
    } else if (kind < 5.5) {
      // soft puff (sweat mist, canvas dust)
      float d = 1.0 - smoothstep(0.0, 1.0, r);
      col = vec3(0.9, 0.85, 1.0) * d * d * (1.0 - t) * 0.3;
    } else {
      // flare: soft white-hot glow
      float d = pow(max(0.0, 1.0 - r), 2.5);
      col = vec3(1.0, 0.9, 0.75) * d * (1.0 - t) * 0.55;
    }
    gl_FragColor = vec4(col * vTint.rgb * vTint.a, 1.0);
  }`,dC=class{capacity;mesh;params;tint;items=[];constructor(e=24){this.capacity=e;let t=new Zd(1,1);this.params=new Gl(new Float32Array(e*4),4),this.tint=new Gl(new Float32Array(e*4),4),this.params.setUsage(po),this.tint.setUsage(po),t.setAttribute(`aParams`,this.params),t.setAttribute(`aTint`,this.tint);let n=new df({vertexShader:lC,fragmentShader:uC,transparent:!0,depthWrite:!1,depthTest:!1,blending:2});this.mesh=new $l(t,n,e),this.mesh.instanceMatrix.setUsage(po),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.mesh.count=0}spawn(e,t,n,r,i,a={}){this.items.length>=this.capacity&&this.items.shift(),this.items.push({kind:e,pos:t.clone(),size0:n*(a.grow===void 0?.35:1/a.grow),size1:n,life:r,age:-(a.delay??0),seed:i.next(),rot:a.rot??i.next()*Math.PI*2,spin:a.spin??(i.next()-.5)*1.2,tint:a.tint?a.tint.clone():new Y(1,1,1),amp:a.amp??1,delay:a.delay??0})}clear(){this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&this.items.splice(t,1)}for(let n of this.items){if(n.age<0)continue;let r=Math.min(1,n.age/n.life),i=1-(1-Math.min(1,r*(n.kind===cC.star||n.kind===cC.block?7:2.4)))**3,a=n.size0+(n.size1-n.size0)*i;n.rot+=n.spin*e,nC.makeScale(a,a,a).setPosition(n.pos),this.mesh.setMatrixAt(t,nC),this.params.setXYZW(t,r,n.seed,n.kind,n.rot),this.tint.setXYZW(t,n.tint.r,n.tint.g,n.tint.b,n.amp),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.params.needsUpdate=!0,this.tint.needsUpdate=!0}},fC=class{capacity;mesh;items=[];free=[];c=new Y;constructor(e=320){this.capacity=e;let t=new Xd(1,1),n=new hl({color:16777215,transparent:!1});this.mesh=new $l(t,n,e),this.mesh.instanceMatrix.setUsage(po),this.mesh.setColorAt(0,new Y(1,1,1)),this.mesh.instanceColor.setUsage(po),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=8}spawn(e,t,n){this.items.length>=this.capacity&&this.free.push(this.items.shift());let r=this.free.pop()??{pos:new q,vel:new q,age:0,life:1,size:.02,stretch:3,color:new Y,drag:0,grav:1,delay:0};r.pos.copy(e),r.vel.copy(t),r.age=-(n.delay??0),r.life=n.life??.8,r.size=n.size??.018,r.stretch=n.stretch??3,r.color.copy(n.color),r.drag=n.drag??.6,r.grav=n.grav??1,this.items.push(r)}spray(e,t,n,r,i,a,o){for(let s=0;s<n;s++){aC.set(a.next()-.5,a.next()-.5,a.next()-.5).normalize().multiplyScalar(i),oC.copy(t).normalize().add(aC).normalize().multiplyScalar(r*(.45+a.next()*.9));let n=this.c.copy(o.color).multiplyScalar(1-(o.jitterColor??.25)*a.next());this.spawn(e.clone().add(aC.multiplyScalar(.06)),oC,{color:n,size:(o.size??.02)*(.6+a.next()*.8),life:(o.life??.7)*(.6+a.next()*.7),stretch:o.stretch??3,grav:o.grav??1,drag:o.drag??.6})}}clear(){this.free.push(...this.items),this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&(this.free.push(n),this.items.splice(t,1))}for(let n of this.items){if(n.age<0)continue;n.vel.y-=9.8*n.grav*e,n.vel.multiplyScalar(Math.max(0,1-n.drag*e)),n.pos.addScaledVector(n.vel,e),n.pos.y<.01&&n.grav>0&&(n.pos.y=.01,n.vel.set(0,0,0));let r=n.vel.length(),i=Math.min(1,(n.life-n.age)/(n.life*.35)),a=n.size*Math.max(.001,i);r>1e-4?rC.setFromUnitVectors(sC,aC.copy(n.vel).divideScalar(r)):rC.identity(),oC.set(a,a*(1+Math.min(r*.4,1)*n.stretch),a),nC.compose(n.pos,rC,oC),this.mesh.setMatrixAt(t,nC),this.mesh.setColorAt(t,n.color),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},pC=[16723870,16765498,3526911,16777215,10181887,6094747].map(e=>new Y(e)),mC=class{capacity;mesh;items=[];constructor(e=420){this.capacity=e;let t=new Zd(1,1.6),n=new hl({color:16777215,side:2});this.mesh=new $l(t,n,e),this.mesh.instanceMatrix.setUsage(po),this.mesh.setColorAt(0,new Y(1,1,1)),this.mesh.instanceColor.setUsage(po),this.mesh.frustumCulled=!1,this.mesh.count=0}burst(e,t,n,r=3.2,i=4.2){for(let a=0;a<t;a++){this.items.length>=this.capacity&&this.items.shift();let t=a%3==0,o=t?new q(e.x+(n.next()-.5)*1.2,e.y+.4,e.z+(n.next()-.5)*1.2):new q(e.x+(n.next()-.5)*r*2,i+n.next()*1.5,e.z+(n.next()-.5)*r*2),s=t?new q((n.next()-.5)*4,4.5+n.next()*3.5,(n.next()-.5)*4):new q((n.next()-.5)*.6,-.6-n.next()*.8,(n.next()-.5)*.6);this.items.push({pos:o,vel:s,rot:new es().setFromAxisAngle(new q(n.next(),n.next(),n.next()).normalize(),n.next()*6),axis:new q(n.next()-.5,n.next()-.5,n.next()-.5).normalize(),spin:6+n.next()*10,phase:n.next()*6.28,age:0,life:3.2+n.next()*1.8,size:.045+n.next()*.035,color:pC[Math.floor(n.next()*pC.length)].clone().multiplyScalar(1.1+n.next()*.5)})}}clear(){this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&this.items.splice(t,1)}for(let n of this.items){n.vel.y-=4*e,n.vel.x+=Math.sin(n.age*3+n.phase)*.8*e,n.vel.z+=Math.cos(n.age*2.3+n.phase)*.8*e,n.vel.multiplyScalar(Math.max(0,1-2.2*e)),n.vel.y<-1.1&&(n.vel.y=-1.1),n.pos.addScaledVector(n.vel,e),n.pos.y<.01&&(n.pos.y=.01,n.vel.set(0,0,0),n.spin=0),iC.setFromAxisAngle(n.axis,n.spin*e),n.rot.premultiply(iC);let r=Math.min(1,(n.life-n.age)/.4);nC.compose(n.pos,n.rot,oC.set(n.size*r,n.size*r,n.size*r)),this.mesh.setMatrixAt(t,nC),this.mesh.setColorAt(t,n.color),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},hC={hemi:.55,key:135,rimPink:3.6,rimBlue:2.9,fill:1.2},gC={hemiSky:[12034815,16730682],hemiGround:[2768026,4851730],key:[16773606,16726564],rimPink:[16732088,16718346],rimBlue:[5213183,16738842],fill:[16770804,16743018]},_C=class{hemi=new ep(gC.hemiSky[0],gC.hemiGround[0],hC.hemi);key=new mp(gC.key[0],hC.key,0,.5,.75,2);rimPink=new yp(gC.rimPink[0],hC.rimPink);rimBlue=new yp(gC.rimBlue[0],hC.rimBlue);fill=new yp(gC.fill[0],hC.fill);impact=new gp(16773320,0,1.5,2);mood={key:1,rims:1,flash:0,pinkFlash:0,finish:0,beat:0};impactWhite=new Y(16773320);impactPink=new Y(16727450);from={};to={};lastFinish=-1;constructor(e){for(let e of Object.keys(gC))this.from[e]=new Y(gC[e][0]),this.to[e]=new Y(gC[e][1]);this.key.position.set(.4,8.5,1.4),this.key.target.position.set(0,.4,-.2),this.rimPink.position.set(-6,5,-7),this.rimPink.target.position.set(0,1.2,0),this.rimBlue.position.set(7,4,-4),this.rimBlue.target.position.set(0,1.2,0),this.fill.position.set(1.5,3,8),this.fill.target.position.set(0,1.3,-.8),this.impact.position.set(0,1.6,-.3),e.add(this.hemi,this.key,this.key.target,this.rimPink,this.rimPink.target,this.rimBlue,this.rimBlue.target),e.add(this.fill,this.fill.target,this.impact)}placeImpact(e){this.impact.position.copy(e)}update(){let e=this.mood,t=e.finish,n=e.beat*t;t!==this.lastFinish&&(this.lastFinish=t,this.hemi.color.copy(this.from.hemiSky).lerp(this.to.hemiSky,t*.8),this.hemi.groundColor.copy(this.from.hemiGround).lerp(this.to.hemiGround,t),this.key.color.copy(this.from.key).lerp(this.to.key,t*.82),this.rimPink.color.copy(this.from.rimPink).lerp(this.to.rimPink,t),this.rimBlue.color.copy(this.from.rimBlue).lerp(this.to.rimBlue,t),this.fill.color.copy(this.from.fill).lerp(this.to.fill,t*.7)),this.hemi.intensity=hC.hemi*(1-.3*t+.25*n),this.key.intensity=hC.key*e.key*(1-.2*t+.55*n),this.rimPink.intensity=hC.rimPink*e.rims*(1+.7*t+1.1*n),this.rimBlue.intensity=hC.rimBlue*e.rims*(1+.5*t+.9*n),this.fill.intensity=hC.fill*(1-.3*t+.2*n),this.impact.intensity=2.6*e.flash+3*e.pinkFlash;let r=e.flash+e.pinkFlash;r>.001&&this.impact.color.copy(this.impactWhite).lerp(this.impactPink,e.pinkFlash/r)}},vC={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},yC=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},bC=new _p(-1,1,1,-1,0,1),xC=new class extends el{constructor(){super(),this.setAttribute(`position`,new Hc([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Hc([0,2,0,0,2,0],2))}},SC=class{constructor(e){this._mesh=new Dl(xC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},CC=class extends yC{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof df?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cf.clone(e.uniforms),this.material=new df({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new SC(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},wC=class extends yC{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},TC=class extends yC{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},EC=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new xs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$i}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new CC(vC),this.copyPass.material.blending=0,this.timer=new Dp}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}wC!==void 0&&(r instanceof wC?n=!0:r instanceof TC&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},DC=class extends yC{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Y}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},OC={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},kC=class e extends yC{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new K(256,256):new K(e.x,e.y),this.clearColor=new Y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xs(i,a,{type:$i,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new xs(i,a,{type:$i,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new xs(i,a,{type:$i,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=OC;this.highPassUniforms=cf.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new df({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cf.clone(vC.uniforms),this.blendMaterial=new df({uniforms:this.copyUniforms,vertexShader:vC.vertexShader,fragmentShader:vC.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Y,this._oldClearAlpha=1,this._basic=new hl,this._fsQuad=new SC(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new K(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new df({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new df({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};kC.BlurDirectionX=new K(1,0),kC.BlurDirectionY=new K(0,1);var AC=class extends yC{calls=0;triangles=0;constructor(){super(),this.needsSwap=!1}render(e){this.calls=e.info.render.calls,this.triangles=e.info.render.triangles}},jC={name:`NakavtGrade`,uniforms:{tDiffuse:{value:null},uCenter:{value:new K(.5,.6)},uZoom:{value:0},uAberr:{value:0},uSpeed:{value:0},uFlash:{value:0},uWash:{value:0},uWashColor:{value:new Y(1,.12,.45)},uDesat:{value:0},uVignette:{value:.68},uVigColor:{value:new Y(.05,0,.09)},uBlood:{value:0},uBeat:{value:0},uAspect:{value:1},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uCenter;
    uniform float uZoom, uAberr, uSpeed, uFlash, uWash, uDesat, uVignette, uAspect, uTime, uBlood, uBeat;
    uniform vec3 uWashColor, uVigColor;
    varying vec2 vUv;

    float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }

    void main() {
      vec2 dir = vUv - uCenter;
      vec3 col;
      if (uZoom > 0.002) {
        vec3 acc = vec3(0.0);
        for (int i = 0; i < 12; i++) {
          float t = float(i) / 11.0;
          acc += texture2D(tDiffuse, vUv - dir * t * uZoom * 0.16).rgb;
        }
        col = acc / 12.0;
      } else {
        col = texture2D(tDiffuse, vUv).rgb;
      }
      if (uAberr > 0.002) {
        vec2 off = dir * uAberr * 0.025;
        col.r = mix(col.r, texture2D(tDiffuse, vUv + off).r, 0.85);
        col.b = mix(col.b, texture2D(tDiffuse, vUv - off).b, 0.85);
      }

      vec2 d = dir * vec2(uAspect, 1.0);
      float r = length(d);
      // comic speed lines: tapered wedges radiating from the impact, re-drawn 20x per second
      if (uSpeed > 0.002) {
        float a = atan(d.y, d.x) / 6.28318 + 0.5;
        float n = 150.0;
        float seg = floor(a * n);
        float frame = floor(uTime * 20.0);
        float h = hash11(seg * 1.37 + frame * 17.17);
        float f = fract(a * n);
        float width = 0.12 + 0.35 * hash11(seg + frame * 3.1);
        float wedge = 1.0 - smoothstep(width * 0.5, width * 0.5 + 0.08, abs(f - 0.5));
        float start = 0.42 + 0.4 * hash11(seg * 7.7 + frame);
        float radial = smoothstep(start, start + 0.22, r);
        float on = step(0.74, h);
        col = mix(col, vec3(1.15, 1.12, 1.08), clamp(on * wedge * radial * uSpeed, 0.0, 1.0) * 0.75);
      }

      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, vec3(l) * vec3(1.02, 0.98, 1.08), uDesat);

      // edge wash (counter punch) and vignette
      vec2 q = vUv - 0.5;
      float edge = smoothstep(0.18, 0.75, length(q * vec2(uAspect * 0.85, 1.0)));
      col = mix(col, col * 0.5 + uWashColor * (0.35 + l), uWash * (0.25 + 0.75 * edge));
      // BİTİR ONU!: push everything toward blood red, flush the edges with every heartbeat
      if (uBlood > 0.001) {
        vec3 redPush = vec3(l * 1.25 + col.r * 0.3, col.g * 0.3 + l * 0.04, col.b * 0.2 + l * 0.03);
        col = mix(col, redPush, uBlood * 0.72);
        float rim = smoothstep(0.22, 0.8, length(q * vec2(uAspect * 0.85, 1.0)));
        col = mix(col, vec3(0.75, 0.02, 0.03) * (0.25 + 1.6 * l), uBlood * rim * (0.28 + 0.5 * uBeat));
      }
      float vig = smoothstep(0.35, 0.95, length(q * vec2(min(uAspect, 1.6) * 0.8, 1.0)));
      vec3 vigCol = mix(uVigColor, vec3(0.09, 0.0, 0.004), uBlood);
      col = mix(col, vigCol, vig * min(1.0, uVignette + uBlood * (0.18 + 0.12 * uBeat)));

      // impact flash: an exposure punch (keeps the blacks, unlike an additive white)
      col *= 1.0 + uFlash * vec3(2.2, 2.1, 1.9);
      gl_FragColor = vec4(col, 1.0);
      // the output transform is part of this last pass (one full-screen pass less than an OutputPass)
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`};function MC(e,t,n,r,i,a=!1){let o=e.getPixelRatio(),s=new xs(Math.max(1,r*o),Math.max(1,i*o),{type:$i,samples:a?2:4});s.texture.name=`nk.scene`;let c=new EC(e,s);c.setPixelRatio(o),c.setSize(r,i),c.addPass(new DC(t,n));let l=new AC;c.addPass(l);let u=new kC(new K(r,i),a?.5:.55,.18,a?1.15:1.05);if(a){let e=u.setSize.bind(u);u.setSize=(t,n)=>e(Math.max(1,Math.round(t*.5)),Math.max(1,Math.round(n*.5))),u.setSize(r*o,i*o)}c.addPass(u);let d=new CC(jC);c.addPass(d);let f={cx:.5,cy:.6,zoom:0,aberr:0,speed:0,flash:0,wash:0,desat:0,vignette:.68,blood:0,beat:0},p=r/Math.max(1,i);return{composer:c,bloom:u,stats:l,grade:f,setSize(e,t,n){c.setPixelRatio(n),c.setSize(e,t),p=e/Math.max(1,t)},render(r,i){let a=d.uniforms;a.uCenter.value.set(f.cx,f.cy),a.uZoom.value=f.zoom,a.uAberr.value=f.aberr,a.uSpeed.value=f.speed,a.uFlash.value=f.flash,a.uWash.value=f.wash,a.uDesat.value=f.desat,a.uVignette.value=f.vignette,a.uBlood.value=f.blood,a.uBeat.value=f.beat,a.uAspect.value=p,a.uTime.value=i,e.info.reset();let o=location.search;o.includes(`dbg=nopost`)?(e.setRenderTarget(null),e.render(t,n)):(u.enabled=!o.includes(`dbg=nobloom`),d.enabled=!o.includes(`dbg=nograde`),c.render(r))},dispose(){c.dispose(),u.dispose(),d.dispose(),s.dispose()}}}var NC=typeof window<`u`&&Math.min(window.innerWidth,window.innerHeight)<820&&(window.matchMedia?.(`(pointer: coarse)`).matches||Math.min(window.innerWidth,window.innerHeight)<600),PC=NC?1.5:2,FC=1e6;function IC(){let e=new o_({antialias:!1,alpha:!1,stencil:!1,powerPreference:`high-performance`});e.setPixelRatio(Math.min(window.devicePixelRatio||1,PC)),e.outputColorSpace=oo,e.toneMapping=7,e.toneMappingExposure=1,e.info.autoReset=!1,e.setClearColor(1181471,1);let t=e.domElement;return t.style.position=`absolute`,t.style.inset=`0`,t.style.width=`100%`,t.style.height=`100%`,t.style.display=`block`,t.style.touchAction=`manipulation`,e}function LC(e){let t=new oc,n=[],r=(e,r,i,a,o,s=0,c=0)=>{let l=new hl({color:r,side:e instanceof ef?1:2}),u=new Dl(e,l);u.position.set(i,a,o),u.rotation.set(c,s,0),t.add(u),n.push(e,l)};r(new ef(20,24,12),new Y(1706540),0,0,0),r(new Zd(9,9),new Y(5,4.6,4.2),0,12,0,0,Math.PI/2),r(new Zd(14,5),new Y(3.2,.5,2),-12,4,-6,Math.PI/3),r(new Zd(14,5),new Y(.5,1.2,3.6),12,3,-4,-Math.PI/3),r(new Zd(18,4),new Y(1.6,.35,1.8),0,3,-14),r(new Zd(20,20),new Y(.25,.12,.6),0,-6,0,0,-Math.PI/2);let i=new pm(e),a=i.fromScene(t,.03);i.dispose();for(let e of n)e.dispose();return a.texture}var RC=new q;function zC(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;RC.copy(t),RC[r]=0,RC.normalize();let l=.5*o/(o+s),u=1-RC.angleTo(e)/c;return Math.sign(RC[n])===1?u*l:s/(o+s)+l+l*(1-u)}var BC=class e extends Au{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new q,c=new q,l=new q(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new q,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=zC(m,c,`z`,`y`,i,n),f[a+1]=1-zC(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-zC(m,c,`z`,`y`,i,n),f[a+1]=1-zC(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-zC(m,c,`x`,`z`,i,e),f[a+1]=zC(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-zC(m,c,`x`,`z`,i,e),f[a+1]=1-zC(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-zC(m,c,`x`,`y`,i,e),f[a+1]=1-zC(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=zC(m,c,`x`,`y`,i,e),f[a+1]=1-zC(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},VC=[new Y(8211967),new Y(3114751),new Y(16723870)],HC=.62,UC=new Y(3.4,.25,.15),WC=`
  #include <common>
  #include <fog_pars_vertex>
  attribute float aU;
  attribute float aSide;
  attribute vec3 aColor;
  uniform vec4 uWob;
  uniform vec4 uWob2;
  varying vec3 vColor;
  varying vec3 vNormalV;
  varying vec3 vViewV;
  varying float vU;
  float pick(vec4 v, float s) { return s < 0.5 ? v.x : (s < 1.5 ? v.y : (s < 2.5 ? v.z : v.w)); }
  void main() {
    vec3 p = position;
    vec3 outDir = aSide < 0.5 ? vec3(0.0, 0.0, -1.0) : (aSide < 1.5 ? vec3(1.0, 0.0, 0.0) : (aSide < 2.5 ? vec3(0.0, 0.0, 1.0) : vec3(-1.0, 0.0, 0.0)));
    float w1 = pick(uWob, aSide) * sin(3.14159 * aU);
    float w2 = pick(uWob2, aSide) * sin(6.28318 * aU);
    p += outDir * (w1 + w2) + vec3(0.0, 0.28 * w1 - 0.12 * w2, 0.0);
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vNormalV = normalize(normalMatrix * normal);
    vViewV = -mvPosition.xyz;
    vColor = aColor;
    vU = aU;
    #include <fog_vertex>
  }`,GC=`
  #include <common>
  #include <fog_pars_fragment>
  uniform float uGlow;
  uniform float uRed;
  varying vec3 vColor;
  varying vec3 vNormalV;
  varying vec3 vViewV;
  varying float vU;
  void main() {
    float ndv = abs(dot(normalize(vNormalV), normalize(vViewV)));
    float core = pow(ndv, 2.2);
    vec3 base = mix(vColor, vec3(1.0, 0.07, 0.04) * 1.15, uRed);
    vec3 col = base * (0.32 + 1.15 * core) * uGlow + mix(vec3(1.0, 0.92, 1.0), vec3(1.0, 0.55, 0.45), uRed) * pow(ndv, 9.0) * 0.7 * uGlow;
    gl_FragColor = vec4(col, 1.0);
    #include <fog_fragment>
  }`,KC=2*Math.PI*2.6,qC=2*Math.PI*4.4,JC=.11,YC=class{group=new Zs;ropes;ropeMats=[];s1=[0,1,2,3].map(()=>({x:0,v:0}));s2=[0,1,2,3].map(()=>({x:0,v:0}));textures=[];capMat;stripMat;glow=1;red=0;throb=0;lastRed=-1;capBase=[];capCol=new Y;caps=null;constructor(){let e=CS();this.textures.push(e);let t=new Dl(new Zd($x*2,$x*2),new pf({map:e,color:12895448,roughness:.9,metalness:0,emissive:16777215,emissiveMap:e,emissiveIntensity:.035}));t.rotation.x=-Math.PI/2,t.name=`ring-floor`,this.group.add(t);let n=wS();this.textures.push(n);let r=new pf({map:n,roughness:.6,emissive:16777215,emissiveMap:n,emissiveIntensity:.55}),i=[];for(let e=0;e<4;e++){let t=new Zd($x*2,eS),n=new J().makeRotationY(e*Math.PI/2);t.applyMatrix4(new J().makeTranslation(0,-eS/2,$x)),t.applyMatrix4(n),i.push(t)}let a=new Dl(Yx(i),r);i.forEach(e=>e.dispose()),this.group.add(a),this.stripMat=new hl({color:new Y(1.3,.22,.85)});let o=[];for(let e=0;e<4;e++)for(let[t,n]of[[-.03,.05],[-eS+.04,.035]]){let r=new Au($x*2+.06,n,.04);r.applyMatrix4(new J().makeTranslation(0,t,$x+.02)),r.applyMatrix4(new J().makeRotationY(e*Math.PI/2)),o.push(r)}let s=new Dl(Yx(o),this.stripMat);o.forEach(e=>e.dispose()),this.group.add(s);let c=[[-1,-1],[1,-1],[1,1],[-1,1]],l=new pf({color:2761792,metalness:.85,roughness:.28}),u=new $l(new ju(.075,.085,nS+eS,14),l,4),d=new Xs;c.forEach(([e,t],n)=>{d.position.set(e*Qx,(nS-eS)/2,t*Qx),d.rotation.set(0,0,0),d.updateMatrix(),u.setMatrixAt(n,d.matrix)}),this.group.add(u),this.capMat=new hl({color:16777215});let f=new $l(new tf(.12,.03,8,24),this.capMat,4),p=[new Y(1.6,.3,1),new Y(.3,.7,1.7),new Y(1.6,.3,1),new Y(.3,.7,1.7)];c.forEach(([e,t],n)=>{d.position.set(e*Qx,nS+.02,t*Qx),d.rotation.set(Math.PI/2,0,0),d.updateMatrix(),f.setMatrixAt(n,d.matrix),f.setColorAt(n,p[n])}),this.capBase.push(...p),this.caps=f,this.group.add(f);let m=new BC(.4,1.32,.4,3,.09),h=TS(`#ff2f9e`,`#b5127a`),g=TS(`#2f7bff`,`#1a3dbf`);this.textures.push(h,g);let _=new pf({map:h,roughness:.42,metalness:.05,emissive:16777215,emissiveMap:h,emissiveIntensity:.42}),v=new pf({map:g,roughness:.42,metalness:.05,emissive:16777215,emissiveMap:g,emissiveIntensity:.42}),y=new $l(m,_,2),b=new $l(m,v,2),x=(e,t,n,r)=>{let i=.16;d.position.set(n*(Qx-i),.9,r*(Qx-i)),d.rotation.set(0,Math.atan2(-n,-r),0),d.updateMatrix(),e.setMatrixAt(t,d.matrix)};x(y,0,-1,-1),x(y,1,1,1),x(b,0,1,-1),x(b,1,-1,1),this.group.add(y,b);let S=e=>{let t=[],n=Qx*2-.3;for(let r of e)tS.forEach((e,i)=>{let a=new ju(.042,.042,n,10,40,!0),o=a.attributes.position,s=o.count,c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s*3),d=VC[i];for(let e=0;e<s;e++)c[e]=o.getY(e)/n+.5,l[e]=r,u[e*3]=d.r,u[e*3+1]=d.g,u[e*3+2]=d.b;a.setAttribute(`aU`,new zc(c,1)),a.setAttribute(`aSide`,new zc(l,1)),a.setAttribute(`aColor`,new zc(u,3)),a.deleteAttribute(`uv`),a.applyMatrix4(new J().makeRotationZ(Math.PI/2)),a.applyMatrix4(new J().makeTranslation(0,e,-Qx+.02)),a.applyMatrix4(new J().makeRotationY(-r*Math.PI/2)),t.push(a)});let r=Yx(t);t.forEach(e=>e.dispose());let i=new df({uniforms:cf.merge([X.fog,{uWob:{value:new ys},uWob2:{value:new ys},uGlow:{value:HC},uRed:{value:0}}]),vertexShader:WC,fragmentShader:GC,fog:!0});this.ropeMats.push(i);let a=new Dl(r,i);return a.frustumCulled=!1,a};this.ropes=[0,1,2,3].map(e=>S([e])),this.group.add(...this.ropes)}kick(e,t){this.s1[e].v+=t,this.s2[e].v-=t*.45}impact(e,t){for(let n=0;n<4;n+=1)this.kick(n,n===e?t:t*.22)}reset(){for(let e of[...this.s1,...this.s2])e.x=0,e.v=0}update(e){let t=(t,n)=>{let r=e/4;for(let e=0;e<4;e++)t.v+=(-n*n*t.x-2*JC*n*t.v)*r,t.x+=t.v*r;t.x=Math.max(-.45,Math.min(.45,t.x))};for(let e=0;e<4;e++)t(this.s1[e],KC),t(this.s2[e],qC);for(let e of this.ropeMats)e.uniforms.uWob.value.set(this.s1[0].x,this.s1[1].x,this.s1[2].x,this.s1[3].x),e.uniforms.uWob2.value.set(this.s2[0].x,this.s2[1].x,this.s2[2].x,this.s2[3].x),e.uniforms.uGlow.value=HC*this.glow*(1+.25*this.red+.9*this.throb*this.red),e.uniforms.uRed.value=this.red;if(this.red!==this.lastRed&&this.caps){this.lastRed=this.red;let e=this.red;this.stripMat.color.setRGB(1.3+.4*e,.22*(1-.7*e),.85*(1-.85*e)),this.capBase.forEach((t,n)=>{this.capCol.copy(t).lerp(UC,e),this.caps.setColorAt(n,this.capCol)}),this.caps.instanceColor.needsUpdate=!0}}cullFor(e){let t=Qx-.75,n=Qx+.5;this.ropes[0].visible=!(e.z<-t&&Math.abs(e.x)<n),this.ropes[1].visible=!(e.x>t&&Math.abs(e.z)<n),this.ropes[2].visible=!(e.z>t&&Math.abs(e.x)<n),this.ropes[3].visible=!(e.x<-t&&Math.abs(e.z)<n)}allTextures(){return this.textures}},XC=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,I=u&255,L=this.perm[P+this.perm[F+this.perm[I]]]%12,R=this.perm[P+y+this.perm[F+b+this.perm[I+x]]]%12,ee=this.perm[P+S+this.perm[F+C+this.perm[I+w]]]%12,te=this.perm[P+1+this.perm[F+1+this.perm[I+1]]]%12,z=.6-g*g-_*_-v*v;z<0?r=0:(z*=z,r=z*z*this._dot3(this.grad3[L],g,_,v));let ne=.6-T*T-E*E-D*D;ne<0?i=0:(ne*=ne,i=ne*ne*this._dot3(this.grad3[R],T,E,D));let B=.6-O*O-k*k-A*A;B<0?a=0:(B*=B,a=B*B*this._dot3(this.grad3[ee],O,k,A));let re=.6-j*j-M*M-N*N;return re<0?o=0:(re*=re,o=re*re*this._dot3(this.grad3[te],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),I=+(a[P][1]>=3),L=+(a[P][2]>=3),R=+(a[P][3]>=3),ee=+(a[P][0]>=2),te=+(a[P][1]>=2),z=+(a[P][2]>=2),ne=+(a[P][3]>=2),B=+(a[P][0]>=1),re=+(a[P][1]>=1),ie=+(a[P][2]>=1),ae=+(a[P][3]>=1),oe=w-F+c,se=T-I+c,ce=E-L+c,le=D-R+c,ue=w-ee+2*c,de=T-te+2*c,fe=E-z+2*c,pe=D-ne+2*c,me=w-B+3*c,he=T-re+3*c,ge=E-ie+3*c,V=D-ae+3*c,_e=w-1+4*c,ve=T-1+4*c,ye=E-1+4*c,H=D-1+4*c,be=h&255,U=g&255,xe=_&255,Se=v&255,Ce=o[be+o[U+o[xe+o[Se]]]]%32,we=o[be+F+o[U+I+o[xe+L+o[Se+R]]]]%32,Te=o[be+ee+o[U+te+o[xe+z+o[Se+ne]]]]%32,Ee=o[be+B+o[U+re+o[xe+ie+o[Se+ae]]]]%32,De=o[be+1+o[U+1+o[xe+1+o[Se+1]]]]%32,Oe=.6-w*w-T*T-E*E-D*D;Oe<0?l=0:(Oe*=Oe,l=Oe*Oe*this._dot4(i[Ce],w,T,E,D));let ke=.6-oe*oe-se*se-ce*ce-le*le;ke<0?u=0:(ke*=ke,u=ke*ke*this._dot4(i[we],oe,se,ce,le));let Ae=.6-ue*ue-de*de-fe*fe-pe*pe;Ae<0?d=0:(Ae*=Ae,d=Ae*Ae*this._dot4(i[Te],ue,de,fe,pe));let je=.6-me*me-he*he-ge*ge-V*V;je<0?f=0:(je*=je,f=je*je*this._dot4(i[Ee],me,he,ge,V));let Me=.6-_e*_e-ve*ve-ye*ye-H*H;return Me<0?p=0:(Me*=Me,p=Me*Me*this._dot4(i[De],_e,ve,ye,H)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},ZC=.05,QC=.045,$C=.07,ew=.06,tw=1.5,nw=19,rw=class{trauma=0;t=0;noise=new XC({random:iw(11584999)});offset={yaw:0,pitch:0,roll:0,x:0,y:0};add(e){this.trauma=Math.min(1,this.trauma+e)}reset(){this.trauma=0}update(e){this.t+=e,this.trauma=Math.max(0,this.trauma-tw*e);let t=this.trauma*this.trauma,n=e=>this.noise.noise(this.t*nw,e*17.3),r=this.offset;return r.yaw=ZC*t*n(1),r.pitch=QC*t*n(2),r.roll=$C*t*n(3),r.x=ew*t*n(4),r.y=ew*t*n(5),r}};function iw(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var aw=`modulepreload`,ow=function(e,t){return new URL(e,t).href},sw={},cw=function(e){return e.pathname.endsWith(`.css`)},lw=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},uw=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ow(t,n);let r=s(t),i=cw(r);return lw(sw,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:aw,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},dw={direkt:.22,krose:.33,aparkat:.55},fw={direkt:.45,krose:.65,aparkat:1},pw={direkt:`jab`,krose:`hook`,aparkat:`uppercut`},mw={direkt:0,krose:.5,aparkat:1},hw=.36,gw=.65,_w=.5,vw=.200001,yw=1.1,bw=new Y(.9,.95,1.05),xw=new Y(.75,.88,1.15),Sw=new Y(1.9,1.05,.25),Cw=new Y(1.7,.3,.85),ww=new Y(1,.55,.8),Tw=new Y(1,1.4,2.6);function Ew(e,t={}){let n=new oc;n.fog=new ac(1837610,6.5,34);let r=new QS,i=new rw,a=new YC,o=new US,s=new tC(NC),c=new dC(28),l=new fC(360),u=new mC(420);n.add(o.group,a.group,s.mesh,s.flashes.mesh,l.mesh,u.mesh,c.mesh);{let e=location.search;e.includes(`nocrowd`)&&(s.mesh.visible=!1),e.includes(`noarena`)&&(o.group.visible=!1),e.includes(`noring`)&&(a.group.visible=!1),e.includes(`nobeams`)&&o.group.children.forEach(e=>{e.isMesh&&e.renderOrder>=4&&(e.visible=!1)})}let d=new Map,f=new Map,p=new Map,m=ky(t.loadModel??(t.fighterModels===!1?()=>Promise.resolve(null):e=>uw(()=>import(`./fighterModels-DBQ8FeAQ.js`).then(t=>t.loadFighterModel(e)),[],import.meta.url))),h=new Set;function g(e){let t=d.get(e);if(!t){let r=p.get(e)??null;t=Kx({fighter:e,model:r}),r&&h.add(e),d.set(e,t),n.add(t.root)}return t}function _(e,t){p.set(e,t);let r=d.get(e);r&&(_e(),n.remove(r.root),r.dispose(),d.delete(e),f.delete(e));let i=g(e);r?(i.root.position.copy(r.root.position),i.root.rotation.copy(r.root.rotation),i.root.visible=r.root.visible,y(e).loop(`guard`,!0,!0)):i.root.visible=!1,v(i)}function v(e){if(!b||!x||E)return;let t=e.root.visible;e.root.visible=!0,e.update(0);let n=Pe();Fe(b,!1);for(let e of Le())b.initTexture(e);n(),x.render(0,N),e.root.visible=t}function y(e){let t=f.get(e);return t||(t=new Jx(g(e)),f.set(e,t)),t}let b=null,x=null,S=null,C=null,w=null,T=null,E=!1,D=new f_({...c_,maxDpr:PC,...NC?{pixelBudget:FC}:{}}),O=1,k=1,A=0,j=null,M=0,N=0,P=`demir`,F=`yildirim`,I=1,L=!1,R=!1,ee=!1,te=null,z=!1,ne={v:0,beat:0},B=!1,re=null,ie={v:1},ae=new q(0,1.6,0),oe=new q,se=new q,ce=new Map,le=new Set,ue=45253,de=()=>Si(ue=Math.imul(ue,1664525)+1013904223>>>0),fe=()=>y(P),pe=()=>y(F),me=()=>g(P),he=()=>g(F);function ge(e,t,n=!1){return new Promise(r=>{let i=!1,a=()=>{i||(i=!0,r())},o=W.timeline();t(o),o.call(a,void 0,e),o.eventCallback(`onComplete`,()=>{a(),ce.delete(o),le.delete(o)}),ce.set(o,a),n&&le.add(o)})}function V(e){let t=ce.get(e);ee=!0;try{e.progress(1)}finally{ee=!1}t?.(),e.kill(),ce.delete(e),le.delete(e)}function _e(){for(let e of[...ce.keys()])V(e)}function ve(e,t){return e.head.getWorldPosition(t),t}function ye(e){ve(he(),e);let t=me(),n=t.gloveL.getWorldPosition(oe),i=t.gloveR.getWorldPosition(se),a=(n.distanceToSquared(e)<i.distanceToSquared(e)?n:i).sub(e),o=a.length();return o>.001&&e.addScaledVector(a,Math.min(o,.3)/o*.5),oe.copy(r.camera.position).sub(e).normalize(),e.addScaledVector(oe,.18),e}function H(){let e=me(),t=he();for(let e of d.values())e.root.visible=!1;e.root.position.set(rS.x,0,rS.z),e.root.rotation.set(0,Math.PI,0),t.root.position.set(iS.x,0,iS.z),t.root.rotation.set(0,0,0),e.root.visible=!0,t.root.visible=!0}function be(){W.killTweensOf([r,r.offset,r.lookOffset,ie,s.state,o.fx,a]),x&&W.killTweensOf(x.grade),S&&W.killTweensOf(S.mood)}function U(){re?.kill(),re=null,ne.beat=0}function xe(){if(re)return;let e=W.timeline({repeat:-1});e.to(ne,{beat:1,duration:.07,ease:`power2.out`},0).to(ne,{beat:.22,duration:.16,ease:`power2.in`},.07).to(ne,{beat:.8,duration:.07,ease:`power2.out`},.25).to(ne,{beat:0,duration:.5,ease:`power2.inOut`},.32).call(()=>{!ee&&B&&(i.add(.12),s.state.jump=Math.max(s.state.jump,.3),a.impact(0,.12))},void 0,0).set({},{},yw),re=e}function Se(){be(),U(),B=!1,W.killTweensOf(ne),ne.v=0,r.tension=0,c.clear(),l.clear(),u.clear(),i.reset(),a.reset(),a.glow=1,ie.v=1,r.shotMix=0,r.dolly=0,r.fovKick=0,r.roll=0,r.sway=1,r.offset.set(0,0,0),r.lookOffset.set(0,0,0),r.trackX=0,s.state.hype=.15,s.state.jump=0,o.fx.flare=0,o.fx.chase=1,o.fx.beams=1,o.fx.bulbs=1,x&&Object.assign(x.grade,{zoom:0,aberr:0,speed:0,flash:0,wash:0,desat:0,vignette:.68,blood:0,beat:0}),S&&Object.assign(S.mood,{key:1,rims:1,flash:0,pinkFlash:0})}function Ce(e,t){if(!x||ee)return;let n=x.grade;for(let[r,i]of Object.entries(e))n[r]=Math.max(n[r],i),W.to(n,{[r]:0,duration:r===`speed`?t*1.3:t,ease:`power2.out`,overwrite:`auto`})}function we(e){if(!x)return;r.camera.updateMatrixWorld();let t=r.uv(e);x.grade.cx=$o.clamp(t.x,.05,.95),x.grade.cy=$o.clamp(t.y,.05,.95)}function Te(e,t,n,r){S&&!ee&&(S.placeImpact(t),S.mood[e]=n,W.to(S.mood,{[e]:0,duration:r,ease:`power2.out`,overwrite:`auto`}))}function Ee(e,t,n){ee||(s.state.jump=Math.max(s.state.jump,e),t>0&&s.flashBurst(t),n!==void 0&&(s.state.hype=Math.max(s.state.hype,n)))}function De(t){ee||e.hitStop(t)}function Oe(e){let t=mw[e],n=ye(new q);if(ae.copy(n),pe().act(e===`direkt`?`hitLight`:`hitHeavy`,e===`aparkat`?.75:1),a.impact(0,.7+t*1.6),ee)return;let o=de();we(n),c.spawn(cC.star,n,.8+t*.45,.26+t*.12,o,{grow:1.8}),c.spawn(cC.ring,n,.9+t*1.1,.26+t*.14,o),c.spawn(cC.flare,n,.6+t*.4,.12+t*.05,o,{grow:1.5}),c.spawn(cC.puff,n.clone().add(new q(0,.05,-.1)),.6+t*.4,.55,o,{grow:2.5,amp:.7});let u=e===`direkt`?new q(.1,.35,-1):e===`krose`?new q(-1,.3,-.45):new q(0,1.1,-.6);l.spray(n,u,10+Math.round(t*22),3.2+t*2.4,.75,o,{color:xw,size:.009+t*.003,life:.75,stretch:3.5}),l.spray(n,u.clone().multiplyScalar(-.3).add(new q(0,.6,0)),6+Math.round(t*10),3.5+t*2,1,o,{color:Sw,size:.006,life:.35,stretch:5,grav:.3,drag:2}),t>0&&l.spray(n,u,4+Math.round(t*6),2.4+t,.4,o,{color:bw,size:.015,life:.9,stretch:2,jitterColor:.1}),Te(`flash`,se.copy(n).add(new q(0,.45,-.25)),.7+t*.6,.18+t*.15),i.add(.26+t*.32),De(25+t*55),Ce({zoom:t*.07,aberr:t*.05,speed:.45+t*.45},.22+t*.18),W.fromTo(r,{fovKick:-(2+t*3.5)},{fovKick:0,duration:.35+t*.25,ease:`power3.out`,overwrite:`auto`}),W.fromTo(a,{glow:1.5+t*.8},{glow:1,duration:.4,ease:`power2.out`,overwrite:`auto`}),Ee(.3+t*.6,2+Math.round(t*12)),s.state.hype=Math.min(1,s.state.hype+.05+t*.08)}function ke(e,t){if(ee)return;let n=de(),o=he();if(t===`block`){let e=o.gloveL.getWorldPosition(new q).add(o.gloveR.getWorldPosition(new q)).multiplyScalar(.5);oe.copy(r.camera.position).sub(e).normalize(),e.addScaledVector(oe,.15),ae.copy(e),c.spawn(cC.block,e,.75,.22,n,{grow:2.5}),l.spray(e,new q(0,.6,.4),8,2.6,1,n,{color:Tw,size:.01,life:.3,stretch:5,grav:.4,drag:2}),i.add(.14),a.impact(0,.3),Ce({aberr:.15},.2)}else{let t=ve(o,new q);ae.copy(t);let i=e===`krose`?-1:1;t.x+=i*.18,oe.copy(r.camera.position).sub(t).normalize(),t.addScaledVector(oe,.2),c.spawn(cC.whiff,t,1+mw[e]*.5,.3,n,{grow:1.3,rot:e===`aparkat`?-1.2:i>0?.6:2.6,spin:0}),we(t),Ce({speed:.3+mw[e]*.25},.25),Ee(.15,0)}}function Ae(e=he()){if(z||(z=!0,te=null,a.impact(e===he()?0:2,1.4),a.impact(1,.8),a.impact(3,.8),ee))return;let t=de(),n=ve(e,new q).lerp(e.root.position,.4);n.y=.12;for(let e=0;e<6;e++)c.spawn(cC.puff,n.clone().add(new q((t.next()-.5)*1.3,t.next()*.2,(t.next()-.5)*.9)),.8+t.next()*.6,.9,t,{grow:2.2,amp:.9,delay:e*.02});l.spray(n,new q(0,1,0),18,2.2,1,t,{color:xw,size:.009,life:.6}),i.add(.5),De(60),Ee(1,12)}function je(e){C&&(e&&!w?(w=document.createElement(`div`),w.textContent=`Grafikler yeniden yükleniyor…`,w.style.cssText=`position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#12071f;color:#f4ecff;font:600 18px Oswald,system-ui,sans-serif;letter-spacing:.04em;z-index:2`,C.appendChild(w)):!e&&w&&(w.remove(),w=null))}function Me(){if(!b)return;let e=D.dpr(O,k,window.devicePixelRatio||1);b.setPixelRatio(e),b.setSize(O,k,!1),x?.setSize(O,k,e)}function Ne(){if(!b||!C)return;let e=Math.max(1,C.clientWidth||window.innerWidth),t=Math.max(1,C.clientHeight||window.innerHeight);O=e,k=t,D.reset(),Me();let n=b.domElement.getBoundingClientRect();r.setCanvas(e,t,n.left,n.top),j&&r.setRect(j)}function Pe(){let e=[];for(let t of[c.mesh,l.mesh,u.mesh,s.flashes.mesh]){let n={v:t.visible,c:t.count};t.visible=!0,t.count===0&&(t.count=1),e.push(()=>{t.visible=n.v,t.count=n.c})}for(let t of d.values()){let n=t.root.visible;t.root.visible=!0,e.push(()=>t.root.visible=n)}return()=>e.forEach(e=>e())}function Fe(e,t){let i=e.getRenderTarget();e.setRenderTarget(x?x.composer.readBuffer:null);let a=t?e.compileAsync(n,r.camera):Promise.resolve(e.compile(n,r.camera));return e.setRenderTarget(i),a}async function Ie(){if(!b)return;let e=Pe();r.update(0,i.offset),await Fe(b,!0);for(let e of[...a.allTextures(),...o.allTextures(),...s.allTextures(),...Le()])b.initTexture(e);e()}function Le(){let e=new Set;for(let t of d.values())t.root.traverse(t=>{let n=t.material;if(n)for(let t of Array.isArray(n)?n:[n]){let n=t.map;n&&e.add(n)}});return[...e]}function Re(){if(!b)return;T=LC(b),n.environment=T;let e=Pe();Fe(b,!1),e()}let ze=new q,Be=new q;function Ve(e){let t=r.camera.position;ve(me(),ze),ve(he(),Be);let n=Math.atan2(ze.x-t.x,t.z-ze.z),i=Math.atan2(Be.x-t.x,t.z-Be.z),a=Math.atan2(ze.y-t.y,Math.hypot(ze.x-t.x,ze.z-t.z)),o=Math.atan2(Be.y-t.y,Math.hypot(Be.x-t.x,Be.z-t.z)),s=Math.max(i-n,(o-a)*1.5),c=$o.clamp((.15-s)*3.2,0,.55),l=L||R?0:c;r.trackX+=(l-r.trackX)*(1-Math.exp(-e*(l>r.trackX?5:1.6)))}let He={async init(e){C=e,getComputedStyle(e).position===`static`&&(e.style.position=`relative`),b=IC(),e.appendChild(b.domElement);let t=Math.max(1,e.clientWidth||window.innerWidth),i=Math.max(1,e.clientHeight||window.innerHeight);O=t,k=i,b.setPixelRatio(D.dpr(t,i,window.devicePixelRatio||1)),b.setSize(t,i,!1),S=new _C(n),T=LC(b),n.environment=T,n.environmentIntensity=.3,x=MC(b,n,r.camera,t,i,NC);let a=b.domElement.getBoundingClientRect();r.setCanvas(t,i,a.left,a.top),j&&r.setRect(j),He.newMatch(P,F);let o=b.domElement;o.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),E=!0,je(!0)}),o.addEventListener(`webglcontextrestored`,()=>{E=!1,Re(),je(!1)}),new ResizeObserver(()=>Ne()).observe(e),await Ie(),He.update(0),He.render()},setSceneRect(e){if(j={...e},b){let e=b.domElement.getBoundingClientRect();r.setCanvas(e.width||window.innerWidth,e.height||window.innerHeight,e.left,e.top)}r.setRect(e)},update(e){M=e,N+=e;let t=ne.v,n=ne.beat;S&&(S.mood.finish=t,S.mood.beat=n),x&&(x.grade.blood=t,x.grade.beat=n),o.fx.red=t,o.fx.throb=n,a.red=t,a.throb=n,s.state.red=t;let p=ie.v,m=e*p;for(let e of f.values())e.setSlow(p);for(let e of d.values())e.root.visible&&e.update(m);te&&ve(te,oe).y<.62&&Ae(te),s.update(m),o.update(m,s.state.hype),a.update(m),c.update(e*(.45+.55*p)),l.update(m),u.update(m),S?.update(),Ve(e),r.update(e,i.update(e)),a.cullFor(r.camera.position)},render(){if(!b||!x||E)return;let e=performance.now();A>0&&D.frame(e-A)&&Me(),A=e,x.render(M,N)},async preload(e,t){let n=e===t?[e]:[e,t],r=await Promise.all(n.map(e=>m.get(e)));n.forEach((e,t)=>{let n=r[t];n&&!h.has(e)&&!p.has(e)&&_(e,n)})},newMatch(e,t){_e(),P=e,F=t,I=1,L=!1,R=!1,te=null,z=!1,Se(),H();for(let e of d.values())e.setDamage(0);fe().loop(`guard`,!0,!0),pe().loop(`guard`,!0,!0),r.wideMix=1},gong(){return ge(1.4,e=>{e.to(r,{wideMix:0,duration:1.3,ease:`power3.inOut`},0),e.fromTo(r,{roll:0},{keyframes:[{roll:-.05,duration:.6,ease:`sine.out`},{roll:0,duration:.7,ease:`sine.inOut`}]},0),e.fromTo(o.fx,{flare:1},{flare:0,duration:.9,ease:`power2.out`},0),e.fromTo(a,{glow:2.2},{glow:1,duration:.9,ease:`power2.out`},0),S&&e.fromTo(S.mood,{key:1.7},{key:1,duration:.9,ease:`power2.out`},0),e.call(()=>{Ee(1,16),a.impact(0,.5)},void 0,0),e.to(s.state,{hype:.6,duration:.3,ease:`power2.out`},0),e.to(s.state,{hype:.32,duration:.9,ease:`sine.inOut`},.5),e.to(o.fx,{chase:2.5,duration:.2},0),e.to(o.fx,{chase:1,duration:.8},.6),e.call(()=>{fe().loop(`bounce`),pe().loop(I<=vw?`dizzy`:`bounce`)},void 0,.12)})},punch(e,t){let n=pw[e],i=dw[e],a=fw[e],s=me().impactAt(n),c=s>0?s/(i*1e3):1,l=e===`aparkat`;return ge(a,s=>{if(s.call(()=>void fe().act(n,c),void 0,0),s.to(r,{dolly:l?.4:.06,duration:i,ease:l?`power2.in`:`power2.out`},0),l&&s.to(r,{fovKick:-3,duration:i,ease:`power2.in`},0),t)s.call(()=>Oe(e),void 0,i),l?(s.to(ie,{v:.3,duration:.05,ease:`power2.out`},i),s.to(ie,{v:1,duration:.18,ease:`power2.in`},i+.24),x&&(s.to(x.grade,{desat:.15,vignette:.75,duration:.08},i),s.to(x.grade,{desat:0,vignette:.68,duration:.25},i+.22)),s.to(o.fx,{flare:.6,duration:.05},i),s.to(o.fx,{flare:0,duration:.4},i+.1),s.to(r,{dolly:.5,duration:.25,ease:`sine.out`},i),s.to(r,{dolly:0,duration:a-i-.27,ease:`power2.inOut`},i+.27),s.to(r.offset,{x:.12,y:.14,duration:.3,ease:`sine.out`},i-.15),s.to(r.offset,{x:0,y:0,duration:a-i-.27,ease:`power2.inOut`},i+.27)):s.to(r,{dolly:0,duration:a-i,ease:`power2.out`},i+.04);else{let t=e===`direkt`?`block`:`slip`;s.call(()=>void pe().act(t),void 0,Math.max(0,i-(t===`block`?.1:.17))),s.call(()=>ke(e,t),void 0,i),l&&s.to(r,{fovKick:0,duration:.3,ease:`power2.out`},i),s.to(r,{dolly:0,duration:a-i,ease:`power2.inOut`},i+.02)}})},counter(){let e=he().impactAt(`counter`),t=e>0?e/(hw*1e3):1;return ge(1.4,e=>{e.call(()=>void pe().act(`counter`,t),void 0,0),e.to(r,{dolly:.18,duration:hw,ease:`power2.in`},0),e.call(()=>{if(fe().act(`stagger`),a.impact(2,1.2),ee)return;let e=de(),t=ve(me(),new q),n=ve(he(),new q),r=t.clone().lerp(n,.3);r.y+=.05,ae.copy(r),we(r),c.spawn(cC.pink,r,3.2,.75,e,{grow:4,spin:.4}),c.spawn(cC.star,r,.8,.28,e,{grow:3,tint:ww}),c.spawn(cC.flare,r,1.3,.26,e,{tint:ww}),l.spray(r,new q(.2,.7,1),26,4.6,.85,e,{color:Cw,size:.008,life:.6,stretch:4,grav:.6}),l.spray(r,new q(-.3,.5,1),14,3.6,.6,e,{color:xw,size:.011,life:.8,stretch:3}),Te(`pinkFlash`,r,1,.5),i.add(.9),De(90),Ce({zoom:.1,aberr:.2,speed:.6,wash:.38},.55),Ee(.8,12)},void 0,hw),e.to(r.offset,{z:.5,y:-.1,duration:.24,ease:`power3.out`},hw),e.to(r,{roll:.08,fovKick:6,dolly:0,duration:.24,ease:`power3.out`},hw),e.to(r.offset,{z:0,y:0,duration:.6,ease:`power2.inOut`},.78),e.to(r,{roll:0,fovKick:0,duration:.6,ease:`power2.inOut`},.78),e.to(s.state,{hype:.25,duration:.6},.8)},!0)},setOpponentHealth(e){I=$o.clamp(e,0,1),he().setDamage(1-I);let t=I<=vw||B;!L&&!R&&pe().loop(t?`dizzy`:pe().base===`guard`?`guard`:`bounce`,!1)},setPlayerHealth(e){me().setDamage(1-$o.clamp(e,0,1))},setFinishHim(e){e!==B&&(B=e,W.killTweensOf(ne,`v`),W.killTweensOf(r,`tension`),e?(xe(),W.to(ne,{v:1,duration:.7,ease:`power2.out`}),W.to(r,{tension:1,duration:1.8,ease:`sine.inOut`}),W.fromTo(a,{glow:2.4},{glow:1,duration:.8,ease:`power2.out`,overwrite:`auto`}),Ee(.9,18,.75),!L&&!R&&pe().loop(`dizzy`,!1)):(W.to(ne,{v:0,duration:.6,ease:`power2.inOut`,onComplete:()=>{B||U()}}),W.to(r,{tension:0,duration:.6,ease:`power2.inOut`}),!L&&!R&&I>vw&&pe().loop(`bounce`,!1)))},knockout(){let e=me().impactAt(`uppercut`),t=e>0?e/(gw*1e3):1,n=r.landscape;return r.shot.pos.set($o.lerp(4.4,3.35,n),$o.lerp(1.55,1.3,n),$o.lerp(.5,.2,n)),r.shot.look.set(-.15,$o.lerp(1.05,1.25,n),$o.lerp(-.35,-.4,n)),r.shot.fov=$o.lerp(56,50,n),z=!1,ge(3,e=>{L=!0,e.call(()=>void fe().act(`uppercut`,t),void 0,0),e.to(r,{shotMix:1,duration:.6,ease:`power2.inOut`},0),x&&e.to(x.grade,{vignette:.85,duration:.35},.3),e.to(s.state,{hype:.7,duration:.5},0),e.call(()=>{if(pe().base=`down`,pe().act(`koFall`,1),te=he(),a.impact(0,2.2),ee)return;let e=de(),t=ye(new q);ae.copy(t),we(t),c.spawn(cC.star,t,1.8,.7,e,{grow:2}),c.spawn(cC.ring,t,2.6,.6,e),c.spawn(cC.ring,t,1.8,.5,e,{delay:.08}),c.spawn(cC.flare,t,1.4,.3,e),l.spray(t,new q(-.2,1.1,-.7),46,4.2,.8,e,{color:xw,size:.011,life:1.2,stretch:3.5}),l.spray(t,new q(0,.8,-1),14,3,.5,e,{color:bw,size:.017,life:1.3,stretch:2}),l.spray(t,new q(0,.5,.5),26,5.5,1,e,{color:Sw,size:.007,life:.5,stretch:6,grav:.3,drag:1.5}),Te(`flash`,se.copy(t).add(new q(0,.45,-.25)),1.4,.6),i.add(.7),De(130),Ce({zoom:.08,aberr:.06,speed:1},.5),Ce({flash:.35},.2),Ee(1,30,1)},void 0,gw),e.to(ie,{v:.3,duration:.04},gw),e.to(ie,{v:1,duration:.3,ease:`power2.in`},1.15),x&&e.to(x.grade,{vignette:.68,duration:.5},1.25),e.to(o.fx,{flare:1,duration:.06},gw),e.to(o.fx,{flare:.2,duration:1.2,ease:`power2.out`},.75),e.to(o.fx,{chase:3,duration:.3},gw),e.to(r.lookOffset,{y:-.22,z:$o.lerp(-.15,-.3,n),duration:1.4,ease:`sine.inOut`},1),e.to(r,{dolly:-.15,duration:1.8,ease:`sine.inOut`},gw),e.to(r,{roll:-.04,duration:1.4,ease:`sine.inOut`},gw),e.call(()=>Ae(he()),void 0,2.55),e.call(()=>{fe().act(`celebrate`),ee||u.burst(new q(rS.x,1.6,rS.z-.6),220,de())},void 0,2.25),e.call(()=>{te=null,pe().loop(`down`,!1)},void 0,2.98)},!0)},playerKnockedOut(){let e=he().impactAt(`uppercut`),t=e>0?e/(_w*1e3):1,n=r.landscape;return r.shot.pos.set($o.lerp(-3.05,-3.25,n),$o.lerp(.72,.62,n),$o.lerp(2.35,2.05,n)),r.shot.look.set($o.lerp(.15,.05,n),$o.lerp(1.05,1,n),$o.lerp(.25,.3,n)),r.shot.fov=$o.lerp(60,47,n),z=!1,ge(2.6,e=>{e.call(()=>{fe().loop(`dizzy`),pe().act(`uppercut`,t)},void 0,0),e.to(r,{shotMix:1,duration:.7,ease:`power2.inOut`},0),e.to(s.state,{hype:.8,duration:.4},0),x&&e.to(x.grade,{vignette:.8,duration:.4},.1),e.call(()=>{if(R=!0,fe().base=`down`,fe().act(`koFall`,1),te=me(),a.impact(2,1.8),ee)return;let e=de(),t=ve(me(),new q);oe.copy(r.camera.position).sub(t).normalize(),t.addScaledVector(oe,.2),ae.copy(t),we(t),c.spawn(cC.pink,t,3.4,.85,e,{grow:4,spin:.4}),c.spawn(cC.star,t,1.5,.6,e,{grow:2.2,tint:ww}),c.spawn(cC.ring,t,2.4,.55,e),c.spawn(cC.flare,t,1.5,.3,e,{tint:ww}),l.spray(t,new q(0,1,.9),44,4.4,.85,e,{color:xw,size:.011,life:1.1,stretch:3.5}),l.spray(t,new q(.2,.7,1),28,4.8,.9,e,{color:Cw,size:.008,life:.7,stretch:4,grav:.6}),Te(`pinkFlash`,t,1.4,.8),i.add(.95),De(140),Ce({zoom:.12,aberr:.22,speed:1,wash:.5},.8),Ee(1,26)},void 0,_w),e.to(ie,{v:.32,duration:.04},_w),e.to(ie,{v:1,duration:.25,ease:`power2.in`},.88),x&&e.to(x.grade,{desat:.42,vignette:.92,duration:1,ease:`sine.inOut`},.8),e.to(o.fx,{flare:.7,duration:.05},_w),e.to(o.fx,{flare:0,duration:1,ease:`power2.out`},.6),e.to(r.lookOffset,{y:-.38,z:.5,duration:1.5,ease:`sine.inOut`},.8),e.to(r,{roll:.08,duration:1.8,ease:`sine.inOut`},_w),e.to(r,{dolly:.4,duration:2,ease:`sine.inOut`},_w),e.call(()=>{pe().base=`bounce`,pe().act(`celebrate`)},void 0,1.8),e.call(()=>Ae(me()),void 0,2.35),e.to(s.state,{hype:.35,duration:.8},2),e.call(()=>{te=null,fe().loop(`down`,!1)},void 0,2.58)},!0)},celebrate(){return ge(1.2,e=>{e.call(()=>{fe().act(`celebrate`),I>vw&&!B&&pe().loop(`idle`,!1),a.impact(1,.4),a.impact(3,.4),!ee&&(u.burst(new q(rS.x,1.7,rS.z-.4),180,de()),Ee(1,22,.9))},void 0,0),e.fromTo(o.fx,{flare:.8},{flare:0,duration:.9,ease:`power2.out`},0),e.to(o.fx,{chase:3,duration:.2},0),e.to(r,{dolly:-.45,fovKick:4,duration:.62,ease:`power2.out`},0),e.to(r.lookOffset,{y:.3,duration:.62,ease:`power2.out`},0),e.to(r,{dolly:0,fovKick:0,duration:.42,ease:`power2.inOut`},.78),e.to(r.lookOffset,{y:0,duration:.42,ease:`power2.inOut`},.78),e.to(s.state,{hype:.55,duration:.8},.4),e.call(()=>{!L&&!R&&pe().loop(I<=vw||B?`dizzy`:`bounce`,!1)},void 0,1.15)},!0)},impactScreenPos(){r.camera.updateMatrixWorld();let e=ve(he(),new q);return e.y+=.08,r.project(e)},skip(){for(let e of[...le])V(e)},renderInfo(){return x?{calls:x.stats.calls,triangles:x.stats.triangles}:{calls:0,triangles:0}}};return Object.assign(He,{__dbg:()=>({p:fe().base+`/`+fe().current,o:pe().base+`/`+pe().current,health:I,finishOn:B}),__act:(e,t)=>{let n=e===`player`?fe():pe();return n.act(t),n.boxer.impactAt(t)},hasModel:e=>h.has(e)}),He}var Dw=`http://www.w3.org/2000/svg`,Ow=0,kw=null;function Aw(e,t={},n){let r=document.createElementNS(Dw,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,String(n));return n&&n.appendChild(r),r}function jw(e,t,n,r){kw??=document.createElement(`canvas`).getContext(`2d`);let i={width:e.length*n*.5,ascent:n*.9,descent:n*.12};if(!kw)return i;kw.font=`400 ${n}px ${t}`;let a=kw.measureText(e),o=a.actualBoundingBoxAscent||i.ascent,s=Math.max(a.actualBoundingBoxDescent||0,n*.04);return{width:a.width+r*Math.max(0,e.length-1),ascent:o,descent:s}}function Mw(e,t){let n=`nkc${++Ow}`,r=t.font??`'Anton', 'Oswald', Impact, sans-serif`,i=t.spacing??0,a=t.strokeW??Math.max(3,t.size*.14),[o,s]=t.shadowOffset??[t.size*.045,t.size*.07],[c,l]=t.halftoneOffset??[t.size*.09,t.size*.13],u=jw(t.measureAs??e,r,t.size,i),d=a*.6+2,f=Math.max(t.shadow?o:0,t.halftone?c:0,0),p=Math.max(t.shadow?s:0,t.halftone?l:0,0),m=Math.ceil(u.width+d*2+f),h=Math.ceil(u.ascent+u.descent+d*2+p),g=Aw(`svg`,{viewBox:`0 0 ${m} ${h}`,width:m,height:h,"aria-label":e,role:`img`});g.classList.add(`nk-comic`),g.style.overflow=`visible`,g.dataset.pl=String(d),g.dataset.pr=String(d+f);let _=Aw(`defs`,{},g),v=Aw(`linearGradient`,{id:`${n}g`,x1:0,y1:0,x2:0,y2:1},_);if(t.fill.forEach((e,n)=>Aw(`stop`,{offset:t.fill.length===1?0:n/(t.fill.length-1),"stop-color":e},v)),t.halftone){let e=Math.max(4,Math.round(t.size*.075)),r=Aw(`pattern`,{id:`${n}h`,width:e,height:e,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(30)`},_);Aw(`circle`,{cx:e/2,cy:e/2,r:e*.36,fill:t.halftone},r)}let y=t.anchor===`middle`,b=y?d+u.width/2:d,x=d+u.ascent,S={x:b,y:x,"text-anchor":y?`middle`:`start`,"font-family":r,"font-size":t.size,"font-weight":400,"letter-spacing":i,"stroke-linejoin":`round`,"paint-order":`stroke fill`},C=t=>{let n=Aw(`text`,{...S,...t},g);return n.textContent=e,n};return t.halftone&&C({x:b+c,y:x+l,fill:`url(#${n}h)`,stroke:`none`}),t.shadow&&C({x:b+o,y:x+s,fill:t.shadow,stroke:t.shadow,"stroke-width":a}),C({fill:`url(#${n}g)`,stroke:t.stroke??`#12071f`,"stroke-width":a}),t.rim&&C({x:b-1,y:x-1.5,fill:`none`,stroke:t.rim,"stroke-width":Math.max(1,t.size*.018),opacity:.7}),g}function Nw(e,t){e.forEach((n,r)=>{if(r===0)return;let i=e[r-1],a=Number(i.dataset.pr??0)+Number(n.dataset.pl??0);n.style.marginLeft=`${t-a}px`})}function Pw(e,t){for(let n of e.querySelectorAll(`text`))n.textContent!==t&&(n.textContent=t)}function Fw(e,t,n,r,i,a,o=0){let s=[];for(let c=0;c<i*2;c++){let l=o+c/(i*2)*Math.PI*2,u=a?.78+a()*.44:1,d=c%2==0?n*u:r*(a?.9+a()*.2:1);s.push(`${(e+Math.cos(l)*d).toFixed(1)},${(t+Math.sin(l)*d).toFixed(1)}`)}return s.join(` `)}function Iw(e,t,n,r=14,i){let a=Aw(`svg`,{viewBox:`-110 -110 220 220`,width:e,height:e});a.style.overflow=`visible`;let o=Fw(0,0,100,56,r,i);return n?(Aw(`polygon`,{points:o,fill:`#12071f`,transform:`translate(7 9)`},a),Aw(`polygon`,{points:o,fill:t,stroke:n,"stroke-width":5,"stroke-linejoin":`round`},a)):(Aw(`polygon`,{points:o,fill:t},a),Aw(`polygon`,{points:Fw(0,0,62,34,r,void 0,.2),fill:`#ffffff`},a)),a}function $(e,t=``,n,r){let i=document.createElement(e);return t&&(i.className=t),r!==void 0&&(i.textContent=r),n&&n.appendChild(i),i}function Lw(e,t,n,r){let i=$(`button`,e,t);return i.type=`button`,i.innerHTML=n,i.addEventListener(`click`,e=>{e.stopPropagation(),i.disabled||r()}),i}function Rw(e,t){e.textContent!==t&&(e.textContent=t)}function zw(e,t){e.disabled!==t&&(e.disabled=t)}function Bw(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/100),r=t%100,i=String(n);return n>=1e3&&(i=i.replace(/\B(?=(\d{3})+(?!\d))/g,`.`)),`${i},${r<10?`0`:``}${r}`}function Vw(e){return`${Bw(e)}x`}function Hw(e){return`+${Bw(e)}x`}function Uw(e){let t=Math.max(0,Math.min(1,e))*100;if(t>=99&&t<100){let e=Math.floor(t*10)/10;return`%${String(e).replace(`.`,`,`)}`}return`%${Math.round(t)}`}function Ww(e,t){return e>=900&&e>t||e>t&&e>=640&&t<520?`desktop`:`mobile`}var Gw=class{node;fmt;obj={v:0};tween=null;target=0;constructor(e,t,n=0){this.node=e,this.fmt=t,this.obj.v=n,this.target=n,this.write()}get value(){return this.target}set(e,t=0,n=0){(e!==this.target||!this.tween&&this.obj.v!==e)&&(this.target=e,this.tween?.kill(),this.tween=null,t<=0?(this.obj.v=e,this.write()):this.tween=W.to(this.obj,{v:e,duration:t,delay:n,ease:`power2.out`,onUpdate:()=>this.write(),onComplete:()=>{this.tween=null}}))}write(){Rw(this.node,this.fmt(Math.round(this.obj.v)))}},Kw=class{p;mode=null;cbs=[];lastKey=``;raf=0;constructor(e){this.p=e,this.applyMode();let t=new ResizeObserver(()=>this.schedule());for(let n of[e.root,e.fight,e.dock,e.bet,e.side,...e.watch])t.observe(n);addEventListener(`orientationchange`,()=>this.schedule()),addEventListener(`resize`,()=>this.schedule())}onChange(e){this.cbs.push(e)}update(){this.applyMode();let e=this.sceneRect(),t=`${this.mode}|${e.left}|${e.top}|${e.width}|${e.height}`;if(t!==this.lastKey){this.lastKey=t;for(let e of this.cbs)e()}}sceneRect(){this.applyMode();let e=this.p.root.getBoundingClientRect(),t=this.p.fight.getBoundingClientRect(),n=this.p.dock.getBoundingClientRect(),r=Math.round(t.bottom+4),i=Math.round(e.left),a=Math.round(e.right),o=this.p.bet.getBoundingClientRect(),s=Math.round(this.mode===`mobile`&&o.height>0?Math.min(o.top-4,n.top-4):n.height>0?n.top-4:e.bottom);return{left:i,top:r,width:Math.max(1,a-i),height:Math.max(1,s-r)}}schedule(){this.raf||=requestAnimationFrame(()=>{this.raf=0,this.update()})}applyMode(){let e=this.p.root.clientWidth||innerWidth,t=this.p.root.clientHeight||innerHeight,n=Ww(e,t),r=this.p.ui;r.classList.toggle(`nk-compact`,n===`mobile`?t<740:t<820),r.classList.toggle(`nk-short`,n===`desktop`&&t<600),r.classList.toggle(`nk-narrow`,e<370),n!==this.mode&&(this.mode=n,r.classList.toggle(`nk-mobile`,n===`mobile`),r.classList.toggle(`nk-desktop`,n===`desktop`))}},qw=class{set=new Set;add(e){this.set.add(e)}remove(e){this.set.delete(e)}skipAll(){for(let e of[...this.set])this.set.delete(e),e.progress(1)}};function Jw(e,t,n){return new Promise(r=>{let i=W.timeline({onComplete:()=>{e?.remove(i),n(),r()}});t(i),e?.add(i)})}function Yw(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Xw=class{fxLayer;overlay;hud;toastTl=null;constructor(e,t,n){this.fxLayer=e,this.overlay=t,this.hud=n}flash(e,t){let n=$(`div`,`nk-flash`,this.fxLayer);n.style.background=e,W.fromTo(n,{opacity:.92},{opacity:0,duration:Math.max(.05,t/1e3),ease:`power1.out`,onComplete:()=>n.remove()})}edge(e,t,n,r,i=0){let a=$(`div`,`nk-edge`,this.fxLayer);a.style.boxShadow=`inset 0 0 90px 24px ${e}, inset 0 0 0 4px ${e}`;let o=Math.max(1,Math.round(t)),s=Math.max(.1,n/1e3/o),c=r??W.timeline({onComplete:()=>a.remove()});c.set(a,{opacity:0},i);for(let e=0;e<o;e++)c.to(a,{opacity:1,duration:s*.3,ease:`power2.out`},i+e*s).to(a,{opacity:e===o-1?0:.35,duration:s*.7,ease:`sine.inOut`},i+e*s+s*.3);return a}shake(e=10,t=.42){W.killTweensOf(this.hud,`x,y`),W.fromTo(this.hud,{x:0,y:0},{keyframes:{x:[-e,e*.85,-e*.6,e*.4,-e*.2,0],y:[e*.4,-e*.35,e*.25,-e*.1,0,0]},duration:t,ease:`none`,onComplete:()=>{W.set(this.hud,{clearProps:`transform`})}})}toast(e,t){this.toastTl?.progress(1);let n=$(`div`,`nk-toast`,this.overlay,e),r=this.overlay.clientWidth||innerWidth;W.set(n,{left:r/2,top:t.top+10,xPercent:-50,opacity:0,y:-12});let i=W.timeline({onComplete:()=>{n.remove(),this.toastTl===i&&(this.toastTl=null)}});i.to(n,{opacity:1,y:0,duration:.22,ease:`back.out(2)`}).to(n,{opacity:0,y:-8,duration:.25,ease:`power2.in`},`+=2.2`),this.toastTl=i}},Zw={dovus:1.1,raunt:1.2,karsi:1,nakavt:2.2,bitir:1.3,yenildin:2.2},Qw=class{layer;skips;rect;fx;active=null;constructor(e,t,n,r){this.layer=e,this.skips=t,this.rect=n,this.fx=r}show(e,t){this.active?.finish();let n=Zw[e],r=typeof t==`number`&&t>0?t:null,i=$(`div`,`nk-bn is-${e}`,this.layer),a=[],o=null,s=Jw(this.skips,t=>{o=t,e===`dovus`?this.dovus(i,t):e===`raunt`?this.raunt(i,t,r):e===`karsi`?a.push(this.karsi(i,t)):e===`bitir`?a.push(this.bitir(i,t)):e===`yenildin`?a.push(this.yenildin(i,t)):this.nakavt(i,t,r),t.set({},{},n)},()=>{i.remove();for(let e of a)e.remove();this.active===c&&(this.active=null)}),c={finish:()=>o?.progress(1)};return this.active=c,s}big(){let e=this.layer.clientWidth||innerWidth,t=this.layer.clientHeight||innerHeight;return e>=900&&e>t}place(e,t=.42){let n=this.rect(),r=this.layer.clientWidth||innerWidth;e.style.left=`${r/2}px`,e.style.top=`${n.top+n.height*t}px`}dovus(e,t){let n=this.big(),r=$(`div`,`nk-bn-stage`,e);this.place(r);let i=$(`div`,`nk-bn-band`,r),a=$(`div`,`nk-bn-lines`,r);for(let e=0;e<7;e++){let t=$(`i`,``,a);t.style.top=`${8+e*13}%`,t.style.width=`${30+e*37%45}%`,t.style.left=`${e*23%60}%`}let o=$(`div`,`nk-bn-word`,r);o.appendChild(Mw(`DÖVÜŞ!`,{size:n?168:104,fill:[`#f6ff9a`,`#c6ff2e`,`#43d63a`],stroke:`#0a1f0c`,strokeW:n?18:12,shadow:`#0d4a17`,shadowOffset:n?[8,11]:[5,7],halftone:`#06210b`,halftoneOffset:n?[16,20]:[10,13],rim:`#ffffff`})),W.set(r,{xPercent:-50,yPercent:-50}),W.set(i,{rotation:-5}),t.fromTo(i,{scaleX:0,opacity:1},{scaleX:1,duration:.18,ease:`power3.out`},0).fromTo(a.children,{xPercent:-120,opacity:0},{xPercent:140,opacity:.9,duration:.5,ease:`power2.out`,stagger:.03},.05).fromTo(o,{scale:3,rotation:-16},{scale:1,rotation:-7,duration:.15,ease:`power2.in`},.02).fromTo(o,{opacity:0},{opacity:1,duration:.05,ease:`none`},.02).to(r,{keyframes:{x:[-14,12,-8,5,-2,0],y:[8,-6,4,-2,0,0]},duration:.3,ease:`none`},.17).to(o,{scale:1.06,duration:.55,ease:`sine.inOut`},.3).to(o,{scale:1.9,opacity:0,rotation:-2,duration:.24,ease:`power2.in`},.86).to(i,{scaleY:0,opacity:0,duration:.2,ease:`power2.in`},.9)}raunt(e,t,n){let r=this.big(),i=$(`div`,`nk-bn-dim`,e),a=$(`div`,`nk-bn-stage`,e);this.place(a,.45),W.set(a,{xPercent:-50,yPercent:-50});let o=Aw(`svg`,{viewBox:`0 0 600 300`,class:`nk-bn-shards`,preserveAspectRatio:`none`},a),s=Aw(`defs`,{},o),c=Aw(`linearGradient`,{id:`nk-shard-g`,x1:0,y1:0,x2:1,y2:.4},s);Aw(`stop`,{offset:0,"stop-color":`#1fbf3a`},c),Aw(`stop`,{offset:1,"stop-color":`#c6ff2e`},c),Aw(`circle`,{cx:6,cy:6,r:3.6,fill:`#0e7a2a`},Aw(`pattern`,{id:`nk-shard-dots`,width:12,height:12,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(30)`},s));let l=Aw(`polygon`,{points:`40,190 560,40 470,250 120,260`,fill:`url(#nk-shard-g)`},o),u=Aw(`polygon`,{points:`260,70 590,10 520,200 300,190`,fill:`url(#nk-shard-dots)`,opacity:.9},o),d=Aw(`polygon`,{points:`0,250 600,205 600,222 0,262`,fill:`#c6ff2e`},o),f=Aw(`polygon`,{points:`60,150 300,95 120,175`,fill:`#e9ff7a`},o),p=$(`div`,`nk-bn-raunt`,a),m=r?120:74,h=[`#fbffb0`,`#e4ff3a`,`#9be22a`],g=$(`div`,`nk-bn-l1`,p);g.appendChild(Mw(`RAUNDU`,{size:m*.72,fill:h,stroke:`#0a1f0c`,strokeW:m*.11,shadow:`#0a1f0c`,shadowOffset:[5,7],halftone:null}));let _=$(`div`,`nk-bn-l2`,p);_.appendChild(Mw(`ALDIN!`,{size:m,fill:h,stroke:`#0a1f0c`,strokeW:m*.12,shadow:`#0a1f0c`,shadowOffset:[6,8],halftone:`#0a1f0c`,rim:`#ffffff`}));let v=null;if(n!==null){let e=$(`div`,`nk-bn-amt`,p);v=Mw(Fi(0),{size:r?92:58,fill:[`#ffffff`,`#ffffff`,`#dff6ff`],stroke:`#0a1f0c`,strokeW:r?14:10,shadow:`#0a1f0c`,shadowOffset:[5,7],halftone:null,anchor:`middle`,measureAs:Fi(n)}),e.appendChild(v),t.fromTo(e,{scale:.3,opacity:0},{scale:1,opacity:1,duration:.2,ease:`back.out(2.5)`},.16);let i={v:0},a=v;t.to(i,{v:n,duration:.5,ease:`power2.out`,onUpdate:()=>Pw(a,Fi(Math.round(i.v)))},.2).fromTo(e,{scale:1.25},{scale:1,duration:.22,ease:`back.out(3)`},.7)}this.coins(a,t,.18,r?16:11,r?260:160,n??7),t.fromTo(i,{opacity:0},{opacity:1,duration:.15},0).fromTo(l,{x:-500},{x:0,duration:.2,ease:`power3.out`},0).fromTo(u,{x:500},{x:0,duration:.22,ease:`power3.out`},.03).fromTo(d,{x:-700},{x:0,duration:.25,ease:`power3.out`},.06).fromTo(f,{x:-300,opacity:0},{x:0,opacity:1,duration:.2,ease:`power3.out`},.08).fromTo(g,{x:160,opacity:0,skewX:-12},{x:0,opacity:1,skewX:-8,duration:.18,ease:`power3.out`},.04).fromTo(_,{x:-160,opacity:0,skewX:-12},{x:0,opacity:1,skewX:-8,duration:.18,ease:`power3.out`},.1).to(p,{keyframes:{x:[-6,5,-3,0]},duration:.18,ease:`none`},.28).to([o,p],{x:40,opacity:0,duration:.22,ease:`power2.in`},.98).to(i,{opacity:0,duration:.2},1)}karsi(e,t){let n=this.big(),r=$(`div`,`nk-bn-stage`,e);this.place(r,.14),W.set(r,{xPercent:-50,yPercent:-50});let i=Iw(n?420:250,`#ff2d55`,`#12071f`,16,Yw(7));i.classList.add(`nk-bn-burst`),r.appendChild(i);let a=$(`div`,`nk-bn-karsi`,r),o=n?84:46,s=[`#ffe3ea`,`#ff5c7f`,`#d4002f`];$(`div`,``,a).appendChild(Mw(`KARŞI`,{size:o*.8,fill:s,stroke:`#1a0008`,strokeW:o*.13,shadow:`#3a0010`,shadowOffset:[5,7],halftone:`#1a0008`,rim:`#ffffff`})),$(`div`,``,a).appendChild(Mw(`YUMRUK!`,{size:o,fill:s,stroke:`#1a0008`,strokeW:o*.13,shadow:`#3a0010`,shadowOffset:[6,8],halftone:`#1a0008`,rim:`#ffffff`}));let c=this.fx.edge(`rgba(255, 30, 70, 0.85)`,2,900,t,0);return this.fx.shake(n?12:9,.45),W.set(i,{xPercent:-50,yPercent:-50,left:`50%`,top:`50%`}),t.fromTo(i,{scale:.2,rotation:-30,opacity:1},{scale:1,rotation:0,duration:.25,ease:`back.out(2)`},0).to(i,{rotation:12,duration:1,ease:`none`},.25).fromTo(a,{scale:1.8,rotation:8},{scale:1,rotation:-5,duration:.14,ease:`power2.in`},.03).fromTo(a,{opacity:0},{opacity:1,duration:.05,ease:`none`},.03).to(r,{keyframes:{x:[-18,16,-12,9,-6,3,0],y:[6,-8,5,-3,2,0,0]},duration:.45,ease:`none`},.17).to(i,{scale:.6,opacity:0,duration:.2,ease:`power2.in`},.76).to(a,{y:40,rotation:6,opacity:0,duration:.2,ease:`power2.in`},.76),c}nakavt(e,t,n){let r=this.big();e.classList.add(`nk-ko`);let i=$(`div`,`nk-ko-rays`,e),a=$(`div`,`nk-ko-dots is-a`,e),o=$(`div`,`nk-ko-dots is-b`,e),s=$(`div`,`nk-ko-lines`,e);for(let e=0;e<18;e++){let t=$(`i`,``,s);t.style.transform=`rotate(${e*20+e%3*4}deg)`}let c=$(`div`,`nk-ko-center`,e),l=Iw(r?640:380,`#ffd23f`,`#12071f`,15,Yw(42));l.classList.add(`nk-ko-star`),c.appendChild(l);let u=$(`div`,`nk-ko-word`,c),d=r?170:92,f=[];for(let e of`NAKAVT!`){let t=Mw(e,{size:d,fill:[`#ffffff`,`#fff27a`,`#ffb000`],stroke:`#2a0a4a`,strokeW:d*.14,shadow:`#7b2bff`,shadowOffset:[d*.05,d*.07],halftone:`#2a0a4a`,halftoneOffset:[d*.1,d*.13],rim:`#ffffff`});u.appendChild(t),f.push(t)}Nw(f,d*.03);let p=null;if(n!==null){p=$(`div`,`nk-ko-amt`,c);let e=Mw(Fi(0),{size:r?96:56,fill:[`#ffffff`,`#ffffff`,`#e8f3ff`],stroke:`#12071f`,strokeW:r?14:9,shadow:`#12071f`,shadowOffset:[5,7],halftone:null,anchor:`middle`,measureAs:Fi(n)});p.appendChild(e);let i={v:0};t.fromTo(p,{scale:.2,opacity:0,rotation:-10},{scale:1,opacity:1,rotation:-4,duration:.25,ease:`back.out(2.5)`},.62).to(i,{v:n,duration:.7,ease:`power2.out`,onUpdate:()=>Pw(e,Fi(Math.round(i.v)))},.66).fromTo(p,{scale:1.3},{scale:1,duration:.25,ease:`back.out(3)`},1.36)}let m=$(`div`,`nk-ko-flash`,e);W.set(c,{xPercent:-50,yPercent:-50}),W.set(l,{xPercent:-50,yPercent:-50,left:`50%`,top:`50%`}),t.fromTo(m,{opacity:1},{opacity:0,duration:.3,ease:`power1.out`},0).fromTo(i,{scale:.4,rotation:-20},{scale:1,rotation:0,duration:.35,ease:`power3.out`},0).to(i,{rotation:18,duration:1.85,ease:`none`},.35).fromTo([a,o],{opacity:0,scale:1.3},{opacity:1,scale:1,duration:.3,ease:`power2.out`},.08).fromTo(s,{scale:.3,opacity:0},{scale:1.15,opacity:1,duration:.3,ease:`power2.out`},.05).to(s,{scale:1.35,opacity:.5,duration:1.6,ease:`none`},.35).fromTo(l,{scale:0,rotation:-40},{scale:1,rotation:0,duration:.32,ease:`back.out(2.2)`},.1).to(l,{scale:1.06,rotation:6,duration:.4,ease:`sine.inOut`,yoyo:!0,repeat:3},.42).fromTo(f,{scale:3,opacity:0,y:-40},{scale:1,opacity:1,y:0,duration:.16,ease:`power4.in`,stagger:.055},.18).to(c,{keyframes:{x:[-12,10,-6,3,0],y:[8,-6,3,0,0]},duration:.3,ease:`none`},.55).fromTo(u,{rotation:-6},{rotation:-9,scale:1.05,duration:1.2,ease:`sine.inOut`},.6).to(e,{opacity:0,scale:1.08,duration:.25,ease:`power2.in`},1.95)}bitir(e,t){let n=this.big(),r=$(`div`,`nk-bn-stage`,e);this.place(r,.4),W.set(r,{xPercent:-50,yPercent:-50});let i=Iw(n?560:350,`#d4001f`,`#12071f`,18,Yw(13));i.classList.add(`nk-bn-burst`),r.appendChild(i);let a=Iw(n?420:262,`#ff7a1f`,null,14,Yw(29));a.classList.add(`nk-bn-burst`),r.appendChild(a);let o=$(`div`,`nk-bn-bitir`,r),s=n?128:78,c=[`#fff6c9`,`#ffc21f`,`#ff4a12`],l=$(`div`,`nk-bn-l1`,o);l.appendChild(Mw(`BİTİR`,{size:s,fill:c,stroke:`#2a0006`,strokeW:s*.14,shadow:`#7a0012`,shadowOffset:[6,8],halftone:`#2a0006`,rim:`#ffffff`}));let u=$(`div`,`nk-bn-l2`,o);u.appendChild(Mw(`ONU!`,{size:s*1.08,fill:c,stroke:`#2a0006`,strokeW:s*.15,shadow:`#7a0012`,shadowOffset:[6,8],halftone:`#2a0006`,rim:`#ffffff`}));let d=this.fx.edge(`rgba(212, 0, 31, 0.8)`,2,1150,t,0);this.fx.shake(n?8:6,.3);for(let e of[i,a])W.set(e,{xPercent:-50,yPercent:-50,left:`50%`,top:`50%`});return t.fromTo(i,{scale:.1,rotation:40,opacity:1},{scale:1,rotation:0,duration:.2,ease:`back.out(2.2)`},0).fromTo(a,{scale:.1,rotation:-40,opacity:1},{scale:1,rotation:0,duration:.22,ease:`back.out(2.2)`},.03).to(i,{rotation:-10,duration:1,ease:`none`},.2).to(a,{rotation:14,duration:1,ease:`none`},.22).fromTo(l,{scale:3.2,x:-120,opacity:0},{scale:1,x:0,opacity:1,duration:.13,ease:`power3.in`},.02).fromTo(u,{scale:3.4,x:120,opacity:0},{scale:1,x:0,opacity:1,duration:.13,ease:`power3.in`},.1).to(r,{keyframes:{x:[-14,12,-8,4,0],y:[7,-6,3,0,0]},duration:.26,ease:`none`},.23).to(o,{scale:1.12,duration:.07,ease:`power2.out`},.5).to(o,{scale:1,duration:.13,ease:`power2.in`},.57).to(o,{scale:1.08,duration:.06,ease:`power2.out`},.72).to(o,{scale:1,duration:.14,ease:`power2.in`},.78).to([i,a],{scale:1.6,opacity:0,duration:.22,ease:`power2.in`},1.06).to(o,{scale:1.7,opacity:0,duration:.2,ease:`power2.in`},1.08),d}yenildin(e,t){let n=this.big();e.classList.add(`nk-lose`);let r=$(`div`,`nk-lose-dim`,e),i=$(`div`,`nk-bn-stage`,e);this.place(i,.44),W.set(i,{xPercent:-50,yPercent:-50});let a=$(`div`,`nk-lose-box`,i),o=n?132:74,s=[`#ffb3b8`,`#c4122c`,`#5a0010`],c=()=>{let e=$(`div`,`nk-lose-words`);return $(`div`,``,e).appendChild(Mw(`NAKAVT`,{size:o,fill:s,stroke:`#0e0003`,strokeW:o*.14,shadow:`#000000`,shadowOffset:[6,9],halftone:`#2a0006`,halftoneOffset:[11,15]})),$(`div`,`nk-lose-l2`,e).appendChild(Mw(`OLDUN`,{size:o*.82,fill:s,stroke:`#0e0003`,strokeW:o*.13,shadow:`#000000`,shadowOffset:[5,8],halftone:`#2a0006`,halftoneOffset:[10,13]})),e},l=$(`div`,`nk-lose-half is-top`,a);l.appendChild(c());let u=$(`div`,`nk-lose-half is-bot`,a);u.appendChild(c());let d=Aw(`svg`,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,class:`nk-lose-crack`},a),f=Aw(`polyline`,{points:`-2,47 9,53 18,44 27,57 36,46 45,55 53,43 62,58 71,47 80,54 89,45 102,52`,fill:`none`,stroke:`#fff1f1`,"stroke-width":1.6,"stroke-linejoin":`miter`,"vector-effect":`non-scaling-stroke`,pathLength:1,"stroke-dasharray":1,"stroke-dashoffset":1},d),p=$(`div`,`nk-lose-sub`,i,`MAÇI KAYBETTİN`);W.set(p,{xPercent:-50});let m=this.fx.edge(`rgba(120, 0, 18, 0.9)`,1,2e3,t,0);return t.fromTo(r,{opacity:0},{opacity:1,duration:.3,ease:`power1.out`},0).fromTo(a,{y:-260,scale:1.25,rotation:-10,opacity:0},{y:0,scale:1,rotation:-5,opacity:1,duration:.3,ease:`power3.in`},.05).to(i,{keyframes:{y:[14,-6,3,0],x:[-6,5,-2,0]},duration:.3,ease:`none`},.35).call(()=>this.fx.shake(n?12:9,.4),[],.35).to(f,{attr:{"stroke-dashoffset":0},duration:.18,ease:`power2.out`},.6).to(l,{y:-5,x:-4,rotation:-1.5,duration:.25,ease:`back.out(3)`},.72).to(u,{y:9,x:5,rotation:2.5,duration:.35,ease:`back.out(2)`},.72).to(d,{y:2,opacity:.85,duration:.3},.72).fromTo(p,{y:18,opacity:0},{y:0,opacity:1,duration:.3,ease:`power2.out`},.85).to(u,{y:22,rotation:5,duration:.9,ease:`power1.in`},1.05).to(i,{opacity:0,y:30,duration:.3,ease:`power2.in`},1.85).to(r,{opacity:0,duration:.3,ease:`power1.in`},1.88),m}coins(e,t,n,r,i,a){let o=Yw(a*31+r);for(let a=0;a<r;a++){let r=$(`i`,`nk-coin`,e),a=-Math.PI*(.1+o()*.8),s=i*(.5+o()*.6),c=.7+o()*.6;W.set(r,{left:`50%`,top:`55%`,xPercent:-50,yPercent:-50,scale:0,rotation:o()*360}),t.to(r,{x:Math.cos(a)*s,y:Math.sin(a)*s*.8,scale:c,rotation:`+=${180+o()*360}`,duration:.4,ease:`power2.out`},n+o()*.12).to(r,{y:`+=${120+o()*120}`,opacity:0,duration:.45,ease:`power2.in`},n+.45+o()*.15)}}},$w=`<rect x="3" y="14" width="11" height="21" rx="3.5" fill="#fff" stroke="#c9bfe0" stroke-width="1.2"/><path d="M11 17C11 11.5 16 9 22 9H31C39 9 44 14.5 44 21.5V25C44 32.5 39 38 31.5 38H22C15.5 38 11 35.5 11 31.5Z" fill="#e8283f"/><path d="M11 31.5C11 35.5 15.5 38 22 38H31.5C39 38 44 32.5 44 25V24C42 30 37 33 31 33H20C14 33 11.5 31.5 11 29Z" fill="#b8132b"/><path d="M18.5 27C18.5 23 25 22.5 29.5 24.5 33.5 26.5 32.5 32.5 26 32.5 21.5 32.5 18.5 31 18.5 27Z" fill="#c9162f"/><path d="M34 18.5H43" stroke="#b8132b" stroke-width="1.8" stroke-linecap="round"/><path d="M18 14.5C22 12.2 28 12 33 13.2" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2.8" stroke-linecap="round"/><circle cx="37.5" cy="14" r="1.5" fill="#fff" fill-opacity=".75"/>`,eT=(e,t,n,r)=>`<g transform="translate(${e} ${t}) rotate(${n}) scale(${r}) translate(-24 -24)">${$w}</g>`,tT=e=>`<g fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${e}</g>`,nT=e=>`<svg viewBox="0 0 48 48" aria-hidden="true">${e}</svg>`,rT={direkt:nT(`${tT(`<path d="M1 16.5h5M0.5 24h6M1 31.5h5"/>`)}${eT(29.5,24,0,.9)}`),krose:nT(`${tT(`<path d="M3.5 40C2 26 10 13 23 8"/>`)}${eT(28,27,-24,.88)}`),aparkat:nT(`${tT(`<path d="M12.5 33v9M35.5 33v9"/>`)}${eT(24,21,-90,.84)}`)},iT={soundOn:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,soundOff:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,rules:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M9.3 9.3a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.8v.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.35" fill="currentColor"/></svg>`,swap:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h13M13.5 4.5 17 8l-3.5 3.5M20 16H7M10.5 12.5 7 16l3.5 3.5" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,close:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,minus:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>`,plus:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>`,timer:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13.5" r="7.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 13.5V9.5M9.5 2.8h5M18.5 6.5l1.6-1.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,bell:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6a1.6 1.6 0 0 1 1.6 1.6v.7a6.6 6.6 0 0 1 5 6.4v4.2l2 2.6H3.4l2-2.6v-4.2a6.6 6.6 0 0 1 5-6.4v-.7A1.6 1.6 0 0 1 12 2.6z" fill="currentColor"/><path d="M9.4 20.2a2.6 2.6 0 0 0 5.2 0z" fill="currentColor"/></svg>`,cash:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 15.5h3.2l3.6 2.4c.8.5 1.8.6 2.7.2l7.4-3.4c.9-.4 1-1.6.2-2.1-.5-.3-1.1-.3-1.6 0l-4 1.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.7 15.5l2.6-2.2c.6-.5 1.3-.7 2-.7h3.3c.8 0 1.3.9.9 1.6-.2.4-.6.6-1 .6H10.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="6.6" r="3.8" fill="currentColor"/><path d="M15 4.6v4" stroke="#0b2a07" stroke-width="1.6" stroke-linecap="round"/></svg>`,trophy:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10v5a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5.5H3.8a3.4 3.4 0 0 0 3.6 4.2M17 5.5h3.2a3.4 3.4 0 0 1-3.6 4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 13h3l.6 3.8h-4.2zM7.5 17.5h9v3h-9z" fill="currentColor"/></svg>`,hand:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 27V9.5a3 3 0 0 1 6 0V22l9.6 1.6c2.6.4 4.3 2.9 3.8 5.4L36.6 38c-.5 2.6-2.8 4.5-5.5 4.5H24c-1.8 0-3.5-.9-4.6-2.4L12.3 30c-1-1.4-.6-3.4.9-4.3 1.2-.8 2.8-.6 3.8.4z" fill="#f4ecff" stroke="#12071f" stroke-width="2.4" stroke-linejoin="round"/><path d="M25 22v7M30 23v6M35 24.2V29" stroke="#12071f" stroke-width="2" stroke-linecap="round"/></svg>`};function aT(e){return(e.state===`BEKLE`||e.state===`HAZIR`)&&e.balanceKurus<e.betTL*100}function oT(e,t){let n=(e,t,n=null)=>({kind:e,label:t,amountKurus:n,enabled:!1});if(aT(e))return n(`broke`,`YETERSİZ BAKİYE`);switch(e.state){case`BEKLE`:return{kind:`select`,label:`YENİ MAÇ`,amountKurus:null,enabled:!0};case`GONG`:return n(`wait`,`HAZIR OL`);case`HAZIR`:return n(`wait`,`YUMRUK AT!`);case`HAMLE`:return e.landed<1||!e.canCashout?n(`wait`,`YUMRUK AT!`):{kind:`cash`,label:`PARAYI AL`,amountKurus:t,enabled:!0};case`YUMRUK`:return t>0?n(`cash`,`PARAYI AL`,t):n(`wait`,`YUMRUK AT!`);case`KARSI`:return n(`lost`,`RAUNDU KAYBETTİN`);case`PARAYI_AL`:return n(`won`,`KAZANDIN`,t);case`NAKAVT`:return n(`ko`,`NAKAVT!`,t);case`YENILDIN`:return n(`lost`,`NAKAVT OLDUN`)}}function sT(e){let t=Ti[0];for(let n of Ti)n<=e.maxBetTL&&n*100<=e.balanceKurus&&(t=n);return t}function cT(e){return e.kind===`ko`?`KO ${Vw(e.multiplierKurus)}`:Vw(e.multiplierKurus)}function lT(e){return e.map(e=>`${e.kind[0]}${e.multiplierKurus}`).join(`|`)}var uT=new Set([`cash`,`wait`]),dT=new Set([`HAZIR`,`HAMLE`,`YUMRUK`]),fT={select:iT.bell,cash:iT.cash,won:iT.trophy,ko:iT.trophy,wait:rT.direkt},pT=class{intent;root;box;cta;ctaWrap;ctaIco;ctaLbl;ctaAmt;ctaShine;ctaCounter;minus;plus;half;dbl;max;betVal;barBet;reset;balCounter;winCounter;chips;lastPay=0;cur=null;shine=null;prev=null;histKey=``;icoKind=null;note;noteOn=!1;ko;finishOn=!1;finishTl=null;constructor(e,t){this.intent=e,this.root=$(`section`,`nk-dock`);let n=$(`div`,`nk-hist`,this.root);$(`span`,`nk-lbl nk-hist-lbl`,n,`SON RAUNTLAR`),this.chips=$(`div`,`nk-chips`,n),$(`span`,`nk-chips-empty`,this.chips,`Henüz raunt yok`);let r=$(`div`,`nk-bar-row`,this.root),i=(e,t)=>{let n=$(`div`,`nk-cell ${t}`,r);return $(`span`,`nk-lbl`,n,e),$(`b`,`nk-cell-val`,n)};this.barBet=i(`BAHİS`,`is-bet`),this.balCounter=new Gw(i(`BAKİYE`,`is-bal`),Fi),this.winCounter=new Gw(i(`KAZANÇ`,`is-win`),Fi),this.box=$(`div`,`nk-betbox is-edit`);let a=$(`div`,`nk-bet`,this.box),o=$(`div`,`nk-bet-head`,a);$(`span`,`nk-lbl`,o,`BAHİS`),this.note=$(`span`,`nk-bet-note`,o,`İLK YUMRUK YATIRIR`),W.set(this.note,{autoAlpha:0});let s=$(`div`,`nk-bet-row`,a);this.minus=Lw(`nk-step`,s,iT.minus,()=>e({type:`betStep`,dir:-1})),this.minus.setAttribute(`aria-label`,`Bahsi azalt`),this.betVal=$(`div`,`nk-bet-val`,s,Fi(1e3)),this.plus=Lw(`nk-step`,s,iT.plus,()=>e({type:`betStep`,dir:1})),this.plus.setAttribute(`aria-label`,`Bahsi artır`);let c=$(`div`,`nk-bet-quick`,a);this.max=Lw(`nk-chipbtn`,c,`MAKS`,()=>this.setMax()),this.max.setAttribute(`aria-label`,`En yüksek bahis`),this.half=Lw(`nk-chipbtn`,c,`½`,()=>e({type:`betHalf`})),this.half.setAttribute(`aria-label`,`Bahsi yarıya indir`),this.dbl=Lw(`nk-chipbtn`,c,`2×`,()=>e({type:`betDouble`})),this.dbl.setAttribute(`aria-label`,`Bahsi ikiye katla`),this.ctaWrap=$(`div`,`nk-cta-wrap is-wait`,this.box),this.cta=Lw(`nk-cta`,this.ctaWrap,``,()=>{let n=this.cur;n?.enabled&&(W.fromTo(this.ctaWrap,{scale:.95},{scale:1,duration:.3,ease:`back.out(3)`}),n.kind===`cash`?e({type:`cashout`}):n.kind===`select`&&t())}),this.ctaShine=$(`i`,`nk-cta-shine`,this.cta),W.set(this.ctaShine,{skewX:-22,xPercent:-170,opacity:0});let l=$(`span`,`nk-cta-in`,this.cta);this.ctaIco=$(`span`,`nk-cta-ico`,l),this.ctaLbl=$(`span`,`nk-cta-lbl`,l,`PARAYI AL`),this.ctaAmt=$(`span`,`nk-cta-amt`,l,``),this.ctaCounter=new Gw(this.ctaAmt,Fi),this.ko=$(`div`,`nk-cta-ko`,this.ctaWrap),this.ko.setAttribute(`aria-hidden`,`true`);let u=()=>Mw(`K.O.`,{size:26,fill:[`#ffffff`,`#fff27a`,`#ffb000`],stroke:`#12071f`,strokeW:6,shadow:`#12071f`,shadowOffset:[2,3],halftone:null,rim:`#ffffff`});this.ko.appendChild(u()),document.fonts?.ready.then(()=>this.ko.replaceChildren(u())),W.set(this.ko,{yPercent:-50,scale:0,rotation:-10,autoAlpha:0}),this.reset=Lw(`nk-reset`,this.box,`Demo bakiyeyi yenile ↻`,()=>e({type:`resetBalance`})),this.reset.hidden=!0}setMax(){let e=this.prev;if(!e?.canEditBet)return;let t=Ti,n=t.indexOf(sT(e))-t.indexOf(e.betTL);for(let e=0;e<n;e++)this.intent({type:`betStep`,dir:1})}render(e,t,n=!1){let r=this.prev;this.prev=e;let i=e.canEditBet,a=sT(e),o=Ti[0];Rw(this.betVal,Fi(e.betTL*100)),Rw(this.barBet,Fi(e.betTL*100)),zw(this.minus,!i||e.betTL<=o),zw(this.half,!i||e.betTL<=o),zw(this.plus,!i||e.betTL>=a),zw(this.dbl,!i||e.betTL>=a),zw(this.max,!i||e.betTL>=a);let s=e.state===`GONG`||e.state===`HAZIR`;this.box.classList.toggle(`is-edit`,s),this.box.classList.toggle(`is-locked`,!i),r&&r.betTL!==e.betTL&&W.fromTo(this.betVal,{scale:1.2},{scale:1,duration:.3,ease:`back.out(3)`,overwrite:`auto`}),r?e.balanceKurus>this.balCounter.value?this.balCounter.set(e.balanceKurus,1,.15):this.balCounter.set(e.balanceKurus,.2):this.balCounter.set(e.balanceKurus),e.state===`GONG`?this.lastPay=0:(e.state===`PARAYI_AL`||e.state===`NAKAVT`)&&(this.lastPay=t);let c=e.state!==`HAZIR`&&e.state!==`BEKLE`&&e.state!==`GONG`?t:this.lastPay;c>this.winCounter.value?this.winCounter.set(c,.45):this.winCounter.set(c);let l=oT(e,t),u=this.cur;this.cur=l,u&&u.kind===l.kind||(this.ctaWrap.className=`nk-cta-wrap is-${l.kind}${this.finishOn?` is-finish`:``}`,u&&W.fromTo(this.ctaWrap,{scale:.94},{scale:1,duration:.35,ease:`back.out(2.5)`})),this.icoKind!==l.kind&&(this.icoKind=l.kind,this.ctaIco.innerHTML=fT[l.kind]??``,this.ctaIco.hidden=!fT[l.kind]);let d=l.kind===`wait`&&!s?`PARAYI AL`:l.label;Rw(this.ctaLbl,n&&(l.kind===`cash`||l.kind===`wait`)?`NAKAVT ET`:d),zw(this.cta,!l.enabled),this.ctaWrap.classList.toggle(`is-off`,!l.enabled);let f=l.amountKurus??(l.kind===`wait`&&!s?t:null);if(this.ctaAmt.hidden=f===null,f!==null){let e=(l.kind===`cash`||l.kind===`won`||l.kind===`ko`)&&f>this.ctaCounter.value&&u!==null&&u.kind!==`select`;u?.kind!==l.kind&&l.kind===`cash`&&u?.kind===`wait`&&this.ctaCounter.set(0),this.ctaCounter.set(f,e?.45:0),e&&l.kind===`cash`&&W.fromTo(this.ctaAmt,{scale:1.3},{scale:1,duration:.4,ease:`back.out(3)`,overwrite:`auto`})}this.setShine(l.enabled),this.reset.hidden=l.kind!==`broke`,this.setFinish(n&&uT.has(l.kind)&&dT.has(e.state)&&!s),this.setNote(e.state===`HAZIR`&&e.canPunch);let p=lT(e.history);if(p!==this.histKey){let t=r!==null&&e.history.length>0;this.histKey=p,this.chips.replaceChildren(),e.history.length===0&&$(`span`,`nk-chips-empty`,this.chips,`Henüz raunt yok`),e.history.forEach((e,n)=>{let r=$(`span`,`nk-chip is-${e.kind}`,this.chips,cT(e));n===0&&t&&W.from(r,{scale:.3,opacity:0,duration:.4,ease:`back.out(2.5)`})})}}bumpAmount(){W.fromTo(this.ctaAmt,{scale:1.3},{scale:1,duration:.4,ease:`back.out(3)`,overwrite:`auto`})}pressCta(){this.cta.click()}setNote(e){e!==this.noteOn&&(this.noteOn=e,W.killTweensOf(this.note),e?W.fromTo(this.note,{autoAlpha:0,y:4},{autoAlpha:1,y:0,duration:.3,ease:`power2.out`}):W.to(this.note,{autoAlpha:0,duration:.15}))}setFinish(e){if(e===this.finishOn)return;if(this.finishOn=e,this.ctaWrap.classList.toggle(`is-finish`,e),this.finishTl?.kill(),this.finishTl=null,W.killTweensOf(this.ko),!e){W.set(this.ctaWrap,{clearProps:`filter`}),W.to(this.ko,{scale:0,autoAlpha:0,duration:.18,ease:`power2.in`});return}W.fromTo(this.ko,{scale:3,rotation:-40,autoAlpha:0},{scale:1,rotation:-12,autoAlpha:1,duration:.32,ease:`back.out(2.2)`}),W.fromTo(this.ctaWrap,{scale:1.08},{scale:1,duration:.4,ease:`back.out(3)`});let t=`drop-shadow(0 0 6px rgba(255, 61, 31, 0.35)) drop-shadow(0 5px 0 rgba(74, 0, 8, 1))`,n=`drop-shadow(0 0 24px rgba(255, 61, 31, 0.95)) drop-shadow(0 5px 0 rgba(74, 0, 8, 1))`;this.finishTl=W.timeline({repeat:-1,repeatDelay:.35,delay:.32}).fromTo(this.ctaWrap,{filter:t},{filter:n,duration:.12,ease:`power2.out`},0).to(this.ctaWrap,{filter:t,duration:.18,ease:`power2.in`},.12).to(this.ctaWrap,{filter:n,duration:.1,ease:`power2.out`},.3).to(this.ctaWrap,{filter:t,duration:.3,ease:`sine.in`},.4).fromTo(this.ko,{scale:1},{scale:1.18,duration:.12,ease:`power2.out`},0).to(this.ko,{scale:1,duration:.18,ease:`power2.in`},.12).to(this.ko,{scale:1.12,duration:.1,ease:`power2.out`},.3).to(this.ko,{scale:1,duration:.3,ease:`sine.in`},.4)}setShine(e){e!==(this.shine!==null)&&(e?this.shine=W.timeline({repeat:-1,repeatDelay:1.4}).fromTo(this.ctaShine,{xPercent:-170,opacity:1},{xPercent:520,duration:.85,ease:`power2.inOut`}):(this.shine?.kill(),this.shine=null,W.set(this.ctaShine,{xPercent:-170,opacity:0})))}},mT={buyuk:{title:`BÜYÜK KAZANÇ!`,sub:`Güzel yumruk!`,dur:2,coins:26,fill:[`#ffffff`,`#c6ff2e`,`#2fd65a`]},mega:{title:`MEGA KAZANÇ!`,sub:`Salon ayakta!`,dur:3,coins:42,fill:[`#fff6c9`,`#ffd23f`,`#ff8a1f`]},efsane:{title:`EFSANE KAZANÇ!`,sub:`Kemer senin!`,dur:4,coins:64,fill:[`#ffe9fb`,`#ff6bd0`,`#a35bff`]}},hT=0;function gT(e){let t=`nkbelt${++hT}`,n=Aw(`svg`,{viewBox:`0 0 420 170`,width:e,height:Math.round(e*170/420),"aria-hidden":`true`});n.style.overflow=`visible`;let r=Aw(`defs`,{},n),i=Aw(`linearGradient`,{id:`${t}g`,x1:0,y1:0,x2:.3,y2:1},r);[[`0`,`#fff7c2`],[`0.35`,`#ffd23f`],[`0.7`,`#f59f00`],[`1`,`#b86200`]].forEach(([e,t])=>Aw(`stop`,{offset:e,"stop-color":t},i));let a=Aw(`linearGradient`,{id:`${t}s`,x1:0,y1:0,x2:0,y2:1},r);[[`0`,`#5a1238`],[`1`,`#2a0a1f`]].forEach(([e,t])=>Aw(`stop`,{offset:e,"stop-color":t},a)),Aw(`rect`,{x:4,y:52,width:412,height:66,rx:22,fill:`url(#${t}s)`,stroke:`#12071f`,"stroke-width":6},n),Aw(`rect`,{x:16,y:62,width:388,height:46,rx:14,fill:`none`,stroke:`#ffd23f`,"stroke-width":2.5,"stroke-dasharray":`7 6`,opacity:.8},n);for(let e of[62,358])Aw(`rect`,{x:e-30,y:58,width:60,height:54,rx:10,fill:`url(#${t}g)`,stroke:`#12071f`,"stroke-width":5},n),Aw(`polygon`,{points:Fw(e,85,15,7,5,void 0,-Math.PI/2),fill:`#ff2d55`,stroke:`#12071f`,"stroke-width":3,"stroke-linejoin":`round`},n);let o=`M210 6 L282 26 L300 85 L282 144 L210 164 L138 144 L120 85 L138 26 Z`;return Aw(`path`,{d:o,fill:`#12071f`,transform:`translate(6 7)`},n),Aw(`path`,{d:o,fill:`url(#${t}g)`,stroke:`#12071f`,"stroke-width":6,"stroke-linejoin":`round`},n),Aw(`path`,{d:`M210 22 L270 38 L284 85 L270 132 L210 148 L150 132 L136 85 L150 38 Z`,fill:`none`,stroke:`#fff7c2`,"stroke-width":3,opacity:.8},n),Aw(`circle`,{cx:210,cy:85,r:42,fill:`#ff2d55`,stroke:`#12071f`,"stroke-width":5},n),Aw(`polygon`,{points:Fw(210,85,30,13,5,void 0,-Math.PI/2),fill:`#ffd23f`,stroke:`#12071f`,"stroke-width":3.5,"stroke-linejoin":`round`},n),Aw(`ellipse`,{cx:186,cy:40,rx:26,ry:8,fill:`#ffffff`,opacity:.55,transform:`rotate(-14 186 40)`},n),n}var _T=class{layer;skips;onTap;active=null;constructor(e,t,n){this.layer=e,this.skips=t,this.onTap=n}show(e,t){this.active?.progress(1);let n=mT[e],r=this.layer.clientWidth||innerWidth,i=this.layer.clientHeight||innerHeight,a=r>=900&&r>i,o=$(`div`,`nk-bw is-${e}`,this.layer),s=$(`div`,`nk-bw-back`,o),c=$(`div`,`nk-bw-rays`,o),l=$(`div`,`nk-bw-coins`,o),u=$(`div`,`nk-bw-card`,o),d=null;e!==`buyuk`&&(d=gT(a?460:Math.min(330,r-40)),d.classList.add(`nk-bw-belt`),u.appendChild(d));let f=$(`div`,`nk-bw-title`,u),p=a?e===`efsane`?104:96:Math.min(60,(r-32)/(n.title.length*.5));f.appendChild(Mw(n.title,{size:p,fill:n.fill,stroke:`#12071f`,strokeW:p*.14,shadow:`#12071f`,shadowOffset:[p*.05,p*.07],halftone:`#12071f`,rim:`#ffffff`}));let m=$(`div`,`nk-bw-amount`,u),h=a?120:Math.min(70,(r-40)/(Fi(t).length*.52)),g=Mw(Fi(0),{size:h,fill:[`#ffffff`,`#fff7d6`,`#ffd23f`],stroke:`#12071f`,strokeW:h*.13,shadow:`#12071f`,shadowOffset:[5,8],halftone:null,anchor:`middle`,measureAs:Fi(t)});m.appendChild(g),$(`div`,`nk-bw-sub`,u,n.sub);let _=$(`div`,`nk-bw-hint`,u,`Geçmek için dokun`);o.addEventListener(`pointerdown`,e=>{e.stopPropagation(),this.onTap()});let v=Yw(t^e.length*7919),y=n.dur,b=y-.6,x={v:0};return Jw(this.skips,p=>{this.active=p,p.fromTo(s,{opacity:0},{opacity:1,duration:.22,ease:`power1.out`},0).fromTo(c,{opacity:0,scale:.3,rotation:0},{opacity:1,scale:1,duration:.5,ease:`power2.out`},0).to(c,{rotation:30*y,duration:y,ease:`none`},0).fromTo(u,{scale:.25,opacity:0},{scale:1,opacity:1,duration:.42,ease:`back.out(2)`},.04).fromTo(f,{scale:2,y:-30,rotation:-12},{scale:1,y:0,rotation:-5,duration:.36,ease:`back.out(2.6)`},.1).to(x,{v:t,duration:b-.3,ease:`power1.out`,onUpdate:()=>Pw(g,Fi(Math.floor(x.v)))},.3).fromTo(_,{opacity:0},{opacity:.75,duration:.3},.7),d&&p.fromTo(d,{scale:.2,y:60,rotation:12,opacity:0},{scale:1,y:0,rotation:0,opacity:1,duration:.5,ease:`back.out(2)`},.18).to(d,{y:-6,duration:.6,ease:`sine.inOut`,yoyo:!0,repeat:Math.max(0,Math.floor((y-1)/.6)-1)},.7);let h=e===`buyuk`?2:e===`mega`?3:5;for(let e=1;e<=h;e++)p.fromTo(m,{scale:1.14},{scale:1,duration:.22,ease:`power2.out`},.3+(b-.3)*e/(h+1));p.fromTo(m,{scale:1.5},{scale:1,duration:.32,ease:`back.out(3)`},b).fromTo(u,{y:0},{keyframes:{y:[-12,7,-3,0]},duration:.26,ease:`none`},b);for(let e=0;e<n.coins;e++){let e=$(`i`,`nk-coin`,l),t=(a?26:20)+v()*20,n=v()*r,o=.05+v()*Math.max(.2,y-1.3),s=Math.min(1+v()*.8,y-o-.02);W.set(e,{x:n,y:-60,width:t,height:t,rotation:v()*360}),p.to(e,{y:i+60,rotation:`+=${200+v()*360}`,duration:s,ease:`power1.in`},o).to(e,{x:n+(v()-.5)*140,duration:s,ease:`sine.inOut`},o)}p.to(o,{opacity:0,duration:.3,ease:`power2.in`},y-.3),p.set({},{},y)},()=>{o.remove(),this.active=null})}},vT=`#12071f`,yT={demir:{base:`#8f5433`,shade:`#643620`,light:`#b8724a`},yildirim:{base:`#f3c6a0`,shade:`#d9946c`,light:`#ffe4cc`}};function bT(e,t,n,r){return`<g transform="translate(${e} ${t}) rotate(${n}) scale(${r?-1:1} 1)" stroke="${vT}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M-22 22 L20 26 L18 46 L-20 42 Z" fill="#f4ecff"/>
    <path d="M-22 31 L19 35" stroke="#ff2d4f" stroke-width="4"/>
    <path d="M-31 -6 C-32 -30 -12 -38 6 -36 C27 -34 36 -17 34 4 C32 24 17 32 -1 32 C-20 32 -30 20 -31 -6 Z" fill="#ff2d4f"/>
    <path d="M14 -2 C25 -6 35 3 31 14 C28 23 15 23 11 15 C9 9 10 2 14 -2 Z" fill="#c8102e"/>
    <path d="M-14 -24 C-6 -31 8 -31 16 -26" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/>
    <path d="M26 -14 C31 -6 31 4 28 10" stroke="#9d0b25" stroke-width="3" fill="none" opacity=".6"/>
  </g>`}function xT(e){return`
  <path d="M-6 230 L-6 190 C-2 162 28 146 62 140 L82 131 L118 131 L138 140 C172 146 202 162 206 190 L206 230 Z" fill="${e.base}" stroke="${vT}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M150 146 C176 154 198 168 206 190 L206 230 L170 230 C172 200 166 170 150 146 Z" fill="${e.shade}"/>
  <path d="M56 178 C74 192 92 190 100 180 C108 190 126 192 144 178" fill="none" stroke="${vT}" stroke-width="3" stroke-linecap="round" opacity=".55"/>
  <path d="M100 182 L100 214" fill="none" stroke="${vT}" stroke-width="3" stroke-linecap="round" opacity=".45"/>
  <path d="M74 98 L74 134 C86 146 114 146 126 134 L126 98 Z" fill="${e.shade}" stroke="${vT}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M82 134 C90 140 110 140 118 134" fill="none" stroke="${vT}" stroke-width="2.5" opacity=".5"/>`}function ST(e){return`
  <path d="M59 70 C50 67 47 80 52 89 C55 95 62 95 64 90" fill="${e.base}" stroke="${vT}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M141 70 C150 67 153 80 148 89 C145 95 138 95 136 90" fill="${e.shade}" stroke="${vT}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M100 24 C127 24 141 45 141 71 C141 92 137 106 128 117 C120 127 110 131 100 131 C90 131 80 127 72 117 C63 106 59 92 59 71 C59 45 73 24 100 24 Z" fill="${e.base}" stroke="${vT}" stroke-width="4"/>
  <path d="M121 30 C135 39 141 55 141 71 C141 92 137 106 128 117 C123 111 126 96 126 80 C126 58 123 42 121 30 Z" fill="${e.shade}"/>`}function CT(){let e=yT.demir;return`${xT(e)}${ST(e)}
  <ellipse cx="84" cy="40" rx="13" ry="6" transform="rotate(-24 84 40)" fill="#fff" opacity=".32"/>
  <path d="M69 59 L96 68 L95 75 L68 66 Z" fill="${vT}"/>
  <path d="M131 59 L104 68 L105 75 L132 66 Z" fill="${vT}"/>
  <path d="M73 76 C80 71.5 90 73 95 78 C88 82.5 79 82 73 76 Z" fill="#fff" stroke="${vT}" stroke-width="2.5"/>
  <path d="M127 76 C120 71.5 110 73 105 78 C112 82.5 121 82 127 76 Z" fill="#fff" stroke="${vT}" stroke-width="2.5"/>
  <circle cx="87" cy="77.5" r="3.4" fill="${vT}"/><circle cx="113" cy="77.5" r="3.4" fill="${vT}"/>
  <path d="M96 80 L93 95 C88 97 87 102 91 104 C96 106.5 104 106.5 109 104 C113 102 112 97 107 95 L104 80" fill="${e.shade}" stroke="${vT}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M60 82 C60 110 72 134 100 139 C128 134 140 110 140 82 C136 96 129 104 123 106 C115 100 108 99 100 101 C92 99 85 100 77 106 C71 104 64 96 60 82 Z" fill="#1d1210" stroke="${vT}" stroke-width="3.5" stroke-linejoin="round"/>
  <path d="M70 112 L74 120 M80 124 L83 131 M120 124 L117 131 M130 112 L126 120" stroke="#3b2a24" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M87 111 C94 108.5 106 108.5 113 111 L111 119 C104 121.5 96 121.5 89 119 Z" fill="#fff" stroke="${vT}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M88 115 H112 M94 110 V120 M100 109.5 V121 M106 110 V120" stroke="${vT}" stroke-width="1.6"/>
  <path d="M117 46 l6 -4 M120 52 l6 -3" stroke="${e.shade}" stroke-width="2.5" stroke-linecap="round"/>`}function wT(){let e=yT.yildirim;return`${xT(e)}
  <path d="M113 144 L93 174 L105 174 L92 206 L122 166 L109 166 L120 144 Z" fill="#2ee6ff" stroke="${vT}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M112 150 L100 169" stroke="#c9fbff" stroke-width="2" stroke-linecap="round"/>
  ${ST(e)}

  <path d="M64 58 C66 40 78 30 86 30 L86 52 C78 54 70 56 64 58 Z M136 58 C134 40 122 30 114 30 L114 52 C122 54 130 56 136 58 Z" fill="#e2a982" opacity=".75"/>
  <path d="M83 37 L72 4 L89 17 L88 -20 L101 9 L109 -26 L112 11 L127 -4 L118 37 C108 31.5 93 31.5 83 37 Z" fill="#ffd23f" stroke="${vT}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M109 -26 L112 11 L127 -4 L118 37 C114 34.5 110 33.5 106 33 L106 6 Z" fill="#f59f00"/>
  <path d="M90 -8 L93 14 M79 10 L86 24 M100 4 L101 18" stroke="#fff6c4" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
  <path d="M70 62 L95 67 L94 73 L69 68 Z" fill="#c98a12" stroke="${vT}" stroke-width="2"/>
  <path d="M130 62 L105 67 L106 73 L131 68 Z" fill="#c98a12" stroke="${vT}" stroke-width="2"/>
  <path d="M73 77 C80 72.5 90 74 95 79 C88 83.5 79 83 73 77 Z" fill="#fff" stroke="${vT}" stroke-width="2.5"/>
  <path d="M127 77 C120 72.5 110 74 105 79 C112 83.5 121 83 127 77 Z" fill="#fff" stroke="${vT}" stroke-width="2.5"/>
  <circle cx="87" cy="78.5" r="3.6" fill="#2e7bff" stroke="${vT}" stroke-width="1.4"/><circle cx="113" cy="78.5" r="3.6" fill="#2e7bff" stroke="${vT}" stroke-width="1.4"/>
  <circle cx="87" cy="78.5" r="1.4" fill="${vT}"/><circle cx="113" cy="78.5" r="1.4" fill="${vT}"/>
  <path d="M98 82 L95 96 C92 98 92 102 95 103 C98 104.5 102 104.5 105 103 C108 102 108 98 105 96" fill="${e.shade}" stroke="${vT}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M84 109 C92 104 108 104 116 109 C113 121 104 125 100 125 C96 125 87 121 84 109 Z" fill="#5a0f1d" stroke="${vT}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M86 109.5 C94 106 106 106 114 109.5 L112.5 113 C104 111 96 111 87.5 113 Z" fill="#fff"/>
  <path d="M93 121 C97 118.5 103 118.5 107 121" stroke="#ff6b81" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M97 127 C99 129 101 129 103 127" fill="none" stroke="${vT}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
  <path d="M75 46 C82 41 92 40 98 41" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".35" fill="none"/>`}var TT={demir:`demir`,yildirim:`yildirim`,kralice:`demir`,firtina:`yildirim`};function ET(e,t){let n=TT[e],r=n===`demir`?CT():wT();return t===`head`?`<svg viewBox="${n===`demir`?`42 18 116 116`:`42 6 116 116`}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${r}</svg>`:`<svg viewBox="-6 -40 212 266" preserveAspectRatio="xMidYMax meet" aria-hidden="true">${r}${bT(46,172,-12,!1)+bT(156,166,10,!0)}</svg>`}function DT(e,t,n){e.innerHTML=ET(t,n);let r=new Image;r.alt=``,r.decoding=`async`,r.className=`nk-face is-${n}`,r.draggable=!1,r.addEventListener(`load`,()=>{(e.dataset.f===void 0||e.dataset.f===t)&&(e.querySelector(`svg`)?.remove(),e.appendChild(r))}),r.src=`assets/fighters/${t}-portrait.webp`}var OT={demir:{style:`GÜÇ`,tagline:`Aparkatı en sert olan.`,color:`#ff8a1f`,color2:`#ff3d5a`},yildirim:{style:`HIZ`,tagline:`Direkti göz açıp kapayıncaya kadar indirir.`,color:`#2ee6ff`,color2:`#3d6bff`},kralice:{style:`DENGE`,tagline:`Her yumrukta dengeli ve tehlikeli.`,color:`#b45cff`,color2:`#ffcf3d`},firtina:{style:`KOMBO`,tagline:`Kroşeyle rakibi döndürür.`,color:`#ff4fa3`,color2:`#3dff8a`}},kT=Yv;function AT(e){return Math.max(...kT.map(t=>Jv[t].add[e]))}var jT=class{layer;onPick;root=null;tiles=new Map;sel=kT[0];current=null;closing=!1;nameBox=null;styleTag=null;tagline=null;stats=new Map;pick=null;detail=null;constructor(e,t){this.layer=e,this.onPick=t,document.addEventListener(`keydown`,e=>{this.root&&!this.closing&&(e.key===`Escape`&&this.root.querySelector(`.nk-fs-x`)?(e.preventDefault(),this.close()):/^[1-9]$/.test(e.key)&&Number(e.key)<=kT.length?this.select(kT[Number(e.key)-1],!1):(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&this.step(e.key===`ArrowLeft`?-1:1))})}get isOpen(){return this.root!==null}open(e,t,n=null){if(this.root)return;this.closing=!1,this.current=e,this.sel=e??`demir`;let r=$(`div`,`nk-fs`,this.layer);this.root=r,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,`Boksörünü seç`),r.addEventListener(`pointerdown`,e=>e.stopPropagation());let i=$(`div`,`nk-fs-bg`,r);$(`i`,`nk-fs-glow is-demir`,i),$(`i`,`nk-fs-glow is-yildirim`,i),$(`i`,`nk-fs-dots`,i);let a=$(`i`,`nk-fs-rays`,i),o=$(`div`,`nk-fs-head`,r),s=innerWidth>=900&&innerWidth>innerHeight,c=null;if(n){c=$(`div`,`nk-fs-result is-${n}`,o);let e=n===`won`;c.appendChild(Mw(e?`KAZANDIN!`:`KAYBETTİN`,{size:s?50:38,fill:e?[`#fbffb0`,`#e4ff3a`,`#43d63a`]:[`#ffd0d6`,`#ff4a64`,`#b3001f`],stroke:e?`#0a1f0c`:`#1a0008`,strokeW:s?9:7,shadow:e?`#0d4a17`:`#3a0010`,shadowOffset:[3,4],halftone:null,rim:`#ffffff`})),$(`span`,`nk-fs-result-sub`,c,e?`RAKİBİNİ NAKAVT ETTİN`:`NAKAVT OLDUN`)}else $(`div`,`nk-fs-logo`,o).appendChild(Mw(`NAKAVT`,{size:34,fill:[`#fff6c9`,`#ffd23f`,`#ff8a1f`],stroke:`#12071f`,strokeW:7,shadow:`#ff2d7a`,shadowOffset:[3,4],halftone:null}));$(`div`,`nk-fs-title`,o).appendChild(Mw(`BOKSÖRÜNÜ SEÇ`,{size:s?64:44,fill:[`#ffffff`,`#f4ecff`,`#d9c8ff`],stroke:`#12071f`,strokeW:s?10:8,shadow:`#ff2d7a`,shadowOffset:[4,5],halftone:`#12071f`,halftoneOffset:[8,10]})),$(`div`,`nk-fs-sub`,o,n?`Yeni maç seçtiğin boksörle hemen başlar.`:`Seçmediğin boksörlerden biri rastgele rakibin olur.`);let l=$(`div`,`nk-fs-main`,r),u=$(`div`,`nk-fs-tiles`,l);this.tiles.clear();let d=[];for(let e of kT){let t=this.buildTile(e);u.appendChild(t.root),d.push(t.root),this.tiles.set(e,t)}this.detail=this.buildDetail(l),this.select(this.sel,!0),t&&Lw(`nk-fs-x`,r,iT.close,()=>this.close()).setAttribute(`aria-label`,`Kapat`);let f=W.timeline();f.fromTo(r,{opacity:0},{opacity:1,duration:.2,ease:`power1.out`},0).fromTo(a,{rotation:-30,scale:.6},{rotation:0,scale:1,duration:.8,ease:`power2.out`},0).fromTo(o,{y:-40,opacity:0},{y:0,opacity:1,duration:.35,ease:`back.out(2)`},.05).fromTo(this.detail,{y:30,opacity:0},{y:0,opacity:1,duration:.4,ease:`power2.out`},.3),d.forEach((e,t)=>{f.fromTo(e,{scale:.6,opacity:0,rotation:t%2==0?-6:6},{scale:1,opacity:1,rotation:0,duration:.45,ease:`back.out(1.8)`},.12+t*.06)}),c&&f.fromTo(c,{scale:2.4,rotation:-14,opacity:0},{scale:1,rotation:-4,opacity:1,duration:.22,ease:`power3.in`},.12).to(c,{keyframes:{x:[-7,6,-3,0]},duration:.2,ease:`none`},.34),W.to(a,{rotation:360,duration:90,ease:`none`,repeat:-1,delay:.8}),this.pick?.focus({preventScroll:!0})}close(){let e=this.root;e&&!this.closing&&(this.closing=!0,W.to(e,{opacity:0,scale:1.04,duration:.3,ease:`power2.in`,delay:.25,onComplete:()=>{W.killTweensOf(e.querySelectorAll(`*`)),e.remove(),this.root===e&&(this.root=null),this.closing=!1}}))}step(e){let t=kT.indexOf(this.sel);this.select(kT[(t+e+kT.length)%kT.length],!1)}select(e,t){this.sel=e;for(let[n,r]of this.tiles){let i=n===e;r.root.classList.toggle(`is-selected`,i),r.root.setAttribute(`aria-pressed`,String(i)),t||W.to(r.root,{scale:i?1.04:1,duration:.25,ease:`back.out(2.5)`,overwrite:`auto`})}let n=Jv[e],r=OT[e],i=this.detail;if(i&&this.nameBox&&this.styleTag&&this.tagline&&this.pick){i.style.setProperty(`--c1`,r.color),i.style.setProperty(`--c2`,r.color2),this.nameBox.replaceChildren(Mw(n.name,{size:50,fill:[`#ffffff`,`#ffffff`,`#e6dcff`],stroke:`#12071f`,strokeW:9,shadow:r.color,shadowOffset:[4,5],halftone:null})),Rw(this.styleTag,r.style),Rw(this.tagline,r.tagline);for(let e of Zv){let r=this.stats.get(e);if(!r)continue;Rw(r.val,Hw(n.add[e]));let i=n.add[e]/AT(e);t?W.set(r.fill,{scaleX:i}):W.fromTo(r.fill,{scaleX:0},{scaleX:i,duration:.4,ease:`power3.out`,overwrite:`auto`})}this.pick.setAttribute(`aria-label`,`${n.name} seç`),Rw(this.pick,e===this.current?`SEÇİLİ ✓`:`SEÇ`),this.pick.classList.toggle(`is-current`,e===this.current),t||W.fromTo(this.nameBox,{x:-16,opacity:0},{x:0,opacity:1,duration:.25,ease:`power2.out`,overwrite:`auto`})}}choose(e){if(this.closing)return;this.onPick(e);let t=this.tiles.get(e);if(t){t.root.classList.add(`is-chosen`),W.fromTo(t.root,{scale:1.12},{scale:1.06,duration:.35,ease:`back.out(3)`,overwrite:`auto`});let e=$(`i`,`nk-fs-flash`,t.root);W.fromTo(e,{opacity:.9},{opacity:0,duration:.4,ease:`power1.out`})}for(let[t,n]of this.tiles)t!==e&&W.to(n.root,{opacity:.35,scale:.94,filter:`grayscale(0.8)`,duration:.25,overwrite:`auto`});this.close()}buildTile(e){let t=Jv[e],n=OT[e],r=$(`button`,`nk-fs-tile is-${e}`);r.type=`button`,r.addEventListener(`click`,()=>{this.sel===e?this.choose(e):this.select(e,!1)}),r.setAttribute(`aria-label`,`${t.name} bilgisi`),r.style.setProperty(`--c1`,n.color),r.style.setProperty(`--c2`,n.color2);let i=$(`span`,`nk-fs-art`,r);$(`i`,`nk-fs-art-glow`,i),DT($(`span`,`nk-fs-face`,i),e,`head`);let a=$(`span`,`nk-fs-tile-name`,r);return $(`b`,``,a,t.name),$(`i`,``,a,n.style),{root:r,art:i}}buildDetail(e){let t=$(`div`,`nk-fs-detail`,e),n=$(`div`,`nk-fs-name`,t);this.nameBox=$(`span`,`nk-fs-name-art`,n),this.styleTag=$(`span`,`nk-fs-style`,n),this.tagline=$(`div`,`nk-fs-tagline`,t);let r=$(`div`,`nk-fs-stats`,t);this.stats.clear();for(let e of Zv){let t=$(`div`,`nk-fs-stat is-${e}`,r),n=$(`span`,`nk-fs-stat-ico`,t);n.innerHTML=rT[e],$(`span`,`nk-fs-stat-lbl`,t,Qv[e]);let i=$(`i`,``,$(`span`,`nk-fs-stat-bar`,t));W.set(i,{scaleX:0});let a=$(`b`,`nk-fs-stat-val`,t);this.stats.set(e,{fill:i,val:a})}return this.pick=Lw(`nk-fs-pick`,t,`SEÇ`,()=>this.choose(this.sel)),t}},MT={cool:[`#fff7c2`,`#ffd23f`,`#ff9a1f`],warm:[`#fff1a8`,`#ffb21f`,`#ff5a1f`],hot:[`#ffe2f4`,`#ff6bd0`,`#ff2d55`]},NT=class{layer;rect;count=0;constructor(e,t){this.layer=e,this.rect=t}fly(e,t){let n=this.layer.clientWidth||innerWidth,r=this.layer.clientHeight||innerHeight,i=n>=900&&n>r?Math.min(150,r*.17):Math.min(96,n*.23),a=t>=1500?`hot`:t>=500?`warm`:`cool`,o=this.count++%2==0?-1:1,s=$(`div`,`nk-fly`,this.layer),c=Iw(i*1.7,a===`hot`?`#ff9ad8`:`#ffe066`,null,12);c.classList.add(`nk-fly-burst`),s.appendChild(c);let l=$(`div`,`nk-fly-row`,s),u=Bw(t),d=[];[...u].forEach((e,t)=>{let n=Mw(e,{size:e===`,`||e===`.`?i*.92:i,fill:MT[a],stroke:`#12071f`,strokeW:i*.13,shadow:`#12071f`,shadowOffset:[i*.04,i*.06],halftone:`#12071f`,halftoneOffset:[i*.1,i*.12],rim:`#ffffff`});n.style.transform=`rotate(${(t%2==0?-1:1)*(3+t*7%5)}deg) translateY(${t%3*i*.03}px)`,l.appendChild(n),d.push(n)}),Nw(d,i*.04),[...u].forEach((e,t)=>{if((e===`,`||e===`.`)&&d[t]){let e=d[t];e.style.marginLeft=`${parseFloat(e.style.marginLeft||`0`)+i*.07}px`,e.style.marginRight=`${i*.07}px`}});let f=i*.62*u.length,p=o*Math.min(n*.2,170),m=Math.max(f/2+8,Math.min(n-f/2-8,e.x+p)),h=this.rect(),g=Math.min(h.top+h.height-i*.6,Math.max(h.top+i*.9,e.y-i*.5)),_=o*(8+this.count%3*3);W.set(s,{left:e.x,top:e.y,xPercent:-50,yPercent:-50,scale:.25,rotation:_*.4,opacity:1}),W.set(c,{xPercent:-50,yPercent:-50,left:`50%`,top:`50%`,scale:.2,opacity:1,rotation:0}),W.timeline({onComplete:()=>s.remove()}).to(s,{left:m,top:g,duration:.2,ease:`power3.out`},0).to(s,{scale:1.12,rotation:-_*.6,duration:.2,ease:`back.out(2.2)`},0).to(c,{scale:1.25,rotation:25,duration:.18,ease:`power2.out`},0).to(c,{opacity:0,scale:1.5,duration:.2,ease:`power1.in`},.14).from(d,{scale:.2,y:i*.3,duration:.22,ease:`back.out(3)`,stagger:.035,transformOrigin:`50% 80%`},.02).to(s,{top:g-i*.3,scale:1,duration:.5,ease:`sine.out`},.2).to(s,{scale:.55,opacity:0,top:g-i*.6,duration:.2,ease:`power2.in`},.7)}},PT=class{layer;rect;root=null;loop=null;constructor(e,t){this.layer=e,this.rect=t}get visible(){return this.root!==null}show(){if(this.root)return;let e=this.rect(),t=$(`div`,`nk-hint`,this.layer);this.root=t,t.style.left=`${e.left+e.width/2}px`,t.style.top=`${e.top+e.height*.7}px`;let n=$(`div`,`nk-hint-box`,t),r=$(`span`,`nk-hint-glove`,n);r.innerHTML=rT.direkt;let i=$(`i`,`nk-hint-ring`,n),a=$(`span`,`nk-hint-hand`,n);a.innerHTML=iT.hand;let o=$(`div`,`nk-hint-text`,t);$(`span`,``,o,`ÇİFT DOKUN`),$(`i`,``,o,`|`),$(`b`,``,o,`DİREKT YUMRUK`),W.set(t,{xPercent:-50,yPercent:-50}),W.fromTo(t,{opacity:0,scale:.85},{opacity:1,scale:1,duration:.3,ease:`back.out(2)`});let s=W.timeline({repeat:-1,repeatDelay:.5});for(let e of[.2,.48])s.to(a,{y:6,scale:.9,duration:.08,ease:`power2.in`},e).to(a,{y:0,scale:1,duration:.12,ease:`power2.out`},e+.08).fromTo(i,{scale:.4,opacity:.9},{scale:1.5,opacity:0,duration:.4,ease:`power2.out`},e+.06);s.fromTo(r,{x:0,scale:1},{x:10,scale:1.18,duration:.1,ease:`power3.out`,yoyo:!0,repeat:1},.56),this.loop=s}hide(){let e=this.root;e&&(this.root=null,this.loop?.kill(),this.loop=null,W.to(e,{opacity:0,scale:.9,duration:.2,ease:`power2.in`,onComplete:()=>e.remove()}))}};function FT(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=String(t%60).padStart(2,`0`);return n>0?`${n}:${String(r).padStart(2,`0`)}:${i}`:`${r}:${i}`}var IT=10,LT=4,RT=`<svg viewBox="-12 -12 24 24" aria-hidden="true"><polygon points="0,-11 3,-3.5 11,-3.5 4.6,1.6 7,10 0,5 -7,10 -4.6,1.6 -11,-3.5 -3,-3.5" fill="#ffe14d" stroke="#12071f" stroke-width="2" stroke-linejoin="round"/></svg>`,zT=class{pic;root;fill;ghost;danger;value=1;pulse=null;settle=null;constructor(e,t,n){this.pic=n,this.root=$(`div`,`nk-bar is-${t}`,e);let r=$(`div`,`nk-bar-track`,this.root);this.ghost=$(`i`,`nk-bar-ghost`,r),this.fill=$(`i`,`nk-bar-fill`,r),this.danger=$(`i`,`nk-bar-danger`,r),$(`i`,`nk-bar-gloss`,r);for(let e=1;e<10;e++)$(`i`,`nk-bar-tick`,r).style.left=`${e*10}%`;W.set([this.fill,this.ghost],{scaleX:1}),W.set(this.danger,{opacity:0})}set(e,t,n=0){let r=Math.max(0,Math.min(1,e));if(Math.abs(r-this.value)<1e-4&&t)return;let i=r<this.value;this.value=r,W.killTweensOf([this.fill,this.ghost]),this.settle?.kill(),this.settle=null;let a=()=>{this.settle=null,this.root.classList.toggle(`is-low`,r<.25),this.setDanger(r>0&&r<.2)};t?i?(W.to(this.fill,{scaleX:r,duration:.12,ease:`power3.out`,delay:n}),W.to(this.ghost,{scaleX:r,duration:.55,ease:`power2.inOut`,delay:n+.42}),W.fromTo(this.root,{x:0},{keyframes:{x:[-5,4,-3,2,0]},duration:.3,ease:`none`,delay:n}),W.fromTo(this.pic,{x:0,rotation:0},{keyframes:{x:[-6,5,-3,0],rotation:[-6,4,-2,0]},duration:.32,ease:`none`,delay:n}),W.fromTo(this.pic,{filter:`brightness(1.9) saturate(0.4)`},{filter:`brightness(1) saturate(1)`,duration:.35,ease:`power2.out`,delay:n})):(n>0?W.set(this.ghost,{scaleX:r,delay:n}):W.set(this.ghost,{scaleX:r}),W.to(this.fill,{scaleX:r,duration:.7,ease:`power2.out`,delay:n})):W.set([this.fill,this.ghost],{scaleX:r}),t&&n>0?this.settle=W.delayedCall(n,a):a()}setDanger(e){e!==(this.pulse!==null)&&(e?this.pulse=W.fromTo(this.danger,{opacity:0},{opacity:.85,duration:.32,ease:`sine.inOut`,yoyo:!0,repeat:-1}):(this.pulse?.kill(),this.pulse=null,W.set(this.danger,{opacity:0})))}},BT=class{h;cornerL;cornerR;fight;sessionVal;soundBtn;swapBtn;picL;picR;stars;dizzy=null;dizzyNext=null;nameL;nameR;tags;barL;barR;hex;hexVal;hexFlash;win;winVal;winCounter;soundOn=!0;fighter=null;opponent=null;hexK=100;mood=`live`;winShown=!1;constructor(e){this.h=e,this.cornerL=$(`div`,`nk-corner is-l`);let t=$(`div`,`nk-brand`,this.cornerL),n=()=>Mw(`NAKAVT`,{size:38,fill:[`#fff6c9`,`#ffd23f`,`#ff8a1f`],stroke:`#12071f`,strokeW:7,shadow:`#ff2d7a`,shadowOffset:[3,4],halftone:null});t.appendChild(n()),document.fonts?.ready.then(()=>{t.replaceChildren(n()),this.fitTags()});let r=$(`div`,`nk-badges`,this.cornerL);$(`span`,`nk-badge-demo`,r,`DEMO`);let i=$(`span`,`nk-session`,r);i.innerHTML=iT.timer,this.sessionVal=$(`b`,``,i,`0:00`),this.cornerR=$(`div`,`nk-corner is-r`),this.swapBtn=Lw(`nk-icon-btn nk-swap`,this.cornerR,`${iT.swap}<span>BOKSÖR</span>`,()=>this.h.openFighters()),this.swapBtn.setAttribute(`aria-label`,`Boksör değiştir`),this.soundBtn=Lw(`nk-icon-btn`,this.cornerR,iT.soundOn,()=>this.h.toggleSound()),this.soundBtn.setAttribute(`aria-label`,`Ses aç/kapa`),Lw(`nk-icon-btn`,this.cornerR,iT.rules,()=>this.h.openRules()).setAttribute(`aria-label`,`Kurallar`),this.fight=$(`div`,`nk-fight`);let a=$(`div`,`nk-side is-l`,this.fight),o=$(`div`,`nk-side is-r`,this.fight),s=$(`div`,`nk-pic-wrap`,a),c=$(`div`,`nk-pic-wrap`,o);this.picL=$(`div`,`nk-pic`,s),this.picR=$(`div`,`nk-pic`,c),this.stars=$(`div`,`nk-stars`,c);for(let e=0;e<3;e++)$(`i`,``,this.stars).innerHTML=RT;W.set(this.stars,{opacity:0}),this.picL.addEventListener(`click`,()=>{this.swapBtn.disabled||this.h.openFighters()}),this.barL=new zT(a,`l`,this.picL),this.barR=new zT(o,`r`,this.picR);let l=$(`div`,`nk-tag`,a);this.nameL=$(`b`,`nk-name`,l,`DEMİR`),$(`span`,`nk-role is-you`,l,`SEN`);let u=$(`div`,`nk-tag`,o);$(`span`,`nk-role`,u,`RAKİP`),this.nameR=$(`b`,`nk-name`,u,`YILDIRIM`),this.tags=[l,u];let d=$(`div`,`nk-mid`,this.fight);this.hex=$(`div`,`nk-hex`,d);let f=Aw(`svg`,{viewBox:`0 0 164 72`,preserveAspectRatio:`none`,"aria-hidden":`true`},this.hex),p=Aw(`defs`,{},f),m=Aw(`linearGradient`,{id:`nk-hex-edge`,x1:0,y1:0,x2:1,y2:1},p);Aw(`stop`,{offset:0,"stop-color":`#ff4fd8`},m),Aw(`stop`,{offset:.5,"stop-color":`#a35bff`},m),Aw(`stop`,{offset:1,"stop-color":`#2ee6ff`},m);let h=Aw(`linearGradient`,{id:`nk-hex-fill`,x1:0,y1:0,x2:0,y2:1},p);Aw(`stop`,{offset:0,"stop-color":`#2b1258`},h),Aw(`stop`,{offset:1,"stop-color":`#0f0624`},h);let g=`24,3 140,3 161,36 140,69 24,69 3,36`;Aw(`polygon`,{points:g,fill:`url(#nk-hex-fill)`,stroke:`#12071f`,"stroke-width":7,"stroke-linejoin":`round`},f),Aw(`polygon`,{points:g,fill:`none`,stroke:`url(#nk-hex-edge)`,"stroke-width":3.2,"stroke-linejoin":`round`,class:`nk-hex-edge`},f),Aw(`polygon`,{points:`30,10 134,10 152,36 134,62 30,62 12,36`,fill:`none`,stroke:`rgba(255,255,255,.12)`,"stroke-width":1.5},f),Aw(`path`,{d:`M30 10 H134 L143 23 H21 Z`,fill:`rgba(255,255,255,.07)`},f),this.hexFlash=$(`i`,`nk-hex-flash`,this.hex),W.set(this.hexFlash,{opacity:0}),this.hexVal=$(`div`,`nk-hex-val`,this.hex),this.writeHex(100),this.win=$(`div`,`nk-win`,d),this.winVal=$(`b`,``,this.win,Fi(0)),this.winCounter=new Gw(this.winVal,Fi),W.set(this.win,{yPercent:-100,opacity:0})}setSession(e){Rw(this.sessionVal,FT(e))}render(e,t){t!==this.soundOn&&(this.soundOn=t,this.soundBtn.innerHTML=t?iT.soundOn:iT.soundOff,this.soundBtn.classList.toggle(`is-off`,!t));let n=e.state===`BEKLE`;if(zw(this.swapBtn,!n),this.picL.classList.toggle(`is-clickable`,n),e.fighter!==this.fighter||e.opponent!==this.opponent){let t=this.fighter===null;this.fighter=e.fighter,this.opponent=e.opponent,this.picL.dataset.f=e.fighter,this.picR.dataset.f=e.opponent,DT(this.picL,e.fighter,`head`),DT(this.picR,e.opponent,`head`),Rw(this.nameL,Jv[e.fighter].name),Rw(this.nameR,Jv[e.opponent].name),this.fitTags(),t||W.fromTo([this.picL,this.picR],{scale:.6,rotation:-8},{scale:1,rotation:0,duration:.45,ease:`back.out(2.5)`})}}fitTags(){for(let e of this.tags){let t=e.querySelector(`.nk-name`);if(!t)continue;e.classList.remove(`is-tight`),t.classList.remove(`is-clip`),t.style.removeProperty(`font-size`);let n=getComputedStyle(e),r=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)+LT;if(e.clientWidth===0||(()=>{let t=[...e.children].map(e=>e.getBoundingClientRect().width).filter(e=>e>0);return t.reduce((e,t)=>e+t,0)+(parseFloat(n.columnGap)||0)*Math.max(0,t.length-1)})()<=r)continue;e.classList.add(`is-tight`);let i=t.getBoundingClientRect().width;if(i<=r)continue;let a=parseFloat(getComputedStyle(t).fontSize),o=Math.max(IT,Math.floor(a*r/i*2)/2);t.style.fontSize=`${o}px`,t.getBoundingClientRect().width>r&&t.classList.add(`is-clip`)}}setPlayerHealth(e,t,n=0){this.barL.set(e,t,n)}setOpponentHealth(e,t,n=0){this.barR.set(e,t,n);let r=e>0&&e<.2;this.dizzyNext?.on!==r&&(this.dizzyNext?.call.kill(),this.dizzyNext=null,t&&n>0?this.dizzyNext={on:r,call:W.delayedCall(n,()=>{this.dizzyNext=null,this.setDizzy(r)})}:this.setDizzy(r))}setDizzy(e){if(e===(this.dizzy!==null))return;if(W.killTweensOf(this.stars),!e){this.dizzy?.kill(),this.dizzy=null,W.to(this.stars,{opacity:0,duration:.2});return}let t=[...this.stars.children],n=this.picR.offsetWidth*.55||26,r={a:0},i=()=>t.forEach((e,i)=>{let a=r.a+i/t.length*Math.PI*2;W.set(e,{x:Math.cos(a)*n,y:Math.sin(a)*n*.32,scale:.75+.35*(Math.sin(a)+1)/2,rotation:a*180/Math.PI})});i(),W.fromTo(this.stars,{opacity:0},{opacity:1,duration:.25}),this.dizzy=W.to(r,{a:Math.PI*2,duration:1.4,ease:`none`,repeat:-1,onUpdate:i})}get multiplier(){return this.hexK}setMultiplier(e,t=`live`){this.hexK=e,this.setMood(t),this.writeHex(e)}bump(e,t){let n=e>this.hexK;if(this.hexK=e,this.setMood(t),this.writeHex(e),W.killTweensOf([this.hex,this.hexVal,this.hexFlash]),t===`lost`){W.fromTo(this.hex,{scale:1.18},{scale:1,duration:.5,ease:`elastic.out(1, 0.4)`}),W.fromTo(this.hex,{x:0},{keyframes:{x:[-9,8,-6,4,-2,0]},duration:.45,ease:`none`}),W.fromTo(this.hexFlash,{opacity:.95,scale:1},{opacity:0,scale:1.45,duration:.5,ease:`power2.out`});return}let r=n?Math.min(1.5,1.22+(e-100)/4e3):1.15;W.fromTo(this.hex,{scale:r,rotation:-3},{scale:1,rotation:0,duration:.55,ease:`elastic.out(1.1, 0.45)`}),W.fromTo(this.hexVal,{y:-6},{y:0,duration:.3,ease:`back.out(3)`}),W.fromTo(this.hexFlash,{opacity:1,scale:1},{opacity:0,scale:1.6,duration:.45,ease:`power2.out`})}setWin(e,t,n=`live`){this.win.classList.toggle(`is-lost`,n===`lost`),this.win.classList.toggle(`is-won`,n===`won`||n===`ko`);let r=e!==null;r!==this.winShown&&(this.winShown=r,W.killTweensOf(this.win,`yPercent,opacity`),r?W.to(this.win,{yPercent:0,opacity:1,duration:.3,ease:`back.out(2)`}):W.to(this.win,{yPercent:-100,opacity:0,duration:.2,ease:`power2.in`})),e!==null&&(t&&e>this.winCounter.value?(this.winCounter.set(e,.45),W.fromTo(this.win,{scale:1.25},{scale:1,duration:.4,ease:`back.out(3)`,overwrite:`auto`})):this.winCounter.set(e))}hexCenter(){let e=this.hex.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}setMood(e){e!==this.mood&&(this.mood=e,this.hex.classList.toggle(`is-lost`,e===`lost`),this.hex.classList.toggle(`is-won`,e===`won`),this.hex.classList.toggle(`is-ko`,e===`ko`))}writeHex(e){let t=Vw(e);this.hexVal.dataset.v!==t&&(this.hexVal.dataset.v=t,this.hexVal.innerHTML=`<b>${t.slice(0,-1)}</b><small>x</small>`)}},VT=class{layer;stack=[];constructor(e){this.layer=e,document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.stack.length&&(e.preventDefault(),this.stack[this.stack.length-1].close())})}get isOpen(){return this.stack.length>0}open(e){let t=$(`div`,`nk-modal-wrap`,this.layer);t.addEventListener(`pointerdown`,e=>e.stopPropagation());let n=$(`div`,`nk-modal-back`,t),r=$(`div`,`nk-modal`,t);r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,e.title),$(`i`,`nk-modal-edge`,r);let i=$(`div`,`nk-modal-head`,r),a=$(`div`,`nk-modal-titles`,i);$(`h2`,`nk-modal-title`,a,e.title),e.subtitle&&$(`div`,`nk-modal-sub`,a,e.subtitle);let o=!1,s={el:r,close:()=>{if(o)return;o=!0;let i=this.stack.indexOf(s);i>=0&&this.stack.splice(i,1),W.killTweensOf([r,n]),W.to(n,{opacity:0,duration:.14,ease:`power1.in`}),W.to(r,{opacity:0,scale:.96,y:10,duration:.14,ease:`power2.in`,onComplete:()=>t.remove()}),e.onClose?.()}};return Lw(`nk-modal-x`,i,iT.close,()=>s.close()).setAttribute(`aria-label`,`Kapat`),$(`div`,`nk-modal-body`,r).appendChild(e.body),n.addEventListener(`pointerdown`,()=>s.close()),this.stack.push(s),W.fromTo(n,{opacity:0},{opacity:1,duration:.18,ease:`power1.out`}),W.fromTo(r,{opacity:0,scale:.92,y:16},{opacity:1,scale:1,y:0,duration:.28,ease:`back.out(1.8)`}),s}closeAll(){for(let e of[...this.stack])e.close()}},HT=e=>String(e).replace(`.`,`,`),UT=HT(ry.num/ry.den),WT=`%${HT(Uv/100)}`;function GT(e){return`%${HT(Math.round(e*1e3)/10)}`}function KT(e,t){let n=$(`section`,`nk-rules-sec`,e);return $(`h3`,`nk-rules-h`,n,t),n}function qT(){let e=$(`div`,`nk-rules`),t=$(`ol`,`nk-rules-list`,KT(e,`NASIL OYNANIR`));for(let e of[`Boksörünü seç: gong çalar ve maç başlar. Bahsini seç; raundun ilk yumruğu bahsi bakiyeden düşer. Çarpan x1,00'dan başlar.`,`Her hamlede bir yumruk seç: DİREKT, KROŞE ya da APARKAT. Butonlarda yumruğun çarpana ekleyeceği değer (ör. +0,30x) ve şu anki isabet şansı yazar.`,`İsabet eden yumruğun değeri çarpana eklenir ve rakibin canı düşer. Mevcut kazancın bahis × çarpandır.`,`En az bir isabetten sonra PARAYI AL ile kazancını istediğin an alabilirsin. Raunt biter, dövüş sürer (BİTİR ONU! dışında); sonraki yumruk yeni bahsi başlatır.`,`Rakip yumruğu savuşturursa KARŞI YUMRUK yersin: raundun bahsi kaybedilir, canın 20 düşer ve rakibin canı 15 dolar. Rakip son canındaysa en az 30'a çıkar ve BİTİR ONU! biter.`,`İki boksörün de 100 canı vardır ve canlar maç boyunca kalıcıdır (rakip yalnızca karşı yumruk attığında can kazanır). Rakibin canı 20'ye inince BİTİR ONU! anı gelir: rakip sersemlemiştir ama yumruklar onu yere seremez. Vurmaya devam edip çarpanı büyütebilirsin; rakip her an karşılık verebilir.`,`NAKAVT yalnızca ana butonla olur: BİTİR ONU! anında PARAYI AL butonu NAKAVT ET olur ve yanında K.O. belirir. Bastığında raunt o anki çarpanla ödenir, rakip yere serilir ve maçı kazanırsın; x50 tavanına bu anda ulaşırsan nakavt kendiliğinden olur. Canın sıfırlanırsa NAKAVT OLURSUN ve maçı kaybedersin.`,`Ringe çift dokunmak DİREKT yumruk atar. Klavye: 1 / 2 / 3 yumruklar, Boşluk ana buton.`])$(`li`,``,t,e);let n=KT(e,`BOKSÖRLER`),r=$(`table`,`nk-rules-table`,n),i=$(`tr`,``,$(`thead`,``,r));$(`th`,``,i,`Boksör`);for(let e of Zv){let t=$(`th`,`is-${e}`,i),n=$(`span`,`nk-rules-ico`,t);n.innerHTML=rT[e],$(`span`,``,t,Qv[e])}let a=$(`tbody`,``,r);for(let e of Yv){let t=$(`tr`,``,a),n=$(`td`,`is-name`,t);$(`b`,``,n,Jv[e].name),$(`small`,``,n,OT[e].style);for(let n of Zv)$(`td`,`is-${n}`,t,Hw(Jv[e].add[n]))}$(`p`,`nk-rules-p`,n,`Rakibe verilen hasar: ${Yv.map(e=>`${Jv[e].name} ${Zv.map(t=>Jv[e].damage[t]).join(` / `)}`).join(`, `)} (${Zv.map(e=>Qv[e]).join(` / `)}).`),$(`p`,`nk-rules-p`,n,`Seçmediğin boksörlerden biri rastgele rakibin olur. Boksörünü yalnızca maçlar arasında değiştirebilirsin.`);let o=KT(e,`İSABET ŞANSI`);$(`p`,`nk-rules-p`,o,`İsabet olasılığı p = r × M / min(M + ek, x50,00). İlk yumrukta r = ${UT}, sonrakilerde 1. Rakip hasar aldıkça yumruklar daha kolay isabet eder:`);let s=$(`table`,`nk-rules-table`,o),c=$(`tr`,``,$(`thead`,``,s));$(`th`,``,c,`DEMİR`);for(let e of Zv)$(`th`,`is-${e}`,c,Qv[e]);let l=$(`tbody`,``,s);for(let[e,t,n]of[[`İlk yumruk`,100,!0],[`x3,00'te`,300,!1],[`x20,00'de`,2e3,!1]]){let r=$(`tr`,``,l);$(`td`,`is-name`,r,e);for(let e of Zv)$(`td`,`is-${e}`,r,GT(sy(t,Jv.demir.add[e],n)))}$(`p`,`nk-rules-p`,o,`Can sistemi olasılıkları etkilemez: nakavt, son candaki NAKAVT ET (PARAYI AL) basışıdır, yani yalnızca bir durdurma kuralıdır.`);let u=KT(e,`ÖDEME VE LİMİTLER`),d=$(`div`,`nk-facts`,u),f=(e,t,n=``)=>{let r=$(`div`,`nk-fact ${n}`,d);$(`span`,``,r,e),$(`b`,``,r,t)};return f(`RTP`,WT,`is-hi`),f(`Maksimum çarpan`,Vw(Wv),`is-hi`),f(`Kazanç kademeleri`,`≥ x5 BÜYÜK · ≥ x15 MEGA · x50 EFSANE`),f(`Bahis seviyeleri`,Ti.map(e=>`₺${e.toLocaleString(`tr-TR`)}`).join(`, `)),f(`Kazanç tavanı`,`${Fi(Gv)} (₺1.000 × x50 = ₺50.000, tavan devreye girmez)`),$(`p`,`nk-rules-p`,u,`Ödeme = bahis × çarpan. Her strateji için teorik RTP ${WT}'dir: ilk yumruk kenar payını taşır, sonraki her adım adildir. PARAYI AL ilk isabetten sonra açıldığı için ödeme her zaman bahisten büyüktür. Nakavtta raunt o anki çarpanla ödenir.`),$(`p`,`nk-rules-p`,KT(e,`DEMO`),`Bu bir demodur, gerçek para kullanılmaz. Sonuçlar tarayıcıda seed'li bir rastgele sayı üreteciyle, her yumrukta belirlenir; gerçek üründe RNG sunucu tarafında ve sertifikalı olur. Sayfa yenilenince yeni bir ₺10.000 demo oturumu başlar. 18 yaşından küçükler oynayamaz.`),e}var JT=Zv,YT={direkt:`1`,krose:`2`,aparkat:`3`},XT=class{onPunch;root;items=new Map;ready=!1;finish=!1;idle=null;constructor(e){this.onPunch=e,this.root=$(`div`,`nk-punches`);for(let e of JT){let t=$(`div`,`nk-punch is-${e}`,this.root),n=Lw(`nk-punch-btn`,t,``,()=>{this.press(e),this.onPunch(e)});n.setAttribute(`aria-label`,`${Qv[e]} yumruk (${YT[e]})`);let r=$(`i`,`nk-punch-glow`,n);$(`i`,`nk-punch-disc`,n);let i=$(`span`,`nk-punch-ico`,n);i.innerHTML=rT[e],$(`span`,`nk-punch-key`,n,YT[e]);let a=$(`i`,`nk-punch-wave`,t),o=$(`b`,`nk-punch-add`,$(`div`,`nk-punch-meta`,t),`+0,10x`);W.set(r,{opacity:0}),W.set(a,{opacity:0}),this.items.set(e,{root:t,btn:n,glow:r,wave:a,ico:i,add:o,lastChance:``})}}render(e){for(let[t,n]of this.items){if(zw(n.btn,!e.canPunch),Rw(n.add,Hw(e.add[t])),e.state===`YUMRUK`)continue;let r=`${Qv[t]} yumruk, ${Uw(e.chance[t])} isabet (${YT[t]})`;r!==n.lastChance&&(n.lastChance=r,n.btn.setAttribute(`aria-label`,r))}this.root.classList.toggle(`is-ready`,e.canPunch),this.setMode(e.canPunch,this.finish)}setFinish(e){if(e!==this.finish){if(this.root.classList.toggle(`is-finish`,e),e){let e=[...this.items.values()].map(e=>e.btn);W.fromTo(e,{scale:1.25,rotation:-12},{scale:1,rotation:0,duration:.45,ease:`back.out(2.6)`,stagger:{each:.06,from:`start`}})}this.setMode(this.ready,e)}}press(e){let t=this.items.get(e);if(!t||t.btn.disabled)return;W.killTweensOf([t.btn,t.wave,t.ico]),W.fromTo(t.btn,{scale:.82},{scale:1,duration:.4,ease:`back.out(3.2)`}),W.fromTo(t.wave,{opacity:.95,scale:.9},{opacity:0,scale:1.75,duration:.42,ease:`power2.out`});let n=e===`aparkat`?{y:-9,x:0}:e===`krose`?{x:7,y:-5}:{x:9,y:0};W.fromTo(t.ico,{x:0,y:0},{...n,duration:.09,ease:`power3.out`,yoyo:!0,repeat:1})}setMode(e,t){if(e===this.ready&&t===this.finish)return;let n=e&&!this.ready;this.ready=e,this.finish=t,this.idle?.kill(),this.idle=null;let r=[...this.items.values()].map(e=>e.glow),i=[...this.items.values()].map(e=>e.btn);for(let e of i)W.isTweening(e)||W.set(e,{scale:1});if(!e){W.to(r,{opacity:t?.3:0,duration:.15});return}let a=W.timeline({repeat:-1});t?a.fromTo(r,{opacity:.35},{opacity:1,duration:.11,ease:`power2.out`},0).to(r,{opacity:.5,duration:.17,ease:`power2.in`},.11).to(r,{opacity:1,duration:.1,ease:`power2.out`},.3).to(r,{opacity:.35,duration:.35,ease:`sine.in`},.4).fromTo(i,{scale:1},{scale:1.07,duration:.11,ease:`power2.out`},0).to(i,{scale:1,duration:.17,ease:`power2.in`},.11).to(i,{scale:1.05,duration:.1,ease:`power2.out`},.3).to(i,{scale:1,duration:.3,ease:`sine.in`},.4).to({},{duration:.35}):(r.forEach((e,t)=>{a.fromTo(e,{opacity:.25},{opacity:1,duration:.45,ease:`sine.out`},t*.18).to(e,{opacity:.25,duration:.7,ease:`sine.inOut`},t*.18+.45)}),a.to({},{duration:.6})),n&&W.fromTo(i,{scale:.86},{scale:1,duration:.36,ease:`back.out(2.6)`,stagger:{each:.05,from:`start`}}),this.idle=a}},ZT=650,QT=350,$T={Digit1:`direkt`,Digit2:`krose`,Digit3:`aparkat`,Numpad1:`direkt`,Numpad2:`krose`,Numpad3:`aparkat`};function eE(e){let t=()=>{},n=e=>t(e),r=new qw,i=[],a=null,o=null,s=null,c=null,l=null,u=null,d=null,f=null,p=null,m=null,h=null,g=null,_=!0,v=null,y=0,b=!1,x=0,S=null,C=0,w=!1,T=!1,E=!1,D=0,O=()=>({left:0,top:0,width:innerWidth,height:innerHeight}),k=()=>a?a.sceneRect():O(),A=()=>{p&&!E&&(E=!0,n({type:`rules`}),p.open({title:`KURALLAR`,subtitle:`Nakavt · demo`,body:qT(),onClose:()=>{E=!1}}))},j=e=>{m&&!m.isOpen&&(e||!g||g.state===`BEKLE`)&&(p?.closeAll(),m.open(e?null:g?.fighter??null,!e,S))},M=()=>{o?.setSession(e.elapsed-D),e.after(1e3,M)},N=()=>(p?.isOpen??!1)||(m?.isOpen??!1),P=()=>{g&&c?.render(g,y,b)},F=e=>{e!==b&&(b=e,s?.setFinish(e))},I=(t,n)=>{if(!o)return;let r=n?.state;switch(t.state){case`BEKLE`:n||(o.setMultiplier(100,`live`),o.setWin(null,!1),o.setPlayerHealth(t.playerHealth,!1),o.setOpponentHealth(t.opponentHealth,!1)),y=0;break;case`GONG`:C++,v=null,y=0,S=null,o.bump(100,`live`),o.setWin(null,!1),o.setPlayerHealth(1,!0),o.setOpponentHealth(1,!0);break;case`HAZIR`:v=null,y=0,o.setOpponentHealth(t.opponentHealth,!0),o.setPlayerHealth(t.playerHealth,!0),!w&&t.canPunch&&h?.show();break;case`HAMLE`:v=null,o.multiplier!==t.multiplierKurus&&o.setMultiplier(t.multiplierKurus,`live`),o.setOpponentHealth(t.opponentHealth,!0),y=t.currentWinKurus,o.setWin(y>0?y:null,!0);break;case`YUMRUK`:v=t,w=!0,h?.hide(),r===`HAZIR`&&(y=0,o.setMultiplier(100,`live`),o.setWin(null,!1));break;case`KARSI`:if(h?.hide(),w=!0,o.setPlayerHealth(t.playerHealth,!0,QT/1e3),o.setOpponentHealth(t.opponentHealth,!0,QT/1e3),r!==`KARSI`){let n=++x;e.after(QT,()=>{n===x&&g?.state===`KARSI`&&(F(t.finishHim),P())})}break;case`PARAYI_AL`:{let e=t.currentWinKurus>0?t.currentWinKurus:t.betTL*t.multiplierKurus;y=e,o.bump(t.multiplierKurus,`won`),o.setWin(e,!1,`won`);break}case`NAKAVT`:{S=`won`;let n=t.multiplierKurus,r=t.currentWinKurus>0?t.currentWinKurus:t.betTL*n;y=r;let i=C;e.after(ZT,()=>{o&&i===C&&(o.multiplier===n?o.setMultiplier(n,`ko`):o.bump(n,`ko`),o.setWin(r,!0,`ko`),o.setOpponentHealth(0,!0))});break}case`YENILDIN`:S=`lost`,o.setPlayerHealth(t.playerHealth,!0)}};return{mount(t){let _=$(`div`,`nk-ui`,t),v=$(`div`,`nk-layer nk-canvas-host`,_),y=$(`div`,`nk-layer nk-fx-layer`,_),b=$(`div`,`nk-layer nk-hud`,_),x=$(`div`,`nk-layer nk-overlay`,_);o=new BT({toggleSound:()=>n({type:`toggleSound`}),openRules:A,openFighters:()=>j(!1)}),s=new XT(e=>n({type:`punch`,punch:e})),c=new pT(n,()=>j(!1));let S=$(`div`,`nk-stage`);S.append(c.box,s.root),b.append(o.cornerL,o.cornerR,o.fight,S,c.root),l=new Xw(y,x,b),f=new NT(y,k),h=new PT(y,k),u=new Qw(x,r,k,l),d=new _T(x,r,()=>n({type:`skip`})),p=new VT(x),m=new jT(x,e=>n({type:`fighter`,id:e})),a=new Kw({root:t,ui:_,fight:o.fight,dock:c.root,bet:c.box,side:s.root,watch:[o.cornerL,o.cornerR]}),a.onChange(()=>o?.fitTags());for(let e of i)a.onChange(e);return a.update(),D=e.elapsed,M(),document.addEventListener(`keydown`,e=>{if(e.ctrlKey||e.metaKey||e.altKey||N())return;let t=$T[e.code];if(t){if(e.repeat||!g?.canPunch)return;e.preventDefault(),s?.press(t),n({type:`punch`,punch:t})}else e.code===`Space`&&(e.preventDefault(),e.repeat||c?.pressCta())}),document.addEventListener(`keyup`,e=>{e.code===`Space`&&!N()&&e.preventDefault()}),{canvasHost:v,fxLayer:y}},render(e,t){let n=g;g=e,_=t,o?.render(e,_),s?.render(e),I(e,n),e.state!==`YUMRUK`&&e.state!==`KARSI`&&F(e.finishHim),e.state!==`HAZIR`&&h?.hide(),P()},onIntent(e){t=e},sceneRect:k,onLayoutChange(e){i.push(e),a?.onChange(e)},showFighterSelect(){j(!T),T=!0},flyNumber(e,t){f?.fly(e,t)},bumpMultiplier(e,t){if(!o)return;if(t){let t=g,n=y>0?y:t&&e>100?t.betTL*e:0;o.bump(e,`lost`),o.setWin(n>0?n:null,!1,`lost`);return}let n=v??g,r=n!==null&&n.multiplierKurus===e,i=n?r&&n.currentWinKurus>0?n.currentWinKurus:n.betTL*e:0,a=n?n.opponentHealth:1;y=i,o.bump(e,a<=0?`ko`:`live`),o.setWin(i,!0),o.setOpponentHealth(a,!0),n&&F(n.finishHim),P(),c?.bumpAmount()},banner(e,t){return u?u.show(e,t):Promise.resolve()},bigWin(e,t){return d?d.show(e,t):Promise.resolve()},flash(e,t){l?.flash(e,t)},toast(e){l?.toast(e,k())},skip(){r.skipAll()}}}var tE=`x0123456789,.NAKAVTDÖVÜŞDEMİRYILDIRIMKRALİÇEFIRTINADİREKTKROŞEAPARKATĞğİıŞşÇçÖöÜü!`,nE=[`400 48px "Anton"`,`400 32px "Oswald"`,`600 32px "Oswald"`];async function rE(){await Promise.all(nE.map(e=>document.fonts.load(e,tE))),await document.fonts.ready}function iE(e){let t=e.get(`seed`);if(t===null)return;let n=Number(t);return Number.isFinite(n)?n>>>0:void 0}async function aE(){let e=new URLSearchParams(location.search),t=e.get(`test`)===`1`,n=document.getElementById(`app`),r=new yi;r.bindGsap();let i=eE(r),a=i.mount(n),o=Hv(),s=yy({seed:iE(e),after:(e,t)=>r.after(e,t)});await rE();let c=Ew(r,{fighterModels:e.get(`glb`)!==`0`});await c.init(a.canvasHost),c.newMatch(`demir`,`yildirim`);let l=()=>c.setSceneRect(i.sceneRect());l(),i.onLayoutChange(l);let u=Ey({game:s,scene:c,ui:i,audio:o,clock:r}),d=!1,f=()=>{d||(d=!0,o.unlock(),o.muted||o.startAmbient())};addEventListener(`pointerdown`,f,{capture:!0}),addEventListener(`keydown`,f,{capture:!0});let p=e=>{switch(f(),e.type===`punch`||e.type===`fighter`?o.play(`ui.select`):e.type!==`skip`&&o.play(`ui.click`),e.type){case`cashout`:s.cashout();break;case`punch`:s.punch(e.punch);break;case`fighter`:s.startMatch(e.id);break;case`betStep`:s.betStep(e.dir);break;case`betHalf`:s.betHalf();break;case`betDouble`:s.betDouble();break;case`resetBalance`:s.resetBalance();break;case`toggleSound`:o.setMuted(!o.muted),o.muted?o.stopAmbient():d&&o.startAmbient();break;case`skip`:c.skip(),i.skip()}u.refresh()};i.onIntent(p);let m=Oy();a.canvasHost.addEventListener(`pointerdown`,e=>{let t=s.view(),n=m({at:e.timeStamp,x:e.clientX,y:e.clientY},t.state,t.canPunch);n===`skip`?p({type:`skip`}):n===`direkt`&&p({type:`punch`,punch:`direkt`})});let h=e=>{let t=r.advance(e);c.update(t),c.render()};if(u.refresh(),i.showFighterSelect(),t){Object.assign(window,{__game:{game:s,scene:c,ui:i,audio:o,clock:r,step:e=>{let t=Math.ceil(e/(1e3/60));for(let e=0;e<t;e++)h(1/60)},ready:!0}}),h(0);return}let g=performance.now(),_=document.hidden;document.addEventListener(`visibilitychange`,()=>{_=document.hidden,_?o.stopAmbient():(g=performance.now(),d&&!o.muted&&o.startAmbient())});let v=e=>{let t=_?0:(e-g)/1e3;g=e,_||h(t),requestAnimationFrame(v)};requestAnimationFrame(v)}aE().catch(e=>{console.error(e);let t=document.createElement(`pre`);t.style.cssText=`position:fixed;inset:16px;color:#fff;background:#402;padding:16px;white-space:pre-wrap;z-index:99`,t.textContent=`Demo başlatılamadı:\n${e instanceof Error?e.stack??e.message:String(e)}`,document.body.appendChild(t)});export{vu as $,Ui as A,hl as B,Cf as C,iu as D,fu as E,bp as F,Hi as G,pf as H,ll as I,Xs as J,Vi as K,$o as L,Wi as M,so as N,_u as O,Kf as P,Cu as Q,J as R,rl as S,Qa as T,zi as U,mf as V,Bi as W,fp as X,_p as Y,gp as Z,Zs as _,dx as a,Wl as at,$l as b,Bl as c,mp as ct,el as d,K as dt,Bp as et,Ri as f,q as ft,Yf as g,yp as h,ex as i,oo as it,Gi as j,gu as k,xc as l,vs as lt,cs as m,Tx as n,Lf as nt,mb as o,zl as ot,Y as p,zf as pt,Ff as q,wx as r,Li as rt,Bf as s,Kc as st,Zx as t,es as tt,zc as u,Qf as ut,Sp as v,Za as w,tl as x,Gl as y,Dl as z};