import React from 'react';
import styled from 'styled-components';
import theme from '../theme/default';

const Wrapper = styled.header `
  height: 55px;
  text-align: center; 
`

const Title = styled.h1 `
  font-family: 'Black Han Sans', sans-serif;
  color: ${theme.palette.primary};
  
  @media (max-width: 576px) {
    padding-top: 7px;
    font-size: 26px;
  }
`

const Header = () => (
  <Wrapper>
    <Title>Weather Comparator</Title>
  </Wrapper>
);

export default Header;