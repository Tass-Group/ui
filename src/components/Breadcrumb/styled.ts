import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const BreadcrumbItem = styled.span`
  color: rgba(0, 0, 0, 0.45);
  
  &:last-child {
    color: rgba(0, 0, 0, 0.85);
  }
  
  a {
    color: rgba(0, 0, 0, 0.45);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #1890ff;
    }
  }
`;

export const Separator = styled.span`
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
`;
