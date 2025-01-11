import{a as G,j as u}from"./jsx-runtime-c9381026.js";import{r as k}from"./index-8b3efc3f.js";import{d as f,l as C}from"./styled-components.browser.esm-9b53ad8e.js";import{I as y}from"./index-28fff672.js";import"./_commonjsHelpers-de833af9.js";const J=f.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-width: ${({$size:e})=>e==="small"?"28px":"44px"};
  height: ${({$size:e})=>e==="small"?"16px":"22px"};
  padding: 0;
  line-height: 0;
  border: 0;
  border-radius: 100px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s;
  user-select: none;

  background-color: ${({$checked:e,$disabled:t})=>t?e?"rgba(24, 144, 255, 0.4)":"#00000040":e?"#1890ff":"#00000040"};

  opacity: ${({$disabled:e})=>e?.4:1};

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`,K=f.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: ${({$size:e})=>e==="small"?"12px":"18px"};
  height: ${({$size:e})=>e==="small"?"12px":"18px"};
  transition: all 0.2s;
  
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 9px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    content: "";
  }

  ${({$checked:e,$size:t})=>e&&C`transform: translateX(${t==="small"?12:22}px);`}

  ${({$loading:e})=>(e??!1)&&C`
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border: 2px solid #1890ff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: loadingCircle 1s infinite linear;
      }

      @keyframes loadingCircle {
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    `}
`,M=f.span`
  display: block;
  color: #fff;
  font-size: 12px;
  line-height: ${({$size:e})=>e==="small"?"16px":"22px"};
  transition: margin 0.2s;
  margin: ${({$checked:e})=>e?"0 24px 0 6px":"0 6px 0 24px"};
`,h=({checked:e,defaultChecked:t=!1,disabled:r=!1,size:m="default",onChange:s,checkedChildren:g,unCheckedChildren:b,className:F,style:H,loading:o=!1})=>{const[O,X]=k.useState(t),a=e??O,A=k.useCallback(()=>{if(r||o)return;const x=!a;e===void 0&&X(x),s==null||s(x)},[a,e,r,o,s]);return G(J,{role:"switch","aria-checked":a,type:"button",$checked:a,$disabled:r||o,$size:m,onClick:A,className:F,style:H,children:[(g!==void 0||b!==void 0)&&u(M,{$checked:a,$size:m,children:a?g:b}),u(K,{"data-testid":"switch-handle",$checked:a,$size:m,$loading:o})]})};try{h.displayName="Switch",h.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},checkedChildren:{defaultValue:null,description:"",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},unCheckedChildren:{defaultValue:null,description:"",name:"unCheckedChildren",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ee={title:"Data Entry/Switch",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Determine whether the Switch is checked"},defaultChecked:{control:"boolean",description:"Initial state"},disabled:{control:"boolean",description:"Disable switch"},loading:{control:"boolean",description:"Loading state of switch"},size:{control:{type:"radio"},options:["small","default"],description:"Size of switch"},checkedChildren:{control:"text",description:"Content to be shown when the state is checked"},unCheckedChildren:{control:"text",description:"Content to be shown when the state is unchecked"}}},n={args:{}},i={args:{checkedChildren:"开",unCheckedChildren:"关"}},l={args:{checkedChildren:u(y,{name:"smile",size:12}),unCheckedChildren:u(y,{name:"sad",size:12})}},c={args:{disabled:!0}},d={args:{loading:!0,defaultChecked:!0}},p={args:{size:"small"}};var w,S,$;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {}
}`,...($=(S=n.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var v,z,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checkedChildren: "开",
    unCheckedChildren: "关"
  }
}`,...(q=(z=i.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var V,_,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    checkedChildren: <Icon name="smile" size={12} />,
    unCheckedChildren: <Icon name="sad" size={12} />
  }
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var N,D,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var j,E,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: true,
    defaultChecked: true
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,B,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const ae=["Basic","WithText","WithIcon","Disabled","Loading","Small"];export{n as Basic,c as Disabled,d as Loading,p as Small,l as WithIcon,i as WithText,ae as __namedExportsOrder,ee as default};
