import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title={'Maybe you like'}
            elements={[
              <FollowSuggestion name="Lucas Vieira" nickname="@LucaVieira" />,
              <FollowSuggestion name="Lucas Vieira" nickname="@LucaVieira" />,
              <FollowSuggestion name="Lucas Vieira" nickname="@LucaVieira" />,
            ]}
          />
          <List
            title={'Maybe you like'}
            elements={[<News />, <News />, <News />]}
          />
          <List
            title={'Maybe you like'}
            elements={[<News />, <News />, <News />]}
          />
          <List
            title={'Maybe you like'}
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
