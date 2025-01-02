import{j as d,a,F}from"./jsx-runtime-8a1697f2.js";import{r as V}from"./index-8b3efc3f.js";import{d as n,l as m}from"./styled-components.browser.esm-16342693.js";import{I as r}from"./index-c9f9c958.js";import{B as W}from"./index-17ea4964.js";import{v as G}from"./v4-4a60fe23.js";import"./_commonjsHelpers-de833af9.js";const H=n.div`
  display: inline-block;
`,J=n.input`
  display: none;
`,K=n.div`
  ${({listType:t})=>t==="picture-card"&&m`
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

  ${({disabled:t})=>(t??!1)&&m`
      cursor: not-allowed;
      opacity: 0.5;
      
      &:hover {
        border-color: #d9d9d9 !important;
      }
      
      * {
        pointer-events: none;
      }
    `}
`,Q=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`,X=n.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #fafafa;
  border-radius: 4px;
  
  &:hover {
    background: #f0f0f0;
  }
  
  ${({listType:t})=>(t==="picture"||t==="picture-card")&&m`
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

  ${({listType:t})=>t==="text"&&m`
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
`;const y=({accept:t,multiple:I=!1,disabled:f=!1,listType:o="text",defaultFileList:$=[],fileList:D,onChange:b,onRemove:g,children:x,className:E,style:T})=>{const[v,k]=V.useState(D??$),U=V.useRef(null),M=()=>{var e;f||(e=U.current)==null||e.click()},q=async e=>{(g==null?void 0:g(e))!==!1&&k(l=>l.filter(i=>i.uid!==e.uid))},A=e=>{const{files:h}=e.target;if(h==null)return;const l=Array.from(h).map(i=>({uid:G(),name:i.name,status:"done",size:i.size,type:i.type,percent:100,originFileObj:i,url:URL.createObjectURL(i),thumbUrl:URL.createObjectURL(i)}));k(i=>[...i,...l]),l.forEach(i=>{b==null||b({file:i,fileList:[...v,...l]})}),e.target.value=""};return d(H,{className:E,style:T,children:[a(K,{onClick:M,disabled:f,listType:o,className:f?"disabled":"",children:(()=>x??(o==="picture-card"?d("div",{className:"upload-card-content",children:[a(r,{name:"pluscircle",size:24}),a("div",{className:"upload-text",children:"Upload"})]}):a(W,{icon:a(r,{name:"upload"}),title:"Upload"})))()}),a(J,{ref:U,"data-testid":"upload-input",type:"file",accept:t,multiple:I,onChange:A,style:{display:"none"}}),a(Q,{listType:o,children:v.map(e=>a(X,{listType:o,children:o==="picture"||o==="picture-card"?d(F,{children:[a("div",{className:"upload-item-image",children:e.url!=null?a("img",{src:e.url,alt:e.name}):a(r,{name:"file",size:30})}),d("div",{className:"upload-item-actions",children:[a(r,{name:"eye",className:"action-icon",onClick:()=>{e.url!=null&&window.open(e.url,"_blank")}}),a(r,{name:"trash",className:"action-icon",onClick:()=>{q(e)}})]})]}):d(F,{children:[a(r,{name:"link",size:16,style:{color:e.status==="error"?"#ff4d4f":"#999",marginRight:8}}),a("div",{className:"upload-item-info",children:a("span",{className:"upload-item-name",children:e.name})}),a(r,{name:"trash",style:{color:e.status==="error"?"#ff4d4f":"#999",cursor:"pointer"},onClick:()=>{q(e)}})]})},e.uid))})]})};try{y.displayName="Upload",y.__docgenInfo={description:"",displayName:"Upload",props:{accept:{defaultValue:null,description:"",name:"accept",required:!1,type:{name:"string"}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"enum",value:[{value:'"POST"'},{value:'"PUT"'}]}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"Record<string, any> | ((file: File) => Record<string, any>)"}},headers:{defaultValue:null,description:"",name:"headers",required:!1,type:{name:"Record<string, string>"}},withCredentials:{defaultValue:null,description:"",name:"withCredentials",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},listType:{defaultValue:{value:"text"},description:"",name:"listType",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"picture"'},{value:'"picture-card"'}]}},defaultFileList:{defaultValue:{value:"[]"},description:"",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},fileList:{defaultValue:null,description:"",name:"fileList",required:!1,type:{name:"UploadFile[]"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((info: { file: UploadFile; fileList: UploadFile[]; }) => void)"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => boolean | Promise<boolean>)"}},beforeUpload:{defaultValue:null,description:"",name:"beforeUpload",required:!1,type:{name:"((file: File, fileList: File[]) => boolean | Promise<File | Blob>)"}},customRequest:{defaultValue:null,description:"",name:"customRequest",required:!1,type:{name:"((options: UploadRequestOption) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ne={title:"Data Entry/Upload",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{accept:{control:"text",description:"File types that can be accepted"},action:{control:"text",description:"Upload URL"},multiple:{control:"boolean",description:"Whether to support multiple file upload"},listType:{control:{type:"radio"},options:["text","picture","picture-card"],description:"Type of uploadList"},disabled:{control:"boolean",description:"Disable upload button"}}},s={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"}},c={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture-card",accept:"image/*"}},p={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",multiple:!0}},u={args:{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",disabled:!0}};var L,w,C;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
  }
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,R,_;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    listType: "picture-card",
    accept: "image/*"
  }
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var j,z,B;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    multiple: true
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var S,P,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    disabled: true
  }
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const le=["Basic","PictureCard","MultipleFiles","Disabled"];export{s as Basic,u as Disabled,p as MultipleFiles,c as PictureCard,le as __namedExportsOrder,ne as default};
