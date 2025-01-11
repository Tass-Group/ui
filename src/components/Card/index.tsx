import type React from "react";
import type { CardProps, CardMetaProps, CardGridProps } from "./types";
import {
  CardWrapper,
  CardHead,
  CardHeadTitle,
  CardHeadExtra,
  CardCover,
  CardBody,
  CardActions,
  CardGrid,
  CardMetaWrapper,
  CardMetaAvatar,
  CardMetaDetail,
  CardMetaTitle,
  CardMetaDescription
} from "./styled";
import Skeleton from "../Skeleton";

const Card: React.FC<CardProps> & {
  Meta: React.FC<CardMetaProps>
  Grid: React.FC<CardGridProps>
} = ({
  title,
  extra,
  bordered = true,
  cover,
  actions,
  loading = false,
  hoverable = false,
  size = "default",
  className,
  style,
  children
}) => {
  const loadingBlock = (
    <div>
      <Skeleton loading active>
        <div style={{ height: 200 }} />
      </Skeleton>
    </div>
  );

  const renderTitle = (): React.ReactNode => {
    if (title === null && extra === null) return null;

    return (
      <CardHead>
        {title !== null && <CardHeadTitle>{title}</CardHeadTitle>}
        {extra !== null && <CardHeadExtra>{extra}</CardHeadExtra>}
      </CardHead>
    );
  };

  const renderCover = (): React.ReactNode => {
    if (cover === null) return null;
    return <CardCover>{cover}</CardCover>;
  };

  const renderActions = (): React.ReactNode => {
    if (actions === null || actions?.length === 0) return null;
    return (
      <CardActions>
        {actions?.map((action, index) => (
          <li key={`action-${index}`} style={{ width: `${100 / actions.length}%` }}>
            {action}
          </li>
        ))}
      </CardActions>
    );
  };

  return (
    <CardWrapper
      className={className}
      style={style}
      $bordered={bordered}
      $hoverable={hoverable}
      $size={size}
    >
      {renderTitle()}
      {renderCover()}
      <CardBody>{loading ? loadingBlock : children}</CardBody>
      {renderActions()}
    </CardWrapper>
  );
};

const Meta: React.FC<CardMetaProps> = ({
  avatar,
  title,
  description,
  className,
  style
}) => {
  return (
    <CardMetaWrapper className={className} style={style}>
      {avatar !== null && <CardMetaAvatar>{avatar}</CardMetaAvatar>}
      {(title !== null || description !== null) && (
        <CardMetaDetail>
          {title !== null && <CardMetaTitle>{title}</CardMetaTitle>}
          {description !== null && <CardMetaDescription>{description}</CardMetaDescription>}
        </CardMetaDetail>
      )}
    </CardMetaWrapper>
  );
};

const Grid: React.FC<CardGridProps> = ({
  hoverable = true,
  className,
  style,
  children
}) => {
  return (
    <CardGrid
      className={className}
      style={style}
      $hoverable={hoverable}
    >
      {children}
    </CardGrid>
  );
};

Card.Meta = Meta;
Card.Grid = Grid;

export default Card;
