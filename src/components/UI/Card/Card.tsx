import { FC, Fragment } from "react";
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from "react-share";
import styled from "styled-components";
import { Maybe } from "../../../generated/graphql";
import { formatDateTime } from "../../../utils/dateTransforms";

export type CardType = {
  title: string;
  subtitle?: string;
  exSubTitle?: string;
  content: string;
  url: Maybe<string> | undefined;
  isPrivate?: boolean;
  createdAt?: number;
  updatedAt?: number;
  createdBy: string;
};

type Props = {
  card: CardType;
  onClick: () => void;
};

const Card: FC<Props> = ({ card, onClick }) => {
  const { title, subtitle, content, url, isPrivate, exSubTitle, createdAt, updatedAt, createdBy } = card;

  return (
    <StyledCard onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">
          {title} {exSubTitle && <StyledSubTitle>{exSubTitle}</StyledSubTitle>}{" "}
          {isPrivate && <StyledPrivateBadge>Private</StyledPrivateBadge>}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">
            posted by: {createdBy} {createdAt ? `on ${formatDateTime(createdAt)}` : null}
          </small>
          {updatedAt ? (
            new Date(updatedAt).getTime() !== new Date(createdAt ?? "").getTime() ? (
              <Fragment>
                <br />
                <small className="text-muted">updated on: {formatDateTime(updatedAt)}</small>
              </Fragment>
            ) : null
          ) : null}
        </p>
      </div>
    </StyledCard>
  );
};

const TwitterShareButtonStyled = styled(TwitterShareButton)`
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

const FacebookShareButtonStyled = styled(FacebookShareButton)`
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const StyledCard = styled.div.attrs(() => ({
  className: "card",
}))`
  :hover {
    background-color: rgba(242, 241, 239);
    cursor: pointer;
  }
`;

export const StyledSubTitle = styled.span.attrs(() => ({
  className: "badge rounded-pill bg-warning text-dark",
}))`
  font-size: small;
  font-weight: 500;
`;

export const StyledPrivateBadge = styled.span.attrs(() => ({
  className: "badge rounded-pill bg-danger",
}))`
  font-size: small;
  font-weight: 500;
`;

export default Card;
