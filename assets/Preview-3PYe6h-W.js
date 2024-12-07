import{r as k,g as D}from"./index-FVqMZocF.js";function M(c,n){for(var p=0;p<n.length;p++){const o=n[p];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in c)){const u=Object.getOwnPropertyDescriptor(o,s);u&&Object.defineProperty(c,s,u.get?u:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var v,O;function q(){if(O)return v;O=1;var c=Object.create,n=Object.defineProperty,p=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,I=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,j=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},b=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of o(e))!u.call(r,a)&&a!==t&&n(r,a,{get:()=>e[a],enumerable:!(i=p(e,a))||i.enumerable});return r},E=(r,e,t)=>(t=r!=null?c(s(r)):{},b(!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r)),S=r=>b(n({},"__esModule",{value:!0}),r),f=(r,e,t)=>(I(r,typeof e!="symbol"?e+"":e,t),t),y={};j(y,{default:()=>C}),v=S(y);var l=E(k());const h="64px",_={};class C extends l.Component{constructor(){super(...arguments),f(this,"mounted",!1),f(this,"state",{image:null}),f(this,"handleKeyPress",e=>{(e.key==="Enter"||e.key===" ")&&this.props.onClick()})}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:i}=this.props;(e.url!==t||e.light!==i)&&this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage({url:e,light:t,oEmbedUrl:i}){if(!l.default.isValidElement(t)){if(typeof t=="string"){this.setState({image:t});return}if(_[e]){this.setState({image:_[e]});return}return this.setState({image:null}),window.fetch(i.replace("{url}",e)).then(a=>a.json()).then(a=>{if(a.thumbnail_url&&this.mounted){const d=a.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:d}),_[e]=d}})}}render(){const{light:e,onClick:t,playIcon:i,previewTabIndex:a,previewAriaLabel:d}=this.props,{image:w}=this.state,g=l.default.isValidElement(e),P={display:"flex",alignItems:"center",justifyContent:"center"},m={preview:{width:"100%",height:"100%",backgroundImage:w&&!g?`url(${w})`:void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...P},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:h,width:h,height:h,position:g?"absolute":void 0,...P},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},N=l.default.createElement("div",{style:m.shadow,className:"react-player__shadow"},l.default.createElement("div",{style:m.playIcon,className:"react-player__play-icon"}));return l.default.createElement("div",{style:m.preview,className:"react-player__preview",onClick:t,tabIndex:a,onKeyPress:this.handleKeyPress,...d?{"aria-label":d}:{}},g?e:null,i||N)}}return v}var x=q();const A=D(x),R=M({__proto__:null,default:A},[x]);export{R as P};
