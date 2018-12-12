import React, { Component } from 'react';
import { ThemeProvider } from "styled-components";
import { colorsDark } from "../../styles/palette";
import List from '../List'

import { Title, Wrapper } from "./styles";
class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }
  render() {
    const { stories } = this.props;
    console.log('Render', stories);
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories}/>>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;