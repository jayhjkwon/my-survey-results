import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <Title>MySurveyResults.com.au</Title>
      </StyledLink>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 0 0 0 10%;

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  padding: 0.9rem;
  letter-spacing: 2px;
`

const StyledLink = styled(Link)`
  color: #333;

  :hover,
  :focus {
    text-decoration: none;
  }
`
