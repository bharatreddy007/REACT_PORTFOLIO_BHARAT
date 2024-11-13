import{r as n,M as I,a as o,u as $,P as L,i as j,b as z,L as T,F as A,j as v,m as w}from"./index.7612aac2.js";class U extends n.exports.Component{getSnapshotBeforeUpdate(c){const t=this.props.childRef.current;if(t&&c.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function B({children:a,isPresent:c}){const t=n.exports.useId(),r=n.exports.useRef(null),h=n.exports.useRef({width:0,height:0,top:0,left:0}),{nonce:y}=n.exports.useContext(I);return n.exports.useInsertionEffect(()=>{const{width:p,height:s,top:f,left:g}=h.current;if(c||!r.current||!p||!s)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return y&&(m.nonce=y),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${s}px !important;
            top: ${f}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[c]),o(U,{isPresent:c,childRef:r,sizeRef:h,children:n.exports.cloneElement(a,{ref:r})})}const D=({children:a,initial:c,isPresent:t,onExitComplete:r,custom:h,presenceAffectsLayout:y,mode:p})=>{const s=$(H),f=n.exports.useId(),g=n.exports.useCallback(l=>{s.set(l,!0);for(const e of s.values())if(!e)return;r&&r()},[s,r]),m=n.exports.useMemo(()=>({id:f,initial:c,isPresent:t,custom:h,onExitComplete:g,register:l=>(s.set(l,!1),()=>s.delete(l))}),y?[Math.random(),g]:[t,g]);return n.exports.useMemo(()=>{s.forEach((l,e)=>s.set(e,!1))},[t]),n.exports.useEffect(()=>{!t&&!s.size&&r&&r()},[t]),p==="popLayout"&&(a=o(B,{isPresent:t,children:a})),o(L.Provider,{value:m,children:a})};function H(){return new Map}const S=a=>a.key||"";function E(a){const c=[];return n.exports.Children.forEach(a,t=>{n.exports.isValidElement(t)&&c.push(t)}),c}const F=({children:a,exitBeforeEnter:c,custom:t,initial:r=!0,onExitComplete:h,presenceAffectsLayout:y=!0,mode:p="sync"})=>{j(!c);const s=n.exports.useMemo(()=>E(a),[a]),f=s.map(S),g=n.exports.useRef(!0),m=n.exports.useRef(s),l=$(()=>new Map),[e,d]=n.exports.useState(s),[i,b]=n.exports.useState(s);z(()=>{g.current=!1,m.current=s;for(let x=0;x<i.length;x++){const u=S(i[x]);f.includes(u)?l.delete(u):l.get(u)!==!0&&l.set(u,!1)}},[i,f.length,f.join("-")]);const N=[];if(s!==e){let x=[...s];for(let u=0;u<i.length;u++){const C=i[u],P=S(C);f.includes(P)||(x.splice(u,0,C),N.push(C))}p==="wait"&&N.length&&(x=N),b(E(x)),d(s);return}const{forceRender:M}=n.exports.useContext(T);return o(A,{children:i.map(x=>{const u=S(x),C=s===i||f.includes(u),P=()=>{if(l.has(u))l.set(u,!0);else return;let R=!0;l.forEach(k=>{k||(R=!1)}),R&&(M==null||M(),b(m.current),h&&h())};return o(D,{isPresent:C,initial:!g.current||r?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:y,mode:p,onExitComplete:C?void 0:P,children:x},u)})})};const K=()=>{const[a,c]=n.exports.useState({name:"",email:"",message:""}),[t,r]=n.exports.useState({status:"idle",message:""}),[h,y]=n.exports.useState({name:!1,email:!1,message:!1}),p=(e,d)=>{switch(e){case"name":return d.length>=2?"":"Name must be at least 2 characters";case"email":return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)?"":"Please enter a valid email";case"message":return d.length>=10?"":"Message must be at least 10 characters";default:return""}},s=e=>{y(d=>({...d,[e]:!0}))},f=e=>{const{name:d,value:i}=e.target;c(b=>({...b,[d]:i}))},g=async e=>{if(e.preventDefault(),r({status:"submitting",message:""}),Object.keys(a).map(i=>p(i,a[i])).filter(i=>i).length>0){r({status:"error",message:"Please fix the errors before submitting"});return}try{await new Promise(i=>setTimeout(i,2e3)),r({status:"success",message:"Message sent successfully!"}),c({name:"",email:"",message:""}),y({name:!1,email:!1,message:!1})}catch{r({status:"error",message:"Failed to send message. Please try again."})}},m={focus:{scale:1.02,boxShadow:"0 0 8px rgba(0,255,255,0.3)"},error:{x:[0,-10,10,-10,10,0],transition:{duration:.5}}},l=[{logo:"mail",text:"saibharatreddy007@gmail.com"},{logo:"logo-whatsapp",text:"+1-5515541024"},{logo:"location",text:"New York, USA"}];return v("section",{id:"contact-section",children:[v("div",{className:"contact-header",children:[v("h2",{children:["Let's ",o("span",{children:"Connect"})]}),o("p",{children:"Feel free to drop me a message!"})]}),v("div",{className:"contact-content",children:[o("div",{className:"form-wrapper",children:v("form",{className:"contact-form",onSubmit:g,children:[Object.keys(a).map(e=>v(w.div,{className:"input-wrapper",variants:m,whileFocus:"focus",animate:h[e]&&p(e,a[e])?"error":"idle",children:[o(w.input,{type:e==="email"?"email":"text",name:e,value:a[e],onChange:f,onBlur:()=>s(e),placeholder:e.charAt(0).toUpperCase()+e.slice(1),className:h[e]&&p(e,a[e])?"error":""}),o(F,{children:h[e]&&p(e,a[e])&&o(w.span,{className:"error-message",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:p(e,a[e])})})]},e)),o(w.button,{type:"submit",className:`btn-send ${t.status}`,whileHover:{scale:1.05},whileTap:{scale:.95},disabled:t.status==="submitting",children:t.status==="submitting"?o(w.span,{animate:{rotate:360},transition:{duration:1,repeat:1/0},children:"\u27F3"}):"Send Message"}),o(F,{children:t.message&&o(w.div,{className:`form-status ${t.status}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:t.message})})]})}),o("div",{className:"contact-details",children:l.map((e,d)=>v(w.div,{className:"contact-item",whileHover:{scale:1.05},whileTap:{scale:.95},children:[o("div",{className:"icon-wrapper",children:o("ion-icon",{name:e.logo})}),o("p",{children:e.text})]},d))})]})]})};export{K as default};