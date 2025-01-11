import styled, { css } from "styled-components";

export const CardWrapper = styled.div<{
  $bordered?: boolean
  $hoverable?: boolean
  $size?: "default" | "small"
}>`
  position: relative;
  background: #fff;
  border-radius: 2px;
  ${props => (props.$bordered ?? false) && css`
    border: 1px solid #f0f0f0;
  `}
  
  ${props => (props.$hoverable ?? false) && css`
    cursor: pointer;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16), 
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}

  ${props => props.$size === "small" && css`
    .ant-card-head {
      min-height: 36px;
      padding: 0 12px;
      font-size: 14px;
    }
    .ant-card-head-title,
    .ant-card-extra {
      padding: 8px 0;
    }
    .ant-card-body {
      padding: 12px;
    }
  `}
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  margin-bottom: -1px;
  padding: 0 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
`;

export const CardHeadTitle = styled.div`
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardHeadExtra = styled.div`
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.85);
`;

export const CardCover = styled.div`
  margin-top: -1px;
  margin-right: -1px;
  margin-left: -1px;
  
  & > * {
    display: block;
    width: 100%;
  }
  
  img {
    border-radius: 2px 2px 0 0;
  }
`;

export const CardBody = styled.div`
  padding: 24px;
`;

export const CardActions = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  
  & > li {
    margin: 12px 0;
    text-align: center;
    
    &:not(:last-child) {
      border-right: 1px solid #f0f0f0;
    }
  }
`;

export const CardGrid = styled.div<{
  $hoverable?: boolean
}>`
  float: left;
  width: 33.33%;
  padding: 24px;
  border: 0;
  border-radius: 0;
  box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 
              1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 
              0 1px 0 0 #f0f0f0 inset;
  transition: all 0.3s;

  ${props => (props.$hoverable ?? false) && css`
    cursor: pointer;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16),
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}
`;

export const CardMetaWrapper = styled.div`
  display: flex;
  margin: -4px 0;
`;

export const CardMetaAvatar = styled.div`
  padding-right: 16px;
`;

export const CardMetaDetail = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const CardMetaTitle = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CardMetaDescription = styled.div`
  color: rgba(0, 0, 0, 0.45);
`;
