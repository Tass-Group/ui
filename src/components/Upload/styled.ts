import styled, { css } from "styled-components";

export const UploadContainer = styled.div`
  display: inline-block;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadButton = styled.div<{
  disabled?: boolean
  listType?: "text" | "picture" | "picture-card"
}>`
  ${({ listType }) =>
    listType === "picture-card" &&
    css`
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

  ${({ disabled }) =>
    (disabled ?? false) &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      
      &:hover {
        border-color: #d9d9d9 !important;
      }
      
      * {
        pointer-events: none;
      }
    `}
`;

export const UploadList = styled.div<{ listType?: "text" | "picture" | "picture-card" }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const UploadListItem = styled.div<{ listType?: "text" | "picture" | "picture-card" }>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #fafafa;
  border-radius: 4px;
  
  &:hover {
    background: #f0f0f0;
  }
  
  ${({ listType }) =>
    (listType === "picture" || listType === "picture-card") &&
    css`
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

  ${({ listType }) =>
    listType === "text" &&
    css`
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
`;

export const ProgressBar = styled.div<{ percent: number }>`
  width: 100%;
  height: 2px;
  background-color: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ percent }) => percent}%;
    background-color: #1890ff;
    transition: width 0.3s;
  }
`;
