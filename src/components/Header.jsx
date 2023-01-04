import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Header() {
  const title = useSelector((state) => state.title);

  const titleName = title[0].title;

  return (
    <StyledHeader>
      <h2>{titleName}</h2>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  background-color: #e8ffee;
  padding: 30px;
  font-size: larger;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
