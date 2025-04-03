import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as U}from"./index-BlmOqGMO.js";import{d as n,l as u}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as r}from"./index-CbqPYD7y.js";import{B as A}from"./index-CtjHNQLu.js";import{v as W}from"./v4-CtRu48qb.js";import"./index-yBjzXJbu.js";const G=n.div`
  display: inline-block;
`,H=n.input`
  display: none;
`,J=n.div`
  ${({listType:t})=>t==="picture-card"&&u`
      width: 160px;
      height: 160px;
      border: 1px dashed #d9d9d9;
      border-radius: 8px;
      background: #fafafa;
      cursor: pointer;
      transition: border-color 0.3s;

      &:hover {
        border-color: #1890ff;
      }

      .upload-card-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #999;

        .icon {
          margin-bottom: 8px;
        }

        .upload-text {
          font-size: 14px;
        }
      }
    `}

  ${({disabled:t})=>(t??!1)&&u`
      cursor: not-allowed;
      opacity: 0.5;
      
      &:hover {
        border-color: #d9d9d9 !important;
      }
      
      * {
        pointer-events: none;
      }
    `}
`,K=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`,Q=n.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #fafafa;
  border-radius: 4px;
  
  &:hover {
    background: #f0f0f0;
  }
  
  ${({listType:t})=>(t==="picture"||t==="picture-card")&&u`
      width: 160px;
      height: 160px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      overflow: hidden;
      position: relative;

      .upload-item-image {
        width: 100%;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .upload-item-actions {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.45);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        opacity: 0;
        transition: opacity 0.3s;

        .action-icon {
          color: white;
          font-size: 20px;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.2s;

          &:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }

      &:hover .upload-item-actions {
        opacity: 1;
      }
    `}

  ${({listType:t})=>t==="text"&&u`
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background: #fafafa;
      border-radius: 4px;
      margin-bottom: 8px;
      transition: background-color 0.3s;

      &:hover {
        background: #f0f0f0;
      }

      .upload-item-info {
        flex: 1;
        margin: 0 8px;
        
        .upload-item-name {
          color: #333;
          font-size: 14px;
        }
      }

      .icon {
        &:last-child {
          margin-left: 8px;
          transition: all 0.2s;
          
          &:hover {
            transform: scale(1.1);
            color: #ff4d4f !important;
          }
        }
      }
    `}
`;n.div`
  width: 100%;
  height: 2px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({percent:t})=>t}%;
    background-color: #1890ff;
    transition: width 0.3s;
  }
`;const x=({accept:t,multiple:P=!1,disabled:m=!1,listType:o="text",defaultFileList:O=[],fileList:E,onChange:f,onRemove:b,children:h,className:I,style:$})=>{const[y,v]=U.useState(E??O),j=U.useRef(null),D=()=>{var a;m||(a=j.current)==null||a.click()},k=async a=>{(b==null?void 0:b(a))!==!1&&v(l=>l.filter(i=>i.uid!==a.uid))},T=a=>{const{files:g}=a.target;if(g==null)return;const l=Array.from(g).map(i=>({uid:W(),name:i.name,status:"done",size:i.size,type:i.type,percent:100,originFileObj:i,url:URL.createObjectURL(i),thumbUrl:URL.createObjectURL(i)}));v(i=>[...i,...l]),l.forEach(i=>{f==null||f({file:i,fileList:[...y,...l]})}),a.target.value=""},M=()=>h??(o==="picture-card"?e.jsxs("div",{className:"upload-card-content",children:[e.jsx(r,{name:"pluscircle",size:24}),e.jsx("div",{className:"upload-text",children:"Upload"})]}):e.jsx(A,{icon:e.jsx(r,{name:"upload"}),title:"Upload"}));return e.jsxs(G,{className:I,style:$,children:[e.jsx(J,{onClick:D,disabled:m,listType:o,className:m?"disabled":"",children:M()}),e.jsx(H,{ref:j,"data-testid":"upload-input",type:"file",accept:t,multiple:P,onChange:T,style:{display:"none"}}),e.jsx(K,{listType:o,children:y.map(a=>e.jsx(Q,{listType:o,children:o==="picture"||o==="picture-card"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"upload-item-image",children:a.url!=null?e.jsx("img",{src:a.url,alt:a.name}):e.jsx(r,{name:"file",size:30})}),e.jsxs("div",{className:"upload-item-actions",children:[e.jsx(r,{name:"eye",className:"action-icon",onClick:()=>{a.url!=null&&window.open(a.url,"_blank")}}),e.jsx(r,{name:"trash",className:"action-icon",onClick:()=>{k(a)}})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(r,{name:"link",size:16,style:{color:a.status==="error"?"#ff4d4f":"#999",marginRight:8}}),e.jsx("div",{className:"upload-item-info",children:e.jsx("span",{className:"upload-item-name",children:a.name})}),e.jsx(r,{name:"trash",style:{color:a.status==="error"?"#ff4d4f":"#999",cursor:"pointer"},onClick:()=>{k(a)}})]})},a.uid))})]})};try{x.displayName="Upload",x.__docgenInfo={description:"",displayName:"Upload",props:{accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"enum",value:[{value:'"POST"'},{value:'"PUT"'}]}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"Record<string, any> | ((file: File) => Record<string, any>)"}},headers:{defaultValue:null,description:"",name:"headers",required:!1,type:{name:"Record<string, string>"}},withCredentials:{defaultValue:null,description:"",name:"withCredentials",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},listType:{defaultValue:{value:"text"},description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"picture"'},{value:'"picture-card"'}]}},defaultFileList:{defaultValue:{value:"[]"},description:"",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},fileList:{defaultValue:null,description:"",name:"fileList",required:!1,type:{name:"UploadFile[]"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((info: { file: UploadFile; fileList: UploadFile[]; }) => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => boolean | Promise<boolean>)"}},beforeUpload:{defaultValue:null,description:"",name:"beforeUpload",required:!1,type:{name:"((file: File, fileList: File[]) => boolean | Promise<File | Blob>)"}},customRequest:{defaultValue:null,description:"",name:"customRequest",required:!1,type:{name:"((options: UploadRequestOption) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const re={title:"Data Entry/Upload",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{accept:{control:"text",description:"File types that can be accepted"},action:{control:"text",description:"Upload URL"},multiple:{control:"boolean",description:"Whether to support multiple file upload"},listType:{control:{type:"radio"},options:["text","picture","picture-card"],description:"Type of uploadList"},disabled:{control:"boolean",description:"Disable upload button"}}},s={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"}},d={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",accept:"image/*"}},c={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",multiple:!0}},p={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",disabled:!0}};var q,F,V;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
  }
}`,...(V=(F=s.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var L,w,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    listType: "picture-card",
    accept: "image/*"
  }
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var C,N,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    multiple: true
  }
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,S,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    disabled: true
  }
}`,...(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const oe=["Basic","PictureCard","MultipleFiles","Disabled"];export{s as Basic,p as Disabled,c as MultipleFiles,d as PictureCard,oe as __namedExportsOrder,re as default};
