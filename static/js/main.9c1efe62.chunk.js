(this.webpackJsonptest_contacts=this.webpackJsonptest_contacts||[]).push([[0],{67:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c,n,r=a(3),s=a(0),i=a.n(s),j=a(15),b=a.n(j),o=(a(67),a(16)),l=a(107),O=a(125),d=a(119),u=a(118),h=a(116),x=a(120),p=a(121),f=a(111),m=a(115),g=a(114),v=a(109),y=a(112),C=a(113),w=a(110),S=a(123),N=a(10),k=a(124),E=a(108),I=a(46),F=a.n(I),M=a(122),B=a(129),A=Object(l.a)((function(e){return Object(O.a)({root:{cursor:"pointer"},icon:{marginRight:e.spacing(1)}})})),D="copy",L="copied",V=(c={},Object(N.a)(c,D,"Copy"),Object(N.a)(c,L,"Copied"),c),R=function(e){var t=e.text,a=A(),c=Object(k.a)(),n=Object(o.a)(c,2)[1],i=Object(s.useState)(D),j=Object(o.a)(i,2),b=j[0],l=j[1],O=Object(s.useCallback)((function(){n(t),l(L)}),[n,t]),d=Object(s.useCallback)((function(){l(D)}),[l]);return Object(r.jsx)(B.a,{onClickAway:d,children:Object(r.jsx)(M.a,{title:V[b],placement:"top",arrow:!0,children:Object(r.jsxs)(E.a,{display:"flex",alignItems:"center",className:a.root,onClick:O,children:[Object(r.jsx)(F.a,{fontSize:"small",className:a.icon}),t]})})})},T="AU",U="BR",z="CA",G="CH",P="DE",J="DK",K="ES",Z="FI",_="FR",H="GB",q="IE",Q="IR",W="NO",X="NL",Y="NZ",$="TR",ee="US",te=(n={},Object(N.a)(n,T,"Australian"),Object(N.a)(n,U,"Brazilian"),Object(N.a)(n,z,"Canadian"),Object(N.a)(n,G,"Chinese"),Object(N.a)(n,P,"Germany"),Object(N.a)(n,J,"Denmark"),Object(N.a)(n,K,"Spain"),Object(N.a)(n,Z,"Finland"),Object(N.a)(n,_,"France"),Object(N.a)(n,H,"Great Britain (UK)"),Object(N.a)(n,q,"Ireland"),Object(N.a)(n,Q,"Iran"),Object(N.a)(n,W,"Norway"),Object(N.a)(n,X,"Netherlands"),Object(N.a)(n,Y,"New Zealand"),Object(N.a)(n,$,"Turkey"),Object(N.a)(n,ee,"United States"),n),ae=a(51),ce=a(47),ne=Object(l.a)({table:{}}),re=function(e){var t=e.data,a=ne();return Object(r.jsx)(v.a,{component:w.a,children:Object(r.jsxs)(f.a,{className:a.table,size:"small","aria-label":"contacts table",children:[Object(r.jsx)(y.a,{children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(g.a,{children:"Avatar"}),Object(r.jsx)(g.a,{children:"Full name"}),Object(r.jsx)(g.a,{children:"Birthday"}),Object(r.jsx)(g.a,{children:"Email"}),Object(r.jsx)(g.a,{children:"Phone"}),Object(r.jsx)(g.a,{children:"Location"}),Object(r.jsx)(g.a,{children:"Nationality"})]})}),Object(r.jsx)(m.a,{children:t.map((function(e){return Object(r.jsxs)(C.a,{children:[Object(r.jsx)(g.a,{component:"th",scope:"row",children:Object(r.jsx)(S.a,{src:e.picture.thumbnail})}),Object(r.jsxs)(g.a,{children:[e.name.title," ",e.name.first," ",e.name.last]}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(h.a,{children:Object(ae.a)(Object(ce.a)(e.dob.date),"MM/dd/yyyy")}),Object(r.jsxs)(h.a,{children:[e.dob.age," years"]})]}),Object(r.jsx)(g.a,{children:Object(r.jsx)(R,{text:e.email})}),Object(r.jsx)(g.a,{children:Object(r.jsx)(R,{text:e.phone})}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(h.a,{children:e.location.country}),Object(r.jsxs)(h.a,{children:[e.location.city,", ",e.location.street.name," ","",e.location.street.number]})]}),Object(r.jsx)(g.a,{children:te[e.nat]})]},e.login.uuid)}))})]})})},se=a(40),ie=a.n(se),je=a(48),be=a(50),oe=a.n(be),le=a(49),Oe=a.n(le),de=a(117),ue=a(126),he="table",xe="grid",pe=function(e){var t=e.dataViewMode,a=e.setDataViewMode,c=Object(s.useCallback)((function(e,t){a(t)}),[a]);return Object(r.jsxs)(ue.a,{value:t,exclusive:!0,onChange:c,children:[Object(r.jsx)(de.a,{value:xe,"aria-label":xe,children:Object(r.jsx)(Oe.a,{})}),Object(r.jsx)(de.a,{value:he,"aria-label":he,children:Object(r.jsx)(oe.a,{})})]})},fe=function(){return localStorage.getItem("dataViewMode")||he},me=Object(l.a)((function(e){return Object(O.a)({root:{marginTop:e.spacing(4)},headContainer:{marginBottom:e.spacing(3)}})})),ge=function(){var e=me(),t=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!0),r=Object(o.a)(n,2),i=r[0],j=r[1],b=Object(s.useState)(!1),l=Object(o.a)(b,2),O=l[0],d=l[1];return Object(s.useEffect)((function(){!function(){var e=Object(je.a)(ie.a.mark((function e(){var t,a,n,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,fetch("https://randomuser.me/api/?results=10");case 4:return t=e.sent,e.next=7,t.json();case 7:if(a=e.sent,n=a.results,!(r=a.error)){e.next=12;break}throw new Error(r);case 12:c(n),d(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),d(!0);case 19:return e.prev=19,j(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,16,19,22]])})));return function(){return e.apply(this,arguments)}}()()}),[]),{data:a,isLoading:i,isError:O}}(),a=function(){var e=Object(s.useState)(fe),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){localStorage.setItem("dataViewMode",a)}),[a]),[a,c]}(),c=Object(o.a)(a,2),n=c[0],i=c[1];return Object(r.jsx)(u.a,{className:e.root,children:Object(r.jsxs)(d.a,{container:!0,children:[Object(r.jsx)(d.a,{item:!0,xs:12,className:e.headContainer,children:Object(r.jsxs)(p.a,{display:"flex",justifyContent:"space-between",children:[Object(r.jsx)(h.a,{variant:"h4",component:"h2",children:"Contacts"}),Object(r.jsx)(pe,{dataViewMode:n,setDataViewMode:i})]})}),Object(r.jsx)(d.a,{item:!0,xs:12,children:t.isLoading?Object(r.jsx)(x.a,{}):t.isError?Object(r.jsx)("div",{children:"...error"}):n===he?Object(r.jsx)(re,{data:t.data}):n===xe?"grid":null})]})})};function ve(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(ge,{})})}var ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,130)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};b.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ve,{})}),document.getElementById("root")),ye()}},[[75,1,2]]]);
//# sourceMappingURL=main.9c1efe62.chunk.js.map