(this.webpackJsonpflipr=this.webpackJsonpflipr||[]).push([[0],{42:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),r=a(12),i=a.n(r),l=(a(42),a(8)),d=a(14),j=a(15),o=a(20),h=a(18),u=a(33),b=a.n(u),O=(a(61),a(74)),x=(a(62),a(75)),m=a(73),p=a.p+"static/media/destination.5336278d.svg",N=a.p+"static/media/warehouse.147c9c0b.svg",f=(a(63),function(e){return Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)(x.a,{className:"timeline",children:[Object(s.jsx)("img",{src:p,alt:"FliprBrand",className:"FliprTableNav"}),Object(s.jsx)("div",{class:"vl",children:e.data&&e.data.scan.map((function(e,t){return Object(s.jsxs)(m.a,{className:"rowPartsOne",children:[Object(s.jsx)("hr",{className:"horizontalLine"}),Object(s.jsxs)("span",{className:"rowPartsspan",children:[e.status_detail,"\xa0\xa0\xa0\xa0\xa0",e.time.substring(0,10).split("-").reverse().join("-"),"\xa0\xa0\xa0",e.time.substring(11)]})]},t)}))}),Object(s.jsx)("img",{src:N,alt:"FliprBrand",className:"FliprTableNav"})]})})}),D=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handlePass=function(e){var t=s.props.data.filter((function(t){return t.awbno==e}));s.setState({selectedData:t})},s.selectedItem=function(e){s.setState({selectedItem:e})},s.state={data:s.props.data,selectedData:[],selectedItem:0},s}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)(O.a,{responsive:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{className:"awb",children:"AWB NUMBER"}),Object(s.jsx)("th",{children:"TRANSPORTER"}),Object(s.jsx)("th",{className:"source",children:"SOURCE"}),Object(s.jsx)("th",{className:"destination",children:"DESTINATION"}),Object(s.jsx)("th",{children:"BRAND"}),Object(s.jsx)("th",{className:"startdate",children:"START DATE"}),Object(s.jsx)("th",{className:"enddate",children:"ETD"}),Object(s.jsx)("th",{children:"STATUS"})]})}),Object(s.jsx)("tbody",{children:this.props.data&&this.props.data.map((function(t,a){return Object(s.jsxs)("tr",{onClick:function(){e.handlePass(t.awbno),e.selectedItem(a)},className:e.state.selectedItem===a?"active":"",children:[Object(s.jsx)("td",{children:t.awbno}),Object(s.jsx)("td",{children:t.carrier}),Object(s.jsx)("td",{children:t.from}),Object(s.jsx)("td",{children:t.to}),Object(s.jsx)("td",{children:t.carrier}),Object(s.jsx)("td",{children:t.pickup_date&&t.pickup_date.substring(0,10)}),Object(s.jsx)("td",{children:t.extra_fields&&t.extra_fields.expected_delivery_date.substring(0,10)}),Object(s.jsx)("td",{style:{color:"green"},children:t.current_status})]},a)}))})]}),Object(s.jsx)(f,{data:this.state.selectedData[0]})]})}}]),a}(c.Component),v=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).handleFilter=function(e){var t;t=s.state.data.filter((function(t){return t.current_status_code==e})),s.setState({filteredData:t})},s.state={OOD:0,DEX:0,DEL:0,INT:0,NFI:0,data:[],filteredData:[],class:"DEL"},s}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.post("https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",{email:"sanketjain070@gmail.com"},{headers:{Authorization:"Bearer tTU3gFVUdP"}}).then((function(t){e.setState({data:t.data},(function(){return e.handleFilter("DEL")}));for(var a=0;a<t.data.length;a++)switch(t.data[a].current_status_code){case"OOD":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{OOD:e.OOD+1})}));break;case"DEL":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{DEL:e.DEL+1})}));break;case"INT":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{INT:e.INT+1})}));break;case"DEX":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{DEX:e.DEX+1})}));break;case"NFI":e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{NFI:e.NFI+1})}))}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.OOD,c=t.DEL,r=t.INT,i=t.DEX,l=t.NFI;return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("div",{className:"counterBoard",children:[Object(s.jsxs)("div",{className:"DEL"===this.state.class?"counter_card selected":"counter_card",onClick:function(){e.handleFilter("DEL"),e.setState({class:"DEL"})},children:[Object(s.jsx)("span",{className:"counterType",children:"DEL"}),Object(s.jsx)("span",{className:"counterCount",children:c})]}),Object(s.jsxs)("div",{className:"INT"===this.state.class?"counter_card selected":"counter_card",onClick:function(){e.handleFilter("INT"),e.setState({class:"INT"})},children:[Object(s.jsx)("span",{className:"counterType",children:"INT"}),Object(s.jsx)("span",{className:"counterCount",children:r})]}),Object(s.jsxs)("div",{className:"OOD"===this.state.class?"counter_card selected":"counter_card",onClick:function(){e.handleFilter("OOD"),e.setState({class:"OOD"})},children:[Object(s.jsx)("span",{className:"counterType",children:"OOD"}),Object(s.jsx)("span",{className:"counterCount",children:a||0})]}),Object(s.jsxs)("div",{className:"DEX"===this.state.class?"counter_card selected":"counter_card",onClick:function(){e.handleFilter("DEX"),e.setState({class:"DEX"})},children:[Object(s.jsx)("span",{className:"counterType",children:"DEX"}),Object(s.jsx)("span",{className:"counterCount",children:i})]}),Object(s.jsxs)("div",{className:"NFI"===this.state.class?"counter_card selected":"counter_card",onClick:function(){e.handleFilter("NFI"),e.setState({class:"NFI"})},children:[Object(s.jsx)("span",{className:"counterType",children:"NFI"}),Object(s.jsx)("span",{className:"counterCount",children:l})]})]}),Object(s.jsx)(D,{data:this.state.filteredData})]})}}]),a}(c.Component),F=a(24),g=a(13),T=a.p+"static/media/logo.60097ea2.svg",I=a.p+"static/media/profile.2fbd2bc9.svg";a(64);function E(){return Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)(F.a,{className:"Nav",expand:"lg",children:[Object(s.jsxs)(F.a.Brand,{href:"/",style:{color:"white"},children:[Object(s.jsx)("img",{src:T,alt:"FliprBrand",className:"FliprLogoNav"}),Object(s.jsx)("span",{className:"spanNavbarBrand",children:"Intugine"})]}),Object(s.jsxs)(g.a,{id:"FlipNav",children:[Object(s.jsx)(g.a.Link,{href:"#",style:{textDecoration:"none"},children:"Home"}),Object(s.jsx)(g.a.Link,{href:"#",style:{textDecoration:"none"},children:"Brands"}),Object(s.jsx)(g.a.Link,{href:"#",style:{textDecoration:"none"},children:"Transporters"}),Object(s.jsxs)(g.a.Link,{href:"#",className:"lastNavLink",children:[Object(s.jsx)("img",{src:I,alt:"FliprProfile",className:"FliprProfileLogoNav"}),Object(s.jsx)("i",{className:"fa fa-angle-down","aria-hidden":"true"})]})]})]})})}var k=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(E,{}),Object(s.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),S()}},[[71,1,2]]]);
//# sourceMappingURL=main.bfa48a5a.chunk.js.map