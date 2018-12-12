import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = 'nofolow noreferrer noopener';

const ListItem = ({ title, url, score }) => {
  return (
    <Item>
      <ExternalLink href={url} rel={LINK_REL} target='_blank'>
        <Title>
          {title} <Host>(gitconnected.com)</Host>
        </Title>
      </ExternalLink>
      <Description>
        {score} point by ${' '}
        <CommentLink href='#' rel={LINK_REL} target='_blank'>
          Test user
        </CommentLink>
        1 hour ago {' | '}
        <CommentLink href='#' rel={LINK_REL} target='_blank'>
          42 Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;
