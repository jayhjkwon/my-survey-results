import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

export default props => (
  <React.Fragment>
    <Header />
    <ContentContainer>{props.children}</ContentContainer>
    <Footer />
  </React.Fragment>
)

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  text-align: center;
`
