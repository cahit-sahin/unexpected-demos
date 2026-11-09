const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fighterModels-B4RZ4N5K.js","./boneMap-DIpnLeWi.js","./gloveModel-CHqVXxHI.js"])))=>i.map(i=>d[i]);
import{$ as e,$n as t,A as n,An as r,At as i,B as a,Bn as o,Bt as s,C as c,Cr as l,Ct as u,D as d,Dr as f,Dt as p,E as m,Er as h,F as g,Ft as _,G as v,Hn as y,I as b,It as x,J as S,K as C,Kn as w,L as T,Lt as E,M as D,Mn as O,Mt as k,N as A,Nn as j,O as M,On as N,Or as P,Ot as F,P as ee,Pn as I,Pt as te,Q as L,Qt as ne,R as re,Rt as ie,S as ae,Sr as oe,St as R,T as z,Tr as se,Tt as ce,U as le,Un as ue,V as de,Vn as fe,W as pe,Wn as me,Wt as B,X as he,Xn as ge,Y as _e,Yn as ve,Zn as ye,Zt as be,_ as xe,_r as Se,a as V,b as Ce,br as we,bt as H,c as Te,cr as Ee,d as U,dr as De,dt as Oe,er as ke,f as Ae,fr as W,ft as je,g as Me,gr as Ne,h as Pe,ht as Fe,ir as Ie,j as Le,jt as Re,k as ze,kn as Be,kr as Ve,kt as He,l as Ue,lr as We,mr as Ge,mt as Ke,n as qe,nr as Je,o as Ye,or as Xe,ot as Ze,pr as G,pt as Qe,qn as $e,qt as et,rr as tt,s as nt,t as rt,tr as it,u as at,ur as ot,v as st,vr as ct,w as K,wr as lt,wt as ut,xr as dt,xt as q,y as ft,yr as pt,yt as mt,z as ht,zn as gt,zt as _t}from"./boneMap-DIpnLeWi.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function vt(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function yt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var bt={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},xt={duration:.5,overwrite:!1,delay:0},St,Ct,wt,Tt=1e8,Et=1/Tt,Dt=Math.PI*2,Ot=Dt/4,kt=0,At=Math.sqrt,jt=Math.cos,Mt=Math.sin,Nt=function(e){return typeof e==`string`},Pt=function(e){return typeof e==`function`},Ft=function(e){return typeof e==`number`},It=function(e){return e===void 0},Lt=function(e){return typeof e==`object`},Rt=function(e){return e!==!1},zt=function(){return typeof window<`u`},Bt=function(e){return Pt(e)||Nt(e)},Vt=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Ut=/random\([^)]+\)/g,Wt=/,\s*/g,Gt=/(?:-?\.?\d|\.)+/gi,Kt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yt=/[+-]=-?[.\d]+/,Xt=/[^,'"\[\]\s]+/gi,Zt=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,$t,en,tn,nn={},rn={},an,on=function(e){return(rn=Rn(e,nn))&&ra},sn=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},cn=function(e,t){return!t&&console.warn(e)},ln=function(e,t){return e&&(nn[e]=t)&&rn&&(rn[e]=t)||nn},un=function(){return 0},dn={suppressEvents:!0,isStart:!0,kill:!1},fn={suppressEvents:!0,kill:!1},pn={suppressEvents:!0},mn={},hn=[],gn={},_n,vn={},yn={},bn=30,xn=[],Sn=``,Cn=function(e){var t=e[0],n,r;if(Lt(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=xn.length;r--&&!xn[r].targetTest(t););n=xn[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new pi(e[r],n)))||e.splice(r,1);return e},wn=function(e){return e._gsap||Cn(xr(e))[0]._gsap},Tn=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():It(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Dn=function(e){return Math.round(e*1e5)/1e5||0},On=function(e){return Math.round(e*1e7)/1e7||0},kn=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},An=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},jn=function(){var e=hn.length,t=hn.slice(0),n,r;for(gn={},hn.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Mn=function(e){return!!(e._initted||e._startAt||e.add)},Nn=function(e,t,n,r){hn.length&&!Ct&&jn(),e.render(t,n,r||!!(Ct&&t<0&&Mn(e))),hn.length&&!Ct&&jn()},Pn=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Xt).length<2?t:Nt(e)?e.trim():e},Fn=function(e){return e},In=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ln=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Rn=function(e,t){for(var n in t)e[n]=t[n];return e},zn=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Lt(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Bn=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Vn=function(e){var t=e.parent||Qt,n=e.keyframes?Ln(Ht(e.keyframes)):In;if(Rt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hn=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Un=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Wn=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Gn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Kn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qn=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jn=function(e,t,n,r){return e._startAt&&(Ct?e._startAt.revert(fn):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Yn=function e(t){return!t||t._ts&&e(t.parent)},Xn=function(e){return e._repeat?Zn(e._tTime,e=e.duration()+e._rDelay)*e:0},Zn=function(e,t){var n=Math.floor(e=On(e/t));return e&&n===e?n-1:n},Qn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$n=function(e){return e._end=On(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},er=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=On(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$n(e),n._dirty||Kn(n,e)),e},tr=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qn(e.rawTime(),t),(!t._dur||hr(0,t.totalDuration(),n)-t._tTime>Et)&&t.render(n,!0)),Kn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Et}},nr=function(e,t,n,r){return t.parent&&Gn(t),t._start=On((Ft(n)?n:n||e!==Qt?fr(e,n,t):e._time)+t._delay),t._end=On(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Un(e,t,`_first`,`_last`,e._sort?`_start`:0),or(t)||(e._recent=t),r||tr(e,t),e._ts<0&&er(e,e._tTime),e},rr=function(e,t){return(nn.ScrollTrigger||sn(`scrollTrigger`,t))&&nn.ScrollTrigger.create(t,e)},ir=function(e,t,n,r,i){if(Si(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!Ct&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_n!==$r.frame)return hn.push(e),e._lazy=[i,r],1},ar=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},or=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},sr=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ar(e)&&(e._initted||!or(e))||(e._ts<0||e._dp._ts<0)&&!or(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=hr(0,e._tDur,t),l=Zn(s,o),e._yoyo&&l&1&&(a=1-a),l!==Zn(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||Ct||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&ir(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?Et:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Jn(e,t,n,!0),e._onUpdate&&!n&&Rr(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&Rr(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Gn(e,1),!n&&!Ct&&(Rr(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},cr=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},lr=function(e,t,n,r){var i=e._repeat,a=On(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:On(a*(i+1)+e._rDelay*i):a,o>0&&!r&&er(e,e._tTime=e._tDur*o),e.parent&&$n(e),n||Kn(e.parent,e),e},ur=function(e){return e instanceof hi?Kn(e):lr(e,e._dur)},dr={_start:0,endTime:un,totalDuration:un},fr=function e(t,n,r){var i=t.labels,a=t._recent||dr,o=t.duration()>=Tt?a.endTime(!1):t._dur,s,c,l;return Nt(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Ht(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},pr=function(e,t,n){var r=Ft(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Rt(s.vars.inherit)&&s.parent;a.immediateRender=Rt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new ki(t[0],a,t[i+1])},mr=function(e,t){return e||e===0?t(e):t},hr=function(e,t,n){return n<e?e:n>t?t:n},gr=function(e,t){return!Nt(e)||!(t=Zt.exec(e))?``:t[1]},_r=function(e,t,n){return mr(n,function(n){return hr(e,t,n)})},vr=[].slice,yr=function(e,t){return e&&Lt(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Lt(e[0]))&&!e.nodeType&&e!==$t},br=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Nt(e)&&!t||yr(e,1)?(r=n).push.apply(r,xr(e)):n.push(e)})||n},xr=function(e,t,n){return wt&&!t&&wt.selector?wt.selector(e):Nt(e)&&!n&&(en||!ei())?vr.call((t||tn).querySelectorAll(e),0):Ht(e)?br(e,n):yr(e)?vr.call(e,0):e?[e]:[]},Sr=function(e){return e=xr(e)[0]||cn(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return xr(t,n.querySelectorAll?n:n===e?cn(`Invalid scope`)||tn.createElement(`div`):e)}},Cr=function(e){return e.sort(function(){return .5-Math.random()})},wr=function(e){if(Pt(e))return e;var t=Lt(e)?e:{each:e},n=ci(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Nt(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,Tt])[1],!S){for(b=-Tt;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===Tt?0:s?f*u/S-.5:r/S|0,b=0,x=Tt,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):At(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Cr(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=gr(t.amount||t.each)||0,n=n&&f<0?si(n):n}return f=(p[e]-p.min)/p.max||0,On(p.b+(n?n(f):f)*p.v)+p.u}},Tr=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=On(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ft(n)?0:gr(n))}},Er=function(e,t){var n=Ht(e),r,i;return!n&&Lt(e)&&(r=n=e.radius||Tt,e.values?(e=xr(e.values),(i=!Ft(e[0]))&&(r*=r)):e=Tr(e.increment)),mr(t,n?Pt(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=Tt,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Ft(t)?s:s+gr(t)}:Tr(e))},Dr=function(e,t,n,r){return mr(Ht(e)?!t:n===!0?!!(n=0):!r,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Or=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},kr=function(e,t){return function(n){return e(parseFloat(n))+(t||gr(n))}},Ar=function(e,t,n){return Fr(e,t,0,1,n)},jr=function(e,t,n){return mr(n,function(n){return e[~~t(n)]})},Mr=function e(t,n,r){var i=n-t;return Ht(t)?jr(t,e(0,t.length),n):mr(r,function(e){return(i+(e-t)%i)%i+t})},Nr=function e(t,n,r){var i=n-t,a=i*2;return Ht(t)?jr(t,e(0,t.length-1),n):mr(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Pr=function(e){return e.replace(Ut,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Wt);return Dr(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Fr=function(e,t,n,r,i){var a=t-e,o=r-n;return mr(i,function(t){return n+((t-e)/a*o||0)})},Ir=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Nt(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Ht(t)&&!Ht(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Rn(Ht(t)?[]:{},t));if(!u){for(c in n)_i.call(s,t,c,`get`,n[c]);a=function(e){return Ri(e,s)||(o?t.p:t)}}}return mr(r,a)},Lr=function(e,t,n){var r=e.labels,i=Tt,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Rr=function(e,t,n){var r=e.vars,i=r[t],a=wt,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&hn.length&&jn(),o&&(wt=o),l=s?i.apply(c,s):i.call(c),wt=a,l},zr=function(e){return Gn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ct),e.progress()<1&&Rr(e,`onInterrupt`),e},Br,Vr=[],Hr=function(e){if(e){if(e=!e.name&&e.default||e,zt()||e.headless){var t=e.name,n=Pt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:un,render:Ri,add:_i,kill:Bi,modifier:zi,rawVars:0},a={targetTest:0,get:0,getSetter:Pi,aliases:{},register:0};if(ei(),e!==r){if(vn[t])return;In(r,In(Bn(e,i),a)),Rn(r.prototype,Rn(i,Bn(e,a))),vn[r.prop=t]=r,e.targetTest&&(xn.push(r),mn[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ln(t,r),e.register&&e.register(ra,r,Ui)}else Vr.push(e)}},Ur=255,Wr={aqua:[0,Ur,Ur],lime:[0,Ur,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ur],navy:[0,0,128],white:[Ur,Ur,Ur],olive:[128,128,0],yellow:[Ur,Ur,0],orange:[Ur,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ur,0,0],pink:[Ur,192,203],cyan:[0,Ur,Ur],transparent:[Ur,Ur,Ur,0]},Gr=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ur+.5|0},Kr=function(e,t,n){var r=e?Ft(e)?[e>>16,e>>8&Ur,e&Ur]:0:Wr.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Wr[e])r=Wr[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ur,r&Ur,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ur,e&Ur]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Gt),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Gr(s+1/3,i,a),r[1]=Gr(s,i,a),r[2]=Gr(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Kt),n&&r.length<4&&(r[3]=1),r}else r=e.match(Gt)||Wr.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Ur,a=r[1]/Ur,o=r[2]/Ur,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},qr=function(e){var t=[],n=[],r=-1;return e.split(Yr).forEach(function(e){var i=e.match(qt)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Jr=function(e,t,n){var r=``,i=(e+r).match(Yr),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Kr(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=qr(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Yr,`1`).split(qt),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Yr),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Yr=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Wr)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Xr=/hsl[a]?\(/,Zr=function(e){var t=e.join(` `),n;if(Yr.lastIndex=0,Yr.test(t))return n=Xr.test(t),e[1]=Jr(e[1],n),e[0]=Jr(e[0],n,qr(e[1])),!0},Qr,$r=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){an&&(!en&&zt()&&($t=en=window,tn=$t.document||{},nn.gsap=ra,($t.gsapVersions||($t.gsapVersions=[])).push(ra.version),on(rn||$t.GreenSockGlobals||!$t.gsap&&$t||{}),Vr.forEach(Hr)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Qr=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Qr=0,l=un},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),ei(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),ei=function(){return!Qr&&$r.wake()},ti={},ni=/^[\d.\-M][\d.\-,\s]/,ri=/["']/g,ii=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(ri,``).trim():+c,r=s.substr(o+1).trim();return t},ai=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},oi=function(e){var t=(e+``).split(`(`),n=ti[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[ii(t[1])]:ai(e).split(`,`).map(Pn)):ti._CE&&ni.test(e)?ti._CE(``,e):n},si=function(e){return function(t){return 1-e(1-t)}},ci=function(e,t){return e&&(Pt(e)?e:ti[e]||oi(e))||t},li=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return En(e,function(e){for(var t in ti[e]=nn[e]=i,ti[a=e.toLowerCase()]=n,i)ti[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=ti[e+`.`+t]=i[t]}),i},ui=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},di=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/Dt*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*Mt((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:ui(s);return a=Dt/a,c.config=function(n,r){return e(t,n,r)},c},fi=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:ui(r);return i.config=function(n){return e(t,n)},i};En(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;li(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),ti.Linear.easeNone=ti.none=ti.Linear.easeIn,li(`Elastic`,di(`in`),di(`out`),di()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};li(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),li(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),li(`Circ`,function(e){return-(At(1-e*e)-1)}),li(`Sine`,function(e){return e===1?1:-jt(e*Ot)+1}),li(`Back`,fi(`in`),fi(`out`),fi()),ti.SteppedEase=ti.steps=nn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-Et;return function(e){return((r*hr(0,a,e)|0)+i)*n}}},xt.ease=ti[`quad.out`],En(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Sn+=e+`,`+e+`Params,`});var pi=function(e,t){this.id=kt++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Tn,this.set=t?t.getSetter:Pi},mi=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,lr(this,+e.duration,1,1),this.data=e.data,wt&&(this._ctx=wt,wt.data.push(this)),Qr||$r.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,lr(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(ei(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(er(this,e),!n._dp||n.parent||tr(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Nn(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Xn(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Xn(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Zn(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Qn(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-Et?0:this._rts,this.totalTime(hr(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),$n(this),qn(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ei(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=On(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&nr(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Rt(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qn(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=pn);var t=Ct;return Ct=e,Mn(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),Ct=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ur(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ur(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(fr(this,e),Rt(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Rt(t)),this._dur||(this._zTime=-Et),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-Et:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-Et)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Pt(e)?e:Fn,a=function(){var e=t.then;t.then=null,n&&n(),Pt(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){zr(this)},e}();In(mi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var hi=function(e){yt(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Rt(t.sortChildren),Qt&&nr(t.parent||Qt,vt(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&rr(vt(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return pr(0,arguments,this),this},n.from=function(e,t,n){return pr(1,arguments,this),this},n.fromTo=function(e,t,n,r){return pr(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Vn(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new ki(e,t,fr(this,n),1),this},n.call=function(e,t,n){return nr(this,ki.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new ki(e,n,fr(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Vn(n).immediateRender=Rt(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Vn(r).immediateRender=Rt(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:On(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Qt&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=On(o%f),o===i?(d=this._repeat,c=a):(_=On(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Zn(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:On(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Rr(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=cr(this,On(r),On(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(Rr(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-Et);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||Ct&&Mn(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-Et:Et);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-Et)._zTime=c>=r?1:-1,this._ts))return this._start=g,$n(this),this.render(e,t,n);this._onUpdate&&!t&&Rr(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Gn(this,1),t||e<0&&!r||!o&&!r&&i||(Rr(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Ft(t)||(t=fr(this,t,e)),!(e instanceof mi)){if(Ht(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Nt(e))return this.addLabel(e,t);if(Pt(e))e=ki.delayedCall(0,e);else return this}return this===e?this:nr(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-Tt);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof ki?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Nt(e)?this.removeLabel(e):Pt(e)?this.killTweensOf(e):(e.parent===this&&Wn(this,e),e===this._recent&&(this._recent=this._last),Kn(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=On($r.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=fr(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=ki.delayedCall(0,t||un,n);return r.data=`isPause`,this._hasPause=1,nr(this,r,fr(this,e))},n.removePause=function(e){var t=this._first;for(e=fr(this,e);t;)t._start===e&&t.data===`isPause`&&Gn(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)bi!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=xr(e),i=this._first,a=Ft(t),o;i;)i instanceof ki?An(i._targets,r)&&(a?(!bi||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=fr(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=ki.to(n,In({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||Et,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&lr(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,In({startAt:{time:fr(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Lr(this,fr(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Lr(this,fr(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Et)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=On(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Kn(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Kn(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=Tt,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,nr(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=On(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;lr(n,n===Qt&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Qt._ts&&(Nn(Qt,Qn(e,Qt)),_n=$r.frame),$r.frame>=bn){bn+=bt.autoSleep||120;var t=Qt._first;if((!t||!t._ts)&&bt.autoSleep&&$r._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||$r.sleep()}}},t}(mi);In(hi.prototype,{_lock:0,_hasPause:0,_forcing:0});var gi=function(e,t,n,r,i,a,o){var s=new Ui(this._pt,e,t,0,1,Li,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Pr(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Jt)||[];u=Jt.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?kn(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Jt.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Yt.test(r)||g)&&(s.e=0),this._pt=s,s},_i=function(e,t,n,r,i,a,o,s,c,l){Pt(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Pt(u)?c?e[t.indexOf(`set`)||!Pt(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Pt(u)?c?Mi:ji:Ai,p;if(Nt(r)&&(~r.indexOf(`random(`)&&(r=Pr(r)),r.charAt(1)===`=`&&(p=kn(d,r)+(gr(d)||0),(p||p===0)&&(r=p))),!l||d!==r||xi)return!isNaN(d*r)&&r!==``?(p=new Ui(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Ii:Fi,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&sn(t,r),gi.call(this,e,t,d,r,f,s||bt.stringFilter,c))},vi=function(e,t,n,r,i){if(Pt(e)&&(e=Ei(e,i,t,n,r)),!Lt(e)||e.style&&e.nodeType||Ht(e)||Vt(e))return Nt(e)?Ei(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=Ei(e[o],i,t,n,r);return a},yi=function(e,t,n,r,i,a){var o,s,c,l;if(vn[e]&&(o=new vn[e]).init(i,o.rawVars?t[e]:vi(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Ui(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Br))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},bi,xi,Si=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!St,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(!b||f&&a||(a=`none`),t._ease=ci(a,xt.ease),t._rEase=x&&(ci(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?wn(g[0]).harness:0,N=k&&i[k.prop],S=Bn(i,mn),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?fn:dn),h._lazy=0),o){if(Gn(t._startAt=ki.set(g,In({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Rt(c),startAt:null,delay:0,onUpdate:l&&function(){return Rr(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Ct||!s&&!p)&&t._startAt.revert(fn),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=In({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Rt(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Gn(t._startAt=ki.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Ct?t._startAt.revert(fn):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,Et,Et);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Rt(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Cn(g)[C]._gsap,t._ptLookup[C]=j={},gn[O.id]&&hn.length&&jn(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Ui(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)vn[w]&&(A=yi(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=_i.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(bi=t,Qt.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,bi=0),t._pt&&c&&(gn[O.id]=1)}D&&Hi(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(Tt,!0,!0)},Ci=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return xi=1,e.vars[t]=`+=0`,Si(e,o),xi=0,s?cn(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Dn(n)+gr(u.e)),u.b&&(u.b=l.s+gr(u.b))},wi=function(e,t){var n=e[0]?wn(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Rn({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Ti=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Ht(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},Ei=function(e,t,n,r,i){return Pt(e)?e.call(t,n,r,i):Nt(e)&&~e.indexOf(`random(`)?Pr(e):e},Di=Sn+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,Oi={};En(Di+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return Oi[e]=1});var ki=function(e){yt(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Vn(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Qt,g=(Ht(t)||Vt(t)?Ft(t[0]):`length`in n)?[t]:xr(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Cn(g):cn(`GSAP target `+t+` not found. https://gsap.com`,!bt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Bt(s)||Bt(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new hi({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=vt(a),_._start=0,u||Bt(s)||Bt(c)){if(b=g.length,C=u&&wr(u),Lt(u))for(x in u)~Di.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=Bn(n,Oi),y.stagger=0,T&&(y.easeReverse=T),w&&Rn(y,w),S=g[v],y.duration=+Ei(s,vt(a),v,S,g),y.delay=(+Ei(c,vt(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=ti.none;_.duration()?s=c=0:a.timeline=0}else if(f){Vn(In(_.vars.defaults,{ease:`none`})),_._ease=ci(f.ease||n.ease||`none`);var E=0,D,O,k;if(Ht(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||Ti(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!St&&(bi=vt(a),Qt.killTweensOf(g),bi=0),nr(h,vt(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===On(h._time)&&Rt(l)&&Yn(vt(a))&&h.data!==`nested`)&&(a._tTime=-Et,a.render(Math.max(0,-c)||0)),m&&rr(vt(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-Et&&!o?i:e<Et?0:e,c,l,u,d,f,p,m,h;if(!a)sr(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=On(s%d),s===i?(u=this._repeat,c=a):(f=On(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Zn(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(On(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(ir(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(Rr(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Jn(this,e,t,n),Rr(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&Rr(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Jn(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Gn(this,1),!t&&(!o||r)&&(s||r||p)&&(Rr(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Qr||$r.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Si(this,a),o=this._ease(a/this._dur),Ci(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(er(this,0),this.parent||Un(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ct),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,bi&&bi.vars.overwrite!==!0)._first||zr(this),this.parent&&n!==this.timeline.totalDuration()&&lr(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?xr(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Hn(r,i))return t===`all`&&(this._pt=0),zr(this);for(s=this._op=this._op||[],t!==`all`&&(Nt(t)&&(d={},En(t,function(e){return d[e]=1}),t=d),t=wi(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||Wn(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&zr(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return pr(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return pr(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Qt.killTweensOf(e,t,n)},t}(mi);In(ki.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),En(`staggerTo,staggerFrom,staggerFromTo`,function(e){ki[e]=function(){var t=new hi,n=vr.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Ai=function(e,t,n){return e[t]=n},ji=function(e,t,n){return e[t](n)},Mi=function(e,t,n,r){return e[t](r.fp,n)},Ni=function(e,t,n){return e.setAttribute(t,n)},Pi=function(e,t){return Pt(e[t])?ji:It(e[t])&&e.setAttribute?Ni:Ai},Fi=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ii=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Li=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ri=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},zi=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Bi=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wn(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Vi=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Hi=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Ui=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Fi,this.d=o||this,this.set=s||Ai,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Vi,this.m=e,this.mt=n,this.tween=t},e}();En(Sn+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return mn[e]=1}),nn.TweenMax=nn.TweenLite=ki,nn.TimelineLite=nn.TimelineMax=hi,Qt=new hi({sortChildren:!1,defaults:xt,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),bt.stringFilter=Zr;var Wi=[],Gi={},Ki=[],qi=0,Ji=0,Yi=function(e){return(Gi[e]||Ki).map(function(e){return e()})},Xi=function(){var e=Date.now(),t=[];e-qi>2&&(Yi(`matchMediaInit`),Wi.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=$t.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Yi(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),qi=e,Yi(`matchMedia`))},Zi=function(){function e(e,t){this.selector=t&&Sr(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Ji++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Pt(e)&&(n=t,t=e,e=Pt);var r=this,i=function(){var e=wt,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Sr(n)),wt=r,a=t.apply(r,arguments),Pt(a)&&r._r.push(a),wt=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Pt?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=wt;wt=null,e(this),wt=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof ki&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof hi?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof ki)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Wi.length;r--;)Wi[r].id===this.id&&Wi.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Qi=function(){function e(e){this.contexts=[],this.scope=e,wt&&wt.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Lt(e)||(e={matches:e});var r=new Zi(0,n||this.scope),i=r.conditions={},a,o,s;for(o in wt&&!r.selector&&(r.selector=wt.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=$t.matchMedia(e[o]),a&&(Wi.indexOf(r)<0&&Wi.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Xi):a.addEventListener(`change`,Xi)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),$i={registerPlugin:function(){[...arguments].forEach(function(e){return Hr(e)})},timeline:function(e){return new hi(e)},getTweensOf:function(e,t){return Qt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Nt(e)&&(e=xr(e)[0]);var i=wn(e||{}).get,a=n?Fn:Pn;return n===`native`&&(n=``),e&&(t?a((vn[t]&&vn[t].get||i)(e,t,n,r)):function(t,n,r){return a((vn[t]&&vn[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=xr(e),e.length>1){var r=e.map(function(e){return ra.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=vn[t],o=wn(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Br._pt=0,r.init(e,n?t+n:t,Br,0,[e]),r.render(1,r),Br._pt&&Ri(1,Br)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=ra.to(e,In((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ci(e.ease,xt.ease)),zn(xt,e||{})},config:function(e){return zn(bt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!vn[e]&&!nn[e]&&cn(t+` effect requires `+e+` plugin.`)}),yn[t]=function(e,t,r){return n(xr(e),In(t||{},i),r)},a&&(hi.prototype[t]=function(e,n,r){return this.add(yn[t](e,Lt(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){ti[e]=ci(t)},parseEase:function(e,t){return arguments.length?ci(e,t):ti},getById:function(e){return Qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new hi(e),r,i;for(n.smoothChildTiming=Rt(e.smoothChildTiming),Qt.remove(n),n._dp=0,n._time=n._tTime=Qt._time,r=Qt._first;r;)i=r._next,(t||!(!r._dur&&r instanceof ki&&r.vars.onComplete===r._targets[0]))&&nr(n,r,r._start-r._delay),r=i;return nr(Qt,n,0),n},context:function(e,t){return e?new Zi(e,t):wt},matchMedia:function(e){return new Qi(e)},matchMediaRefresh:function(){return Wi.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Xi()},addEventListener:function(e,t){var n=Gi[e]||(Gi[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gi[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Mr,wrapYoyo:Nr,distribute:wr,random:Dr,snap:Er,normalize:Ar,getUnit:gr,clamp:_r,splitColor:Kr,toArray:xr,selector:Sr,mapRange:Fr,pipe:Or,unitize:kr,interpolate:Ir,shuffle:Cr},install:on,effects:yn,ticker:$r,updateRoot:hi.updateRoot,plugins:vn,globalTimeline:Qt,core:{PropTween:Ui,globals:ln,Tween:ki,Timeline:hi,Animation:mi,getCache:wn,_removeLinkedListItem:Wn,reverting:function(){return Ct},context:function(e){return e&&wt&&(wt.data.push(e),e._ctx=wt),wt},suppressOverwrites:function(e){return St=e}}};En(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return $i[e]=ki[e]}),$r.add(hi.updateRoot),Br=$i.to({},{duration:0});var ea=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ta=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=ea(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},na=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Nt(n)&&(r={},En(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}ta(e,n)}}}},ra=$i.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ct?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},na(`roundProps`,Tr),na(`modifiers`),na(`snap`,Er))||$i;ki.version=hi.version=ra.version=`3.15.0`,an=1,zt()&&ei(),ti.Power0,ti.Power1,ti.Power2,ti.Power3,ti.Power4,ti.Linear,ti.Quad,ti.Cubic,ti.Quart,ti.Quint,ti.Strong,ti.Elastic,ti.Back,ti.SteppedEase,ti.Bounce,ti.Sine,ti.Expo,ti.Circ;var ia,aa,oa,sa,ca,la,ua,da=function(){return typeof window<`u`},fa={},pa=180/Math.PI,ma=Math.PI/180,ha=Math.atan2,ga=1e8,_a=/([A-Z])/g,va=/(left|right|width|margin|padding|x)/i,ya=/[\s,\(]\S/,ba={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},xa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Sa=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ca=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wa=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ta=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ea=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Da=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Oa=function(e,t,n){return e.style[t]=n},ka=function(e,t,n){return e.style.setProperty(t,n)},Aa=function(e,t,n){return e._gsap[t]=n},ja=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ma=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Na=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Pa=`transform`,Fa=Pa+`Origin`,Ia=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in fa&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=ba[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=to(i,e)}):this.tfm[t]=o.x?o[t]:to(i,t),t===Fa&&(this.tfm.zOrigin=o.zOrigin);else return ba.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Pa)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Fa,n,``)),t=Pa}(a||n)&&this.props.push(t,n,a[t])},La=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Ra=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(_a,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=ua(),i&&i.isStart||n[Pa]||(La(n),r.zOrigin&&n[Fa]&&(n[Fa]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},za=function(e,t){var n={target:e,props:[],revert:Ra,save:Ia};return e._gsap||ra.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Ba,Va=function(e,t){var n=aa.createElementNS?aa.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):aa.createElement(e);return n&&n.style?n:aa.createElement(e)},Ha=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(_a,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Wa(n)||n,1)||``},Ua=`O,Moz,ms,Ms,Webkit`.split(`,`),Wa=function(e,t,n){var r=(t||ca).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Ua[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Ua[i]:``)+e},Ga=function(){da()&&window.document&&(ia=window,aa=ia.document,oa=aa.documentElement,ca=Va(`div`)||{style:{}},Va(`div`),Pa=Wa(Pa),Fa=Pa+`Origin`,ca.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Ba=!!Wa(`perspective`),ua=ra.core.reverting,sa=1)},Ka=function(e){var t=e.ownerSVGElement,n=Va(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),oa.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),oa.removeChild(n),i},qa=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ja=function(e){var t,n;try{t=e.getBBox()}catch{t=Ka(e),n=1}return t&&(t.width||t.height)||n||(t=Ka(e)),t&&!t.width&&!t.x&&!t.y?{x:+qa(e,[`x`,`cx`,`x1`])||0,y:+qa(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Ya=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Ja(e))},Xa=function(e,t){if(t){var n=e.style,r;t in fa&&t!==Fa&&(t=Pa),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(_a,`-$1`).toLowerCase())):n.removeAttribute(t)}},Za=function(e,t,n,r,i,a){var o=new Ui(e._pt,t,n,0,1,a?Da:Ea);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Qa={deg:1,rad:1,turn:1},$a={grid:1,flex:1},eo=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=ca.style,c=va.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Qa[i]||Qa[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Ya(t),(p||o===`%`)&&(fa[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Dn(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==aa&&h.appendChild||(h=aa.body),g=h._gsap,g&&p&&g.width&&c&&g.time===$r.time&&!g.uncache)return Dn(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Xa(t,n)}else(p||o===`%`)&&!$a[Ha(h,`display`)]&&(s.position=Ha(t,`position`)),h===t&&(s.position=`static`),h.appendChild(ca),m=ca[u],h.removeChild(ca),s.position=`absolute`;return c&&p&&(g=wn(h),g.time=$r.time,g.width=h[u]),Dn(f?m*a/d:m&&a?d/m*a:0)},to=function(e,t,n,r){var i;return sa||Ga(),t in ba&&t!==`transform`&&(t=ba[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),fa[t]&&t!==`transform`?(i=mo(e,r),i=t===`transformOrigin`?i.svg?i.origin:ho(Ha(e,Fa))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=oo[t]&&oo[t](e,t,n)||Ha(e,t)||Tn(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?eo(e,t,i,n)+n:i},no=function(e,t,n,r){if(!n||n===`none`){var i=Wa(t,e,1),a=i&&Ha(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Ha(e,`borderTopColor`))}var o=new Ui(this._pt,e.style,t,0,1,Li),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Ha(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Ha(e,t)||r,m?e.style[t]=m:Xa(e,t)),l=[n,r],Zr(l),n=l[0],r=l[1],d=n.match(qt)||[],b=r.match(qt)||[],b.length){for(;u=qt.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=kn(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=qt.lastIndex-v.length,v||(v=v||bt.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=eo(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?Da:Ea;return Yt.test(r)&&(o.e=0),this._pt=o,o},ro={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},io=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ro[n]||n,t[1]=ro[r]||r,t.join(` `)},ao=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],fa[o]&&(s=1,o=o===`transformOrigin`?Fa:Pa),Xa(n,o);s&&(Xa(n,Pa),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,mo(n,1),a.uncache=1,La(r)))}},oo={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Ui(e._pt,t,n,0,0,ao);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},so=[1,0,0,1,0,0],co={},lo=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},uo=function(e){var t=Ha(e,Pa);return lo(t)?so:t.substr(7).match(Kt).map(Dn)},fo=function(e,t){var n=e._gsap||wn(e),r=e.style,i=uo(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?so:i):(i===so&&!e.offsetParent&&e!==oa&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,oa.appendChild(e)),i=uo(e),s?r.display=s:Xa(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):oa.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},po=function(e,t,n,r,i,a){var o=e._gsap,s=i||fo(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==so&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Ja(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Fa]=`0px 0px`,a&&(Za(a,o,`xOrigin`,c,y),Za(a,o,`yOrigin`,l,b),Za(a,o,`xOffset`,u,o.xOffset),Za(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},mo=function(e,t){var n=e._gsap||new pi(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Ha(e,Fa)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,ee,I,te,L,ne;return n.svg=!!(e.getCTM&&Ya(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Pa]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Pa]===`none`?``:s[Pa])),r.scale=r.rotate=r.translate=`none`),S=fo(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),po(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==so&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?ha(D,E)*pa:0,_=O||k?ha(O,k)*pa+m:0,_&&(p*=Math.abs(Math.cos(_*ma))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ne=S[6],te=S[7],F=S[8],ee=S[9],I=S[10],L=S[11],l=S[12],u=S[13],d=S[14],C=ha(ne,I),h=C*pa,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+ee*T,P=ne*w+I*T,F=A*-T+F*w,ee=j*-T+ee*w,I=ne*-T+I*w,L=te*-T+L*w,A=M,j=N,ne=P),C=ha(-O,I),g=C*pa,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-ee*T,P=O*w-I*T,L=k*T+L*w,E=M,D=N,O=P),C=ha(D,E),m=C*pa,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=Dn(Math.sqrt(E*E+D*D+O*O)),p=Dn(Math.sqrt(j*j+ne*ne)),C=ha(A,j),_=Math.abs(C)>2e-4?C*pa:0,y=L?1/(L<0?-L:L):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!lo(Ha(e,Pa)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Dn(f),n.scaleY=Dn(p),n.rotation=Dn(m)+o,n.rotationX=Dn(h)+o,n.rotationY=Dn(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Fa]=ho(c)),n.xOffset=n.yOffset=0,n.force3D=bt.force3D,n.renderTransform=n.svg?So:Ba?xo:_o,n.uncache=0,n},ho=function(e){return(e=e.split(` `))[0]+` `+e[1]},go=function(e,t,n){var r=gr(t);return Dn(parseFloat(t)+parseFloat(eo(e,`x`,n+`px`,r)))+r},_o=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,xo(e,t)},vo=`0deg`,yo=`0px`,bo=`) `,xo=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==vo||l!==vo)){var x=parseFloat(l)*ma,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*ma,w=Math.cos(x),a=go(_,a,S*w*-v),o=go(_,o,-Math.sin(x)*-v),s=go(_,s,C*w*-v+v)}h!==yo&&(y+=`perspective(`+h+bo),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==yo||o!==yo||s!==yo)&&(y+=s!==yo||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+bo),c!==vo&&(y+=`rotate(`+c+bo),l!==vo&&(y+=`rotateY(`+l+bo),u!==vo&&(y+=`rotateX(`+u+bo),(d!==vo||f!==vo)&&(y+=`skew(`+d+`, `+f+bo),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+bo),_.style[Pa]=y||`translate(0, 0)`},So=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=ma,c*=ma,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=ma,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Dn(b),x=Dn(x),S=Dn(S),C=Dn(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=eo(f,`x`,a,`px`),y=eo(f,`y`,o,`px`)),(p||m||h||g)&&(v=Dn(v+p-(p*b+m*S)+h),y=Dn(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Dn(v+r/100*w.width),y=Dn(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Pa]=w)},Co=function(e,t,n,r,i){var a=360,o=Nt(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?pa:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*ga)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*ga)%a-~~(s/a)*a)),e._pt=u=new Ui(e._pt,t,n,r,s,Sa),u.e=c,u.u=`deg`,e._props.push(n),u},wo=function(e,t){for(var n in t)e[n]=t[n];return e},To=function(e,t,n){var r=wo({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Pa]=t,o=mo(n,1),Xa(n,Pa),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Pa],a[Pa]=t,o=mo(n,1),a[Pa]=c),fa)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=gr(c),p=gr(l),u=f===p?parseFloat(c):eo(n,s,c,p),d=parseFloat(l),e._pt=new Ui(e._pt,o,s,u,d-u,xa),e._pt.u=p||0,e._props.push(s));wo(o,r)};En(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});oo[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return to(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Eo={name:`css`,register:Ga,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in sa||Ga(),this.styles=this.styles||za(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(vn[m]&&yi(m,t,n,r,e,i)))){if(f=typeof l,p=oo[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Pr(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Yr.lastIndex=0,Yr.test(c)||(h=gr(c),g=gr(l),g?h!==g&&(c=eo(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Nt(c)&&~c.indexOf(`random(`)&&(c=Pr(c)),gr(c+``)||c===`auto`||(c+=bt.units[m]||gr(to(e,m))||``),(c+``).charAt(1)===`=`&&(c=to(e,m))):c=to(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in ba&&(m===`autoAlpha`&&(d===1&&to(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Za(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=ba[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in fa,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Ha(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Ha(e,`perspective`),T?e.style.perspective=T:Xa(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||mo(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Ui(this._pt,o,Pa,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Ui(this._pt,b,`scaleY`,b.scaleY,(_?kn(b.scaleY,_+u):u)-b.scaleY||0,xa),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Fa,0,o[Fa]),l=io(l),b.svg?po(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Za(this,b,`zOrigin`,b.zOrigin,g),Za(this,o,m,ho(c),ho(l)));continue}else if(m===`svgOrigin`){po(e,l,1,x,0,this);continue}else if(m in co){Co(this,b,m,d,_?kn(d,_+l):l);continue}else if(m===`smoothOrigin`){Za(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){To(this,l,e);continue}}else m in o||(m=Wa(m)||m);if(v||(u||u===0)&&(d||d===0)&&!ya.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=gr(l)||(m in bt.units?bt.units[m]:h),h!==g&&(d=eo(e,m,c,g)),this._pt=new Ui(this._pt,v?b:o,m,d,(_?kn(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?Ta:xa),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=wa):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=Ca);else if(m in o)no.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){sn(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Hi(this)},render:function(e,t){if(t.tween._time||!ua())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:to,aliases:ba,getSetter:function(e,t,n){var r=ba[t];return r&&r.indexOf(`,`)<0&&(t=r),t in fa&&t!==Fa&&(e._gsap.x||to(e,`x`))?n&&la===n?t===`scale`?ja:Aa:(la=n||{})&&(t===`scale`?Ma:Na):e.style&&!It(e.style[t])?Oa:~t.indexOf(`-`)?ka:Pi(e,t)},core:{_removeProperty:Xa,_getMatrix:fo}};ra.utils.checkPrefix=Wa,ra.core.getStyleSaver=za,(function(e,t,n,r){var i=En(e+`,`+t+`,`+n,function(e){fa[e]=1});En(t,function(e){bt.units[e]=`deg`,co[e]=1}),ba[i[13]]=e+`,`+t,En(r,function(e){var t=e.split(`:`);ba[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),En(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){bt.units[e]=`px`}),ra.registerPlugin(Eo);var J=ra.registerPlugin(Eo)||ra;J.core.Tween;var Do=1/20,Oo=class{timeScale=1;_elapsed=0;hitStopLeft=0;seq=0;queue=[];get elapsed(){return this._elapsed}bindGsap(){J.ticker.remove(J.updateRoot),this._elapsed=J.ticker.time}advance(e){let t=Math.min(Math.max(e,0),Do);if(this.hitStopLeft>0){let e=Math.min(this.hitStopLeft,t);this.hitStopLeft-=e,t-=e}for(t*=this.timeScale,this._elapsed+=t,J.updateRoot(this._elapsed);this.queue.length>0&&this.queue[0].at<=this._elapsed;)this.queue.shift().fn();return t}hitStop(e){this.hitStopLeft=Math.max(this.hitStopLeft,e/1e3)}after(e,t){let n={at:this._elapsed+e/1e3,seq:this.seq++,fn:t},r=this.queue.findIndex(e=>e.at>n.at);r===-1?this.queue.push(n):this.queue.splice(r,0,n)}wait(e){return new Promise(t=>this.after(e,t))}},ko=4294967296,Ao=2**21;function jo(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0};return{next:()=>n()/ko,int(e){if(!Number.isInteger(e)||e<=0||e>ko)throw RangeError(`Rng.int: invalid range ${e}`);let t=(ko-e)%e;if(e<=Ao){let r=n()*e;for(;r%ko<t;)r=n()*e;return Math.floor(r/ko)}let r=BigInt(e),i=BigInt(t),a=BigInt(n())*r;for(;(a&4294967295n)<i;)a=BigInt(n())*r;return Number(a>>32n)}}}function Mo(e){return e=e+2654435769>>>0,e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),(e^e>>>15)>>>0}function No(e){let t=e>>>0;return{outcome:Mo(Mo(t^1592590337)),pick:Mo(Mo(t^1592590338)+1663821227),cosmetic:Mo(Mo(t^1592590339)+2232777461)}}function Po(e){let t=String(e),n=``;for(let e=0;e<t.length;e++)e>0&&(t.length-e)%3==0&&(n+=`.`),n+=t[e];return n}function Fo(e){let t=Math.round(e),n=Math.abs(t),r=Math.floor(n/100),i=n%100;return{sign:t<0?`-`:``,body:`${Po(r)},${i<10?`0`:``}${i}`}}function Io(e){let{sign:t,body:n}=Fo(e);return`${t}₺${n}`}function Lo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ro(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var zo={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Bo={basic:{uniforms:h([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:zo.meshbasic_vert,fragmentShader:zo.meshbasic_frag},lambert:{uniforms:h([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:zo.meshlambert_vert,fragmentShader:zo.meshlambert_frag},phong:{uniforms:h([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zo.meshphong_vert,fragmentShader:zo.meshphong_frag},standard:{uniforms:h([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zo.meshphysical_vert,fragmentShader:zo.meshphysical_frag},toon:{uniforms:h([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:zo.meshtoon_vert,fragmentShader:zo.meshtoon_frag},matcap:{uniforms:h([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:zo.meshmatcap_vert,fragmentShader:zo.meshmatcap_frag},points:{uniforms:h([Y.points,Y.fog]),vertexShader:zo.points_vert,fragmentShader:zo.points_frag},dashed:{uniforms:h([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zo.linedashed_vert,fragmentShader:zo.linedashed_frag},depth:{uniforms:h([Y.common,Y.displacementmap]),vertexShader:zo.depth_vert,fragmentShader:zo.depth_frag},normal:{uniforms:h([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:zo.meshnormal_vert,fragmentShader:zo.meshnormal_frag},sprite:{uniforms:h([Y.sprite,Y.fog]),vertexShader:zo.sprite_vert,fragmentShader:zo.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zo.background_vert,fragmentShader:zo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:zo.backgroundCube_vert,fragmentShader:zo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zo.cube_vert,fragmentShader:zo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zo.equirect_vert,fragmentShader:zo.equirect_frag},distance:{uniforms:h([Y.common,Y.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zo.distance_vert,fragmentShader:zo.distance_frag},shadow:{uniforms:h([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:zo.shadow_vert,fragmentShader:zo.shadow_frag}};Bo.physical={uniforms:h([Bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:zo.meshphysical_vert,fragmentShader:zo.meshphysical_frag};var Vo={r:0,b:0,g:0},Ho=new q,Uo=new H;Uo.set(-1,0,0,0,1,0,0,0,1);function Wo(e,t,n,r,i,a){let s=new K(0),c=i===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),r=!0);let o=e.xr.getEnvironmentBlendMode();o===`additive`?n.buffers.color.setClear(0,0,0,1,a):o===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=m(n);i&&(i.isCubeTexture||i.mapping===306)?(u===void 0&&(u=new R(new st(1,1,1),new y({name:`BackgroundCubeMaterial`,uniforms:pt(Bo.backgroundCube.uniforms),vertexShader:Bo.backgroundCube.vertexShader,fragmentShader:Bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ho.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Uo),u.material.toneMapped=z.getTransfer(i.colorSpace)!==o,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(l===void 0&&(l=new R(new _t(2,2),new y({name:`BackgroundMaterial`,uniforms:pt(Bo.background.uniforms),vertexShader:Bo.background.vertexShader,fragmentShader:Bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=i,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=z.getTransfer(i.colorSpace)!==o,i.matrixAutoUpdate===!0&&i.updateMatrix(),l.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,r){t.getRGB(Vo,lt(e)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,r,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Go(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ko(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function qo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(P(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&P(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Jo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ie,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yo=4,Xo=6,Zo=20,Qo=256,$o=new x,es=new K,ts=null,ns=0,rs=0,is=!1,as=new G,os=new G,ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=as}=i;ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ts,ns,rs),this._renderer.xr.enabled=is,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ts=this._renderer.getRenderTarget(),ns=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:_e,format:be,colorSpace:Ke,depthBuffer:!1},r=ls(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ls(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cs(r)),this._blurMaterial=fs(r,e,t),this._ggxMaterial=ds(r,e,t)}return r}_compileMaterial(e){let t=new R(new Ce,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,r,i){let a=new E(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,d=c.toneMapping;c.getClearColor(es),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new R(new st,new u({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(es),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;us(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),m&&c.render(f,a),c.render(e,a)}c.toneMapping=d,c.autoClear=l,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ms()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ps());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;us(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Yo?n-d+Yo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,us(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$o),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,us(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$o)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];us(t,3*l*(r>this._lodMax-Yo?r-this._lodMax+Yo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,$o)}};function cs(e){let t=[],n=[],r=e,i=e-Yo+1+Xo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?os.set(1,r,n):e===1?os.set(-n,1,-r):e===2?os.set(-n,r,1):e===3?os.set(-1,r,-n):e===4?os.set(-n,-1,r):os.set(n,r,-1),os.toArray(l,(e*6+t)*3)}}let u=new Ce;u.setAttribute(`position`,new ft(c,3)),u.setAttribute(`outputDirection`,new ft(l,3)),n.push(new R(u,null)),r>Yo&&r--}return{lodMeshes:n,sizeLods:t}}function ls(e,t,n){let r=new Se(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function us(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ds(e,t,n){return new y({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Qo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fs(e,t,n){return new y({name:`SphericalGaussianBlur`,defines:{SAMPLES:Zo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ps(){return new y({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ms(){return new y({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function hs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gs=class extends Se{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new M(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new st(5,5,5),i=new y({name:`CubemapFromEquirect`,uniforms:pt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new R(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Oe),new m(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function _s(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new gs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ss(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function vs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ve(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ys(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Je:it)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function bs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function xs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:oe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ss(e,t,n){let r=new WeakMap,i=new Ge;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Le(h,p,m,u);g.type=pe,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Cs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ws={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ts(e,t,n,i,a,o){let s=new Se(t,n,{type:e,depthBuffer:a,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,l=null,u=new Ce;u.setAttribute(`position`,new le([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new le([0,2,0,0,2,0],2));let d=new r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new R(u,d),p=new x(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){s.setSize(e,t),c!==null&&c.setSize(e,t),l!==null&&l.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=s.width,n=s.height;y.length>0&&c===null&&(c=new Se(t,n,{type:_e,depthBuffer:!1,stencilBuffer:!1}),l=new Se(t,n,{type:_e,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(s.width!==e||s.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(s),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=s,r=c;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===c?l:c))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},z.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ws[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),c!==null&&c.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Es=new ye,Ds=new g(1,1),Os=new Le,ks=new n,As=new M,js=[],Ms=[],Ns=new Float32Array(16),Ps=new Float32Array(9),Fs=new Float32Array(4);function Is(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=js[i];if(a===void 0&&(a=new Float32Array(i),js[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ls(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Rs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function zs(e,t){let n=Ms[t];n===void 0&&(n=new Int32Array(t),Ms[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2fv(this.addr,t),Rs(n,t)}}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ls(n,t))return;e.uniform3fv(this.addr,t),Rs(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4fv(this.addr,t),Rs(n,t)}}function Ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Fs.set(r),e.uniformMatrix2fv(this.addr,!1,Fs),Rs(n,r)}}function Gs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ps.set(r),e.uniformMatrix3fv(this.addr,!1,Ps),Rs(n,r)}}function Ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ls(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rs(n,t)}else{if(Ls(n,r))return;Ns.set(r),e.uniformMatrix4fv(this.addr,!1,Ns),Rs(n,r)}}function qs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2iv(this.addr,t),Rs(n,t)}}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3iv(this.addr,t),Rs(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4iv(this.addr,t),Rs(n,t)}}function Zs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ls(n,t))return;e.uniform2uiv(this.addr,t),Rs(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ls(n,t))return;e.uniform3uiv(this.addr,t),Rs(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ls(n,t))return;e.uniform4uiv(this.addr,t),Rs(n,t)}}function tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ds.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ds):a=Es,n.setTexture2D(t||a,i)}function nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ks,i)}function rc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||As,i)}function ic(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Os,i)}function ac(e){switch(e){case 5126:return Bs;case 35664:return Vs;case 35665:return Hs;case 35666:return Us;case 35674:return Ws;case 35675:return Gs;case 35676:return Ks;case 5124:case 35670:return qs;case 35667:case 35671:return Js;case 35668:case 35672:return Ys;case 35669:case 35673:return Xs;case 5125:return Zs;case 36294:return Qs;case 36295:return $s;case 36296:return ec;case 35678:case 36198:case 36298:case 36306:case 35682:return tc;case 35679:case 36299:case 36307:return nc;case 35680:case 36300:case 36308:case 36293:return rc;case 36289:case 36303:case 36311:case 36292:return ic}}function oc(e,t){e.uniform1fv(this.addr,t)}function sc(e,t){let n=Is(t,this.size,2);e.uniform2fv(this.addr,n)}function cc(e,t){let n=Is(t,this.size,3);e.uniform3fv(this.addr,n)}function lc(e,t){let n=Is(t,this.size,4);e.uniform4fv(this.addr,n)}function uc(e,t){let n=Is(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function dc(e,t){let n=Is(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fc(e,t){let n=Is(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pc(e,t){e.uniform1iv(this.addr,t)}function mc(e,t){e.uniform2iv(this.addr,t)}function hc(e,t){e.uniform3iv(this.addr,t)}function gc(e,t){e.uniform4iv(this.addr,t)}function _c(e,t){e.uniform1uiv(this.addr,t)}function vc(e,t){e.uniform2uiv(this.addr,t)}function yc(e,t){e.uniform3uiv(this.addr,t)}function bc(e,t){e.uniform4uiv(this.addr,t)}function xc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ds:Es;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Sc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ks,a[e])}function Cc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||As,a[e])}function wc(e,t,n){let r=this.cache,i=t.length,a=zs(n,i);Ls(r,a)||(e.uniform1iv(this.addr,a),Rs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Os,a[e])}function Tc(e){switch(e){case 5126:return oc;case 35664:return sc;case 35665:return cc;case 35666:return lc;case 35674:return uc;case 35675:return dc;case 35676:return fc;case 5124:case 35670:return pc;case 35667:case 35671:return mc;case 35668:case 35672:return hc;case 35669:case 35673:return gc;case 5125:return _c;case 36294:return vc;case 36295:return yc;case 36296:return bc;case 35678:case 36198:case 36298:case 36306:case 35682:return xc;case 35679:case 36299:case 36307:return Sc;case 35680:case 36300:case 36308:case 36293:return Cc;case 36289:case 36303:case 36311:case 36292:return wc}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ac(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tc(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Ac(e,t){e.seq.push(t),e.map[t.id]=t}function jc(e,t,n){let r=e.name,i=r.length;for(kc.lastIndex=0;;){let a=kc.exec(r),o=kc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ac(n,l===void 0?new Ec(s,e,t):new Dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Oc(s),Ac(n,e)),n=e}}}var Mc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);jc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Nc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Pc=37297,Fc=0;function Ic(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Lc=new H;function Rc(e){z._getMatrix(Lc,z.workingColorSpace,e);let t=`mat3( ${Lc.elements.map(e=>e.toFixed(4))} )`;switch(z.getTransfer(e)){case Fe:return[t,`LinearTransferOETF`];case o:return[t,`sRGBTransferOETF`];default:return P(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function zc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ic(e.getShaderSource(t),r)}return i}function Bc(e,t){let n=Rc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Vc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Hc(e,t){let n=Vc[t];return n===void 0?(P(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Uc=new G;function Wc(){return z.getLuminanceCoefficients(Uc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Uc.x.toFixed(4)}, ${Uc.y.toFixed(4)}, ${Uc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Gc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Jc).join(`
`)}function Kc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function qc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jc(e){return e!==``}function Yc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(e){return e.replace(Zc,el)}var $c=new Map;function el(e,t){let n=zo[t];if(n===void 0){let e=$c.get(t);if(e!==void 0)n=zo[e],P(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Qc(n)}var tl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(e){return e.replace(tl,rl)}function rl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function il(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var al={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ol(e){return al[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var sl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function cl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:sl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ll={302:`ENVMAP_MODE_REFRACTION`};function ul(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ll[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var dl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function fl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:dl[e.combine]||`ENVMAP_BLENDING_NONE`}function pl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ml(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ol(n),l=cl(n),u=ul(n),d=fl(n),f=pl(n),p=Gc(n),m=Kc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Jc).join(`
`),_.length>0&&(_+=`
`)):(g=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jc).join(`
`),_=[il(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:zo.tonemapping_pars_fragment,n.toneMapping===0?``:Hc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,zo.colorspace_pars_fragment,Bc(`linearToOutputTexel`,n.outputColorSpace),Wc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jc).join(`
`)),o=Qc(o),o=Yc(o,n),o=Xc(o,n),s=Qc(s),s=Yc(s,n),s=Xc(s,n),o=nl(o),s=nl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Nc(i,i.VERTEX_SHADER,y),S=Nc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=zc(i,x,`vertex`),n=zc(i,S,`fragment`);oe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):P(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Mc(i,h),T=qc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Pc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var hl=0,gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _l(e),t.set(e,n)),n}},_l=class{constructor(e){this.id=hl++,this.code=e,this.usedTimes=0}};function vl(e){return e===1030||e===37490||e===36285}function yl(e,t,n,r,i,a){let o=new Ze,s=new gl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&P(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Bo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,F=h.isBatchedMesh===!0,ee=!!i.map,I=!!i.matcap,te=!!x,L=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,R=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.retroreflectivity>0,fe=i.iridescence>0,pe=i.sheen>0,me=i.transmission>0,B=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=fe&&!!i.iridescenceMap,ye=fe&&!!i.iridescenceThicknessMap,be=pe&&!!i.sheenColorMap,xe=pe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,V=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=me&&!!i.transmissionMap,H=me&&!!i.thicknessMap,Te=!!i.gradientMap,Ee=!!i.alphaMap,U=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,ke=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ke=e.toneMapping);let Ae={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:F,batchingColor:F&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:z.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:I,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&vl(i.normalMap.format),metalnessMap:R,roughnessMap:se,anisotropy:ce,anisotropyMap:B,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,retroreflection:de,iridescence:fe,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:pe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:V,specularIntensityMap:Ce,transmission:me,transmissionMap:we,thicknessMap:H,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ee,alphaTest:U,alphaHash:De,combine:i.combine,mapUv:ee&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:oe&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:B&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:V&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:H&&m(i.thicknessMap.channel),alphaMapUv:Ee&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ee||Ee),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ke,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&z.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&z.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||F)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Bo[t];n=tt.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ml(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function bl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||xl),r.length>1&&r.sort(t||Sl),i.length>1&&i.sort(t||Sl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cl,e.set(t,[i])):n>=r.length?(i=new Cl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new K};break;case`SpotLight`:n={position:new G,direction:new G,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function El(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Dl=0;function Ol(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kl(e){let t=new Tl,n=El(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new q,o=new q;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ol);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Dl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Al(e){let t=new kl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function jl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Al(e),t.set(n,[a])):r>=i.length?(a=new Al(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ml=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nl=`uniform sampler2D shadow_pass;
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
}`,Pl=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Fl=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Il=new q,Ll=new G,Rl=new G;function zl(e,t,n){let r=new C,a=new W,o=new W,s=new Ge,c=new ut,l=new ce,u={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new y({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Ml,fragmentShader:Nl}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let _=new Ce;_.setAttribute(`position`,new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new R(_,m),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(t,n,c){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||t.length===0)return;this.type===2&&(P(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=x!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],p=u.shadow;if(p===void 0){P(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let _=p.getFrameExtents();a.multiply(_),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/_.x),a.x=o.x*_.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/_.y),a.y=o.y*_.y,p.mapSize.y=o.y));let v=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=v,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(u.isPointLight){P(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Se(a.x,a.y,{format:N,type:_e,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),p.map.texture.name=u.name+`.shadowMap`,p.map.depthTexture=new g(a.x,a.y,pe),p.map.depthTexture.name=u.name+`.shadowMapDepth`,p.map.depthTexture.format=A,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else u.isPointLight?(p.map=new gs(a.x),p.map.depthTexture=new d(a.x,Ee)):(p.map=new Se(a.x,a.y),p.map.depthTexture=new g(a.x,a.y,Ee)),p.map.depthTexture.name=u.name+`.shadowMap`,p.map.depthTexture.format=A,this.type===1?(p.map.depthTexture.compareFunction=v?518:515,p.map.depthTexture.minFilter=Oe,p.map.depthTexture.magFilter=Oe):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let y=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();u.isPointLight!==!0&&p.updateMatrices(u,c);for(let t=0;t<y;t++){let i=p.getCamera(t);if(u.isPointLight){let e=p.camera,n=p.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ll.setFromMatrixPosition(u.matrixWorld),e.position.copy(Ll),Rl.copy(e.position),Rl.add(Pl[t]),e.up.copy(Fl[t]),e.lookAt(Rl),e.updateMatrixWorld(),n.makeTranslation(-Ll.x,-Ll.y,-Ll.z),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,c,i,u,this.type)}p.isPointLightShadow!==!0&&this.type===3&&S(p,c),p.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(l,u,p)};function S(n,r){let i=t.update(v);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Se(a.x,a.y,{format:N,type:_e}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,v,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,h,v,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bl(e,t){function n(){let t=!1,n=new Ge,r=null,i=new Ge(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=I[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,te={},L=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Ge().fromArray(L),ie=new Ge().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let R={};R[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),R[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),R[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),B(!1),he(1),z(e.CULL_FACE),pe(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:oe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:oe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:oe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:oe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),B(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function B(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?se(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ve(t){t?z(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function be(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||R[t]),i.type=t,i.texture=n)}function xe(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function V(){try{e.compressedTexImage3D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function U(){try{e.texStorage3D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){oe(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function W(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function je(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:B,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:V,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:U,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:H,compressedTexSubImage3D:Te,scissor:W,viewport:je,reset:Pe}}function Vl(e,t,n,r,a,o,s){let u=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,d=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),f=new W,p=new WeakMap,m=new Set,h,g=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function v(e,t){return _?new OffscreenCanvas(e,t):dt(`canvas`)}function y(e,t,n){let r=1,i=U(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);h===void 0&&(h=v(n,a));let o=t?v(n,a):h;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),P(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&P(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function b(e){return e.generateMipmaps}function x(t){e.generateMipmap(t)}function S(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];P(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||P(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Fe:z.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function w(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,P(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function T(e,t){return b(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&p.delete(t),t.isHTMLTexture&&m.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),M(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=g.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&A(e),Object.keys(i).length===0&&g.delete(n)}r.remove(e)}function A(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=g.get(i);delete a[n.__cacheKey],s.memory.textures--}function M(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}let N=0;function F(){N=0}function I(){return N}function te(e){N=e}function L(){let e=N;return e>=a.maxTextures&&P(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+a.maxTextures),N+=1,e}function ne(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&Te(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)P(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)P(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function R(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?B(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[j]:e.REPEAT,[c]:e.CLAMP_TO_EDGE,[He]:e.MIRRORED_REPEAT},ce={[i]:e.NEAREST,[k]:e.NEAREST_MIPMAP_NEAREST,[Re]:e.NEAREST_MIPMAP_LINEAR,[Oe]:e.LINEAR,[Qe]:e.LINEAR_MIPMAP_NEAREST,[je]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&P(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,a.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=g.get(i);a===void 0&&(a={},g.set(i,a));let o=ne(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,i,s){let c=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(c=e.TEXTURE_3D);let u=de(t,i),d=i.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(d);if(d.version!==f.__version||u===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&i.image instanceof ImageBitmap)){let t=z.getPrimaries(z.workingColorSpace),r=i.colorSpace===``?null:z.getPrimaries(i.colorSpace),a=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);let t=y(i.image,!1,a.maxTextureSize);t=Ee(i,t);let r=o.convert(i.format,i.colorSpace),p=o.convert(i.type),h=C(i.internalFormat,r,p,i.normalized,i.colorSpace,i.isVideoTexture);ue(c,i);let g,_=i.mipmaps,v=i.isVideoTexture!==!0,S=f.__version===void 0||u===!0,E=d.dataReady,D=T(i,t);if(i.isDepthTexture)h=w(i.format===ee,i.type),S&&(v?n.texStorage2D(e.TEXTURE_2D,1,h,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,null));else if(i.isDataTexture){if(_.length>0){v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data);i.generateMipmaps=!1}else v?(S&&n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height),E&&pe(i,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,h,t.width,t.height,0,r,p,t.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){v&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,_[0].width,_[0].height,t.depth);for(let a=0,o=_.length;a<o;a++)if(g=_[a],i.format!==1023){if(r!==null){if(v){if(E){if(i.layerUpdates.size>0){let t=l(g.width,g.height,i.format,i.type);for(let o of i.layerUpdates){let i=g.data.subarray(o*t/g.data.BYTES_PER_ELEMENT,(o+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,g.width,g.height,1,r,i)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,h,g.width,g.height,t.depth,0,g.data,0,0)}else P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,g.width,g.height,t.depth,r,p,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,h,g.width,g.height,t.depth,0,r,p,g.data);i.layerUpdates.size>0&&i.clearLayerUpdates()}else{v&&S&&n.texStorage2D(e.TEXTURE_2D,D,h,_[0].width,_[0].height);for(let t=0,a=_.length;t<a;t++)g=_[t],i.format===1023?v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,r,p,g.data):r===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,h,g.width,g.height,0,g.data)}}else if(i.isDataArrayTexture){if(v){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,h,t.width,t.height,t.depth),E){if(i.layerUpdates.size>0){let a=l(t.width,t.height,i.format,i.type);for(let o of i.layerUpdates){let i=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,p,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,h,t.width,t.height,t.depth,0,r,p,t.data)}else if(i.isData3DTexture)v?(S&&n.texStorage3D(e.TEXTURE_3D,D,h,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,h,t.width,t.height,t.depth,0,r,p,t.data);else if(i.isFramebufferTexture){if(S){if(v)n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,h,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(i.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),m.add(i),n.onpaint=e=>{let t=e.changedElements;for(let e of m)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&S){let t=U(_[0]);n.texStorage2D(e.TEXTURE_2D,D,h,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)g=_[t],v?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,g):n.texImage2D(e.TEXTURE_2D,t,h,r,p,g);i.generateMipmaps=!1}else if(v){if(S){let r=U(t);n.texStorage2D(e.TEXTURE_2D,D,h,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,h,r,p,t);b(i)&&x(c),f.__version=d.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function B(t,i,s){if(i.image.length!==6)return;let c=de(t,i),l=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=z.getPrimaries(z.workingColorSpace),r=i.colorSpace===``?null:z.getPrimaries(i.colorSpace),d=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=i.isCompressedTexture||i.image[0].isCompressedTexture,p=i.image[0]&&i.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=y(i.image[e],!0,a.maxCubemapSize):m[e]=p?i.image[e].image:i.image[e],m[e]=Ee(i,m[e]);let h=m[0],g=o.convert(i.format,i.colorSpace),_=o.convert(i.type),v=C(i.internalFormat,g,_,i.normalized,i.colorSpace),S=i.isVideoTexture!==!0,w=u.__version===void 0||c===!0,E=l.dataReady,D=T(i,h);ue(e.TEXTURE_CUBE_MAP,i);let O;if(f){S&&w&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let a=O[r];i.format===1023?S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?P(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):S?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(O=i.mipmaps,S&&w){O.length>0&&D++;let t=U(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<O.length;r++){let i=O[r];S?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}b(i)&&x(e.TEXTURE_CUBE_MAP),u.__version=l.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function he(t,i,a,s,c,l){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=C(a.internalFormat,d,f,a.normalized,a.colorSpace),m=r.get(i),h=r.get(a);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>l),r=Math.max(1,i.height>>l);c===e.TEXTURE_3D||c===e.TEXTURE_2D_ARRAY?n.texImage3D(c,l,p,t,r,i.depth,0,d,f,null):n.texImage2D(c,l,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),H(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,c,h.__webglTexture,0,we(i)):(c===e.TEXTURE_2D||c>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&c<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,c,h.__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=w(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),c=o.convert(a.type),l=C(a.internalFormat,s,c,a.normalized,a.colorSpace);H(n)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),l,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _e(t,i,a){let s=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);if(c.__renderTarget=i,c.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),s){if(c.__webglInit===void 0&&(c.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),c.__webglTexture===void 0){c.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=o.convert(i.depthTexture.format),r=o.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let l=c.__webglTexture,d=we(i),f=s?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)H(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0);else if(i.depthTexture.format===1027)H(i)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ve(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)_e(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?_e(i.__webglFramebuffer[0],t,0):_e(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ge(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&he(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ve(t)}function be(t){let i=t.texture,a=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&H(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=C(r.internalFormat,i,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)he(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else he(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);b(i)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,o=l.length;i<o;i++){let o=l[i],s=r.get(o),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),ue(c,o),he(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,c,0),b(o)&&x(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)he(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else he(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);b(i)&&x(r),n.unbindTexture()}t.depthBuffer&&ve(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(b(a)){let t=S(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}let Se=[],V=[];function Ce(t){if(t.samples>0){if(H(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),d===!0&&(Se.length=0,V.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(c),V.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,V)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&d){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(a.maxSamples,e.samples)}function H(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Te(e){let t=s.render.frame;p.get(e)!==t&&(p.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(z.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&P(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):oe(`WebGLTextures: Unsupported texture color space:`,n)),t}function U(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(f.width=e.naturalWidth||e.width,f.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(f.width=e.displayWidth,f.height=e.displayHeight):(f.width=e.width,f.height=e.height),f}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=te,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=ae,this.setTextureCube=R,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Hl(e,t){function n(n,r=``){let i,a=z.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ul=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wl=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new y({vertexShader:Ul,fragmentShader:Wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new R(new _t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends ht{constructor(e,t){super();let n=this,r=null,i=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Gl,v={},y=t.getContextAttributes(),b=null,x=null,S=[],C=[],w=new W,T=null,D=null,O=new E;O.viewport=new Ge;let k=new E;k.viewport=new Ge;let j=[O,k],M=new Pe,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new ct,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new ct,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new ct,S[e]=t),t.getHandSpace()};function I(e){let t=C.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,L);for(let e=0;e<S.length;e++){let t=C[e];t!==null&&(C[e]=null,S[e].disconnect(t))}N=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,d=null,r=null,x=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&P(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&h&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(a){if(r=a,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,L),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:A,a=y.stencil?Xe:Ee);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Se(f.textureWidth,f.textureHeight,{format:be,type:Ie,depthTexture:new g(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Se(p.framebufferWidth,p.framebufferHeight,{format:be,type:Ie,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function L(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=C.indexOf(n);r>=0&&(C[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=C.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=C.length){C.push(n),r=e;break}else if(C[e]===null){C[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let ne=new G,re=new G;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=k.near=O.near=t,M.far=k.far=O.far=n,(N!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,F=M.far),M.layers.mask=e.layers.mask|6,O.layers.mask=M.layers.mask&-5,k.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ae(M,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(M,O,k):M.projectionMatrix.copy(O.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,M,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=et*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let R=null;function z(t,i){if(u=i.getViewerPose(l||o),m=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=j[n];o===void 0&&(o=new E,o.layers.enable(n),o.viewport=new Ge,j[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let o=r.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(o&&o.includes(`camera-access`)&&h){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new a,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=C[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,l||o)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let se=new Lo;se.setAnimationLoop(z),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},ql=new q,Jl=new H;Jl.set(-1,0,0,0,1,0,0,0,1);function Yl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,lt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ql.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return oe(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?P(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):P(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Zl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ql=null;function $l(){return Ql===null&&(Ql=new D(Zl,16,16,N,_e),Ql.name=`DFG_LUT`,Ql.minFilter=Oe,Ql.magFilter=Oe,Ql.wrapS=c,Ql.wrapT=c,Ql.generateMipmaps=!1,Ql.needsUpdate=!0),Ql}var eu=class{constructor(e={}){let{canvas:t=we(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Ie}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=p,g=new Set([ne,Be,O]),_=new Set([Ie,Ee,De,Xe,We,ot]),v=new Uint32Array(4),y=new Int32Array(4),b=new G,x=null,S=null,w=[],T=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,k=!1,A=null,j=null,M=null,N=null;this._outputColorSpace=gt;let F=0,ee=0,I=null,te=-1,L=null,re=new Ge,ie=new Ge,ae=null,R=new K(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new Ge(0,0,le,ue),B=new Ge(0,0,le,ue),he=!1,ge=new C,ve=!1,ye=!1,be=new q,xe=new G,V=new Ge,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},H=!1;function Te(){return I===null?de:1}let U=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,W,Me,Pe,Fe,Le,Re,ze,Ve,He,Ue,Ke,qe,Je,Ye,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),U===null){let t=`webgl2`;if(U=Oe(t,e),U===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),oe(`WebGLRenderer: `+e.message),e}function it(){ke=new vs(U),ke.init(),tt=new Hl(U,ke),Ae=new qo(U,ke,e,tt),W=new Bl(U,ke),Ae.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),j=U.createFramebuffer(),M=U.createFramebuffer(),N=U.createFramebuffer(),Me=new xs(U),Pe=new bl,Fe=new Vl(U,ke,W,Pe,Ae,tt,Me),Le=new _s(D),Re=new Ro(U),nt=new Go(U,Re),ze=new ys(U,Re,Me,nt),Ve=new Cs(U,ze,Re,nt,Me),Qe=new Ss(U,Ae,Fe),Je=new Jo(Pe),He=new yl(D,Le,ke,Ae,nt,Je),Ue=new Yl(D,Pe),Ke=new wl,qe=new jl(ke),Ze=new Wo(D,Le,W,Ve,m,s),Ye=new zl(D,Ve,Ae),rt=new Xl(U,Me,Ae,W),$e=new Ko(U,ke,Me),et=new bs(U,ke,Me),Me.programs=He.programs,D.capabilities=Ae,D.extensions=ke,D.properties=Pe,D.renderLists=Ke,D.shadowMap=Ye,D.state=W,D.info=Me}h!==1009&&(E=new Ts(h,t.width,t.height,o,r,i));let at=new Kl(D,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){at.isPresenting?P(`WebGLRenderer: Can't change size while VR device is presenting.`):(le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(h===1009)oe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){P(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),W.viewport(re.copy(me).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(B)},this.setScissor=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),W.scissor(ie.copy(B).multiplyScalar(de).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){W.setScissorTest(he=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=g.has(t)}if(e){let e=I.texture.type,t=_.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,U.clearBufferiv(U.COLOR,0,y))}else r|=U.COLOR_BUFFER_BIT}t&&(r|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&U.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),A=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),Pe.dispose(),Le.dispose(),Ve.dispose(),nt.dispose(),rt.dispose(),He.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,_t),at.removeEventListener(`sessionend`,vt),yt.stop()};function st(e){e.preventDefault(),se(`WebGLRenderer: Context Lost.`),k=!0}function ct(){se(`WebGLRenderer: Context Restored.`),k=!1;let e=Me.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;it(),Me.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function lt(e){oe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),Pe.remove(e)}function ft(e){let t=Pe.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);W.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(W.setLineWidth(r.wireframeLinewidth*Te()),g.setMode(U.LINES)):g.setMode(U.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),W.setLineWidth(e*Te()),i.isLineSegments?g.setMode(U.LINES):i.isLineLoop?g.setMode(U.LINE_LOOP):g.setMode(U.LINE_STRIP)}else i.isPoints?g.setMode(U.POINTS):i.isSprite&&g.setMode(U.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=Pe.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(U,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){A!==null&&e.isNodeMaterial&&A.setObject(r,e),ve===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),A!==null&&A.renderStart(e,t,n),S=qe.get(n),S.init(t),T.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights(),A!==null&&A.updateLights(S.state.lightsArray),ye=this.localClippingEnabled,ve=Je.init(this.clippingPlanes,ye),ve===!0&&Je.setGlobalState(this.clippingPlanes,t),A!==null&&Ye.render(S.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),S=T.pop(),A!==null&&A.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Pe.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Lo;yt.setAnimationLoop(ht),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){mt=e,at.setAnimationLoop(e),e===null?yt.stop():yt.start()},at.addEventListener(`sessionstart`,_t),at.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){oe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(k===!0)return;A!==null&&A.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=E!==null&&(I===null||n)&&E.begin(D,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,I),S=qe.get(e,T.length),S.init(t),S.state.textureUnits=Fe.getTextureUnits(),T.push(S),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(be,Ne,t.reversedDepth),ye=this.localClippingEnabled,ve=Je.init(this.clippingPlanes,ye),x=Ke.get(e,w.length),x.init(),w.push(x),at.enabled===!0&&at.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,D.sortObjects)}bt(e,t,0,D.sortObjects),x.finish(),A!==null&&A.updateLights(S.state.lightsArray),D.sortObjects===!0&&x.sort(fe,pe),H=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,H&&Ze.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Je.beginShadows();let i=S.state.shadowsArray;if(Ye.render(i,e,t),ve===!0&&Je.endShadows(),(r&&E.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(S.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}H&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(x,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),H&&Ze.render(e),xt(x,e,t)}I!==null&&ee===0&&(Fe.updateMultisampleRenderTarget(I),Fe.updateRenderTargetMipmap(I)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),nt.resetDefaultState(),te=-1,L=null,T.pop(),T.length>0?(S=T[T.length-1],Fe.setTextureUnits(S.state.textureUnits),ve===!0&&Je.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,w.pop(),x=w.length>0?w[w.length-1]:null,A!==null&&A.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)S.pushLightProbeGrid(e);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&V.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let i=Ve.update(e),a=e.material;a.visible&&x.push(e,i,a,n,V.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),V.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),V.copy(e.boundingSphere.center)),V.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,V.z,s,t)}}else a.visible&&x.push(e,i,a,n,V.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;S.setupLightsView(n),ve===!0&&Je.setGlobalState(D.clippingPlanes,n),r&&W.viewport(re.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[r.id]=new Se(1,1,{generateMipmaps:!0,type:e?_e:Ie,minFilter:je,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:z.workingColorSpace})}let a=S.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(R),ce=D.getClearAlpha(),ce<1&&D.setClearColor(16777215,.5),D.clear(),H&&Ze.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),S.setupLightsView(r),ve===!0&&Je.setGlobalState(D.clippingPlanes,r),Ct(e,n,r),Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(R,ce),d!==void 0&&(r.viewport=d),D.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){A!==null&&i.isNodeMaterial&&A.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=Ce);let r=Pe.get(e),i=S.state.lights,a=S.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,S.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=He.getUniforms(e),A!==null&&e.isNodeMaterial&&A.build(e,n,s),e.onBeforeCompile(s,D),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=S.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Mc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=Pe.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Ce),Fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:z.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Pe.get(r),y=S.state.lights;if(ve===!0&&(ye===!0||e!==L)){let t=e===L&&r.id===te;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=S.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),A&&r.isNodeMaterial&&A.onUpdateProgram(r,x,v));let C=!1,w=!1,T=!1,E=x.getUniforms(),O=v.uniforms;if(W.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=Ot(S.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||L!==e){W.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(U,`projectionMatrix`,e.projectionMatrix),E.setValue(U,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(U,xe.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&E.setValue(U,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(U,`isOrthographic`,e.isOrthographicCamera===!0),L!==e&&(L=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(U,`sunShadowMap`,y.state.sunShadowMap,Fe),y.state.directionalShadowMap.length>0&&E.setValue(U,`directionalShadowMap`,y.state.directionalShadowMap,Fe),y.state.spotShadowMap.length>0&&E.setValue(U,`spotShadowMap`,y.state.spotShadowMap,Fe),y.state.pointShadowMap.length>0&&E.setValue(U,`pointShadowMap`,y.state.pointShadowMap,Fe)),i.isSkinnedMesh){E.setOptional(U,i,`bindMatrix`),E.setOptional(U,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(U,`boneTexture`,e.boneTexture,Fe))}i.isBatchedMesh&&(E.setOptional(U,i,`batchingTexture`),E.setValue(U,`batchingTexture`,i._matricesTexture,Fe),E.setOptional(U,i,`batchingIdTexture`),E.setValue(U,`batchingIdTexture`,i._indirectTexture,Fe),E.setOptional(U,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(U,`batchingColorTexture`,i._colorsTexture,Fe));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Qe.update(i,n,x),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(U,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=$l()),w){if(E.setValue(U,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&At(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,de,ue,S.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}Mc.upload(U,Et(v),O,Fe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Mc.upload(U,Et(v),O,Fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(U,`center`,i.center),E.setValue(U,`modelViewMatrix`,i.modelViewMatrix),E.setValue(U,`normalMatrix`,i.normalMatrix),E.setValue(U,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=Pe.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Pe.get(e.texture).__webglTexture=t,Pe.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Pe.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,F=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=Pe.get(e);if(o.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(U.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,W.viewport(re),W.scissor(ie),W.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)Fe.setupRenderTarget(e);else if(o.__hasExternalTextures)Fe.rebindTextures(e,Pe.get(e.texture).__webglTexture,Pe.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Pe.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Pe.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Fe.useMultisampledRTT(e)===!1?Pe.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(me).multiplyScalar(de).floor(),ie.copy(B).multiplyScalar(de).floor(),ae=he;if(n!==0&&(r=j),W.bindFramebuffer(U.FRAMEBUFFER,r)&&W.drawBuffers(e,r),W.viewport(re),W.scissor(ie),W.setScissorTest(ae),i){let r=Pe.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Pe.get(e.textures[t]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Pe.get(e.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,t.__webglTexture,n)}te=-1};function Mt(e){let t=Pe.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){W.bindFramebuffer(U.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&U.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=I===null?null:Pe.get(I).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Pe.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){W.bindFramebuffer(U.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let p=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,p),U.bufferData(U.PIXEL_PACK_BUFFER,a.byteLength,U.STREAM_READ),U.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let m=I===null?null:Pe.get(I).__webglFramebuffer;W.bindFramebuffer(U.FRAMEBUFFER,m);let h=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await f(U,h,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,p),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,a),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(p),U.deleteSync(h),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Fe.setTexture2D(e,0),U.copyTexSubImage2D(U.TEXTURE_2D,n,0,0,o,s,i,a),W.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Fe.setTexture3D(t,0),v=U.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Fe.setTexture2DArray(t,0),v=U.TEXTURE_2D_ARRAY):(Fe.setTexture2D(t,0),v=U.TEXTURE_2D),W.activeTexture(U.TEXTURE0),W.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,t.flipY),W.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),W.pixelStorei(U.UNPACK_ALIGNMENT,t.unpackAlignment);let y=W.getParameter(U.UNPACK_ROW_LENGTH),b=W.getParameter(U.UNPACK_IMAGE_HEIGHT),x=W.getParameter(U.UNPACK_SKIP_PIXELS),S=W.getParameter(U.UNPACK_SKIP_ROWS),C=W.getParameter(U.UNPACK_SKIP_IMAGES);W.pixelStorei(U.UNPACK_ROW_LENGTH,h.width),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,h.height),W.pixelStorei(U.UNPACK_SKIP_PIXELS,l),W.pixelStorei(U.UNPACK_SKIP_ROWS,u),W.pixelStorei(U.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Pe.get(e),r=Pe.get(t),h=Pe.get(n.__renderTarget),g=Pe.get(r.__renderTarget);W.bindFramebuffer(U.READ_FRAMEBUFFER,h.__webglFramebuffer),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(e).__webglTexture,i,d+n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.get(t).__webglTexture,a,m+n)),U.blitFramebuffer(l,u,o,s,f,p,o,s,U.DEPTH_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Pe.has(e)){let n=Pe.get(e),r=Pe.get(t);W.bindFramebuffer(U.READ_FRAMEBUFFER,M),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let e=0;e<c;e++)w?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,n.__webglTexture,i),T?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,r.__webglTexture,a),i===0?T?U.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):U.copyTexSubImage2D(v,a,f,p,l,u,o,s):U.blitFramebuffer(l,u,o,s,f,p,o,s,U.COLOR_BUFFER_BIT,U.NEAREST);W.bindFramebuffer(U.READ_FRAMEBUFFER,null),W.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?U.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):U.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):U.texSubImage2D(U.TEXTURE_2D,a,f,p,o,s,g,_,h);W.pixelStorei(U.UNPACK_ROW_LENGTH,y),W.pixelStorei(U.UNPACK_IMAGE_HEIGHT,b),W.pixelStorei(U.UNPACK_SKIP_PIXELS,x),W.pixelStorei(U.UNPACK_SKIP_ROWS,S),W.pixelStorei(U.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&U.generateMipmap(v),W.unbindTexture()},this.initRenderTarget=function(e){Pe.get(e).__webglFramebuffer===void 0&&Fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Fe.setTextureCube(e,0):e.isData3DTexture?Fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Fe.setTexture2DArray(e,0):Fe.setTexture2D(e,0),W.unbindTexture()},this.resetState=function(){F=0,ee=0,I=null,W.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ne}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=z._getDrawingBufferColorSpace(e),t.unpackColorSpace=z._getUnpackColorSpace()}};function tu(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}[`#b94a31`,`#c4553a`,`#ad432c`,`#c95e40`,`#b65038`,`#bf4d33`,`#a8402b`].map(tu),[`#6a655d`,`#5e5a54`,`#726b60`,`#56524d`,`#635d55`,`#6e6962`,`#5a5650`,`#67605a`].map(tu);var nu={maxDpr:2,pixelBudget:22e5,minDpr:.75},ru={windowFrames:90,lateMs:20,lateShare:.25,step:.85,tries:2,helped:.6,warmupMs:2e3,settleMs:1e3,gapMs:250},iu=e=>Math.floor(e*100)/100;function au(e,t,n,r){let i=Math.min(Number.isFinite(n)&&n>0?n:1,r.maxDpr),a=Math.sqrt(r.pixelBudget/Math.max(1,e*t));return iu(Math.max(Math.min(i,1),Math.min(i,a)))}var ou=class{o;scale=1;lastBase;warmLeft=ru.warmupMs;frames=0;late=0;phase=`watch`;origin={scale:1,share:0};tries=0;constructor(e=nu){this.o=e,this.lastBase=e.maxDpr}dpr(e,t,n){let r=au(e,t,n,this.o);return this.lastBase=r,Math.max(Math.min(r,this.o.minDpr),iu(r*this.scale))}reset(){this.warmLeft=ru.warmupMs,this.frames=0,this.late=0}frame(e){if(!(e>=0)||e>ru.gapMs)return this.frames=0,this.late=0,!1;if(this.warmLeft>0)return this.warmLeft-=e,!1;if(this.frames++,e>ru.lateMs&&this.late++,this.frames<ru.windowFrames)return!1;let t=this.late/this.frames;if(this.frames=0,this.late=0,this.phase===`done`)return!1;if(this.phase===`verify`){if(t<ru.lateShare||t<=this.origin.share*ru.helped)this.phase=`watch`;else if(this.tries>=ru.tries)return this.scale=this.origin.scale,this.phase=`done`,this.warmLeft=ru.settleMs,!0;else return this.step()}return t<ru.lateShare?!1:(this.origin={scale:this.scale,share:t},this.tries=0,this.step())}step(){return this.lastBase*this.scale<=this.o.minDpr?(this.phase=`done`,!1):(this.scale*=ru.step,this.tries++,this.phase=`verify`,this.warmLeft=ru.settleMs,!0)}},su={volume:.3,sampleRate:44100,audioContext:new AudioContext,play:function(...e){return this.playSamples([this.buildSamples(...e)])},playSamples:function(e,t=1,n=1,r=0,i=!1){let a=e.length,o=e[0].length,s=this.audioContext.createBuffer(a,o,this.sampleRate),c=this.audioContext.createBufferSource();e.forEach((e,t)=>s.getChannelData(t).set(e)),c.buffer=s,c.playbackRate.value=n,c.loop=i;let l=this.audioContext.createGain();l.gain.value=this.volume*t,l.connect(this.audioContext.destination),c.gainNode=l;let u=new StereoPannerNode(this.audioContext,{pan:r});return c.connect(u).connect(l),c.start(),c},buildSamples:function(e=1,t=.05,n=220,r=0,i=0,a=.1,o=0,s=1,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=1,v=0,y=0,b=0){let x=this.sampleRate,S=Math.PI*2,C=Math.abs,w=e=>e<0?-1:1,T=c*=500*S/x/x,E=n*=(1+t*2*Math.random()-t)*S/x,D=0,O=0,k=0,A=1,j,M,N=0,P=0,F=0,ee,I=S*C(b)*2/x,te=Math.cos(I),L=Math.sin(I)/2/2,ne=1+L,re=-2*te/ne,ie=(1-L)/ne,ae=(1+w(b)*te)/2/ne,oe=-(w(b)+te)/ne,R=ae,z=0,se=0,ce=0,le=0;for(r=r*x||9,v*=x,i*=x,a*=x,g*=x,l*=500*S/x**3,m*=S/x,u*=S/x,d*=x,f=f*x|0,j=r+v+i+a+g|0,M=new Float32Array(j>0?j:0);P<j;M[P++]=F*e)++k%(h*100|0)||(F=o?o>1?o>2?o>3?o>4?N/S%1<s/2?1:-1:Math.sin(N**3):Math.max(Math.min(Math.tan(N),1),-1):1-(2*N/S%2+2)%2:1-4*C(Math.round(N/S)-N/S):Math.sin(N),F=(f?1-y+y*Math.sin(S*P/f):1)*(o>4?F:w(F)*C(F)**s)*(P<r?P/r:P<r+v?1-(P-r)/v*(1-_):P<r+v+i?_:P<j-g?(j-P-g)/a*_:0),F=g?F/2+(g>P?0:(P<j-g?1:(j-P)/g)*M[P-g|0]/2/e):F,b&&(F=le=R*z+oe*(z=se)+ae*(se=F)-ie*ce-re*(ce=le))),ee=(n+=c+=l)*Math.cos(m*D++),N+=ee+ee*p*(P*P*S%2-1),A&&++A>d&&(n+=u,E+=u,A=0),f&&!(++O%f)&&(n=E,c=T,A||=1);return M},getNote:function(e=0,t=440){return t*2**(e/12)}},cu=.001;function lu(e){let t=t=>{for(let n=0;n<e.numberOfChannels;n++)if(Math.abs(e.getChannelData(n)[t])>cu)return!0;return!1},n=0,r=e.length-1,i=Math.min(e.length>>2,Math.round(e.sampleRate*.2));for(;n<i&&!t(n);)n++;for(;r>e.length-1-i&&!t(r);)r--;return r<=n?[0,e.length/e.sampleRate]:[n/e.sampleRate,(r+1)/e.sampleRate]}var uu=.001,du=.05;function fu(e){let t=Array.from({length:e.numberOfChannels},(t,n)=>e.getChannelData(n)),n=e.length-1;for(;n>0&&!t.some(e=>Math.abs(e[n])>uu);)n--;return Math.min(e.length/e.sampleRate,(n+1)/e.sampleRate+du)}async function pu(e,t,n=`assets/audio/`){if(typeof fetch!=`function`||typeof location<`u`&&location.protocol===`file:`)return;let r;try{let e=await fetch(`${n}manifest.json`);if(!e.ok)throw Error(`HTTP ${e.status}`);if(r=await e.json(),!r||typeof r.sounds!=`object`)throw Error(`no sounds`)}catch(e){console.warn(`Nakavt: no audio manifest (${e instanceof Error?e.message:String(e)}); synthesized sounds play`);return}let i=new Map,a=t=>{let r=i.get(t);return r||(r=(async()=>{let r=await fetch(`${n}${t}`);if(!r.ok)throw Error(`${t}: HTTP ${r.status}`);return e.decodeAudioData(await r.arrayBuffer())})(),i.set(t,r)),r};await Promise.all(Object.entries(r.sounds).map(async([e,n])=>{try{if(!n?.files?.length)return;let r=await Promise.all(n.files.map(a)),i=r.map(lu);t(e,{buffers:r,volume:Math.min(4,Math.max(0,n.volume??1)),loop:!!n.loop,loopStart:i.map(e=>e[0]),loopEnd:i.map(e=>e[1]),end:r.map(fu)})}catch(t){console.warn(`Nakavt: audio "${e}" not used (${t instanceof Error?t.message:String(t)}); its fallback plays`)}}))}var mu=.95,hu=0,gu=1,_u=2,X=4,vu=5,yu=e=>-e/2,bu=e=>e/2,xu=(e,t)=>e*2**(t/12),Su={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Cu(e){let t=/^([A-G])([#b]?)(-?\d)$/.exec(e);if(!t)throw Error(`bad note ${e}`);return 440*2**((12*(Number(t[3])+1)+Su[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0)-69)/12)}function wu(e){let t=e.freq??(e.shape===X?2e3:220),n=e.slide??0,r=e.deltaSlide??0;if(e.dropTo!==void 0){let i=(e.attack??0)+(e.decay??0)+(e.sustain??0)+(e.release??.1);n=(e.dropTo-t)/(250*i),r=-n/i}return[1,0,t,e.attack??0,e.sustain??0,e.release??.1,e.shape??hu,e.curve??1,n,r,e.jump??0,e.jumpTime??0,e.repeat??0,e.noise??0,e.mod??0,e.crush??0,e.delay??0,e.sustainVol??1,e.decay??0,e.tremolo??0,e.filter??0]}function Tu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Eu(e,t,n){let r=1/t,i=n/(125*r);return{freq:e-2/3*n,slide:i,deltaSlide:-2*i/r,repeat:r}}function Du(e,t,n=740,r=2.2){return[...[[1,1,1],[1.0035,.6,.9],[2.02,.42,.62],[2.74,.4,.45],[3.76,.26,.28],[5.1,.16,.16],[6.9,.1,.09]].map(([i,a,o])=>({at:e,freq:n*i,shape:hu,attack:.001,decay:.08,sustainVol:.55,release:r*o,gain:t*a*.6})),{at:e,shape:X,attack:5e-4,release:.02,filter:bu(3e3),gain:t*.35},{at:e,freq:n*4.3,shape:gu,slide:-40,attack:5e-4,release:.015,gain:t*.2}]}function Ou(e,t,n,r,i=0,a=!1){let o={attack:.012,decay:.06,sustainVol:.72,sustain:Math.max(0,n-.07),release:n>.3?.24:.09},s=a?Eu(e,5.5,e*.012):{freq:e};return[{...o,...s,at:t,shape:_u,filter:yu(Math.min(e*4.5,3400)),gain:r,pan:i},{...o,...s,at:t,freq:e*1.004,shape:_u,filter:yu(Math.min(e*3,2600)),gain:r*.4,pan:-i},{...o,at:t,freq:e/2,shape:gu,gain:r*.5,pan:i}]}function ku(e,t,n,r,i=!1){let a=e.length>1?.55:0;return e.flatMap((o,s)=>Ou(o,t,n,r,e.length>1?-a+2*a*s/(e.length-1):0,i))}function Au(e,t,n=75){return[{at:e,freq:n,shape:hu,curve:.6,dropTo:n*.55,attack:.002,decay:.04,sustainVol:.6,release:.3,gain:t},{at:e,shape:X,attack:5e-4,release:.03,filter:yu(2200),gain:t*.35}]}function ju(e,t,n=1){return[{at:e,freq:1800+n*97,shape:X,attack:8e-4,release:.12,filter:bu(1500),gain:t*.7},{at:e,freq:210,shape:gu,slide:-6,attack:.001,release:.06,gain:t*.5},{at:e,freq:2600+n*131,shape:X,attack:8e-4,release:.05,filter:yu(4500),gain:t*.5}]}function Mu(e,t,n){return[{at:e,freq:3100,shape:X,attack:.002,decay:.08,sustainVol:.4,release:t,filter:bu(4500),gain:n},{at:e,freq:3700,shape:X,attack:.002,release:.12,filter:bu(2e3),gain:n*.6}]}function Nu(e,t,n,r=0){let i=4/3*t;return[{at:e,freq:t,jump:i-t,jumpTime:.05,attack:.001,decay:.03,sustainVol:.55,sustain:.04,release:.18,shape:gu,gain:n,pan:r},{at:e+.05,freq:i*2,attack:.002,release:.12,shape:hu,gain:n*.22,pan:r}]}function Pu(e,t,n,r,i){let a=Tu(e),o=[1567.98,1760,1975.53,2349.32,2637.02],s=[];for(let e=0;e<t;e++){let c=n+(r-n)*e/Math.max(1,t-1)+(a()-.5)*.03;s.push(...Nu(Math.max(0,c),o[Math.floor(a()*o.length)],i*(.6+a()*.4),(a()*2-1)*.7))}return s}function Fu(e,t,n,r=0){return t.map(([t,i],a)=>({at:e+a*n,freq:1700+a*211,shape:X,attack:n*2,release:n*2,filter:yu(t),gain:i*.5,pan:r}))}function Iu(e,t){let n=Tu(e),r=[];for(let e=0;e<t.count;e++){let e=t.f0[0]+n()*(t.f0[1]-t.f0[0]),i=4+n()*3.5,a=1/i,o=Eu(e,i,e*(t.vib??.03)*(.6+n()*.8));t.rise&&Object.assign(o,{jump:t.rise*a*(.6+n()*.8),jumpTime:a/2}),t.fall&&(o.mod=t.fall*(.7+n()*.6)),r.push({at:t.at+n()*(t.spread??.12),...o,shape:n()<.75?_u:gu,attack:t.attack*(.7+n()*.6),sustain:t.dur[0]+n()*(t.dur[1]-t.dur[0]),release:t.release*(.7+n()*.6),noise:t.rough*(.6+n()*.8),filter:yu(t.cut[0]+n()*(t.cut[1]-t.cut[0])),gain:t.gain*(.6+n()*.4),pan:(n()*2-1)*(t.panWidth??.85),wrap:t.wrap})}return r}function Lu(e,t,n,r,i,a=!1,o=!0){let s=Tu(e),c=[];for(let e=0;e<t;e++){let e=o?s()**1.4:s();c.push({at:n+e*(r-n),freq:1500+s()*2500,shape:X,attack:8e-4,release:.012+s()*.018,filter:s()<.5?yu(2200+s()*1200):bu(700+s()*500),gain:i*(.45+s()*.55)*(o?1-.5*e:1),pan:(s()*2-1)*.85,wrap:a})}return c}function Ru(e,t,n,r=0,i=!1){return[{at:e,freq:t,shape:hu,slide:22,attack:.03,sustain:.08,release:.03,gain:n,pan:r,wrap:i},{at:e+.13,freq:t+1250,shape:hu,slide:-9,attack:.02,sustain:.14,release:.18,gain:n,pan:r,wrap:i}]}function zu(e,t){return[{at:e+.085,freq:2300,shape:X,attack:.002,release:.07,filter:yu(1800),gain:t*.32},{at:e+.17,freq:2900,shape:X,attack:.004,release:.1,filter:yu(1300),gain:t*.2},{at:e+.27,freq:3500,shape:X,attack:.006,release:.14,filter:yu(900),gain:t*.12}]}function Bu(e,t,n){return[{freq:e,shape:hu,curve:.5,dropTo:e*.4,attack:.001,decay:.015,sustainVol:.5,release:.06,gain:.9},{shape:X,attack:6e-4,release:.03,filter:yu(t),gain:.95},{freq:3100,shape:X,attack:4e-4,release:.012,filter:bu(1500),gain:.35},{freq:n,shape:gu,slide:-20,attack:5e-4,release:.02,gain:.3},{freq:66,shape:hu,attack:.003,release:.07,gain:.3}]}function Vu(e,t){return[{freq:e,shape:hu,curve:.5,dropTo:e*.42,attack:.002,decay:.03,sustainVol:.6,sustain:.02,release:.14,gain:1},{shape:X,attack:.001,release:.07,filter:yu(t),gain:.85},{freq:3300,shape:X,attack:5e-4,release:.02,filter:bu(1200),gain:.3},{freq:52,shape:hu,attack:.003,release:.2,gain:.5},{freq:380,shape:gu,slide:-12,attack:.001,release:.03,gain:.3},...zu(0,.5)]}function Hu(){return[{shape:X,attack:4e-4,release:.03,gain:.6},{freq:2600,shape:X,attack:8e-4,release:.07,filter:yu(4800),gain:.7},{freq:150,shape:hu,curve:.4,dropTo:46,attack:.001,decay:.04,sustainVol:.6,sustain:.04,release:.2,gain:1},{freq:110,shape:_u,dropTo:50,attack:.002,release:.18,filter:yu(900),gain:.4},{freq:62,shape:hu,dropTo:34,attack:.003,decay:.08,sustainVol:.7,release:.45,gain:.95},{freq:3100,shape:X,attack:.01,release:.35,filter:yu(900),gain:.32},...zu(0,.9)]}function Uu(){return[...Fu(0,[[260,.15],[380,.35],[560,.6],[820,.85],[1200,1],[1600,1],[1900,.85],[1600,.65],[1200,.45],[850,.28],[600,.14],[450,.05]],.026),{freq:3900,shape:X,attack:.13,release:.16,filter:bu(3200),gain:.05}]}function Wu(){return[{freq:210,shape:hu,curve:.6,dropTo:80,attack:.001,release:.05,gain:.8},{shape:X,attack:8e-4,release:.04,filter:yu(1400),gain:.95},{at:.028,freq:2500,shape:X,attack:.001,release:.03,filter:yu(1100),gain:.5},{at:.028,freq:160,shape:hu,dropTo:70,attack:.001,release:.04,gain:.4},{freq:1100,shape:gu,slide:-25,attack:5e-4,release:.012,gain:.15}]}function Gu(){return[{shape:X,attack:4e-4,release:.025,gain:.55},{freq:2600,shape:X,attack:8e-4,release:.08,filter:yu(2600),gain:.85},{freq:120,shape:hu,curve:.4,dropTo:42,attack:.001,decay:.04,sustainVol:.65,sustain:.05,release:.22,gain:1},{freq:56,shape:hu,dropTo:32,attack:.003,decay:.08,sustainVol:.7,release:.5,gain:.9},...zu(0,.8),{at:.07,...Eu(170,6,6),mod:.2,shape:_u,noise:.28,attack:.04,decay:.08,sustainVol:.75,sustain:.22,release:.35,filter:yu(1050),gain:.42},{at:.07,...Eu(170,6,6),mod:.2,shape:vu,curve:.35,attack:.05,sustain:.2,release:.3,filter:yu(2e3),gain:.12},{at:.07,...Eu(85,6,3),mod:.2,shape:gu,attack:.04,sustain:.22,release:.3,gain:.2},{at:.12,freq:78,shape:hu,dropTo:38,attack:.02,release:.4,gain:.45}]}function Ku(){let e=[{shape:X,attack:4e-4,release:.04,gain:.6},{freq:2600,shape:X,attack:.001,release:.2,filter:yu(1500),gain:.75},{freq:115,shape:hu,curve:.4,dropTo:40,attack:.001,decay:.05,sustainVol:.65,sustain:.06,release:.3,gain:.9},{freq:60,shape:hu,curve:.8,dropTo:30,attack:.003,decay:.12,sustainVol:.65,sustain:.12,release:.9,gain:1},{freq:3300,shape:X,attack:.02,sustain:.2,release:1,filter:yu(380),gain:.5},...zu(0,1)];for(let t=0;t<5;t++)e.push(...Du(.32+t*.19,.55-t*.04,740,t===4?1.8:1.3));return e}function qu(){return[...Iu(10,{at:0,count:26,f0:[130,290],cut:[560,900],dur:[.5,.8],attack:.14,release:.6,rough:.14,gain:.3,spread:.12,vib:.03,fall:.11}),{shape:X,attack:.15,sustain:.5,release:.6,filter:yu(620),gain:.32},{freq:2900,shape:X,attack:.18,sustain:.4,release:.5,filter:bu(1400),gain:.04}]}function Ju(){return[{shape:X,attack:.18,sustain:.6,release:1,filter:yu(2e3),gain:.38},{freq:2700,shape:X,attack:.15,sustain:.55,release:.9,filter:yu(950),gain:.36},{freq:3300,shape:X,attack:.15,sustain:.5,release:.7,filter:bu(1e3),gain:.07},...Iu(50414,{at:0,count:30,f0:[170,420],cut:[1300,2400],dur:[.5,.9],attack:.12,release:.7,rough:.32,gain:.17,spread:.2,vib:.04,rise:60}),...Lu(49577,70,.05,2,.42),...Ru(.2,2e3,.1,-.55),...Ru(.55,2300,.08,.6)]}function Yu(){let e=(e,t)=>[{at:e,freq:1900,shape:gu,slide:-40,attack:5e-4,release:.012,gain:t},{at:e,freq:3300,shape:X,attack:5e-4,release:.01,filter:bu(2500),gain:t*.6},{at:e,freq:240,shape:hu,slide:-8,attack:.001,release:.03,gain:t*.5}];return[...e(0,.6),...e(.07,.5),{at:.11,freq:2100,shape:X,attack:.02,sustain:.06,release:.04,filter:yu(1800),repeat:1/45,tremolo:.6,gain:.3},{at:.22,freq:120,shape:hu,dropTo:60,attack:.001,release:.08,gain:.55},{at:.22,freq:2400,shape:X,attack:.001,release:.04,filter:yu(2500),gain:.4},...Du(.22,.75,2637,.9),...Du(.3,.45,3520,.7),...Pu(3237,9,.32,.85,.42)]}function Xu(){let e=[];e.push(...ku([Cu(`C3`),Cu(`G3`),Cu(`Eb4`)],0,.3,.34)),e.push(...Ou(Cu(`C2`),0,.36,.55)),e.push({freq:66,shape:_u,dropTo:58,attack:.004,decay:.08,sustainVol:.6,sustain:.16,release:.34,filter:yu(620),gain:.55},{freq:98,shape:vu,curve:.4,dropTo:88,attack:.003,decay:.06,sustainVol:.4,sustain:.1,release:.22,filter:yu(900),gain:.18}),e.push(...Au(0,1,56),...ju(0,.35,3),...Mu(0,.7,.09),...zu(0,.7));for(let[t,n]of[.42,.78].entries())e.push({at:n-.012,freq:2800,shape:X,attack:.006,release:.05,filter:bu(900),gain:.16}),e.push(...Iu(19984+t,{at:n,count:30,f0:[150,330],cut:[1500,2400],dur:[.06,.1],attack:.01,release:.11,rough:.34,gain:.2,spread:.035,vib:.02,rise:45})),e.push({at:n,shape:X,attack:.008,sustain:.05,release:.12,filter:yu(1700),gain:.22}),e.push(...Au(n,.7,68),...Lu(1441+t,24,n,n+.05,.42,!1,!1));return e}function Zu(e){let t=xu(Cu(`C5`),[0,2,4][e]),n=e=>xu(t,e),r=[];r.push(...ku([n(-12),n(0),n(4),n(7)],0,.16,.42)),r.push(...Au(0,.9),...ju(0,.5,1),...Mu(0,.5,.08));let i=e===2?[0,4,7,12,16,19]:[0,4,7,12];i.forEach((e,t)=>{r.push(...Ou(n(e),.22+t*.09,.1,.5)),r.push(...ju(.22+t*.09,.22+t*.03,t+2))});let a=.22+i.length*.09+.04;e>=1&&(r.push(...ku([n(-7),n(5),n(9),n(12)],a,.22,.38),...Au(a,.6)),r.push(...ku([n(-5),n(7),n(11),n(14)],a+.26,.22,.38),...Au(a+.26,.6)),a+=.52),e===2&&([0,2,4,5,7,9,11,12].forEach((e,t)=>r.push(...Ou(n(e+12),a+t*.06,.07,.34,-.4+t*.1))),r.push({at:a,freq:2100,shape:X,attack:.48,release:.04,repeat:1/24,tremolo:.8,filter:bu(1400),gain:.25}),a+=.56,r.push(...ku([n(-5),n(7),n(11),n(14)],a,.2,.38),...Au(a,.6)),a+=.24);let o=[.75,.9,1.1][e],s=e===2?[n(0),n(4),n(7),n(12),n(16)]:[n(0),n(4),n(7),n(12)];return r.push(...ku(s,a,o,.36,!0)),r.push(...Ou(n(-12),a,o,.42,0,!0)),r.push(...Au(a,1,62),...ju(a,.45,9),...Mu(a,o+.4,.12)),r.push(...Pu(2838+e,[5,8,12][e],a+.05,a+o+.1,.3)),r}var Qu={seconds:9,crossfade:1},$u={seconds:7,crossfade:1};function ed(){let{seconds:e,crossfade:t}=Qu,n={attack:0,sustain:e+t+.01,release:0},r=[{...n,bed:!0,freq:2100,shape:X,filter:yu(900),repeat:1.8,tremolo:.25,gain:.32},{...n,bed:!0,freq:2500,shape:X,filter:yu(500),repeat:2.6,tremolo:.3,gain:.26},{...n,bed:!0,freq:2900,shape:X,filter:bu(1600),repeat:1.3,tremolo:.3,gain:.03}],i=Tu(12215838);for(let t=0;t<230;t++){let n=i()<.7?100+i()*120:190+i()*140;r.push({at:t/230*e+i()*.08,freq:n,shape:i()<.7?_u:gu,slide:(i()*2-1)*.35,noise:.15+i()*.2,attack:.03+i()*.05,sustain:.04+i()*.2,release:.08+i()*.14,filter:yu(600+i()*700),gain:.08+i()*.08,pan:(i()*2-1)*.9,wrap:!0})}return r.push(...Lu(49569,14,.3,e-.3,.16,!0,!1)),r.push(...Iu(21505,{at:2.4,count:3,f0:[190,260],cut:[1100,1500],dur:[.12,.2],attack:.03,release:.15,rough:.3,gain:.08,spread:.05,vib:.04,wrap:!0})),r.push(...Iu(21506,{at:6.3,count:2,f0:[200,300],cut:[1100,1600],dur:[.15,.25],attack:.03,release:.15,rough:.3,gain:.07,spread:.05,vib:.04,rise:120,wrap:!0})),r}function td(){let{seconds:e,crossfade:t}=$u,n={attack:0,sustain:e+t+.01,release:0},r=[{...n,bed:!0,freq:2200,shape:X,filter:yu(1900),repeat:1.4,tremolo:.3,gain:.3},{...n,bed:!0,freq:2600,shape:X,filter:yu(950),repeat:2.2,tremolo:.25,gain:.26}],i=Tu(3098),a=.5;for(let t=0;t<e/a;t++)for(let n=0;n<12;n++)r.push({at:(t*a+(i()-.5)*.045+e)%e,freq:1500+i()*2500,shape:X,attack:8e-4,release:.012+i()*.016,filter:i()<.5?yu(2e3+i()*1200):bu(700+i()*400),gain:(t%2==0?.42:.34)*(.5+i()*.5),pan:(i()*2-1)*.85,wrap:!0});for(let[e,t]of[.4,2.1,3.9,5.6].entries())r.push(...Iu(96+e,{at:t,count:8,f0:[180,360],cut:[1300,2200],dur:[.25,.5],attack:.06,release:.3,rough:.3,gain:.1,spread:.25,vib:.04,rise:80,wrap:!0}));return r.push(...Ru(1.3,2200,.06,.6,!0),...Ru(4.8,1900,.05,-.5,!0)),r}var nd=[1,1.12,1.25],rd={"sfx.bell":{bus:`sfx`,rate:22050,loudness:-14,maxVoices:1,variants:[[...Du(0,1),...Du(.3,.85)]]},"sfx.jab":{bus:`sfx`,loudness:-14,jitter:.07,drive:2,maxVoices:3,variants:[Bu(170,3500,620),Bu(188,3900,680),Bu(158,3200,560)]},"sfx.hook":{bus:`sfx`,loudness:-12,jitter:.05,drive:2.2,maxVoices:3,variants:[Vu(120,1900),Vu(108,1700),Vu(132,2100)]},"sfx.uppercut":{bus:`sfx`,loudness:-10,jitter:.03,drive:2.6,maxVoices:2,variants:[Hu()]},"sfx.whiff":{bus:`sfx`,loudness:-17,jitter:.06,hpf:220,maxVoices:2,variants:[Uu()]},"sfx.block":{bus:`sfx`,loudness:-15,jitter:.06,maxVoices:2,variants:[Wu()]},"sfx.counter":{bus:`sfx`,loudness:-11,jitter:.03,drive:2.2,maxVoices:1,variants:[Gu()]},"sfx.ko":{bus:`sfx`,rate:22050,loudness:-10,drive:2,maxVoices:1,variants:[Ku()]},"sfx.crowd.ooh":{bus:`sfx`,rate:22050,loudness:-17,jitter:.03,hpf:110,maxVoices:1,variants:[qu()]},"sfx.crowd.cheer":{bus:`sfx`,rate:22050,loudness:-16,jitter:.03,hpf:140,maxVoices:2,variants:[Ju()]},"sfx.cashout":{bus:`sfx`,rate:22050,loudness:-14,maxVoices:1,variants:[Yu()]},"sfx.finish":{bus:`sfx`,rate:22050,loudness:-12,drive:1.6,maxVoices:1,variants:[Xu()]},"sfx.bigwin":{bus:`sfx`,rate:22050,loudness:-13,maxVoices:1,variants:[Zu(0),Zu(1),Zu(2)],variantPitch:nd},"ui.click":{bus:`ui`,loudness:-24,jitter:.04,maxVoices:3,variants:[[{freq:1100,shape:gu,slide:-25,attack:5e-4,release:.02,gain:1},{freq:3300,shape:X,attack:5e-4,release:.006,filter:bu(3e3),gain:.25},{freq:190,shape:hu,attack:.001,release:.03,gain:.35}]]},"ui.select":{bus:`ui`,loudness:-20,jitter:.04,maxVoices:2,variants:[[{freq:260,shape:hu,curve:.6,dropTo:95,attack:.001,release:.05,gain:.9},{freq:2700,shape:X,attack:5e-4,release:.02,filter:yu(2600),gain:.6},{freq:1500,shape:gu,slide:-20,attack:5e-4,release:.015,gain:.25},{at:.03,freq:1320,shape:vu,curve:.5,attack:.002,release:.06,filter:yu(3e3),gain:.12}]]},"amb.murmur":{bus:`amb`,rate:22050,loudness:-27,maxVoices:1,loop:Qu,variants:[ed()]},"amb.roar":{bus:`amb`,rate:22050,loudness:-25,maxVoices:1,loop:$u,variants:[td()]}},id=Object.keys(rd),ad=e=>e.rate??44100;function od(e,t){return((e.attack??0)*t||9)+(e.decay??0)*t+(e.sustain??0)*t+(e.release??.1)*t+(e.delay??0)*t|0}function sd(e,t){let n=od(e,t),r=new Float32Array(n),i=e.filter??0,a=2*Math.PI*Math.abs(i)*2/t,o=Math.cos(a),s=Math.sin(a)/2/2,c=1+s,l=-2*o/c,u=(1-s)/c,d=i<0?-1:1,f=(1+d*o)/2/c,p=-(d+o)/c,m=f,h=(e.repeat??0)*t|0,g=e.tremolo??0,_=0,v=0,y=0,b=0,x=Math.round((e.freq??2e3)*7919+(e.at??0)*104729)>>>0||1;for(let e=0;e<n;e++){x^=x<<13,x^=x>>>17,x^=x<<5;let t=((x>>>0)/4294967296-.5)*2*1.2247;if(h&&(t*=1-g+g*Math.sin(2*Math.PI*e/h)),i){let e=m*v+p*_+f*t-u*b-l*y;v=_,_=t,b=y,y=e,t=e}r[e]=t}return r}var cd=class{out;parts;cache=new Map;build;sr;next=0;constructor(e,t,n,r,i=!1){this.build=t,this.sr=n,this.parts=e.filter(e=>e.shape===X||(e.freq??220)<.46*n).map(e=>{let t=wu(e);return{l:e,params:t,key:t.join(`,`),off:Math.round((e.at??0)*n)}});let a=i||e.some(e=>(e.pan??0)!==0),o=r??this.parts.reduce((e,t)=>Math.max(e,t.off+od(t.l,n)),1);this.out=a?[new Float32Array(o),new Float32Array(o)]:[new Float32Array(o)]}get done(){return this.next>=this.parts.length}step(){let{l:e,params:t,key:n,off:r}=this.parts[this.next++],i=this.cache.get(n);i||(i=e.bed?sd(e,this.sr):this.build(this.sr,t),this.cache.set(n,i));let a=e.gain??1,o=this.out.length===2,s=((e.pan??0)+1)*Math.PI/4,c=o?[a*Math.cos(s)*Math.SQRT2,a*Math.sin(s)*Math.SQRT2]:[a];for(let e=0;e<this.out.length;e++){let t=this.out[e],n=c[e],a=Math.min(i.length,t.length-r);for(let e=Math.max(0,-r);e<a;e++)t[r+e]+=i[e]*n}this.done&&this.cache.clear()}};function ld(e,t){let n=1-2*Math.PI*14/t,r=0,i=0;for(let t=0;t<e.length;t++){let a=e[t],o=a-r+n*i;r=a,i=o,e[t]=o}}function ud(e,t){let n=Math.min(t,e.length);for(let t=0;t<n;t++)e[e.length-1-t]*=t/n}function dd(e){let t=0;for(let n of e)for(let e=0;e<n.length;e++)t=Math.max(t,Math.abs(n[e]));return t}function fd(e,t,n,r,i,a,o){let s=0,c=0,l=0,u=0;for(let d=0;d<e.length;d++){let f=e[d],p=(t*f+n*s+r*c-a*l-o*u)/i;c=s,s=f,u=l,l=p,e[d]=p}}function pd(e,t,n){let r=2*Math.PI*n/t,i=Math.cos(r),a=Math.sin(r)/(2*Math.SQRT1_2);fd(e,(1+i)/2,-(1+i),(1+i)/2,1+a,-2*i,1-a)}function md(e,t){{let n=2*Math.PI*100/t,r=Math.cos(n),i=Math.sin(n)/1;fd(e,(1+r)/2,-(1+r),(1+r)/2,1+i,-2*r,1-i)}{let n=2*Math.PI*1500/t,r=Math.cos(n),i=10**(4/40),a=Math.sin(n)/2*Math.SQRT2,o=2*Math.sqrt(i)*a;fd(e,i*(i+1+(i-1)*r+o),-2*i*(i-1+(i+1)*r),i*(i+1+(i-1)*r-o),i+1-(i-1)*r+o,2*(i-1-(i+1)*r),i+1-(i-1)*r-o)}}function hd(e,t){let n=e[0].length,r=Math.max(1,Math.round(.05*t)),i=new Float32Array(n);for(let t of e)for(let r=0;r<n;r++)i[r]+=t[r]/e.length;md(i,t);let a=0,o=0;for(let e=0;e<n;e++)a+=i[e]*i[e],e>=r&&(a-=i[e-r]*i[e-r]),o=Math.max(o,a);let s=Math.sqrt(Math.max(o,0)/Math.min(r,n));return s>0?20*Math.log10(s):-1/0}function gd(e,t){let n=dd(e);if(n===0)return;let r=Math.tanh(t);for(let i of e)for(let e=0;e<i.length;e++)i[e]=Math.tanh(t*i[e]/n)/r}function _d(e,t,n){let r=hd(e,n),i=dd(e);if(!Number.isFinite(r)||i===0)return;let a=10**((t-r)/20);i*a>.95&&(a=mu/i);for(let t of e)for(let e=0;e<t.length;e++)t[e]*=a}function vd(e,t,n,r){let i=Math.round(t.seconds*r),a=Math.round(t.crossfade*r),o=e.some(e=>(e.pan??0)!==0),s=e.filter(e=>!e.periodic&&!e.wrap),c=e.filter(e=>e.wrap),l=e.filter(e=>e.periodic),u=s.length>0?new cd(s,n,r,i+a,o):null,d=c.length>0?new cd(c,n,r,void 0,o):null,f=l.length>0?new cd(l,n,r,i+64,o):null;return{mixes:[u,d,f].filter(e=>e!==null),finish:()=>{let e=o?[new Float32Array(i),new Float32Array(i)]:[new Float32Array(i)];return u?.out.forEach((t,n)=>{ld(t,r);for(let r=0;r<i;r++)if(r<a){let o=r/a*(Math.PI/2);e[n][r]+=t[r]*Math.sin(o)+t[i+r]*Math.cos(o)}else e[n][r]+=t[r]}),d?.out.forEach((t,n)=>{ld(t,r);for(let r=0;r<t.length;r++)e[n][r%i]+=t[r]}),f?.out.forEach((t,n)=>{for(let r=0;r<i;r++)e[n][r]+=r<64?t[i+r]:t[r]}),e}}}function yd(e,t,n){let r=ad(e),i=e.variants[t],a,o;if(e.loop)({mixes:a,finish:o}=vd(i,e.loop,n,r));else{let t=new cd(i,n,r);a=[t],o=()=>{for(let n of t.out)ld(n,r),e.hpf&&pd(n,r,e.hpf),ud(n,Math.round(.004*r));return e.drive&&gd(t.out,e.drive),t.out}}let s=null,c=null;return{step(){if(c)return!0;let t=a.find(e=>!e.done);return t?(t.step(),!1):s?(_d(s,e.loudness,r),c=s,!0):(s=o(),!1)},get result(){return c}}}function bd(e,t,n){let r=yd(e,t,n);for(;!r.step(););return r.result}function xd(e,t){let n=0;for(let r=1;r<e.length;r++)Math.abs(e[r]-t)<Math.abs(e[n]-t)&&(n=r);return n}var Sd=`nk.sound`,Cd=.6,wd={sfx:1,ui:.8,amb:.9},Td=.03,Ed=.03,Dd=1.5,Od=.4,kd=.35,Ad=[`amb.murmur`,`amb.roar`],jd=1.1,Md=.45,Nd=.3,Pd=.65,Fd=.08,Id=.45,Ld=.6,Rd=2,zd=.15;function Bd(e){return 10**((-12+12*Math.sqrt(e))/20)}function Vd(e){return Math.min(1,Math.max(0,(e-.2)/.8))**1.2}var Hd=[`ui.click`,`ui.select`,`amb.murmur`,`sfx.bell`,`sfx.jab`,`sfx.hook`,`sfx.uppercut`,`sfx.whiff`,`sfx.block`,`amb.roar`,`sfx.counter`,`sfx.crowd.ooh`,`sfx.crowd.cheer`,`sfx.cashout`,`sfx.finish`,`sfx.ko`,`sfx.bigwin`],Ud=(e,t)=>su.buildSamples.call({sampleRate:e},...t),Wd=new WeakMap;function Gd(){try{return globalThis.localStorage?.getItem(Sd)===`0`}catch{return!1}}function Kd(e){try{globalThis.localStorage?.setItem(Sd,e?`0`:`1`)}catch{}}function qd(e){if(typeof requestIdleCallback==`function`){requestIdleCallback(t=>e(()=>t.timeRemaining()),{timeout:1500});return}let t=new MessageChannel;t.port1.onmessage=()=>{t.port1.close(),e(()=>0)},t.port2.postMessage(null)}function Jd(e,t,n,r){e.cancelScheduledValues(n),e.setValueAtTime(e.value,n),e.linearRampToValueAtTime(t,n+r)}function Yd(){let e=su.audioContext,t=Gd(),n=!1,r=null,i=!1,a=!1,o=zd,s=e.createGain();s.gain.value=t?0:Cd;let c=e.createDynamicsCompressor();c.threshold.value=-4,c.knee.value=4,c.ratio.value=10,c.attack.value=.002,c.release.value=.15,s.connect(c).connect(e.destination);let l={};for(let t of Object.keys(wd))l[t]=e.createGain(),l[t].gain.value=wd[t],l[t].connect(s);let u={"amb.murmur":e.createGain(),"amb.roar":e.createGain()},d={"amb.murmur":Bd,"amb.roar":Vd};for(let e of Ad)u[e].gain.value=d[e](o),u[e].connect(l.amb);let f=e.createGain();f.gain.value=jd,f.connect(s);let p=e.createGain(),m=e.createGain();m.gain.value=Md,p.connect(m).connect(s);let h=new Map,g=!1,_=null,v=null,y=null,b=!1;pu(e,(e,t)=>{if(h.set(e,t),e===`amb.crowd`&&r&&!b){for(let e of r)F(e,Od);r=null,te()}L()});let x=new Map,S=new Map,C=null,w=(e,t)=>{let n=x.get(e);if(n||x.set(e,n=[]),!n[t]){if(C&&C.id===e&&C.vi===t){for(;!C.job.step(););n[t]=C.job.result,C=null}else n[t]=bd(rd[e],t,Ud)}return n[t]},T=(t,n)=>{let r=S.get(t);r||S.set(t,r=[]);let i=r[n];if(!i){let a=w(t,n);i=e.createBuffer(a.length,a[0].length,ad(rd[t])),a.forEach((e,t)=>i.getChannelData(t).set(e)),r[n]=i,x.get(t)[n]=void 0}return i},E=(e,t)=>!!(S.get(e)?.[t]??x.get(e)?.[t]),D=[...Hd,...id.filter(e=>!Hd.includes(e))].flatMap(e=>rd[e].variants.map((t,n)=>[e,n])),O=0,k=0,A=0,j=e=>{do{if(!C){let e=D[O++];if(!e)return;if(E(e[0],e[1]))continue;C={id:e[0],vi:e[1],job:yd(rd[e[0]],e[1],Ud)}}let e=performance.now(),t=C.job.step();if(t){let{id:e,vi:t,job:r}=C;C=null;let i=x.get(e);i||x.set(e,i=[]),i[t]=r.result,n&&T(e,t)}let r=performance.now()-e;k+=r,A=Math.max(A,r),t&&te()}while(e()>8);(C||O<D.length)&&qd(j)};qd(j);let M=new Map,N=new Map,P=(t,n,r,i,a,o,s)=>{let c=e.createBufferSource();c.buffer=t,c.loop=a,a&&s&&(c.loopStart=s[0],c.loopEnd=s[1]),c.playbackRate.value=i;let l=e.createGain();return l.gain.value=r,c.connect(l).connect(n),c.onended=()=>{c.disconnect(),l.disconnect(),o?.()},c.start(),{src:c,gain:l}},F=(t,n)=>{let r=e.currentTime;Jd(t.gain.gain,0,r,n);try{t.src.stop(r+n+.02)}catch{}},ee=(e,t)=>{let n=rd[e];if(n.variantPitch){let e=xd(n.variantPitch,t);return{vi:e,rate:t/n.variantPitch[e]}}let r=n.variants.length;if(r===1)return{vi:0,rate:t};let i=N.get(e),a=Math.floor(Math.random()*(i===void 0?r:r-1));return i!==void 0&&a>=i&&a++,N.set(e,a),{vi:a,rate:t}},I=(t,n,r)=>{let i=Math.floor(Math.random()*t.buffers.length),a=P(t.buffers[i],n,0,1,!0,void 0,[t.loopStart[i],t.loopEnd[i]]),o=e.currentTime;return a.gain.gain.setValueAtTime(0,o),a.gain.gain.linearRampToValueAtTime(r*t.volume,o+Ld),a},te=()=>{if(r||!i||!n||t||e.state===`closed`)return;let a=h.get(`amb.crowd`);if(!Ad.every(e=>e===`amb.murmur`&&a||E(e,0)))return;let o=e.currentTime;b=!!a,r=Ad.map(e=>{if(e===`amb.murmur`&&a){let t=Math.floor(Math.random()*a.buffers.length),n=P(a.buffers[t],u[e],0,1,!0,void 0,[a.loopStart[t],a.loopEnd[t]]);return n.gain.gain.setValueAtTime(0,o),n.gain.gain.linearRampToValueAtTime(a.volume,o+Dd),n}let t=P(T(e,0),u[e],0,1,!0);return t.gain.gain.setValueAtTime(0,o),t.gain.gain.linearRampToValueAtTime(1,o+Dd),t})};function L(){let r=n&&!t&&e.state!==`closed`,i=h.get(`loop.heartbeat`);g&&r&&i&&!_&&(_=I(i,l.sfx,1)),g&&r||!_||(F(_,Ld),_=null),y&&(y.track!==v||!r)&&(F(y.voice,Ld),y=null);let a=v?h.get(`music.${v}`):void 0;v&&r&&a&&!y&&(y={track:v,voice:I(a,p,1)})}let ne=new Map,re=(t,n,r,i,a,o)=>{let s=Math.floor(Math.random()*n.buffers.length),c=ne.get(t);c||ne.set(t,c=[]);let l=c,u=P(n.buffers[s],r,Math.min(4,Math.max(0,i))*n.volume,Math.max(.25,a),!1,()=>{let e=l.indexOf(u);e>=0&&l.splice(e,1)}),d=n.end?.[s];for(!n.loop&&d&&d<n.buffers[s].duration&&u.src.stop(e.currentTime+d/Math.max(.25,a)),l.push(u);l.length>o;)F(l.shift(),Ed);return u},ie=()=>{!document.hidden&&!a&&e.state!==`running`&&e.state!==`closed`&&e.resume().catch(()=>{})};typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>{n&&(document.hidden?e.state===`running`&&(a=!0,e.suspend().catch(()=>{})):a&&(a=!1,e.resume().catch(()=>{})))});let ae={unlock(){if(e.state!==`running`&&e.state!==`closed`&&e.resume().catch(()=>{}),n)return;n=!0;let t=e.createBufferSource();t.buffer=e.createBuffer(1,1,22050),t.connect(e.destination),t.start(),addEventListener(`pointerdown`,ie,{capture:!0,passive:!0}),addEventListener(`keydown`,ie,{capture:!0}),te(),L()},play(r,i){if(!n||t||e.state===`closed`)return;let a=rd[r],o=h.get(r);if(o){let e=a?.jitter?1+a.jitter*(Math.random()*2-1):1;re(r,o,l[a?.bus??`sfx`],i?.volume??1,(i?.pitch??1)*e,a?.maxVoices??Rd);return}if(!a)return;let{vi:s,rate:c}=ee(r,i?.pitch??1),u=a.jitter?1+a.jitter*(Math.random()*2-1):1,d=Math.min(Math.max(i?.volume??1,0),4),f=M.get(r);f||M.set(r,f=[]);let p=f,m=P(T(r,s),l[a.bus],d,Math.max(.25,c*u),!1,()=>{let e=p.indexOf(m);e>=0&&p.splice(e,1)});for(p.push(m);p.length>a.maxVoices;)F(p.shift(),Ed)},announce(r){if(!n||t||e.state===`closed`)return;let i=h.get(`vo.${r}`);if(!i)return;let a=re(`vo.${r}`,i,f,1,1,Rd),o=e.currentTime,s=o+(a.src.buffer?.duration??1)+.1,c=(e,t,n)=>{e.cancelScheduledValues(o),e.setValueAtTime(e.value,o),e.linearRampToValueAtTime(t,o+Fd),e.setValueAtTime(t,s),e.linearRampToValueAtTime(n,s+Id)};c(p.gain,Nd,1),c(l.amb.gain,wd.amb*Pd,wd.amb)},setMusic(e){v=e,L()},setHeartbeat(e){g=e,L()},startAmbient(){i=!0,te()},stopAmbient(){if(i=!1,r){for(let e of r)F(e,Od);r=null}},setHype(t){let n=Number.isFinite(t)?Math.min(1,Math.max(0,t)):zd;if(o=n,e.state===`closed`)return;let r=e.currentTime;for(let e of Ad)u[e].gain.setTargetAtTime(d[e](n),r,kd)},setMuted(n){t=n,Kd(n),Jd(s.gain,n?0:Cd,e.currentTime,Td),n||te(),L()},get muted(){return t}};return Wd.set(ae,{context:e,output:c,activeVoices:()=>[...M.values(),...ne.values()].reduce((e,t)=>e+t.length,0)+(r?r.length:0)+ +!!_+ +!!y,prerender:()=>({done:D.filter(([e,t])=>E(e,t)).length,total:D.length,ms:k,longestSliceMs:A}),hype:()=>({hype:o,murmur:u[`amb.murmur`].gain.value,roar:u[`amb.roar`].gain.value})}),ae}var Xd=7800,Zd=2e5,Qd=1e6,$d=Object.freeze([5,10,20,30,50,100,200,300,500]),ef=500*Zd,tf=e=>typeof e==`number`&&$d.includes(e);function nf(e,t){let n=$d.indexOf(e);return n<0?10:$d[Math.max(0,Math.min($d.length-1,n+t))]}var rf={demir:{id:`demir`,name:`DEMİR`},yildirim:{id:`yildirim`,name:`YILDIRIM`},kralice:{id:`kralice`,name:`KRALİÇE`},firtina:{id:`firtina`,name:`FIRTINA`}},af=[`demir`,`yildirim`,`kralice`,`firtina`],of=[`sol`,`sag`],sf={sol:`SOL`,sag:`SAĞ`},cf=e=>e===`sol`?`sag`:`sol`,lf=[`krose`,`aparkat`],uf=[`KOLAY`,`ORTA`,`ZOR`,`COK_ZOR`],df={KOLAY:`KOLAY`,ORTA:`ORTA`,ZOR:`ZOR`,COK_ZOR:`ÇOK ZOR`},ff=`ORTA`,pf=Object.freeze({KOLAY:Object.freeze([113,129,147,167,190,216,246,280,318,362,412,469,533,607,690,785,893,1016,1156,1315,1496,1701,1935,2201,2504,2848,3240,3686,4193,4769,5425,6171,7020,7985,9083,10332,11752,13368,15206,17297,19675,22381,25458,28959,32940,37470,42622,48482,55148,62731,71356,81167,92327,105022,119462,135887,154571,175824,2e5]),ORTA:Object.freeze([124,154,191,238,296,368,457,568,706,877,1090,1354,1683,2091,2598,3228,4011,4985,6194,7696,9563,11883,14765,18346,22797,28326,35197,43734,54342,67523,83901,104252,129538,160958,2e5]),ZOR:Object.freeze([143,206,296,425,610,877,1259,1809,2598,3731,5359,7696,11053,15874,22797,32739,47017,67523,96971,139263,2e5]),COK_ZOR:Object.freeze([179,321,577,1036,1860,3338,5990,10749,19289,34614,62112,111456,2e5])});function mf(e,t){return pf[e].slice(0,t)}var hf=e=>typeof e==`string`&&uf.includes(e);function gf(e,t,n){let r=af.filter(t=>t!==e&&t!==n);return r[Math.min(r.length-1,Math.floor(t*r.length))]}function _f(e){return lf[Math.min(lf.length-1,Math.floor(e*lf.length))]}function vf(e){return e>=2e5?`efsane`:e>=1500?`mega`:e>=500?`buyuk`:null}function yf(e,t){for(;t!==0;){let n=e%t;e=t,t=n}return e}function bf(e,t){let n=yf(e,t);return{num:e/n,den:t/n}}var xf=Object.freeze(bf(Xd,1e4));function Sf(e){return pf[e].length}function Cf(e,t){if(!Number.isInteger(t)||t<0||t>=Sf(e))throw RangeError(`no punch after ${t} hits on ${e} (the ladder has ${Sf(e)} steps)`)}function wf(e,t){Cf(e,t);let n=pf[e];return t===0?bf(xf.num*100,xf.den*n[0]):bf(n[t-1],n[t])}function Tf(e,t){let n=wf(e,t);return n.num/n.den}var Ef=2**21;for(let e of Object.values(pf))if(xf.den*e[0]>Ef||2e5>Ef)throw Error(`Nakavt odds denominators no longer fit the exact comparison; revisit outcome.ts`);function Df(e,t,n){let r=pf[t];if(!(Number.isInteger(n)&&n>=0&&n<r.length))throw RangeError(`no punch after ${n} hits on ${t}`);let i=r[n],a=n===0?100:r[n-1],o=n===0?e*(xf.den*i)<xf.num*a:e*i<a;return{landed:o,multiplierKurus:o?i:a}}function Of(e){let t=null;return{peek(){return t??=e.next(),t},next(){if(t===null)return e.next();let n=t;return t=null,n}}}var kf=new Set([`HAMLE`,`YUMRUK`,`PARAYI_AL`]),Af=new Set([`BEKLE`,`RAKIP`,`HAZIR`]),jf=new Set([`DOVUS`,`HAMLE`,`YUMRUK`]);function Mf(){let e=new Uint32Array(1);return globalThis.crypto.getRandomValues(e),e[0]}var Nf=e=>of.includes(e),Pf=e=>typeof e==`string`&&Object.hasOwn(rf,e);function Ff(e={}){let t=e.seed===void 0?null:No(e.seed),n=Of(jo(t?t.outcome:Mf())),r=jo(t?t.pick:Mf()),i=jo(t?t.cosmetic:Mf()),a=`BEKLE`,o=`demir`,s=gf(o,0),c=hf(e.difficulty)?e.difficulty:ff,l=tf(e.betTL)?e.betTL:10,u=Qd,d=100,f=0,p=!1,m=null,h=[],g=()=>l*100,_=()=>Af.has(a),v=()=>a===`HAZIR`&&u>=g(),y=()=>a===`HAMLE`&&f>=1,b=()=>pf[c].length,x=()=>a===`DOVUS`||a===`HAMLE`||a===`YUMRUK`&&p&&f<b();function S(){let e=pf[c],t=x()?f:0,n=f>=e.length&&(a===`YUMRUK`||a===`PARAYI_AL`),r=_(),i=$d.indexOf(l);return{state:a,fighter:o,opponent:s,difficulty:c,ladder:e,betTL:l,betTiers:$d,canBetUp:r&&i<$d.length-1,canBetDown:r&&i>0,balanceKurus:u,multiplierKurus:d,nextMultiplierKurus:n?null:e[t],currentWinKurus:f>=1&&kf.has(a)?l*d:0,landed:f,chance:n?0:Tf(c,t),inRound:jf.has(a),canStart:v(),canPunch:a===`HAMLE`,canCashout:y(),canEditBet:r,canChangeDifficulty:r,canChangeFighter:a===`BEKLE`||a===`HAZIR`,history:h.map(e=>({...e}))}}let C=new Set,w=[],T=!1;function E(e){if(w.push([e,S()]),T)return;T=!0;let t=null;try{for(;w.length>0;){let[e,n]=w.shift();for(let r of[...C])if(C.has(r))try{r(e,n)}catch(e){t??={error:e}}}}finally{T=!1}if(t)throw t.error}function D(e){a=e.to,E(e)}function O(e){if(!Number.isInteger(e)||e<0)throw Error(`invalid payout ${e}`);if(e>1e8)throw Error(`payout ${e} exceeds the max win ${ef}`);u+=e}function k(){d=100,f=0,p=!1}function A(e){s=gf(o,r.next(),s),m=e,k(),D({to:`RAKIP`,fighter:o,opponent:s,result:e})}function j(e){h=[e,...h].slice(0,10),A(e)}function M(e){let t=l*d;O(t),D({to:`PARAYI_AL`,payoutKurus:t,multiplierKurus:d,tier:vf(d),auto:e})}return{view:S,subscribe(e){return C.add(e),()=>{C.delete(e)}},selectFighter(e){Pf(e)&&(a===`BEKLE`||a===`HAZIR`&&e!==o)&&(o=e,A(null))},setDifficulty(e){_()&&hf(e)&&(c=e)},betStep(e){!_()||e!==1&&e!==-1||(l=nf(l,e))},setBet(e){_()&&tf(e)&&(l=e)},start(){v()&&(u-=g(),k(),D({to:`DOVUS`,betTL:l}))},punch(e){if(a!==`HAMLE`||!Nf(e))return;let t=f+1,r=Df(n.next(),c,f),o=_f(i.next());p=r.landed,r.landed&&(d=r.multiplierKurus,f+=1),D({to:`YUMRUK`,side:e,punch:o,landed:r.landed,multiplierKurus:d,index:t,dodge:cf(e)})},cashout(){y()&&M(!1)},presentationDone(){switch(a){case`BEKLE`:case`HAZIR`:case`HAMLE`:return;case`RAKIP`:{let e=m;m=null,D({to:`HAZIR`,result:e});return}case`DOVUS`:D({to:`HAMLE`,landed:f});return;case`YUMRUK`:p?f>=b()?M(!0):D({to:`HAMLE`,landed:f}):D({to:`KARSI`,lostMultiplierKurus:d});return;case`KARSI`:j({kind:`loss`,multiplierKurus:d});return;case`PARAYI_AL`:j({kind:`win`,multiplierKurus:d});return}},resetBalance(){_()&&(u=Qd)},debugPeek:()=>n.peek()}}var If={buyuk:`buyuk_kazanc`,mega:`mega_kazanc`,efsane:`efsane`},Lf=900,Rf=1500,zf={buyuk:1,mega:1.12,efsane:1.25},Bf={krose:330,aparkat:330},Vf={krose:`sfx.hook`,aparkat:`sfx.uppercut`};function Hf(e){let{game:t,scene:n,ui:r,audio:i,clock:a}=e,o=0,s=()=>r.render(t.view(),!i.muted),c=e=>{e===o&&(t.presentationDone(),s())},l=async(e,t)=>{t&&(i.play(`sfx.bigwin`,{pitch:zf[t]}),await r.bigWin(t,e))},u=async(e,t,s)=>{switch(e.to){case`RAKIP`:return await n.preload(e.fighter,e.opponent),s===o&&(n.newMatch(e.fighter,e.opponent),r.flash(`#12071f`,450),i.setMusic(`fight`),i.setHype(.25),a.after(Lf,()=>{s===o&&i.announce(e.opponent)}),!0);case`DOVUS`:return i.play(`sfx.bell`),i.announce(`dovus`),await Promise.all([r.banner(`dovus`),n.gong()]),!0;case`HAZIR`:case`HAMLE`:return!1;case`YUMRUK`:return e.landed?a.after(Bf[e.punch],()=>{i.play(Vf[e.punch]),r.flyNumber(n.impactScreenPos(),e.multiplierKurus),r.bumpMultiplier(e.multiplierKurus),i.setHype(.25+.75*Math.min(1,e.index/Math.max(1,t.ladder.length)))}):i.play(`sfx.whiff`),await n.punch(e.punch,e.landed,e.side),!0;case`KARSI`:{i.play(`sfx.counter`),a.after(200,()=>i.play(`sfx.crowd.ooh`));let t=!1,c=()=>{t||s!==o||(t=!0,i.play(`sfx.ko`),i.announce(`nakavt`),r.bumpMultiplier(e.lostMultiplierKurus,!0))};return a.after(350,c),a.after(400,()=>{s===o&&r.banner(`yenildin`)}),await n.counter(),c(),s===o&&(await n.playerKnockedOut(),i.setHype(.2)),!0}case`PARAYI_AL`:if(i.play(`sfx.cashout`),i.play(`sfx.crowd.cheer`,{volume:e.auto?1:.6}),i.announce(`parayi_aldin`),e.tier){let t=If[e.tier];a.after(Rf,()=>{s===o&&i.announce(t)})}return e.auto&&i.setHype(1),await Promise.all([r.banner(`raunt`,e.payoutKurus),n.celebrate()]),await l(e.payoutKurus,e.tier),!0}};return t.subscribe((e,t)=>{let n=++o;try{r.render(t,!i.muted)}catch(e){console.error(`ui.render failed`,e)}u(e,t,n).then(e=>{e&&c(n)}).catch(t=>{console.error(`presentation failed`,e,t),c(n)})}),{refresh:s}}var Uf=new Set([`KARSI`,`PARAYI_AL`]);function Wf(){let e=null,t=-1/0;return(n,r,i)=>{if(Uf.has(r))return e=null,t=n.at,`skip`;if(n.at-t<320)return e=null,t=n.at,null;if(!i)return e=null,null;let a=e!==null&&n.at-e.at<320&&Math.hypot(n.x-e.x,n.y-e.y)<40;return e=a?null:n,a?`punch`:null}}function Gf(e){let t=new Map;return{get(n){let r=t.get(n);return r||(r=e(n).catch(e=>(console.warn(`Nakavt: the ${n} model load failed; the procedural fighter plays`,e),null)),t.set(n,r)),r},started:e=>t.has(e)}}var Kf=.95,qf=[0,1.765,.76],Z=(e,t)=>e===`l`?t:-t;function Jf(e,t){let n={},r=n,i=t=>Z(e,t);return t.c&&(r[`${e}ax`]=i(t.c[0]),r[`${e}ay`]=t.c[1],r[`${e}az`]=t.c[2]),t.r&&(r[`${e}bx`]=i(t.r[0]),r[`${e}by`]=t.r[1],r[`${e}bz`]=t.r[2]),t.w!==void 0&&(r[`${e}w`]=t.w),t.pole&&(r[`${e}px`]=i(t.pole[0]),r[`${e}py`]=t.pole[1],r[`${e}pz`]=t.pole[2]),t.g&&(r[`${e}gx`]=t.g[0],r[`${e}gy`]=i(t.g[1]),r[`${e}gz`]=i(t.g[2])),t.gs!==void 0&&(r[`${e}gs`]=t.gs),n}function Yf(e,t){let n={},r=n,i=t=>Z(e,t);return t.p&&(r[`${e}fx`]=i(t.p[0]),r[`${e}fy`]=t.p[1],r[`${e}fz`]=t.p[2]),t.rot&&(r[`${e}frx`]=t.rot[0],r[`${e}fry`]=i(t.rot[1]),r[`${e}frz`]=i(t.rot[2])),t.knee&&(r[`${e}kx`]=i(t.knee[0]),r[`${e}ky`]=t.knee[1],r[`${e}kz`]=t.knee[2]),n}var Xf=(e,t=e)=>({...Jf(`l`,e),...Jf(`r`,t)}),Zf=(e,t=e)=>({...Yf(`l`,e),...Yf(`r`,t)}),Qf={hx:0,hy:-.055,hz:.01,hrx:.03,hry:-.06,hrz:0,srx:.05,sry:.03,srz:0,crx:.12,cry:0,crz:0,nrx:-.06,nry:.02,nrz:0,arx:.1,ary:.01,arz:0,lcy:-.04,lcz:.08,rcy:.04,rcz:-.08,...Jf(`l`,{c:[.19,1.635,.25],w:0,pole:[.8,-1,-.4],g:[-.45,.15,.1],gs:1}),...Jf(`r`,{c:[.19,1.615,.21],w:0,pole:[.8,-1,-.4],g:[-.45,.15,.1],gs:1}),...Yf(`l`,{p:[.16,.09,.09],rot:[0,-.12,0],knee:[.35,0,1]}),...Yf(`r`,{p:[.17,.09,-.11],rot:[0,.42,0],knee:[.35,0,1]}),mo:0,mw:0,look:1,stars:0},$f={...Qf,hy:-.03,crx:.06,arx:.04,...Xf({c:[.2,1.42,.2],w:0,pole:[.9,-1,-.5],g:[-.2,.2,.1],gs:1})},ep={crx:.22,arx:.26,nrx:.04,hy:-.08,...Xf({c:[.075,1.72,.2],w:0,pole:[.25,-1,.1],g:[-.55,0,.2]})},tp={hx:0,hy:-.09,hz:-.02,hrx:-.04,hry:0,hrz:0,srx:-.02,sry:0,srz:.04,crx:.02,cry:.05,crz:.06,nrx:.1,nry:0,nrz:.1,arx:.1,ary:.12,arz:.16,lcy:0,lcz:-.06,rcy:0,rcz:.06,...Jf(`l`,{c:[.24,1.25,.2],w:0,pole:[1,-.6,-.5],g:[.1,.1,.25],gs:1}),...Jf(`r`,{c:[.2,1.2,.24],w:0,pole:[1,-.6,-.5],g:[.1,.1,.25],gs:1}),...Yf(`l`,{p:[.2,.09,.06],rot:[0,.1,0],knee:[.1,0,1]}),...Yf(`r`,{p:[.18,.09,-.1],rot:[0,.3,0],knee:[.5,0,1]}),eyeL:.42,eyeR:.5,mo:.35,mw:.1,bly:.6,bry:.2,blr:-.1,brr:.25,look:.5,stars:1},np={hx:.02,hy:-.83,hz:-.62,hrx:-1.5,hry:0,hrz:.04,srx:.02,sry:0,srz:.03,crx:.04,cry:.06,crz:0,nrx:.18,nry:.05,nrz:.1,arx:-.05,ary:.55,arz:.1,lcy:0,lcz:.25,rcy:0,rcz:-.25,...Jf(`l`,{c:[.58,1.82,-.06],w:0,pole:[.2,-.2,-1],g:[.3,.4,.2],gs:1}),...Jf(`r`,{c:[.62,1.55,-.1],w:0,pole:[.2,-.2,-1],g:[.2,-.2,.3],gs:1}),...Yf(`l`,{p:[.2,.075,.2],rot:[-1.2,.3,.1],knee:[.3,0,1]}),...Yf(`r`,{p:[.14,.075,.12],rot:[-1.05,.1,-.1],knee:[.2,0,1]}),eyeL:.06,eyeR:.06,mo:.45,mw:.05,bly:.5,bry:.5,blr:-.2,brr:.2,look:0,stars:1},rp={hx:0,hy:0,hz:0,hrx:-.03,hry:0,hrz:0,srx:-.06,sry:0,srz:0,crx:-.16,cry:0,crz:0,nrx:-.12,nry:0,nrz:0,arx:-.22,ary:0,arz:0,lcy:0,lcz:.22,rcy:0,rcz:-.22,...Xf({c:[.34,2.2,.06],w:0,pole:[1,-.2,-.6],g:[-.3,.2,-.3],gs:1}),...Zf({p:[.17,.09,0],rot:[0,.15,0],knee:[.3,0,1]}),eyeL:.55,eyeR:.55,mo:.95,mw:.25,bly:.6,bry:.6,blr:0,brr:0,look:.6,stars:0},ip={idle:{bounce:0,breathe:1,sway:1,dizzy:0,down:0,cheer:0},guard:{bounce:0,breathe:1,sway:.6,dizzy:0,down:0,cheer:0},bounce:{bounce:1,breathe:.5,sway:.25,dizzy:0,down:0,cheer:0},dizzy:{bounce:0,breathe:.6,sway:0,dizzy:1,down:0,cheer:0},down:{bounce:0,breathe:0,sway:0,dizzy:0,down:1,cheer:0},victory:{bounce:0,breathe:.4,sway:0,dizzy:0,down:0,cheer:1}},ap={jab:220,hook:330,uppercut:550,counter:350};function op(e,t){switch(e){case`idle`:return{...$f,...t,mo:0,mw:0,stars:0};case`guard`:case`bounce`:return{...Qf,...t,mo:0,mw:0,stars:0};case`dizzy`:return{...tp};case`down`:return{...np};case`victory`:return{...rp}}}var sp=(e,t,n,r,i,a)=>e.to(t,{...n,duration:r,ease:i,overwrite:!1},a);function cp(e,t){let n=J.timeline({paused:!0}),r=t.P,i=op(t.loop,t.rest),a=t.rest,o=t.loop,s=(e,t,i,a)=>sp(n,r,e,t,i,a);switch(e){case`jab`:{let e=t.nextSide(`jab`),r=e===`l`?`r`:`l`;return s({hy:-.08,cry:Z(e,.1),sry:Z(e,.03),...Jf(e,{c:[.15,1.57,.19],pole:[.9,-1,-.5]}),eyeL:.7,eyeR:.7,bly:-.4,bry:-.4},.07,`power2.out`,0),s({hy:-.065,hz:.07,crx:.17,cry:Z(e,-.34),sry:Z(e,-.1),arz:Z(e,.06),ary:Z(e,.08),[`${e}cy`]:Z(e,-.32),...Jf(e,{r:[qf[0]+.03,qf[1],qf[2]],w:1,pole:[.7,-.45,-.6],g:[-.35,0,.12],gs:1.13}),...Jf(r,{c:[.11,1.64,.25]}),...Yf(e,{p:[.16,.09,.15]}),mo:.12},.15,`power3.in`,.07),n.call(()=>t.landed(e,.6),[],.22),s({...Jf(e,{gs:1})},.05,`power2.out`,.22),s({...i,[`${e}gs`]:1},.21,`power2.out`,.24),{tl:n,next:o,duration:.45}}case`hook`:{let e=t.nextSide(`hook`),r=e===`l`?`r`:`l`;return s({hy:-.1,hry:Z(e,.12),cry:Z(e,.32),sry:Z(e,.08),crz:Z(e,.06),crx:.16,[`${e}cy`]:Z(e,.12),...Jf(e,{c:[.3,1.62,.2],w:0,pole:[1,.3,-.45],g:[-.45,.2,.25]}),...Jf(r,{c:[.08,1.7,.24]}),arx:.18,eyeL:.62,eyeR:.62,bly:-.5,bry:-.5,mo:0},.14,`power2.out`,0),s({hry:Z(e,-.12),cry:Z(e,-.2),sry:Z(e,-.06),crz:Z(e,-.04),[`${e}cy`]:Z(e,-.15),...Jf(e,{r:[.36,1.72,.5],w:1,pole:[1,.4,-.3],g:[-.4,.1,.3]})},.11,`power2.in`,.14),s({hz:.06,hry:Z(e,-.2),cry:Z(e,-.5),sry:Z(e,-.14),crz:Z(e,-.08),crx:.2,[`${e}cy`]:Z(e,-.3),...Jf(e,{r:[.04,qf[1]+.01,qf[2]-.03],pole:[1,.6,-.1],g:[-.35,0,.35],gs:1.16}),...Yf(e,{rot:[.25,-.5,0]}),mo:.2},.08,`power1.in`,.25),n.call(()=>t.landed(e,.8),[],.33),s({hry:Z(e,-.24),cry:Z(e,-.62),sry:Z(e,-.18),...Jf(e,{r:[-.12,1.6,qf[2]-.1],gs:1})},.09,`power2.out`,.33),s({...i,[`${e}gs`]:1},.23,`power2.inOut`,.42),{tl:n,next:o,duration:.65}}case`uppercut`:{let e=t.nextSide(`uppercut`),r=e===`l`?`r`:`l`;return s({hy:-.11,hz:-.02,hry:Z(e,.14),cry:Z(e,.3),sry:Z(e,.08),crz:Z(e,-.16),srz:Z(e,-.05),crx:.26,srx:.1,[`${e}cy`]:Z(e,.08),[`${e}cz`]:Z(e,-.1),...Jf(e,{c:[.2,1.2,.2],w:0,pole:[.5,-1,-.7],g:[-.45,.2,0]}),...Jf(r,{c:[.07,1.69,.25]}),arx:.24,eyeL:.55,eyeR:.55,bly:-.7,bry:-.7,mo:0,mw:.1},.22,`power2.out`,0),s({hy:-.12,crz:Z(e,-.19),...Jf(e,{c:[.2,1.16,.2]})},.08,`sine.inOut`,.22),s({hy:-.02,hz:.06,hry:Z(e,-.08),cry:Z(e,-.3),sry:Z(e,-.08),crz:Z(e,.04),srz:0,crx:.1,srx:.02,[`${e}cy`]:Z(e,-.15),[`${e}cz`]:0,...Jf(e,{r:[.16,1.4,.62],w:1,pole:[.35,-1,-.1],g:[-.35,.3,0]}),...Zf({rot:[.15,.12,0]})},.13,`power2.in`,.3),s({hy:.01,hz:.13,cry:Z(e,-.42),crx:0,srx:-.02,arx:0,...Jf(e,{r:[.03,qf[1]-.03,qf[2]-.01],pole:[.3,-1,.15],g:[-.3,.3,0],gs:1.2}),...Zf({p:[.16,.12,.06],rot:[.32,.12,0]}),mo:.45,mw:.15},.12,`power3.in`,.43),n.call(()=>t.landed(e,1),[],.55),s({hy:.02,crx:-.18,srx:-.06,arx:-.12,...Jf(e,{r:[0,2,qf[2]-.12],gs:1.04})},.13,`power2.out`,.55),s({...i,hy:-.06,[`${e}gs`]:1,...Zf({p:[.16,.09,0],rot:[0,.2,0]})},.17,`power2.inOut`,.68),s({...i,[`${e}gs`]:1},.15,`back.out(1.6)`,.85),{tl:n,next:o,duration:1}}case`counter`:{let e=t.nextSide(`counter`),r=e===`l`?`r`:`l`;return s({hy:-.11,hz:-.03,hry:Z(e,.14),cry:Z(e,.36),sry:Z(e,.08),crx:.08,crz:Z(e,-.06),[`${e}cy`]:Z(e,.16),[`${e}cz`]:Z(e,.1),...Jf(e,{c:[.33,1.8,-.06],w:0,pole:[1,.2,-.8],g:[-.45,.2,.2]}),...Jf(r,{c:[.1,1.68,.26]}),arx:.12,eyeL:.5,eyeR:.5,bly:-.8,bry:-.8,blr:.35,brr:-.35,mo:.1,mw:.3},.17,`power2.out`,0),s({hz:.04,hry:Z(e,-.05),cry:Z(e,-.15),crx:.16,[`${e}cy`]:Z(e,-.1),...Jf(e,{r:[.28,1.98,.42],w:1,pole:[1,.6,-.4],g:[-.4,.1,.3]})},.09,`power2.in`,.17),s({hy:-.06,hz:.12,hry:Z(e,-.2),cry:Z(e,-.55),sry:Z(e,-.15),crx:.28,crz:Z(e,.08),[`${e}cy`]:Z(e,-.34),...Jf(e,{r:[.03,qf[1],qf[2]-.02],pole:[1,.3,-.3],g:[-.35,0,.3],gs:1.2}),...Yf(e,{p:[.16,.09,0]}),mo:.6,mw:.25},.09,`power3.in`,.26),n.call(()=>t.landed(e,1.1),[],.35),s({cry:Z(e,-.66),crx:.32,...Jf(e,{r:[-.14,1.6,qf[2]-.08],gs:1.03})},.12,`power2.out`,.35),s({...i,arz:Z(e,-.12),ary:Z(e,.08),[`${e}gs`]:1,mo:.1,mw:.2,grin:1},.3,`power2.inOut`,.47),s({...i},.2,`power2.inOut`,.77),{tl:n,next:o,duration:.97}}case`slip`:{let e=t.nextSide(`slip`)===`l`?1:-1;return s({hx:e*.12,hy:-.13,hz:-.03,hry:e*-.1,srz:-e*.12,crz:-e*.2,crx:.24,cry:e*.12,arz:-e*.12,arx:.16,...Xf({c:[.1,1.66,.22]}),eyeL:1,eyeR:1,bly:.3,bry:.3},.16,`power3.out`,0),s({hx:e*.13,hy:-.14,crz:-e*.22},.22,`sine.inOut`,.16),s({...i},.27,`power2.inOut`,.38),{tl:n,next:o,duration:.65}}case`block`:return s({...ep,eyeL:.55,eyeR:.55,bly:-.5,bry:-.5},.12,`power3.out`,0),n.call(()=>t.shake(.45),[],.2),s({hz:-.07,crx:.1,arx:.16,...Xf({c:[.075,1.73,.14]})},.07,`expo.out`,.2),s({hz:-.04,...ep},.15,`power2.out`,.27),s({...i},.2,`power2.inOut`,.42),{tl:n,next:o,duration:.62};case`hitLight`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(.55,e),[],0),s({hz:(i.hz??0)-.04,crx:(i.crx??0)-.08,cry:r*.12,srx:-.02,nrx:-.16,arx:-.42,ary:r*.32,arz:-r*.12,eyeL:.12,eyeR:.12,mo:.65,mw:.1,bly:.7,bry:.7,blr:0,brr:0,grin:0},.06,`expo.out`,0),s({...i,...a,mo:.2},.39,`elastic.out(1, 0.55)`,.08),{tl:n,next:o,duration:.47}}case`hitHeavy`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(1,e),[],0),s({hy:-.02,hz:(i.hz??0)-.1,crx:-.18,cry:r*.22,crz:-r*.1,srx:-.1,nrx:-.12,arx:-.3,ary:r*.5,arz:-r*.26,...Xf({c:[.36,1.48,.14],pole:[1,-.4,-.5],g:[.1,.3,.4]}),eyeL:.06,eyeR:.06,mo:1,mw:.2,bly:.9,bry:.9,blr:0,brr:0,grin:0},.08,`expo.out`,0),s({hy:-.1,hz:(i.hz??0)-.17,crx:-.1,arx:-.16,ary:r*.25,...Yf(`l`,{p:[.17,.09,-.02]}),eyeL:.3,eyeR:.3,mo:.6},.22,`power2.out`,.08),s({...i,...a,mo:.15},.5,`back.out(1.3)`,.3),{tl:n,next:o,duration:.8}}case`stagger`:{let e=t.incomingSide(),r=e===`r`?-1:1;return n.call(()=>t.hit(1.2,e),[],0),s({hy:-.03,hz:-.12,crx:-.26,cry:r*.24,crz:-r*.12,srx:-.1,nrx:-.2,arx:-.55,ary:r*.5,arz:-r*.3,...Xf({c:[.42,1.5,.06],pole:[1,-.3,-.6],g:[.1,.3,.4]}),eyeL:.06,eyeR:.06,mo:1,mw:.25,bly:1,bry:1,blr:0,brr:0,grin:0},.08,`expo.out`,0),s({...Yf(`r`,{p:[.19,.16,-.24]})},.1,`power2.out`,.06),s({...Yf(`r`,{p:[.19,.09,-.34]}),hz:-.24,hy:-.1},.1,`power2.in`,.16),s({...Yf(`l`,{p:[.15,.17,-.06]}),crx:-.12,arx:-.4},.1,`power2.out`,.24),s({...Yf(`l`,{p:[.14,.09,-.14]}),hz:-.3,hy:-.12},.12,`power2.in`,.34),s({crz:r*.1,arz:r*.22,ary:-r*.15,crx:.05,eyeL:.4,eyeR:.4,mo:.4},.18,`sine.inOut`,.46),s({crz:-r*.06,arz:-r*.12,ary:r*.1,eyeL:.7,eyeR:.7},.16,`sine.inOut`,.64),s({...Yf(`r`,{p:[.17,.15,-.2]})},.12,`power2.out`,.78),s({...i,...a,...Yf(`l`,{p:[.16,.13,0]})},.2,`power2.inOut`,.86),s({...i,...a},.14,`power2.out`,1.02),{tl:n,next:o,duration:1.16}}case`koFall`:{let e=t.incomingSide(),r=e===`r`?-1:1;return o=`down`,n.call(()=>t.hit(1.5,e),[],0),s({hy:.02,hz:-.08,crx:-.36,cry:r*.26,crz:-r*.12,srx:-.16,hrx:-.04,nrx:-.32,arx:-.95,ary:r*.6,arz:-r*.32,...Jf(`l`,{c:[.55,1.82,.12],w:0,pole:[1,.3,-.5],g:[.2,.4,.3]}),...Jf(`r`,{c:[.6,1.66,.16],w:0,pole:[1,.3,-.5],g:[.2,.4,.3]}),...Zf({rot:[.2,.1,0]}),eyeL:.06,eyeR:.06,mo:1,mw:.25,bly:1,bry:1,blr:0,brr:0,grin:0,look:.4},.12,`expo.out`,0),s({hy:-.04,hz:-.26,hrx:-.46,crx:-.2,srx:-.1,cry:r*.18,arx:-.55,ary:r*.4,look:0,...Jf(`l`,{c:[.72,1.78,.02],pole:[.6,.5,-.8]}),...Jf(`r`,{c:[.76,1.62,.06],pole:[.6,.5,-.8]}),...Zf({rot:[-.1,-.1,0]})},.63,`sine.inOut`,.12),s({hx:np.hx,hy:-.84,hz:-.62,hrx:-1.5,hrz:np.hrz,srx:.02,crx:.02,cry:r*.08,nrx:.1,arx:-.25,ary:r*.3,...Jf(`l`,{c:[.6,1.9,-.08],pole:[.2,-.2,-1]}),...Jf(`r`,{c:[.64,1.62,-.1],pole:[.2,-.2,-1]}),...Yf(`l`,{p:[.2,.36,.22],rot:[-1.1,.3,.1],knee:[.3,0,1]}),...Yf(`r`,{p:[.13,.3,.12],rot:[-.9,.1,-.1],knee:[.2,0,1]})},.45,`power2.in`,.75),n.call(()=>t.shake(.9),[],1.2),s({hy:-.77,hrx:-1.42,arx:-.35,...Yf(`l`,{p:[.2,.17,.2]}),...Yf(`r`,{p:[.14,.15,.12]})},.17,`power2.out`,1.2),s({hy:-.84,hrx:-1.5,arx:-.1,...Yf(`l`,{p:[.2,.075,.2]}),...Yf(`r`,{p:[.14,.075,.12]})},.2,`power2.in`,1.37),s({...np},.55,`sine.inOut`,1.57),{tl:n,next:o,duration:2.12}}case`celebrate`:return o=`victory`,s({hy:-.13,crx:.22,arx:.16,...Xf({c:[.22,1.2,.2],w:0,pole:[1,-.6,-.5]}),eyeL:.4,eyeR:.4,mo:.1,grin:0},.15,`power2.out`,0),s({...rp,hy:.08,...Zf({p:[.17,.17,0],rot:[.35,.15,0]})},.27,`back.out(1.6)`,.15),s({hy:-.05,...Zf({p:[.17,.09,0],rot:[0,.15,0]})},.16,`power2.in`,.42),s({...rp},.5,`back.out(2)`,.58),{tl:n,next:o,duration:1.1};case`walkIn`:{let e=-1.25,t={...Qf,...a};n.set(r,{...t,hz:(t.hz??0)+e,lfz:(t.lfz??0)+e,rfz:(t.rfz??0)+e},0);let i=.3;for(let n=0;n<4;n++){let r=n*i,a=n%2==0?`l`:`r`,o=(a===`l`?t.lfz:t.rfz)+e+1.25*(n<2?.5:1);s({[`${a}fy`]:.18,[`${a}fz`]:o-.2,[`${a}frx`]:-.15},i*.5,`power2.out`,r),s({[`${a}fy`]:.09,[`${a}fz`]:o,[`${a}frx`]:0},i*.5,`power2.in`,r+i*.5),s({hy:(t.hy??0)+.02,hry:(t.hry??0)+(a===`l`?-.06:.06)},i*.5,`sine.out`,r),s({hy:(t.hy??0)-.03},i*.5,`sine.in`,r+i*.5)}return s({hz:t.hz},i*4,`power1.inOut`,0),s({...t},.15,`power2.out`,i*4),{tl:n,next:o,duration:1.3499999999999999}}default:return{tl:n,next:o,duration:0}}}var lp=new K,up=new G,dp=new G,fp=new G;function pp(e,t){return e===void 0?t:typeof e==`number`?e:e(up,dp,fp)}var mp=class{pos=[];nrm=[];col=[];aux=[];skI=[];skW=[];idx=[];get vertexCount(){return this.pos.length/3}add(e,t,n,r=!1){let i=e.getAttribute(`position`),a=e.getAttribute(`normal`),o=new H().getNormalMatrix(t),s=this.vertexCount,c=n.shade??.14;for(let e=0;e<i.count;e++){up.fromBufferAttribute(i,e),fp.fromBufferAttribute(a,e).applyMatrix3(o).normalize(),r&&fp.negate(),dp.copy(up).applyMatrix4(t),this.pos.push(dp.x,dp.y,dp.z),this.nrm.push(fp.x,fp.y,fp.z);let s=typeof n.paint==`number`?n.paint:n.paint(up,dp,fp);lp.setHex(s);let l=1-c*(.5-.5*fp.y)*(.6+.4*Math.max(0,-fp.y));this.col.push(lp.r*l,lp.g*l,lp.b*l),this.aux.push(pp(n.gloss,.25),pp(n.outline,1),pp(n.cheek,0),pp(n.bruise,0)),this.skI.push(n.bone,0,0,0),this.skW.push(1,0,0,0)}if(e.index){let t=e.index;for(let e=0;e<t.count;e+=3){let n=t.getX(e)+s,i=t.getX(e+1)+s,a=t.getX(e+2)+s;r?this.idx.push(n,a,i):this.idx.push(n,i,a)}}else for(let e=0;e<i.count;e+=3)r?this.idx.push(s+e,s+e+2,s+e+1):this.idx.push(s+e,s+e+1,s+e+2);e.dispose()}build(){return this.buildPair().body}buildPair(){let e=this.vertexCount,t={position:new le(this.pos,3),normal:new le(this.nrm,3),color:new le(this.col,3),aux:new le(this.aux,4),skinIndex:new it(this.skI,4),skinWeight:new le(this.skW,4)},n=t=>e>65535?new Je(t,1):new it(t,1),r=e=>{let r=new Ce;for(let[e,n]of Object.entries(t))r.setAttribute(e,n);return r.setIndex(n(e)),r.computeBoundingSphere(),r},i=[];for(let e=0;e<this.idx.length;e+=3){let t=this.idx[e],n=this.idx[e+1],r=this.idx[e+2];(this.aux[t*4+1]>0||this.aux[n*4+1]>0||this.aux[r*4+1]>0)&&i.push(t,n,r)}return{body:r(this.idx),outline:r(i)}}},hp=Math.PI/180;function gp(e,t=[0,0,0],n=[1,1,1],r=`XYZ`){let i=new B().setFromEuler(new re(t[0]*hp,t[1]*hp,t[2]*hp,r));return new q().compose(new G(...e),i,new G(...n))}function _p(e,t,n=1,r=1,i=0){let a=new G(...e),o=new G(...t).sub(a).normalize(),s=new B().setFromUnitVectors(new G(0,1,0),o);return i&&s.multiply(new B().setFromAxisAngle(new G(0,1,0),i*hp)),new q().compose(a,s,new G(n,1,r))}function vp(e,t){return Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2])}function yp(e=22,t=16,n=0,r=Math.PI,i=0,a=Math.PI*2){return new ve(1,e,t,i,a,n,r)}function bp(e,t=24,n){let r=e[0][1]>e[e.length-1][1],i=r?[...e].reverse():e,a=n&&r?[...n].reverse():n,o=i.length,s=a??i.map((e,t)=>{let n=i[Math.max(0,t-1)],r=i[Math.min(o-1,t+1)],a=r[0]-n[0],s=r[1]-n[1],c=Math.hypot(a,s)||1;return[s/c,-a/c]}),c=[],l=[],u=[];for(let e=0;e<=t;e++){let n=e/t*Math.PI*2,r=Math.sin(n),a=Math.cos(n);for(let e=0;e<o;e++){let[t,n]=i[e];c.push(t*r,n,t*a),l.push(s[e][0]*r,s[e][1],s[e][0]*a)}}for(let e=0;e<t;e++)for(let t=0;t<o-1;t++){let n=t+e*o,r=n+o;u.push(n,r,n+1,r+1,n+1,r)}let d=new Ce;return d.setAttribute(`position`,new le(c,3)),d.setAttribute(`normal`,new le(l,3)),d.setIndex(u),d}function xp(e,t,n,r=16,i=5){let a=Math.asin(Math.max(-.95,Math.min(.95,(e-t)/n))),o=[],s=[];for(let t=0;t<=i;t++){let n=-Math.PI/2+t/i*(a+Math.PI/2);o.push([e*Math.cos(n),e*Math.sin(n)]),s.push([Math.cos(n),Math.sin(n)])}let c=Math.max(2,Math.round(n/.045));for(let r=1;r<c;r++){let i=r/c,l=e*Math.cos(a),u=t*Math.cos(a),d=e*Math.sin(a),f=n+t*Math.sin(a);o.push([l+(u-l)*i,d+(f-d)*i]),s.push([Math.cos(a),Math.sin(a)])}for(let e=0;e<=i;e++){let r=a+e/i*(Math.PI/2-a);o.push([t*Math.cos(r),n+t*Math.sin(r)]),s.push([Math.cos(r),Math.sin(r)])}return bp(o,r,s)}function Sp(e,t,n=.003,r=6){let i=new de(e,{depth:t,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:2,curveSegments:r});return i.translate(0,0,-t/2),i.deleteAttribute(`uv`),i}function Cp(e,t){let n=e.index?e.toNonIndexed():e;for(let r=0;r<t;r++){let t=n.getAttribute(`position`),r=n.getAttribute(`normal`),i=[],a=[],o=[new G,new G,new G],s=[new G,new G,new G],c=[new G,new G,new G],l=[new G,new G,new G];for(let e=0;e<t.count;e+=3){for(let n=0;n<3;n++)o[n].fromBufferAttribute(t,e+n),s[n].fromBufferAttribute(r,e+n);for(let e=0;e<3;e++)c[e].copy(o[e]).add(o[(e+1)%3]).multiplyScalar(.5),l[e].copy(s[e]).add(s[(e+1)%3]).normalize();let n=[[[o[0],s[0]],[c[0],l[0]],[c[2],l[2]]],[[c[0],l[0]],[o[1],s[1]],[c[1],l[1]]],[[c[2],l[2]],[c[1],l[1]],[o[2],s[2]]],[[c[0],l[0]],[c[1],l[1]],[c[2],l[2]]]];for(let e of n)for(let[t,n]of e)i.push(t.x,t.y,t.z),a.push(n.x,n.y,n.z)}n!==e&&n.dispose(),n=new Ce,n.setAttribute(`position`,new ft(new Float32Array(i),3)),n.setAttribute(`normal`,new ft(new Float32Array(a),3))}return n}function wp(e,t,n,r,i){let a=Cp(e,3);e.dispose(),a.applyMatrix4(t);let o=a.getAttribute(`position`),s=a.getAttribute(`normal`),c=new G(...n),l=new G(...r),u=new G,d=new G,f=new G,p=new G;for(let e=0;e<o.count;e++)u.fromBufferAttribute(o,e).sub(c),d.set(u.x/l.x,u.y/l.y,u.z/l.z).normalize(),f.set(d.x*l.x,d.y*l.y,d.z*l.z),p.set(d.x/l.x,d.y/l.y,d.z/l.z).normalize(),f.add(c).addScaledVector(p,i),o.setXYZ(e,f.x,f.y,f.z),s.setXYZ(e,p.x,p.y,p.z);return a}function Tp(){let e=new ue,t=[[.12,.5],[-.26,.02],[-.02,.02],[-.16,-.5],[.28,.06],[.04,.06],[.2,.5]];e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);return e.closePath(),e}function Ep(e=.48){let t=new ue;for(let n=0;n<10;n++){let r=Math.PI/2+n*Math.PI/5,i=n%2==0?1:e,a=Math.cos(r)*i,o=Math.sin(r)*i;n===0?t.moveTo(a,o):t.lineTo(a,o)}return t.closePath(),t}var Dp=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Op(e){let t=new mp,n=e.bulk,r=(e,n,r,i,a,o=[18,12])=>t.add(yp(o[0],o[1]),gp(n,i,r),{bone:e,...a}),i=(e,n,r,i,a,o,s=16)=>t.add(xp(i,a,vp(n,r),s),_p(n,r),{bone:e,...o}),a=(e,n,r,i,a,o=[0,0,0])=>t.add(bp(r,28),gp(n,o,i),{bone:e,...a}),o={paint:e.skin,gloss:.12,outline:1,shade:.14},s={...o,outline:.4,shade:.1},c={...o,outline:.55,shade:.12};t.add(bp(jp([[0,1.13],[.115,1.14],[.145,1.2],[.172,1.28],[.198,1.36],[.213,1.43],[.21,1.49],[.19,1.54],[.15,1.58],[.09,1.615],[0,1.63]],3),36),gp([0,0,-.02],[0,0,0],[1*n,1,.68]),{bone:V.chest,...o});for(let t of[1,-1])r(V.chest,[t*.088,1.418,.078],[.1*n,.074,.066],[-8,t*20,t*12],c),r(V.chest,[t*.112,1.39,.138],[.009,.008,.005],[0,0,0],{paint:e.skinDeep,outline:0,gloss:0},[10,8]),r(V.chest,[t*.132,1.33,-.03],[.092*n,.17,.09],[0,0,t*-12],{...c,outline:.7}),r(V.chest,[t*.078,1.578,-.042],[.13*n,.07,.085],[-6,0,t*-24],c),r(V.chest,[t*.085,1.45,-.128],[.062*n,.08,.034],[8,t*-16,t*18],{...s,outline:.3}),r(V.chest,[t*.152,1.33,.03],[.045,.08,.055],[0,0,t*-8],{...s,outline:.28},[12,8]);r(V.chest,[0,1.605,-.07],[.105*n,.085,.062],[10,0,0],{...c,outline:.7}),r(V.spine,[0,1.17,-.005],[.14*n,.17,.112],[0,0,0],o,[22,16]),r(V.spine,[0,1.2,.072],[.07,.125,.04],[-6,0,0],{paint:t=>{let n=Math.abs(t.x)<.07,r=[.42,-.02,-.46].some(e=>Math.abs(t.y-e)<.07);return(n||r)&&t.z>.2?e.skinDeep:e.skin},gloss:.12,outline:.3,shade:.06},[24,26]);for(let e of[1,-1])r(V.spine,[e*.108,1.105,.02],[.05,.085,.07],[0,0,e*8],{...s,outline:.28}),r(V.spine,[e*.038,1.2,-.084],[.04,.15,.04],[0,0,0],{...s,outline:.4});r(V.hips,[0,1.03,-.005],[.148*n,.11,.11],[0,0,0],{paint:(t=>(n,r)=>r.y>1.075?e.skin:t)(e.shorts),gloss:.15,outline:.6}),r(V.hips,[0,.935,-.01],[.168*Math.sqrt(n),.13,.128],[0,0,0],{paint:e.shorts,gloss:.18});for(let t of[1,-1])r(V.hips,[t*.07,.905,-.07],[.092,.1,.076],[0,0,0],{paint:e.shorts,gloss:.18,outline:.7});a(V.hips,[0,0,-.008],[[.13,.988],[.152,.992],[.158,1],[.16,1.04],[.158,1.078],[.15,1.086],[.128,1.09]],[1.02*n,1,.8],{paint:(t,n)=>{let r=n.y;return r>1.022&&r<1.036||r>1.044&&r<1.056?e.shortsDeep:e.trim},gloss:.45,outline:1});for(let a of[1,-1]){let l=a===1,u=l?V.thighL:V.thighR,d=l?V.shinL:V.shinR,f=l?V.footL:V.footR,p=Te[l?`thighL`:`thighR`],m=Te[l?`shinL`:`shinR`],h=Te[l?`footL`:`footR`],g=p[0];t.add(bp([[.07,.11],[.112,.07],[.13,0],[.136,-.07],[.134,-.14],[.128,-.19],[.131,-.2],[.131,-.225],[.12,-.236],[.09,-.24]],30),gp([g+a*.008,p[1],p[2]-.005],[0,0,a*3]),{bone:u,paint:t=>{let n=Math.hypot(t.x,t.z)||1;return t.y<-.19?e.trim:a*t.x/n>.9?e.stripe:a*t.x/n>.82?e.shortsDeep:e.shorts},gloss:.18,outline:1}),i(u,m,p,.078,.102,o),r(u,[g+a*.004,.63,.028],[.088*n,.16,.084],[0,0,0],c),r(u,[g+a*.032,.6,-.01],[.052,.12,.064],[0,0,a*-6],{...s,outline:.3}),i(d,h,m,.048,.066,o),r(d,[g,.5,.058],[.042,.044,.026],[0,0,0],{...s,outline:.35},[12,8]),r(d,[g+a*.008,.37,-.034],[.068*n,.12,.064],[0,0,0],c),t.add(bp([[.045,.198],[.058,.205],[.06,.226],[.058,.262],[.046,.268]],24),gp([g,0,h[2]-.004]),{bone:d,paint:e.sock,gloss:.1,outline:.8}),t.add(bp([[.044,.03],[.064,.042],[.068,.11],[.065,.19],[.068,.2],[.066,.214],[.05,.22]],26),gp([g,0,h[2]-.008]),{bone:f,paint:(t,n)=>n.y>.168&&n.y<.19||n.y>.198?e.shoeTrim:n.z>h[2]+.05&&Math.abs(n.x-g)<.022&&Math.floor(n.y*55)%2==0?e.sock:e.shoe,gloss:.5,outline:1}),r(f,[g,.058,.04],[.064,.056,.125],[-4,0,0],{paint:t=>t.z>.25&&t.y>.35&&Math.abs(t.x)<.32&&Math.floor((t.z+1)*9)%2==0?e.sock:t.y<-.25?e.shoeTrim:e.shoe,gloss:.55,outline:1}),r(f,[g,.017,.042],[.07,.022,.136],[0,0,0],{paint:e.sole,gloss:.2,outline:1,shade:.15})}for(let a of[1,-1]){let s=a===1,l=s?V.upperL:V.upperR,u=s?V.foreL:V.foreR,d=s?V.gloveL:V.gloveR,f=Te[s?`upperL`:`upperR`],p=Te[s?`foreL`:`foreR`],m=Te[s?`gloveL`:`gloveR`],h=f[0];r(l,[h+a*.01,1.462,-.02],[.09*n,.13,.09],[0,0,a*-8],{...c,outline:.8},[20,16]),i(l,p,f,.07,.084,o),r(l,[h,1.338,.022],[.064*n,.098,.062],[0,0,0],{...c,outline:.45}),r(l,[h+a*.004,1.362,-.034],[.064*n,.112,.06],[0,0,0],{...c,outline:.45}),i(u,m,p,.05,.066,o),r(u,[h+a*.006,1.128,.002],[.066*n,.088,.062],[0,0,a*4],{...c,outline:.4}),kp(t,e,a,d,[h,m[1],m[2]])}i(V.neck,[0,1.5,-.03],[0,1.72,-.008],.098*n,.08,o);for(let e of[1,-1])r(V.neck,[e*.038,1.625,.034],[.018,.074,.02],[-24,0,e*-16],{...s,outline:.32},[12,8]);if(Np(t,e),e.tattoo){let e=[.295,1.462,-.02],r=[.09*n,.13,.09],i=new G(1,.12,.18).normalize(),a=new G(0,1,0),o=new G().crossVectors(a,i).normalize(),s=new G().crossVectors(i,o).normalize(),c=(t,n)=>new q().makeBasis(o,s,i).setPosition(new G(...e).addScaledVector(i,.1+n)).multiply(new q().makeScale(t,t,t)),l=wp(new me(Tp()),c(.15,0),e,r,.0022);t.add(l,new q,{bone:V.upperL,paint:2758144,outline:0,gloss:.1,shade:0});let u=wp(new me(Tp()),c(.118,0),e,r,.0042);t.add(u,new q,{bone:V.upperL,paint:16766238,outline:0,gloss:.4,shade:0})}return t.buildPair()}function kp(e,t,n,r,i){let[a,o,s]=i;e.add(bp([[0,.05],[.045,.047],[.066,.038],[.074,.01],[.08,-.03],[.083,-.052],[.07,-.062]],28),gp([a,o,s]),{bone:r,paint:e=>e.y<-.028&&e.y>-.042?t.cuffStripe:t.cuff,gloss:.55,outline:1});let c=e=>Dp(.2,.9,-n*e.x)>.5?t.gloveDeep:t.glove,l=(t,n,i,a,o)=>e.add(yp(o[0],o[1]),gp(t,i,n),{bone:r,...a});l([a,o-.13,s+.012],[.114,.13,.122],[0,0,0],{paint:c,gloss:1,outline:1.1,shade:.22},[24,18]),l([a+n*.004,o-.18,s+.036],[.104,.085,.102],[0,0,0],{paint:t.glove,gloss:1,outline:1.1,shade:.2},[20,14]),l([a-n*.062,o-.105,s+.082],[.034,.074,.037],[-16,0,n*14],{paint:t.glove,gloss:1,outline:.9},[14,10])}function Ap(e){let t=new mp;return kp(t,e,1,0,[0,0,0]),kp(t,e,-1,1,[0,0,0]),t.build()}function jp(e,t){let n=[];for(let r=0;r<e.length-1;r++){let i=e[Math.max(0,r-1)],a=e[r],o=e[r+1],s=e[Math.min(e.length-1,r+2)];for(let e=0;e<t;e++){let r=e/t,c=r*r,l=c*r,u=(e,t,n,i)=>.5*(2*t+(-e+n)*r+(2*e-5*t+4*n-i)*c+(-e+3*t-3*n+i)*l);n.push([Math.max(0,u(i[0],a[0],o[0],s[0])),u(i[1],a[1],o[1],s[1])])}}return n.push(e[e.length-1]),n}function Mp(e,t){let n=yp(20,10);n.scale(e[0],e[1],e[2]);let r=n.getAttribute(`position`);for(let n=0;n<r.count;n++){let i=r.getX(n);r.setY(n,r.getY(n)+t*i*i/e[0])}return n.computeVertexNormals(),n}function Np(e,t){let n=t.bulk,r=new q().makeTranslation(Ye[0],Ye[1],Ye[2]).multiply(new q().makeScale(nt,nt,nt)).multiply(new q().makeTranslation(-Ye[0],-Ye[1],-Ye[2])),i={add:(t,n,i)=>e.add(t,r.clone().multiply(n),i)},a=(e,t,n,r,a,o=[14,10])=>i.add(yp(o[0],o[1]),gp(t,r,n),{bone:e,...a}),o=V.head,s=t.hair===null,c={paint:t.skin,gloss:.12,outline:1,shade:.1};a(o,[0,1.805,-.012],[.1,.118,.114],[0,0,0],{paint:e=>!s&&Math.abs(e.x)<.34&&e.y>-.45&&e.z<.8?t.brow:t.skin,gloss:s?.4:.12,outline:1,shade:.1},[30,22]);let l=e=>-.12+.62*Dp(.3,.92,Math.abs(e.x));a(o,[0,1.738,.026],[.09*(t.expression===`scowl`?1.05:.97)*Math.sqrt(n),.08,.088],[10,0,0],{paint:e=>t.beard!==null&&e.y<l(e)&&e.z>-.55?t.beard:t.skin,gloss:.25,outline:1,cheek:e=>{let t=Math.abs(e.x)-.62,n=e.y-.3,r=e.z-.65;return Math.exp(-(t*t+n*n+r*r)/.09)},shade:.2},[30,22]);for(let e of[1,-1])a(o,[e*.097,1.784,-.014],[.014,.034,.025],[0,e*22,0],{paint:t.skinWarm,gloss:.1,outline:.5},[12,8]),a(o,[e*.017,1.765,.105],[.014,.012,.014],[0,0,0],{...c,outline:.35},[12,8]);a(o,[0,1.676,.068],[.044,.032,.036],[0,0,0],{paint:t.beard??t.skin,gloss:.2,outline:.7},[16,10]),a(o,[0,1.826,.073],[.08,.024,.036],[-8,0,0],{...c,outline:0,bruise:e=>Dp(.1,.8,e.x)},[20,10]),a(o,[0,1.797,.102],[.014,.03,.016],[-22,0,0],{...c,outline:.35},[12,8]),a(o,[0,1.772,.114],[.018,.018,.02],[0,0,0],{paint:t.skin,gloss:.2,outline:.45,cheek:.35},[12,8]);for(let e of[1,-1]){let n=e===1?V.eyeL:V.eyeR,r=t.expression===`scowl`?12:6;a(o,[e*.04,1.8,.087],[.024,.0165,.015],[0,0,e*r],{paint:16249318,gloss:.7,outline:.5,shade:.1},[14,10]),a(o,[e*.037,1.799,.0985],[.0088,.0098,.0062],[0,0,0],{paint:1708560,gloss:1,outline:0,shade:0},[12,8]),a(n,[e*.04,1.8,.0885],[.0285,.0195,.0185],[0,0,e*(r+6)],{paint:t.skinDeep,gloss:.15,outline:.5,shade:.05},[16,12]),a(e===1?V.browL:V.browR,[e*.042,1.833,.1],[.034,.0105,.014],[0,e*-14,0],{paint:t.brow,gloss:.1,outline:.5,shade:0},[12,8])}a(V.swell,[.045,1.79,.088],[.03,.026,.022],[0,0,15],{paint:t.expression===`scowl`?7023164:13131902,gloss:.6,outline:.6,bruise:.4},[14,10]);let u=t.expression===`grin`,d=u?.32:-.22;if(i.add(Mp([.031,.0062,.012],d),gp([0,1.712,.104],[0,0,u?7:0]),{bone:V.mouth,paint:3804436,gloss:.3,outline:.42,shade:0}),u&&i.add(Mp([.027,.0034,.0085],d),gp([0,1.7138,.1085],[0,0,7]),{bone:V.mouth,paint:16578799,gloss:.6,outline:0,shade:0}),t.beard!==null)for(let e of[1,-1])a(o,[e*.021,1.727,.106],[.027,.0095,.013],[0,e*12,e*-14],{paint:t.beard,gloss:.15,outline:.4},[12,8]);if(t.hair!==null){let e=new G(0,1.805,-.012),n=new G(.1,.118,.114),r=t=>({base:new G(0,e.y+n.y*Math.cos(t),e.z-n.z*Math.sin(t)),nrm:new G(0,Math.cos(t)/n.y,-Math.sin(t)/n.z).normalize()});for(let e=0;e<9;e++){let n=e/8,i=-.5+n*2.2,{base:s,nrm:c}=r(i),l=s.clone().addScaledVector(c,.008),u=-i*180/Math.PI;a(o,[l.x,l.y,l.z],[.034-.006*n,.026,.04],[u,0,0],{paint:t.hair,gloss:.35,outline:.7,shade:.12},[12,8])}for(let e=0;e<11;e++){let n=e/10,{base:a,nrm:s}=r(-.55+n*2.2),c=.045+.05*Math.sin(Math.min(1,n*1.7)*Math.PI*.85)*(1-n*.4),l=(e%2==0?1:-1)*(.008+.01*Math.sin(n*9)),u=a.clone().addScaledVector(s,c).add(new G(l,.004,-.03-.025*n)),d=a.clone().addScaledVector(s,-.006);i.add(xp(.026,.0035,d.distanceTo(u),8,3),_p([d.x,d.y,d.z],[u.x,u.y,u.z],.9,1.1),{bone:o,paint:(e,n)=>n.distanceTo(u)<c*.42?t.hairTip:t.hair,gloss:.45,outline:.7,shade:.12})}}}var Pp=[`idle`,`hook_l`,`hook_r`,`uppercut_l`,`uppercut_r`,`counter`,`hit_head`,`stagger`,`dizzy`,`ko`,`victory`,`dodge`],Fp={hook_l:.15,hook_r:.15,uppercut_l:.15,uppercut_r:.15,counter:.3,stagger:.35,dodge:.5,ko:.8},Ip=new Set([`hips`,`spine`,`chest`,`neck`,`head`,`footL`,`footR`]),Lp=Object.fromEntries(rt.map(e=>[e,rt.find(t=>qe[t]===e)])),Rp=new G(0,-.13,.012),zp=new G(.06,1.625,Kf-.1),Bp={hook:[.05,-.01,-.13],uppercut:[.02,-.09,-.1],cross:[.02,-.01,-.13]},Vp=[.1,-.17,-.13];function Hp(e,t,n,r){let i=t===`hook`&&n===`r`?Vp:Bp[t];return r.set(e.x+(n===`l`?i[0]:-i[0]),e.y+i[1],e.z+i[2])}var Up=e=>e?new B(e[0],e[1],e[2],e[3]).normalize():new B;function Wp(e,t={}){let{frames:n,rest:r,tracks:i}=e;if(!(n>1)||!r?.world||!i?.[`hips.position`])throw Error(`clip ${e.name}: malformed`);let a=e=>!!r.world[e]&&Array.isArray(i[e])&&i[e].length===n*4;if(!a(`hips`))throw Error(`clip ${e.name}: no hips track`);let o=new Map;for(let e of rt){let t=qe[e];if(!t){o.set(e,new G(...r.hips));continue}let n=r.offset[e],i=o.get(t);n&&i&&o.set(e,new G(...n).applyQuaternion(Up(r.world[t])).add(i))}let s=e=>new G(...Te[e]),c=e=>{let t=new B;if(Ip.has(e))return t;let n=null,r=Lp[e];if(r&&o.has(r)&&o.has(e)?n=[e,r]:qe[e]&&o.has(qe[e])&&(n=[qe[e],e]),!n||!o.has(n[1])||!o.has(n[0]))return t;let i=s(n[1]).sub(s(n[0])),a=o.get(n[1]).clone().sub(o.get(n[0]));return i.lengthSq()>1e-12&&a.lengthSq()>1e-12&&t.setFromUnitVectors(i.normalize(),a.normalize()),t},l=[],u=new B;for(let e of rt){if(!a(e)){l.push(null);continue}let t=qe[e],o=t?c(t).invert().multiply(Up(r.world[t])):new B,s=Up(r.world[e]).invert().multiply(c(e)),d=i[e],f=new Float32Array(n*4),p=0,m=0,h=0,g=1;for(let e=0;e<n;e++)u.set(d[4*e],d[4*e+1],d[4*e+2],d[4*e+3]).normalize(),u.premultiply(o).multiply(s).normalize(),e>0&&p*u.x+m*u.y+h*u.z+g*u.w<0&&u.set(-u.x,-u.y,-u.z,-u.w),f[4*e]=p=u.x,f[4*e+1]=m=u.y,f[4*e+2]=h=u.z,f[4*e+3]=g=u.w;l.push(f)}let d=i[`hips.position`],f=Te.hips[1]/r.hips[1],p=t.rootScale??1,m=new Float32Array(n*3);for(let e=0;e<n;e++)for(let t=0;t<3;t++)m[3*e+t]=Te.hips[t]+(d[3*e+t]-r.hips[t])*f*(t===1?1:p);let h={name:e.name,fps:e.fps,frames:n,duration:(n-1)/e.fps,rot:l,hips:m,impact:null};if(e.impact){let t=e.impact.hand===`gloveL`?`l`:`r`,r=e.impact.kind,i=U(),a=new qp,o=Hp(zp,r,t,new G),s=new G,c=e.impact.frame,l=1/0,u=Math.max(0,e.impact.frame-2),d=Math.min(n-1,e.impact.frame+6);for(let n=u;n<=d;n++){a.sample(h,n/e.fps).writeTo(i,1);let r=s.copy(Rp).applyMatrix4(i.model[t===`l`?V.gloveL:V.gloveR]).distanceTo(o);r<l&&(l=r,c=n)}let f=c/e.fps;h.impact={time:f,reachTime:f+2/e.fps,side:t,kind:r}}return h}var Gp=new B,Kp=new q,qp=class{rot=rt.map(()=>new B);valid=rt.map(()=>!1);hips=new G(...Te.hips);sample(e,t){let n=Math.min(e.frames-1,Math.max(0,t*e.fps)),r=Math.min(e.frames-2,Math.floor(n)),i=n-r,a=1-i;for(let t=0;t<e.rot.length;t++){let n=e.rot[t];if(this.valid[t]=!!n,!n)continue;let o=4*r;this.rot[t].set(n[o]*a+n[o+4]*i,n[o+1]*a+n[o+5]*i,n[o+2]*a+n[o+6]*i,n[o+3]*a+n[o+7]*i).normalize()}let o=e.hips,s=3*r;return this.hips.set(o[s]*a+o[s+3]*i,o[s+1]*a+o[s+4]*i,o[s+2]*a+o[s+5]*i),this}copy(e){for(let t=0;t<this.rot.length;t++)this.rot[t].copy(e.rot[t]),this.valid[t]=e.valid[t];return this.hips.copy(e.hips),this}blend(e,t){if(t<=0)return this;for(let n=0;n<this.rot.length;n++)e.valid[n]&&(this.valid[n]?this.rot[n].slerp(e.rot[n],Math.min(1,t)):(this.rot[n].copy(e.rot[n]),this.valid[n]=!0));return this.hips.lerp(e.hips,Math.min(1,t)),this}writeTo(e,t){if(t<=0)return;let n=Math.min(1,t);for(let t=0;t<rt.length;t++){if(!this.valid[t])continue;let r=e.bones[V[rt[t]]];n>=1?r.quaternion.copy(this.rot[t]):r.quaternion.slerp(this.rot[t],n)}e.bones[V.hips].position.lerp(this.hips,n),e.refresh()}},Jp=new G,Yp=new G,Xp=new G,Zp=new G,Qp=new G,$p=new G,em=new G,tm=new G,nm=new G,rm=new G,im=new B,am=new B,om=new B,sm=new B;function cm(e,t,n){if(n.lengthSq()<1e-10)return;let r=t===`l`?V.upperL:V.upperR,i=t===`l`?V.foreL:V.foreR,a=t===`l`?V.gloveL:V.gloveR,o=t===`l`?V.clavL:V.clavR,s=e.model;Jp.setFromMatrixPosition(s[r]),Yp.setFromMatrixPosition(s[i]),Xp.setFromMatrixPosition(s[a]),Zp.copy(Xp).add(n),Qp.subVectors(Zp,Jp);let c=Qp.length();if(c<1e-6)return;let l=Math.min(lm,Math.max(1,c/((um+dm)*.999))),u=um*l,d=dm*l,f=Math.min((u+d)*.999,Math.max(c,Math.abs(u-d)+1e-4));Qp.divideScalar(c),$p.subVectors(Yp,Jp),$p.addScaledVector(Qp,-$p.dot(Qp)),$p.lengthSq()<1e-10&&$p.set(0,-1,0).addScaledVector(Qp,Qp.y),$p.normalize();let p=Math.min(1,Math.max(-1,(u*u+f*f-d*d)/(2*u*f))),m=Math.sqrt(1-p*p);em.copy(Jp).addScaledVector(Qp,u*p).addScaledVector($p,u*m),tm.copy(Jp).addScaledVector(Qp,f),nm.subVectors(Yp,Jp).normalize(),rm.subVectors(em,Jp).normalize(),im.setFromUnitVectors(nm,rm),om.setFromRotationMatrix(Kp.extractRotation(s[r])).premultiply(im),am.setFromRotationMatrix(Kp.extractRotation(s[o])).invert(),e.bones[r].quaternion.copy(am).multiply(om).normalize(),nm.subVectors(Xp,Yp).applyQuaternion(im).normalize(),rm.subVectors(tm,em).normalize(),Gp.setFromUnitVectors(nm,rm),sm.setFromRotationMatrix(Kp.extractRotation(s[i])).premultiply(im).premultiply(Gp),e.bones[i].quaternion.copy(om).invert().multiply(sm).normalize(),e.bones[i].position.set(0,-u,0),e.bones[a].position.set(0,-d,0),e.refresh()}var lm=1.5,um=Te.upperL[1]-Te.foreL[1],dm=Te.foreL[1]-Te.gloveL[1],fm=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},pm=.2,mm=.3,hm=class{weight=0;target=0;rate=5;clip=null;t=0;speed=1;loop=!1;holdAt=0;fade=0;fadeDur=0;snap=new qp;cur=new qp;out=new qp;hasOut=!1;glove=new G;want=new G;offset=new G;get current(){return this.clip}get looping(){return this.loop}get time(){return this.t}get finished(){return!!this.clip&&!this.loop&&this.t>=this.holdAt-1e-6}play(e,t={}){let n=t.fade??.18;this.hasOut&&this.weight>0&&n>0?(this.snap.copy(this.out),this.fade=0,this.fadeDur=n):(this.fade=1,this.fadeDur=0),this.clip=e,this.loop=!!t.loop,this.speed=t.speed??1,this.holdAt=Math.min(e.duration,t.holdAt??e.duration),this.t=Math.min(this.holdAt,Math.max(0,t.start??0)),this.setWeight(t.weight??1,n)}off(e=.12){this.setWeight(0,e)}setWeight(e,t){this.target=e,t<=0?(this.weight=e,this.rate=1/0):this.rate=1/t}update(e){if(this.weight!==this.target){let t=this.rate*e;this.weight=this.weight<this.target?Math.min(this.target,this.weight+t):Math.max(this.target,this.weight-t)}this.fade<1&&(this.fade=this.fadeDur>0?Math.min(1,this.fade+e/this.fadeDur):1);let t=this.clip;t&&(this.t+=e*this.speed,this.loop?this.t>=t.duration&&(this.t%=t.duration):this.t>this.holdAt&&(this.t=this.holdAt))}apply(e,t){let n=this.clip;if(!n||this.weight<=0)return;this.cur.sample(n,this.t),this.fade<1?this.out.copy(this.snap).blend(this.cur,fm(0,1,this.fade)):this.out.copy(this.cur),this.hasOut=!0,this.out.writeTo(e,this.weight);let r=e.armBlend.l*(1-this.weight),i=e.armBlend.r*(1-this.weight);e.armBlend.l=r,e.armBlend.r=i;let a=n.impact;if(!a)return;let o=this.weight*fm(0,1,this.fade)*fm(a.time-pm,a.time,this.t)*(1-fm(a.reachTime,a.reachTime+mm,this.t));if(o<=.001)return;let s=a.side===`l`?V.gloveL:V.gloveR;this.glove.copy(Rp).applyMatrix4(e.model[s]),Hp(t,a.kind,a.side,this.want),this.want.sub(this.glove).multiplyScalar(o).add(this.glove);for(let t=0;t<3;t++)t&&this.glove.copy(Rp).applyMatrix4(e.model[s]),this.offset.subVectors(this.want,this.glove),cm(e,a.side,this.offset);a.side===`l`?e.armBlend.l=Math.max(r,o):e.armBlend.r=Math.max(i,o)}},gm=12,_m=5;function vm(){let e=new mp,t=yp(12,10),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=n.getY(e),r=t>0?1-.75*t*t:1;n.setXYZ(e,n.getX(e)*r,t*(t>0?1.7:1),n.getZ(e)*r)}e.add(t,new q,{bone:0,paint:15334399,shade:.25});let r=yp(8,6);e.add(r,gp([-.32,.18,.72],[0,0,0],[.28,.36,.2]),{bone:0,paint:16777215,shade:0});let i=yp(12,10),a=i.getAttribute(`position`);for(let e=0;e<a.count;e++){let t=a.getY(e),n=t>0?1-.75*t*t:1;a.setXYZ(e,a.getX(e)*n*1.2,t*(t>0?1.7:1)*1.15+.02,a.getZ(e)*n*1.2)}return e.add(i,new q,{bone:0,paint:3107996,shade:0},!0),e.build()}function ym(){let e=new mp;return e.add(Sp(Ep(.46),.32,.09,4),new q,{bone:0,paint:(e,t,n)=>Math.abs(n.z)>.7?16765466:16751122,shade:0}),e.add(Sp(Ep(.46),.32,.09,4),new q().makeScale(1.22,1.22,1.5),{bone:0,paint:2757376,shade:0},!0),e.build()}var bm=class{group=new S;drops=[];dropMesh;starMesh;shadow;shadowMat;dripTimer=0;t=0;m=new q;q=new B;s=new G;up=new G(0,1,0);tmp=new G;constructor(){this.group.name=`boxer.fx`;let t=new u({vertexColors:!0});t.name=`boxer.sweat`,this.dropMesh=new e(vm(),t,gm),this.dropMesh.name=`sweat`,this.dropMesh.frustumCulled=!1,this.dropMesh.count=0;for(let e=0;e<gm;e++)this.drops.push({p:new G,v:new G,life:0,max:1,size:.01});let n=new u({vertexColors:!0,color:new K(1.25,1.25,1.25)});n.name=`boxer.stars`,this.starMesh=new e(ym(),n,_m),this.starMesh.name=`dizzyStars`,this.starMesh.frustumCulled=!1,this.starMesh.visible=!1,this.shadowMat=new y({uniforms:{uOpacity:{value:.55},uColor:{value:new K(656404)}},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying vec2 vUv;
        void main() {
          float d = length(vUv * 2.0 - 1.0);
          float a = (1.0 - smoothstep(0.35, 1.0, d)) * uOpacity;
          gl_FragColor = vec4(uColor, a);
        }`,transparent:!0,depthWrite:!1,side:2}),this.shadowMat.name=`boxer.shadow`,this.shadow=new R(new _t(1,1),this.shadowMat),this.shadow.name=`blobShadow`,this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.004,this.shadow.renderOrder=-1,this.group.add(this.shadow,this.dropMesh,this.starMesh)}spray(e,t,n,r){for(let i=0;i<n;i++){let n=this.drops.find(e=>e.life<=0);if(!n)return;let a=i*2.399+this.t*13.1,o=.55;n.p.copy(e).add(this.tmp.set(Math.cos(a)*.04,Math.sin(a*1.3)*.03,Math.sin(a)*.03)),n.v.copy(t).normalize().multiplyScalar(r*(.6+.4*(i*.618%1))),n.v.x+=Math.cos(a)*o*r*.5,n.v.y+=(.35+Math.sin(a*.7)*.35)*r*.5,n.v.z+=Math.sin(a)*o*r*.3,n.max=.7+.5*(i*.37%1),n.life=n.max,n.size=.007+.009*(i*.773%1)}}drip(e){let t=this.drops.find(e=>e.life<=0);t&&(t.p.copy(e),t.v.set(Math.sin(this.t*7.3)*.12,.15,.25+.1*Math.sin(this.t*3.1)),t.max=.9,t.life=t.max,t.size=.008)}update(e,t){this.t+=e,t.damage>.25&&(this.dripTimer-=e,this.dripTimer<=0&&(this.dripTimer=1.1-.75*t.damage,this.drip(t.brow)));let n=0;for(let t of this.drops){if(t.life<=0||(t.life-=e,t.v.y-=6.5*e,t.p.addScaledVector(t.v,e),t.p.y<.005&&(t.life=0),t.life<=0))continue;let r=Math.min(1,t.life/(t.max*.3)),i=t.v.length();this.q.setFromUnitVectors(this.up,this.tmp.copy(t.v).normalize().negate());let a=1+Math.min(1.2,i*.25);this.s.set(t.size*r,t.size*r*a,t.size*r),this.m.compose(t.p,this.q,this.s),this.dropMesh.setMatrixAt(n++,this.m)}this.dropMesh.count=n,this.dropMesh.instanceMatrix.needsUpdate=n>0;let r=t.stars;if(this.starMesh.visible=r>.01,this.starMesh.visible){let e=.15+.03*t.lying;for(let n=0;n<_m;n++){let i=this.t*3.2+n/_m*Math.PI*2,a=.032*Math.min(1,r*(1.15-.03*n))*(.9+.12*Math.sin(this.t*6+n));this.tmp.set(t.headTop.x+Math.cos(i)*e,t.headTop.y+Math.sin(i*1)*.035+Math.sin(this.t*2+n)*.01,t.headTop.z+Math.sin(i)*e*.8),this.q.setFromAxisAngle(this.up,this.t*4+n),this.s.setScalar(Math.max(1e-4,a)),this.m.compose(this.tmp,this.q,this.s),this.starMesh.setMatrixAt(n,this.m)}this.starMesh.instanceMatrix.needsUpdate=!0}let i=t.hips.x+(t.chest.x-t.hips.x)*.5*t.lying,a=t.hips.z+(t.chest.z-t.hips.z)*.7*t.lying;this.shadow.position.set(i,.004,a);let o=1+Math.max(0,t.hips.y-.9*(1-t.lying))*.8;this.shadow.scale.set(.8*o+.15*t.lying,.62*o+1.1*t.lying,1),this.shadowMat.uniforms.uOpacity.value=.6/o}dispose(){this.dropMesh.geometry.dispose(),this.dropMesh.material.dispose(),this.dropMesh.dispose(),this.starMesh.geometry.dispose(),this.starMesh.material.dispose(),this.starMesh.dispose(),this.shadow.geometry.dispose(),this.shadowMat.dispose()}},xm={demir:{skin:9064756,skinDeep:6173216,skinWarm:10114358,shorts:13836334,shortsDeep:10227744,trim:16169256,stripe:16169256,glove:14885420,gloveDeep:10818076,cuff:16169256,cuffStripe:16774102,shoe:1907234,shoeTrim:13836334,sole:15921128,sock:16052714,brow:1313802,hair:null,hairTip:0,beard:1511438,lips:5909022,bulk:1.07,expression:`scowl`,tattoo:!1,face:{blr:.42,brr:-.42,bly:-.35,bry:-.35,grin:0,eye:.82}},yildirim:{skin:15975068,skinDeep:14260856,skinWarm:15769736,shorts:1924064,shortsDeep:998046,trim:16251391,stripe:16251391,glove:1382173,gloveDeep:460811,cuff:3073791,cuffStripe:731702,shoe:15922424,shoeTrim:1924064,sole:2237227,sock:16251391,brow:14260766,hair:16764718,hairTip:16773798,beard:null,lips:13135966,bulk:.97,expression:`grin`,tattoo:!0,face:{blr:.18,brr:-.05,bly:-.1,bry:.45,grin:1,eye:.78}}},Sm={...xm,kralice:{...xm.demir,shorts:7024593,trim:16171834,stripe:16171834,cuff:16171834,glove:8009184,gloveDeep:4856476},firtina:{...xm.yildirim,shorts:16732067,trim:4063114,glove:2935130,gloveDeep:1280566,cuff:16251391,cuffStripe:1415740}},Cm=`
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
`,wm=`
  // arena rim light: a soft-edged band hugging the silhouette, stronger on upward-facing surfaces
  float ndv = max( dot( normal, normalize( vViewPosition ) ), 0.0 );
  float fr = fwidth( ndv ) + 1e-4;
  float rim = 1.0 - smoothstep( 0.1 - fr, 0.26 + fr, ndv );
  rim *= 0.45 + 0.55 * clamp( normal.y * 0.6 + 0.6, 0.0, 1.0 );
  outgoingLight += uRimColor * rim * uRim * ( 0.25 + diffuseColor.rgb * 0.9 );
  // hit flash: a short warm exposure lift that keeps the shading (a mix toward flat white read as a pale, see-through body)
  outgoingLight *= 1.0 + uFlashColor * uFlash;`;function Tm(){let e={uDamage:{value:0},uFlash:{value:0},uFlashColor:{value:new K(1,.8,.62)},uRimColor:{value:new K(16736210)},uRim:{value:.4},uShade:{value:new K(.07,.04,.11)},uCheek:{value:new K(14692410)},uBruise:{value:new K(6955088)},uOutline:{value:.0075}},t=new F({vertexColors:!0});t.name=`boxer.body`,t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aux;
varying vec4 vAux;`).replace(`#include <color_vertex>`,`#include <color_vertex>
	vAux = aux;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uDamage;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec3 uRimColor;
uniform float uRim;
uniform vec3 uCheek;
uniform vec3 uBruise;`).replace(`#include <lights_toon_pars_fragment>`,Cm).replace(`#include <color_fragment>`,`#include <color_fragment>
  // stylised look: more saturated albedo, so the lit gloves stay green / red / black instead of washing toward white
  float albedoLum = dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
  diffuseColor.rgb = max( vec3( 0.0 ), mix( vec3( albedoLum ), diffuseColor.rgb, 1.3 ) );
  float dmgCheek = clamp( uDamage * vAux.z * 1.25, 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uCheek * ( 0.55 + 0.45 * max( max( diffuseColor.r, diffuseColor.g ), diffuseColor.b ) * 2.0 ), dmgCheek * 0.62 );
  float dmgBruise = clamp( uDamage * vAux.w * 1.3, 0.0, 1.0 );
  diffuseColor.rgb = mix( diffuseColor.rgb, uBruise, dmgBruise * 0.55 );`).replace(`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`,`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;${wm}`)},t.customProgramCacheKey=()=>`nakavt.boxer.body.v2`;let n=new u({color:1509916,side:1});return n.name=`boxer.outline`,n.onBeforeCompile=t=>{t.uniforms.uOutline=e.uOutline,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aux;
uniform float uOutline;`).replace(`#include <begin_vertex>`,`vec4 olView = modelViewMatrix * vec4( position, 1.0 );
  float olScale = clamp( -olView.z / 2.6, 0.55, 1.5 );
  vec3 transformed = vec3( position ) + normal * ( uOutline * aux.y * olScale );`)},n.customProgramCacheKey=()=>`nakavt.boxer.outline.v1`,{body:t,outline:n,u:e,dispose(){t.dispose(),n.dispose()}}}var Em=new Set([`hips`,`spine`,`chest`,`neck`,`head`,`footL`,`footR`]),Dm=Object.fromEntries(rt.map(e=>[e,rt.find(t=>qe[t]===e)])),Om=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)(e||t||n)&&Om.push(new G(e,t,n).normalize());var km=.98,Am=1.5,jm=new q,Mm=new B,Nm=new B,Pm=new G,Fm=new G;function Im(e,t,n){if(n.identity(),e===t)throw Error(`createRetarget: target.root must be an ancestor of the bones, not a bone`);for(let r=e;r!==t;r=r.parent){if(!r)throw Error(`createRetarget: bone "${e.name}" is not under target.root`);r.updateMatrix(),n.premultiply(r.matrix)}return n}var Lm=(e,t)=>t.setFromRotationMatrix(jm.extractRotation(e));function Rm(e,t){let n=e;for(;n.parent;)n=n.parent;n.updateMatrixWorld(!0);for(let e of t.values())e.updateWorldMatrix(!0,!1);let r=new Map([...t].map(([e,t])=>[t,e])),i=e.skeleton.bones.map(e=>{for(let t=e;t;t=t.parent){let e=r.get(t);if(e)return e}return null}),a=new Map([...t].map(([e,t])=>[e,t.matrixWorld.clone().invert()])),o=new Map,{position:s,skinIndex:c,skinWeight:l}=e.geometry.attributes,u=new G;for(let t=0;t<s.count;t++){let n=0;for(let e=1;e<4;e++)l.getComponent(t,e)>l.getComponent(t,n)&&(n=e);let r=i[c.getComponent(t,n)];if(!r)continue;e.getVertexPosition(t,u).applyMatrix4(e.matrixWorld).applyMatrix4(a.get(r));let s=o.get(r);s||o.set(r,s=[]),s.push(u.x,u.y,u.z)}let d={};for(let[e,t]of o){let n=t.length/3,r=Array.from({length:n},(e,t)=>t),i=new Set;for(let e of Om){let a=n=>t[3*n]*e.x+t[3*n+1]*e.y+t[3*n+2]*e.z;r.sort((e,t)=>a(e)-a(t)),i.add(r[Math.floor(km*(n-1))])}d[e]=Float32Array.from([...i].flatMap(e=>[t[3*e],t[3*e+1],t[3*e+2]]))}return d}function zm(e,t){let{root:n}=t,r=new Map;for(let[e,i]of t.bones)r.set(e,Im(i,n,new q));let i=e=>new G().setFromMatrixPosition(r.get(e)),a=e=>new G(...Te[e]),o=t.bones.get(`hips`),s=o?i(`hips`):new G;if(o&&!(s.y>0))throw Error(`createRetarget: the hips' bind height is ${s.y.toFixed(3)}, not above the floor — the target root must sit at floor level with the feet on y = 0 (facing +Z)`);let c=e=>{let n=Dm[e];if(n&&t.bones.has(n))return[e,n];for(let n=qe[e];n;n=qe[n])if(t.bones.has(n))return[n,e];return null},l=[],u=new Map,d=new Map;for(let e of rt){let n=t.bones.get(e);if(!n)continue;let o=new B,s=Em.has(e)?null:c(e);if(s){let e=a(s[1]).sub(a(s[0])),t=i(s[1]).sub(i(s[0]));e.lengthSq()>1e-12&&t.lengthSq()>1e-12&&o.setFromUnitVectors(t.normalize(),e.normalize())}let d=t.extents?.[e],f=new G().setFromMatrixScale(r.get(e)).x,p={bone:n,source:V[e],aligned:o.multiply(Lm(r.get(e),new B)),ancestor:null,link:new B,rot:new B,offset:null,pos:i(e),points:d?.length?d.map(e=>e*f):null};l.push(p),u.set(n,p)}for(let e of l){let t=0;for(let r=e.bone.parent;r&&r!==n;r=r.parent)t++,e.ancestor??=u.get(r)??null;d.set(e,t);let r=e.bone.parent;if(r!==n&&Lm(Im(r,n,new q),e.link),e.ancestor){let t=Lm(Im(e.ancestor.bone,n,new q),new B).invert();e.link.premultiply(t),e.offset=e.pos.clone().sub(e.ancestor.pos).applyQuaternion(t)}}l.sort((e,t)=>d.get(e)-d.get(t));let f=[];for(let e of[`L`,`R`]){let[n,r,i]=[`upper${e}`,`fore${e}`,`glove${e}`],a=t.bones.get(n),o=t.bones.get(r),s=t.bones.get(i),c=a&&u.get(a),l=o&&u.get(o),d=s&&u.get(s);a&&o&&s&&c&&l&&d&&l.ancestor===c&&d.ancestor===l&&f.push({side:e===`L`?`l`:`r`,upper:c,fore:l,hand:d,foreOffset:o.position.clone(),handOffset:s.position.clone(),shoulder:V[n],wrist:V[i]})}let p=t.unit??0,m=o?u.get(o):null,h=a(`hips`),g=m?s.y/h.y:1,_=new q;m&&m.bone.parent!==n&&Im(m.bone.parent,n,_).invert();let v=m!==null&&l.some(e=>e.points),y=e.armBlend,b=new G,x=new G,S=new G,C=new G,w=new G,T=new G,E=new B,D=new B,O=new G,k=new G,A=new G,j=new G,M=e=>{Nm.copy(e.link),e.ancestor&&Nm.premultiply(e.ancestor.rot),e.bone.quaternion.copy(Nm.invert().multiply(e.rot))},N=t=>{let n=y[t.side];if(n<.02){t.fore.bone.position.copy(t.foreOffset),t.hand.bone.position.copy(t.handOffset);return}let{upper:r,fore:i,hand:a}=t;b.copy(r.pos),x.copy(t.foreOffset).applyQuaternion(r.rot).add(b),S.copy(t.handOffset).applyQuaternion(i.rot).add(x),C.setFromMatrixPosition(e.model[t.wrist]).divideScalar(p),C.lerpVectors(S,C,n);let o=t.foreOffset.length(),s=t.handOffset.length();w.subVectors(C,b);let c=w.length();if(c<1e-6)return;let l=Math.min(Am,Math.max(1,c/((o+s)*.995))),u=o*l,d=s*l,f=Math.min(c,(u+d)*.995);w.divideScalar(c),T.subVectors(x,b),T.addScaledVector(w,-T.dot(w)),T.lengthSq()<1e-10&&T.set(0,-1,0).addScaledVector(w,w.y),T.normalize();let m=Math.min(1,Math.max(-1,(u*u+f*f-d*d)/(2*u*f))),h=Math.sqrt(1-m*m),g=x.copy(b).addScaledVector(w,u*m).addScaledVector(T,u*h),_=E;O.copy(t.foreOffset).applyQuaternion(r.rot).normalize(),k.subVectors(g,b).normalize(),_.setFromUnitVectors(O,k),r.rot.premultiply(_),i.rot.premultiply(_),a.rot.premultiply(_),A.copy(t.handOffset).applyQuaternion(i.rot).normalize(),j.copy(b).addScaledVector(w,f).sub(g).normalize(),D.setFromUnitVectors(A,j),i.rot.premultiply(D),a.rot.premultiply(D),M(r),M(i),M(a),i.bone.position.copy(t.foreOffset).multiplyScalar(l),a.bone.position.copy(t.handOffset).multiplyScalar(l),i.pos.copy(g),a.pos.copy(b).addScaledVector(w,f)};return{hipsScale:g,apply(){for(let t of l)t.rot.multiplyQuaternions(Lm(e.model[t.source],Mm),t.aligned),Nm.copy(t.link),t.ancestor&&Nm.premultiply(t.ancestor.rot),t.bone.quaternion.copy(Nm.invert().multiply(t.rot));if(!m)return;Pm.setFromMatrixPosition(e.model[V.hips]).sub(h).multiplyScalar(g).add(s);for(let e of l)e===m?e.pos.copy(Pm):e.ancestor&&e.pos.copy(e.offset).applyQuaternion(e.ancestor.rot).add(e.ancestor.pos);if(p>0)for(let e of f)N(e);let t=0;if(v){let e=0;for(let t of l){let n=t.points;if(n)for(let r=0;r<n.length;r+=3){let i=Fm.set(n[r],n[r+1],n[r+2]).applyQuaternion(t.rot).y+t.pos.y;i<e&&(e=i)}}t=-e}Pm.y+=t,m.bone.position.copy(Pm.applyMatrix4(_))},sourceFrame(e){let n=t.bones.get(e);if(!n)throw Error(`createRetarget: "${e}" is not mapped`);return u.get(n).aligned.clone().invert()}}}var Bm=1.35,Vm=.02,Hm=new G(0,-.13,.012),Um={face:[0,-.171,-.047],brow:[.05,-.111,-.047],spit:[0,-.196,-.047],top:[0,.054],out:[0,-.156,.053]},Wm=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)(e||t||n)&&Wm.push(new G(e,t,n).normalize());function Gm(e,t,n){let r=Wm.map(()=>({d:-1/0,p:new G})),i=new G;for(let a=0;a<e.count;a++)t.getX(a)===n&&(i.set(e.getX(a),e.getY(a),e.getZ(a)),Wm.forEach((e,t)=>{let n=i.dot(e);n>r[t].d&&(r[t]={d:n,p:i.clone()})}));return r.map(e=>e.p)}var Km=[`map`,`normalMap`,`roughnessMap`,`metalnessMap`,`aoMap`,`emissiveMap`,`alphaMap`,`bumpMap`,`lightMap`];function qm(e,t,n){let r=e.onBeforeCompile;e.onBeforeCompile=(i,a)=>{r.call(e,i,a),Object.assign(i.uniforms,t,{uHeadBone:{value:n},uSat:{value:Bm}}),i.vertexShader=i.vertexShader.replace(`#include <common>`,`#include <common>
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
  diffuseColor.rgb = mix( diffuseColor.rgb, uCheek * ( 0.35 + 0.65 * max( max( diffuseColor.r, diffuseColor.g ), diffuseColor.b ) * 2.0 ), dmgFlush * 0.4 );`).replace(`#include <opaque_fragment>`,`${wm}
#include <opaque_fragment>`)},e.customProgramCacheKey=()=>`nakavt.boxer.model.v2`,e.needsUpdate=!0}function Jm(e,t,n){let r=e.material.clone();r.name=`boxer.gloveModel`;let i={uGloveTint:{value:new K(t.glove)},uCuffTint:{value:new K(t.cuff)},uLeather:{value:Math.max(.05,e.leatherValue)}};return r.onBeforeCompile=e=>{Object.assign(e.uniforms,n,i),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uFlash;
uniform vec3 uFlashColor;
uniform vec3 uRimColor;
uniform float uRim;
uniform vec3 uGloveTint;
uniform vec3 uCuffTint;
uniform float uLeather;`).replace(`#include <map_fragment>`,`#include <map_fragment>
  float gMx = max( max( diffuseColor.r, diffuseColor.g ), diffuseColor.b );
  float gMn = min( min( diffuseColor.r, diffuseColor.g ), diffuseColor.b );
  float gLeather = smoothstep( 0.3, 0.6, ( gMx - gMn ) / max( gMx, 1e-4 ) );
  vec3 gLeatherCol = uGloveTint * clamp( gMx / uLeather, 0.35, 1.6 );
  vec3 gCuffCol = uCuffTint * clamp( gMx * 1.1, 0.25, 1.1 );
  diffuseColor.rgb = mix( gCuffCol, gLeatherCol, gLeather );`).replace(`#include <opaque_fragment>`,`${wm}
#include <opaque_fragment>`)},r.customProgramCacheKey=()=>`nakavt.boxer.gloveModel.v1`,r.needsUpdate=!0,r}function Ym(e){let{model:t,rig:n,root:r}=e,{scene:i,bones:a,mesh:o}=t,s=e=>a.get(e),c=e.height/t.height;i.updateMatrixWorld(!0);let l=new q().copy(i.matrixWorld).invert(),u=e=>new q().multiplyMatrices(l,e.matrixWorld),d=new xe,f=t.extents.head,p=u(s(`head`));for(let e=0;e<f.length;e+=3)d.expandByPoint(new G(f[e],f[e+1],f[e+2]).applyMatrix4(p));let m=d.max.y,h=d.max.z,g=(d.min.x+d.max.x)/2,_=(d.min.z+d.max.z)/2,v=(e,t,n,r,i)=>{let a=new te;return a.name=e,a.position.set(n/c,r/c,i/c).applyMatrix4(u(t).invert()),t.add(a),a},y=m*c,b=h*c,x=g*c,S=v(`faceMarker`,s(`head`),x+Um.face[0],y+Um.face[1],b+Um.face[2]),C=v(`browMarker`,s(`head`),x+Um.brow[0],y+Um.brow[1],b+Um.brow[2]),T=v(`spitMarker`,s(`head`),x+Um.spit[0],y+Um.spit[1],b+Um.spit[2]),E=v(`crownMarker`,s(`head`),x,y+Um.top[1],_*c),D=v(`faceOutMarker`,s(`head`),x,y+Um.out[1],b+Um.out[2]),O=Math.min(1.3,Math.max(.75,(d.max.x-d.min.x)*c/e.headWidth)),k=e.glove?e.glove.geometry:Ap(e.look),A=!e.glove,j=e.glove?Jm(e.glove,e.look,e.uniforms):e.gloveMaterial,M=zm(n,{root:i,bones:a,unit:c}),N={gloveL:M.sourceFrame(`gloveL`),gloveR:M.sourceFrame(`gloveR`)},P=(e,t)=>Float32Array.from(Gm(k.attributes.position,k.attributes.skinIndex,e).flatMap(e=>e.multiplyScalar(O/c).applyQuaternion(t).toArray())),F=zm(n,{root:i,bones:a,extents:{...t.extents,gloveL:P(0,N.gloveL),gloveR:P(1,N.gloveR)},unit:c}),ee=O/(Vm*c),I=t=>{let n=s(t);n.scale.setScalar(Vm);let r=new Me;r.name=`${e.name}.${t}`,r.quaternion.copy(N[t]),r.scale.setScalar(ee),n.add(r);let i=new te;return i.name=t===`gloveL`?`gloveMarkerL`:`gloveMarkerR`,i.position.copy(Hm),r.add(i),{bone:r,marker:i}},L=I(`gloveL`),ne=I(`gloveR`),re=new $e(k,j);re.name=`${e.name}.gloves`,re.bind(new w([L.bone,ne.bone],[new q,new q]),new q),re.frustumCulled=!1,re.castShadow=!0,i.add(re),o.name=`${e.name}.model`,o.frustumCulled=!1,o.castShadow=!0;let ie=o.skeleton.bones.indexOf(s(`head`));for(let t of Array.isArray(o.material)?o.material:[o.material])qm(t,e.uniforms,ie);i.scale.setScalar(c),r.add(i);let ae=s(`hips`),oe=s(`neck`),R=n.bones[V.gloveL],z=n.bones[V.gloveR],se=new q,ce=(e,t)=>t.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);return{head:S,gloveL:L.marker,gloveR:ne.marker,pose(){F.apply(),L.bone.scale.setScalar(ee*R.scale.x),ne.bone.scale.setScalar(ee*z.scale.x)},read(e){i.updateWorldMatrix(!0,!0),se.copy(r.matrixWorld).invert(),ce(E,e.headTop),ce(C,e.brow),ce(D,e.faceOut),ce(T,e.spit),ce(ae,e.hips),ce(oe,e.chest)},dispose(){let t=new Set;i.traverse(e=>{let n=e;if(n.isMesh&&n!==re){n.geometry.dispose();for(let e of Array.isArray(n.material)?n.material:[n.material]){for(let n of Km){let r=e[n];r?.isTexture&&t.add(r)}e.dispose()}n.isSkinnedMesh&&n.skeleton.dispose()}});for(let e of t)e.dispose();A&&k.dispose(),e.glove&&j.dispose(),re.skeleton.dispose(),i.removeFromParent()}}}var Xm=null,Zm={idle:`idle`,guard:`guard`,bounce:`bounce`,dizzy:`dizzy`,down:`down`},Qm={jab:{l:`hook_l`,r:`hook_r`},hook:{l:`hook_l`,r:`hook_r`},uppercut:{l:`uppercut_l`,r:`uppercut_r`},counter:{l:`counter`,r:`counter`}},$m={hitLight:{clip:`hit_head`,speed:1.35,fade:.06,weight:.35},hitHeavy:{clip:`hit_head`,speed:1.1,fade:.06,weight:.35},stagger:{clip:`stagger`,speed:1.3,fade:.08},koFall:{clip:`ko`,start:20/30,speed:1.05,fade:.08},celebrate:{clip:`victory`,start:8/30,speed:1.3,fade:.2}},eh=1.6,th=.11,nh=2,rh=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},ih=[0,2,0],ah=[.05,1.835,.1],oh=[0,1.79,.2],sh=[0,1.75,.1],ch=[0,1.6,0],lh=new Map;function uh(e){let t=lh.get(e);if(!t){let{body:n,outline:r}=Op(e),i=n.attributes.position,a=n.attributes.skinIndex,o=1/0,s=-1/0,c=1/0,l=-1/0;for(let e=0;e<i.count;e++){let t=i.getY(e);o=Math.min(o,t),s=Math.max(s,t),a.getX(e)===V.head&&(c=Math.min(c,i.getX(e)),l=Math.max(l,i.getX(e)))}n.dispose(),r.dispose(),t={height:s-o,headWidth:l-c},lh.set(e,t)}return t}function dh(e,t,n,r,i){let a=Op(t),o=new $e(a.body,i.body);o.name=`${e}.body`;let s=new $e(a.outline,i.outline);s.name=`${e}.outline`,o.add(r.bones[0]),n.add(o,s),n.updateMatrixWorld(!0);let c=new w(r.bones);o.bind(c),s.bind(c,o.bindMatrix),o.frustumCulled=!1,s.frustumCulled=!1,o.castShadow=!0,s.castShadow=!1;let l=new te;l.name=`faceMarker`,l.position.set(0,1.775-Te.head[1],.1-Te.head[2]),r.bones[V.head].add(l);let u=(e,t)=>{let n=new te;return n.name=t,n.position.set(0,-.13,.012),r.bones[e].add(n),n};return{head:l,gloveL:u(V.gloveL,`gloveMarkerL`),gloveR:u(V.gloveR,`gloveMarkerR`),pose(){},read(e){Ae(r,`head`,ih,e.headTop),Ae(r,`head`,ah,e.brow),Ae(r,`head`,oh,e.faceOut),Ae(r,`head`,sh,e.spit),at(r,`hips`,e.hips),Ae(r,`chest`,ch,e.chest)},dispose(){a.body.dispose(),a.outline.dispose(),c.dispose()}}}function fh(e){let t=e.fighter,n=Sm[t],r=new S;r.name=`boxer.${t}`;let i=U(),a=Tm(),o=e.model?Ym({name:t,root:r,rig:i,model:e.model,look:n,gloveMaterial:a.body,uniforms:a.u,glove:e.glove??null,...uh(n)}):dh(t,n,r,i,a),{head:s,gloveL:c,gloveR:l}=o,u=new bm;r.add(u.group);let d={eyeL:n.face.eye,eyeR:n.face.eye,blr:n.face.blr,brr:n.face.brr,bly:n.face.bly,bry:n.face.bry,grin:n.face.grin},f={...Ue},p={...Ue},m={...ip.guard},h=`guard`;Object.assign(f,op(h,d));let g=0,_=0,v=0,y=0,b=0,x=2.2,C=0,w=null,T=null,E=null,D={},O={},k=null,A=e.clips??null,j=new hm,M=.37*[`demir`,`yildirim`,`kralice`,`firtina`].indexOf(t)+.2,N=null,P=zp.clone(),F=(e,t)=>{if(!A)return;let n=t?0:.28;if(e===`down`){let e=A.get(`ko`);(j.current!==e||t)&&j.play(e,{start:e.duration,fade:n});return}if(e===`victory`){let e=A.get(`victory`);j.current!==e&&j.play(e,{start:nh,holdAt:nh,fade:n});return}let r=A.get(e===`dizzy`?`dizzy`:`idle`);j.current===r&&j.looping||j.play(r,{loop:!0,start:M%r.duration,fade:n})},ee=(e,t,n)=>{if(!A)return;let i=Qm[e];if(i){let a=A.get(i[e===`counter`?`r`:t]),o=(ap[e]??330)/1e3/n,s=a.impact?.time??o,c=Math.max(0,s-eh*o),l=(s-c)/o;N?(N.getWorldPosition(P),r.updateWorldMatrix(!0,!1),r.worldToLocal(P)):P.copy(zp),j.play(a,{start:c,speed:l,fade:.1});return}let a=$m[e];a?j.play(A.get(a.clip),{start:a.start,speed:a.speed*n,fade:a.fade/Math.max(.5,n),weight:a.weight}):j.off(.12/Math.max(.5,n))},I={headTop:new G,brow:new G,faceOut:new G,spit:new G,hips:new G,chest:new G},te={damage:0,headTop:I.headTop,brow:I.brow,stars:0,hips:I.hips,chest:I.chest,lying:0},L=new G,ne=()=>{w&&=(w.kill(),null);let e=T;T=null,e?.()},re=(e,t)=>{E?.kill(),t<=0?(Object.assign(m,e),E=null):E=J.to(m,{...e,duration:t,ease:`power2.out`})},ie={P:f,look:n,rest:d,loop:h,incomingSide:()=>Xm&&Xm.by!==O?Xm.side:`r`,nextSide:e=>{let t=D[e]??(e===`jab`||e===`slip`?0:1);return D[e]=t+1,k||(t%2==0?`l`:`r`)},hit:(e,t)=>{y=Math.max(v,.2+.15*Math.min(1.5,e)),v=y,b=Math.min(1.6,b+e*.8),o.read(I);let n=t===`r`?-1:1;L.set(n*.7,.05,-1.2),u.spray(I.spit,L,Math.round(2+3*Math.min(1.4,e)),1.6+1.3*e)},shake:e=>{b=Math.min(1.6,b+e)},landed:(e,t)=>{b=Math.min(1.6,b+.15*t)}},ae=(e,t)=>{let n=t?.timeScale??1,r=!(n>0)||n>=50;ne();let i=Zm[e];if(i){F(i,r),h=i;let e=op(h,d);if(r)J.killTweensOf(f),Object.assign(f,e),re(ip[h],0);else{let t=J.timeline();t.to(f,{...e,duration:.32/n,ease:`power2.inOut`}),w=t,re(ip[h],.3/n)}return Promise.resolve()}ie.loop=h;let a=e===`jab`||e===`hook`||e===`uppercut`||e===`counter`;k=e===`counter`&&A?`r`:a||e===`slip`?t?.side??null:null;let o=`r`;if(a){let t=D[e]??(e===`jab`?0:1);o=k??(t%2==0?`l`:`r`),Xm={by:O,side:o}}let s=cp(e,ie);k=null,r||ee(e,o,n);let c=s.next,l={bounce:e===`walkIn`?0:m.bounce*.2,breathe:.2,sway:0,dizzy:e===`hitLight`||e===`hitHeavy`?m.dizzy*.5:0,down:0,cheer:0};return re(l,.08),new Promise(e=>{let t=()=>{w===s.tl&&(w=null,T=null,h=c,re(ip[h],r?0:.35),F(h,r),e())};w=s.tl,T=e,s.tl.eventCallback(`onComplete`,t),r?(s.tl.progress(1),t(),c!==ie.loop&&Object.assign(f,op(c,d))):s.tl.timeScale(n).play(0)})},oe=e=>{Object.assign(p,f);let t=g,n=Math.PI*2;if(m.bounce>.001){let e=t*2.15,r=.5-.5*Math.cos(n*e),i=m.bounce;p.hy+=i*(.034*r-.014),p.lfy+=i*.032*r,p.rfy+=i*.032*r,p.lfrx+=i*.22*r,p.rfrx+=i*.22*r,p.crx+=i*.025*Math.sin(n*(e-.2)),p.arx+=i*.03*Math.sin(n*(e-.35)),p.lay+=i*.014*Math.sin(n*(e-.3)),p.ray+=i*.014*Math.sin(n*(e-.3)),p.hx+=i*.018*Math.sin(Math.PI*e),p.hry+=i*.04*Math.sin(Math.PI*e+.6),p.crz+=i*.02*Math.sin(Math.PI*e)}let r=1+_*1.2;if(m.breathe>.001){let e=Math.sin(n*.33*r*t);p.crx+=m.breathe*.014*r*e,p.lcz+=m.breathe*.025*r*e,p.rcz-=m.breathe*.025*r*e,p.lay+=m.breathe*.008*e,p.ray+=m.breathe*.008*e}if(m.sway>.001&&(p.hx+=m.sway*.014*Math.sin(n*.27*t),p.hry+=m.sway*.045*Math.sin(n*.19*t+1),p.ary+=m.sway*.05*Math.sin(n*.13*t+2),p.arz+=m.sway*.025*Math.sin(n*.21*t)),m.dizzy>.001){let e=n*.55*t,r=m.dizzy;p.hx+=r*.055*Math.sin(e),p.hz+=r*.035*Math.cos(e),p.hy+=r*-.03*(.5+.5*Math.sin(2*e)),p.srz+=r*.08*Math.sin(e+.6),p.crz+=r*.1*Math.sin(e+1),p.crx+=r*.05*Math.cos(e+1),p.arz+=r*.22*Math.sin(e+1.6),p.arx+=r*.12*Math.cos(e+1.6),p.ary+=r*.14*Math.sin(e*.5),p.lax+=r*.04*Math.sin(e+2),p.rax+=r*.04*Math.sin(e+2.6),p.lay+=r*.05*Math.cos(e+2),p.ray+=r*.05*Math.cos(e+2.4)}if(m.down>.001){let e=Math.sin(n*.45*t);p.crx+=m.down*.035*e,p.ary+=m.down*.08*Math.sin(n*.12*t),p.mo+=m.down*.12*e}if(m.cheer>.001){let e=Math.sin(n*1.5*t);p.lay+=m.cheer*.08*e,p.ray+=m.cheer*.08*e,p.lax+=m.cheer*.03*e,p.rax-=m.cheer*.03*e,p.hy+=m.cheer*.025*Math.max(0,e),p.arx-=m.cheer*.06*e,p.mo+=m.cheer*.08*e}if(b>.001){let n=b*b;p.arx+=n*.07*Math.sin(t*61),p.ary+=n*.09*Math.sin(t*47.3+1.3),p.arz+=n*.06*Math.sin(t*53.7+2.1),p.crz+=n*.025*Math.sin(t*41.1),b=Math.max(0,b-e*2.4)}if(x-=e,x<=0&&(C=.13,x=2.4+2.2*(.5+.5*Math.sin(t*12.9898))),C>0){C-=e;let t=Math.sin(Math.min(1,1-C/.13)*Math.PI);p.eyeL*=1-.92*t,p.eyeR*=1-.92*t}let i=rh(.32,1,_);p.eyeL*=1-.65*i},R=e=>{g+=e,oe(e),i.solve(p,rh(.32,1,_)),j.update(e),j.apply(i,P),o.pose(),a.u.uFlash.value=v,v=Math.max(0,v-y/th*e),o.read(I);let t=rh(-.4,-1.3,p.hrx);t>0&&I.headTop.lerp(I.faceOut.setY(I.faceOut.y+.1),t),te.damage=_,te.stars=p.stars,te.lying=t,u.update(e,te)};return A&&F(h,!0),R(0),{fighter:t,root:r,head:s,gloveL:c,gloveR:l,play:ae,impactAt:e=>ap[e]??0,aim(e){N=e},setClips(e){A=e,e?w||F(h,!0):j.off(0)},setDamage(e){_=Math.min(1,Math.max(0,e)),a.u.uDamage.value=_},update:R,dispose(){ne(),E?.kill(),J.killTweensOf(f),J.killTweensOf(m),o.dispose(),a.dispose(),u.dispose(),r.removeFromParent()}}}var ph=new Set([`idle`,`guard`,`bounce`,`dizzy`,`down`]),mh=class{boxer;base=`guard`;current=`guard`;token=0;anims=[];slow=1;constructor(e){this.boxer=e}loop(e,t=!0,n=!1){this.base=e,(t||ph.has(this.current))&&(this.token++,this.current=e,this.run(()=>this.boxer.play(e,n?{timeScale:1/0}:void 0)))}act(e,t=1,n){let r=++this.token;this.current=e;let i=this.run(()=>this.boxer.play(e,{timeScale:t,side:n}));return i.then(()=>{this.token===r&&(this.current=this.base,this.run(()=>this.boxer.play(this.base)))}),i}setSlow(e){if(e!==this.slow){this.slow=e;for(let{a:t,ts:n}of this.anims)t.timeScale(n*e)}}run(e){let t=Promise.resolve(),n=J.context(()=>{try{t=e()??Promise.resolve()}catch(e){console.error(`boxer.play failed`,e)}}),r=(n.data??[]).filter(e=>e instanceof J.core.Animation),i=new Set(r),a=r.filter(e=>!i.has(e.parent));if(this.anims=a.map(e=>({a:e,ts:e.timeScale()})),this.slow!==1)for(let{a:e,ts:t}of this.anims)e.timeScale(t*this.slow);return n.clear(),t.catch(e=>console.error(`boxer animation failed`,e))}};function hh(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ce,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=gh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=gh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function gh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ft(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function _h(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var vh=3.55,yh=4.05,bh=1.25,xh=[.48,.9,1.32],Sh=1.62,Ch={x:-.42,z:.525},wh={x:.42,z:-.525},Th=6.2,Eh=.95,Dh=.5,Oh=.9,kh=2;function Ah(e){let t=e>=7;return{d:Th+e*Eh+(t?Oh:0),floor:-1.25+(e+1)*Dh+(t?kh:0),depth:Eh}}var jh=`
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
  }`,Mh=`
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
  }`,Nh=new q,Ph=new K(0,0,0),Fh=class{capacity;mesh;shape;constructor(t){this.capacity=t;let n=new _t(1,1);this.shape=new L(new Float32Array(t),1),n.setAttribute(`aShape`,this.shape);let r=new y({vertexShader:jh,fragmentShader:Mh,transparent:!0,depthWrite:!1,blending:2});this.mesh=new e(n,r,t),this.mesh.instanceMatrix.setUsage(T);for(let e=0;e<t;e++)this.mesh.setColorAt(e,Ph);this.mesh.instanceColor.setUsage(T),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6}set(e,t,n,r,i=0){Nh.makeScale(n,n,n).setPosition(t),this.mesh.setMatrixAt(e,Nh),this.mesh.setColorAt(e,r),this.shape.getX(e)!==i&&(this.shape.setX(e,i),this.shape.needsUpdate=!0)}hide(e){Nh.makeScale(0,0,0),this.mesh.setMatrixAt(e,Nh)}commit(e=this.capacity){this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0}},Ih=`"Anton", "Oswald", Impact, sans-serif`;function Lh(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Rh(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}function zh(e,t=!1){let n=new ae(e);return n.colorSpace=gt,n.anisotropy=8,n.wrapS=n.wrapT=t?j:c,n}function Bh(e,t,n,r,i=.45,a=5,o=-Math.PI/2){e.beginPath();for(let s=0;s<a*2;s++){let c=o+s*Math.PI/a,l=s%2==0?r:r*i,u=t+Math.cos(c)*l,d=n+Math.sin(c)*l;s===0?e.moveTo(u,d):e.lineTo(u,d)}e.closePath()}function Vh(e,t,n,r,i){e.beginPath(),[[.62,0],[.12,.55],[.46,.55],[.3,1],[.9,.38],[.54,.38],[.78,0]].forEach(([a,o],s)=>s===0?e.moveTo(t+a*r,n+o*i):e.lineTo(t+a*r,n+o*i)),e.closePath()}function Hh(e,t,n,r,i,a={}){e.save(),e.translate(n,r),e.transform(1,0,-.2,1,0,0),e.font=`400 ${i}px ${Ih}`,e.textAlign=`center`,e.textBaseline=`middle`,e.lineJoin=`round`,e.fillStyle=a.shadow??`rgba(18,4,40,0.85)`,e.fillText(t,i*.05,i*.07),e.strokeStyle=a.shadow??`rgba(18,4,40,0.85)`,e.lineWidth=i*.2,e.strokeText(t,i*.05,i*.07),e.strokeStyle=a.stroke??`#ff2f9a`,e.lineWidth=i*.13,e.strokeText(t,0,0);let o=e.createLinearGradient(0,-i/2,0,i/2);o.addColorStop(0,`#ffffff`),o.addColorStop(.55,a.face??`#fff3fb`),o.addColorStop(1,`#ffc6ea`),e.fillStyle=o,e.fillText(t,0,0),e.restore()}var Uh=2.6;function Wh(){let e=1024,[t,n]=Rh(e,e),r=Lh(829861),i=n.createRadialGradient(e/2,e/2,e*.05,e/2,e/2,e*.72);i.addColorStop(0,`#ffffff`),i.addColorStop(.55,`#c4c4c4`),i.addColorStop(1,`#8c8c8c`),n.fillStyle=i,n.fillRect(0,0,e,e),n.globalAlpha=.07;for(let t=0;t<e;t+=2)n.fillStyle=t%4==0?`#ffffff`:`#303030`,n.fillRect(t,0,1,e),n.fillRect(0,t,e,1);n.globalAlpha=1;for(let t=0;t<450;t++){n.fillStyle=`rgba(${r()<.5?`255,255,255`:`40,40,60`},${.03+r()*.05})`;let t=r()*e,i=r()*e;n.beginPath(),n.ellipse(t,i,2+r()*13,1+r()*5,r()*Math.PI,0,Math.PI*2),n.fill()}let a=e*(1-3.55/4.05)*.5;n.strokeStyle=`rgba(30,30,40,0.8)`,n.lineWidth=a*1.6,n.strokeRect(0,0,e,e),n.strokeStyle=`rgba(255,255,255,0.9)`,n.lineWidth=5,n.strokeRect(a*.82,a*.82,e-a*1.64,e-a*1.64),n.strokeStyle=`rgba(255,255,255,0.5)`,n.lineWidth=2,n.strokeRect(59.83209876543209,59.83209876543209,e-a*1.64-16,e-a*1.64-16);let o=zh(t);return o.anisotropy=16,o}function Gh(){let e=1024,[t,n]=Rh(e,e),r=2.03*(e/(Uh*2)),i=n.createRadialGradient(512,512,0,512,512,r*1.2);i.addColorStop(0,`rgba(255,255,255,0.3)`),i.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=i,n.fillRect(0,0,e,e),n.lineWidth=7,n.strokeStyle=`rgba(255,255,255,0.8)`,n.beginPath(),n.arc(512,512,r,0,Math.PI*2),n.stroke(),n.lineWidth=3,n.strokeStyle=`rgba(255,210,58,0.9)`,n.beginPath(),n.arc(512,512,412.7538461538461,0,Math.PI*2),n.stroke(),n.fillStyle=`rgba(255,255,255,0.85)`;for(let e=0;e<12;e++){let t=e/12*Math.PI*2;Bh(n,512+Math.cos(t)*r*1.152,512+Math.sin(t)*r*1.152,8,.45),n.fill()}return n.save(),n.globalAlpha=.9,Vh(n,512-e*.0835,512-e*.152,e*.167,e*.304),n.fillStyle=`#ffd23a`,n.fill(),n.lineWidth=6,n.strokeStyle=`#1a0838`,n.stroke(),n.restore(),Hh(n,`NAKAVT`,512,512,e*.232),n.font=`400 ${e*.046}px ${Ih}`,n.fillStyle=`rgba(255,255,255,0.85)`,n.textAlign=`center`,n.fillText(`★  ANA KARŞILAŞMA  ★`,512,716.8),zh(t)}function Kh(){let e=1024,[t,n]=Rh(e,160),r=n.createLinearGradient(0,0,0,160);r.addColorStop(0,`#ffffff`),r.addColorStop(1,`#5a5a5a`),n.fillStyle=r,n.fillRect(0,0,e,160);for(let t=0;t<2;t++){let r=e*(.25+t*.5);Hh(n,`NAKAVT`,r,83.2,80,{stroke:`#ffffff`,shadow:`rgba(0,0,0,0.6)`,face:`#ffffff`}),n.fillStyle=`#ffffff`,Bh(n,r-e*.17,83.2,13),n.fill(),Bh(n,r+e*.17,83.2,13),n.fill()}return zh(t,!0)}function qh(e,t){let n=1024,[r,i]=Rh(256,n),a=i.createLinearGradient(0,0,256,0);return a.addColorStop(0,t),a.addColorStop(.5,e),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,256,n),i.fillStyle=`rgba(255,255,255,0.18)`,i.fillRect(0,0,256,18),i.fillRect(0,1006,256,18),i.save(),i.translate(128,n/2),i.rotate(-Math.PI/2),i.font=`400 158.72px ${Ih}`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillStyle=`rgba(30,6,50,0.45)`,i.fillText(`NAKAVT`,6,8),i.fillStyle=`#ffffff`,i.fillText(`NAKAVT`,0,0),i.restore(),zh(r)}function Jh(){let e=1024,[t,n]=Rh(e,128);n.fillStyle=`#0a0418`,n.fillRect(0,0,e,128);let r=[`#ff4fb8`,`#ffd23a`,`#4fb2ff`,`#c58bff`];for(let e=0;e<8;e++){let t=e*128,i=r[e%r.length],a=n.createLinearGradient(t+10,0,t+79.36,0);a.addColorStop(0,`rgba(255,255,255,0)`),a.addColorStop(1,i),n.fillStyle=a,n.fillRect(t+10,48.64,71.68,30.72),n.fillStyle=i;let o=t+102.4;n.beginPath(),n.moveTo(o,30.72),n.lineTo(o+25.6,64),n.lineTo(o,97.28),n.lineTo(o-25.6,64),n.closePath(),n.fill()}n.globalCompositeOperation=`destination-in`;let[i,a]=Rh(8,8);return a.fillStyle=`#fff`,a.beginPath(),a.arc(4,4,3.1,0,Math.PI*2),a.fill(),n.fillStyle=n.createPattern(i,`repeat`),n.fillRect(0,0,e,128),n.globalCompositeOperation=`destination-over`,n.fillStyle=`#07030f`,n.fillRect(0,0,e,128),n.globalCompositeOperation=`source-over`,zh(t,!0)}function Yh(){let e=1024,[t,n]=Rh(e,512),r=n.createLinearGradient(0,0,e,512);r.addColorStop(0,`#4b0f7a`),r.addColorStop(.5,`#a3127a`),r.addColorStop(1,`#1f2bb0`),n.fillStyle=r,n.fillRect(0,0,e,512),n.fillStyle=`rgba(255,255,255,0.08)`;for(let t=0;t<512;t+=14)for(let r=t/14%2?7:0;r<e;r+=14)n.beginPath(),n.arc(r,t,r/e*3.2,0,Math.PI*2),n.fill();return Hh(n,`NAKAVT`,e/2,230.4,215.04),n.font=`400 61.44px ${Ih}`,n.textAlign=`center`,n.fillStyle=`#ffd23a`,n.fillText(`DEMİR  ✦  YILDIRIM`,e/2,424.96),n.strokeStyle=`#ff4fb8`,n.lineWidth=14,n.strokeRect(7,7,1010,498),zh(t)}function Xh(){let[e,t]=Rh(640,480);t.fillStyle=`#ffffff`,t.strokeStyle=`#ffffff`,t.lineCap=`round`,t.lineJoin=`round`;for(let e=0;e<2;e++)for(let n=0;n<4;n++){let r=n*160,i=e*240,a=r+80,o=e===1?1.14:1,s=i+100.8,c=i+134.4,l=34*o;t.beginPath(),t.moveTo(a-l,c+10),t.quadraticCurveTo(a-l-2,c-8,a-l+16,c-10),t.lineTo(a+l-16,c-10),t.quadraticCurveTo(a+l+2,c-8,a+l,c+10),t.lineTo(a+l*.92,i+240),t.lineTo(a-l*.92,i+240),t.closePath(),t.fill(),t.fillRect(a-8,s+10,16,22),t.beginPath(),t.ellipse(a,s,18*o,22,0,0,Math.PI*2),t.fill(),e===1?(t.beginPath(),t.ellipse(a+4,s-20,12,9,.3,0,Math.PI*2),t.fill()):(t.beginPath(),t.ellipse(a-2,s-14,22,9,-.1,Math.PI,Math.PI*2),t.fill(),t.fillRect(a-22,s-15,34,6)),t.lineWidth=15*o;let u=(e,n,r,i,o)=>{t.beginPath(),t.moveTo(a+e,c-2),t.lineTo(a+n,r),t.lineTo(a+i,o),t.stroke(),t.beginPath(),t.arc(a+i,o,10,0,Math.PI*2),t.fill()},d=-l+8,f=l-8;n===0?(u(d,d-8,c+40,d-4,c+78),u(f,f+8,c+40,f+4,c+78)):n===1?(u(d,d-8,c+40,d-4,c+78),u(f,f+22,c-44,f+14,i+22)):n===2?(u(d,d-26,c-46,d-34,i+18),u(f,f+26,c-46,f+34,i+18)):(u(d,d-6,c+34,-7,c+14),u(f,f+6,c+34,7,c+14))}let n=zh(e);return n.anisotropy=4,n}var Zh=`
  float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x) {
    vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z);
  }`,Qh=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,$h=`
  uniform float uTime;
  uniform float uFlare;
  uniform float uRed;
  uniform vec3 uLow;
  uniform vec3 uMid;
  uniform vec3 uHigh;
  uniform vec3 uBack;
  uniform vec3 uSide;
  uniform vec3 uSmoke;
  varying vec3 vDir;
  ${Zh}
  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uLow, uMid, smoothstep(-0.12, 0.1, h));
    col = mix(col, uHigh, smoothstep(0.1, 0.55, h));
    float back = pow(max(0.0, -d.z), 2.0);
    col += uBack * back * smoothstep(-0.05, 0.2, h) * (1.0 - smoothstep(0.25, 0.7, h));
    col += uSide * pow(max(0.0, abs(d.x)), 5.0) * smoothstep(-0.1, 0.25, h) * (1.0 - smoothstep(0.3, 0.8, h));
    // drifting smoke in the upper hall
    float n = vnoise(d * 6.0 + vec3(uTime * 0.03, 0.0, uTime * 0.02)) * 0.6 + vnoise(d * 14.0 - vec3(0.0, uTime * 0.05, 0.0)) * 0.4;
    col += uSmoke * n * smoothstep(0.05, 0.35, h) * 0.6;
    col *= 1.0 + uFlare * 0.25;
    col = mix(col, vec3(col.r * 0.8 + col.g * 0.7 + col.b * 0.55, col.g * 0.1, col.b * 0.07), uRed);
    gl_FragColor = vec4(col, 1.0);
  }`,eg=`
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
  }`,tg=`
  uniform float uTime;
  varying float vV;
  varying vec3 vN;
  varying vec3 vView;
  varying vec3 vColor;
  varying vec3 vWorld;
  ${Zh}
  void main() {
    float ndv = clamp(abs(dot(normalize(vN), normalize(vView))), 0.0, 1.0);
    float edge = pow(ndv, 2.4);
    float v = clamp(vV, 0.0, 1.0);
    float along = pow(1.0 - v, 1.3) * smoothstep(0.0, 0.05, v) * (1.0 - smoothstep(0.8, 1.0, v));
    float n = vnoise(vWorld * 1.3 + vec3(uTime * 0.12, uTime * 0.05, -uTime * 0.08));
    float a = edge * along * (0.55 + 0.8 * n);
    gl_FragColor = vec4(vColor * a, 1.0);
  }`,ng=`
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
  }`,rg=`
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vColor;
  varying vec3 vSeed;
  ${Zh}
  void main() {
    vec2 p = vUv * 2.0 - 1.0;
    float m = (1.0 - smoothstep(0.35, 1.0, length(p * vec2(0.8, 1.0))));
    vec3 q = vec3(vUv * vec2(3.0, 2.0), 0.0) + vSeed * 0.13 + vec3(uTime * 0.05, uTime * 0.02, uTime * 0.03);
    float n = vnoise(q) * 0.55 + vnoise(q * 2.3) * 0.3 + vnoise(q * 5.1) * 0.15;
    float a = m * smoothstep(0.25, 0.85, n);
    gl_FragColor = vec4(vColor * a, 1.0);
  }`,ig=new q,ag=new B,og=new G,sg=new G,cg=new G(0,-1,0),lg=new G(0,0,1),ug=new G(1,0,0),dg=class{group=new S;fx={flare:0,chase:1,beams:1,bulbs:1,red:0,throb:0};level={beams:.65,bulbs:.85};standsMat;hallFloorMat;haze;ledMat;redTmp=new K;lastRed=-1;domeMat;beamMat;hazeMat;beams;beamDefs=[];bulbs;bulbPos=[];bulbBase=[];halos;led;textures=[];time=0;col=new K;constructor(){this.domeMat=new y({uniforms:{uTime:{value:0},uFlare:{value:0},uRed:{value:0},uLow:{value:new K},uMid:{value:new K},uHigh:{value:new K},uBack:{value:new K},uSide:{value:new K},uSmoke:{value:new K}},vertexShader:Qh,fragmentShader:$h,side:1,depthWrite:!1,fog:!1});let t=new R(new ve(90,48,24),this.domeMat);t.renderOrder=-10,t.frustumCulled=!1,this.group.add(t),this.hallFloorMat=new p({color:1378854,roughness:.35,metalness:.2});let n=new R(new _t(80,80),this.hallFloorMat);n.rotation.x=-Math.PI/2,n.position.y=-bh-.01,this.group.add(n);let r=[];for(let e=0;e<4;e++)for(let t=0;t<11;t++){let{d:n,floor:i,depth:a}=Ah(t),o=(n+a)*2,s=new st(o,i+bh,a);s.applyMatrix4(new q().makeTranslation(0,(i-bh)/2,-(n+a/2))),s.applyMatrix4(new q().makeRotationY(e*Math.PI/2)),r.push(s)}this.standsMat=new p({color:1838387,roughness:.8});let i=new R(hh(r),this.standsMat);r.forEach(e=>e.dispose()),this.group.add(i),this.led=Jh(),this.textures.push(this.led);let a=[],o=Ah(7),s=o.d-.03;this.led.repeat.set(Math.max(1,Math.round(8*s*128/716.8)),1);let c=o.floor-.42;for(let e=0;e<4;e++){let t=new _t(s*2,.7),n=t.attributes.uv;for(let t=0;t<n.count;t++)n.setX(t,(n.getX(t)+e)/4);t.applyMatrix4(new q().makeTranslation(0,c,-s)),t.applyMatrix4(new q().makeRotationY(e*Math.PI/2)),a.push(t)}let l=new u({map:this.led,color:new K(.6,.6,.6),side:2});this.ledMat=l;let d=new R(hh(a),l);a.forEach(e=>e.dispose()),this.group.add(d);let f=[],m=4.3;for(let e=0;e<4;e++){for(let t of[0,.42]){let n=new st(8.9,.07,.07);n.applyMatrix4(new q().makeTranslation(0,6.7+t,-4.3)),n.applyMatrix4(new q().makeRotationY(e*Math.PI/2)),f.push(n)}for(let t=-8;t<=8;t++){let n=new st(.04,.42,.04);n.applyMatrix4(new q().makeRotationZ(t%2==0?.6:-.6)),n.applyMatrix4(new q().makeTranslation(t*m/8,6.91,-4.3)),n.applyMatrix4(new q().makeRotationY(e*Math.PI/2)),f.push(n)}let t=new ze(.02,.02,12,4);t.applyMatrix4(new q().makeTranslation(m*(e%2?1:-1),13.100000000000001,m*(e<2?1:-1))),f.push(t)}let h=[];for(let[e,t]of[[-2.6,-4.3],[0,-4.3],[2.6,-4.3],[-4.3,-1.2],[m,-1.2],[-4.3,1.6],[m,1.6],[-1.3,m],[1.3,m]]){let n=new G(e,6.5200000000000005,t);h.push(n);let r=new ze(.16,.22,.42,12),i=new q().lookAt(n,new G(e*.15,.5,t*.15),new G(0,1,0));r.applyMatrix4(new q().makeRotationX(Math.PI/2)),r.applyMatrix4(i),r.applyMatrix4(new q().makeTranslation(n.x,n.y,n.z)),f.push(r)}let g=new R(hh(f),new p({color:2366515,metalness:.9,roughness:.35}));f.forEach(e=>e.dispose()),this.group.add(g);let _=Yh();this.textures.push(_);let v=new st(3.4,1.7,3.4),b=new R(v,[new u({map:_,color:new K(1.5,1.5,1.5)}),new u({map:_,color:new K(1.5,1.5,1.5)}),new u({color:1182240}),new u({color:1182240}),new u({map:_,color:new K(1.5,1.5,1.5)}),new u({map:_,color:new K(1.5,1.5,1.5)})]);b.position.set(0,9.6,0),this.group.add(b);let x=(e,t)=>{this.bulbPos.push(e),this.bulbBase.push(t)};for(let e=0;e<13;e++)x(new G(-4.2+e*.7,6.65,-4.3-.06),.09);for(let e=0;e<13;e++)x(new G(-4.3-.06,6.65,-4.2+e*.7),.09);for(let e=0;e<13;e++)x(new G(4.359999999999999,6.65,-4.2+e*.7),.09);for(let e=0;e<7;e++)x(new G(-17.5,6.6,-9+e*3),.36);for(let e=0;e<7;e++)x(new G(17.5,6.6,-9+e*3),.36);let S=this.bulbPos.length;this.bulbs=new e(new ve(1,10,7),new u({color:16777215}),S);let C=new te;this.bulbPos.forEach((e,t)=>{C.position.copy(e),C.scale.setScalar(this.bulbBase[t]),C.updateMatrix(),this.bulbs.setMatrixAt(t,C.matrix),this.bulbs.setColorAt(t,new K(3,3,3))}),this.bulbs.instanceColor.setUsage(T),this.group.add(this.bulbs),this.halos=new Fh(S),this.group.add(this.halos.mesh),h.forEach((e,t)=>{this.beamDefs.push({from:e,to:new G(e.x*.12,0,e.z*.12-.2),radius:1.25,color:t%3==1?new K(.12,.1,.16):t%2==0?new K(.16,.06,.16):new K(.07,.09,.2),sweep:0,speed:0,phase:0})}),[[-9,-15,new K(.5,.06,.35)],[-4,-16,new K(.12,.18,.6)],[4,-16,new K(.5,.06,.35)],[9,-15,new K(.12,.18,.6)],[-15,-6,new K(.45,.08,.4)],[15,-6,new K(.1,.2,.6)]].forEach(([e,t,n],r)=>{this.beamDefs.push({from:new G(e,4.2,t),to:new G(e*.35,16,t*.25),radius:1.6,color:n,sweep:.32,speed:.45+r%3*.12,phase:r*1.7})});let w=new ze(.03,1,1,28,1,!0);w.applyMatrix4(new q().makeTranslation(0,-.5,0));let E=w.attributes.position,D=new Float32Array(E.count);for(let e=0;e<E.count;e++)D[e]=-E.getY(e);w.setAttribute(`aV`,new ft(D,1)),this.beamMat=new y({uniforms:{uTime:{value:0}},vertexShader:eg,fragmentShader:tg,transparent:!0,depthWrite:!1,blending:2,side:2}),this.beams=new e(w,this.beamMat,this.beamDefs.length),this.beams.instanceMatrix.setUsage(T),this.beamDefs.forEach((e,t)=>this.beams.setColorAt(t,e.color)),this.beams.instanceColor.setUsage(T),this.beams.frustumCulled=!1,this.beams.renderOrder=5,this.group.add(this.beams);let O=[[0,2.6,-9.5,22,6,new K(.11,.025,.12)],[-8,1.8,-5,10,5,new K(.09,.02,.1)],[8,1.8,-5,10,5,new K(.04,.04,.13)],[0,6.2,-14,30,8,new K(.12,.02,.14)]];this.hazeMat=new y({uniforms:{uTime:{value:0}},vertexShader:ng,fragmentShader:rg,transparent:!0,depthWrite:!1,blending:2});let k=new e(new _t(1,1),this.hazeMat,O.length);O.forEach(([e,t,n,r,i,a],o)=>{C.position.set(e,t,n),C.scale.set(r,i,1),C.updateMatrix(),k.setMatrixAt(o,C.matrix),k.setColorAt(o,a)}),k.frustumCulled=!1,k.renderOrder=4,this.group.add(k),this.haze=k}setPalette(e){let t=this.domeMat.uniforms;t.uLow.value.copy(e.domeLow),t.uMid.value.copy(e.domeMid),t.uHigh.value.copy(e.domeHigh),t.uBack.value.copy(e.domeBack),t.uSide.value.copy(e.domeSide),t.uSmoke.value.copy(e.domeSmoke),this.standsMat.color.copy(e.stands),this.hallFloorMat.color.copy(e.hallFloor),this.haze.setColorAt(0,this.col.copy(e.haze)),this.haze.setColorAt(1,this.col.copy(e.haze).multiplyScalar(.8)),this.haze.setColorAt(2,this.col.copy(e.hazeSide)),this.haze.setColorAt(3,this.col.copy(e.haze).multiplyScalar(1.1)),this.haze.instanceColor&&(this.haze.instanceColor.needsUpdate=!0);for(let t=0;t<this.beamDefs.length;t++){let n=this.beamDefs[t];n.sweep===0?n.color.copy(t%3==1?e.beamNeutral:t%2==0?e.beamA:e.beamB).multiplyScalar(t%3==1?1:.3):n.color.copy(this.beamHueIndex(t)===0?e.beamA:e.beamB)}}beamHueIndex(e){let t=e-9;return+(t===1||t===3||t===5)}update(e,t){this.time+=e;let n=this.time,r=this.fx;this.domeMat.uniforms.uTime.value=n,this.domeMat.uniforms.uFlare.value=r.flare;let i=r.red,a=r.throb*i;this.domeMat.uniforms.uRed.value=i*.92,i!==this.lastRed&&(this.lastRed=i,this.ledMat.color.setRGB(.6+.6*i,.6*(1-.8*i),.6*(1-.82*i))),this.beamMat.uniforms.uTime.value=n,this.hazeMat.uniforms.uTime.value=n,this.led.offset.x=n*.035%1;let o=r.beams*this.level.beams*(1+r.flare*.5)*(1+.4*i+1.2*a);for(let e=0;e<this.beamDefs.length;e++){let r=this.beamDefs[e];og.subVectors(r.to,r.from);let a=og.length();if(og.normalize(),r.sweep>0){let e=Math.sin(n*r.speed+r.phase)*r.sweep*(.6+t*.8),i=Math.cos(n*r.speed*.7+r.phase)*r.sweep*.5;og.applyAxisAngle(lg,e).applyAxisAngle(ug,i).normalize()}ag.setFromUnitVectors(cg,og),sg.set(r.radius,a,r.radius),ig.compose(r.from,ag,sg),this.beams.setMatrixAt(e,ig);let s=r.sweep>0?.75+.25*Math.sin(n*7+r.phase*3):1;if(this.col.copy(r.color),i>0){let e=this.col;this.redTmp.setRGB((e.r+e.g+e.b)*.95,e.g*.12,e.b*.1),e.lerp(this.redTmp,i*.9)}this.col.multiplyScalar(o*s*(r.sweep>0?.6+t*.7:1)),this.beams.setColorAt(e,this.col)}this.beams.instanceMatrix.needsUpdate=!0,this.beams.instanceColor.needsUpdate=!0;let s=2.2+t*6*r.chase;for(let e=0;e<this.bulbPos.length;e++){let t=this.bulbPos[e],o=this.bulbBase[e]>.2,c=.5+.5*Math.sin(n*s-(t.x+t.z)*(o?.9:2.4)),l=((o?.55+.25*c:.3+.7*(c>.55?1:.15))*(1-r.flare)+r.flare*1.6)*r.bulbs*this.level.bulbs*(1+.5*a)*.55,u=o?1:.92;this.col.setRGB(3.2*l,3*l*u*(1-.82*i),2.7*l*u*(1-.86*i)),this.bulbs.setColorAt(e,this.col);let d=o?1.9:.6;this.col.multiplyScalar(o?.09:.16),this.halos.set(e,t,d*(.8+.4*l),this.col,+!!o)}this.bulbs.instanceColor.needsUpdate=!0,this.halos.commit()}allTextures(){return this.textures}},fg=(e,t,n,r,i,a,o)=>({pos:new G(e,t,n),look:new G(r,i,a),fov:o}),pg=new G,mg=.56,hg=fg(0,2,2.8,0,1.2,-.5,44),gg=fg(0,2,2.7,0,1.35,-.5,32);function _g(e,t,n,r){return r.pos.lerpVectors(e.pos,t.pos,n),r.look.lerpVectors(e.look,t.look,n),r.fov=mt.lerp(e.fov,t.fov,n),r}function vg(e,t,n,r){let i=Math.atan2(e.pos.x,e.pos.z),a=Math.atan2(t.pos.x,t.pos.z);for(;a-i>Math.PI;)a-=Math.PI*2;for(;a-i<-Math.PI;)a+=Math.PI*2;let o=Math.hypot(e.pos.x,e.pos.z),s=Math.hypot(t.pos.x,t.pos.z),c=mt.lerp(i,a,n),l=mt.lerp(o,s,n);return r.pos.set(Math.sin(c)*l,mt.lerp(e.pos.y,t.pos.y,n),Math.cos(c)*l),r.look.lerpVectors(e.look,t.look,n),r.fov=mt.lerp(e.fov,t.fov,n),r}var yg=class{camera=new E(40,1,.05,220);ots=fg(0,0,0,0,0,0,40);shot=fg(0,0,0,0,0,0,40);shotMix=0;dolly=0;tension=0;fovKick=0;roll=0;offset=new G;lookOffset=new G;sway=1;trackX=0;trackBias=0;landscape=1;base=fg(0,0,0,0,0,0,40);cur=fg(0,0,0,0,0,0,40);dir=new G;canvasW=1;canvasH=1;canvasLeft=0;canvasTop=0;rect=null;time=0;fovNow=40;constructor(){this.camera.rotation.order=`YXZ`,this.recompute()}setCanvas(e,t,n,r){this.canvasW=Math.max(1,e),this.canvasH=Math.max(1,t),this.canvasLeft=n,this.canvasTop=r,this.recompute()}setRect(e){this.rect={...e},this.recompute()}sceneRect(){let e=this.rect;return e&&e.width>4&&e.height>4?e:{left:this.canvasLeft,top:this.canvasTop,width:this.canvasW,height:this.canvasH}}recompute(){let e=this.sceneRect(),t=e.width/e.height,n=mt.clamp((t-mg)/1.22,0,1);if(this.landscape=n,_g(hg,gg,mt.smoothstep(n,0,1),this.ots),this.ots.fov=mt.lerp(hg.fov,this.ots.fov,mt.smoothstep(t,.85,1.25)),t<mg){let e=Math.tan(mt.degToRad(hg.fov/2))*mg;this.ots.fov=Math.min(68,mt.radToDeg(2*Math.atan(e/t)))}}basePose(e){return _g(this.ots,this.ots,0,e)}update(e,t){this.time+=e,this.basePose(this.base),this.shotMix>0?vg(this.base,this.shot,this.shotMix,this.cur):_g(this.base,this.base,0,this.cur);let n=this.cur,r=this.time,i=this.sway;n.pos.x+=Math.sin(r*.53)*.035*i,n.pos.y+=Math.sin(r*.71+1.3)*.022*i;let a=1-this.shotMix,o=this.trackX+this.trackBias;n.pos.x+=o*a,n.pos.y+=Math.abs(o)*.1*a,n.look.x+=o*.08*a,n.look.addScaledVector(this.lookOffset,1),this.dir.subVectors(n.look,n.pos).normalize(),n.pos.addScaledVector(this.dir,this.dolly+this.tension*.2*(1-this.shotMix)).add(this.offset);let s=this.camera;s.position.set(n.pos.x+t.x,n.pos.y+t.y,n.pos.z),s.lookAt(n.look),s.rotation.y+=t.yaw,s.rotation.x+=t.pitch,s.rotation.z+=t.roll+this.roll,this.fovNow=mt.clamp(n.fov+this.fovKick-this.tension*2.5*(1-this.shotMix),12,90),this.applyProjection(),s.updateMatrixWorld()}applyProjection(){let e=this.camera,t=this.canvasW,n=this.canvasH,r=this.sceneRect(),i=r.height/2/Math.tan(mt.degToRad(this.fovNow/2)),a=mt.clamp(r.left+r.width/2-this.canvasLeft,1,t-1),o=mt.clamp(r.top+r.height/2-this.canvasTop,1,n-1),s=2*Math.max(a,t-a),c=2*Math.max(o,n-o);e.fov=mt.radToDeg(2*Math.atan(c/2/i)),e.aspect=s/c,e.setViewOffset(s,c,s/2-a,c/2-o,t,n)}project(e,t){let n=pg.copy(e).project(this.camera),r=t??{x:0,y:0};return r.x=this.canvasLeft+(n.x+1)/2*this.canvasW,r.y=this.canvasTop+(1-n.y)/2*this.canvasH,r}uv(e){let t=e.clone().project(this.camera);return{x:(t.x+1)/2,y:(t.y+1)/2}}},bg=`
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
  }`,xg=`
  #include <common>
  #include <fog_pars_fragment>
  uniform sampler2D uAtlas;
  uniform vec3 uRim;
  uniform float uRimAmt;
  uniform vec3 uTone;
  uniform float uToneMix;
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
    vec3 tint = mix(vTint, uTone * (0.4 + 2.2 * dot(vTint, vec3(0.3, 0.45, 0.25))), uToneMix);
    vec3 col = tint * shade + uRim * rim * uRimAmt + vLit * (0.35 + 0.65 * shade) * (0.6 + rim);
    gl_FragColor = vec4(col, 1.0);
    #include <fog_fragment>
  }`,Sg=.09,Cg=.85,wg=class{mesh;flashes;state={hype:.15,jump:0,flashRate:3,red:0};lastRed=-1;rimBase=new K(1,.45,.85);rimRed=new K(1,.12,.08);poolBase=[new K(.4,.08,.3),new K(.08,.14,.45),new K(.32,.28,.36)];poolRed=[new K(.55,.03,.02),new K(.45,.05,.02),new K(.5,.12,.06)];mat;heads=[];live=[];atlas;time=0;seed=19088743;flashCol=new K;setPalette(e){let t=this.mat.uniforms;t.uTone.value.copy(e.crowdTone),t.uToneMix.value=e.crowdMix,this.rimBase.copy(e.accentA).multiplyScalar(1.1),this.poolBase[0].copy(e.accentA).multiplyScalar(.3),this.poolBase[1].copy(e.accentB).multiplyScalar(.3),this.lastRed=-1}constructor(t=!1){this.atlas=Xh(),this.mat=new y({uniforms:tt.merge([Y.fog,{uTime:{value:0},uHype:{value:0},uJump:{value:0},uAtlas:{value:null},uRim:{value:new K(1,.45,.85)},uRimAmt:{value:.3},uTone:{value:new K(.2,.06,.2)},uToneMix:{value:0},uPoolPos:{value:[new G,new G,new G]},uPoolCol:{value:[new K(.4,.08,.3),new K(.08,.14,.45),new K(.32,.28,.36)]}}]),vertexShader:bg,fragmentShader:xg,fog:!0}),this.mat.uniforms.uAtlas.value=this.atlas;let n=new _t(1,1);n.translate(0,.5,0);let r=[];for(let e=0;e<4;e++)for(let n=0;n<11;n++){let i=Ah(n),a=i.d+i.depth*.45,o=i.floor,s=a+.4,c=.62,l=Math.floor(s*2/c);for(let i=0;i<l;i++){if(this.rand()<.06||t&&(n>=7&&i%3!=0||n>=3&&n<7&&i%2==1))continue;let l=-s+(i+.5)*c+(this.rand()-.5)*.18,u=a+(this.rand()-.5)*.12,d=new G(l,o-.05,-u);d.applyAxisAngle(new G(0,1,0),e*Math.PI/2),r.push({p:d,s:1.5+this.rand()*.28,row:n})}}let i=r.length;this.mesh=new e(n,this.mat,i);let a=new Float32Array(i*4),o=new te,s=[new K(5909132),new K(9055366),new K(11680917),new K(4861850),new K(7020398),new K(3095194)],c=new K;r.forEach((e,t)=>{o.position.copy(e.p),o.scale.setScalar(e.s),o.updateMatrix(),this.mesh.setMatrixAt(t,o.matrix),c.copy(s[Math.floor(this.rand()*s.length)]),c.multiplyScalar(.12/Math.max(.01,c.r*.3+c.g*.59+c.b*.11));let n=1-e.row/7;c.multiplyScalar(e.row>=7?.07+this.rand()*.05:.12+n*n*.4+this.rand()*.08);let r=c.r*.3+c.g*.59+c.b*.11;c.setRGB(r+(c.r-r)*.45,r+(c.g-r)*.45,r+(c.b-r)*.45).multiplyScalar(.62),this.mesh.setColorAt(t,c),a[t*4]=this.rand(),a[t*4+1]=this.rand(),a[t*4+2]=this.rand(),a[t*4+3]=this.rand(),this.heads.push(e.p.clone().add(new G(0,e.s*.82,0)))}),n.setAttribute(`aRand`,new L(a,4)),this.mesh.frustumCulled=!1,this.flashes=new Fh(48);for(let e=0;e<48;e++)this.flashes.hide(e);this.flashes.commit()}rand(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}get count(){return this.mesh.count}flashBurst(e){for(let t=0;t<e;t++)this.spawnFlash(t*.012)}spawnFlash(e=0){if(this.live.length>=48)return;let t=this.heads[Math.floor(this.rand()*this.heads.length)];this.live.push({pos:t.clone().add(new G(0,.15,0)),age:-e,life:.09+this.rand()*.08,size:Sg*(1+this.rand()*.6)})}update(e){this.time+=e;let t=this.state;t.jump=Math.max(0,t.jump-e*.9);let n=this.mat.uniforms;n.uTime.value=this.time,n.uHype.value=t.hype,n.uJump.value=t.jump,n.uRimAmt.value=.1+t.hype*.14+t.red*.15,t.red!==this.lastRed&&(this.lastRed=t.red,n.uRim.value.copy(this.rimBase).lerp(this.rimRed,t.red),n.uPoolCol.value.forEach((e,n)=>e.copy(this.poolBase[n]).lerp(this.poolRed[n],t.red)));let r=n.uPoolPos.value,i=.25+t.hype*.5,a=this.time;r[0].set(Math.sin(a*i)*8,.6+Math.sin(a*i*.7)*1.2,-9.5),r[1].set(-9,.9+Math.sin(a*i*.8+1)*1,Math.sin(a*i*.9+2)*6-2),r[2].set(9,.9+Math.sin(a*i*.6+3)*1,Math.sin(a*i*1.1+4)*6-2);let o=t.flashRate*(.4+t.hype*1.6+t.jump*3)*e;for(;o>0;)this.rand()<Math.min(1,o)&&this.spawnFlash(),--o;let s=0;for(let t=this.live.length-1;t>=0;t--){let n=this.live[t];n.age+=e,n.age>n.life&&this.live.splice(t,1)}for(let e of this.live){if(e.age<0)continue;let t=e.age/e.life,n=t<.15?t/.15:1-(t-.15)/.85;this.flashCol.setRGB(Cg*n,Cg*n,Cg*1.1*n),this.flashes.set(s++,e.pos,e.size*(.6+.6*n),this.flashCol,1)}this.flashes.commit(Math.max(s,0))}allTextures(){return[this.atlas]}},Tg=new q,Eg=new B,Dg=new B,Og=new G,kg=new G,Ag=new G(0,1,0),jg={star:0,pink:1,ring:2,whiff:3,block:4,puff:5,flare:6},Mg=`
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
  }`,Ng=`
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
  }`,Pg=class{capacity;mesh;params;tint;items=[];constructor(t=24){this.capacity=t;let n=new _t(1,1);this.params=new L(new Float32Array(t*4),4),this.tint=new L(new Float32Array(t*4),4),this.params.setUsage(T),this.tint.setUsage(T),n.setAttribute(`aParams`,this.params),n.setAttribute(`aTint`,this.tint);let r=new y({vertexShader:Mg,fragmentShader:Ng,transparent:!0,depthWrite:!1,depthTest:!1,blending:2});this.mesh=new e(n,r,t),this.mesh.instanceMatrix.setUsage(T),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.mesh.count=0}spawn(e,t,n,r,i,a={}){this.items.length>=this.capacity&&this.items.shift(),this.items.push({kind:e,pos:t.clone(),size0:n*(a.grow===void 0?.35:1/a.grow),size1:n,life:r,age:-(a.delay??0),seed:i.next(),rot:a.rot??i.next()*Math.PI*2,spin:a.spin??(i.next()-.5)*1.2,tint:a.tint?a.tint.clone():new K(1,1,1),amp:a.amp??1,delay:a.delay??0})}clear(){this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&this.items.splice(t,1)}for(let n of this.items){if(n.age<0)continue;let r=Math.min(1,n.age/n.life),i=1-(1-Math.min(1,r*(n.kind===jg.star||n.kind===jg.block?7:2.4)))**3,a=n.size0+(n.size1-n.size0)*i;n.rot+=n.spin*e,Tg.makeScale(a,a,a).setPosition(n.pos),this.mesh.setMatrixAt(t,Tg),this.params.setXYZW(t,r,n.seed,n.kind,n.rot),this.tint.setXYZW(t,n.tint.r,n.tint.g,n.tint.b,n.amp),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.params.needsUpdate=!0,this.tint.needsUpdate=!0}},Fg=class{capacity;mesh;items=[];free=[];c=new K;constructor(t=320){this.capacity=t;let n=new _(1,1),r=new u({color:16777215,transparent:!1});this.mesh=new e(n,r,t),this.mesh.instanceMatrix.setUsage(T),this.mesh.setColorAt(0,new K(1,1,1)),this.mesh.instanceColor.setUsage(T),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=8}spawn(e,t,n){this.items.length>=this.capacity&&this.free.push(this.items.shift());let r=this.free.pop()??{pos:new G,vel:new G,age:0,life:1,size:.02,stretch:3,color:new K,drag:0,grav:1,delay:0};r.pos.copy(e),r.vel.copy(t),r.age=-(n.delay??0),r.life=n.life??.8,r.size=n.size??.018,r.stretch=n.stretch??3,r.color.copy(n.color),r.drag=n.drag??.6,r.grav=n.grav??1,this.items.push(r)}spray(e,t,n,r,i,a,o){for(let s=0;s<n;s++){Og.set(a.next()-.5,a.next()-.5,a.next()-.5).normalize().multiplyScalar(i),kg.copy(t).normalize().add(Og).normalize().multiplyScalar(r*(.45+a.next()*.9));let n=this.c.copy(o.color).multiplyScalar(1-(o.jitterColor??.25)*a.next());this.spawn(e.clone().add(Og.multiplyScalar(.06)),kg,{color:n,size:(o.size??.02)*(.6+a.next()*.8),life:(o.life??.7)*(.6+a.next()*.7),stretch:o.stretch??3,grav:o.grav??1,drag:o.drag??.6})}}clear(){this.free.push(...this.items),this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&(this.free.push(n),this.items.splice(t,1))}for(let n of this.items){if(n.age<0)continue;n.vel.y-=9.8*n.grav*e,n.vel.multiplyScalar(Math.max(0,1-n.drag*e)),n.pos.addScaledVector(n.vel,e),n.pos.y<.01&&n.grav>0&&(n.pos.y=.01,n.vel.set(0,0,0));let r=n.vel.length(),i=Math.min(1,(n.life-n.age)/(n.life*.35)),a=n.size*Math.max(.001,i);r>1e-4?Eg.setFromUnitVectors(Ag,Og.copy(n.vel).divideScalar(r)):Eg.identity(),kg.set(a,a*(1+Math.min(r*.4,1)*n.stretch),a),Tg.compose(n.pos,Eg,kg),this.mesh.setMatrixAt(t,Tg),this.mesh.setColorAt(t,n.color),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Ig=[16723870,16765498,3526911,16777215,10181887,6094747].map(e=>new K(e)),Lg=class{capacity;mesh;items=[];constructor(t=420){this.capacity=t;let n=new _t(1,1.6),r=new u({color:16777215,side:2});this.mesh=new e(n,r,t),this.mesh.instanceMatrix.setUsage(T),this.mesh.setColorAt(0,new K(1,1,1)),this.mesh.instanceColor.setUsage(T),this.mesh.frustumCulled=!1,this.mesh.count=0}burst(e,t,n,r=3.2,i=4.2){for(let a=0;a<t;a++){this.items.length>=this.capacity&&this.items.shift();let t=a%3==0,o=t?new G(e.x+(n.next()-.5)*1.2,e.y+.4,e.z+(n.next()-.5)*1.2):new G(e.x+(n.next()-.5)*r*2,i+n.next()*1.5,e.z+(n.next()-.5)*r*2),s=t?new G((n.next()-.5)*4,4.5+n.next()*3.5,(n.next()-.5)*4):new G((n.next()-.5)*.6,-.6-n.next()*.8,(n.next()-.5)*.6);this.items.push({pos:o,vel:s,rot:new B().setFromAxisAngle(new G(n.next(),n.next(),n.next()).normalize(),n.next()*6),axis:new G(n.next()-.5,n.next()-.5,n.next()-.5).normalize(),spin:6+n.next()*10,phase:n.next()*6.28,age:0,life:3.2+n.next()*1.8,size:.045+n.next()*.035,color:Ig[Math.floor(n.next()*Ig.length)].clone().multiplyScalar(1.1+n.next()*.5)})}}clear(){this.items.length=0,this.mesh.count=0}update(e){let t=0;for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.age+=e,n.age>n.life&&this.items.splice(t,1)}for(let n of this.items){n.vel.y-=4*e,n.vel.x+=Math.sin(n.age*3+n.phase)*.8*e,n.vel.z+=Math.cos(n.age*2.3+n.phase)*.8*e,n.vel.multiplyScalar(Math.max(0,1-2.2*e)),n.vel.y<-1.1&&(n.vel.y=-1.1),n.pos.addScaledVector(n.vel,e),n.pos.y<.01&&(n.pos.y=.01,n.vel.set(0,0,0),n.spin=0),Dg.setFromAxisAngle(n.axis,n.spin*e),n.rot.premultiply(Dg);let r=Math.min(1,(n.life-n.age)/.4);Tg.compose(n.pos,n.rot,kg.set(n.size*r,n.size*r,n.size*r)),this.mesh.setMatrixAt(t,Tg),this.mesh.setColorAt(t,n.color),t++}this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},Q=(e,t,n)=>new K().setRGB(e,t,n),Rg=e=>new K(e),zg={KOLAY:{canvas:Rg(3586214),apron:Rg(1928042),accentA:Rg(3137732),accentB:Rg(16763194),rope0:Rg(3135168),rope1:Rg(16765498),rope2:Rg(16747066),domeLow:Q(.01,.045,.045),domeMid:Q(.02,.2,.17),domeHigh:Q(.01,.09,.1),domeBack:Q(.05,.3,.2),domeSide:Q(.45,.3,.03),domeSmoke:Q(.03,.22,.2),stands:Rg(1062454),hallFloor:Rg(729894),fog:Rg(533796),haze:Q(.02,.11,.09),hazeSide:Q(.1,.07,.02),beamA:Q(.05,.4,.3),beamB:Q(.5,.35,.05),beamNeutral:Q(.08,.14,.13),crowdTone:Q(.1,.38,.34),crowdMix:1},ORTA:{canvas:Rg(4881663),apron:Rg(2760074),accentA:Rg(16732088),accentB:Rg(5213183),rope0:Rg(8211967),rope1:Rg(3114751),rope2:Rg(16723870),domeLow:Q(.035,.008,.07),domeMid:Q(.24,.025,.22),domeHigh:Q(.07,.015,.17),domeBack:Q(.3,.03,.24),domeSide:Q(.04,.12,.55),domeSmoke:Q(.25,.05,.3),stands:Rg(1838387),hallFloor:Rg(1378854),fog:Rg(1182254),haze:Q(.11,.025,.12),hazeSide:Q(.04,.04,.13),beamA:Q(.5,.06,.35),beamB:Q(.12,.18,.6),beamNeutral:Q(.12,.1,.16),crowdTone:Q(.2,.06,.2),crowdMix:0},ZOR:{canvas:Rg(9193192),apron:Rg(4527214),accentA:Rg(16732072),accentB:Rg(16754234),rope0:Rg(11820287),rope1:Rg(16732072),rope2:Rg(16757050),domeLow:Q(.04,.008,.06),domeMid:Q(.2,.02,.26),domeHigh:Q(.08,.01,.2),domeBack:Q(.45,.1,.1),domeSide:Q(.3,.04,.55),domeSmoke:Q(.3,.06,.28),stands:Rg(2494012),hallFloor:Rg(1575464),fog:Rg(1641008),haze:Q(.13,.03,.12),hazeSide:Q(.1,.04,.12),beamA:Q(.55,.15,.1),beamB:Q(.3,.06,.6),beamNeutral:Q(.13,.09,.16),crowdTone:Q(.22,.05,.24),crowdMix:1},COK_ZOR:{canvas:Rg(13777482),apron:Rg(5902368),accentA:Rg(16724807),accentB:Rg(12897760),rope0:Rg(16724807),rope1:Rg(15133170),rope2:Rg(16742959),domeLow:Q(.04,.005,.01),domeMid:Q(.26,.015,.03),domeHigh:Q(.1,.01,.04),domeBack:Q(.5,.05,.04),domeSide:Q(.15,.2,.4),domeSmoke:Q(.25,.04,.05),stands:Rg(2887188),hallFloor:Rg(1837065),fog:Rg(1771532),haze:Q(.14,.02,.03),hazeSide:Q(.06,.07,.12),beamA:Q(.6,.05,.05),beamB:Q(.2,.25,.5),beamNeutral:Q(.14,.09,.09),crowdTone:Q(.3,.04,.05),crowdMix:1}},Bg=Object.keys(zg.ORTA).filter(e=>zg.ORTA[e]instanceof K);function Vg(e){let t={crowdMix:e.crowdMix};for(let n of Bg)t[n]=e[n].clone();return t}function Hg(e,t){for(let n of Bg)e[n].copy(t[n]);e.crowdMix=t.crowdMix}var Ug=class{cur=Vg(zg.ORTA);from=Vg(zg.ORTA);to=zg.ORTA;target=`ORTA`;begin(e){Hg(this.from,this.cur),this.to=zg[e],this.target=e}blend(e){for(let t of Bg)this.cur[t].copy(this.from[t]).lerp(this.to[t],e);this.cur.crowdMix=this.from.crowdMix+(this.to.crowdMix-this.from.crowdMix)*e}},Wg={hemi:.77,key:135,rimPink:3.6,rimBlue:2.9,fill:1.2},Gg={hemiSky:[12034815,16730682],hemiGround:[2768026,4851730],key:[16773606,16726564],rimPink:[16732088,16718346],rimBlue:[5213183,16738842],fill:[16770804,16743018]},Kg=class{hemi=new he(Gg.hemiSky[0],Gg.hemiGround[0],Wg.hemi);key=new ge(Gg.key[0],Wg.key,0,.5,.75,2);rimPink=new b(Gg.rimPink[0],Wg.rimPink);rimBlue=new b(Gg.rimBlue[0],Wg.rimBlue);fill=new b(Gg.fill[0],Wg.fill);impact=new s(16773320,0,1.5,2);mood={key:1,rims:1,flash:0,pinkFlash:0,finish:0,beat:0};impactWhite=new K(16773320);impactPink=new K(16727450);from={};to={};constructor(e){for(let e of Object.keys(Gg))this.from[e]=new K(Gg[e][0]),this.to[e]=new K(Gg[e][1]);this.key.position.set(.4,8.5,1.4),this.key.target.position.set(0,.4,-.2),this.rimPink.position.set(-6,5,-7),this.rimPink.target.position.set(0,1.2,0),this.rimBlue.position.set(7,4,-4),this.rimBlue.target.position.set(0,1.2,0),this.fill.position.set(1.5,3,8),this.fill.target.position.set(0,1.3,-.8),this.impact.position.set(0,1.6,-.3),e.add(this.hemi,this.key,this.key.target,this.rimPink,this.rimPink.target,this.rimBlue,this.rimBlue.target),e.add(this.fill,this.fill.target,this.impact)}placeImpact(e){this.impact.position.copy(e)}update(){let e=this.mood,t=e.finish,n=e.beat*t;this.hemi.color.copy(this.from.hemiSky).lerp(this.to.hemiSky,t*.8),this.hemi.groundColor.copy(this.from.hemiGround).lerp(this.to.hemiGround,t),this.key.color.copy(this.from.key).lerp(this.to.key,t*.82),this.rimPink.color.copy(this.from.rimPink).lerp(this.to.rimPink,t),this.rimBlue.color.copy(this.from.rimBlue).lerp(this.to.rimBlue,t),this.fill.color.copy(this.from.fill).lerp(this.to.fill,t*.7),this.hemi.intensity=Wg.hemi*(1-.3*t+.25*n),this.key.intensity=Wg.key*e.key*(1-.2*t+.55*n),this.rimPink.intensity=Wg.rimPink*e.rims*(1+.7*t+1.1*n),this.rimBlue.intensity=Wg.rimBlue*e.rims*(1+.5*t+.9*n),this.fill.intensity=Wg.fill*(1-.3*t+.2*n),this.impact.intensity=2.6*e.flash+3*e.pinkFlash;let r=e.flash+e.pinkFlash;r>.001&&this.impact.color.copy(this.impactWhite).lerp(this.impactPink,e.pinkFlash/r)}},qg={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Jg=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Yg=new x(-1,1,1,-1,0,1),Xg=new class extends Ce{constructor(){super(),this.setAttribute(`position`,new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new le([0,2,0,0,2,0],2))}},Zg=class{constructor(e){this._mesh=new R(Xg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Qg=class extends Jg{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof y?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=tt.clone(e.uniforms),this.material=new y({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},$g=class extends Jg{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},e_=class extends Jg{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},t_=class{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){let t=e.getSize(new W);this._width=t.width,this._height=t.height,n=new Se(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_e}),n.texture.name=`EffectComposer.rt1`}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qg(qg),this.copyPass.material.blending=0,this.timer=new t}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}$g!==void 0&&(r instanceof $g?n=!0:r instanceof e_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},n_=class extends Jg{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},r_={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},i_=class e extends Jg{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new W(256,256):new W(e.x,e.y),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Se(i,a,{type:_e,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Se(i,a,{type:_e,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Se(i,a,{type:_e,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=r_;this.highPassUniforms=tt.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new y({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new W(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=tt.clone(qg.uniforms),this.blendMaterial=new y({uniforms:this.copyUniforms,vertexShader:qg.vertexShader,fragmentShader:qg.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new u,this._fsQuad=new Zg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new W(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new y({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new W(.5,.5)},direction:{value:new W(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new y({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};i_.BlurDirectionX=new W(1,0),i_.BlurDirectionY=new W(0,1);var a_=class extends Jg{calls=0;triangles=0;constructor(){super(),this.needsSwap=!1}render(e){this.calls=e.info.render.calls,this.triangles=e.info.render.triangles}},o_={name:`NakavtGrade`,uniforms:{tDiffuse:{value:null},uCenter:{value:new W(.5,.6)},uZoom:{value:0},uAberr:{value:0},uSpeed:{value:0},uFlash:{value:0},uWash:{value:0},uWashColor:{value:new K(1,.12,.45)},uDesat:{value:0},uVignette:{value:.68},uVigColor:{value:new K(851991)},uTint:{value:new K(1,1,1)},uSat:{value:1.05},uBlood:{value:0},uBeat:{value:0},uAspect:{value:1},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uCenter;
    uniform float uZoom, uAberr, uSpeed, uFlash, uWash, uDesat, uVignette, uAspect, uTime, uBlood, uBeat;
    uniform vec3 uWashColor, uVigColor, uTint;
    uniform float uSat;
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

      // constant grade: a slight saturation push (the level changes the set's colours, not the grade)
      col *= uTint;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
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
    }`};function s_(e,t,n,r,i,a=!1){let o=e.getPixelRatio(),s=new Se(Math.max(1,r*o),Math.max(1,i*o),{type:_e,samples:a?2:4});s.texture.name=`nk.scene`;let c=new t_(e,s);c.setPixelRatio(o),c.setSize(r,i),c.addPass(new n_(t,n));let l=new a_;c.addPass(l);let u=new i_(new W(r,i),a?.5:.55,.18,a?1.15:1.05);if(a){let e=u.setSize.bind(u);u.setSize=(t,n)=>e(Math.max(1,Math.round(t*.5)),Math.max(1,Math.round(n*.5))),u.setSize(r*o,i*o)}c.addPass(u);let d=new Qg(o_);c.addPass(d);let f={cx:.5,cy:.6,zoom:0,aberr:0,speed:0,flash:0,wash:0,desat:0,vignette:.68,blood:0,beat:0},p=r/Math.max(1,i);return{composer:c,bloom:u,stats:l,grade:f,setSize(e,t,n){c.setPixelRatio(n),c.setSize(e,t),p=e/Math.max(1,t)},render(r,i){let a=d.uniforms;a.uCenter.value.set(f.cx,f.cy),a.uZoom.value=f.zoom,a.uAberr.value=f.aberr,a.uSpeed.value=f.speed,a.uFlash.value=f.flash,a.uWash.value=f.wash,a.uDesat.value=f.desat,a.uVignette.value=Math.min(1,Math.max(0,f.vignette)),a.uBlood.value=f.blood,a.uBeat.value=f.beat,a.uAspect.value=p,a.uTime.value=i,e.info.reset();let o=location.search;o.includes(`dbg=nopost`)?(e.setRenderTarget(null),e.render(t,n)):(u.enabled=!o.includes(`dbg=nobloom`),d.enabled=!o.includes(`dbg=nograde`),c.render(r))},dispose(){c.dispose(),u.dispose(),d.dispose(),s.dispose()}}}var c_=typeof window<`u`&&Math.min(window.innerWidth,window.innerHeight)<820&&(window.matchMedia?.(`(pointer: coarse)`).matches||Math.min(window.innerWidth,window.innerHeight)<600),l_=c_?1.5:2,u_=1e6;function d_(){let e=new eu({antialias:!1,alpha:!1,stencil:!1,powerPreference:`high-performance`});e.setPixelRatio(Math.min(window.devicePixelRatio||1,l_)),e.outputColorSpace=gt,e.toneMapping=7,e.toneMappingExposure=1,e.info.autoReset=!1,e.setClearColor(1181471,1);let t=e.domElement;return t.style.position=`absolute`,t.style.inset=`0`,t.style.width=`100%`,t.style.height=`100%`,t.style.display=`block`,t.style.touchAction=`manipulation`,e}function f_(e){let t=new fe,n=[],r=(e,r,i,a,o,s=0,c=0)=>{let l=new u({color:r,side:e instanceof ve?1:2}),d=new R(e,l);d.position.set(i,a,o),d.rotation.set(c,s,0),t.add(d),n.push(e,l)};r(new ve(20,24,12),new K(1706540),0,0,0),r(new _t(9,9),new K(5,4.6,4.2),0,12,0,0,Math.PI/2),r(new _t(14,5),new K(3.2,.5,2),-12,4,-6,Math.PI/3),r(new _t(14,5),new K(.5,1.2,3.6),12,3,-4,-Math.PI/3),r(new _t(18,4),new K(1.6,.35,1.8),0,3,-14),r(new _t(20,20),new K(.25,.12,.6),0,-6,0,0,-Math.PI/2);let i=new ss(e),a=i.fromScene(t,.03);i.dispose();for(let e of n)e.dispose();return a.texture}var p_=new G;function m_(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;p_.copy(t),p_[r]=0,p_.normalize();let l=.5*o/(o+s),u=1-p_.angleTo(e)/c;return Math.sign(p_[n])===1?u*l:s/(o+s)+l+l*(1-u)}var h_=class e extends st{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new G,c=new G,l=new G(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new G,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=m_(m,c,`z`,`y`,i,n),f[a+1]=1-m_(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-m_(m,c,`z`,`y`,i,n),f[a+1]=1-m_(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-m_(m,c,`x`,`z`,i,e),f[a+1]=m_(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-m_(m,c,`x`,`z`,i,e),f[a+1]=1-m_(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-m_(m,c,`x`,`y`,i,e),f[a+1]=1-m_(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=m_(m,c,`x`,`y`,i,e),f[a+1]=1-m_(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},g_=.62,__=new K(3.4,.25,.15),v_=`
  #include <common>
  #include <fog_pars_vertex>
  attribute float aU;
  attribute float aSide;
  attribute float aLevel;
  uniform vec4 uWob;
  uniform vec4 uWob2;
  uniform vec3 uRope0;
  uniform vec3 uRope1;
  uniform vec3 uRope2;
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
    vColor = aLevel < 0.5 ? uRope0 : (aLevel < 1.5 ? uRope1 : uRope2);
    vU = aU;
    #include <fog_vertex>
  }`,y_=`
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
  }`,b_=2*Math.PI*2.6,x_=2*Math.PI*4.4,S_=.11;function C_(e,t,n){let r=n/4;for(let n=0;n<4;n++)e.v+=(-t*t*e.x-2*S_*t*e.v)*r,e.x+=e.v*r;e.x=Math.max(-.45,Math.min(.45,e.x))}var w_=class{group=new S;ropes;ropeMats=[];s1=[0,1,2,3].map(()=>({x:0,v:0}));s2=[0,1,2,3].map(()=>({x:0,v:0}));textures=[];capMat;stripMat;floorMat;apronMat;padMats=[];stripBase=new K(1.3,.22,.85);glow=1;red=0;throb=0;lastRed=-1;capBase=[];capCol=new K;caps=null;constructor(){let t=Wh();this.textures.push(t),this.floorMat=new p({map:t,color:4881663,roughness:.9,metalness:0,emissive:4881663,emissiveMap:t,emissiveIntensity:.09});let n=new R(new _t(yh*2,yh*2),this.floorMat);n.rotation.x=-Math.PI/2,n.name=`ring-floor`,this.group.add(n);let r=Gh();this.textures.push(r);let i=new R(new _t(Uh*2,Uh*2),new p({map:r,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,emissive:16777215,emissiveMap:r,emissiveIntensity:.09,color:15000822}));i.rotation.x=-Math.PI/2,i.position.y=.004,i.name=`ring-decal`,this.group.add(i);let a=Kh();this.textures.push(a);let o=new p({map:a,color:1905264,roughness:.6,emissive:1905264,emissiveMap:a,emissiveIntensity:.55});this.apronMat=o;let s=[];for(let e=0;e<4;e++){let t=new _t(yh*2,bh),n=new q().makeRotationY(e*Math.PI/2);t.applyMatrix4(new q().makeTranslation(0,-bh/2,yh)),t.applyMatrix4(n),s.push(t)}let c=new R(hh(s),o);s.forEach(e=>e.dispose()),this.group.add(c),this.stripMat=new u({color:new K(1.3,.22,.85)});let l=[];for(let e=0;e<4;e++)for(let[t,n]of[[-.03,.05],[-bh+.04,.035]]){let r=new st(yh*2+.06,n,.04);r.applyMatrix4(new q().makeTranslation(0,t,yh+.02)),r.applyMatrix4(new q().makeRotationY(e*Math.PI/2)),l.push(r)}let d=new R(hh(l),this.stripMat);l.forEach(e=>e.dispose()),this.group.add(d);let f=[[-1,-1],[1,-1],[1,1],[-1,1]],m=new p({color:2761792,metalness:.85,roughness:.28}),h=new e(new ze(.075,.085,Sh+bh,14),m,4),g=new te;f.forEach(([e,t],n)=>{g.position.set(e*vh,(Sh-bh)/2,t*vh),g.rotation.set(0,0,0),g.updateMatrix(),h.setMatrixAt(n,g.matrix)}),this.group.add(h),this.capMat=new u({color:16777215});let _=new e(new ke(.12,.03,8,24),this.capMat,4),v=[new K(1.6,.3,1),new K(.3,.7,1.7),new K(1.6,.3,1),new K(.3,.7,1.7)];f.forEach(([e,t],n)=>{g.position.set(e*vh,Sh+.02,t*vh),g.rotation.set(Math.PI/2,0,0),g.updateMatrix(),_.setMatrixAt(n,g.matrix),_.setColorAt(n,v[n])}),this.capBase.push(...v),this.caps=_,this.group.add(_);let b=new h_(.4,1.32,.4,3,.09),x=qh(`#e6e6ee`,`#8c8c9c`);this.textures.push(x);let S=new p({map:x,color:16723870,roughness:.42,metalness:.05,emissive:16723870,emissiveMap:x,emissiveIntensity:.42}),C=new p({map:x,color:3111935,roughness:.42,metalness:.05,emissive:3111935,emissiveMap:x,emissiveIntensity:.42});this.padMats.push(S,C);let w=new e(b,S,2),T=new e(b,C,2),E=(e,t,n,r)=>{let i=.16;g.position.set(n*(vh-i),.9,r*(vh-i)),g.rotation.set(0,Math.atan2(-n,-r),0),g.updateMatrix(),e.setMatrixAt(t,g.matrix)};E(w,0,-1,-1),E(w,1,1,1),E(T,0,1,-1),E(T,1,-1,1),this.group.add(w,T);let D=e=>{let t=[],n=vh*2-.3;for(let r of e)xh.forEach((e,i)=>{let a=new ze(.042,.042,n,10,40,!0),o=a.attributes.position,s=o.count,c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s);for(let e=0;e<s;e++)c[e]=o.getY(e)/n+.5,l[e]=r,u[e]=i;a.setAttribute(`aU`,new ft(c,1)),a.setAttribute(`aSide`,new ft(l,1)),a.setAttribute(`aLevel`,new ft(u,1)),a.deleteAttribute(`uv`),a.applyMatrix4(new q().makeRotationZ(Math.PI/2)),a.applyMatrix4(new q().makeTranslation(0,e,-vh+.02)),a.applyMatrix4(new q().makeRotationY(-r*Math.PI/2)),t.push(a)});let r=hh(t);t.forEach(e=>e.dispose());let i=new y({uniforms:tt.merge([Y.fog,{uWob:{value:new Ge},uWob2:{value:new Ge},uGlow:{value:g_},uRed:{value:0},uRope0:{value:new K(8211967)},uRope1:{value:new K(3114751)},uRope2:{value:new K(16723870)}}]),vertexShader:v_,fragmentShader:y_,fog:!0});this.ropeMats.push(i);let a=new R(r,i);return a.frustumCulled=!1,a};this.ropes=[0,1,2,3].map(e=>D([e])),this.group.add(...this.ropes)}setPalette(e){this.floorMat.color.copy(e.canvas),this.floorMat.emissive.copy(e.canvas),this.apronMat.color.copy(e.apron),this.apronMat.emissive.copy(e.apron),this.padMats[0].color.copy(e.accentA),this.padMats[0].emissive.copy(e.accentA),this.padMats[1].color.copy(e.accentB),this.padMats[1].emissive.copy(e.accentB),this.stripBase.copy(e.accentA).multiplyScalar(1.6),this.capBase[0].copy(e.accentA).multiplyScalar(1.9),this.capBase[1].copy(e.accentB).multiplyScalar(1.9),this.capBase[2].copy(e.accentA).multiplyScalar(1.9),this.capBase[3].copy(e.accentB).multiplyScalar(1.9);for(let t of this.ropeMats)t.uniforms.uRope0.value.copy(e.rope0),t.uniforms.uRope1.value.copy(e.rope1),t.uniforms.uRope2.value.copy(e.rope2);this.lastRed=-1}kick(e,t){this.s1[e].v+=t,this.s2[e].v-=t*.45}impact(e,t){for(let n=0;n<4;n+=1)this.kick(n,n===e?t:t*.22)}reset(){for(let e of[...this.s1,...this.s2])e.x=0,e.v=0}update(e){for(let t=0;t<4;t++)C_(this.s1[t],b_,e),C_(this.s2[t],x_,e);for(let e of this.ropeMats)e.uniforms.uWob.value.set(this.s1[0].x,this.s1[1].x,this.s1[2].x,this.s1[3].x),e.uniforms.uWob2.value.set(this.s2[0].x,this.s2[1].x,this.s2[2].x,this.s2[3].x),e.uniforms.uGlow.value=g_*this.glow*(1+.25*this.red+.9*this.throb*this.red),e.uniforms.uRed.value=this.red;if(this.red!==this.lastRed&&this.caps){this.lastRed=this.red;let e=this.red,t=this.stripBase;this.stripMat.color.setRGB(t.r+.4*e,t.g*(1-.7*e),t.b*(1-.85*e)),this.capBase.forEach((t,n)=>{this.capCol.copy(t).lerp(__,e),this.caps.setColorAt(n,this.capCol)}),this.caps.instanceColor.needsUpdate=!0}}cullFor(e){let t=vh-.75,n=vh+.5;this.ropes[0].visible=!(e.z<-t&&Math.abs(e.x)<n),this.ropes[1].visible=!(e.x>t&&Math.abs(e.z)<n),this.ropes[2].visible=!(e.z>t&&Math.abs(e.x)<n),this.ropes[3].visible=!(e.x<-t&&Math.abs(e.z)<n)}allTextures(){return this.textures}},T_=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,A=v-w+2*d,j=g-1+3*d,M=_-1+3*d,N=v-1+3*d,P=c&255,F=l&255,ee=u&255,I=this.perm[P+this.perm[F+this.perm[ee]]]%12,te=this.perm[P+y+this.perm[F+b+this.perm[ee+x]]]%12,L=this.perm[P+S+this.perm[F+C+this.perm[ee+w]]]%12,ne=this.perm[P+1+this.perm[F+1+this.perm[ee+1]]]%12,re=.6-g*g-_*_-v*v;re<0?r=0:(re*=re,r=re*re*this._dot3(this.grad3[I],g,_,v));let ie=.6-T*T-E*E-D*D;ie<0?i=0:(ie*=ie,i=ie*ie*this._dot3(this.grad3[te],T,E,D));let ae=.6-O*O-k*k-A*A;ae<0?a=0:(ae*=ae,a=ae*ae*this._dot3(this.grad3[L],O,k,A));let oe=.6-j*j-M*M-N*N;return oe<0?o=0:(oe*=oe,o=oe*oe*this._dot3(this.grad3[ne],j,M,N)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,A=T>E?8:0,j=w>D?4:0,M=T>D?2:0,N=+(E>D),P=O+k+A+j+M+N,F=+(a[P][0]>=3),ee=+(a[P][1]>=3),I=+(a[P][2]>=3),te=+(a[P][3]>=3),L=+(a[P][0]>=2),ne=+(a[P][1]>=2),re=+(a[P][2]>=2),ie=+(a[P][3]>=2),ae=+(a[P][0]>=1),oe=+(a[P][1]>=1),R=+(a[P][2]>=1),z=+(a[P][3]>=1),se=w-F+c,ce=T-ee+c,le=E-I+c,ue=D-te+c,de=w-L+2*c,fe=T-ne+2*c,pe=E-re+2*c,me=D-ie+2*c,B=w-ae+3*c,he=T-oe+3*c,ge=E-R+3*c,_e=D-z+3*c,ve=w-1+4*c,ye=T-1+4*c,be=E-1+4*c,xe=D-1+4*c,Se=h&255,V=g&255,Ce=_&255,we=v&255,H=o[Se+o[V+o[Ce+o[we]]]]%32,Te=o[Se+F+o[V+ee+o[Ce+I+o[we+te]]]]%32,Ee=o[Se+L+o[V+ne+o[Ce+re+o[we+ie]]]]%32,U=o[Se+ae+o[V+oe+o[Ce+R+o[we+z]]]]%32,De=o[Se+1+o[V+1+o[Ce+1+o[we+1]]]]%32,Oe=.6-w*w-T*T-E*E-D*D;Oe<0?l=0:(Oe*=Oe,l=Oe*Oe*this._dot4(i[H],w,T,E,D));let ke=.6-se*se-ce*ce-le*le-ue*ue;ke<0?u=0:(ke*=ke,u=ke*ke*this._dot4(i[Te],se,ce,le,ue));let Ae=.6-de*de-fe*fe-pe*pe-me*me;Ae<0?d=0:(Ae*=Ae,d=Ae*Ae*this._dot4(i[Ee],de,fe,pe,me));let W=.6-B*B-he*he-ge*ge-_e*_e;W<0?f=0:(W*=W,f=W*W*this._dot4(i[U],B,he,ge,_e));let je=.6-ve*ve-ye*ye-be*be-xe*xe;return je<0?p=0:(je*=je,p=je*je*this._dot4(i[De],ve,ye,be,xe)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},E_=.05,D_=.045,O_=.07,k_=.06,A_=1.5,j_=19,M_=class{trauma=0;t=0;noise=new T_({random:N_(11584999)});offset={yaw:0,pitch:0,roll:0,x:0,y:0};add(e){this.trauma=Math.min(1,this.trauma+e)}reset(){this.trauma=0}update(e){this.t+=e,this.trauma=Math.max(0,this.trauma-A_*e);let t=this.trauma*this.trauma,n=this.offset;return n.yaw=E_*t*this.n(1),n.pitch=D_*t*this.n(2),n.roll=O_*t*this.n(3),n.x=k_*t*this.n(4),n.y=k_*t*this.n(5),n}n(e){return this.noise.noise(this.t*j_,e*17.3)}};function N_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var P_=`modulepreload`,F_=function(e,t){return new URL(e,t).href},I_={},L_=function(e){return e.pathname.endsWith(`.css`)},R_=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},z_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=F_(t,n);let r=s(t),i=L_(r);return R_(I_,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:P_,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},B_={krose:.33,aparkat:.33},V_={krose:.65,aparkat:.65},H_=.52,U_=.05,W_=-.06,G_=.3,K_=.3,q_={krose:`hook`,aparkat:`uppercut`},J_={krose:.5,aparkat:1},Y_=.36,X_=.65,Z_=Math.PI*1.5+.75,Q_=.3,$_={x:.3,z:-.12},ev=1.7,tv=.200001,nv=1.1,rv=new K(.75,.88,1.15),iv=new G(-1,.3,-.45),av=new G(0,1.1,-.6);function ov(e,t={}){let n=new fe;n.fog=new v(1182254,5.5,24);let r=new yg,i=new M_,a=new w_,o=new dg,s=new wg(c_),c=new Pg(12),l=new Fg(120),u=new Lg(160);n.add(o.group,a.group,s.mesh,s.flashes.mesh,l.mesh,u.mesh,c.mesh);{let e=location.search;e.includes(`nocrowd`)&&(s.mesh.visible=!1),e.includes(`noarena`)&&(o.group.visible=!1),e.includes(`noring`)&&(a.group.visible=!1),e.includes(`nobeams`)&&o.group.children.forEach(e=>{e.isMesh&&e.renderOrder>=4&&(e.visible=!1)})}let d=new Map,f=new Map,p=new Map,m=Gf(t.loadModel??(t.fighterModels===!1?()=>Promise.resolve(null):e=>z_(()=>import(`./fighterModels-B4RZ4N5K.js`).then(t=>t.loadFighterModel(e)),__vite__mapDeps([0,1]),import.meta.url))),h=new Set,g=new Set,_=e=>!t.awaitModels||g.has(e),y=null,b=null,x=null;function S(){return t.loadExtras?t.loadExtras():t.fighterModels===!1?Promise.resolve({clips:null,glove:null}):Promise.all([z_(()=>import(`./animClips-D_xwgkVR.js`).then(e=>e.loadAnimClips()),[],import.meta.url),z_(()=>import(`./gloveModel-CHqVXxHI.js`).then(e=>e.loadGloveModel()),__vite__mapDeps([2,1,0]),import.meta.url)]).then(([e,t])=>({clips:e,glove:t}))}function C(){return y??=S().catch(()=>({clips:null,glove:null})).then(e=>{b=e.clips,x=e.glove;for(let e of d.values())e.setClips(b)}),y}function w(e){let t=d.get(e);if(!t){let r=p.get(e)??null;t=fh({fighter:e,model:r,clips:b,glove:x}),r&&h.add(e),d.set(e,t),n.add(t.root)}return t}function T(e,t){p.set(e,t);let r=d.get(e);r&&(Oe(),n.remove(r.root),r.dispose(),d.delete(e),f.delete(e));let i=w(e);r?(i.root.position.copy(r.root.position),i.root.rotation.copy(r.root.rotation),i.root.visible=r.root.visible,D(e).loop(`guard`,!0,!0)):i.root.visible=!1,E(i)}function E(e){if(!O||!k||I)return;let t=e.root.visible;e.root.visible=!0,e.update(0);let n=Ue();We(O,!1);for(let e of Ke())O.initTexture(e);n(),k.render(0,oe),e.root.visible=t}function D(e){let t=f.get(e);return t||(t=new mh(w(e)),f.set(e,t)),t}let O=null,k=null,A=null,j=new Ug,M={t:1};function N(){j.blend(M.t);let e=j.cur;a.setPalette(e),o.setPalette(e),s.setPalette(e),n.fog.color.copy(e.fog)}let P=null,F=null,ee=null,I=!1,te=new ou({...nu,maxDpr:l_,...c_?{pixelBudget:u_}:{}}),L=1,ne=1,re=0,ie=null,ae=0,oe=0,R=`demir`,z=`yildirim`,se=1,ce=!1,le=!1,ue=!1,de=null,pe=!1,me={v:0,beat:0},B=!1,he=null,ge=new G(0,1.6,0),_e=new G,ve=new G(0,.45,-.25),ye=new G,be=new G,xe=new Map,Se=new Set,V=45253,Ce=()=>jo(V=Math.imul(V,1664525)+1013904223>>>0),we=()=>D(R),H=()=>D(z),Te=()=>w(R),Ee=()=>w(z);function U(e,t,n=!1){return new Promise(r=>{let i=!1,a=()=>{i||(i=!0,r())},o=J.timeline();t(o),o.call(a,void 0,e),o.eventCallback(`onComplete`,()=>{a(),xe.delete(o),Se.delete(o)}),xe.set(o,a),n&&Se.add(o)})}function De(e){let t=xe.get(e);ue=!0;try{e.progress(1)}finally{ue=!1}t?.(),e.kill(),xe.delete(e),Se.delete(e)}function Oe(){for(let e of[...xe.keys()])De(e)}function ke(e,t){return e.head.getWorldPosition(t),t}function Ae(e){ke(Ee(),e);let t=Te(),n=t.gloveL.getWorldPosition(ye),i=t.gloveR.getWorldPosition(be),a=(n.distanceToSquared(e)<i.distanceToSquared(e)?n:i).sub(e),o=a.length();return o>.001&&e.addScaledVector(a,Math.min(o,.3)/o*.5),ye.copy(r.camera.position).sub(e).normalize(),e.addScaledVector(ye,.18),e}function W(){let e=Te(),t=Ee();for(let e of d.values())e.root.visible=!1;e.root.position.set(Ch.x,0,Ch.z),e.root.rotation.set(0,Math.PI,0),t.root.position.set(wh.x,0,wh.z),t.root.rotation.set(0,0,0),e.root.visible=_(R),t.root.visible=_(z);for(let e of d.values())e.aim(null);e.aim(t.head),t.aim(e.head)}function je(e){e.root.visible&&e.update(ae)}function Me(){J.killTweensOf([r,r.offset,r.lookOffset,s.state,o.fx,a]);for(let e of d.values())J.killTweensOf([e.root.position,e.root.rotation]);k&&J.killTweensOf(k.grade),A&&J.killTweensOf(A.mood)}function Ne(){he?.kill(),he=null,me.beat=0}function Pe(){if(he)return;let e=J.timeline({repeat:-1});e.to(me,{beat:1,duration:.07,ease:`power2.out`},0).to(me,{beat:.22,duration:.16,ease:`power2.in`},.07).to(me,{beat:.8,duration:.07,ease:`power2.out`},.25).to(me,{beat:0,duration:.5,ease:`power2.inOut`},.32).call(()=>{!ue&&B&&(i.add(.12),s.state.jump=Math.max(s.state.jump,.3),a.impact(0,.12))},void 0,0).set({},{},nv),he=e}function Fe(){Me(),Ne(),B=!1,J.killTweensOf(me),me.v=0,r.tension=0,c.clear(),l.clear(),u.clear(),i.reset(),a.reset(),a.glow=1,r.shotMix=0,r.dolly=0,r.fovKick=0,r.roll=0,r.sway=1,r.offset.set(0,0,0),r.lookOffset.set(0,0,0),r.trackX=Je,r.trackBias=0,s.state.hype=.15,s.state.jump=0,o.fx.flare=0,o.fx.chase=1,o.fx.beams=1,o.fx.bulbs=1,k&&Object.assign(k.grade,{zoom:0,aberr:0,speed:0,flash:0,wash:0,desat:0,vignette:.68,blood:0,beat:0}),A&&Object.assign(A.mood,{key:1,rims:1,flash:0,pinkFlash:0})}function Ie(e,t,n,r){A&&!ue&&(A.placeImpact(t),A.mood[e]=n,J.to(A.mood,{[e]:0,duration:r,ease:`power2.out`,overwrite:`auto`}))}function Le(e,t,n){ue||(s.state.jump=Math.max(s.state.jump,e),t>0&&s.flashBurst(t),n!==void 0&&(s.state.hype=Math.max(s.state.hype,n)))}function Re(e){let t=J_[e],n=Ae(_e);if(ge.copy(n),H().act(`hitHeavy`,1),a.impact(0,.7+t*1.2),ue)return;let r=Ce();c.spawn(jg.star,n,.24+t*.1,.18+t*.06,r,{grow:1.6,amp:.8}),l.spray(n,e===`krose`?iv:av,4+Math.round(t*3),3+t*1.2,.6,r,{color:rv,size:.009+t*.002,life:.5,stretch:3.5}),Ie(`flash`,be.copy(n).add(ve),.18+t*.12,.14),i.add(.16+t*.14),J.fromTo(a,{glow:1.3+t*.4},{glow:1,duration:.35,ease:`power2.out`,overwrite:`auto`}),Le(.3+t*.4,2+Math.round(t*3)),s.state.hype=Math.min(1,s.state.hype+.05+t*.08)}function ze(e=Ee()){if(pe||(pe=!0,de=null,a.impact(e===Ee()?0:2,1),ue))return;let t=Ce(),n=ke(e,ye).lerp(e.root.position,.4);n.y=.12,c.spawn(jg.puff,n,.8,.7,t,{grow:2,amp:.6}),i.add(.28),Le(.6,3)}function Be(e){P&&(e&&!F?(F=document.createElement(`div`),F.textContent=`Grafikler yeniden yükleniyor…`,F.style.cssText=`position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#12071f;color:#f4ecff;font:600 18px Oswald,system-ui,sans-serif;letter-spacing:.04em;z-index:2`,P.appendChild(F)):!e&&F&&(F.remove(),F=null))}function Ve(){if(!O)return;let e=te.dpr(L,ne,window.devicePixelRatio||1);O.setPixelRatio(e),O.setSize(L,ne,!1),k?.setSize(L,ne,e)}function He(){if(!O||!P)return;let e=Math.max(1,P.clientWidth||window.innerWidth),t=Math.max(1,P.clientHeight||window.innerHeight);L=e,ne=t,te.reset(),Ve();let n=O.domElement.getBoundingClientRect();r.setCanvas(e,t,n.left,n.top),ie&&r.setRect(ie)}function Ue(){let e=[];for(let t of[c.mesh,l.mesh,u.mesh,s.flashes.mesh]){let n={v:t.visible,c:t.count};t.visible=!0,t.count===0&&(t.count=1),e.push(()=>{t.visible=n.v,t.count=n.c})}for(let t of d.values()){let n=t.root.visible;t.root.visible=!0,e.push(()=>t.root.visible=n)}return()=>e.forEach(e=>e())}function We(e,t){let i=e.getRenderTarget();e.setRenderTarget(k?k.composer.readBuffer:null);let a=t?e.compileAsync(n,r.camera):Promise.resolve(e.compile(n,r.camera));return e.setRenderTarget(i),a}async function Ge(){if(!O)return;let e=Ue();r.update(0,i.offset),await We(O,!0);for(let e of[...a.allTextures(),...o.allTextures(),...s.allTextures(),...Ke()])O.initTexture(e);e()}function Ke(){let e=new Set;for(let t of d.values())t.root.traverse(t=>{let n=t.material;if(n)for(let t of Array.isArray(n)?n:[n]){let n=t.map;n&&e.add(n)}});return[...e]}function qe(){if(!O)return;ee=f_(O),n.environment=ee;let e=Ue();We(O,!1),e()}let Je=.45,Ye=null,Xe=new G,Ze=new G,Qe=new G,$e={x:0,y:0},et={x:0,y:0};function tt(e){ke(Te(),Xe),ke(Ee(),Ze);let t=ye.setFromMatrixColumn(r.camera.matrixWorld,0),n=r.project(Ze,$e),i=n.x,a=n.y,o=Math.abs(r.project(be.copy(Ze).addScaledVector(t,.1),et).x-i);Qe.copy(Xe),Qe.y+=.12;let s=r.project(Qe,$e),c=s.x,l=s.y,u=Math.abs(r.project(be.copy(Qe).addScaledVector(t,.12),et).x-c),d=l-u<a+o*.8,f=Math.abs(c-i)-(u+o)*.85,p=r.trackX;d&&f<0?p=mt.clamp(r.trackX+(c<=i?1:-1)*-f*.005,-1.5,1.5):(!d||f>70)&&(p=Je+(r.trackX-Je)*.9),r.trackX+=(p-r.trackX)*(1-Math.exp(-e*(Math.abs(p)>Math.abs(r.trackX)?10:1.6)))}let nt={async init(e){P=e,getComputedStyle(e).position===`static`&&(e.style.position=`relative`),O=d_(),e.appendChild(O.domElement);let t=Math.max(1,e.clientWidth||window.innerWidth),i=Math.max(1,e.clientHeight||window.innerHeight);L=t,ne=i,O.setPixelRatio(te.dpr(t,i,window.devicePixelRatio||1)),O.setSize(t,i,!1),A=new Kg(n),ee=f_(O),n.environment=ee,n.environmentIntensity=.3,k=s_(O,n,r.camera,t,i,c_),N();let a=O.domElement.getBoundingClientRect();r.setCanvas(t,i,a.left,a.top),ie&&r.setRect(ie),nt.newMatch(R,z);let o=O.domElement;o.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),I=!0,Be(!0)}),o.addEventListener(`webglcontextrestored`,()=>{I=!1,qe(),Be(!1)}),new ResizeObserver(()=>He()).observe(e),await Ge(),nt.update(0),nt.render()},setSceneRect(e){if(ie={...e},O){let e=O.domElement.getBoundingClientRect();r.setCanvas(e.width||window.innerWidth,e.height||window.innerHeight,e.left,e.top)}r.setRect(e)},update(e){ae=e,oe+=e;let t=me.v,n=me.beat;A&&(A.mood.finish=t,A.mood.beat=n),k&&(k.grade.blood=t,k.grade.beat=n),o.fx.red=t,o.fx.throb=n,a.red=t,a.throb=n,s.state.red=t,d.forEach(je),de&&ke(de,ye).y<.62&&ze(de),s.update(e),o.update(e,s.state.hype),a.update(e),c.update(e),l.update(e),u.update(e),A?.update(),Ye===null?tt(e):r.trackX=Ye,r.update(e,i.update(e)),a.cullFor(r.camera.position)},render(){if(!O||!k||I)return;let e=performance.now();re>0&&te.frame(e-re)&&Ve(),re=e,k.render(ae,oe)},async preload(e,t){let n=e===t?[e]:[e,t],[r]=await Promise.all([Promise.all(n.map(e=>m.get(e))),C()]);n.forEach((e,t)=>{let n=r[t];n&&!h.has(e)&&!p.has(e)&&T(e,n),g.add(e)});for(let e of n)(e===R||e===z)&&d.has(e)&&(d.get(e).root.visible=!0)},newMatch(e,t){Oe(),R=e,z=t,se=1,ce=!1,le=!1,de=null,pe=!1,Fe(),W();for(let e of d.values())e.setDamage(0);we().loop(`guard`,!0,!0),H().loop(`guard`,!0,!0)},gong(){return U(.7,e=>{e.fromTo(o.fx,{flare:.6},{flare:0,duration:.5,ease:`power2.out`},0),e.fromTo(a,{glow:1.5},{glow:1,duration:.5,ease:`power2.out`},0),e.call(()=>{Le(.7,4),a.impact(0,.4)},void 0,0),e.to(s.state,{hype:.45,duration:.3,ease:`power2.out`},0),e.to(s.state,{hype:.3,duration:.4,ease:`sine.inOut`},.3),e.call(()=>{we().loop(`bounce`),H().loop(se<=tv?`dizzy`:`bounce`)},void 0,.05)})},punch(e,t,n){let i=q_[e],a=B_[e],o=Te().impactAt(i),s=o>0?o/(a*1e3):1;return U(t?V_[e]:H_,o=>{if(o.call(()=>void we().act(i,s,n===`sol`?`l`:`r`),void 0,0),t)o.call(()=>Re(e),void 0,a);else{let e=n===`sol`?1:-1,t=Ee().root;o.call(()=>void H().act(`slip`,1,e>0?`l`:`r`),void 0,a-.2),o.to(t.position,{x:wh.x+(e>0?U_:W_),duration:.2,ease:`power2.out`},a-.2),o.to(r,{trackBias:e>0?G_:K_,duration:.25,ease:`power2.out`},a-.3),o.call(()=>Le(.15,0),void 0,a)}})},counter(){let e=Ee().impactAt(`counter`),t=e>0?e/(Y_*1e3):1;return U(.39999999999999997,e=>{e.call(()=>void H().act(`counter`,t),void 0,0);let n=Ee().root;e.to(n.position,{x:wh.x,duration:Y_*.8,ease:`power2.inOut`},0),e.to(r,{trackBias:0,duration:.5,ease:`power2.inOut`},0),e.call(()=>{a.impact(2,.9),!ue&&(i.add(.3),Le(.5,2))},void 0,Y_)},!0)},setOpponentHealth(e){se=mt.clamp(e,0,1),Ee().setDamage(1-se);let t=se<=tv||B;!ce&&!le&&H().loop(t?`dizzy`:H().base===`guard`?`guard`:`bounce`,!1)},setPlayerHealth(e){Te().setDamage(1-mt.clamp(e,0,1))},setDifficulty(e){j.target!==e&&(j.begin(e),J.killTweensOf(M),M.t=0,N(),J.to(M,{t:1,duration:.9,ease:`power2.inOut`,onUpdate:N}))},setFinishHim(e){e!==B&&(B=e,J.killTweensOf(me,`v`),J.killTweensOf(r,`tension`),e?(Pe(),J.to(me,{v:1,duration:.7,ease:`power2.out`}),J.to(r,{tension:1,duration:1.8,ease:`sine.inOut`}),J.fromTo(a,{glow:2.4},{glow:1,duration:.8,ease:`power2.out`,overwrite:`auto`}),Le(.9,18,.75),!ce&&!le&&H().loop(`dizzy`,!1)):(J.to(me,{v:0,duration:.6,ease:`power2.inOut`,onComplete:()=>{B||Ne()}}),J.to(r,{tension:0,duration:.6,ease:`power2.inOut`}),!ce&&!le&&se>tv&&H().loop(`bounce`,!1)))},knockout(){let e=Te().impactAt(`uppercut`),t=e>0?e/(X_*1e3):1;return pe=!1,U(2.4,e=>{ce=!0,e.call(()=>void we().act(`uppercut`,t,`r`),void 0,0),e.to(s.state,{hype:.7,duration:.5},0),e.call(()=>{if(H().base=`down`,H().act(`koFall`,1),de=Ee(),a.impact(0,1.6),ue)return;let e=Ae(_e);ge.copy(e),c.spawn(jg.star,e,.5,.3,Ce(),{grow:1.8,amp:.8}),i.add(.4),Le(1,6,1)},void 0,X_),e.call(()=>ze(Ee()),void 0,2.1),e.call(()=>{we().act(`celebrate`),ue||u.burst(ye.set(Ch.x,1.6,Ch.z-.6),15,Ce())},void 0,1.8),e.call(()=>{de=null,H().loop(`down`,!1)},void 0,2.38)},!0)},playerKnockedOut(){return pe=!1,U(1.75,e=>{e.call(()=>{le=!0,we().base=`down`,we().act(`koFall`,ev),de=Te(),a.impact(2,1)},void 0,0),e.to(Te().root.rotation,{y:Z_,duration:Q_,ease:`power2.out`},0),e.to(Ee().root.position,{x:wh.x+$_.x,z:wh.z+$_.z,duration:.5,ease:`power2.out`},.05),e.to(s.state,{hype:.55,duration:.3},0),e.call(()=>{H().base=`bounce`,H().act(`celebrate`)},void 0,.45),e.call(()=>ze(Te()),void 0,.8500000000000001),e.to(s.state,{hype:.3,duration:.5},.55),e.call(()=>{de=null,we().loop(`down`,!1)},void 0,1.03)},!0)},celebrate(){return U(1.2,e=>{e.call(()=>{we().act(`celebrate`),se>tv&&!B&&H().loop(`idle`,!1),a.impact(1,.4),a.impact(3,.4),!ue&&(u.burst(ye.set(Ch.x,1.7,Ch.z-.4),15,Ce()),Le(1,8,.9))},void 0,0),e.fromTo(o.fx,{flare:.3},{flare:0,duration:.7,ease:`power2.out`},0),e.to(o.fx,{chase:3,duration:.2},0),e.to(s.state,{hype:.55,duration:.8},.4),e.call(()=>{!ce&&!le&&H().loop(se<=tv||B?`dizzy`:`bounce`,!1)},void 0,1.15)},!0)},impactScreenPos(){r.camera.updateMatrixWorld();let e=ke(Ee(),new G);return e.y+=.08,r.project(e)},skip(){for(let e of[...Se])De(e)},renderInfo(){return k?{calls:k.stats.calls,triangles:k.stats.triangles}:{calls:0,triangles:0}}};return Object.assign(nt,{__dbg:()=>({p:we().base+`/`+we().current,o:H().base+`/`+H().current,health:se,finishOn:B,palette:j.target}),__act:(e,t)=>{let n=e===`player`?we():H();return n.act(t),n.boxer.impactAt(t)},__view:e=>{Te().root.visible=e===`both`||e===`player`,Ee().root.visible=e===`both`||e===`opponent`},__face:()=>{let e=ke(Ee(),new G),t=new G().setFromMatrixColumn(r.camera.matrixWorld,0).multiplyScalar(.11),n=r.project(e),i=r.project(e.clone().add(t));return{x:n.x,y:n.y,r:Math.abs(i.x-n.x)}},__rig:r,__scene:n,__lock:e=>{Ye=e},__parts:()=>{let e=new G().setFromMatrixColumn(r.camera.matrixWorld,0),t=(t,n)=>{let i=t.getWorldPosition(new G),a=r.project(i),o=r.project(i.clone().addScaledVector(e,n));return{x:a.x,y:a.y,r:Math.abs(o.x-a.x)}},n=e=>({head:t(e.head,.11),gl:t(e.gloveL,.1),gr:t(e.gloveR,.1)});return{player:n(Te()),opp:n(Ee())}},hasModel:e=>h.has(e)}),nt}var sv=`http://www.w3.org/2000/svg`,cv=0,lv=null;function uv(e,t={},n){let r=document.createElementNS(sv,e);for(let[e,n]of Object.entries(t))r.setAttribute(e,String(n));return n&&n.appendChild(r),r}function dv(e,t,n,r){lv??=document.createElement(`canvas`).getContext(`2d`);let i={width:e.length*n*.5,ascent:n*.9,descent:n*.12};if(!lv)return i;lv.font=`400 ${n}px ${t}`;let a=lv.measureText(e),o=a.actualBoundingBoxAscent||i.ascent,s=Math.max(a.actualBoundingBoxDescent||0,n*.04);return{width:a.width+r*Math.max(0,e.length-1),ascent:o,descent:s}}function fv(e,t){let n=`nkc${++cv}`,r=t.font??`'Anton', 'Oswald', Impact, sans-serif`,i=t.spacing??0,a=t.strokeW??Math.max(3,t.size*.14),[o,s]=t.shadowOffset??[t.size*.045,t.size*.07],[c,l]=t.halftoneOffset??[t.size*.09,t.size*.13],u=dv(t.measureAs??e,r,t.size,i),d=a*.6+2,f=Math.max(t.shadow?o:0,t.halftone?c:0,0),p=Math.max(t.shadow?s:0,t.halftone?l:0,0),m=Math.ceil(u.width+d*2+f),h=Math.ceil(u.ascent+u.descent+d*2+p),g=uv(`svg`,{viewBox:`0 0 ${m} ${h}`,width:m,height:h,"aria-label":e,role:`img`});g.classList.add(`nk-comic`),g.style.overflow=`visible`,g.dataset.pl=String(d),g.dataset.pr=String(d+f);let _=uv(`defs`,{},g),v=uv(`linearGradient`,{id:`${n}g`,x1:0,y1:0,x2:0,y2:1},_);if(t.fill.forEach((e,n)=>uv(`stop`,{offset:t.fill.length===1?0:n/(t.fill.length-1),"stop-color":e},v)),t.halftone){let e=Math.max(4,Math.round(t.size*.075)),r=uv(`pattern`,{id:`${n}h`,width:e,height:e,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(30)`},_);uv(`circle`,{cx:e/2,cy:e/2,r:e*.36,fill:t.halftone},r)}let y=t.anchor===`middle`,b=y?d+u.width/2:d,x=d+u.ascent,S={x:b,y:x,"text-anchor":y?`middle`:`start`,"font-family":r,"font-size":t.size,"font-weight":400,"letter-spacing":i,"stroke-linejoin":`round`,"paint-order":`stroke fill`},C=t=>{let n=uv(`text`,{...S,...t},g);return n.textContent=e,n};return t.halftone&&C({x:b+c,y:x+l,fill:`url(#${n}h)`,stroke:`none`}),t.shadow&&C({x:b+o,y:x+s,fill:t.shadow,stroke:t.shadow,"stroke-width":a}),C({fill:`url(#${n}g)`,stroke:t.stroke??`#12071f`,"stroke-width":a}),t.rim&&C({x:b-1,y:x-1.5,fill:`none`,stroke:t.rim,"stroke-width":Math.max(1,t.size*.018),opacity:.7}),g}function $(e,t=``,n,r){let i=document.createElement(e);return t&&(i.className=t),r!==void 0&&(i.textContent=r),n&&n.appendChild(i),i}function pv(e,t,n,r){let i=$(`button`,e,t);return i.type=`button`,i.innerHTML=n,i.addEventListener(`click`,e=>{e.stopPropagation(),i.disabled||r()}),i}function mv(e,t){e.textContent!==t&&(e.textContent=t)}function hv(e,t){e.disabled!==t&&(e.disabled=t)}function gv(e){let t=Math.max(0,Math.round(e)),n=Math.floor(t/100),r=t%100,i=String(n);return n>=1e3&&(i=i.replace(/\B(?=(\d{3})+(?!\d))/g,`.`)),`${i},${r<10?`0`:``}${r}`}function _v(e){return`${gv(e)}x`}function vv(e){return`₺`+String(Math.round(e)).replace(/\B(?=(\d{3})+(?!\d))/g,`.`)}function yv(e,t){return e>=900&&e>t||e>t&&e>=640&&t<520?`desktop`:`mobile`}var bv=class{node;fmt;obj={v:0};tween=null;target=0;constructor(e,t,n=0){this.node=e,this.fmt=t,this.obj.v=n,this.target=n,this.write()}get value(){return this.target}set(e,t=0,n=0){(e!==this.target||!this.tween&&this.obj.v!==e)&&(this.target=e,this.tween?.kill(),this.tween=null,t<=0?(this.obj.v=e,this.write()):this.tween=J.to(this.obj,{v:e,duration:t,delay:n,ease:`power2.out`,onUpdate:()=>this.write(),onComplete:()=>{this.tween=null}}))}write(){mv(this.node,this.fmt(Math.round(this.obj.v)))}},xv=class{p;mode=null;cbs=[];lastKey=``;raf=0;constructor(e){this.p=e,this.applyMode();let t=new ResizeObserver(()=>this.schedule());for(let n of[e.root,e.top,e.dock])t.observe(n);addEventListener(`orientationchange`,()=>this.schedule()),addEventListener(`resize`,()=>this.schedule())}onChange(e){this.cbs.push(e)}update(){this.applyMode();let e=this.sceneRect(),t=`${this.mode}|${e.left}|${e.top}|${e.width}|${e.height}`;if(t!==this.lastKey){this.lastKey=t;for(let e of this.cbs)e()}}sceneRect(){this.applyMode();let e=this.p.root.getBoundingClientRect(),t=this.p.top.getBoundingClientRect(),n=this.p.dock.getBoundingClientRect(),r=Math.round(t.height>0?t.bottom+2:e.top),i=Math.round(n.height>0?n.top-2:e.bottom),a=Math.round(e.left),o=Math.round(e.right);return{left:a,top:r,width:Math.max(1,o-a),height:Math.max(1,i-r)}}schedule(){this.raf||=requestAnimationFrame(()=>{this.raf=0,this.update()})}applyMode(){let e=this.p.root.clientWidth||innerWidth,t=this.p.root.clientHeight||innerHeight,n=yv(e,t),r=this.p.ui;r.classList.toggle(`nk-compact`,n===`mobile`?t<740:t<820),r.classList.toggle(`nk-short`,n===`desktop`&&t<600),r.classList.toggle(`nk-narrow`,e<370),n!==this.mode&&(this.mode=n,r.classList.toggle(`nk-mobile`,n===`mobile`),r.classList.toggle(`nk-desktop`,n===`desktop`))}},Sv=class{set=new Set;add(e){this.set.add(e)}remove(e){this.set.delete(e)}skipAll(){for(let e of[...this.set])this.set.delete(e),e.progress(1)}};function Cv(e,t,n){return new Promise(r=>{let i=J.timeline({onComplete:()=>{e?.remove(i),n(),r()}});t(i),e?.add(i)})}function wv(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Tv=class{fxLayer;overlay;hud;toastTl=null;constructor(e,t,n){this.fxLayer=e,this.overlay=t,this.hud=n}flash(e,t){let n=$(`div`,`nk-flash`,this.fxLayer);n.style.background=e,J.fromTo(n,{opacity:.92},{opacity:0,duration:Math.max(.05,t/1e3),ease:`power1.out`,onComplete:()=>n.remove()})}edge(e,t,n,r,i=0){let a=$(`div`,`nk-edge`,this.fxLayer);a.style.boxShadow=`inset 0 0 90px 24px ${e}, inset 0 0 0 4px ${e}`;let o=Math.max(1,Math.round(t)),s=Math.max(.1,n/1e3/o),c=r??J.timeline({onComplete:()=>a.remove()});c.set(a,{opacity:0},i);for(let e=0;e<o;e++)c.to(a,{opacity:1,duration:s*.3,ease:`power2.out`},i+e*s).to(a,{opacity:e===o-1?0:.35,duration:s*.7,ease:`sine.inOut`},i+e*s+s*.3);return a}shake(e=10,t=.42){J.killTweensOf(this.hud,`x,y`),J.fromTo(this.hud,{x:0,y:0},{keyframes:{x:[-e,e*.85,-e*.6,e*.4,-e*.2,0],y:[e*.4,-e*.35,e*.25,-e*.1,0,0]},duration:t,ease:`none`,onComplete:()=>{J.set(this.hud,{clearProps:`transform`})}})}toast(e,t){this.toastTl?.progress(1);let n=$(`div`,`nk-toast`,this.overlay,e),r=this.overlay.clientWidth||innerWidth;J.set(n,{left:r/2,top:t.top+10,xPercent:-50,opacity:0,y:-12});let i=J.timeline({onComplete:()=>{n.remove(),this.toastTl===i&&(this.toastTl=null)}});i.to(n,{opacity:1,y:0,duration:.22,ease:`back.out(2)`}).to(n,{opacity:0,y:-8,duration:.25,ease:`power2.in`},`+=2.2`),this.toastTl=i}},Ev={dovus:1.1,yenildin:1.3},Dv=class{layer;skips;rect;active=null;constructor(e,t,n){this.layer=e,this.skips=t,this.rect=n}show(e){this.active?.finish();let t=Ev[e],n=$(`div`,`nk-bn is-${e}`,this.layer),r=[],i=null,a=Cv(this.skips,a=>{i=a,e===`dovus`?this.dovus(n,a):r.push(this.yenildin(n,a)),a.set({},{},t)},()=>{n.remove();for(let e of r)e.remove();this.active===o&&(this.active=null)}),o={finish:()=>i?.progress(1)};return this.active=o,a}big(){let e=this.layer.clientWidth||innerWidth,t=this.layer.clientHeight||innerHeight;return e>=900&&e>t}place(e,t=.42){let n=this.rect(),r=this.layer.clientWidth||innerWidth;e.style.left=`${r/2}px`,e.style.top=`${n.top+n.height*t}px`}dovus(e,t){let n=this.big(),r=$(`div`,`nk-bn-stage`,e);this.place(r,.62);let i=$(`div`,`nk-bn-band`,r),a=$(`div`,`nk-bn-lines`,r);for(let e=0;e<4;e++){let t=$(`i`,``,a);t.style.top=`${12+e*22}%`,t.style.width=`${30+e*37%45}%`,t.style.left=`${e*23%60}%`}let o=$(`div`,`nk-bn-word`,r);o.appendChild(fv(`DÖVÜŞ!`,{size:n?140:Math.min(84,(this.layer.clientWidth||innerWidth)*.21),fill:[`#f6ff9a`,`#c6ff2e`,`#43d63a`],stroke:`#0a1f0c`,strokeW:n?16:10,shadow:`#0d4a17`,shadowOffset:n?[7,10]:[4,6],halftone:null,rim:`#ffffff`})),J.set(r,{xPercent:-50,yPercent:-50}),J.set(i,{rotation:-5}),t.fromTo(i,{scaleX:0,opacity:1},{scaleX:1,duration:.18,ease:`power3.out`},0).fromTo(a.children,{xPercent:-120,opacity:0},{xPercent:140,opacity:.9,duration:.5,ease:`power2.out`,stagger:.03},.05).fromTo(o,{scale:3,rotation:-16},{scale:1,rotation:-7,duration:.15,ease:`power2.in`},.02).fromTo(o,{opacity:0},{opacity:1,duration:.05,ease:`none`},.02).to(r,{keyframes:{x:[-14,12,-8,5,-2,0],y:[8,-6,4,-2,0,0]},duration:.3,ease:`none`},.17).to(o,{scale:1.06,duration:.55,ease:`sine.inOut`},.3).to(o,{scale:1.9,opacity:0,rotation:-2,duration:.24,ease:`power2.in`},.86).to(i,{scaleY:0,opacity:0,duration:.2,ease:`power2.in`},.9)}yenildin(e,t){let n=this.big();e.classList.add(`nk-lose`);let r=$(`div`,`nk-bn-stage`,e);this.place(r,.62),J.set(r,{xPercent:-50,yPercent:-50});let i=$(`div`,`nk-lose-word`,r),a=this.layer.clientWidth||innerWidth,o=n?96:Math.min(64,a*.15);return i.appendChild(fv(`NAKAVT!`,{size:o,fill:[`#ffd2d6`,`#ff3a55`,`#a8001c`],stroke:`#14000a`,strokeW:o*.13,shadow:`#14000a`,shadowOffset:[o*.04,o*.07],halftone:null,rim:`#ffffff`})),t.fromTo(i,{scale:2.2,rotation:-12,opacity:0},{scale:1,rotation:-6,opacity:1,duration:.16,ease:`power2.in`},.02).to(i,{keyframes:{x:[-6,5,-3,0]},duration:.2,ease:`none`},.18).to(i,{scale:1.05,duration:.6,ease:`sine.inOut`},.38).to(i,{opacity:0,y:14,duration:.24,ease:`power2.in`},1.04),r}},Ov=`<rect x="3" y="14" width="11" height="21" rx="3.5" fill="#fff" stroke="#c9bfe0" stroke-width="1.2"/><path d="M11 17C11 11.5 16 9 22 9H31C39 9 44 14.5 44 21.5V25C44 32.5 39 38 31.5 38H22C15.5 38 11 35.5 11 31.5Z" fill="#e8283f"/><path d="M11 31.5C11 35.5 15.5 38 22 38H31.5C39 38 44 32.5 44 25V24C42 30 37 33 31 33H20C14 33 11.5 31.5 11 29Z" fill="#b8132b"/><path d="M18.5 27C18.5 23 25 22.5 29.5 24.5 33.5 26.5 32.5 32.5 26 32.5 21.5 32.5 18.5 31 18.5 27Z" fill="#c9162f"/><path d="M34 18.5H43" stroke="#b8132b" stroke-width="1.8" stroke-linecap="round"/><path d="M18 14.5C22 12.2 28 12 33 13.2" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="2.8" stroke-linecap="round"/><circle cx="37.5" cy="14" r="1.5" fill="#fff" fill-opacity=".75"/>`,kv=(e,t,n,r)=>`<g transform="translate(${e} ${t}) rotate(${n}) scale(${r}) translate(-24 -24)">${Ov}</g>`,Av=e=>`<g fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${e}</g>`,jv=e=>`<svg viewBox="0 0 48 48" aria-hidden="true">${e}</svg>`,Mv=jv(`${Av(`<path d="M1 16.5h5M0.5 24h6M1 31.5h5"/>`)}${kv(29.5,24,0,.9)}`),Nv=`<img src="assets/ui/glove-icon.webp" alt="" draggable="false" decoding="async">`;function Pv(e){e.innerHTML=Nv,e.querySelector(`img`)?.addEventListener(`error`,()=>{e.innerHTML=Mv},{once:!0})}jv(`${Av(`<path d="M3.5 40C2 26 10 13 23 8"/>`)}${kv(28,27,-24,.88)}`),jv(`${Av(`<path d="M12.5 33v9M35.5 33v9"/>`)}${kv(24,21,-90,.84)}`);var Fv={soundOn:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,soundOff:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 9.5l5 5M21.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,rules:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M9.3 9.3a2.8 2.8 0 1 1 3.9 2.6c-.8.4-1.2 1-1.2 1.8v.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="17.2" r="1.35" fill="currentColor"/></svg>`,swap:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h13M13.5 4.5 17 8l-3.5 3.5M20 16H7M10.5 12.5 7 16l3.5 3.5" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,close:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,minus:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>`,plus:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>`,timer:`<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13.5" r="7.5" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M12 13.5V9.5M9.5 2.8h5M18.5 6.5l1.6-1.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,bell:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6a1.6 1.6 0 0 1 1.6 1.6v.7a6.6 6.6 0 0 1 5 6.4v4.2l2 2.6H3.4l2-2.6v-4.2a6.6 6.6 0 0 1 5-6.4v-.7A1.6 1.6 0 0 1 12 2.6z" fill="currentColor"/><path d="M9.4 20.2a2.6 2.6 0 0 0 5.2 0z" fill="currentColor"/></svg>`,cash:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 15.5h3.2l3.6 2.4c.8.5 1.8.6 2.7.2l7.4-3.4c.9-.4 1-1.6.2-2.1-.5-.3-1.1-.3-1.6 0l-4 1.9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.7 15.5l2.6-2.2c.6-.5 1.3-.7 2-.7h3.3c.8 0 1.3.9.9 1.6-.2.4-.6.6-1 .6H10.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="6.6" r="3.8" fill="currentColor"/><path d="M15 4.6v4" stroke="#0b2a07" stroke-width="1.6" stroke-linecap="round"/></svg>`,trophy:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h10v5a5 5 0 0 1-10 0z" fill="currentColor"/><path d="M7 5.5H3.8a3.4 3.4 0 0 0 3.6 4.2M17 5.5h3.2a3.4 3.4 0 0 1-3.6 4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.5 13h3l.6 3.8h-4.2zM7.5 17.5h9v3h-9z" fill="currentColor"/></svg>`,hand:`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 27V9.5a3 3 0 0 1 6 0V22l9.6 1.6c2.6.4 4.3 2.9 3.8 5.4L36.6 38c-.5 2.6-2.8 4.5-5.5 4.5H24c-1.8 0-3.5-.9-4.6-2.4L12.3 30c-1-1.4-.6-3.4.9-4.3 1.2-.8 2.8-.6 3.8.4z" fill="#f4ecff" stroke="#12071f" stroke-width="2.4" stroke-linejoin="round"/><path d="M25 22v7M30 23v6M35 24.2V29" stroke="#12071f" stroke-width="2" stroke-linecap="round"/></svg>`},Iv=`#12071f`,Lv={demir:{base:`#8f5433`,shade:`#643620`,light:`#b8724a`},yildirim:{base:`#f3c6a0`,shade:`#d9946c`,light:`#ffe4cc`}};function Rv(e,t,n,r){return`<g transform="translate(${e} ${t}) rotate(${n}) scale(${r?-1:1} 1)" stroke="${Iv}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M-22 22 L20 26 L18 46 L-20 42 Z" fill="#f4ecff"/>
    <path d="M-22 31 L19 35" stroke="#ff2d4f" stroke-width="4"/>
    <path d="M-31 -6 C-32 -30 -12 -38 6 -36 C27 -34 36 -17 34 4 C32 24 17 32 -1 32 C-20 32 -30 20 -31 -6 Z" fill="#ff2d4f"/>
    <path d="M14 -2 C25 -6 35 3 31 14 C28 23 15 23 11 15 C9 9 10 2 14 -2 Z" fill="#c8102e"/>
    <path d="M-14 -24 C-6 -31 8 -31 16 -26" stroke="#fff" stroke-width="6" fill="none" opacity=".7"/>
    <path d="M26 -14 C31 -6 31 4 28 10" stroke="#9d0b25" stroke-width="3" fill="none" opacity=".6"/>
  </g>`}function zv(e){return`
  <path d="M-6 230 L-6 190 C-2 162 28 146 62 140 L82 131 L118 131 L138 140 C172 146 202 162 206 190 L206 230 Z" fill="${e.base}" stroke="${Iv}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M150 146 C176 154 198 168 206 190 L206 230 L170 230 C172 200 166 170 150 146 Z" fill="${e.shade}"/>
  <path d="M56 178 C74 192 92 190 100 180 C108 190 126 192 144 178" fill="none" stroke="${Iv}" stroke-width="3" stroke-linecap="round" opacity=".55"/>
  <path d="M100 182 L100 214" fill="none" stroke="${Iv}" stroke-width="3" stroke-linecap="round" opacity=".45"/>
  <path d="M74 98 L74 134 C86 146 114 146 126 134 L126 98 Z" fill="${e.shade}" stroke="${Iv}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M82 134 C90 140 110 140 118 134" fill="none" stroke="${Iv}" stroke-width="2.5" opacity=".5"/>`}function Bv(e){return`
  <path d="M59 70 C50 67 47 80 52 89 C55 95 62 95 64 90" fill="${e.base}" stroke="${Iv}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M141 70 C150 67 153 80 148 89 C145 95 138 95 136 90" fill="${e.shade}" stroke="${Iv}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M100 24 C127 24 141 45 141 71 C141 92 137 106 128 117 C120 127 110 131 100 131 C90 131 80 127 72 117 C63 106 59 92 59 71 C59 45 73 24 100 24 Z" fill="${e.base}" stroke="${Iv}" stroke-width="4"/>
  <path d="M121 30 C135 39 141 55 141 71 C141 92 137 106 128 117 C123 111 126 96 126 80 C126 58 123 42 121 30 Z" fill="${e.shade}"/>`}function Vv(){let e=Lv.demir;return`${zv(e)}${Bv(e)}
  <ellipse cx="84" cy="40" rx="13" ry="6" transform="rotate(-24 84 40)" fill="#fff" opacity=".32"/>
  <path d="M69 59 L96 68 L95 75 L68 66 Z" fill="${Iv}"/>
  <path d="M131 59 L104 68 L105 75 L132 66 Z" fill="${Iv}"/>
  <path d="M73 76 C80 71.5 90 73 95 78 C88 82.5 79 82 73 76 Z" fill="#fff" stroke="${Iv}" stroke-width="2.5"/>
  <path d="M127 76 C120 71.5 110 73 105 78 C112 82.5 121 82 127 76 Z" fill="#fff" stroke="${Iv}" stroke-width="2.5"/>
  <circle cx="87" cy="77.5" r="3.4" fill="${Iv}"/><circle cx="113" cy="77.5" r="3.4" fill="${Iv}"/>
  <path d="M96 80 L93 95 C88 97 87 102 91 104 C96 106.5 104 106.5 109 104 C113 102 112 97 107 95 L104 80" fill="${e.shade}" stroke="${Iv}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M60 82 C60 110 72 134 100 139 C128 134 140 110 140 82 C136 96 129 104 123 106 C115 100 108 99 100 101 C92 99 85 100 77 106 C71 104 64 96 60 82 Z" fill="#1d1210" stroke="${Iv}" stroke-width="3.5" stroke-linejoin="round"/>
  <path d="M70 112 L74 120 M80 124 L83 131 M120 124 L117 131 M130 112 L126 120" stroke="#3b2a24" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M87 111 C94 108.5 106 108.5 113 111 L111 119 C104 121.5 96 121.5 89 119 Z" fill="#fff" stroke="${Iv}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M88 115 H112 M94 110 V120 M100 109.5 V121 M106 110 V120" stroke="${Iv}" stroke-width="1.6"/>
  <path d="M117 46 l6 -4 M120 52 l6 -3" stroke="${e.shade}" stroke-width="2.5" stroke-linecap="round"/>`}function Hv(){let e=Lv.yildirim;return`${zv(e)}
  <path d="M113 144 L93 174 L105 174 L92 206 L122 166 L109 166 L120 144 Z" fill="#2ee6ff" stroke="${Iv}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M112 150 L100 169" stroke="#c9fbff" stroke-width="2" stroke-linecap="round"/>
  ${Bv(e)}

  <path d="M64 58 C66 40 78 30 86 30 L86 52 C78 54 70 56 64 58 Z M136 58 C134 40 122 30 114 30 L114 52 C122 54 130 56 136 58 Z" fill="#e2a982" opacity=".75"/>
  <path d="M83 37 L72 4 L89 17 L88 -20 L101 9 L109 -26 L112 11 L127 -4 L118 37 C108 31.5 93 31.5 83 37 Z" fill="#ffd23f" stroke="${Iv}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M109 -26 L112 11 L127 -4 L118 37 C114 34.5 110 33.5 106 33 L106 6 Z" fill="#f59f00"/>
  <path d="M90 -8 L93 14 M79 10 L86 24 M100 4 L101 18" stroke="#fff6c4" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>
  <path d="M70 62 L95 67 L94 73 L69 68 Z" fill="#c98a12" stroke="${Iv}" stroke-width="2"/>
  <path d="M130 62 L105 67 L106 73 L131 68 Z" fill="#c98a12" stroke="${Iv}" stroke-width="2"/>
  <path d="M73 77 C80 72.5 90 74 95 79 C88 83.5 79 83 73 77 Z" fill="#fff" stroke="${Iv}" stroke-width="2.5"/>
  <path d="M127 77 C120 72.5 110 74 105 79 C112 83.5 121 83 127 77 Z" fill="#fff" stroke="${Iv}" stroke-width="2.5"/>
  <circle cx="87" cy="78.5" r="3.6" fill="#2e7bff" stroke="${Iv}" stroke-width="1.4"/><circle cx="113" cy="78.5" r="3.6" fill="#2e7bff" stroke="${Iv}" stroke-width="1.4"/>
  <circle cx="87" cy="78.5" r="1.4" fill="${Iv}"/><circle cx="113" cy="78.5" r="1.4" fill="${Iv}"/>
  <path d="M98 82 L95 96 C92 98 92 102 95 103 C98 104.5 102 104.5 105 103 C108 102 108 98 105 96" fill="${e.shade}" stroke="${Iv}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M84 109 C92 104 108 104 116 109 C113 121 104 125 100 125 C96 125 87 121 84 109 Z" fill="#5a0f1d" stroke="${Iv}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M86 109.5 C94 106 106 106 114 109.5 L112.5 113 C104 111 96 111 87.5 113 Z" fill="#fff"/>
  <path d="M93 121 C97 118.5 103 118.5 107 121" stroke="#ff6b81" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path d="M97 127 C99 129 101 129 103 127" fill="none" stroke="${Iv}" stroke-width="2" stroke-linecap="round" opacity=".5"/>
  <path d="M75 46 C82 41 92 40 98 41" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".35" fill="none"/>`}var Uv={demir:`demir`,yildirim:`yildirim`,kralice:`demir`,firtina:`yildirim`};function Wv(e,t){let n=Uv[e],r=n===`demir`?Vv():Hv();return t===`head`?`<svg viewBox="${n===`demir`?`42 18 116 116`:`42 6 116 116`}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${r}</svg>`:`<svg viewBox="-6 -40 212 266" preserveAspectRatio="xMidYMax meet" aria-hidden="true">${r}${Rv(46,172,-12,!1)+Rv(156,166,10,!0)}</svg>`}function Gv(e,t,n){e.innerHTML=Wv(t,n);let r=new Image;r.alt=``,r.decoding=`async`,r.className=`nk-face is-${n}`,r.draggable=!1,r.addEventListener(`load`,()=>{(e.dataset.f===void 0||e.dataset.f===t)&&(e.querySelector(`svg`)?.remove(),e.appendChild(r))}),r.src=`assets/fighters/${t}-portrait.webp`}var Kv={demir:{color:`#ff8a1f`,color2:`#ff3d5a`},yildirim:{color:`#2ee6ff`,color2:`#3d6bff`},kralice:{color:`#b45cff`,color2:`#ffcf3d`},firtina:{color:`#ff4fa3`,color2:`#3dff8a`}};function qv(e,t){e.innerHTML=Wv(t,`bust`);let n=new Image;n.alt=``,n.decoding=`async`,n.className=`nk-splash`,n.draggable=!1;let r=!1;n.addEventListener(`load`,()=>{n.decode().catch(()=>void 0).then(()=>{e.querySelector(`svg`)?.remove(),e.appendChild(n)})}),n.addEventListener(`error`,()=>{r||(r=!0,n.classList.add(`is-portrait`),n.src=`assets/fighters/${t}-portrait.webp`)}),n.src=`assets/fighters/${t}-splash.webp`}var Jv={KOLAY:{c1:`#7dff3a`,c2:`#22c55e`,ink:`#062a0a`},ORTA:{c1:`#6bf0ff`,c2:`#2e8bff`,ink:`#05163a`},ZOR:{c1:`#ffc23f`,c2:`#ff6a1f`,ink:`#3a1500`},COK_ZOR:{c1:`#ff6b8a`,c2:`#d4001f`,ink:`#ffffff`}},Yv=[-2,-1,0,1,2];function Xv(e,t){return t===0?100:t<0||t>e.length?null:e[t-1]??null}var Zv=class{h;root;soundBtn;swapBtn;strip;track;slots;flash;picL;picR;nameL;nameR;level;levelShown=null;soundOn=!0;fighter=null;opponent=null;ladder=[];index=0;mood=`live`;constructor(e){this.h=e,this.root=$(`div`,`nk-top`);let t=$(`div`,`nk-topbar`,this.root);$(`span`,`nk-badge-demo`,$(`div`,`nk-top-l`,t),`DEMO`),this.strip=$(`div`,`nk-strip`,t),this.strip.setAttribute(`role`,`status`),this.strip.setAttribute(`aria-label`,`Çarpan`),this.flash=$(`i`,`nk-strip-flash`,this.strip),J.set(this.flash,{opacity:0}),this.track=$(`div`,`nk-strip-track`,this.strip),this.slots=Yv.map(e=>$(`span`,`nk-st ${e===0?`is-cur`:`is-side is-d${Math.abs(e)}`}`,this.track));let n=$(`div`,`nk-top-r`,t);this.swapBtn=pv(`nk-icon-btn nk-swap`,n,`${Fv.swap}<span>BOKSÖR</span>`,()=>this.h.openFighters()),this.swapBtn.setAttribute(`aria-label`,`Boksör değiştir`),this.soundBtn=pv(`nk-icon-btn`,n,Fv.soundOn,()=>this.h.toggleSound()),this.soundBtn.setAttribute(`aria-label`,`Ses aç/kapa`),pv(`nk-icon-btn`,n,Fv.rules,()=>this.h.openRules()).setAttribute(`aria-label`,`Kurallar`);let r=$(`div`,`nk-vs`,this.root),i=$(`div`,`nk-vs-side is-l`,r);this.picL=$(`div`,`nk-vs-pic`,i),this.nameL=$(`b`,`nk-vs-name`,i,`DEMİR`),this.picL.addEventListener(`click`,()=>{this.swapBtn.disabled||this.h.openFighters()});let a=$(`div`,`nk-vs-mid`,r);this.level=$(`span`,`nk-level-badge`,a,`ORTA`);let o=$(`div`,`nk-vs-side is-r`,r);this.nameR=$(`b`,`nk-vs-name`,o,`YILDIRIM`),this.picR=$(`div`,`nk-vs-pic`,o),this.write()}render(e,t){if(t!==this.soundOn&&(this.soundOn=t,this.soundBtn.innerHTML=t?Fv.soundOn:Fv.soundOff,this.soundBtn.classList.toggle(`is-off`,!t)),hv(this.swapBtn,!e.canChangeFighter),this.picL.classList.toggle(`is-clickable`,e.canChangeFighter),e.difficulty!==this.levelShown){this.levelShown=e.difficulty;let t=Jv[e.difficulty];this.level.style.setProperty(`--l1`,t.c1),this.level.style.setProperty(`--l2`,t.c2),this.level.style.setProperty(`--li`,t.ink),mv(this.level,df[e.difficulty]),this.level.setAttribute(`aria-label`,`Zorluk ${df[e.difficulty]}`)}if(e.fighter!==this.fighter||e.opponent!==this.opponent){let t=this.fighter===null;this.fighter=e.fighter,this.opponent=e.opponent,this.picL.dataset.f=e.fighter,this.picR.dataset.f=e.opponent,Gv(this.picL,e.fighter,`head`),Gv(this.picR,e.opponent,`head`),mv(this.nameL,rf[e.fighter].name),mv(this.nameR,rf[e.opponent].name),t||J.fromTo([this.picL,this.picR],{scale:.6},{scale:1,duration:.35,ease:`back.out(2.5)`})}}get shownIndex(){return this.index}setStrip(e,t,n=`live`){this.ladder=e,this.index=t,this.setMood(n),this.write()}advance(e,t){let n=t>this.index;this.ladder=e,this.index=t,this.setMood(`live`),this.write();let[r,i,a,o,s]=this.slots;if(J.killTweensOf([this.track,this.flash,...this.slots]),J.set(this.slots,{clearProps:`transform,opacity`}),!n){J.fromTo(a,{scale:1.15},{scale:1,duration:.3,ease:`back.out(3)`});return}let c=o.offsetLeft+o.offsetWidth/2-(a.offsetLeft+a.offsetWidth/2),l=o.offsetHeight>0&&a.offsetHeight>0?o.offsetHeight/a.offsetHeight:.45;J.from(this.track,{x:c,duration:.34,ease:`power3.out`}),J.from(a,{scale:l,opacity:.6,duration:.34,ease:`power3.out`}),J.from(i,{scale:1/l,opacity:1,duration:.34,ease:`power3.out`}),J.from([r,o,s],{opacity:0,duration:.34,ease:`power2.out`}),J.fromTo(this.flash,{opacity:.7},{opacity:0,duration:.45,ease:`power2.out`})}end(e){this.setMood(e);let t=this.slots[2];J.killTweensOf([this.track,t]),e===`lost`?J.fromTo(this.track,{x:0},{keyframes:{x:[-8,7,-5,3,0]},duration:.4,ease:`none`}):J.fromTo(t,{scale:1.2},{scale:1,duration:.4,ease:`back.out(3)`})}setMood(e){e!==this.mood&&(this.mood=e,this.strip.classList.toggle(`is-lost`,e===`lost`),this.strip.classList.toggle(`is-won`,e===`won`))}write(){Yv.forEach((e,t)=>{let n=this.slots[t],r=Xv(this.ladder,this.index+e);mv(n,r===null?``:`${gv(r)}x`),n.classList.toggle(`is-empty`,r===null)});let e=Xv(this.ladder,this.index);this.strip.setAttribute(`aria-label`,`Çarpan ${e===null?``:gv(e)}x`)}};function Qv(e){return(e.state===`BEKLE`||e.state===`RAKIP`||e.state===`HAZIR`)&&e.balanceKurus<e.betTL*100}function $v(e){return e.state===`BEKLE`||e.state===`RAKIP`||e.state===`HAZIR`}function ey(e,t,n=!0){if($v(e))return Qv(e)?{kind:`refill`,enabled:e.state!==`RAKIP`}:{kind:`start`,enabled:e.canStart};switch(e.state){case`HAMLE`:return{kind:e.canCashout&&t>0?`cash`:`wait`,enabled:e.canCashout&&t>0};case`KARSI`:return n?{kind:`lost`,enabled:!1}:{kind:t>0?`cash`:`wait`,enabled:!1};case`PARAYI_AL`:return{kind:`won`,enabled:!1};default:return{kind:t>0?`cash`:`wait`,enabled:!1}}}var ty=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.2v13.6c0 .8.9 1.3 1.6.8l10-6.8c.6-.4.6-1.2 0-1.6l-10-6.8C8.9 3.9 8 4.4 8 5.2z" fill="currentColor"/></svg>`,ny=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,ry=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,iy={sol:`←`,sag:`→`},ay=class{root;value;up;down;constructor(e,t,n,r,i){this.root=$(`div`,`nk-stepper ${t}`,e);let a=$(`div`,`nk-stepper-text`,this.root);$(`span`,`nk-lbl`,a,n),this.value=$(`b`,`nk-stepper-val`,a);let o=$(`div`,`nk-stepper-arrows`,this.root);this.up=pv(`nk-arrow is-up`,o,ny,()=>i(1)),this.up.setAttribute(`aria-label`,r[0]),this.down=pv(`nk-arrow is-down`,o,ry,()=>i(-1)),this.down.setAttribute(`aria-label`,r[1])}pop(){J.fromTo(this.value,{scale:1.2},{scale:1,duration:.28,ease:`back.out(3)`,overwrite:`auto`})}},oy=class{intent;root;infoL;infoR;infoRLbl;balCounter;rightCounter;bet;level;punches=new Map;round;roundLbl;roundAmt;roundIco;amtCounter;kind=null;prev=null;lastPay=0;pulse=null;halo;constructor(e){this.intent=e,this.root=$(`section`,`nk-dock is-pre`),this.root.setAttribute(`aria-label`,`Bahis ve kontroller`);let t=$(`div`,`nk-dock-info`,this.root);this.infoL=$(`div`,`nk-info is-l`,t),$(`span`,`nk-lbl`,this.infoL,`BAKİYE`),this.balCounter=new bv($(`b`,`nk-info-val is-bal`,this.infoL),Io),this.infoR=$(`div`,`nk-info is-r`,t),this.infoRLbl=$(`span`,`nk-lbl`,this.infoR,`KAZANÇ`),this.rightCounter=new bv($(`b`,`nk-info-val is-win`,this.infoR),Io);let n=$(`div`,`nk-dock-main`,this.root),r=$(`div`,`nk-dock-side is-l`,n),i=$(`div`,`nk-dock-mid`,n),a=$(`div`,`nk-dock-side is-r`,n);this.bet=new ay(r,`is-bet`,`BAHİS`,[`Bahsi artır`,`Bahsi azalt`],e=>this.intent({type:`betStep`,dir:e})),this.level=new ay(a,`is-level`,`ZORLUK`,[`Zorluğu artır`,`Zorluğu azalt`],e=>this.stepLevel(e));for(let e of of){let t=e===`sol`?r:a,n=pv(`nk-punch is-${e}`,t,``,()=>{this.press(e),this.intent({type:`punch`,side:e})});n.setAttribute(`aria-label`,`${sf[e]} yumruk (${iy[e]})`),Pv($(`span`,`nk-punch-ico`,n)),$(`span`,`nk-punch-lbl`,n,sf[e]),this.punches.set(e,n)}this.round=pv(`nk-round is-start`,i,``,()=>this.pressRound()),this.halo=$(`i`,`nk-round-halo`,this.round),J.set(this.halo,{opacity:0});let o=$(`span`,`nk-round-in`,this.round);this.roundIco=$(`span`,`nk-round-ico`,o),this.roundIco.innerHTML=ty,this.roundLbl=$(`span`,`nk-round-lbl`,o,`BAŞLA`),this.roundAmt=$(`span`,`nk-round-amt`,o,``),this.amtCounter=new bv(this.roundAmt,Io)}render(e,t,n=!0){let r=this.prev;this.prev=e;let i=$v(e);this.root.classList.toggle(`is-pre`,i),this.root.classList.toggle(`is-round`,!i),r?e.balanceKurus>this.balCounter.value?this.balCounter.set(e.balanceKurus,.9,.1):this.balCounter.set(e.balanceKurus,.2):this.balCounter.set(e.balanceKurus),e.state===`DOVUS`?this.lastPay=0:e.state===`PARAYI_AL`&&(this.lastPay=t),mv(this.infoRLbl,i?`KAZANÇ`:`BAHİS`),this.infoR.classList.toggle(`is-bet`,!i),this.rightCounter.set(i?this.lastPay:e.betTL*100),mv(this.bet.value,vv(e.betTL)),hv(this.bet.up,!e.canBetUp),hv(this.bet.down,!e.canBetDown),r&&r.betTL!==e.betTL&&this.bet.pop();let a=uf.indexOf(e.difficulty);mv(this.level.value,df[e.difficulty]),this.level.value.style.color=Jv[e.difficulty].c1,hv(this.level.up,!e.canChangeDifficulty||a>=uf.length-1),hv(this.level.down,!e.canChangeDifficulty||a<=0),r&&r.difficulty!==e.difficulty&&this.level.pop();for(let t of this.punches.values())hv(t,!e.canPunch);this.root.classList.toggle(`is-ready`,e.canPunch);let o=ey(e,t,n);if(o.kind!==this.kind){this.kind=o.kind,this.round.className=`nk-round is-${o.kind}`,this.roundIco.hidden=o.kind!==`start`;let e={start:`BAŞLA`,refill:`YENİLE`,cash:`PARAYI AL`,wait:`PARAYI AL`,lost:`NAKAVT`,won:`KAZANDIN`};mv(this.roundLbl,e[o.kind]),this.round.setAttribute(`aria-label`,o.kind===`start`?`Raundu başlat (Boşluk)`:o.kind===`refill`?`Demo bakiyeyi yenile`:`${e[o.kind]} (C)`),r&&J.fromTo(this.round,{scale:.9},{scale:1,duration:.3,ease:`back.out(2.5)`})}hv(this.round,!o.enabled),this.round.classList.toggle(`is-off`,!o.enabled);let s=o.kind===`cash`||o.kind===`wait`||o.kind===`lost`||o.kind===`won`;if(this.roundAmt.hidden=!s,s){if(o.kind===`lost`)this.amtCounter.set(t>0?t:e.betTL*100);else if(o.kind===`wait`&&t<=0)this.amtCounter.set(0),mv(this.roundAmt,`—`);else{let e=t>this.amtCounter.value&&r!==null;this.amtCounter.set(t,e?.4:0)}}this.setPulse(o.enabled&&(o.kind===`start`||o.kind===`cash`))}bumpAmount(){J.fromTo(this.roundAmt,{scale:1.3},{scale:1,duration:.35,ease:`back.out(3)`,overwrite:`auto`})}pressRound(){this.prev&&!this.round.disabled&&(J.fromTo(this.round,{scale:.92},{scale:1,duration:.3,ease:`back.out(3)`}),this.kind===`start`?this.intent({type:`start`}):this.kind===`refill`?this.intent({type:`resetBalance`}):this.kind===`cash`&&this.intent({type:`cashout`}))}press(e){let t=this.punches.get(e);if(!t||t.disabled)return;let n=t.firstElementChild;J.killTweensOf(t),J.fromTo(t,{scale:.94},{scale:1,duration:.28,ease:`back.out(3)`}),n&&J.fromTo(n,{x:0},{x:e===`sol`?-7:7,duration:.08,ease:`power3.out`,yoyo:!0,repeat:1})}stepLevel(e){let t=this.prev;if(!t)return;let n=uf[uf.indexOf(t.difficulty)+e];n&&this.intent({type:`difficulty`,level:n})}setPulse(e){e!==(this.pulse!==null)&&(this.pulse?.kill(),this.pulse=null,e?this.pulse=J.fromTo(this.halo,{opacity:.7,scale:1},{opacity:0,scale:1.22,duration:1.1,ease:`power1.out`,repeat:-1}):J.set(this.halo,{opacity:0,scale:1}))}},sy=af,cy=class{layer;onPick;instant;root=null;cards=new Map;closing=!1;constructor(e,t,n=!1){this.layer=e,this.onPick=t,this.instant=n,document.addEventListener(`keydown`,e=>{this.root&&!this.closing&&(e.key===`Escape`&&this.root.querySelector(`.nk-fs-x`)?(e.preventDefault(),this.close()):/^[1-9]$/.test(e.key)&&Number(e.key)<=sy.length?(e.preventDefault(),this.choose(sy[Number(e.key)-1])):(e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),this.step(e.key===`ArrowLeft`||e.key===`ArrowUp`?-1:1)))})}get isOpen(){return this.root!==null}open(e,t){if(this.root)return;this.closing=!1;let n=$(`div`,`nk-fs`,this.layer);this.root=n,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`aria-label`,`Boksörünü seç`),n.addEventListener(`pointerdown`,e=>e.stopPropagation());let r=$(`div`,`nk-fs-bg`,n);$(`i`,`nk-fs-glow is-a`,r),$(`i`,`nk-fs-glow is-b`,r);let i=$(`div`,`nk-fs-head`,n),a=innerWidth>=900&&innerWidth>innerHeight;i.appendChild(fv(`BOKSÖRÜNÜ SEÇ`,{size:a?52:34,fill:[`#ffffff`,`#c9f4ff`,`#6fd6ff`],stroke:`#08183a`,strokeW:a?9:7,shadow:`#1d6bff`,shadowOffset:[4,5],halftone:null})),$(`div`,`nk-fs-sub`,i,`Hepsi eşit güçte. Rakibin her rauntta diğer üç boksörden biri.`);let o=$(`div`,`nk-fs-cards`,n);this.cards.clear();let s=[];for(let t of sy){let n=this.buildCard(t,t===e);o.appendChild(n),s.push(n),this.cards.set(t,n)}t&&pv(`nk-fs-x`,n,Fv.close,()=>this.close()).setAttribute(`aria-label`,`Kapat`);let c=J.timeline();c.fromTo(n,{opacity:0},{opacity:1,duration:.2,ease:`power1.out`},0).fromTo(i,{y:-30,opacity:0},{y:0,opacity:1,duration:.3,ease:`back.out(2)`},.05),s.forEach((e,t)=>{c.fromTo(e,{y:40,opacity:0},{y:0,opacity:1,duration:.32,ease:`power2.out`},.1+t*.05)}),this.instant&&c.progress(1),(e?this.cards.get(e):s[0])?.focus({preventScroll:!0})}close(){let e=this.root;if(!e||this.closing)return;this.closing=!0;let t=()=>{J.killTweensOf(e.querySelectorAll(`*`)),e.remove(),this.root===e&&(this.root=null),this.closing=!1};this.instant?t():J.to(e,{opacity:0,duration:.25,ease:`power2.in`,delay:.15,onComplete:t})}step(e){let t=sy.findIndex(e=>this.cards.get(e)===document.activeElement),n=sy[((t<0?0:t)+e+sy.length)%sy.length];this.cards.get(n)?.focus({preventScroll:!0})}choose(e){if(this.closing)return;this.onPick(e);let t=this.cards.get(e);t&&(t.classList.add(`is-chosen`),J.fromTo(t,{scale:1.06},{scale:1.03,duration:.3,ease:`back.out(3)`,overwrite:`auto`}));for(let[t,n]of this.cards)t!==e&&J.to(n,{opacity:.35,duration:.2,overwrite:`auto`});this.close()}buildCard(e,t){let n=rf[e],r=Kv[e],i=$(`button`,`nk-fs-card is-${e}${t?` is-current`:``}`);i.type=`button`,i.setAttribute(`aria-label`,`${n.name} seç`),i.style.setProperty(`--c1`,r.color),i.style.setProperty(`--c2`,r.color2),i.addEventListener(`click`,()=>this.choose(e)),qv($(`span`,`nk-fs-art`,i),e);let a=$(`span`,`nk-fs-foot`,i);return $(`i`,`nk-fs-num`,a,String(sy.indexOf(e)+1)),$(`b`,`nk-fs-name`,a,n.name),$(`i`,`nk-fs-go`,a,t?`SEÇİLİ`:`SEÇ`),i}},ly=6,uy=Math.cos(ly*Math.PI/180),dy=Math.sin(ly*Math.PI/180),fy=1.15,py={cool:[`#fff7c2`,`#ffd23f`,`#ff9a1f`],warm:[`#fff1a8`,`#ffb21f`,`#ff5a1f`],hot:[`#ffe2f4`,`#ff6bd0`,`#ff2d55`]};function my(e,t,n,r,i,a,o){let s=e.x-r-8,c=i-e.x-r-8,l=o;l<0&&s<t?l=1:l>0&&c<t&&(l=-1);let u=e.x+l*(r+8+t/2);u=Math.max(t/2+6,Math.min(i-t/2-6,u));let d=Math.abs(u-e.x)<r+t/2?e.y-r-n/2-6:e.y-r*.8-n*.3;return d=Math.max(a.top+n/2+2,Math.min(a.top+a.height-n/2,d)),{x:u,y:d,side:l}}var hy=class{layer;rect;count=0;constructor(e,t){this.layer=e,this.rect=t}fly(e,t){let n=this.layer.clientWidth||innerWidth,r=this.layer.clientHeight||innerHeight,i=this.rect(),a=t>=1500?`hot`:t>=500?`warm`:`cool`,o=`${gv(t)}x`,s=Math.max(22,Math.min(n>=900&&n>r?64:44,i.height*.09)),c=$(`div`,`nk-fly`,this.layer),l=fv(o,{size:s,fill:py[a],stroke:`#12071f`,strokeW:s*.14,shadow:`#12071f`,shadowOffset:[s*.04,s*.07],halftone:null,rim:`#ffffff`});c.appendChild(l);let u=Number(l.getAttribute(`width`))||s*o.length*.5,d=Number(l.getAttribute(`height`))||s*1.3,f=Math.min(1,n/4/((u*uy+d*dy)*fy)),p=u*f,m=d*f;l.setAttribute(`width`,String(p)),l.setAttribute(`height`,String(m));let h=my(e,p,m,Math.max(32,i.height*.095),n,i,this.count++%2==0?-1:1);J.set(c,{left:h.x,top:h.y,xPercent:-50,yPercent:-50,scale:.4,opacity:0,rotation:h.side*-6}),J.timeline({onComplete:()=>c.remove()}).to(c,{scale:1,opacity:1,duration:.18,ease:`back.out(2.6)`},0).to(c,{top:h.y-m*.5,duration:.6,ease:`sine.out`},.18).to(c,{opacity:0,scale:.8,duration:.18,ease:`power2.in`},.62)}},gy=class{layer;stack=[];constructor(e){this.layer=e,document.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.stack.length&&(e.preventDefault(),this.stack[this.stack.length-1].close())})}get isOpen(){return this.stack.length>0}open(e){let t=$(`div`,`nk-modal-wrap`,this.layer);t.addEventListener(`pointerdown`,e=>e.stopPropagation());let n=$(`div`,`nk-modal-back`,t),r=$(`div`,`nk-modal`,t);r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,e.title),$(`i`,`nk-modal-edge`,r);let i=$(`div`,`nk-modal-head`,r),a=$(`div`,`nk-modal-titles`,i);$(`h2`,`nk-modal-title`,a,e.title),e.subtitle&&$(`div`,`nk-modal-sub`,a,e.subtitle);let o=!1,s={el:r,close:()=>{if(o)return;o=!0;let i=this.stack.indexOf(s);i>=0&&this.stack.splice(i,1),J.killTweensOf([r,n]),J.to(n,{opacity:0,duration:.14,ease:`power1.in`}),J.to(r,{opacity:0,scale:.96,y:10,duration:.14,ease:`power2.in`,onComplete:()=>t.remove()}),e.onClose?.()}};return pv(`nk-modal-x`,i,Fv.close,()=>s.close()).setAttribute(`aria-label`,`Kapat`),$(`div`,`nk-modal-body`,r).appendChild(e.body),n.addEventListener(`pointerdown`,()=>s.close()),this.stack.push(s),J.fromTo(n,{opacity:0},{opacity:1,duration:.18,ease:`power1.out`}),J.fromTo(r,{opacity:0,scale:.92,y:16},{opacity:1,scale:1,y:0,duration:.28,ease:`back.out(1.8)`}),s}closeAll(){for(let e of[...this.stack])e.close()}},_y=`%${(e=>String(e).replace(`.`,`,`))(Xd/100)}`,vy=Xd/1e4;function yy(e){let t=e*100,n=t>=10?1:t>=1?2:t>=.1?3:4;return`%${t.toFixed(n).replace(`.`,`,`)}`}function by(e){return Math.min(1,vy*100/e)}function xy(e,t){let n=$(`section`,`nk-rules-sec`,e);return $(`h3`,`nk-rules-h`,n,t),n}var Sy=[1,4,8,13,20,27,35];function Cy(){let e=$(`div`,`nk-rules`),t=xy(e,`NASIL OYNANIR`),n=$(`ol`,`nk-rules-list`,t);for(let e of[`Raunt öncesinde alttaki BAHİS ▲▼ ile bahsini (₺5 – ₺500), ZORLUK ▲▼ ile seviyeni seç ve BAŞLA'ya bas. Bahis BAŞLA'da bakiyeden düşer.`,`SOL ya da SAĞ ile yumruk at. İsabette çarpan merdivende bir basamak çıkar; kazancın bahis × çarpandır.`,`İlk isabetten sonra ortadaki PARAYI AL ile kazancını istediğin an alırsın. Son basamakta (2.000,00x) kazanç kendiliğinden alınır.`,`Iskalarsan rakip kaçar, karşı yumruk atar ve NAKAVT olursun: bahis kaybedilir.`,`Her rauntta yeni rakip, seçmediğin üç boksörden biri olur. Boksörünü rauntlar arasında BOKSÖR butonuyla değiştirebilirsin.`])$(`li`,``,n,e);$(`p`,`nk-rules-p`,t,`Taraf yalnız görünüştür: SOL ile SAĞ'ın şansı her yumrukta aynıdır. Dört boksör eşit güçtedir; boksör, rakip ve yumruk animasyonu sonucu değiştirmez.`);let r=$(`div`,`nk-keys`,t);for(let[e,t]of[[`← → · 1 2`,`SOL / SAĞ yumruk`],[`Boşluk · Enter`,`BAŞLA`],[`C`,`PARAYI AL`],[`Çift dokunuş`,`ringde yumruk`]]){let n=$(`div`,`nk-key`,r);$(`kbd`,``,n,e),$(`span`,``,n,t)}let i=xy(e,`MERDİVENLER`);$(`p`,`nk-rules-p`,i,`Her seviyenin N basamaklı bir merdiveni vardır: k. isabetin çarpanı m(k) = 2000^(k/N), kuruşa aşağı yuvarlanır. Son basamak her seviyede ${_v(Zd)}. 1,00x bahsin kendisidir, basamak değildir.`);for(let e of uf){let t=$(`div`,`nk-ladder-card is-${e}`,i),n=$(`div`,`nk-ladder-head`,t);$(`b`,``,n,df[e]),$(`span`,``,n,`${pf[e].length} basamak · ilk yumruk ${yy(Tf(e,0))}`);let r=$(`div`,`nk-ladder-chips`,t);for(let t of mf(e,8))$(`span`,``,r,_v(t));$(`span`,`is-more`,r,`…`),$(`span`,`is-top`,r,_v(Zd))}let a=xy(e,`ULAŞMA OLASILIĞI`);$(`p`,`nk-rules-p`,a,`Bir çarpana ulaşma olasılığı her seviyede aynıdır: 0,78 / çarpan. İlk yumruğun şansı 0,78 / m(1), sonraki her yumruğun şansı m(k−1) / m(k)'dır; böylece nerede durursan dur RTP tam %78 olur.`);let o=pf[ff];$(`p`,`nk-rules-p`,a,`Örnek: ${df[ff]} merdiveninin gerçek basamakları.`);let s=$(`table`,`nk-rules-table`,a),c=$(`tr`,``,$(`thead`,``,s));$(`th`,``,c,`İsabet`),$(`th`,``,c,`Çarpan`),$(`th`,``,c,`Ulaşma olasılığı`),$(`th`,``,c,`₺10 bahiste`);let l=$(`tbody`,``,s);for(let e of Sy){let t=o[Math.min(e,o.length)-1],n=$(`tr`,``,l);$(`td`,`is-k`,n,`${e}.`),$(`td`,``,n,_v(t)),$(`td`,``,n,yy(by(t))),$(`td`,``,n,Io(10*t))}let u=xy(e,`ÖDEME VE LİMİTLER`),d=$(`div`,`nk-facts`,u),f=(e,t,n=``)=>{let r=$(`div`,`nk-fact ${n}`,d);$(`span`,``,r,e),$(`b`,``,r,t)};return f(`RTP`,_y,`is-hi`),f(`Maksimum çarpan`,_v(Zd),`is-hi`),f(`Maksimum kazanç`,`${Io(ef)} (₺500\u00a0×\u00a02.000x)`,`is-hi`),f(`Bahis kademeleri`,$d.map(e=>`₺${e.toLocaleString(`tr-TR`)}`).join(` · `)),f(`Kazanç kademeleri`,`≥ 5x BÜYÜK · ≥ 15x MEGA · 2.000x EFSANE`),$(`p`,`nk-rules-p`,u,`Ödeme = bahis × çarpan, kuruşa kadar. Teorik RTP her seviye ve her durma noktası için ${_y}'dir.`),$(`p`,`nk-rules-p`,xy(e,`DEMO`),`Bu bir demodur, gerçek para kullanılmaz. Sonuçlar tarayıcıda seed'li bir rastgele sayı üreteciyle her yumrukta belirlenir; gerçek üründe RNG sunucu tarafında ve sertifikalı olur. Sayfa yenilenince yeni bir ₺10.000 demo oturumu başlar. 18 yaşından küçükler oynayamaz.`),e}var wy={win:{title:`KAZANDIN`,coins:0,hold:0},buyuk:{title:`BÜYÜK KAZANÇ`,coins:5,hold:.9},mega:{title:`MEGA KAZANÇ`,coins:7,hold:1.4},efsane:{title:`EFSANE`,coins:10,hold:2.4}},Ty=1.2,Ey=class{layer;skips;rect;faceAt;open=null;constructor(e,t,n,r){this.layer=e,this.skips=t,this.rect=n,this.faceAt=r}get isOpen(){return this.open!==null}show(e,t,n){this.closeNow();let r=n??`win`,i=this.build(r,e,t),a=r!==`win`;return i.counter.set(e),Cv(this.skips,e=>{e.fromTo(i.root,{opacity:0},{opacity:1,duration:.15,ease:`power1.out`},0).fromTo(i.card,{scale:.6,y:18},{scale:1,y:0,duration:.32,ease:`back.out(2.2)`},0).fromTo(i.amount,{scale:1.25},{scale:1,duration:.25,ease:`back.out(3)`},.12).to({},{duration:.9,onUpdate:()=>this.place(i)},0),a||e.to(i.root,{opacity:0,duration:.2,ease:`power2.in`},1),e.set({},{},Ty)},()=>{i.counter.set(e),a||this.remove(i)})}celebrate(e,t,n){let r=this.open;r&&r.tier===e||(this.closeNow(),r=this.build(e,t,n));let i=wy[e],a=r;a.counter.set(t);let o=wv(t^23505);return Cv(this.skips,e=>{e.set(a.root,{opacity:1},0).fromTo(a.card,{scale:1.08},{scale:1,duration:.3,ease:`back.out(3)`},0);for(let t=0;t<i.coins;t++){let n=$(`i`,`nk-coin`,a.card),r=t%2==0?0:1,i=-Math.PI*(r===0?.02+o()*.2:.78+o()*.2),s=120+o()*60,c=.55+o()*.4;J.set(n,{left:`50%`,top:`50%`,xPercent:-50,yPercent:-50,scale:0,rotation:o()*360});let l=.05+o()*.25;e.to(n,{x:Math.cos(i)*s,y:Math.sin(i)*s*.8,scale:c,rotation:`+=${180+o()*300}`,duration:.4,ease:`power2.out`},l).to(n,{y:`+=${90+o()*80}`,opacity:0,duration:.45,ease:`power2.in`},l+.42)}let t=Math.max(.95,i.hold);e.to(a.root,{opacity:0,duration:.22,ease:`power2.in`},t-.22),e.set({},{},t)},()=>this.remove(a))}closeNow(){let e=this.open;e&&(J.killTweensOf([e.root,e.card,e.amount]),this.remove(e))}remove(e){e.root.remove(),this.open===e&&(this.open=null)}build(e,t,n){let r=$(`div`,`nk-wp is-${e}`,this.layer),i=$(`div`,`nk-wp-card`,r);$(`i`,`nk-wp-shine`,i),$(`div`,`nk-wp-title`,i,wy[e].title);let a=$(`div`,`nk-wp-amt`,i),o=new bv(a,Io);a.style.minWidth=`${Io(t).length*.5}em`,mv($(`div`,`nk-wp-mult`,i),`${_v(n)} · bahis ${Io(Math.round(t*100/Math.max(1,n)))}`);let s={root:r,card:i,amount:a,counter:o,tier:e};return this.open=s,this.place(s),s}place(e){let t=this.rect(),n=e.card.offsetHeight/2,r=this.faceAt?.(),i=r&&Number.isFinite(r.y)?r.y+Math.max(28,t.height*.075)+12:-1/0,a=Math.min(Math.max(t.top+t.height*.62,i+n),t.top+t.height-n-8);a<=parseFloat(e.root.style.top)||(e.root.style.top=`${a}px`)}},Dy={Digit1:`sol`,Digit2:`sag`,Numpad1:`sol`,Numpad2:`sag`,ArrowLeft:`sol`,ArrowRight:`sag`};function Oy(e,t){if(t===100)return 0;let n=e.indexOf(t);return n<0?-1:n+1}function ky(e,t={}){let n=()=>{},r=e=>n(e),i=new Sv,a=[],o=null,s=null,c=null,l=null,u=null,d=null,f=null,p=null,m=null,h=null,g=null,_=0,v=!1,y=!1,b=!1,x=()=>({left:0,top:0,width:innerWidth,height:innerHeight}),S=()=>o?o.sceneRect():x(),C=()=>{p&&!b&&(b=!0,r({type:`rules`}),p.open({title:`KURALLAR`,subtitle:`Nakavt · demo · RTP %78`,body:Cy(),onClose:()=>{b=!1}}))},w=e=>{m&&!m.isOpen&&(e||!h||h.canChangeFighter)&&(p?.closeAll(),m.open(e?null:h?.fighter??null,!e))},T=()=>(p?.isOpen??!1)||(m?.isOpen??!1),E=()=>{h&&c?.render(h,_,v)},D=(e,t)=>{if(s)switch(e.state!==`KARSI`&&(v=!1),e.state){case`BEKLE`:case`RAKIP`:case`HAZIR`:g=null,_=0,(s.shownIndex!==0||t?.ladder!==e.ladder||t?.state!==e.state)&&s.setStrip(e.ladder,0,`live`),d?.closeNow();break;case`DOVUS`:g=null,_=0,s.setStrip(e.ladder,0,`live`),d?.closeNow();break;case`HAMLE`:g=null,s.shownIndex!==e.landed&&s.setStrip(e.ladder,e.landed,`live`),_=e.currentWinKurus;break;case`YUMRUK`:g=e;break;case`KARSI`:break;case`PARAYI_AL`:_=e.currentWinKurus>0?e.currentWinKurus:e.betTL*e.multiplierKurus,s.shownIndex!==e.landed&&s.setStrip(e.ladder,e.landed,`won`),s.end(`won`)}};return{mount(e){let n=$(`div`,`nk-ui`,e),g=$(`div`,`nk-layer nk-canvas-host`,n),v=$(`div`,`nk-layer nk-fx-layer`,n),y=$(`div`,`nk-layer nk-hud`,n),b=$(`div`,`nk-layer nk-overlay`,n);s=new Zv({toggleSound:()=>r({type:`toggleSound`}),openRules:C,openFighters:()=>w(!1)}),c=new oy(r);let x=$(`div`,`nk-stage`);y.append(s.root,x,c.root),l=new Tv(v,b,y),f=new hy(v,S),u=new Dv(b,i,S),d=new Ey(b,i,S,t.faceAt),p=new gy(b),m=new cy(b,e=>r({type:`fighter`,id:e}),t.stepped??!1),o=new xv({root:e,ui:n,top:s.root,dock:c.root});for(let e of a)o.onChange(e);return o.update(),document.addEventListener(`keydown`,e=>{if(e.ctrlKey||e.metaKey||e.altKey||T())return;let t=Dy[e.code];if(t){if(e.repeat||!h?.canPunch)return;e.preventDefault(),c?.press(t),r({type:`punch`,side:t})}else if(e.code===`Space`||e.code===`Enter`||e.code===`NumpadEnter`)e.preventDefault(),e.repeat||c?.pressRound();else if(e.code===`KeyC`){if(e.repeat||!h?.canCashout||_<=0)return;e.preventDefault(),r({type:`cashout`})}}),document.addEventListener(`keyup`,e=>{e.code!==`Space`&&e.code!==`Enter`||T()||e.preventDefault()}),{canvasHost:g,fxLayer:v}},render(e,t){let n=h;h=e,s?.render(e,t),D(e,n),E()},onIntent(e){n=e},sceneRect:S,onLayoutChange(e){a.push(e),o?.onChange(e)},showFighterSelect(){w(!y),y=!0},flyNumber(e,t){f?.fly(e,t)},bumpMultiplier(e,t){if(!s)return;if(t){v=!0,s.end(`lost`),E();return}let n=g??h;if(!n)return;let r=Oy(n.ladder,e);s.advance(n.ladder,r<0?n.landed:r),_=n.multiplierKurus===e&&n.currentWinKurus>0?n.currentWinKurus:n.betTL*e,E(),c?.bumpAmount()},banner(e,t){if(e===`raunt`){let e=h?.multiplierKurus??100,n=t??_;return d?d.show(n,e,vf(e)):Promise.resolve()}return u?u.show(e):Promise.resolve()},bigWin(e,t){let n=h?.multiplierKurus??100;return d?d.celebrate(e,t,n):Promise.resolve()},flash(e,t){l?.flash(e,t)},toast(e){l?.toast(e,S())},skip(){i.skipAll()}}}var Ay=`nakavt.fighter`,jy=`nakavt.level`,My=`nakavt.bet`;function Ny(){try{let e=localStorage.getItem(Ay);return af.includes(e??``)?e:null}catch{return null}}function Py(e){try{localStorage.setItem(Ay,e)}catch{}}function Fy(){try{let e=localStorage.getItem(jy),t=Number(localStorage.getItem(My));return{difficulty:hf(e)?e:void 0,betTL:tf(t)?t:void 0}}catch{return{}}}function Iy(e,t){try{localStorage.setItem(jy,e),localStorage.setItem(My,String(t))}catch{}}var Ly=`x0123456789,.NAKAVTDÖVÜŞDEMİRYILDIRIMKRALİÇEFIRTINASOLSAĞKROŞEAPARKATKOLAYORTAZORÇOKĞğİıŞşÇçÖöÜü!`,Ry=[`400 48px "Anton"`,`400 32px "Oswald"`,`600 32px "Oswald"`];async function zy(){await Promise.all(Ry.map(e=>document.fonts.load(e,Ly))),await document.fonts.ready}function By(e){let t=e.get(`seed`);if(t===null)return;let n=Number(t);return Number.isFinite(n)?n>>>0:void 0}async function Vy(){let e=new URLSearchParams(location.search),t=e.get(`test`)===`1`,n=document.getElementById(`app`),r=new Oo;r.bindGsap();let i=ky(r,{faceAt:()=>c.impactScreenPos(),stepped:t}),a=i.mount(n),o=Yd(),s=Ff({seed:By(e),after:(e,t)=>r.after(e,t),...Fy()});await zy();let c=ov(r,{fighterModels:e.get(`glb`)!==`0`,awaitModels:!0});await c.init(a.canvasHost),c.newMatch(`demir`,`yildirim`),c.preload(`demir`,`yildirim`),c.setDifficulty(s.view().difficulty);let l=()=>c.setSceneRect(i.sceneRect());l(),i.onLayoutChange(l);let u=Hf({game:s,scene:c,ui:i,audio:o,clock:r}),d=!1,f=()=>{d||(d=!0,o.unlock(),o.muted||o.startAmbient(),o.setMusic(`menu`))};addEventListener(`pointerdown`,f,{capture:!0}),addEventListener(`keydown`,f,{capture:!0});let p=e=>{switch(f(),e.type===`punch`||e.type===`fighter`?o.play(`ui.select`):e.type!==`skip`&&o.play(`ui.click`),e.type){case`cashout`:s.cashout();break;case`punch`:s.punch(e.side);break;case`fighter`:s.selectFighter(e.id),Py(e.id),o.announce(e.id);break;case`difficulty`:s.setDifficulty(e.level),c.setDifficulty(s.view().difficulty),Iy(s.view().difficulty,s.view().betTL);break;case`betStep`:s.betStep(e.dir),Iy(s.view().difficulty,s.view().betTL);break;case`start`:s.start();break;case`resetBalance`:s.resetBalance();break;case`toggleSound`:o.setMuted(!o.muted),o.muted?o.stopAmbient():d&&o.startAmbient();break;case`skip`:c.skip(),i.skip()}u.refresh()};i.onIntent(p);let m=Wf();a.canvasHost.addEventListener(`pointerdown`,e=>{let t=s.view(),n=m({at:e.timeStamp,x:e.clientX,y:e.clientY},t.state,t.canPunch);n===`skip`?p({type:`skip`}):n===`punch`&&p({type:`punch`,side:e.clientX<innerWidth/2?`sol`:`sag`})});let h=e=>{let t=r.advance(e);c.update(t),c.render()};u.refresh();let g=Ny();if(g?p({type:`fighter`,id:g}):i.showFighterSelect(),t){Object.assign(window,{__game:{game:s,scene:c,ui:i,audio:o,clock:r,step:e=>{let t=Math.ceil(e/(1e3/60));for(let e=0;e<t;e++)h(1/60)},ready:!0}}),h(0);return}let _=performance.now(),v=document.hidden;document.addEventListener(`visibilitychange`,()=>{v=document.hidden,v?o.stopAmbient():(_=performance.now(),d&&!o.muted&&o.startAmbient())});let y=e=>{let t=v?0:(e-_)/1e3;_=e,v||h(t),requestAnimationFrame(y)};requestAnimationFrame(y)}Vy().catch(e=>{console.error(e);let t=document.createElement(`pre`);t.style.cssText=`position:fixed;inset:16px;color:#fff;background:#402;padding:16px;white-space:pre-wrap;z-index:99`,t.textContent=`Demo başlatılamadı:\n${e instanceof Error?e.stack??e.message:String(e)}`,document.body.appendChild(t)});export{Fp as a,Pp as i,zm as n,Wp as o,Rm as r,_h as t};