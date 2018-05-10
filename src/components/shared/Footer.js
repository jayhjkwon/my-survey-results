import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <FooterContainer>
      <FooterText>
        {new Date().getFullYear()} MySurveyResults. All rights reserved.
      </FooterText>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-align: center;
  background: rgba(249, 249, 249, 0.7);
  border-top: solid 1px #eee;
  padding: 0.9rem 0;
  margin-top: 100px;
`

const FooterText = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`
