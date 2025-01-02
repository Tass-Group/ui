import{j as u,a as c}from"./jsx-runtime-8a1697f2.js";import{l as a,d as s}from"./styled-components.browser.esm-16342693.js";const f={default:a`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #d9d9d9;

    &:not(:disabled) {
      &:hover {
        background-color: #f9f9f9;
      }

      &:active {
        background-color: #f0f0f0;
      }
    }
  `,primary:a`
    background-color: #9090c0;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #8080b0;
      }

      &:active {
        background-color: #7070a0;
      }
    }
  `,danger:a`
    background-color: #ff4d4f;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ff7875;
      }

      &:active {
        background-color: #d9363e;
      }
    }
  `,success:a`
    background-color: #52c41a;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #73d13d;
      }

      &:active {
        background-color: #389e0d;
      }
    }
  `,warning:a`
    background-color: #faad14;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ffc53d;
      }

      &:active {
        background-color: #d48806;
      }
    }
  `},p={small:a`
    padding: 6px 12px;
    font-size: 14px;
  `,medium:a`
    padding: 10px 20px;
    font-size: 16px;
  `,large:a`
    padding: 14px 28px;
    font-size: 18px;
  `},m={square:a`
    border-radius: 4px;
  `,round:a`
    border-radius: 20px;
  `,circle:a`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
  `},g=s.button`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({type:e})=>f[e]}

  ${({color:e})=>a`
        background-color: ${e};

        &:not(:disabled) {
          &:hover {
            background-color: ${e};
            opacity: 0.9;
          }
          &:active {
            background-color: ${e};
            opacity: 0.8;
          }
        }
      `}
  
  ${({size:e})=>p[e]}

  ${({shape:e})=>m[e]}

  .button-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
`,o=({title:e="Button",type:l="default",size:n="medium",shape:t="square",disabled:d=!1,icon:r,...i})=>u(g,{type:l,size:n,shape:t,disabled:d,...i,children:[r&&c("span",{className:"button-icon",children:r}),e]}),v=o;try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:{value:"Button"},description:"",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'},{value:'"success"'},{value:'"warning"'},{value:'"primary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}},shape:{defaultValue:{value:"square"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'},{value:'"round"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{v as B};
