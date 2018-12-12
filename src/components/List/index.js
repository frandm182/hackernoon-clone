import React from "react";
import ListItem from '../ListItem';
import { ListWrapper } from "./styles";

const List = ({ stories }) => {

  console.log(stories, 'list')
  return (
  <ListWrapper>
    {stories && stories.map(story => (
      <ListItem key={story.id} {...story}/>
    ))}

  </ListWrapper>
)};

export default List
