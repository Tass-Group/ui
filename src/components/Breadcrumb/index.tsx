import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbContainer, BreadcrumbItem, Separator } from "./styled";
import { type BreadcrumbProps } from "./types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  separator = "/"
}) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {(item.path != null) && !isLast
                ? (
                  <Link to={item.path}>{item.title}</Link>
                  )
                : (
                    item.title
                  )}
            </BreadcrumbItem>

            {!isLast && <Separator>{separator}</Separator>}
          </React.Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
