import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Footer() {
  const title = useSelector((state) => state.title);
  const titleName = title[0].title;

  return (
    <>
      <StyledFooter>
        <h2>{titleName}</h2>
      </StyledFooter>
    </>
  );
}

export default Footer;

const StyledFooter = styled.div`
  padding: 20px;
  background-color: #dcf7f3;
`;
